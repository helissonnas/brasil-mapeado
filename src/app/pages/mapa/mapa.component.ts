import { Component, OnInit, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import {GeoCodingService} from '../../services/geo-coding.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import { AvaliacaoService } from '../../services/avaliacao.service';
import axios from 'axios';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Avaliacao } from '../../models/avaliacao';

declare var ol: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @ViewChild('modal')
  modal: ElementRef;

  ol: any;
  lat;
  lng;
  modalRef: BsModalRef;
  equipamento;
  ubs = 'assets/images/ubsicon.png';
  ava: Avaliacao = new Avaliacao();
  avaliacao = 0;

  constructor(private avService: AvaliacaoService,
              private modalService: BsModalService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lat = parseFloat(params['lat']);
      this.lng = parseFloat(params['lng']);

      if (this.lat && this.lng) {

        const starting_pos = ol.proj.transform([this.lng, this.lat], 'EPSG:4326', 'EPSG:900913');
        const layers = this.addLayers();
        const view = new ol.View({
          projection: 'EPSG:900913',
          center: starting_pos,
          zoom: 14
        });
        const map = new ol.Map(
          {
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              }),
              new ol.layer.Group({
                title : 'Equipamentos Públicos',
                layers : layers,
              })
            ],

            target: 'map',

            view: view
          });

          this.addLayers();

          const switcher = new ol.control.LayerSwitcher();
          const popup = new ol.Overlay.Popup();

          map.addControl(switcher);

          const overlay = new ol.Overlay({
            element: document.getElementById('info'),
            positioning: 'bottom-left'
          });

          overlay.setMap(map);

          const instance = this;
          map.on('singleclick', function(evt) {
            const pixel = map.getEventPixel(evt.originalEvent);
            const camada = map.forEachLayerAtPixel(pixel, function(item) {
              return item;
            });

            if (camada && camada.getSource()) {
              console.log();
              const qLay = camada.getSource().getParams().layers;
              const url = camada.getSource().getGetFeatureInfoUrl(evt.coordinate,
                  view.getResolution(),
                  view.getProjection(),
                  {
                    'INFO_FORMAT' : 'application/json',
                    'QUERY_LAYERS' : qLay
                  }
                );
              if (url) {
                axios.get(url).then((response) => {
                  instance.equipamento = response.data.features[0].properties;
                  instance.equipamento.tipo = qLay.substring(qLay.lastIndexOf(':') + 1);
                  instance.openModal();
                });
              }
            }
          });
        }
    });
  }

  openModal() {
    this.modalRef = this.modalService.show(this.modal, {class: 'modal-dialog modal-lg'});
  }

  getLayer(layerName, name, icon) {
    const metadata = [];
    metadata['icon'] = icon;
    const layer = new ol.layer.Tile({
      title: name,
      source: new ol.source.TileWMS({
        url: environment.api.geoserverURL,
        params: {
          layers : 'DadosAbertos:' + layerName,
          transparent : true
        },
        projection: 'EPSG:4326',
        serverType: 'geoserver',
        singleTile : true,
        ratio : 1,
        displayOutsideMaxExtent : true,
        visibility : false,
        metadata: metadata
      })
    });

    return layer;
  }

  addLayers() {
    const ubs = this.getLayer('ubs', 'Unidades Básicas de Saúde', 'assets/images/ubsIcon.png');
    const creas = this.getLayer('creas', 'CREAS', 'assets/images/creasIcon.png');
    const cras = this.getLayer('cras', 'CRAS', 'assets/images/crasIcon.png');
    const redeprivada = this.getLayer('redeprivada', 'Rede Privada de Assistência Social', 'assets/images/assistenciaSocialIcon.png');
    const fundacentro = this.getLayer('fundacentro', 'Estruturas de Fundacentro', 'assets/images/fundacentroIcon.png');
    const comunidadesTerapeuticas = this.getLayer('comunidadesTerapeuticas',
      'Comunidades Terapeuticas', 'assets/images/comunidadeTerapeuticaIcon.png');
    const cartorio = this.getLayer('cartorio', 'Cartório', 'assets/images/cartorioIcon.png');
    const sine = this.getLayer('sine', 'Sistema Nacional de Empregos', 'assets/images/sineIcon.png');
    const receitaFederal = this.getLayer('receitafederal',
      'Unidades de Atendimento da Receita Federal', 'assets/images/receitaFederalIcon.png');
    const ies = this.getLayer('ies', 'Universidades e Institutos Federais', 'assets/images/iesIcon.png');
    const mte = this.getLayer('mte', 'Agências de atendimento do Ministério do Trabalho e Emprego', 'assets/images/mteIcon.png');
    const dpf = this.getLayer('departamentopoliciafederal', 'Delegacias da Polícia Federal', 'assets/images/policiaFederalIcon.png');

    return [ubs, cras, creas, redeprivada, fundacentro, comunidadesTerapeuticas, cartorio, sine, receitaFederal, ies, mte, dpf];
  }

  analisaDesempenho(valor) {
    if (valor > this.avaliacao) {
      return 'fa fa-star-o';
    }

    return 'fa fa-star';
  }

  avaliar(valor) {
    this.avaliacao = valor;
  }

  comentar() {
    this.ava.servicoId = this.equipamento.id;
    this.ava.camada = this.equipamento.tipo;
    this.ava.data = new Date();
    this.ava.curtidas = 0;
    this.ava.descurtidas = 0;
    this.ava.avaliacao = this.avaliacao;

    this.avService.post(this.ava).then((response) => {
      if (response.status === 200) {
        window.location.reload();
      }
    });
  }

  verComentarios() {
    const eqp = JSON.stringify(this.equipamento);
    window.localStorage.setItem('equipamento', eqp);

    this.modalRef.hide();
    this.router.navigate(['/comentarios']);
  }
}

import { Component, OnInit } from '@angular/core';
import {GeoCodingService} from '../../services/geo-coding.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';

declare var ol: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  ol: any;
  lat;
  lng;
  map;

  constructor(private geoServ: GeoCodingService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lat = parseFloat(params['lat']);
      this.lng = parseFloat(params['lng']);
      if (this.lat && this.lng) {

        const starting_pos = ol.proj.transform([this.lng, this.lat], 'EPSG:4326', 'EPSG:900913');
        const layers = this.addLayers();

        this.map = new ol.Map(
          {
            controls: ol.control.defaults().extend([
              new ol.control.ScaleLine({
                projection: 'EPSG:4326',
                units : 'metric'
              })
            ]),
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

            view: new ol.View({
              projection: 'EPSG:900913',
              center: starting_pos,
              zoom: 16
            })
          });

          this.addLayers();

          const switcher = new ol.control.LayerSwitcher();
          const popup = new ol.Overlay.Popup();

          this.map.addControl(switcher);
          this.map.addOverlay(popup);
      }
    });
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
}

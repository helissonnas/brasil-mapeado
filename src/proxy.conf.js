const proxy = [
  {
    context: '/geoserver',
    target: 'http://150.165.75.163:8080/geoserver/DadosAbertos/wms',
    changeOrigin: true
  }
];
module.exports = proxy;
var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([1.08,49.38]),
      maxZoom: 16,
      zoom: 15
    })
  });
  var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([1.075,49.3825]))
            })
        ]
    }),    
});
map.addLayer(layer);
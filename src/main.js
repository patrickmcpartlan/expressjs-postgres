 // Layers
 var layers = [
    new ol.layer.Tile({
			title:'terrain-background',
			source: new ol.source.Stamen({ layer: 'terrain' })
		})
  ]



  var ecoRegions = new ol.layer.Vector({
      title: 'Drainage Districts',
      source: new ol.source.Vector({
         url: "https://openlayers.org/data/vector/ecoregions.json",
         projection: 'EPSG:4326',
         format: new ol.format.GeoJSON(),
  style: {
    'stroke-width': 0.75,
    'stroke-color': 'white',
    'fill-color': 'rgba(100,100,100,0.25)',
  },
         
      })
  });
  console.log(5-3); 


    // The map
    var map = new ol.Map({
        target: 'map',
        view: new ol.View({
          zoom: 6.5,
          center: [-9905516, 4889264]
        }),
        layers: ecoRegions, layers,
      });  

    // GeoJSON layer
    var vectorSource = new ol.source.Vector({
        url: 'IADD_Output.geojson',
        format: new ol.format.GeoJSON(),
        projection: 'EPSG:4326',

        attributions: [ "&copy; <a href='https://www.insee.fr'>INSEE</a>", "&copy; <a href='https://www.data.gouv.fr/fr/datasets/geofla-r/'>IGN</a>" ],
      });
    
      map.addLayer(new ol.layer.Vector({
        name: 'Departements',
        source: vectorSource,
        style: function(f) {
          return new ol.style.Style({ 

            stroke: new ol.style.Stroke({
              width: 1,
              color: [255,128,0]
            }),
            fill: new ol.style.Fill({
              color: [255,128,0,.2]
            })
          })
        }
      }));


  // GeoJSON layer
  // var vectorSource = new ol.source.Vector({
  //   url: '/data/IADD_Output.geojson',
  //   format: new ol.format.GeoJSON(),
	// 	attributions: [ "&copy; <a href='https://data.culture.gouv.fr/explore/dataset/fonds-de-la-guerre-14-18-extrait-de-la-base-memoire'>data.culture.gouv.fr</a>" ]
  // });

  // map.addLayer(new ol.layer.Vector({
  //   name: 'Drainage Districts Boundaries',
  //   source: vectorSource,
  //   style: function(f) {
  //     return new ol.style.Style({ 
  //       fill: new ol.style.Fill({
  //       color: 'rgba(255, 255, 255, 0.0)'
  //       }),
  //     stroke: new ol.style.Stroke({
  //     color: '#0000ff',
  //     width: 4
  // })
  //     })
  //   }
  // }));


console.log(vectorSource);

var USdata = {
  AK: 'Alaska',
  AL: '123',
  AR: '7576',
  AZ: '345',
  CA: '453',
  CO: '453',
  CT: '765',
  DC: '234',
  DE: '35434',
  //'FL': 'Florida', Simulate a missing value defaults to 2 letter abbr
  GA: '',
  HI: '234',
  IA: '234',
  ID: 'Idaho',
  IL: '234',
  IN: '234',
  KS: '234',
  KY: '234',
  LA: '234',
  MA: '234',
  MD: '7566',
  ME: '567',
  MI: '567',
  MN: '46',
  MO: '456',
  MS: '567',
  MT: '345',
  NC: '456',
  ND: '345',
  NE: '65',
  NH: '356',
  NJ: '54',
  NM: '4356',
  NV: '5463',
  NY: '3456',
  OH: '2345',
  OK: '2345',
  OR: '564',
  PA: '456',
  RI: '234',
  SC: '234',
  SD: '5467',
  TN: '5467',
  TX: '2345',
  UT: '345',
  VA: '432',
  VT: '654',
  WA: '456',
  WI: '543',
  WV: '345',
  WY: '1234',
}

var map = new Datamap({
  scope: 'usa',
  element: document.getElementById('container1'),
  geographyConfig: {
    dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
    hideAntarctica: true,
    borderWidth: 1,
    borderColor: '#FDFDFD',
    popupTemplate: function(geography, data) { //this function should just return a string
        return '';
    },
    popupOnHover: false, //disable the popup while hovering
    highlightOnHover: true,
    highlightFillColor: '#FC8D59',
    highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
    highlightBorderWidth: 2
  },
  projection: 'mercator',
  height: 500,
  fills: {
    defaultFill: "#ABDDA4",
    win: '#0fa0fa'
  },
  data: {
    'TX': { fillKey: 'win' },
    'FL': { fillKey: 'win' },
    'NC': { fillKey: 'win' },
    'CA': { fillKey: 'win' },
    'NY': { fillKey: 'win' },
    'CO': { fillKey: 'win' }
  },
  done: function(datamap) {
      datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
          console.log(d3.event.pageY)
          var bubbly = $("#map-bubble");      
          bubbly.css({
              visibility: "visible",
              position:"absolute", 
              top: d3.event.pageY, 
              left: d3.event.pageX 
          });
          console.log(bubbly)
          bubbly.fadeIn("slow");
          console.log(geography.properties.name);
      });
  }
  
})

//map.labels();
map.labels({ customLabelText: USdata })

let data = {
  xml: null,
};

function displayResult() {
  debugger
  let xml = $.parseXML(data.xml);
  let $xml = $(xml);
  document.getElementById("output").appendChild(resultDocument);
}

async function loadData() {
  data.xml = await loadXMLString('plants.xml');
  displayResult();
}

loadData();

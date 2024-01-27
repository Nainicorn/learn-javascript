let data = {
  xml: null,
  xsl: null,
};

function displayResult() {
  const xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(data.xsl);

  const resultDocument = xsltProcessor.transformToFragment(data.xml, document);
  document.getElementById("output").appendChild(resultDocument);
}

async function loadData() {
  data.xml = await loadXML('plants.xml');
  data.xsl = await loadXML('plants.xsl');
  displayResult();
}

loadData();

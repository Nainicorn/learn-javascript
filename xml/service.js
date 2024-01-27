async function loadXML(strPath) {
  let response = await axios.get(strPath);
  return new DOMParser().parseFromString(response.data, "text/xml");
}

async function loadXMLString(strPath) {
  let response = await axios.get(strPath);
  return response.data;
}

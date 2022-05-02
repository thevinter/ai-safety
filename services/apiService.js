const WIKIMEDIA_URL = "https://stampy.ai/w/api.php?";

export async function getAnswer(pageName, type = "brief", format = "json") {
  return fetch(
    `${WIKIMEDIA_URL}action=parse&page=${pageName}&prop=${format}&prop=text&formatversion=2&format=${format}&origin=*`
  )
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((json) => {
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(json.parse.text, "text/xml");
      console.log(htmlDoc.getElementById("canonicalanswer"));
      return json;
    });
}

(function(window, undefined) {
  var dictionary = {
    "971139dd-977b-407f-80e7-63e29dc83c71": "Review",
    "0ac8b66e-cc33-42b7-be11-a1d128d75dc3": "Record_1",
    "367d7dab-1c39-42ba-a1d5-68fa48c2068b": "Transcribe",
    "cd6ca52f-897c-456a-828e-3f0a02886c8a": "end record",
    "9d28068b-713b-41e0-83d0-a618f5dc8343": "load",
    "4ce6a24d-55fe-4668-9488-37afa210a876": "Home",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "fe81a326-4726-4f97-9d1d-6e10ab9a0bc0": "Top",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
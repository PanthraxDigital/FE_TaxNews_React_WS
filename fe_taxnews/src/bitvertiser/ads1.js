(function(d) {
  var params = {
    bvwidgetid: "ntv_1986077",
    bvlinksownid: 1986077,
    rows: 1,
    cols: 1,
    textpos: "below",
    imagewidth: 150,
    mobilecols: 1,
    cb: new Date().getTime()
  };
  params.bvwidgetid = "ntv_1986077" + params.cb;
  d.getElementById("ntv_1986077").id = params.bvwidgetid;
  var qs = Object.keys(params)
    .reduce(function(a, k) {
      a.push(k + "=" + encodeURIComponent(params[k]));
      return a;
    }, [])
    .join(String.fromCharCode(38));
  var s = d.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  var p = "https:" == document.location.protocol ? "https" : "http";
  s.src =
    p +
    "://bvadtgs.scdn1.secure.raxcdn.com/bidvertiser/tags/active/bdvws.js?" +
    qs;
  d.getElementById(params.bvwidgetid).appendChild(s);
});

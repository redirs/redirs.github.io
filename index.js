let useragent = window.navigator.userAgent;
if (!useragent.includes("CrOS")) {
    fetch("https://api.countapi.xyz/hit/redirs.github.io/unauth");
    window.location.replace("https://delran.instructure.com");
}else {
  let html = document.getElementsByTagName("html")[0];
  html.style.display = "block";
}

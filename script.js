// Configure links here
const EXT_ZIP_URL = "downloads/extensao_conferencia_nfse.zip"; // arquivo já incluso no projeto

function byId(id){ return document.getElementById(id); }

function init(){
  const year = byId("year");
  if (year) year.textContent = new Date().getFullYear();

  const btnZip = byId("btnZip");
  if (btnZip) btnZip.href = EXT_ZIP_URL;

  // Cookie banner (mínimo, para aprovação)
  const banner = byId("cookieBanner");
  const accept = byId("cookieAccept");
  const reject = byId("cookieReject");

  try{
    const pref = localStorage.getItem("cookie_pref_v1");
    if (!pref && banner) banner.style.display = "block";
  }catch{}

  function setPref(v){
    try{ localStorage.setItem("cookie_pref_v1", v); }catch{}
    if (banner) banner.style.display = "none";
  }

  if (accept) accept.addEventListener("click", () => setPref("accepted"));
  if (reject) reject.addEventListener("click", () => setPref("rejected"));
}

document.addEventListener("DOMContentLoaded", init);

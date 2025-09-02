const iframe = document.getElementById("content-frame");

function injetarCSS(doc, page) {
  const linkEl = doc.createElement("link");
  linkEl.rel = "stylesheet";
  linkEl.type = "text/css";

  if (page.includes("teste.html")) {
    linkEl.href = "/css/teste/teste.css";
  }

  if (page.includes("home.html")) {
    linkEl.href = "/css/home/home.css";
  }

  doc.head.appendChild(linkEl);
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    console.log(page);

    iframe.src = page;

    iframe.onload = function () {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      injetarCSS(doc, page);
    };
  });
});

window.addEventListener("DOMContentLoaded", () => {
  iframe.onload = function () {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    const page = iframe.getAttribute("src");
    injetarCSS(doc, page);
  };
});

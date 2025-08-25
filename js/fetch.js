const loadPage = async (page) => {
  try {
    const response = await fetch(page);
    const html = await response.text();
    document.getElementById("content").innerHTML = html;
  } catch (error) {
    console.error("Erro ao carregar a página", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadPage("./pages/home/home.html");
});

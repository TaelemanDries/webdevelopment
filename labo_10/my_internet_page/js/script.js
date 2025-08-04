const setup = () => {
    const searchInput = document.getElementById("searchInput");
    const historyContainer = document.getElementById("history");
    let historyArray = JSON.parse(localStorage.getItem("history")) || [];

    const engineMap = {
        "/g": { title: "Google", url: "https://www.google.com/search?q=", class: "google" },
        "/y": { title: "YouTube", url: "https://www.youtube.com/results?search_query=", class: "youtube" },
        "/x": { title: "X", url: "https://x.com/hashtag/", class: "x" },
        "/i": { title: "Instagram", url: "https://www.instagram.com/explore/tags/", class: "instagram" },
    };

    function renderCard({ title, text, url, className }) {
        const col = document.createElement("div");
        col.className = "col";

        col.innerHTML = `
    <div class="card ${className} h-100">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${text}</p>
        <a href="${url}" target="_blank" class="btn btn-light">Go!</a>
      </div>
    </div>
  `;

        historyContainer.prepend(col);
    }

    function processCommand() {
        const input = searchInput.value.trim();
        const [prefix, searchTerms] = input.split(" ");
        const search = searchTerms.join(" ");

        const engine = engineMap[prefix];
        if (!engine || !search) {
            alert("Ongeldig commando. Gebruik /g, /y, /x of /i gevolgd door een zoekterm.");
            return;
        }

        let finalURL = engine.url + encodeURIComponent(search);
        if (prefix === "/x" || prefix === "/i") finalURL += "/";

        const entry = {
            title: engine.title,
            text: search,
            url: finalURL,
            className: engine.class,
        };

        historyArray.push(entry);
        localStorage.setItem("history", JSON.stringify(historyArray));

        renderCard(entry);
        window.open(finalURL, "_blank");
        searchInput.value = "";
    }

    document.getElementById("goButton").addEventListener("click", processCommand);
    historyArray.forEach(renderCard);

}
window.addEventListener("load", setup);
import { database } from "./database.js";

export const MachoMoods = () => {
  let machoHTML = "";

  for (const mood of database) {
    machoHTML += `
    <article class="macho-card">
    <h3 class="macho-name">${mood.name}</h3>
    <img src="${mood.imageUrl}" alt="${mood.name} image" class="macho-img">
        <div class="macho-info">
            <p class="macho-category"><i>Macho Advice: <br>${mood.text}</i></p>
            <div class="quote-container">
                <p id="macho-quote-1" class="macho-quotes"><b>Quote 1:</b> <br>${mood.quotes[0]}</p>
                <p id="macho-quote-2" class="macho-quotes"><b>Quote 2:</b> <br>${mood.quotes[1]}</p>
            </div>
        </div>
    </article>
    `;
  }

  return machoHTML;
};

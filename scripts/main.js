import { MachoMoods } from "./moods.js";

const machoHTML = MachoMoods();
const container = document.querySelector("#container");
container.innerHTML = machoHTML;

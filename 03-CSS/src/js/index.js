import { SkinChanger } from "./SkinChanger.js";

let skinStyle = document.querySelector("#skin"),
    skins = ["newskin","gold","peach","basic","win95","mech","keili"];

window.skinChanger = new SkinChanger(skinStyle, skins, "./src/css/");

document.querySelector(".next").addEventListener("click", () => skinChanger.next());
document.querySelector(".previous").addEventListener("click", () => skinChanger.previous());

skinChanger.activeSkin = "newskin";


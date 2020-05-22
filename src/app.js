import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/app-bar.js";
import "./script/component/go-up-btn.js";
import main from "./script/view/main.js";

process.env.API_KEY = "632b981647f46ff0d805f051ec053210";

document.addEventListener("DOMContentLoaded", main);
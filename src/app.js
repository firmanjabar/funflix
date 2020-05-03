import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/style.css";
import "./script/component/app-bar.js";
import "./script/component/modal.js";
import {
    main,
    search,
    detail
} from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", search);
document.addEventListener("DOMContentLoaded", main);
document.addEventListener("DOMContentLoaded", detail);
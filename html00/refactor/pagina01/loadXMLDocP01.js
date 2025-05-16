import { myFunction } from "./myFunctionP01.js";

export function loadXMLDoc() {
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function () {
                const xmlDoc = xhttp.responseXML;
                const cd = xmlDoc.getElementsByTagName("CD");
                myFunction(cd);
            }
            xhttp.open("GET", "cd_catalog.xml");
            xhttp.send();
        }

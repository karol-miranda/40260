import {myFunction} from "./myFunctionP02.js";

export const loadXMLDoc = async () => {

            document.getElementById("botonFuncion").style.display = "none";
            try {
                const response = await fetch('cd_catalog.xml');
                const text = await response.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, "application/xml");

                const cds = xmlDoc.getElementsByTagName("CD");
                myFunction(cds);
            } catch (error) {
                console.error('Error loading XML:', error);
            }
        };
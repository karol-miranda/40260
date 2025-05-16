export const myFunction = (cds) => {
            let table = "<tr><th>Artist</th><th>Title</th></tr>";
            Array.from(cds).forEach(cd => {
                const artist = cd.getElementsByTagName("ARTIST")[0]?.textContent || "N/A";
                const title = cd.getElementsByTagName("TITLE")[0]?.textContent || "N/A";
                table += `<tr><td>${artist}</td><td>${title}</td></tr>`;
            });
            document.getElementById("demo").innerHTML = table;
        };
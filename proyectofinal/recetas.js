
// Función para crear las tarjetas de mis recetas en la página de inicio.
// Recibe el nombre, la imagen y el enlace de la receta.
function crearTarjetaReceta(nombre, imagenSrc, enlace) {
    console.log("Creando tarjeta para: " + nombre); // Para ver en la consola si funciona
    return `
        <div class="tarjeta-receta">
            <img src="${imagenSrc}" alt="Imagen de ${nombre}, un postre muy rico.">
            <h3>${nombre}</h3>
            <a href="${enlace}" class="button" aria-label="Ver receta completa de ${nombre}">Ver Receta</a>
        </div>
    `;
}

// Función importante para cargar las recetas desde mi archivo XML y ponerlas en una tabla.
// Uso un "XMLHttpRequest" que es como pedirle un archivo al servidor.
function cargarRecetasDesdeXML() {
    const tablaBody = document.getElementById('tabla-recetas-body');
    // Si no encuentro el lugar donde poner las recetas, no hago nada.
    if (!tablaBody) {
        console.warn("¡Ups! No encontré el lugar para la tabla de recetas.");
        return;
    }

    const xhr = new XMLHttpRequest();
    // Le digo qué archivo quiero.
    xhr.open('GET', 'recetas.xml', true);
    
    // Esto se ejecuta cuando el archivo XML está listo.
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("¡XML cargado con éxito! Ahora a leer las recetas.");
            const xmlDoc = xhr.responseXML; // Aquí tengo el contenido del XML como un documento.

            // Si el XML no se pudo leer bien, muestro un error.
            if (!xmlDoc) {
                console.error("Error al leer el XML.");
                tablaBody.innerHTML = '<tr><td colspan="4">No se pudieron cargar las recetas. Algo salió mal con el archivo XML</td></tr>';
                return;
            }
            
            // Busco todos los elementos que se llaman 'postre' en mi XML.
            const recetas = xmlDoc.querySelectorAll('postre');

            // Limpio la tabla por si ya tenía algo (para que no se dupliquen al recargar).
            tablaBody.innerHTML = ''; 

            // Para cada postre que encontré...
            recetas.forEach(postre => {
                const row = tablaBody.insertRow(); // Creo una nueva fila en la tabla.

                // Saco la información de cada postre (nombre, descripción, etc.).
                // Si no encuentro algo, pongo 'N/A' (no aplica).
                const nombre = postre.querySelector('nombre')?.textContent || 'N/A';
                const descripcion = postre.querySelector('descripcion')?.textContent || 'N/A';
                const tiempo = postre.querySelector('tiempo')?.textContent || 'N/A';
                
                const ingredientesNode = postre.querySelector('ingredientes');
                let ingredientesClave = 'N/A';
                if (ingredientesNode) {
                    // Recojo todos los ingredientes y los junto.
                    const ingrs = Array.from(ingredientesNode.querySelectorAll('ingrediente'))
                                       .map(ing => ing.textContent);
                    // Solo muestro los primeros 3 ingredientes en la tabla para que no sea muy larga.
                    ingredientesClave = ingrs.slice(0, 3).join(', ') + (ingrs.length > 3 ? '...' : '');
                }

                // Pongo la información en cada celda de la fila.
                row.insertCell().textContent = nombre;
                row.insertCell().textContent = descripcion;
                row.insertCell().textContent = tiempo;
                row.insertCell().textContent = ingredientesClave;
            });
            console.log("¡Recetas cargadas y mostradas en la tabla!");
        } else if (xhr.readyState === 4) {
            // Si algo salió mal al cargar el XML (ej. no lo encontró), muestro un error.
            console.error('Error al cargar el archivo XML. Código de error:', xhr.status, xhr.statusText);
            tablaBody.innerHTML = '<tr><td colspan="4">¡Ups! No pude cargar las recetas. Intenta más tarde.</td></tr>';
        }
    };
    xhr.send(); // Envío la petición para obtener el XML
}

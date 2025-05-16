export function imagen(id) {
            const componente = "<figure>" +
                '<img src="https://picsum.photos/id/' + id + '/200/200" alt="x">' +
                "<figcaption>john</figcaption>" +
                "</figure>"
            return componente
        }
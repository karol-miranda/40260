export const Papuimagen = (id, name) => {
        const url = `https://picsum.photos/id/${id}/200/200`;
        return `
            <figure>
            <img src="${url}" alt="" class="redonda")">
            <figcaption>${name}</figcaption>
            </figure>
            `;
      };
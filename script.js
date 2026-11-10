const mediaData = [
    {
        url: "contenido/images.jpeg",
        badge: "Imagen 1 de 3",
        title: "Dispositivo Mudra Link (Vista de Hardware)",
        description: "Vista detallada de la pulsera inteligente Mudra Link con sus sensores SNC."
    },
    {
        url: "contenido/Screen.png",
        badge: "Imagen 2 de 3",
        title: "Interacción con Pantallas Virtuales y Gafas AR",
        description: "Demostración de uso controlando interfaces flotantes de realidad aumentada (AR)."
    },
    {
        url: "contenido/link06_1220x1220_crop_center.png.webp",
        badge: "Imagen 3 de 3",
        title: "Uso del Dispositivo en Entorno de Trabajo",
        description: "Fotografía mostrando el control mediante microgestos en mesa de trabajo."
    }
];

function selectMedia(index) {
    const imgEl = document.getElementById('gallery-img');
    const badge = document.getElementById('media-badge');
    const title = document.getElementById('media-title');
    const desc = document.getElementById('media-description');
    const buttons = document.querySelectorAll('.media-btn');

    const item = mediaData[index];

    imgEl.style.opacity = '0.2';

    setTimeout(() => {
        imgEl.src = item.url;
        badge.textContent = item.badge;
        title.textContent = item.title;
        desc.textContent = item.description;
        imgEl.style.opacity = '1';
    }, 150);

    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.className = "media-btn px-3 py-2 bg-cyan-500 text-slate-950 rounded-lg text-xs font-bold border border-cyan-400 transition-all";
        } else {
            btn.className = "media-btn px-3 py-2 bg-slate-800 text-slate-300 rounded-lg text-xs font-bold border border-slate-700 transition-all hover:bg-slate-700";
        }
    });
}
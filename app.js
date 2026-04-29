// 1. DEFINICIÓN DE ELEMENTOS (Al inicio para que estén disponibles globalmente)
const modal = document.getElementById("infoModal");
const modalBody = document.getElementById("modalBody");

// 2. BASE DE DATOS DE INFORMACIÓN
// Debe estar fuera de cualquier función para que todos puedan leerla
const infoDetallada = {
    
"3. Modulación": {
    titulo: "Modulación en GPS",
    descripcion: "La modulación es un proceso fundamental en las telecomunicaciones que permite transmitir información a través de señales electromagnéticas. En el contexto del GPS y los mapas en el celular, la modulación es clave para que los datos de posicionamiento y navegación puedan viajar desde los satélites hasta el dispositivo, y posteriormente a través de las redes móviles e internet.",
    subtemas: []
},

"3.1 Técnicas de modulación analógica": {
    titulo: "Modulación Analógica",
    descripcion: "Aunque el GPS moderno es digital, las señales que viajan desde los satélites son ondas electromagnéticas analógicas, por lo que dependen de principios de modulación analógica.",
    subtemas: [
        "Modulación AM",
        "Modulación FM"
    ]
},

"Modulación AM": {
    titulo: "Modulación AM",
    descripcion: "En el GPS no se usa directamente como en radio comercial, pero el concepto es importante porque: Las señales pueden sufrir variaciones de amplitud por interferencias. Estas variaciones afectan la calidad de la señal recibida en el celular.",
    subtemas: []
},

"Modulación FM": {
    titulo: "Modulación FM",
    descripcion: "Tampoco se usa directamente como en radio FM, pero: Cambios en la frecuencia pueden ocurrir por efecto Doppler (movimiento satélite-receptor). El celular debe compensar esto para calcular bien la posición.",
    subtemas: []
},

"3.2 Técnicas de modulación digital": {
    titulo: "Modulación Digital",
    descripcion: "Es la base del GPS moderno.",
    subtemas: [
        "ASK y FSK",
        "PSK",
        "QAM"
    ]
},

"ASK y FSK": {
    titulo: "ASK y FSK",
    descripcion: "ASK Representa datos variando la amplitud. Es más básica y sensible al ruido. FSK Representa datos cambiando la frecuencia. Se usa en sistemas de baja potencia (IoT, sensores).",
    subtemas: []
},

"PSK": {
    titulo: "PSK (Phase Shift Keying)",
    descripcion: "El sistema usa BPSK (Binary Phase Shift Keying). El GPS usa modulación por cambio de fase binaria para transmitir datos desde satélites a los receptores. También usa el Espectro Ensanchado. Cada satélite usa un código único para evitar interferencias y permitir múltiples señales en la misma frecuencia. Ejemplo: Tu celular recibe señales GPS moduladas en BPSK para calcular distancias a satélites.",
    subtemas: []
},

"QAM": {
    titulo: "QAM (Quadrature Amplitude Modulation)",
    descripcion: "Utilizada en 4G/5G, combina amplitud y fase para transmitir grandes cantidades de datos en redes móviles. El sistema usa OFDM este divide la señal en múltiples subportadoras para mejorar la eficiencia y reducir interferencias. Ejemplo: Tu celular usa QAM y OFDM para descargar mapas desde internet.",
    subtemas: []
},

"3.3 Conversión analógico-digital": {
    titulo: "Conversión analógico-digital en GPS",
    descripcion: "El celular convierte las señales del satélite en datos digitales mediante procesamiento interno.",
    subtemas: [
        "Muestreo",
        "Cuantización",
        "Codificación"
    ]
},

"Muestreo": {
    titulo: "Muestreo",
    descripcion: "Captura la señal del satélite en intervalos de tiempo.",
    subtemas: []
},

"Cuantización": {
    titulo: "Cuantización",
    descripcion: "Convierte la señal en valores discretos.",
    subtemas: []
},

"Codificación": {
    titulo: "Codificación",
    descripcion: "Transforma esos valores en bits para procesarlos.",
    subtemas: []
},

"3.4 Códigos de línea": {
    titulo: "Códigos de Línea",
    descripcion: "Se utilizan en redes de telecomunicaciones para transmitir datos de forma eficiente. Los códigos de línea no se usan directamente en la señal GPS satelital, pero sí en transmisión de datos en redes, infraestructura de internet y en servidores de mapas.",
    subtemas: [
        "NRZ",
        "Manchester",
        "HDB3"
    ]
},

"NRZ": {
    titulo: "NRZ",
    descripcion: "Representa bits con niveles constantes de señal. Ejemplo: Cuando tu celular descarga datos de mapas desde internet (por ejemplo, calles o rutas), los bits pueden transmitirse en forma NRZ dentro de circuitos internos o enlaces simples. Un “1” se mantiene como voltaje alto y un “0” como bajo durante todo el tiempo del bit, permitiendo enviar información de ubicación de forma continua.",
    subtemas: []
},

"Manchester": {
    titulo: "Manchester",
    descripcion: "Incluye transiciones en cada bit para sincronización. Ejemplo: En comunicaciones donde se necesita sincronización precisa (como en redes que apoyan servicios de localización), cada bit tiene un cambio de señal en medio. Esto ayuda a que el receptor del celular se mantenga sincronizado al recibir datos de posición o tiempo, lo cual es clave cuando se combinan señales GNSS con datos de red.",
    subtemas: []
},

"HDB3": {
    titulo: "HDB3",
    descripcion: "Evita largas secuencias de ceros en transmisión. Ejemplo: En la infraestructura de telecomunicaciones (como enlaces entre antenas o centrales que soportan servicios de mapas y A-GPS), HDB3 evita largas cadenas de ceros. Esto asegura que los datos de geolocalización (coordenadas, rutas, tráfico) lleguen sin perder sincronización, manteniendo estable la transmisión en redes de alta capacidad.",
    subtemas: []
},

"3.5 Módem, estándares y protocolos": {
    titulo: "Comunicación con redes móviles.",
    descripcion: "El módem conecta el celular con redes móviles para mejorar el posicionamiento mediante A-GPS.",
    subtemas: [
        "Función del módem",
        "Estándares",
        "Protocolos"
    ]
},

"Función del módem": {
    titulo: "Función del Módem",
    descripcion: "Permite conectar el celular a redes 4G/5G para descargar datos y mejorar la ubicación. Sin módem solo tendrías GPS lento (sin asistencia)",
    subtemas: []
},

"Estándares": {
    titulo: "Estándares",
    descripcion: "Incluyen IEEE 802.11 (WiFi): Posicionamiento en interiores, IEEE 1588 (PTP): Sincronización de tiempo, 3GPP (4G/5G): Comunicación móvil y GNSS (GPS, GLONASS, Galileo): Posicionamiento satelital.",
    subtemas: []
},

"Protocolos": {
    titulo: "Protocolos",
    descripcion: "Se utilizan TCP/IP: transmisión de datos, HTTP/ HTTPS: carga de mapas y NTP: transmisión de datos y sincronización.",
    subtemas: []
},
}
// 4. FUNCIONES DEL MODAL
let historial = [];
function renderizarContenido(nombreTema, desdeSubtema = false) {
    const data = infoDetallada[nombreTema];
    
    if (data) {

        // Guardar historial SOLO si no es regreso
        if (!desdeSubtema) {
            historial.push(nombreTema);
        }

        modalBody.innerHTML = `
            ${historial.length > 1 ? 
                `<button class="back-btn" onclick="regresar()">← Regresar</button>` 
                : ""
            }

            <h2>${data.titulo}</h2>
            <p>${data.descripcion}</p>
            ${data.subtemas.length > 0 ? `
    <hr>
    <h4>Explorar subtemas:</h4>
    <ul class="subtema-lista">
        ${data.subtemas.map(s => `
            <li class="clickable-subtopic" onclick="renderizarContenido('${s}')">
                <i class="fas fa-plus-circle"></i> ${s}
            </li>
        `).join('')}
    </ul>
` : ""}
        `;

        modal.style.display = "block";
    } else {
        alert("Información sobre '" + nombreTema + "' próximamente.");
    }
}
function regresar() {
    historial.pop(); // elimina el actual
    const anterior = historial[historial.length - 1];

    renderizarContenido(anterior, true);
}

// 5. EVENTOS DE LAS TARJETAS (Cards)
document.querySelectorAll('.subtopic-card').forEach(card => {
    card.addEventListener('click', () => {
        const nombreTema = card.querySelector('h3').innerText;
        renderizarContenido(nombreTema);
    });
});

// 6. CERRAR MODAL (Haciendo clic fuera o en la X)
const closeBtn = document.querySelector(".close-btn");
if(closeBtn) {
    closeBtn.onclick = () => {
        modal.style.display = "none";
        historial = [];
    }
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        historial = [];
    }
};
let indiceEntradas = 0;

async function readJSONFile(filePath) {
    try {
        // Fetch the JSON file
        const response = await fetch(filePath);
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the JSON content
        const data = await response.json();
        
        // Log the data to the console (or use it as needed)
        console.log(data);
        
        // Return the data for further use
        return data;
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const entradas = await readJSONFile('entradas.json');
    // Aquí puedes usar los datos del JSON como necesites
    console.log('Datos cargados:', entradas);
    cargarNotificaciones(entradas);
    //inicializar();

});

function cargarNotificaciones(entradas) {
    let cargador = '';
    let indice = 0;
    
    for (const key in entradas) {
        if(indice <=6){
             if (entradas.hasOwnProperty(key)) {
            const entrada = entradas[key];
            cargador += `<div class="feature-card">
                            <i class="fas fa-book"></i>
                            <h3>${entrada.titulo}</h3>
                            <p>${entrada.fecha}</p>
                            <p>${entrada.entradilla}</p>
                            <p>${entrada['sub-titulo']}</p>
                            <p>${entrada.autor}</p>
                        </div>`;
        } 
        }  

            indice++;
        }
    cargar(cargador);
}

function inicializar() {
    const cargador = `<div class="feature-card">
                    <i class="fas fa-book"></i>
                    <h3>Excelencia Académica</h3>
                    <p>Programas educativos de alta calidad</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-book"></i>
                    <h3>Excelencia Académica</h3>
                    <p>Programas educativos de alta calidad</p>
                </div>`;
    cargar(cargador);
}

function cargar(cargador) {
    document.getElementById('notificaciones').innerHTML = cargador;
}
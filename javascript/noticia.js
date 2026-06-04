let recibido = 0;

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
    const entradas = await readJSONFile('https://poiteaigua-glitch.github.io/persistenciaAigua/entradas.json');
    // Aquí puedes usar los datos del JSON como necesites
    recibido = localStorage.getItem('noticiaSeleccionada');
    console.log('Datos cargados:', entradas);
    console.log('Noticia al recibir:', localStorage.getItem('noticiaSeleccionada'));
    cargarNotificacion(entradas);
    //inicializar();

});

function cargarNotificacion(entradas) {
    let cargador = '<h3>Noticia no encontrada</h3>';
    let indice = 0;
    
    for (const key in entradas) {
        if(indice == recibido){
             if (entradas.hasOwnProperty(key)) {
            const entrada = entradas[key];
            cargador = `<div class="feature-card">
                            <i class="fas fa-book"></i>
                            <h3>${entrada.titulo}</h3>
                            <p>${entrada['sub-titulo']}</p>
                            <p>${entrada.fecha}</p>
                            <p>${entrada.entradilla}</p>
                            <p>${entrada.cuerpo}</p>
                            <img src="https://poiteaigua-glitch.github.io/persistenciaAigua/${entrada.foto}" alt="Imagen de la noticia">`;  


                            cargador+=`<p>Autor: ${entrada.autor}</p>
                        </div>`;
        } 
        }  

            indice++;
        }
    document.getElementById('noticia').innerHTML = cargador;
}



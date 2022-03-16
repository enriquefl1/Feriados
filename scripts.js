// JQuery
// Ocupamos el metodo .ready() para asegurarnos que la pagina se encuentre cargada

$(document).ready( function() {

    const URLBASE = `https://www.feriadosapp.com/api/holidays.json`;
    const tFilaFeriados =document.getElementById("filaFeriados")

    $.ajax({

        url : `${URLBASE}`, 
        type: "GET",
        dataType: "JSON",
        success: (setDatos) => {
            console.log(setDatos.data)
            console.log(setDatos.data[0].id)

            const feriados = setDatos.data
            console.log(feriados)

            feriados.forEach( (obj,i) => {
                console.log(tFilaFeriados)
                tFilaFeriados.innerHTML += ModeloFila(obj,i);
            });
            
        }
    })
});

const ModeloFila = (objeto, indice) => {
    return `<tr>
        <th scope="row">${indice+1}</th>
        <td>${objeto.id}</td>
        <td>${objeto.date}</td>
        <td>${objeto.title}</td>
        <td>${objeto.extra}</td>
        <td>${objeto.law}</td>
        <td>${objeto.law_id}</td>
        `
};
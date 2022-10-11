/* JSON */
var cines = {
    "Peliculas": [
        {"imagen" : "img/111c5c9ad99661af2d80e38948cf29d8.jpg",
         "nombre" : "Interstellar",
         "clasificacion" : "B",
         "duracion" : "169 min",
         "formato" : "3D",
         "butacas" : "tradicionales",
         "horario" : ["16:50", "18:10", "19:20", "20:30"]},
        {"imagen" : "img/shrek.jpg",
         "nombre" : "Shrek 2",
         "clasificacion" : "A",
         "duracion" : "105 min",
         "formato" : "2D",
         "butacas" : "tradicionales",
         "horario" : ["11:20", "13:50", "15:25", "17:15"]},
        {"imagen" : "img/Spider_Man_No_Way_Home-642739124-large.jpg",
         "nombre" : "Spiderman no way home",
         "clasificacion" : "C",
         "duracion" : "148 min",
         "formato" : "DOB",
         "butacas" : "tradicionales",
         "horario" : ["01:30", "04:20", "14:00", "21:50"]}
    ]
};

var div = document.getElementById("content");
div.innerHTML = mostrarDatos(cines.Peliculas);

function mostrarDatos(datos){
    var total = datos.length;
    data = "<div class=\"card mb-3 border border-0\" style=\"max-width: 100%;\">\n";
        for(var i=0; i<total; i++){
            data += "<div class=\"row g-0\">\n";
                data += "<div class=\"col-md-4\">\n";
                    data += "<img src=\"" + datos[i].imagen + "\" alt=\"...\" class=\"img-fluid\" />\n";
                data += "</div>\n";
            data += "<div class=\"col-md-8\">\n";
                data += "<div class=\"card-body\">\n";
                    data += "<h4 class=\"title\">" + datos[i].nombre + "</h4>\n";
            data += "<div class=\"clasifi\"><p>Clasificacion: <span class=\"tag-inf\">" + datos[i].clasificacion + "</span></p></div>\n";
            data += "<div class=\"time\"><p>Duración: <span class=\"tag-inf\">" + datos[i].duracion + "</span></p></div>\n";
            data += "<div class=\"card mb-3\" style=\"max-width: 100%;\">\n";
                data += "<div class=\"caja1\">\n"
                        data += "<div class=\"formato\">Formato: <span class=\"tag-inf\">" + datos[i].formato + "</span></div>\n";
                        data += "<div class=\"butaca\">Butacas: <span class=\"tag-inf\">" + datos[i].butacas + "</span></div>";
                    data += "</div>";
                        data += "<div class=\"horario\">\n";
                            data += "<h5>Horario:</h5>\n";
                                data += "<button>" + datos[i].horario[0] + "</button>\n";
                                data += "<button>" + datos[i].horario[1] + "</button>\n";
                                data += "<button>" + datos[i].horario[2] + "</button>\n";
                                data += "<button>" + datos[i].horario[3] + "</button>\n";
                            data += "</div>\n";
                        data += "</div>\n";
                    data += "</div>\n";
                data += "</div>\n";
            data += "</div>\n";  
        }
    data += "</div>\n";

    return data;
}
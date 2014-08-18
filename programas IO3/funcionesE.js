function crearEntradas(){
	var padre = document.getElementById("cajas_datos");
	var numero_datos = document.getElementById("numero_datos").value;
	for (var i = 0; i < numero_datos; i++) {
		var cuadro = document.createElement("input");
		padre.appendChild(cuadro);
	};

}
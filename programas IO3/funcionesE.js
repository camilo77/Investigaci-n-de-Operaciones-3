function crearEntradas(){
	// eliminando cajas existentes con anterioridad
	eliminarCajas();
	// obteniendo div donde van a ser guardadas las cajas
	var padre = document.getElementById("cajas_datos");
	// obteniendo numero de datos para crear las cajas
	var numero_datos = document.getElementById("numero_datos").value;

	for (var i = 0; i < numero_datos; i++) {
		// creando input para la entrada i
		var cuadro = document.createElement("input");
		// modificando atributos de los cuadros
		cuadro.setAttribute('type','number');
		cuadro.setAttribute('id','entrada'+i);
		cuadro.setAttribute('class','c-entradas');
		// guardando input en el div
		padre.appendChild(cuadro);
	};

	// creacion de boton de envio 
	var boton = document.createElement('input')
	boton.setAttribute('type','button');
	boton.setAttribute('value','Enviar');
	boton.setAttribute('onClick','funciones();');
	padre.appendChild(boton);
}

function eliminarCajas(){
	// obteniendo div del que quiero borrar las cajas hijas
	var elemento = document.getElementById("cajas_datos");
	// numero de cajas que tiene
	var nHijos = elemento.childNodes.length;
	for(var i = 0; i < nHijos; i++){
		// eliminado caja del div hijo
		elemento.removeChild(elemento.childNodes[0]);
	}
}

function funciones(){
	// verificando que todos los campos tengan un numero
	if ( validarCamposForm2() ){
		var nDatos = document.getElementById("cajas_datos").childNodes.length -1;
		// creando arreglo para guardar los datos
		var datos = new Array(nDatos);
		// guardando datos en arreglo
		for (var i = 0; i < nDatos; i++) {
			datos[i] = document.getElementById("entrada"+i).value;
		};

		// llamar funciones estadistica
	}
	else{
		alert("Campo/s vacio/s, llene todos los capos");
	}
}

function validarCamposForm2(){
	var div = document.getElementById("cajas_datos");
	var nDatos = div.childNodes.length -1;
	var validar = true;
	for (var i = 0; i < nDatos; i++) {
		var valor = div.childNodes[i].value;
		if(isNaN(valor) || valor == ''){
			validar = false;
		}
	};
	return validar;
}
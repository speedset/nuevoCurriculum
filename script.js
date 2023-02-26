const datos = {
	nombre: 'Danilo Garcia',
	email: 'garciadaniloadrian@gmail.com',
	fechaNacimiento: '02/02/1990',
	direccion: 'Acosta mariano 3500',
	telefono: '1153431387',
	estudio: 'Analista en sistemas',
	html5: 'Html5 en una semana aprendido',
	css: 'CSS en dos semanas aprendido',
	java: 'Java 2 años',
	javascript: 'Javascript 2 años',
	react: 'React 1 año',
	idioma: 'Ingles avanzado',
	edad: '33',
	genero: 'Masculino',
	pais: 'Argentina',
	localidad: 'Buenos Aires',
	barrio: 'Villa Soldati',
	comuna: '8',
	codigoPostal: '1437',
}

const formatFecha = (f) => {	
	let fecha = new Date(f);
	let dia = fecha.getDate() < 10 ? '0' + fecha.getDate() : fecha.getDate();
	let mes = (fecha.getMonth() + 1) < 10 ? '0' + (fecha.getMonth() + 1) : (fecha.getMonth() + 1);
	return dia + '/' + mes + '/' + fecha.getFullYear();
}

const validFecha = (f) => {
	const dateFormatRegex = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])[\/]\d{4}$/;
	let isValidDate = false;
	if (f.match(dateFormatRegex)) {
		const dateParts = f.split('/');
		if (dateParts.length == 3) {
			const day = parseInt(dateParts[0]);
			const month = parseInt(dateParts[1]);
			const year = parseInt(dateParts[2]);
			if (month < 1 || month > 12) {
				return false;
			}
			const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			let monthLength = daysInMonth[month - 1];
			if ((month == 2) && ((!(year % 4) && year % 100) || !(year % 400))) {
				monthLength = 29;
			}
			if (day < 1 || day > monthLength) {
				return false;
			}
			isValidDate = true;
		}
	}
	return isValidDate;
}

const validEmail = (e) => {
  if (e.match(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i)) {
    return true;
  } else {
    return false;
  }
}

window.addEventListener('load', () => {
	// OPTENER EL ELEMENTO DONDE CAMBIAR LOS DATOS DE LA PERSONA
	let display = document.getElementById('display');

	// OPTENER EL ELEMENTO DONDE SE CAMBIARAN LOS TIPOS DE DATOS DE LA PERSONA
	let typeData = document.getElementById('type-data');

	// OPTENER UNA LISTA DE HIJO DE LA LISTA
	let childs = document.getElementById('info-list').children;	

	const listHover = (e) => {
		handleDisplay(e.currentTarget.id);
		for (let child of childs) {
			child.classList.remove('nav-li-active');
			child.classList.add('nav-li');
		}
		e.currentTarget.classList.remove('nav-li');
		e.currentTarget.classList.add('nav-li-active');
	}

	for (let child of childs) {
		child.addEventListener('mouseover', listHover);
	}

	const displayName = () => {
		typeData.innerHTML = 'Hola, mi nombre es';
		display.innerHTML = datos.nombre;

		let botonEditable = document.createElement('i');
		botonEditable.setAttribute('class', 'fa-solid fa-pen botonEditable');		
		botonEditable.addEventListener('click', () => editName());
		display.append(botonEditable);
	}

	const displayEmail = () => {
		typeData.innerHTML = 'Mi email es';				
		display.innerHTML = datos.email;

		let botonEditable = document.createElement('i');
		botonEditable.setAttribute('class', 'fa-solid fa-pen botonEditable');		
		botonEditable.addEventListener('click', () => editEmail());
		display.append(botonEditable);
	}

	const displayFechaNacimiento = () => {
		typeData.innerHTML = 'Mi fecha de nacimiento es';
		display.innerHTML = datos.fechaNacimiento;

		let botonEditable = document.createElement('i');
		botonEditable.setAttribute('class', 'fa-solid fa-pen botonEditable');		
		botonEditable.addEventListener('click', () => editFechaNacimiento());
		display.append(botonEditable);
	}

	const displayDireccion = () => {
		typeData.innerHTML = 'Mi dirección es';
		display.innerHTML = datos.direccion;

		let botonEditable = document.createElement('i');
		botonEditable.setAttribute('class', 'fa-solid fa-pen botonEditable');		
		botonEditable.addEventListener('click', () => editDireccion());
		display.append(botonEditable);
	}

	const displayTelefono = () => {
		typeData.innerHTML = 'Mi telefono es';
		display.innerHTML = datos.telefono;

		let botonEditable = document.createElement('i');
		botonEditable.setAttribute('class', 'fa-solid fa-pen botonEditable');		
		botonEditable.addEventListener('click', () => editTelefono());
		display.append(botonEditable);
	}

	// METODO MANEJADOR PARA LO QUE SE MUESTRA EN PANTALLA
	// CUANDO SE REALIZA EL EVENTO HOVER EN ALGUNO DE LOS ICONOS
	// DE ACUERDO AL ID
	const handleDisplay = (id) => {
		switch (id) {
			case 'name':
				displayName();
				break;
			case 'email':
				displayEmail();
				break;
			case 'date':
				displayFechaNacimiento();
				break;
			case 'location':
				displayDireccion();
				break;
			case 'phone':
				displayTelefono();
				break;
			default:
				displayName();
				break;
		}
	}

	displayName();

	//AGREGA EVENTO EDITABLE AL NOMBRE
	document.getElementById('editName').addEventListener('click', () => editName());

	const editName = () => {
		display.innerHTML = '';
		let input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('name', 'item');
		input.setAttribute('class', 'inputEdit');
		input.value = datos.nombre;

		let botonEditar = document.createElement('i');
		botonEditar.setAttribute('class', 'fa-solid fa-check edit');
		botonEditar.setAttribute('id', 'editarDisplay')
		botonEditar.addEventListener('click', () => {
			datos.nombre = input.value;
			displayName();
		});

		let botonCancelar = document.createElement('i');
		botonCancelar.setAttribute('class', 'fa-solid fa-xmark editred');
		botonCancelar.setAttribute('id', 'cancelarDisplay')
		botonCancelar.addEventListener('click', () => {
			displayName();
		});

		display.append(input);
		display.append(botonEditar);
		display.append(botonCancelar);
	}

	//AGREGA EVENTO EDITABLE AL EMAIL
	document.getElementById('editEmail').addEventListener('click', () => editEmail());

	const editEmail = () => {
		display.innerHTML = '';
		let input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('name', 'item');
		input.setAttribute('class', 'inputEdit');
		input.value = datos.email;

		let botonEditar = document.createElement('i');
		botonEditar.setAttribute('class', 'fa-solid fa-check edit');
		botonEditar.setAttribute('id', 'editarDisplay')
		botonEditar.addEventListener('click', () => {
			if(validEmail(input.value)){
				datos.email = input.value;
			}			
			displayEmail();
		});

		let botonCancelar = document.createElement('i');
		botonCancelar.setAttribute('class', 'fa-solid fa-xmark editred');
		botonCancelar.setAttribute('id', 'cancelarDisplay')
		botonCancelar.addEventListener('click', () => {
			displayEmail();
		});

		let emailok = document.createElement('p')
		emailok.setAttribute('class', 'fechaOk')
		emailok.innerHTML = 'Email valido';

		let emailerror = document.createElement('p')
		emailerror.setAttribute('class', 'fechaError')
		emailerror.innerHTML = 'Email invalido';

		display.append(input);
		display.append(botonEditar);
		display.append(botonCancelar);
		display.append(emailok);
		display.append(emailerror);

		input.addEventListener('input', (e) => {			
			if (validEmail(e.target.value)) {
				input.classList.remove('inputError');
				input.classList.add('inputOk');
				emailerror.style.display = 'none';
				emailok.style.display = 'block';
			} else {
				input.classList.remove('inputOk');
				input.classList.add('inputError');
				emailok.style.display = 'none';
				emailerror.style.display = 'block';
			}
		})	
	}

	//AGREGA EVENTO EDITABLE A LA FECHA DE NACIMIENTO
	document.getElementById('editFechaNacimiento').addEventListener('click', () => editFechaNacimiento());

	const editFechaNacimiento = () => {
		display.innerHTML = '';
		let input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('name', 'item');
		input.setAttribute('class', 'inputEdit');
		input.value = datos.fechaNacimiento;		

		let botonEditar = document.createElement('i');
		botonEditar.setAttribute('class', 'fa-solid fa-check edit');
		botonEditar.setAttribute('id', 'editarDisplay')
		botonEditar.addEventListener('click', () => {
			if (validFecha(input.value)) {
				datos.fechaNacimiento = input.value;
			}
			displayFechaNacimiento();
		});

		let botonCancelar = document.createElement('i');
		botonCancelar.setAttribute('class', 'fa-solid fa-xmark editred');
		botonCancelar.setAttribute('id', 'cancelarDisplay')
		botonCancelar.addEventListener('click', () => {
			displayFechaNacimiento();
		});

		let fechaok = document.createElement('p')
		fechaok.setAttribute('class', 'fechaOk')
		fechaok.innerHTML = 'Fecha valida';

		let fechaerror = document.createElement('p')
		fechaerror.setAttribute('class', 'fechaError')
		fechaerror.innerHTML = 'Fecha invalida';

		display.append(input);
		display.append(botonEditar);
		display.append(botonCancelar);
		display.append(fechaok);
		display.append(fechaerror);

		input.addEventListener('input', (e) => {
			console.log(e.target.value, validFecha(e.target.value));
			if (validFecha(e.target.value)) {
				input.classList.remove('inputError');
				input.classList.add('inputOk');
				fechaerror.style.display = 'none';
				fechaok.style.display = 'block';
			} else {
				input.classList.remove('inputOk');
				input.classList.add('inputError');
				fechaok.style.display = 'none';
			fechaerror.style.display = 'block';
			}
		})	
	}

	//AGREGA EVENTO EDITABLE A LA DIRECCION
	document.getElementById('editDireccion').addEventListener('click', () => editDireccion());

	const editDireccion = () => {
		display.innerHTML = '';
		let input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('name', 'item');
		input.setAttribute('class', 'inputEdit');
		input.value = datos.direccion;

		let botonEditar = document.createElement('i');
		botonEditar.setAttribute('class', 'fa-solid fa-check edit');
		botonEditar.setAttribute('id', 'editarDisplay')
		botonEditar.addEventListener('click', () => {
			datos.direccion = input.value;
			displayDireccion();
		});

		let botonCancelar = document.createElement('i');
		botonCancelar.setAttribute('class', 'fa-solid fa-xmark editred');
		botonCancelar.setAttribute('id', 'cancelarDisplay')
		botonCancelar.addEventListener('click', () => {
			displayDireccion();
		});

		display.append(input);
		display.append(botonEditar);
		display.append(botonCancelar);
	}

	//AGREGA EVENTO EDITABLE AL NUMERO DE TELEFONO
	document.getElementById('editTelefono').addEventListener('click', () => editTelefono());

	const editTelefono = () => {
		display.innerHTML = '';
		let input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('name', 'item');
		input.setAttribute('class', 'inputEdit');
		input.value = datos.telefono;

		let botonEditar = document.createElement('i');
		botonEditar.setAttribute('class', 'fa-solid fa-check edit');
		botonEditar.setAttribute('id', 'editarDisplay')
		botonEditar.addEventListener('click', () => {
			datos.telefono = input.value;
			displayTelefono();
		});

		let botonCancelar = document.createElement('i');
		botonCancelar.setAttribute('class', 'fa-solid fa-xmark editred');
		botonCancelar.setAttribute('id', 'cancelarDisplay')
		botonCancelar.addEventListener('click', () => {
			displayTelefono();
		});

		display.append(input);
		display.append(botonEditar);
		display.append(botonCancelar);
	}

	// ESTUDIOS EN UNA LISTA
	document.getElementById('estudio').innerHTML = datos.estudio;
	document.getElementById('html5').innerHTML = datos.html5;
	document.getElementById('css').innerHTML = datos.css;
	document.getElementById('java').innerHTML = datos.java;
	document.getElementById('javascript').innerHTML = datos.javascript;
	document.getElementById('react').innerHTML = datos.react;
	document.getElementById('idioma').innerHTML = datos.idioma;


	// DATOS ADICIONALES EN LISTA
	document.getElementById('age').innerHTML = 'Edad: ' + datos.edad;
	document.getElementById('gender').innerHTML = 'Genero: ' + datos.genero;
	document.getElementById('country').innerHTML = 'Pais: ' + datos.pais;
	document.getElementById('state').innerHTML = 'Localidad: ' + datos.localidad;
	document.getElementById('city').innerHTML = 'Ciudad: Ciudad Autonoma de Buenos Aires';
	document.getElementById('barrio').innerHTML = 'Barrio: ' + datos.barrio;
	document.getElementById('comuna').innerHTML = 'Coumuna: ' + datos.comuna;
	document.getElementById('postcode').innerHTML = 'Codigo Postal: ' + datos.codigoPostal;

	// AGREGA UN EVENTO CLICK A LA FOTO DE PERFIL PARA DESPLEGAR UN GLOBO
	// ESTE MOSTRARA EL NOMBRE DE LA PERSONA EN PANTALLA
	document.getElementById('profile-photo').addEventListener('click', () => {
		let globo = document.getElementById('globo');
		globo.classList.add("globo");
		globo.innerHTML = 'Hola me llamo '+datos.nombre;

	});

	// AGREGA UN EVENTO CUANDO SALE EL MOUSE DE LA IMAGEN DE PERFIL
	// QUE BORRA EL GLOBO QUE FUE MOSTRADO CUANDO SE PRODUJO EN EVENTO ANTERIOR
	document.getElementById('profile-photo').addEventListener('mouseleave', () => {
		let globo = document.getElementById('globo');
		globo.classList.remove("globo");
		globo.innerHTML = '';
	})
})
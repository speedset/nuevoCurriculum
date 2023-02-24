const datos = {
	nombre: 'Danilo',
	apellido: 'Garcia',
	email: 'garciadaniloadrian@gmail.com',
	fechaNacimiento: '02/02/1990',
	direccion: 'Acosta mariano 3500',
	telefono: '1153431387',
	estudio: 'Analista en sistemas',
	html5: 'Html5 en una semana aprendido',
	css: 'CSS en dos semanas aprendido',
	java: 'Java 2 años',
	javascript: 'Javascript 2 años',
	react: 'React estudio 1 años',
	idioma: 'Ingles avanzado',
	edad: '33',
	genero: 'Masculino',
	pais: 'Argentina',
	localidad: 'Buenos Aires',
	barrio: 'Villa Soldati',
	comuna: '8',
	codigoPostal: '1437',
}

window.addEventListener('load', () => {
	// OPTENER EL ELEMENTO DONDE CAMBIAR LOS DATOS DE LA PERSONA
	let display = document.getElementById('display');

	// OPTENER EL ELEMENTO DONDE SE CAMBIARAN LOS TIPOS DE DATOS DE LA PERSONA
	let typeData = document.getElementById('type-data');

	// OPTENER UNA LISTA DE HIJO DE LA LISTA
	let childs = document.getElementById('info-list').children;

	typeData.innerHTML = 'Hola, mi nombre es';
	display.innerHTML = datos.nombre + ' ' + datos.apellido;

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
				displayBirthdate();
				break;
			case 'location':
				displayLocation();
				break;
			case 'phone':
				displayPhone();
				break;
			default:
				displayName();
				break;
		}
	}

	const displayName = () => {
		typeData.innerHTML = 'Hola, mi nombre es';
		display.innerHTML = datos.nombre + ' ' + datos.apellido;
	}
	
	const displayEmail = () => {
		typeData.innerHTML = 'Mi email es';
		display.innerHTML = datos.email;
	}
	
	const displayBirthdate = () => {
		typeData.innerHTML = 'Mi fecha de nacimiento es';
		display.innerHTML = datos.fechaNacimiento;
	}
	
	const displayLocation = () => {
		typeData.innerHTML = 'Mi dirección es';
		display.innerHTML = datos.direccion;
	}
	
	const displayPhone = () => {
		typeData.innerHTML = 'Mi telefono es';
		display.innerHTML = datos.telefono;
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
	document.getElementById('age').innerHTML = 'Edad: '+datos.edad;
	document.getElementById('gender').innerHTML = 'Genero: '+datos.genero;
	document.getElementById('country').innerHTML = 'Pais: '+datos.pais;
	document.getElementById('state').innerHTML = 'Localidad: '+datos.localidad;
	document.getElementById('city').innerHTML = 'Ciudad: Ciudad Autonoma de Buenos Aires';
	document.getElementById('barrio').innerHTML = 'Barrio: '+datos.barrio;
	document.getElementById('comuna').innerHTML = 'Coumuna: '+datos.comuna;
	document.getElementById('postcode').innerHTML = 'Codigo Postal: '+datos.codigoPostal;

	(() => {
		let datenow = new Date();
		let date, month, year;
		date = datenow.getDate();
		month = datenow.getMonth() + 1;
		year = datenow.getFullYear();
		date = date.toString().padStart(2, '0');
		month = month.toString().padStart(2, '0');
		document.getElementById('datenow').innerHTML = `${date}/${month}/${year}`;
	})();

	// AGREGA UN EVENTO CLICK A LA FOTO DE PERFIL PARA DESPLEGAR UN GLOBO
	// ESTE MOSTRARA EL NOMBRE DE LA PERSONA EN PANTALLA
	document.getElementById('profile-photo').addEventListener('click', () => {
		let globo = document.getElementById('globo');
		globo.classList.add("globo");
		globo.innerHTML = 'Hola me llamo Danilo Adrian Garcia';

	});

	// AGREGA UN EVENTO CUANDO SALE EL MOUSE DE LA IMAGEN DE PERFIL
	// QUE BORRA EL GLOBO QUE FUE MOSTRADO CUANDO SE PRODUJO EN EVENTO ANTERIOR
	document.getElementById('profile-photo').addEventListener('mouseleave', () => {
		let globo = document.getElementById('globo');
		globo.classList.remove("globo");
		globo.innerHTML = '';
	})

})





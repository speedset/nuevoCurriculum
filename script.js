window.addEventListener('load', () => {
	// OPTENER EL ELEMENTO DONDE CAMBIAR LOS DATOS DE LA PERSONA
	let display = document.getElementById('display');

	// OPTENER EL ELEMENTO DONDE SE CAMBIARAN LOS TIPOS DE DATOS DE LA PERSONA
	let typeData = document.getElementById('type-data');

	// OPTENER UNA LISTA DE HIJO DE LA LISTA
	let childs = document.getElementById('info-list').children;

	typeData.innerHTML = 'Hola, mi nombre es';
	display.innerHTML = "Danilo Adrian Garcia";

	function listHover(e) {
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

	// ESTUDIOS EN UNA LISTA
	document.getElementById('estudio').innerHTML = 'Analista en sistemas';
	document.getElementById('java').innerHTML = 'Java 2 años';
	document.getElementById('javascript').innerHTML = 'Javascript 4 años';
	document.getElementById('react').innerHTML = 'React estudio 2 años';
	document.getElementById('idioma').innerHTML = 'Ingles avanzado';
	

	// DATOS ADICIONALES EN LISTA
	document.getElementById('age').innerHTML = 'Edad: 33';
	document.getElementById('gender').innerHTML = 'Genero: Masculino';
	document.getElementById('country').innerHTML = 'Pais: Argentina';
	document.getElementById('state').innerHTML = 'Localidad: Buenos Aires';
	document.getElementById('city').innerHTML = 'Ciudad: Ciudad Autonoma de Buenos Aires';
	document.getElementById('barrio').innerHTML = 'Villa Soldati';
	document.getElementById('comuna').innerHTML = 'Coumuna 8';
	document.getElementById('postcode').innerHTML = 'Codigo Postal: 1437';

	displayName = () => {
		typeData.innerHTML = 'Hola, mi nombre es';
		display.innerHTML = "Danilo Adrian Garcia";
	}

	displayEmail = () => {
		typeData.innerHTML = 'Mi email es';
		display.innerHTML = 'garciadaniloadrian@gmail.com';
	}

	displayBirthdate = () => {	
		typeData.innerHTML = 'Mi fecha de nacimiento es';
		display.innerHTML = '02/02/1990';
	}

	displayLocation = () => {
		typeData.innerHTML = 'Mi dirección es';
		display.innerHTML = 'Acosta mariano 3500';
	}

	displayPhone = () => {
		typeData.innerHTML = 'Mi telefono es';
		display.innerHTML = '1153431387';
	}

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

	// METODO MANEJADOR PARA LO QUE SE MUESTRA EN PANTALLA
	// CUANDO SE REALIZA EL EVENTO HOVER EN ALGUNO DE LOS ICONOS
	// DE ACUERDO AL ID
	handleDisplay = (id) => {
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





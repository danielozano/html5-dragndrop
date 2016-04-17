// Comprobar si la API File está disponible en el navegador
if (window.File && window.FileList && window.FileReader) {

	var getById = function(id) {
		return document.getElementById(id);
	};

	// ¿XHR2 disponible? Para subida AJAX.
	var xhr = new XMLHttpRequest();

	if (xhr.upload) {
		var dropZone = getById('file-drag');
		var fileList = getById('uploaded-files');

		var uploadFile = function (file) {
			// Simplemente se pintará un HTML
		}

		var dragOver = function (e) {
			e.preventDefault();
			e.stopPropagation();
			e.target.className = 'hover';
		}

		var dragLeave = function (e) {
			e.preventDefault;
			e.target.className = '';
		}
		var filesHandler = function (e) {
			var files = e.target.files || e.dataTransfer.files;

			e.preventDefault();
			e.stopPropagation();
			if (files.length > 0) {
				fileList.innerHTML = '<h4>Ficheros a subir:</h4>';
			}
			// por cada uno de los archivos arrastrados. mostrar info y añadir al input.
			[].forEach.call(files, function(file) {
				// La subida del archivo iría aquí, mediante una petición AJAX por ejemplo.
				var container = document.createElement('div');
				container.innerHTML = "<p>Nombre: " + file.name + "</p>" +
				"<p>Tipo: " + file.type + "</p>";

				fileList.appendChild(container);
			});
			dragLeave(e);
		}

		// Añadir eventos sobre el elemento al que arrastraremos los archivos
		dropZone.addEventListener('drop', filesHandler, false);
		dropZone.addEventListener('dragover', dragOver, false);
		dropZone.addEventListener('dragleave', dragLeave, false);
		// mostrar la zona a la que arrastrar archivos
		dropZone.style.display = 'block';
	}
}
const status = document.getElementById('status');
      const output = document.getElementById('output');
      if (window.FileList && window.File && window.FileReader) {
        document.getElementById('file-selector').addEventListener('change', event => {
          output.src = '';
          status.textContent = '';
          const file = event.target.files[0];
          if (!file.type) {
            status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
            return;
          }
          if (!file.type.match('image.*')) {
            status.textContent = 'Error: The selected file does not appear to be an image.'
            return;
          }
          const reader = new FileReader();
          reader.addEventListener('load', event => {
            output.src = event.target.result;
          });
          reader.readAsDataURL(file);
        }); 
      }
	  
	  
	  
	  
	  var man= {
	"Имя":"",
	"Фамилия":"",
	"Пол":"",
	"Возраст":"",
	"Любимое_число":"",
	
};


function f1() {
	var out="";
	man.Имя = document.forms["form1"]['name'].value;
	man.Фамилия = document.forms["form1"]['namef'].value;
	man.Пол = document.forms["form1"]['namez'].value;
	man.Возраст = document.forms["form1"]['nameq'].value;
	man.Любимое_число = document.forms["form1"]['namea'].value;
	
	for (key in man){
		out += 	key + " " + man[key] + '<br>';
	}
	
	localStorage.setItem("out1",out);

}


var out = localStorage.getItem('out1');
document.getElementById('out').innerHTML = out;
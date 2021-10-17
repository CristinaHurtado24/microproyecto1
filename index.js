//HERO
var images = ['./img/img2.png','./img/im1.png','./img/img4.png'],
    cont = 0;

function hero_carrousel(hero){
    hero.addEventListener('click', e => {
        let atras = hero.querySelector('.back'),
            adelante = hero.querySelector('.forward'),
            img = hero.querySelector('.img'),
            tg = e.target;

        if(tg == atras){
            if(cont >0){
                img.src = images[cont-1];
                cont --;
            }else{
                img.src = images[images.length-1];
                cont = images.length-1;
            }
        }else if(tg ==adelante){
            if(cont< (images.length -1)){
                img.src = images[cont+1];
                cont ++;
            }else{
                img.src = images[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    let contenedor = document.querySelector('.hero');

    hero_carrousel(contenedor);
});

//GRAFICO DE SKILLS

const skills_json =[{tech:"Python",percent:"70"}, {tech:"HTML", percent:"55"},{tech: "CSS", percent:"45"}, {tech:"JavaScript", percent:"20"}, {tech:"Java", percent:"65"}];

const mainSelectorContainer = document.getElementById('skills')

function progress_bar(json){
    for (let conty = 0; conty < json.length; conty++) {
        const element = json[conty];
        mainSelectorContainer.innerHTML +=`
            <div class="progress_box">
                <h5>${element['tech']}</h5>
                <div class="progress_done">
                    ${element['percent']}%
                </div>
            </div>
        `
    };
}

document.addEventListener("DOMContentLoaded", ()=>{
    progress_bar(skills_json);
});

//FORMULARIO

const form = document.getElementById('written');

function validateForm(event) {
    event.preventDefault();
  let x = document.getElementById("name").value, y=document.getElementById("lastname").value, z=document.getElementById("email").value, w = document.getElementById("mensaje").value;

  if (x === "") {
    alert("Debe ingresar su nombre");
    return false;
  }else if(y===""){
      alert("Debe ingresar su apellido");
    return false;
  }else if(w===""){
      alert("Debe ingresar el mensaje que desea enviar");
    return false;
  }else if(z===''){
      alert("Debe ingresar un correo valido");
    return false;
  }else if(z!==''){
      if(z.includes('@')){
          alert('Su solicitud fue enviada exitosamente')
          return true;
      }else{
          alert("Debe ingresar un correo valido");
            return false;
      };   
  };
};



function showValues(event){
    let x = form["name"].value, y=form["lastname"].value, z=form["email"].value, w = form["mensaje"].value;
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(w);

}



form.addEventListener('submit', validateForm);
form.addEventListener("submit", showValues);




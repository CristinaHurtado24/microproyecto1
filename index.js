var images = ['./img/im1.png','./img/img2.png','./img/img4.png'],
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

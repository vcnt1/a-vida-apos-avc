//animacao do mouse


//depressao

domEvents.addEventListener(plane[0][1], 'click', event => {
    iniciaModal("modal-video", "-MVeSBS570Q");
});


//depressao
domEvents.addEventListener(plane[0][0], 'mouseover',event => {
    //document.getElementById("corpo").style.cursor = "pointer";
    plane[0][0].visible=false;
    plane[0][1].visible=true;
});
domEvents.addEventListener(plane[0][1], 'mouseover',event => {
    document.getElementById("corpo").style.cursor = "pointer";
    plane[0][0].visible=false;
    plane[0][1].visible=true;
});
domEvents.addEventListener(plane[0][0], 'mouseout',event => {
    //document.getElementById("corpo").style.cursor = "default";
    plane[0][0].visible=false;
    plane[0][1].visible=true;
});
domEvents.addEventListener(plane[0][1], 'mouseout',event => {
    document.getElementById("corpo").style.cursor = "default";
    plane[0][0].visible=true;
    plane[0][1].visible=false;
});


//hemiplegia
domEvents.addEventListener(plane[1][1], 'click', event => {
    iniciaModal("modal-video", "1KS7_ZiEjlQ");

});
//Fraqueza
domEvents.addEventListener(plane[1][0], 'mouseover',event => {
    
    plane[1][0].visible=false;
    plane[1][1].visible=true;
    
});
domEvents.addEventListener(plane[1][1], 'mouseover',event => {
    document.getElementById("corpo").style.cursor = "pointer";
    plane[1][0].visible=false;
    plane[1][1].visible=true;
    
    
    
});
domEvents.addEventListener(plane[1][0], 'mouseout',event => {

    plane[1][0].visible=false;
    plane[1][1].visible=true;
    


});

domEvents.addEventListener(plane[1][1], 'mouseout',event => {
    document.getElementById("corpo").style.cursor = "default";
    plane[1][0].visible=true;
    plane[1][1].visible=false;
   
    
});

//visao

domEvents.addEventListener(plane[2][1], 'click', event => {
    iniciaModal("modal-video", "A8jLk_AqRDM");
});


//visao
domEvents.addEventListener(plane[2][0], 'mouseover',event => {
    //document.getElementById("corpo").style.cursor = "pointer";
    plane[2][0].visible=false;
    plane[2][1].visible=true;
});
domEvents.addEventListener(plane[2][1], 'mouseover',event => {
    document.getElementById("corpo").style.cursor = "pointer";
    plane[2][0].visible=false;
    plane[2][1].visible=true;
});
domEvents.addEventListener(plane[2][0], 'mouseout',event => {
    //document.getElementById("corpo").style.cursor = "default";
    plane[2][0].visible=false;
    plane[2][1].visible=true;
});
domEvents.addEventListener(plane[2][1], 'mouseout',event => {
    document.getElementById("corpo").style.cursor = "default";
    plane[2][0].visible=true;
    plane[2][1].visible=false;
});

//cognicao
domEvents.addEventListener(plane[3][1], 'click', event => {
    iniciaModal("modal-video", "gGuzsKByGRw");
});
domEvents.addEventListener(plane[3][0], 'mouseover',event => {
    //document.getElementById("corpo").style.cursor = "pointer";
    plane[3][0].visible=false;
    plane[3][1].visible=true;
});
domEvents.addEventListener(plane[3][1], 'mouseover',event => {
    document.getElementById("corpo").style.cursor = "pointer";
    plane[3][0].visible=false;
    plane[3][1].visible=true;
});
domEvents.addEventListener(plane[3][0], 'mouseout',event => {
    //document.getElementById("corpo").style.cursor = "default";
    plane[3][0].visible=false;
    plane[3][1].visible=true;
});
domEvents.addEventListener(plane[3][1], 'mouseout',event => {
    document.getElementById("corpo").style.cursor = "default";
    plane[3][0].visible=true;
    plane[3][1].visible=false;
});

//fala
domEvents.addEventListener(plane[4][1] , 'click', event => {
    iniciaModal("modal-video", "Ct_4UW0EKAE");
});
domEvents.addEventListener(plane[4][0], 'mouseover',event => {
    //document.getElementById("corpo").style.cursor = "pointer";
    plane[4][0].visible=false;
    plane[4][1].visible=true;
    plane[5][0].visible=false;
    plane[5][1].visible=true;
});
domEvents.addEventListener(plane[4][1], 'mouseover',event => {
    document.getElementById("corpo").style.cursor = "pointer";
    plane[4][0].visible=false;
    plane[4][1].visible=true;
    plane[5][0].visible=false;
    plane[5][1].visible=true;
});
domEvents.addEventListener(plane[4][0], 'mouseout',event => {
    //document.getElementById("corpo").style.cursor = "default";
    plane[4][0].visible=false;
    plane[4][1].visible=true;
    plane[5][0].visible=false;
    plane[5][1].visible=true;
});
domEvents.addEventListener(plane[4][1], 'mouseout',event => {
    document.getElementById("corpo").style.cursor = "default";
    plane[4][0].visible=true;
    plane[4][1].visible=false;
    plane[5][0].visible=true;
    plane[5][1].visible=false;
});


//creditos
domEvents.addEventListener(planeCredito[1] , 'click', event => {
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== undefined) {
        iniciaModalTexto("modal-texto", "tcredito","2200px");
    }
    else{
        iniciaModalTexto("modal-texto", "tcredito","2600px");
    }
    
});
domEvents.addEventListener(planeCredito[0], 'mouseover',event => {
    //document.getElementById("corpo").style.cursor = "pointer";
    planeCredito[0].visible=false;
    planeCredito[1].visible=true;
    
});
domEvents.addEventListener(planeCredito[1], 'mouseover',event => {
    document.getElementById("corpo").style.cursor = "pointer";
    planeCredito[0].visible=false;
    planeCredito[1].visible=true;
    
});
domEvents.addEventListener(planeCredito[0], 'mouseout',event => {
    //document.getElementById("corpo").style.cursor = "default";
    planeCredito[0].visible=false;
    planeCredito[1].visible=true;
   
});
domEvents.addEventListener(planeCredito[1], 'mouseout',event => {
    document.getElementById("corpo").style.cursor = "default";
    planeCredito[0].visible=true;
    planeCredito[1].visible=false;
    
});






//botoes info
//hemiplegia
domEvents.addEventListener(planeTitulo[0][0], 'mouseover',event => {
    document.getElementById("corpo").style.cursor = "pointer";   
});
domEvents.addEventListener(planeTitulo[0][0], 'mouseout',event => {
    document.getElementById("corpo").style.cursor = "default";   
});

domEvents.addEventListener(planeTitulo[0][0], 'click', event => {
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== undefined) {
        iniciaModalTexto("modal-texto", "hemiplegia","500px");
    }
    else{
        iniciaModalTexto("modal-texto", "hemiplegia","900px");
    }
    

});

//depressão

domEvents.addEventListener(planeTitulo[1][0], 'mouseover',event => {
    document.getElementById("corpo").style.cursor = "pointer";   
});
domEvents.addEventListener(planeTitulo[1][0], 'mouseout',event => {
    document.getElementById("corpo").style.cursor = "default";   
});

domEvents.addEventListener(planeTitulo[1][0], 'click', event => {
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== undefined) {
        iniciaModalTexto("modal-texto", "depressao","100px");
    }
    else{
        iniciaModalTexto("modal-texto", "depressao","300px");
    }
    

});

//visao

domEvents.addEventListener(planeTitulo[2][0], 'mouseover',event => {
    document.getElementById("corpo").style.cursor = "pointer";   
});
domEvents.addEventListener(planeTitulo[2][0], 'mouseout',event => {
    document.getElementById("corpo").style.cursor = "default";   
});

domEvents.addEventListener(planeTitulo[2][0], 'click', event => {
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== undefined) {
        iniciaModalTexto("modal-texto", "visao","100px");
    }
    else{
        iniciaModalTexto("modal-texto", "visao","100px");
    }
    

});

//cognicao3

domEvents.addEventListener(planeTitulo[3][0], 'mouseover',event => {
    document.getElementById("corpo").style.cursor = "pointer";   
});
domEvents.addEventListener(planeTitulo[3][0], 'mouseout',event => {
    document.getElementById("corpo").style.cursor = "default";   
});

domEvents.addEventListener(planeTitulo[3][0], 'click', event => {
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== undefined) {
        iniciaModalTexto("modal-texto", "raciocinio","250px");
    }
    else{
       iniciaModalTexto("modal-texto", "raciocinio","450px");
    }
    

});

//fala

domEvents.addEventListener(planeTitulo[4][0], 'mouseover',event => {
    document.getElementById("corpo").style.cursor = "pointer";   
});
domEvents.addEventListener(planeTitulo[4][0], 'mouseout',event => {
    document.getElementById("corpo").style.cursor = "default";   
});

domEvents.addEventListener(planeTitulo[4][0], 'click', event => {
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== undefined) {
        iniciaModalTexto("modal-texto", "fala","100px");;
    }
    else{
        iniciaModalTexto("modal-texto", "fala","200px");
    }
    

});










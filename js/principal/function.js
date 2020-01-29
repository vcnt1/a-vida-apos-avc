var roda=true;




//cria cenário
function handle_load(gltf) {

    console.log(gltf);
    mesh = gltf.scene;
    console.log(mesh.children[0]);
    mesh.children[0].material = new THREE.MeshLambertMaterial();
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add( mesh );
    mesh.position.z = 10;
    mesh.position.y=-10;
        
}

//Abre tela com vídeo
function iniciaModal(idModal,id){
    const modal = document.getElementById(idModal);
    const iframe = document.getElementById( 'iframeV' );
    document.getElementById("myCanvas").style.filter = "blur(8px)";
    iframe.src = [ 'https://www.youtube.com/embed/', id ].join( '' );
    modal.classList.add('mostrar');
}

function fechaModal (idModal){
    const modal = document.getElementById(idModal);
    const iframe = document.getElementById( 'iframeV' );
    iframe.src = [ '' ].join( '' );
    document.getElementById("myCanvas").style.filter = "blur(0px)";

    document.getElementById("depressao").style.display = "none";
    document.getElementById("raciocinio").style.display = "none";
    document.getElementById("visao").style.display = "none";
    document.getElementById("hemiplegia").style.display = "none";
    document.getElementById("fala").style.display = "none";
    document.getElementById("tcredito").style.display = "none";
    document.getElementById("dcredito").style.display = "none";

    modal.classList.remove('mostrar');
    modal.classList.remove('amostrar');
}

function iniciaModalTexto(idModal,texto,top){
    const modal = document.getElementById(idModal);
    if (texto=="tcredito"){
        document.getElementById("dcredito").style.display = "flex";
    }
    document.getElementById(texto).style.display = "flex"; 
    document.getElementById("tmodal").style.paddingTop = top;
    document.getElementById("tmodal").style.fontFamily ="font-family: Arial, Helvetica, sans-serif" ;
    document.getElementById("myCanvas").style.filter = "blur(8px)";
    modal.classList.add('amostrar');
    
}

//Preenche lista com imagens para animação
function preencheListaImagem(numeroPasta, tamanho, local){
        lista=[[],[],[],[],[],[]];
        for (i=0;i<=numeroPasta-1;i++){
            for (j=0; j<tamanho; j++){
                numero=j+1;
                imagem=local+"/"+i+"/"+numero+".png"
                console.log("Hello world!");
                lista[i][j]=new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
                    map:THREE.ImageUtils.loadTexture(imagem), transparent: true
                });
            }
        }
        return lista;
    }



//RENDER LOOP
const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    
    
    renderer.render(scene,camera);
    
}
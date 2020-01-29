//variaveis iniciais


var contador=0;
var renderer,
	scene,
	camera,
	myCanvas = document.getElementById('myCanvas');


//RENDERER
renderer = new THREE.WebGLRenderer({
  canvas: myCanvas, 
  antialias: true
});
renderer.setClearColor(0xFFFFFF);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.physicallyCorrectLights = true;
renderer.gammaOutput = true;
renderer.gammaFactor = 2.2;

const canvas = renderer.domElement;
const width =850;
const height = 450;
renderer.setSize(width,height);




//CAMERA
camera = new THREE.PerspectiveCamera(50, (width)/(height), 0.1, 100 );
camera.position.x=-2;
camera.position.y=0.5;
camera.position.z=4;

//SCENE
scene = new THREE.Scene();

//LIGHTS

var ambientLight = new THREE.AmbientLight(0xffffff,1.5);
scene.add(ambientLight);

var light = new THREE.PointLight(0xffffff, 100);
light.position.set(11.2,15,2);
light.castShadow = true;
light.decay = 2;
light.shadowCameraVisible = true;
light.shadow.camera.near= 0.1;
light.shadow.camera.far = 500;

scene.add(light);


var light2 = new THREE.PointLight(0xffffff, 20);
light2.position.set(-9.7,15,20);

light2.castShadow = true;
light2.shadowCameraVisible = true;
light2.shadow.camera.near= 0.1;
light2.shadow.camera.far = 25;

scene.add(light2);


var light3 = new THREE.PointLight(0xffffff, 10, 30);
light3.position.set(20,10,30);
light3.castShadow = true;

light3.shadowCameraVisible = true;
light3.shadow.camera.near= 0.1;
light3.shadow.camera.far = 25;
light3.penumbra = 0.1;
scene.add(light3);



//Animações e Botões
//Traz as imagens da pasta.
var numeroFrames=2; // cada imagem ta nomeada por numeros, aqui mostra o numero da ultima animacao
var numeroAnimacoes=6; // cada pasta ta nomeada por numeros, aqui mostra o nome da ultima pasta +1
var img = preencheListaImagem(numeroAnimacoes,numeroFrames,"img"); //funcao onde coloca as imagens das pastas em um array
var imgT= preencheListaImagem(numeroAnimacoes,numeroFrames,"img/titulo");
var geometry = new THREE.PlaneGeometry( 4.59,7.3);
var plane = [[],[],[],[],[],[]];
var planeCredito =[];
var planeTitulo=[[],[],[],[],[],[]];
var posX=0;


//logo
var imgLogo = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
                    map:THREE.ImageUtils.loadTexture("img/logo/1.png"), transparent: true
                });
var geometryLogo = new THREE.PlaneGeometry( 6,3.5);
var planeLogo = new THREE.Mesh( geometryLogo, imgLogo);
scene.add(planeLogo);

//boneco de raciocinio
var imgRac = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
                    map:THREE.ImageUtils.loadTexture("img/3/0.png"), transparent: true
                });

var planeRac = new THREE.Mesh( geometry, imgRac);
scene.add(planeRac);


//créditos
var geometryCredito = new THREE.PlaneGeometry( 16.68/2,10.69/2);
for (i=0;i<2;i++){
    var numero=i+1;
    var imgCredito= new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
                    map:THREE.ImageUtils.loadTexture("img/credito/"+numero+".png"), transparent: true
                });
    planeCredito[i]= new THREE.Mesh( geometryCredito, imgCredito);
    if (i==1){
        planeCredito[i].visible=false;
    }
    scene.add(planeCredito[i]);
}


 




var geometryTitulo = new THREE.PlaneGeometry( 2*2.91125 ,  2*0.8525);



// atualiza as imagens e coloca no plane
for (i=0;i<numeroAnimacoes;i++){
    for (j=0;j<numeroFrames; j++){
        img[i][j].map.needsUpdate = true;
        plane[i][j]=new THREE.Mesh( geometry, img[i][j]); 
        plane[i][j].rotation.y=0;
        plane[i][j].position.z=-20;
        plane[i][j].position.y=0;
        plane[i][j].position.x=0;
        scene.add( plane[i][j] );
        if (j==0){
            plane[i][j].visible=true;
        }else{
           plane[i][j].visible=false;
        }
    }
}

// Adiciona as imagens na tela
for (i=0;i<numeroAnimacoes;i++){
     for (j=0;j<numeroFrames; j++){
        imgT[i][j].map.needsUpdate = true;
        planeTitulo[i][j]=new THREE.Mesh( geometryTitulo, imgT[i][j]); 
        planeTitulo[i][j].rotation.y=0;
        planeTitulo[i][j].position.z=-20;
        planeTitulo[i][j].position.y=0;planeTitulo
        planeTitulo[i][j].position.x=0;
        scene.add( planeTitulo[i][j] );
        if (j==0){
            planeTitulo[i][j].visible=true;
        }else{
           planeTitulo[i][j].visible=false;
        }
    }   
        
}


posDepressao();
posFraqueza();
posVisual();
posLogo();
posCredito();
posRac();
posFala();
posTitulo();

//cliques e movimentos mouse
const domEvents = new THREEx.DomEvents(camera, renderer.domElement); //aparecer o video


//Movimento da camera
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 0.5;
controls.maxDistance = 0.5;
controls.rotateSpeed = 0.05;
controls.enablePan = false;

controls.autoRotate=true;
controls.autoRotateSpeed=-0.5;

//carregando cenário
var loader = new THREE.GLTFLoader();

loader.load('source/novo.glb', handle_load);

var mesh;


if (document.addEventListener)
{
    document.addEventListener('webkitfullscreenchange', fsChangeHandler, false);
    document.addEventListener('mozfullscreenchange', fsChangeHandler, false);
    document.addEventListener('fullscreenchange', fsChangeHandler, false);
    document.addEventListener('MSFullscreenChange', fsChangeHandler, false);
    document.addEventListener('click',para,false)
}


function fsChangeHandler()
{
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== undefined) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = (window.innerWidth) / (window.innerHeight);
        camera.updateProjectionMatrix();

        


    } else {
        var elem2 = document.getElementById ("app");
        var elem1 = document.getElementById ("btn_full");
        var elem3 = document.getElementById ("modal-video");
        var elem4 = document.getElementById ("modal-texto");

        elem4.classList.remove('fullScreen');
        elem3.classList.remove('fullScreen');
        elem1.classList.remove('fscreen');
        elem2.classList.remove('full');

        renderer.setSize(width,height);
        camera.aspect = (width) / (height);


        camera.updateProjectionMatrix();
    }
}
function para(){
    if (controls.autoRotate)
        controls.autoRotate = false;
}
animate();

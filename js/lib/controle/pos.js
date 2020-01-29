//localização de cada animação
function posDepressao(){
    posY=-4;
    posZ=20;
    posX=14;
    rotY=10;
    t=1.1;

    plane[0][0].scale.set( t,t, 1 );
    plane[0][0].rotation.y=rotY;
    plane[0][0].position.z=posZ;
    plane[0][0].position.y=posY;
    plane[0][0].position.x=posX;

    plane[0][1].scale.set( t,t, 1 );
    plane[0][1].rotation.y=rotY;
    plane[0][1].position.z=posZ;
    plane[0][1].position.y=posY;
    plane[0][1].position.x=posX;
}

function posFraqueza(){
    posY=-3;
    posZ=15;
    posX=-4;
    rotY=9;
    t=1.1;

    plane[1][0].scale.set( t,t, 1 );
    plane[1][1].scale.set( t,t, 1 );

    plane[1][0].rotation.y=rotY;
    plane[1][0].position.z=posZ;
    plane[1][0].position.y=posY;
    plane[1][0].position.x=posX;

    plane[1][1].rotation.y=rotY;
    plane[1][1].position.z=posZ;
    plane[1][1].position.y=posY;
    plane[1][1].position.x=posX;
}
function posVisual(){
    posY=-4;
    posZ=-2;
    posX=18;
    rotY=5;
    t=1.5;

    plane[2][0].scale.set( t,t, 1 );
    plane[2][1].scale.set( t,t, 1 );

    plane[2][0].rotation.y=rotY;
    plane[2][0].position.z=posZ;
    plane[2][0].position.y=posY;
    plane[2][0].position.x=posX;

    plane[2][1].rotation.y=rotY;
    plane[2][1].position.z=posZ;
    plane[2][1].position.y=posY;
    plane[2][1].position.x=posX;
}
function posRac(){
    posY=-2.5;
    posZ=5;
    posX=-12;
    rotY=8;
    

    plane[3][0].rotation.y=rotY;
    plane[3][0].position.z=posZ;
    plane[3][0].position.y=posY;
    plane[3][0].position.x=posX;

    plane[3][1].rotation.y=rotY;
    plane[3][1].position.z=posZ;
    plane[3][1].position.y=posY;
    plane[3][1].position.x=posX;

    posY=-3;
    posZ=5;
    posX=-10;
    rotY=8;

    planeRac.rotation.y=rotY;
    planeRac.position.z=posZ;
    planeRac.position.y=posY;
    planeRac.position.x=posX;
}
function posFala(){
    posY=-5;
    posZ=-4.5;
    posX=-25;
    rotY=-4.8;
    t=1.5;

    plane[4][0].scale.set( t,t, 1 );
    plane[4][1].scale.set( t,t, 1 );

    plane[4][0].rotation.y=rotY;
    plane[4][0].position.z=posZ;
    plane[4][0].position.y=posY;
    plane[4][0].position.x=posX;

    plane[4][1].rotation.y=rotY;
    plane[4][1].position.z=posZ;
    plane[4][1].position.y=posY;
    plane[4][1].position.x=posX;

    posY=-4.5;
    posZ=-6;
    posX=-22;
    rotY=-4.5;
    t=1.5;

    plane[5][0].scale.set( t,t, 1 );
    plane[5][1].scale.set( t,t, 1 );

    plane[5][0].rotation.y=rotY;
    plane[5][0].position.z=posZ;
    plane[5][0].position.y=posY;
    plane[5][0].position.x=posX;

    plane[5][1].rotation.y=rotY;
    plane[5][1].position.z=posZ;
    plane[5][1].position.y=posY;
    plane[5][1].position.x=posX;
}


function posCredito(){
    posY=0.3;
    posZ=-11;
    posX=-9;
    rotY=0;
    
    planeCredito[0].rotation.y=rotY;
    planeCredito[0].position.z=posZ;
    planeCredito[0].position.y=posY;
    planeCredito[0].position.x=posX;



    planeCredito[1].rotation.y=rotY;
    planeCredito[1].position.z=posZ;
    planeCredito[1].position.y=posY;
    planeCredito[1].position.x=posX;
}

function posLogo(){
    posY=0.3;
    posZ=-11;
    posX=5.3;
    rotY=0;
    
    planeLogo.rotation.y=rotY;
    planeLogo.position.z=posZ;
    planeLogo.position.y=posY;
    planeLogo.position.x=posX;
}
function posPlay(){
    //ta escrito play, mas são os botões de info
    posY=1;
    posZ=15;
    posX=-1;
    rotY=9;
    //info hemiplegia
    planePlay[0].rotation.y=rotY;
    planePlay[0].position.z=posZ;
    planePlay[0].position.y=posY;
    planePlay[0].position.x=posX;

    posY=-0.5;
    posZ=13;
    posX=11;
    rotY=10;
    //info depre
    planePlay[1].rotation.y=rotY;
    planePlay[1].position.z=posZ;
    planePlay[1].position.y=posY;
    planePlay[1].position.x=posX;

    posY=0;
    posZ=-3;
    posX=13;
    rotY=5;
    //info visao
    planePlay[2].rotation.y=rotY;
    planePlay[2].position.z=posZ;
    planePlay[2].position.y=posY;
    planePlay[2].position.x=posX;

    posY=1;
    posZ=5;
    posX=-7;
    rotY=8;
    //info raciocinio
    planePlay[3].rotation.y=rotY;
    planePlay[3].position.z=posZ;
    planePlay[3].position.y=posY;
    planePlay[3].position.x=posX;

    posY=1;
    posZ=-1;
    posX=-10;
    rotY=-4.5;

    planePlay[4].rotation.y=rotY;
    planePlay[4].position.z=posZ;
    planePlay[4].position.y=posY;
    planePlay[4].position.x=posX;


}

function posTitulo(){
    
    posY=2;
    posZ=15;
    posX=-3;
    rotY=9.4;
    pos=0;
    pos2=0;

    //titulo hemiplegia
    planeTitulo[pos][pos2].rotation.y=rotY;
    planeTitulo[pos][pos2].position.z=posZ;
    planeTitulo[pos][pos2].position.y=posY;
    planeTitulo[pos][pos2].position.x=posX;


    posY=2;
    posZ=12;
    posX=9;
    rotY=9.5;
    pos++;
   
    //titulo depre
    planeTitulo[pos][pos2].rotation.y=rotY;
    planeTitulo[pos][pos2].position.z=posZ;
    planeTitulo[pos][pos2].position.y=posY;
    planeTitulo[pos][pos2].position.x=posX;


    posY=1.7;
    posZ=-2;
    posX=12;
    rotY=4.7;
    pos++;
    
    //titulo visao
    planeTitulo[pos][pos2].rotation.y=rotY;
    planeTitulo[pos][pos2].position.z=posZ;
    planeTitulo[pos][pos2].position.y=posY;
    planeTitulo[pos][pos2].position.x=posX;

   

    posY=3;
    posZ=5;
    posX=-15;
    rotY=7.8;
    pos++;
   
    //titulo raciocinio
    planeTitulo[pos][pos2].rotation.y=rotY;
    planeTitulo[pos][pos2].position.z=posZ;
    planeTitulo[pos][pos2].position.y=posY;
    planeTitulo[pos][pos2].position.x=posX;

  
    posY=2;
    posZ=-5;
    posX=-15;
    rotY=-4.8;
    pos++;
   

    //fala
    planeTitulo[pos][pos2].rotation.y=rotY;
    planeTitulo[pos][pos2].position.z=posZ;
    planeTitulo[pos][pos2].position.y=posY;
    planeTitulo[pos][pos2].position.x=posX;

   


}
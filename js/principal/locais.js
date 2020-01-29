function posDepressao(){
    posY=-0.4;
    posZ=30;
    posX=0.5;
    rotY=10;

    plane[0][0].rotation.y=rotY;
    plane[0][0].position.z=posZ;
    plane[0][0].position.y=posY;
    plane[0][0].position.x=posX;

    plane[0][1].rotation.y=rotY;
    plane[0][1].position.z=posZ;
    plane[0][1].position.y=posY;
    plane[0][1].position.x=posX;
}
function posFraqueza(){
    posY=-3;
    posZ=-7;
    posX=20;
    rotY=5;

    plane[1][0].rotation.y=rotY;
    plane[1][0].position.z=posZ;
    plane[1][0].position.y=posY;
    plane[1][0].position.x=posX;

    plane[1][1].rotation.y=rotY;
    plane[1][1].position.z=posZ;
    plane[1][1].position.y=posY;
    plane[1][1].position.x=posX;
}
var lado=4
var escena1= false;
var escena2= false;
var escena3= false;
var escena4= false;
var escena5= false;
var escena6= false;
var FinalScene=false;

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;


var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//cubo 1
var geometry = new THREE.BoxGeometry( lado , lado, lado );
var material = new THREE.MeshBasicMaterial( {color: 0xFF390F} );
var cube = new THREE.Mesh( geometry, material );


//cubo 2
var geometry2 = new THREE.BoxGeometry( lado/2 , lado/2, lado/2 );
var material2 = new THREE.MeshBasicMaterial( {color: 0xFFFD5A} );
var cube2 = new THREE.Mesh( geometry2, material2 );


//funciones






// cubo 3
var geometry3 = new THREE.BoxGeometry( lado/4 , lado/4, lado/4 );
var material3 = new THREE.MeshBasicMaterial( {color: 0x79FFF5} );
var cube3 = new THREE.Mesh( geometry3, material3 );


//funciones 







const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

//scene.add(cube)




document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
      case 37: // Flecha izquierda
      
      break;
      case 39: // Flecha derecha
      //Escena 1
      if(escena1==false){
      scene.add( cube );
    
      escena1=true;}
      else{
        if(escena1==true && escena2==false){
          cube.translateX(lado/2);
          escena2=true;
          scene.add( cube );
          scene.add( cube2 );
        }else{
          if(escena2==true && escena1==true && escena3==false){
            cube.translateY(lado/2);
            cube2.translateY(lado-lado/4);
            escena3=true;
            scene.add(cube3)
            scene.add( cube2 );
            scene.add( cube );
          }else{
            if(escena3==true && escena2==true && escena4==false)
            {
              cube.translateZ(lado/2);
              cube2.translateX(lado/2);
              cube3.translateY(lado+lado/8);
              escena4=true;
              scene.add( cube );
              scene.add( cube2 );
              scene.add(cube3)
            }else{
              if(escena4==true && escena3==true && escena5==false )
              {
                cube2.translateY(lado/2);
                cube3.translateX(lado/2);
                escena5=true;
                scene.add( cube2 );
                scene.add(cube3)
              }else{
                if(escena5==true && escena4==true && escena6==false)
                {
                  cube2.translateZ(lado/2);
                  cube3.translateY(lado/2);
                  escena6=true;
                  scene.add( cube2 );
                  scene.add(cube3)
                }else{
                  if(escena6==true && escena5==true && FinalScene==false){

                    cube3.translateZ(lado/2);

                    scene.add(cube3)
                    FinalScene=true;
                  }else{
                    if(FinalScene==true)
                    {
                      scene.remove(cube);
                      scene.remove(cube2);
                      scene.remove(cube3);
                      FinalScene=false;
                      escena1=false;
                      escena2=false;
                      escena3=false;
                      escena4=false;
                      escena5=false;
                      escena6=false;
                      //FinalScene=false;
                      cube.translateX(-lado/2);
                      cube.translateY(-lado/2);
                      cube2.translateY(-lado+lado/4);
                      cube.translateZ(-lado/2);
                      cube2.translateX(-lado/2);
                      cube3.translateY(-lado-lado/8);
                      cube2.translateY(-lado/2);
                       cube3.translateX(-lado/2);
                       cube2.translateZ(-lado/2);
                  cube3.translateY(-lado/2);
                  cube3.translateZ(-lado/2);
                  
                    }
                  }
                }
              }
            }
          }
        }
      }

      break;
      
  }
});
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
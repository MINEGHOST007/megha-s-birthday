import Experience from "../Experience";
import Resources from "../Utils/Resources";
import { MeshSurfaceSampler } from "./MeshSurfaceSampler";
import * as THREE from 'three'
import Camera from "../Camera";
//import { MeshSurfaceSampler } from './MeshSurfaceSampler';

export default class Room{
    constructor(){
    this.experience = new Experience();
    
   // this.sizes = this.experience.sizes;
   this.scene = this.experience.scene;
  //  this.canvas = this.experience.canvas;
    //console.log(this.experience,this.sizes,this.scene,this.canvas)
    //this.createPerspectiveCamera();
    //this.createOrthographicCamera();
   this.camera = this.experience.camera;
   this.resources =this.experience.resources;
   this.assetmain = this.resources.items.birthdaypresent;
   this.assetmug = this.resources.items.mug;
   this.actualasset = this.assetmain.scene;
   this.assetmuga = this.assetmug.scene;
   this.treelineasset = this.resources.items.treeline;
   this.tla = this.treelineasset.scene;
   this.tre = this.resources.items.tree;
   this.atre = this.tre.scene;

   this.sankeerth = this.resources.items.sankeerth;
   this.actual = this.sankeerth.scene;

   this.man = this.resources.items.man;
   this.aman = this.man.scene;

   this.clap = this.resources.items.clapper;
   this.aclap = this.clap.scene;

   this.stag = this.resources.items.stag;
   this.astag = this.stag.scene;

   this.r = this.resources.items.robot;
   this.ar = this.r.scene;

   this.f = this.resources.items.flower;
   this.af = this.f.scene;

   this.c = this.resources.items.car;
   this.ac = this.c.scene;

   this.cy = this.resources.items.cyclist;
   this.acy = this.cy.scene;

   this.con = this.resources.items.con;
   this.acon = this.con.scene;

   this.b = this.resources.items.bal;
   this.ab = this.b.scene;

   this.cake = this.resources.items.cake;
   this.acak = this.cake.scene;

   this.bill = this.resources.items.bill;
   this.abill = this.bill.scene;

   //this.assetmuga.scale.set(1.,1,1);
  // this.assetmuga.position.set(-6.5,0,-8);
   //console.log(this.actualasset);

   this.setModel();

   // console.log(this.camera,this.camera.perspectiveCamera);
   // this.setRenderer();
   /*const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshBasicMaterial( { color: 0x11ff11 } );
			const cube = new THREE.Mesh( geometry, material );
			this.scene.add( cube );*/

			




    }
    setModel(){

        this.scene.add(this.actualasset);
        
        this.assetmuga.scale.set(1,1,1);
        this.assetmuga.position.set(-6.5,0,-8);
        this.scene.add(this.assetmuga);

        var surface = this.treelineasset.scene.children[0];
        var sampler = new MeshSurfaceSampler(surface).build();
        /* Sample the coordinates */
        const tempPosition = new THREE.Vector3();
        const tempObject = new THREE.Object3D();

        let treeMaterial = new THREE.MeshLambertMaterial();
        const color = new THREE.Color();
        const treePalette = [0x320DAA,0x411BC7,0x5028E3];
        for (let i = 0; i < 70; i++) {
            sampler.sample(tempPosition);
          
            let tempObject = this.atre.clone();
            tempObject.position.set(tempPosition.x, tempPosition.y, tempPosition.z);
            tempObject.rotation.z = Math.random() * Math.PI;
            tempObject.scale.setScalar(Math.random() * 0.05 + 0.04);
          
            // align the up vector with the sky (positive Z axis)
            tempObject.up.set(0, 1, 0);
          
            // make the object face the negative Z direction (towards the sky)
            tempObject.lookAt(tempObject.position.clone().add(new THREE.Vector3(0, 0, -1)));
            color.setHex(treePalette[Math.floor(Math.random() * treePalette.length)]);
          
            tempObject.castShadow = true;
            tempObject.receiveShadow = true;
          
            this.scene.add(tempObject);
          }
          var mixer3;
          var action3;
          mixer3 = new THREE.AnimationMixer(this.actual);
          action3 = mixer3.clipAction(this.sankeerth.animations[0]);
          action3.play();
          this.actual.scale.set(1,1,1);
          this.actual.position.set(-6,0,8);
          this.actual.rotation.y =0;
          this.scene.add(this.actual);

          const shirtColor = new THREE.Color();
          const shirtPalette = [ 0xFA6D6D, 0xffffff ];
          const skinPalette = [ 0x8d5524, 0xc68642, 0xe0ac69, 0xf1c27d, 0xffdbac ];
          


/*for ( let i = 0; i < 8; i ++ ) {

        
        this.aman.scale.set(.49,.49,.49);
        this.aman.position.set(-8.5+ Math.random()*2-1, -0.01, 4.5 + Math.random()*2-1);
        this.aman.rotation.y = Math.random()*36;

}*/
for (let i = 0; i < 8; i++) {
    const amanInstance = this.aman.clone();
    amanInstance.scale.set(0.49, 0.49, 0.49);
    amanInstance.position.set(-8.5 + Math.random() * 2 - 1, -0.01, 4.5 + Math.random() * 2 - 1);
    amanInstance.rotation.y = Math.random() * 36;
    amanInstance.getObjectByName( "shirt" ).traverse( function( node ) {
        if ( node.isMesh ) { 
            shirtColor.setHex( shirtPalette[ Math.floor( Math.random() * shirtPalette.length ) ] );
            node.material.color.set( shirtColor ).convertSRGBToLinear();
            
        }
    } );
    amanInstance.getObjectByName( "body" ).traverse( function( node ) {
        if ( node.isMesh ) { 
            shirtColor.setHex( skinPalette[ Math.floor( Math.random() * skinPalette.length ) ] );
            node.material.color.set( shirtColor ).convertSRGBToLinear();
        }
    } );

    this.scene.add(amanInstance);
  }
 

  var confetii;
  var mixer69;
  var action69;
  confetii = this.acon;
  confetii.position.set(-11,0,-2);
  confetii.scale.set(0.3,0.3,0.3);
  confetii.rotation.y= 80*Math.PI/180;
  mixer69 = new THREE.AnimationMixer(confetii);
  //action69 = mixer69.clipAction(this.con.animations[0]);
  //action69.play();
  this.scene.add(confetii);
  console.log("this.acon:", this.acon);
console.log("this.con.animations[0]:", this.con.animations[0]);

var confetii3;
  var mixer69;
  var action69;
  confetii3 = this.acak;
  confetii3.position.set(-9.55,0.2,-1.9);
  //confetii.scale.set(0.3,0.3,0.3);
  //confetii.rotation.y= 80*Math.PI/180;
  //mixer69 = new THREE.AnimationMixer(confetii);
  //action69 = mixer69.clipAction(this.con.animations[0]);
  //action69.play();
  this.scene.add(confetii3);


  var confetii4;
  var mixer69;
  var action69;
  confetii4 = this.abill;
  confetii4.position.set(9.5,0,4);
  confetii4.scale.set(0.1,0.1,0.1);
  //confetii.rotation.y= 80*Math.PI/180;
  //mixer69 = new THREE.AnimationMixer(confetii);
  //action69 = mixer69.clipAction(this.con.animations[0]);
  //action69.play();
  this.scene.add(confetii4);

var clapper;
var mixer;
var action;
clapper = this.aclap;
this.aclap.scale.set(1.4, 1.4, 1.4);
clapper.position.set(9.5, 0, 3);
clapper.rotation.y = Math.PI/8;

//Playing Animation
mixer = new THREE.AnimationMixer( clapper );
action = mixer.clipAction( this.clap.animations[ 0 ] );
action.play();
//this.scene.add(clapper);

        /*for (let i = 0; i < 80; i++) {
            sampler.sample(tempPosition);
          
            let color = new THREE.Color();
            color.setHex(treePalette[Math.floor(Math.random() * treePalette.length)]);
          
            let instance = new THREE.InstancedMesh(this.atre.geometry, treeMaterial, 1);
          
            let matrix = new THREE.Matrix4();
            matrix.setPosition(tempPosition);
            matrix.scale(new THREE.Vector3(Math.random() * 0.05 + 0.04, Math.random() * 0.05 + 0.04, Math.random() * 0.05 + 0.04));
          
            let tempObject = new THREE.Object3D();
            tempObject.rotation.x = -Math.PI / 2;
            tempObject.applyMatrix4(matrix);
            instance.setMatrixAt(0, tempObject.matrix);
            instance.setColorAt(0, color.convertSRGBToLinear());
          
            let lookAtVector = new THREE.Vector3(0, 1, 0);
            let upVector = new THREE.Vector3(0, 0, 1);
            tempObject.lookAt(lookAtVector);
            tempObject.up.set(upVector.x, upVector.y, upVector.z);
            tempObject.updateMatrix();
            instance.setMatrixAt(0, tempObject.matrix);
          
            instance.castShadow = true;
            instance.receiveShadow = true;
            this.scene.add(instance);
          }
          
          

        for (let i = 0; i < 80; i++) {
            sampler.sample(tempPosition);
          
            let matrix = new THREE.Matrix4();
            matrix.setPosition(tempPosition);
            let color = new THREE.Color();
            color.setHex(treePalette[Math.floor(Math.random() * treePalette.length)]);
          
            matrix.scale(new THREE.Vector3(Math.random() * 0.05 + 0.04, Math.random() * 0.05 + 0.04, Math.random() * 0.05 + 0.04));
          
            let tempObject = new THREE.Object3D();
            tempObject.applyMatrix4(matrix);
          
            tempObject.up.set(0, 0, 1); // set the up vector to point in the z direction
            tempObject.lookAt(tempObject.position.clone().add(new THREE.Vector3(0, 1, 0))); // set the lookAt vector to point in the y direction
          
            let instance = new THREE.InstancedMesh(this.atre.geometry, treeMaterial, 1);
            instance.setMatrixAt(0, tempObject.matrix);
            instance.setColorAt(0, color.convertSRGBToLinear());
            instance.castShadow = true;
            instance.receiveShadow = true;
            this.scene.add(instance);
          }
          
        
        
        for(let i = 0; i < 80; i++) {
            sampler.sample(tempPosition);
            
            let tempObject = this.atre.clone();
            tempObject.position.set(tempPosition.x, tempPosition.y, tempPosition.z);
            //tempObject.rotation.x = Math.PI;
            tempObject.rotation.z = Math.random() * Math.PI;
            tempObject.scale.setScalar(Math.random() * 0.05 + 0.04);
          
            tempObject.castShadow = true;
            tempObject.receiveShadow = true;
          
            this.scene.add(tempObject);
          }*/
          /*for (let i = 0; i < 80; i++) {
            sampler.sample(tempPosition);
          
            let tempObject = this.atre.clone();
            tempObject.rotation.z = Math.PI ;
            tempObject.position.set(tempPosition.x, tempPosition.y, tempPosition.z);
            tempObject.rotation.y = Math.random() * Math.PI;
            tempObject.scale.setScalar(Math.random() * 0.05 + 0.04);
          
            tempObject.up.set(0, 0, 1); // set the up vector to point in the z direction
            tempObject.lookAt(tempObject.position.clone().add(new THREE.Vector3(0, 1, 0))); // set the lookAt vector to point in the y direction
          
            tempObject.castShadow = true;
            tempObject.receiveShadow = true;
          
            this.scene.add(tempObject);
          }*/
          
        


        

        //const strings = require('D:\vscode\birthday\Experience\Utils\Resources.js');

        var mixer4;
        var action4;
        var stag = this.astag;

        stag.scale.set(.2,.2,.2);
        stag.rotation.y = Math.PI/2;
        stag.position.set(6,0,-7);

        mixer4 = new THREE.AnimationMixer( stag );
        action4 = mixer4.clipAction( this.stag.animations[ 0 ] );
        action4.timeScale = 1;
        action4.play();
        this.scene.add(stag);

        var robot;
        var mixer5;
        var action5;
        robot = this.ar;
        mixer5 = new THREE.AnimationMixer( robot );
        action5 = mixer5.clipAction( this.r.animations[ 14 ] );
        action5.play();

        robot.scale.set(.5,.5,.5);
        robot.position.set(0,0,-9.5);
        robot.rotation.y = -Math.PI;

        //this.scene.add(robot);

     /*   var blossom = this.af.getObjectByName( 'Blossom');
    var stem = this.af.getObjectByName( 'Stem');

    let blossomMaterial = new THREE.MeshLambertMaterial({
        emissive: new THREE.Color(0xBDD1FF).convertSRGBToLinear(),
        emissiveIntensity: 0.5,
    });
    const color = new THREE.Color();
    const blossomPalette = [ 0xBDD1FF, 0xD5E1FF, 0xEEF2FF  ];

        for ( let i = 0; i < 500; i ++ ) {

                sampler.sample(tempPosition);
                tempObject.position.set(tempPosition.x, tempPosition.y-0.03, tempPosition.z);
                tempObject.scale.setScalar(Math.random() * 0.03 + 0.02);
                tempObject.updateMatrix();

                //color.setHex( blossomPalette[ Math.floor( Math.random() * blossomPalette.length ) ] );
                
                //var instancedBlossom = new THREE.InstancedMesh( blossom.geometry, blossomMaterial, 1 );
                //var instancedStem = new THREE.InstancedMesh( stem.geometry, stem.material, 1 );

                //instancedBlossom.setMatrixAt(0, tempObject.matrix);
                //instancedBlossom.position.y = instancedBlossom.position.y - 0.03;
                //instancedStem.setMatrixAt(0, tempObject.matrix);
                //instancedBlossom.setColorAt(0, color.convertSRGBToLinear());

                //instancedBlossom.castShadow = true;
                //instancedStem.castShadow = true;
                //instancedBlossom.receiveShadow = true;
                this.scene.add( this.af );
                this.scene.add( stem );

    }
});*/


for (let i = 0; i < 500; i++) {
    sampler.sample(tempPosition);
  
    let tempObject = this.af.clone();
    tempObject.position.set(tempPosition.x, tempPosition.y, tempPosition.z);
    tempObject.rotation.z = Math.random() * Math.PI;
    tempObject.scale.setScalar(Math.random() * 0.05 + 0.04);
  
    // align the up vector with the sky (positive Z axis)
    tempObject.up.set(0, 1, 0);
  
    // make the object face the negative Z direction (towards the sky)
    tempObject.lookAt(tempObject.position.clone().add(new THREE.Vector3(0, 0, -1)));
    //color.setHex(treePalette[Math.floor(Math.random() * treePalette.length)]);
  
    tempObject.castShadow = true;
    tempObject.receiveShadow = true;
  
    this.scene.add(tempObject);
  }

  for (let i = 0; i < 45; i++) {
    sampler.sample(tempPosition);
  
    let tempObject = this.ab.clone();
    tempObject.position.set(tempPosition.x, tempPosition.y, tempPosition.z);
    tempObject.rotation.z = Math.random() * Math.PI;
    tempObject.scale.set(0.025,0.025,0.025);
  
    // align the up vector with the sky (positive Z axis)
    tempObject.up.set(0, 1, 0);
  
    // make the object face the negative Z direction (towards the sky)
    tempObject.lookAt(tempObject.position.clone().add(new THREE.Vector3(0, 0, -1)));
    //color.setHex(treePalette[Math.floor(Math.random() * treePalette.length)]);
  
    tempObject.castShadow = true;
    tempObject.receiveShadow = true;
  
    this.scene.add(tempObject);
  }

  var car;
  car = this.ac;
  this.ac.position.set(12,0, -1);
  this.ac.scale.set(0.32,0.32,0.32);
  this.scene.add(this.ac);
       

  var cyclist;
var mixer2;
var action2;

        cyclist = this.acy;
        cyclist.scale.set(.33,.33,.33);
        cyclist.position.set(-12,0,-1)
        cyclist.rotation.y = 3*Math.PI /2;

        //Playing Animation
        mixer2 = new THREE.AnimationMixer( cyclist );
        action2 = mixer2.clipAction( this.cy.animations[ 0 ] );
        action2.timeScale = 0;
        action2.play();
        
        this.acy.traverse( function( node ) {
            if ( node.isMesh ) { 
                node.castShadow = true;
                node.receiveShadow = true;
            }
        } );
        this.scene.add(cyclist);

        let scrollSpeed = (function(){

            let lastPos, newPos, delta
          
            function clear() {
              lastPos = null;
              delta = 0;
            }
          
            clear();
            
            return function(){
              newPos = controls.getAzimuthalAngle();
              if ( lastPos != null ){ // && newPos < maxScroll 
                delta = newPos -  lastPos;
              }
              if (delta == 1 || delta == -1 ) delta = 0;
              if (delta < -1) { 
                  delta = -delta; 
                }
              //else if (delta > 1) cyclist.rotation.z = 0;
              if ( action2 )  action2.timeScale = delta*160;
        
              lastPos = newPos;
              return delta;
            
            };
        })();

        
    }
   /* setRenderer(){
        this.renderer = new THREE.WebGL1Renderer({
            canvas: this.canvas,
            antialias: true,
        });
        this.renderer.useLegacyLights= true;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.shadowMap.enabled = true;
        this.renderer.toneMappingExposure=1.75;
        this.renderer.shadowMap.type= THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);

    }*/
/*createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(35,this.sizes.aspect,0.1,1000);
        this.scene.add(this.perspectiveCamera)
    }
     createOrthographicCamera(){
        this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera((-this.sizes.aspect * this.sizes.frustrum)/2,(this.sizes.aspect * this.sizes.frustrum)/2,(this.sizes.frustrum)/2,(-this.sizes.frustrum)/2,-100,100);
        this.scene.add(this.orthographicCamera)
    }
    
    resize(){
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
        this.orthographicCamera.left=(-this.sizes.aspect * this.sizes.frustrum)/2;
        this.orthographicCamera.right=(this.sizes.aspect * this.sizes.frustrum)/2;
        this.orthographicCamera.top=(this.sizes.frustrum)/2;
        this.orthographicCamera.bottom=(-this.sizes.frustrum)/2;
        this.orthographicCamera.updateProjectionMatrix();

    }*/
    resize(){
       // this.renderer.setSize(this.sizes.width, this.sizes.height);
        //this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }
    update(){
       // this.renderer.render(this.scene,this.camera.perspectiveCamera);
    }



}
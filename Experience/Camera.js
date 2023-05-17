import Experience from "./Experience";
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera{
    constructor(){
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    console.log(this.experience,this.sizes,this.scene,this.canvas)
    this.createPerspectiveCamera();
    this.createOrthographicCamera();
    this.setOrbitControls();
    THREE.Cache.enabled = true;



    }
     createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(64,this.sizes.aspect,1,90);
        this.scene.add(this.perspectiveCamera)
        this.perspectiveCamera.position.set(0,30,30);
    }
     createOrthographicCamera(){
        this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera((-this.sizes.aspect * this.sizes.frustrum)/2,(this.sizes.aspect * this.sizes.frustrum)/2,(this.sizes.frustrum)/2,(-this.sizes.frustrum)/2,-500,500);
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

    }
    update(){
        this.controls.update();
    }
    setOrbitControls(){
        this.controls = new OrbitControls(this.perspectiveCamera,this.canvas)
        this.controls.enableDamping = true;
        this.controls.enableZoom = true;
             this.controls.target.set(0,0,0);
this.controls.enablePan = false;
this.controls.minPolarAngle = Math.PI/2.4;
this.controls.maxPolarAngle = Math.PI/2.15;
this.controls.minDistance = 16;
this.controls.maxDistance = 30;
this.controls.enableDamping = true;
this.controls.rotateSpeed = 0.25;
        
    }

    



}
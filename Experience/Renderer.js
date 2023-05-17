import Experience from "./Experience";
import * as THREE from 'three'


export default class Renderer{
    constructor(){
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    //console.log(this.experience,this.sizes,this.scene,this.canvas)
    //this.createPerspectiveCamera();
    //this.createOrthographicCamera();
    this.camera = this.experience.camera;

    console.log(this.camera,this.camera.perspectiveCamera);
    this.setRenderer();



    }
    setRenderer(){
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

    }
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
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }
    update(){
        this.renderer.render(this.scene,this.camera.perspectiveCamera);
    }



}
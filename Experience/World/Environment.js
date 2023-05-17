import Experience from "../Experience";
import Resources from "../Utils/Resources";
import * as THREE from 'three'


export default class Environment{
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
   //this.assetmain = this.resources.items.birthdaypresent;
   //this.actualasset = this.assetmain.scene;
   //console.log(this.actualasset);

   //this.setModel();
   this.setSunlight();

   // console.log(this.camera,this.camera.perspectiveCamera);
   // this.setRenderer();
   /*const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshBasicMaterial( { color: 0x11ff11 } );
			const cube = new THREE.Mesh( geometry, material );
			this.scene.add( cube );*/

			




    }
    setSunlight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff",1,100);
        this.sunLight.castShadow = true;
        //this.sunLight.shadow.camera.far =20;
        this.sunLight.shadow.mapSize.set(2048,2048);
        this.sunLight.shadow.normalBias = 0.05;
        //this.sunLight.position.set(2,7,3);
       // this.scene.add(this.sunLight);
        //this.sunLight.position.set(-2,7,-3);
        let shadowMapSize = 13;
        this.sunLight.position.set(0,12,12);
this.sunLight.color.setHSL( 0.1, 1, 0.95 );
this.sunLight.visible = true;
this.sunLight.castShadow = true;
this.sunLight.shadow.camera.near = 0.5; 
this.sunLight.shadow.camera.far = shadowMapSize*2;
this.sunLight.shadow.camera.top = shadowMapSize;
this.sunLight.shadow.camera.bottom = -shadowMapSize;
this.sunLight.shadow.camera.left = -shadowMapSize;
this.sunLight.shadow.camera.right = shadowMapSize;
this.sunLight.shadow.normalBias = 0.02;
this.scene.add(this.sunLight);
this.scene.add( this.sunLight.target );

this.spotLight = new THREE.SpotLight(0xffffff, 4, 6, Math.PI/4, 1, 1);
this.spotLight.position.set( 0, 3.5, 0 );
this.spotLight.visible = false;
this.spotLight.castShadow = false;
this.spotLight.shadow.mapSize.width = 1024;
this.spotLight.shadow.mapSize.height = 1024;
this.spotLight.shadow.camera.near = 0.5; 
this.spotLight.shadow.camera.far = 2;
this.spotLight.shadow.normalBias = 0.02;
this.scene.add( this.spotLight );
this.scene.add( this.spotLight.target );

this.hemiLight = new THREE.HemisphereLight( 0xfff, 0xfff, 0.6 );
this.hemiLight.color.setHSL( 0.6, 1, 0.6 );
this.hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
this.hemiLight.position.set( 0, 500, 0 );
this.scene.add( this.hemiLight );

    }
   /* setModel(){
        this.scene.add(this.actualasset);
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
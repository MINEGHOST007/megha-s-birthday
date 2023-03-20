import EventEmitter from "events";
import Experience from "../Experience";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader.js";
import * as THREE from 'three'

export default class Resources extends EventEmitter{
    constructor(assets){
        super();
       /* this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width/this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio , 2)

        window.addEventListener("resize",()=>{
            this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width/this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio , 2)
        this.emit("resize");
        })*/
        this.experience= new Experience();
        this.scene = this.experience.scene;
        this.renderer= this.experience.renderer;
        this.assets = assets;
       console.log(this.assets);
       this.items={};
       this.queue = this. assets.length;
       this.loaded = 0;
       this.setLoaders();
       this.startLoading();
       
    }
    setLoaders(){
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath("/draco/");
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);

    }
    startLoading(){
        for(const asset of this.assets)
        {
            if(asset.type === "glbModel"){
                this.loaders.gltfLoader.load(asset.path,(file)=>{
                    this.singleAssetLoader(asset, file); });
            }/*q'else if (asset.type === "parts" ){
                this.video = {};
                this.videoTexture = {};

                this.video[asset.name]=
                //this.video[asset.name].src = asset.path;
               // this.video[asset.name].muted = true;
                //this.video[asset.name].playsInline= true;

                //this.video[asset.name].autoplay = true;
               // this.video[asset.name].loop= true;
               // this.video[asset.name].play();

                this.videoTexture[asset.name]= new THREE.VideoTexture(this.video[asset.name]);
                this.videoTexture[asset.name].flipY = true;
                this.videoTexture[asset.name].minFilter = THREE.NearestFilter;
                this.videoTexture[asset.name].mageFilter = THREE.NearestFilter;
                this.videoTexture[asset.name].generateMimaps = false;
                this.videoTexture[asset.name].encoding = THREE.sRGBEncoding;
            }*/
            
           
        }
    }

    singleAssetLoader(asset,file){
        this.items[asset.name]= file;
        console.log(asset.name);
        console.log(this.items);
        this.loaded++;
        window.strings = []; // an empty array to store the strings

for (let i = 1; i <= 12; i++) {
  strings.push(asset.name);
   // add the string to the array using template literals
   //console.log(strings[i-1]);
}

/*for (let i = 0; i <= 11; i++) {
    if (strings[i] === 'birthdaypresent') {
       console.log("success1");
     }

     if (strings[i] === 'mug') {
       console.log("success");
       this.scene.scale.set(1,1,1);
       this.scene.position.set(-6.5,0,-8);
     }

     if (strings[i] === 'man') {
         console.log("success");
         this.scene.scale.set(1,1,1);
         this.scene.position.set(-6.5,0,-8);
       }
   }*/

         //exports.strings= strings;

        console.log("asset loading");
        console.log(this.loaded);
        if(this.loaded== this.queue){
            this.emit("megha");
            console.log("all assets are done");
            
        }
     }
     
}
import * as THREE from 'three'
import Sizes from './Utils/Sizes';
import Resources from './Utils/Resources';
import Camera from './Camera';
import Renderer from './Renderer';
import Time from './Utils/Time';
import World from './World/World';
import assets from './Utils/assets';
import Floor from './World/Floor';

export default class Experience {
    static instance
    constructor(canvas) {
        this.canvas = canvas;
        /*console.log("anusrita");
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1,1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({ color : x00ff00});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z=5;
        function animate(){
            requestAnimationFrame(animate);
            cube.rotation.x +=0.01;
            cube.rotation.y +=0.01;
            renderer.render(scene.camera);

        };
        animate();
        const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshBasicMaterial( { color: 0x11ff11 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			}

			animate();*/
        if(Experience.instance){
            return Experience.instance
        }
        Experience.instance = this 
        this.canvas = canvas;
        this.sizes =  new Sizes();
        this.scene = new THREE.Scene();
        this.camera= new Camera();
        this.renderer= new Renderer();

        this.resources = new Resources(assets);
        //this.floor = new Floor();


        this.time= new Time();
        this.world = new World();

        this.time.on("moneyheist", ()=>{
            this.update();
        })
        this.sizes.on("resize",()=>{
            this.resize();
        })


        }
        
        update(){
            this.camera.update();
            this.renderer.update();
        }
        resize(){
            this.camera.resize();
            this.renderer.resize();
        }

}
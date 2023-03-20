import EventEmitter from "events";

export default class Time extends EventEmitter{
    constructor(){
        /*this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width/this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio , 2)

        window.addEventListener("resize",()=>{
            this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width/this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio , 2)
        })*/
        super();
        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;
        this.update()
    }
    update(){
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start;

        //console.log(this.delta);
        this.emit("moneyheist");
        window.requestAnimationFrame(this.update.bind(this));


    }
}
import { Wave } from "./wave.js";

class App{
  constructor(){
    //canvas 생성
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.wave = new Wave();

    //resize 지정
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    //애니메이션 지정
    requestAnimationFrame(this.animate.bind(this));
  }

  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    //canvas를 더블사이즈로 지정
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2,2)

    this.wave.resize(this.stageWidth, this.stageHeight)
  }

  animate(t){
    this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);

    this.wave.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

//윈도우 로드시 앱 생성
window.onload = () => {
  new App();
}
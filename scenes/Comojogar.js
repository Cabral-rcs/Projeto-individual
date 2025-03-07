class Comojogar extends Phaser.Scene{ // Chamo a cena
    constructor(){
        super('comojogar') // Defino um nome para a cena
    }

    preload(){ // Carrego as imagens 
        this.load.image('telacomojogar', 'assets/assets_Comojogar/telacomojogar.png');
        this.load.image('botao', 'assets/assets_Comojogar/botaovoltar.png');

    }
    create(){
        this.add.image(400, 400, 'telacomojogar'); // Adiciono as imagens na tela

        // Adiciono o botão
        this.botao = this.add.sprite(400, 700, 'botao'); 
        this.botao.setInteractive()
        this.botao.on('pointerdown', () => { // Crio uma função de seta 
            this.scene.start('inicio'); // Troco de cena
        })

    }
    update(){

    }



}
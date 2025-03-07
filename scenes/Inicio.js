class Inicio extends Phaser.Scene{

    constructor(){
        // Defino o nome da cena
        super('inicio') 
    }

    preload(){
        // Carrego as imagens 
        this.load.image('telainicio', 'assets/assets_Inicio/telainicio.png')
        this.load.image('botaoinicio', 'assets/assets_Inicio/botaoiniciar.png')
        this.load.image('botaocomojogar', 'assets/assets_Inicio/botaocomojogar.png')

    }
    create(){

        // Adiciono as imagens na tela
        this.add.image(400, 400, 'telainicio');
        

        // Crio um botão de início
        this.botaoiniciar = this.add.sprite(400, 200, 'botaoinicio')
        this.botaoiniciar.setInteractive();
        this.botaoiniciar.on('pointerdown', () => {

            //Mudo de cena
            this.scene.start('jogatina') 
        })

        // Crio um botão de tutorial
        this.botaocomojogar = this.add.sprite(400, 300, 'botaocomojogar')
        this.botaocomojogar.setInteractive();
        this.botaocomojogar.on('pointerdown', ()=> {
            this.scene.start('comojogar')
        })

    }
    update(){

    }




    }
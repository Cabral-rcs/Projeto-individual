class Fim extends Phaser.Scene{
    constructor() {
        // Defino o nome da cena
        super('fim');

    }
    preload(){
        // Carrego as imagens
        this.load.image('telafim', 'assets/assets_Fim/telafim.png')
        this.load.image('botao', 'assets/assets_Fim/botaovoltar.png')
    }
    create(){
        // Adiciono o background
        this.add.image(400, 400, 'telafim');

        // Crio botão de voltar ao início
        this.botao = this.add.sprite(420, 300, 'botao');
        this.botao.setInteractive();
        this.botao.on('pointerdown', () => {
            this.scene.start('inicio');
        })

    }
    upload(){

    }
    




}
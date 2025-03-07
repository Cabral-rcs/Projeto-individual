class Jogo extends Phaser.Scene{
    constructor() {
        super('jogatina');
        this.situacao = 0;
        this.placar = 0; // Inicializa o placar
        this.placarText = null; // Variável para o texto do placar
    }
        preload(){
            // Carrego as spritesheets
            this.load.spritesheet('boneco','assets/spritesheet/persona.png', {frameWidth: 24, frameHeight: 24});
            this.load.spritesheet('corpo', 'assets/spritesheet/corpo.png', {frameWidth: 24, frameHeight: 24});
            this.load.spritesheet('voo', 'assets/spritesheet/completo.png', {frameHeight: 24, frameWidth: 24});
            this.load.spritesheet('subida', 'assets/spritesheet/subindo.png', {frameHeight: 24, frameWidth: 24});

            // Carrego as imagens
            this.load.image('estrela', 'assets/assets_jogo/estrela.png') // ok
            this.load.image('bg', 'assets/assets_jogo/bg.png'); // ok
            this.load.image('plataforma', 'assets/assets_jogo/plataforma.png'); // ok
            this.load.image('plataformaG','assets/assets_jogo/plataformaG.png'); // ok
            this.load.image('corpobase', 'assets/assets_jogo/corpobase.png'); //ok
            this.load.image('asa', 'assets/assets_jogo/asas.png'); // ok
            this.load.image('galaxia','assets/assets_jogo/galaxia.png');
        }
        // Crio uma função que defini qual spritesheet o boneco vai usar
        mov(a){
            this.situacao = a
        }
        // Crio uma função que mostra a pontuação e imprime na tela
        pontos(a) {
            this.placar = a;
            this.placarText.setText('Pontos: ' + this.placar); // Atualiza o texto do placar
        }

        create(){
            // Crio uma lista para armazenar as estrelas coletadas
            this.lista = [],
            this.add.image(400, 400, 'bg');
            // Faço um input do teclado
            this.controle = this.input.keyboard.createCursorKeys();
            
            // Adiciono um grupo estático de plataformas
            this.plataforma = this.physics.add.staticGroup();
            this.plataforma.create(330, 650, 'plataforma');
            this.plataforma.create(85, 700, 'plataforma');
            this.plataforma.create(200, 550, 'plataforma');
            this.plataforma.create(715, 410, 'plataforma');
            this.plataforma.create(460, 350, 'plataforma');

            // Adiciono um grupo estático de plataformas grandes
            this.plataformaG = this.physics.add.staticGroup();
            this.plataformaG.create(500, 500, 'plataformaG');
            this.plataformaG.create(170, 300, 'plataformaG');

            // Adiciono o personagem, coloco colisão com as bordas e plataformas
            this.boneco = this.physics.add.sprite(800, 800, 'boneco').setScale(1.5);
            this.boneco.setCollideWorldBounds(true);
            this.physics.add.collider(this.boneco, this.plataforma);
            this.physics.add.collider(this.plataformaG, this.boneco);

            // Adiciono a galáxia
            this.galaxia = this.physics.add.sprite(650, 100, 'galaxia');

            // Crio uma base invisível para ela não cair
            this.base = this.physics.add.staticImage(650, 200, 'galaxia')
            this.base.setVisible(false)
            this.physics.add.collider(this.galaxia, this.base);

            // Crio uma função quando há contato entre boneco e galáxia
            this.physics.add.overlap(this.boneco, this.galaxia, ()=> {
                this.scene.start('fim')

            })

            // Adiciono a parte darmadura e colisão com a plataforma
            this.armadura = this.physics.add.sprite(600, 450, 'corpobase').setScale(1.5);
            this.physics.add.collider(this.armadura, this.plataformaG);

            // Crio uma função quando há contato entre boneco e parte da armadura
            this.physics.add.overlap(this.boneco, this.armadura, () => {
                this.mov(1)
                this.armadura.destroy()
            });

            // Adiciono o resto da armadura com solisão e função quando há contato com o boneco.
            this.asa = this.physics.add.sprite(80, 200, 'asa').setScale(1.5);
            this.physics.add.collider(this.asa, this.plataformaG);
            this.physics.add.overlap(this.asa, this.boneco, () => {
                this.mov(2)
                this.asa.destroy()
            })

            // Escrevo o placar na tela do jogo
            this.placarText = this.add.text(10, 10, 'Pontos: 0', { fontSize: '24px', fill: '#fff' });

            // Da linha 99 a 138 crio sprites que serão coletados e adicionados a uma lista
            // A pontuação do jogo se da pelo tamanho dessa lista
            this.estrela1 = this.physics.add.sprite(50, 600, 'estrela');
            this.physics.add.collider(this.estrela1, this.plataforma);
            this.physics.add.overlap(this.estrela1, this.boneco, () => {
                this.estrela1.destroy()
                this.lista.push('estrela2')
                for (var i = 0; i < this.lista.length; i++ ){
                    this.valor = this.lista.length
                }
                this.pontos(this.valor)
            })

            this.estrela2 = this.physics.add.sprite(350, 550, 'estrela');
            this.physics.add.collider(this.estrela2, this.plataforma);
            this.physics.add.overlap(this.estrela2, this.boneco, () => {
                this.estrela2.destroy()
                this.lista.push('estrela2')
                for (var i = 0; i < this.lista.length; i++ ){
                    this.valor = this.lista.length
                }
                this.pontos(this.valor)
            })

            this.estrela3 = this.physics.add.sprite(150, 450, 'estrela');
            this.physics.add.collider(this.estrela3, this.plataforma);
            this.physics.add.overlap(this.estrela3, this.boneco, () => {
                this.estrela3.destroy()
                this.lista.push('estrela3')
                for (var i = 0; i < this.lista.length; i++ ){
                    this.valor = this.lista.length
                }
                this.pontos(this.valor)
            })

            this.estrela4 = this.physics.add.sprite(750, 350, 'estrela');
            this.physics.add.collider(this.estrela4, this.plataforma);
            this.physics.add.overlap(this.estrela4, this.boneco, () => {
                this.estrela4.destroy()
                this.lista.push('estrela4')
                for (var i = 0; i < this.lista.length; i++ ){
                    this.valor = this.lista.length
                }
                this.pontos(this.valor)
            })

            this.estrela5 = this.physics.add.sprite(400, 250, 'estrela');
            this.physics.add.collider(this.estrela5, this.plataforma);
            this.physics.add.overlap(this.estrela5, this.boneco, () => {
                this.estrela5.destroy()
                this.lista.push('estrela5')
                for (var i = 0; i < this.lista.length; i++ ){
                    this.valor = this.lista.length
                }
                this.pontos(this.valor)
            })

            // Da linha 144 a 204 crio animações para o boneco com diferentes spritesheets
            this.anims.create({
                key: 'esquerda',
                frames: this.anims.generateFrameNumbers('boneco', {start:0, end: 2}),
                frameRate: 10,  
            })

            this.anims.create({
                key: 'direita',
                frames: this.anims.generateFrameNumbers('boneco', {start:4, end: 6}),
                frameRate: 10,
                repeat: -1
                
            })

            this.anims.create({
                key: 'frente',
                frames: this.anims.generateFrameNumbers('boneco', {start: 3, end: 3}),
                frameRete: 10,
            })

            this.anims.create({
                key: 'esquerdaC',
                frames: this.anims.generateFrameNumbers('corpo', {start:0, end: 2}),
                frameRate: 10,  
            })

            this.anims.create({
                key: 'direitaC',
                frames: this.anims.generateFrameNumbers('corpo', {start:4, end: 6}),
                frameRate: 10,
                repeat: -1
                
            })

            this.anims.create({
                key: 'frenteC',
                frames: this.anims.generateFrameNumbers('corpo', {start: 3, end: 3}),
                frameRete: 10,
            });

            this.anims.create({
                key: 'esquerdaA',
                frames: this.anims.generateFrameNumbers('voo',{start:0, end: 2}), 
                frameRate: 10, 
            })

            this.anims.create({
                key: 'direitaA',
                frames: this.anims.generateFrameNumbers('voo',{start:4, end: 6}), 
                frameRate: 10, 
            })
            this.anims.create({
                key: 'frenteA',
                frames: this.anims.generateFrameNumbers('voo',{start:3, end: 3}), 
                frameRate: 10, 
            })
            this.anims.create({
                key: 'subindo',
                frames: this.anims.generateFrameNumbers('subida',{start:0, end: 0}),
                frameRate: 10,
            })
        }
        update(){

                // Crio uma condição para qual animação usar
                if (this.situacao == 0){

                    // Crio condições para o controle do boneco
                    if (this.controle.left.isDown ){
                        this.boneco.x -= 4;
                        this.boneco.anims.play('esquerda', true);

                    } else if(this.controle.right.isDown){
                        this.boneco.x += 4;
                        this.boneco.anims.play('direita', true);

                    } else if (this.controle.up.isDown){
                        this.boneco.y -= 5;
                        this.boneco.anims.play('frente', true);
                    } else {
                        this.boneco.anims.play('frente', true);
                    }

                // Crio uma condição para qual animação usar
                } else if (this.situacao == 1){

                            // Crio condições para o controle do boneco
                            if (this.controle.left.isDown ){
                                this.boneco.x -= 4;
                                this.boneco.anims.play('esquerdaC', true);

                            } else if(this.controle.right.isDown){
                                this.boneco.x += 4;
                                this.boneco.anims.play('direitaC', true);

                            } else if (this.controle.up.isDown){
                                this.boneco.y -= 5;
                                this.boneco.anims.play('frenteC', true);
                            } else {
                                this.boneco.anims.play('frenteC', true);
                            }
                        // Condição final para qual animação usar
                        } else {

                            // Crio condições para o controle do boneco
                            if (this.controle.left.isDown ){
                                this.boneco.x -= 7;
                                this.boneco.anims.play('esquerdaA', true);

                            } else if(this.controle.right.isDown){
                                this.boneco.x += 7;
                                this.boneco.anims.play('direitaA', true);

                            } else if (this.controle.up.isDown){
                                this.boneco.y -= 10;
                                this.boneco.anims.play('subindo', true);
                            } else {
                                this.boneco.anims.play('frenteA', true);
                            }
                        }
            };
}
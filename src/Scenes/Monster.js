class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        //legs
        this.rightLegX = this.bodyX + 50;
        this.rightLegY = this.bodyY + 150;

        this.leftLegX = this.bodyX - 50;
        this.leftLegY = this.bodyY + 150;

        //arms
        this.rightArmX = this.bodyX + 80;
        this.rightArmY = this.bodyY + 40;

        this.leftArmX = this.bodyX - 80;
        this.leftArmY = this.bodyY + 40;

        //head accessories
        this.rightEarX = this.bodyX + 50;
        this.rightEarY = this.bodyY - 100;

        this.leftEarX = this.bodyX - 50;
        this.leftEarY = this.bodyY - 100;

        this.noseX = this.bodyX;
        this.noseY = this.bodyY - 10;

        //eyes
        this.rightEyeX = this.bodyX + 40;
        this.rightEyeY = this.bodyY - 50;

        this.leftEyeX = this.bodyX - 40;
        this.leftEyeY = this.bodyY - 50;

        //mouths
        this.mouthSmileX = this.bodyX;
        this.mouthSmileY = this.bodyY + 40;

        this.mouthFangsX = this.bodyX;
        this.mouthFangsY = this.bodyY + 40;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_whiteF.png");

        //leg sprites
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_redB.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_blueA.png");
        my.sprite.leftLeg.flipX = true;

        //arm sprites
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueA.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_yellowE.png");
        my.sprite.leftArm.flipX = true;

        //head accessories sprites
        my.sprite.rightEar = this.add.sprite(this.rightEarX, this.rightEarY, "monsterParts", "detail_dark_ear.png");
        my.sprite.leftEar = this.add.sprite(this.leftEarX, this.leftEarY, "monsterParts", "detail_green_horn_large.png");
        my.sprite.leftEar.flipX = true;

        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_yellow.png");

        //eye sprites
        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, "monsterParts", "eye_blue.png");
        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_human_blue.png");
        my.sprite.leftEye.flipX = true;

        //mouth sprites
        my.sprite.mouthSmile = this.add.sprite(this.mouthSmileX, this.mouthSmileY, "monsterParts", "mouthE.png");
        my.sprite.mouthFangs = this.add.sprite(this.mouthFangsX, this.mouthFangsY, "monsterParts", "mouthJ.png");
        my.sprite.mouthFangs.visible = false;

        //keyboard input handling
        this.input.keyboard.on("keydown", (event) => {
            if (event.code === "KeyS") {
                my.sprite.mouthSmile.visible = true;
                my.sprite.mouthFangs.visible = false;
            } else if (event.code === "KeyF") {
                my.sprite.mouthSmile.visible = false;
                my.sprite.mouthFangs.visible = true;
            };
            if (event.code === "KeyA") {
                for (let part in my.sprite) {
                    my.sprite[part].x -= 10;
                }
            }
            if (event.code === "KeyD") {
                for (let part in my.sprite) {
                    my.sprite[part].x += 10;
                }
            }
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
    }
}
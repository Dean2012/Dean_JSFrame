/**********************
 *  SecondScene.js
 *  主页面场景
 *
 *  For GameFramework
 *  Created by Dean on 15/8/15.
 **********************/

var SecondScene = cc.Scene.extend({
    ctor:function() {
        this._super();
        D_component.tipMsgManager(TipType.FT_TXT, "ctor SecondScene");
    },

    onEnter:function() {
        this._super();

        var FPSLabel = new cc.LabelTTF("222222", "Arial", 50);
        this.addChild(FPSLabel);
        FPSLabel.x = cc.winSize.width * 0.5;
        FPSLabel.y = cc.winSize.height * 0.5;

        this.schedule(this.enterNextScene, 10.0);
    },

    onExit:function() {
        this._super();

    },

    enterNextScene:function(dt) {
        ClientManager.sendNotice(ClientName.MAIN_SCENE);
    }

});
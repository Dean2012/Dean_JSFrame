/**********************
 *  BaseModule.js
 *  模块顶级类
 *
 *  For GameFramework
 *  Created by Dean on 15/8/15.
 **********************/

var BaseModule = cc.Class.extend({
    moduleName : null,
    // 初始化
    ctor:function(argument) {
        if (this.moduleName)
            ClientManager.addNotice(this.moduleName, this.showScene.bind(this));
        else
            D_component.tipMsgManager("场景注册失败！");
    },

    init:function(argument) {
        // body...
    },

    // 设置好名字可以直接回调切换场景
    showScene:function(data) {
        if (!this.moduleName) {
            cc.log("scene 不存在");
            D_component.tipMsgManager("scene 不存在！");
            return ;
        }

        var dt = data || null;
        var name = "new " + this.moduleName + "(" + dt + ")";
        var scene = eval(name);

        this.replaceScene(scene);
    },

    // 手动切换场景
    replaceScene:function(scene) {
        if (!scene) {
            cc.log("scene 不存在");
            D_component.tipMsgManager("scene 不存在！");
            return ;
        }

        var lastScene = cc.director.getRunningScene();
        if (lastScene)
            lastScene.removeFromParent(true);
        
        cc.director.runScene(scene);
    }
});
/**********************
 *  InitScene.js
 *  游戏初始场景 进行加载文件及其他预加载任务
 *
 *  For GameFramework
 *  Created by Dean on 15/8/15.
 **********************/

var InitScene = cc.Scene.extend({
    ctor:function() {
        this._super();

    },

    onEnter:function() {
        this._super();

        var tempThis = this;
        cc.loader.loadJs(["src/resource/jsFiles.js"], function (err)
        {
            cc.log("InitScene:...loadJs src/resource/jsFiles");
            cc.loader.loadJs(jsFiles, function (err)
            {
                cc.log("InitScene:...loadJs jsFiles");
//                var searchPaths = tempThis.am.getLocalManifest().getSearchPaths();
//              cc.sys.cleanScript(searchPaths[0]+"src/module/login/Sprite/showNoticeLayer.js");//ok

                ModuleManager.init();
                // 想去的第一个场景
                ClientManager.sendNotice(ClientName.MAIN_SCENE);
            });
        });


    },

    onExit:function() {
        this._super();

    }

});
/**********************
 *  TipManager.js
 *  悬浮提示框管理模块
 *  文本提示：TipManager.floatTip(TipType.FT_TXT,'提示文本');
 *  
 *  For GameFramework
 *  Created by Dean on 15/8/15.
 **********************/
var TipManager = TipManager || {};

TipManager.MessageQueue = [];
TipManager.isRunning = false;
TipManager.tipLayer = null;

TipManager.floatTip = function (dataType, value)
{
    if (TipManager.tipLayer == null) {
        var currentScene = cc.director.getRunningScene();
        TipManager.tipLayer = new FloatTipLayer();
        currentScene.addChild(TipManager.tipLayer, 1000);
    };

    var tempList = [];
	tempList["type"] = dataType;
	tempList["value"] = value;
    TipManager.MessageQueue.push(tempList);

    TipManager.showTipSameTime();
};

TipManager.showTipSameTime = function () {
    if (TipManager.MessageQueue.length == 0 || TipManager.isRunning || TipManager.tipLayer == null) {
        return ;
    }
    else {
        setTimeout(TipManager.showTipSameTime, 1000);
    }

    TipManager.isRunning = true;

    var type = TipManager.MessageQueue[0]["type"];
    var value = TipManager.MessageQueue[0]["value"];

    var temptip = new FloatTip({"value":value});
    TipManager.tipLayer.addChild(temptip);

    TipManager.MessageQueue.shift();
};

var FloatTipLayer = cc.Layer.extend({
    ctor:function()
    {
        this._super();
    },

    onExit:function()
    {
        this._super();
        TipManager.tipLayer = null;
        TipManager.isRunning = false;
        TipManager.MessageQueue = [];
    }
});
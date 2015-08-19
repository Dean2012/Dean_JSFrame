/**********************
 *  D_Layer.js
 *  层级通用类
 *  可以设置层级通用功能
 *
 *  For GameFramework
 *  Created by Dean on 15/8/15.
 **********************/

D_Layer_List = [];

var D_Layer = cc.Layer.extend({

    zOrder:0,

    ctor:function() {
        this._super();

        this.zOrder = D_Layer_List.length + 1;

        initTouch();
    },

    onEnter:function() {
        this._super();

        D_Layer_List.push(this);
    },

    onExit:function() {
        this._super();

        D_Layer_List.pop();
    },

    initTouch:function() {
        var _listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan.bind(this),
            onTouchMoved: this.onTouchMoved.bind(this),
            onTouchEnded: this.onTouchEnded.bind(this)
        });
        cc.eventManager.addListener(_listener, this);
    },

    onTouchBegan:function(touch, event)
    {
        // 不是最高层级 不触发触摸
        if (this.zOrder <= D_Layer_List.length)
            return false;
    },

    onTouchMoved:function(touch, event) 
    {
        return true;
    },

    onTouchEnded:function(touch, event) 
    {
        return true;
    }
});
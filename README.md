# Dean_JSFrame
cocos2d-js frameword
2015/8/15

模块的划分
communication - 通信方面
    Client - 客户端通信
    	ClientManager - 客户端通信管理器
    	ClientName - 客户端通信命名
    Network - 网络通信方面

component - 组件
	D_component - 组件工厂类 统一接口
    LabelComponent - 字体组件
    EventComponent - 时间分发组件
    LayerComponent - 通用层基类
    TipComponent - 悬浮提示框组件

data - 数据模块
	GameConfig - 全局数据

module - 主业务逻辑模块划分

resource - 资源类管理
	InitScene - 初始化场景 后期可增加功能
	jsFiles - 初始化场景后加载的js文件
	resource - 资源文件

tools - 通用工具类开发



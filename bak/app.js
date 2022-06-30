//app.js
App({
  globalData: {
    userInfo: null,
    navBarHeight: 0, // 导航栏高度
    menuRight: 7, // 胶囊距右方间距（方保持左、右间距一致）
    menuBottom: 4, // 胶囊距底部间距（保持底部间距一致）
    menuHeight: 32, // 胶囊高度（自定义内容可与胶囊高度保证一致）
  },


  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'cloud1-1g471hgg8a9d1be7',
        traceUser: true,
      })
    }

    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    console.log("x1", systemInfo)
    console.log("x2", menuButtonInfo)
    // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
    this.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
    // this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    this.globalData.menuBottom = menuButtonInfo.top - systemInfo.statusBarHeight;
    this.globalData.menuHeight = menuButtonInfo.height;

  }
})

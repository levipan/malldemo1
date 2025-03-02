# 记事本
https://developers.weixin.qq.com/community/develop/article/doc/00068aec7941f8f57509794be54413
https://developers.weixin.qq.com/community/develop/article/doc/00028227a2030013659d571275bc13

https://www.jianshu.com/u/70e7c425c4ce

https://github.com/Tencent/weui-wxss


# 简介
这是一个巴爷商城的微信小应用版本，是[巴爷微信商城](https://wechat.bayekeji.com)的简单版本。
* demo1
https://github.com/bayetech/wechat_mall_applet
* demo2
https://github.com/lin-xin/wxapp-mall
* demo3
https://github.com/skyvow/m-mall
* demo4
https://github.com/reference-project/zzc--
* demo5
https://github.com/Dejavu-Tech/EP-WechatApp
* demo6
https://github.com/FZliweiliang/wechat-app-mall

# 实现功能

* 首页商品浏览
* 分类商品浏览
* 加入购物车
* 编辑收货地址
* 通过API与后端通信（获取商品列表、提交订单，付款等）

需要后台 JSON API 应用的配合，我们提供了一个参考的[后台实现](https://github.com/bayetech/wechat_mall_applet_backend)，但您几乎肯定仍然需要自己写一个后端。

# 常见问题

如果遇到问题可以直接提issue:

 - 甄选商品无法显示：rapi-staging.bayekeji.com 是测试服务器，可能会有其他同事新建不完整的测试产品，造成这样的问题
 - 如果填写错误的appid，也是没法实现登陆的，因为和服务器端配置的appid不一致，就没法从微信获取用户数据，另外我好像也不能告诉你们这个小程序的appid吧。。。所以你们的确需要自己写一个后端，后端代码开源地址：https://github.com/bayetech/wechat_mall_applet_backend ，仅供参考。


# 屏幕截图

![a](https://although2013.github.io/images/wechat_applet_1.png)
![a](https://although2013.github.io/images/wechat_applet_2.png)
![a](https://although2013.github.io/images/wechat_applet_3.png)

//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: 'World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 处理点击按钮事件
  click: function () {
    wx.navigateTo({
      url: '../home/home'
    });
  },
  goDemo: function () {
    wx.navigateTo({
      url: '../demo/demo'
    })
  },
  goViewContainer: function () {
    wx.navigateTo({
      url: '../viewgroup/viewgroup'
    })
  },
  goScrollView: function () {
    wx.navigateTo({
      url: '../scrollview/scrollview'
    })
  },
  goBaseContent: function () {
    wx.navigateTo({
      url: '../baseContent/baseContent'
    })
  },
  goForm: function () {
    wx.navigateTo({
      url: '../form/form'
    })
  },
  goOperaFeedback: function () {
    wx.navigateTo({
      url: '../operaFeedback/operaFeedback'
    })
  },
  goMedia: function () {
    wx.navigateTo({
      url: '../media/media'
    })
  },
  goCanvas: function () {
    wx.navigateTo({
      url: '../canvas/canvas'
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  }
})

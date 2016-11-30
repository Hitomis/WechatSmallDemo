// pages/baseContent/baseContent.js

var initData = 'this is first line\nthis is second line';
var proval = 20;
var init = true;

Page({
  data: {
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: ['red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'],
    iconType: [
      'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
      'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
      'info_circle', 'cancel', 'search', 'clear'
    ],
    text: initData,
    progress: proval
  },
  extraLine: [],
  add: function () {
    this.extraLine.push('other line');
    this.setData({
      text: initData + '\n' + this.extraLine.join('\n')
    });
  },
  remove: function () {
    if (this.extraLine.length > 0) {
      this.extraLine.pop();
      this.setData({
        text: initData + '\n' + this.extraLine.join('\n')
      });
    }
  },
  progress: function () {
    proval++;
    if (proval >= 99) {
      proval = 0;
    } else {
      this.setData({
        progress: proval
      });
    }

    if (init) {
      setInterval(this.progress, 20);
      init = false;
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
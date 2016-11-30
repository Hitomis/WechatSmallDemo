// pages/form/form.js
Page({
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    pos: 0,
    array: ["美国", "中国", "巴西", "日本"],
    time: '09:09',
    date: '2016-03-03',
    text: ''
  },
  checkboxChange: function (e) {
    console.log('checkbox 发生 change 事件， value：', e.detail.value);
  },
  radioChange: function (e) {
    console.log('radio 发生 change 事件， value：', e.detail.value);
  },
  switchChange: function (e) {
    console.log('switch 类型的 Swtich 发生 change 事件， value：', e.detail.value);
  },
  checkboxChange: function (e) {
    console.log('checkbox 类型的 SwitchSwitch 发生 change 事件， value：', e.detail.value);
  },
  slideChange: function (e) {
    console.log('slide 发生 change 事件， value：', e.detail.value);
  },
  bindPickerChange: function (e) {
    console.log('城市 picker 发生 change 事件， value：', e.detail.value);
    this.setData({
      pos: e.detail.value
    })
    console.log('pos=', this.data.pos);
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    });
  },
  bindKeyInput: function (e) {
    this.setData({
      text: e.detail.value
    });
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value;
    var pos = e.detail.cursor;
    if (pos != -1) {
      //光标在中间
      var left = e.detail.value.slice(0, pos);
      //计算光标的位置
      pos = left.replace(/11/g, '2').length;
    }

    //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return value.replace(/11/g, '2');
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === "123") {
      //收起键盘
      wx.hideKeyboard();
    }
  },
  formSubmit: function (e) {
    console.log("form表单提交数据为：", e.detail.value);
  },
  formReset: function () {
    console.log('form发生了reset事件');
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
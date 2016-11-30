var app = getApp();

Page({
  data: {
    text: "init data",
    array: [{ text: "init data" }],
    'object': {
      text: "init data"
    },
    arrays: [{message:"你好"}, {message: "我的哥"}],
    view: "MINA",
    staffA: {firstName: 'Hulk', lastName: 'HU'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'},
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      c: 3,
      d: 4
    }
  },
  changeText: function () {
    this.setData({
      text: "changed data"
    });
  },
  changeItemInArray: function () {
    var changedData = {};
    var index = 0;
    changedData['array[' + index + '].text'] = "changed data";
    this.setData(changedData);
  },
  changeItemInObject: function () {
    this.setData({
      "object.text": "changed data"
    });
  },
  addNewField: function () {
    this.setData({
      "newField.text": "new data" 
    });
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
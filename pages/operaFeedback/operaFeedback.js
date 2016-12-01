// pages/operaFeedback/operaFeedback.js

var items = ['item1', 'item2', 'item3', 'item4']

var pageObject = {
  data: {
    actionSheetHidden: true,
    actionSheetItems: items,
    modalHidden: true,
    modalHidden2: true,
    toastHidden1: true,
    toastHidden2: true,
    loadingHidden: true
  },
  actionSheetTap: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  modalChange: function (e) {
    this.setData({
      modalHidden: true
    })
  },
  modalChange2: function (e) {
    this.setData({
      modalHidden2: true
    })
  },
  modalTap1: function (e) {
    this.setData({
      modalHidden: false
    });
  },
  modalTap2: function (e) {
    this.setData({
      modalHidden2: false
    });
  },
  toastTap1: function (e) {
    this.setData({
      toastHidden1: false
    });
  },
  toastchange1: function (e) {
    this.setData({
      toastHidden1: true
    });
  },
  toastTap2: function (e) {
    this.setData({
      toastHidden2: false
    });
  },
  toastChange2: function (e) {
    this.setData({
      toastHidden2: true
    });
  },
  loadingTap: function (e) {
    this.setData({
      loadingHidden: false
    });
    var that = this;
    setTimeout(function () {
      that.setData({
        loadingHidden: true
      });
      that.update();
    }, 3000);
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
};

for (var i = 0; i < items.length; i++) {
  (function (itemName) {
    pageObject['bind' + itemName] = function (e) {
      console.log('click' + itemName, e)
    }
  })(items[i]);
}

Page(pageObject);
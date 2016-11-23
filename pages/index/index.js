//index.js
//获取应用实例
var app = getApp()
var viewText = {
  enterBtn:'ARE U READY!!!',
  go:'GO!!!'
}
Page({
  data: {
    userInfo: {},
    viewText:viewText
  },
  //事件处理函数
  bindViewTap: function() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })

    setTimeout(function(){
      wx.hideToast()
    },500)
  },
  changeName: function () {
    wx.navigateTo({
      url: '../home/home',      
      success: function(res){
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 300
        })
      },
      fail: function() {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 300
        })
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

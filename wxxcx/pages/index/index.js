//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    carsoul:{},
    imageMode:'scaleToFill',
    inventoryImg:'../../images/inventory_icon.png',
    partsImg:'../../images/parts.png',
    customerOrderImg:'../../images/customer_order.png'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
bindCategory:function(){
 wx.switchTab({
      url: '../category/category'
    })
},

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log("begin get ..");
      wx.request({
        url: 'https://api.m.kachemama.com/mobile/home/data',
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          // success
           console.log("success get ..");
           //更新数据
          that.setData({
            userInfo:userInfo,
            carsoul:res.data.data.player_merchant
          })
        },
        fail: function() {
          // fail
           console.log(" get fail..");
        },
        complete: function() {
          // complete
        }
      })
       console.log("end get ..");
     
    })
  }
})

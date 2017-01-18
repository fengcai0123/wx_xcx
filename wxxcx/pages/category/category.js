//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    category: []
  },
  onLoad: function () {
    this.setData({
      category: "分类" 
    })
  }
})
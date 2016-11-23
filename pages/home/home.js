
Page({
    data:{
        list:[],
         /** 
         * 页面配置 
         */  
        winWidth: 0,  
        winHeight: 0,  
        // tab切换  
        currentTab: 0,  
    },
    movieDetail:function(e){
        var index=e.currentTarget.id , list= this.data.list;
        console.log('index='+index)
        var movie = list[index];
            
        wx.navigateTo({
        url: '../movieDetail/movieDetail?name='+movie.name+'&cover='+movie.cover+'&style='+movie.style+'&score='+movie.score,                
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
           
        
        // for(var i= 0,len = list.length;i<len;i++){
  
        //     if([list[i].id == itemId]){
        //         console.log(true)
        //         console.log('url='+'../movieDetails/movieDetails?name='+list[i].name+'&cover='+list[i].cover+'&style='+list[i].style+'&score='+list[i].score)
        //         wx.navigateTo({
        //         url: '../movieDetails/movieDetails?name='+list[i].name+'&cover='+list[i].cover+'&style='+list[i].style+'&score='+list[i].score,                

        //         success: function(res){
        //             wx.showToast({
        //                 title: '成功',
        //                 icon: 'success',
        //                 duration: 300
        //             })
        //         },
        //         fail: function() {
        //             wx.showToast({
        //                 title: '失败',
        //                 icon: 'success',
        //                 duration: 300
        //             })
        //         }
                
        //         })
        //     }else{
        //         console.log(false)
        // 
        
    },
    onPullDownRefresh: function( e ) {
        wx.showToast({
                title: '刷新',
                icon: 'loading',
                duration: 10000
        })
         this.setData({
               list:movies
        })
        wx.hideToast()
         wx.showToast({
                title: '刷新成功',
                icon: 'loading',
                duration: 500
        })
        wx.stopPullDownRefresh()
        
    },
    onReachBottom: function() {
        wx.showToast({
                title: '加载更多',
                icon: 'loading',
                duration: 10000
        })
         this.setData({
               list:this.data.list.concat(movies)
        })
        wx.hideToast()        
    },
     onLoad:function(){
        var that = this; 


        wx.request({
                url: 'https://api.douban.com/v2/movie/top250', //仅为示例，并非真实的接口地址
                success: function(res) {
                        console.log(res)
                },
                fail:function(err){
                        console.log(err)
                }
        })
         /** 
         * 获取系统信息 
         */  
        wx.getSystemInfo( {  
        
        success: function( res ) {  
                that.setData( {  
                winWidth: res.windowWidth,  
                winHeight: res.windowHeight  
                });  
        }  
        
        });  
        that.setData({
            list:movies
        })
    },
    /** 
     * 滑动切换tab 
     */  
  bindChange: function( e ) {  
  
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  
  },
  /** 
   * 点击tab切换 
   */  
  swichNav: function( e ) {  
  
    var that = this;  
  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
  }    
})

var movies=[{
                cover:'http://img5.mtime.cn/mt/2016/10/24/113519.70188470_100X150X4.jpg',
                name:'海洋奇缘',
                style:'1004人想看 - 动画 / 冒险',
                score: '预告片'
        },{                 
                cover:'http://img5.mtime.cn/mt/2016/10/10/160211.58285608_100X140X4.jpg',
                name:'奇异博士',
                style:'115分钟 - 动作 / 冒险',
                score: '7.7分'
        },{
                cover:'http://img5.mtime.cn/mt/2016/11/15/093813.50769681_100X140X4.jpg',
                name:'深海浩劫',
                style:'107分钟 - 动作 / 剧情',
                score: '7.5分'
        },{
                cover:'http://img5.mtime.cn/mt/2016/10/27/094526.25939181_100X140X4.jpg',
                name:'阿拉丁与神灯',
                style:'107分钟 - 动作 / 剧情',
                score: '6.8分'
        },{
                cover:'http://img5.mtime.cn/mt/2016/09/05/145759.55996111_270X360X4.jpg',
                name:'我不是潘金莲',
                style:'140分钟 - 剧情 / 喜剧',
                score: '7.2分'
        },{
                cover:'http://img5.mtime.cn/mt/2016/10/24/113519.70188470_100X150X4.jpg',
                name:'海洋奇缘',
                style:'1004人想看 - 动画 / 冒险',
                score: '预告片'
        },{                 
                cover:'http://img5.mtime.cn/mt/2016/10/10/160211.58285608_100X140X4.jpg',
                name:'奇异博士',
                style:'115分钟 - 动作 / 冒险',
                score: '7.7分'
        },{
                cover:'http://img5.mtime.cn/mt/2016/11/15/093813.50769681_100X140X4.jpg',
                name:'深海浩劫',
                style:'107分钟 - 动作 / 剧情',
                score: '7.5分'
        },{
                cover:'http://img5.mtime.cn/mt/2016/10/27/094526.25939181_100X140X4.jpg',
                name:'阿拉丁与神灯',
                style:'107分钟 - 动作 / 剧情',
                score: '6.8分'
        },{
                cover:'http://img5.mtime.cn/mt/2016/09/05/145759.55996111_270X360X4.jpg',
                name:'我不是潘金莲',
                style:'140分钟 - 剧情 / 喜剧',
                score: '7.2分'
        }]
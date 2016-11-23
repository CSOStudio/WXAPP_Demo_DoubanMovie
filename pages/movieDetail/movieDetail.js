var summary='电影，是由活动照相术和幻灯放映术结合发展起来的一种连续的视频画面，是一门视觉和听觉的现代艺术，也是一门可以容纳悲喜剧与文学戏剧、摄影、绘画、音乐、舞蹈、文字、雕塑、建筑等多种艺术的现代科技与艺术的综合体。'+ '\n'+'但它又具有独自的特征，电影在艺术表现力上不但具有其它各种艺术的特征，又因可以运用蒙太奇这种艺术性突跃的电影组接技巧，具有超越其它一切艺术的表现手段，而且影片可以大量复制放映，随着现代社会的发展，电影已深入到人类社会生活的方方面面，是人们不可或缺的一部分。'

Page({
    data:{
        movie:{},
        summary:summary
    },
    onLoad:function(option){
       this.setData({
            movie:{
                name:option.name,
                cover:option.cover,
                style:option.style,
                score:option.score
            }
                
        })
         wx.setNavigationBarTitle({
            title:this.data.movie.name
        })
    }

    
})







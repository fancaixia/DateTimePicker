### DateTimePicker  微信小程序日期选择 [年，月，日，时，分，秒]
![年，月，日，时，分，秒](https://github.com/fancaixia/DateTimePicker/blob/master/pic/001.PNG)
### 只显示[年，月，日]
![年，月，日，时](https://github.com/fancaixia/DateTimePicker/blob/master/pic/002.png)

##### 代码示例
**components / DateTimePicker**
**index.wxml**
```
<!-- 组件模板 -->
<view class="wrapper">

  <slot></slot>
    <view >{{title}}</view>

    <!-- 日期模态框 -->
  <view class="modelboxbg"></view>
  <view class="modelbox">
    <view class = "model_picker">
         <view class = "button_model">
            <text catchtap='canslebtn' >取消</text>
            <text catchtap='closebtn' >确定</text>
            </view>
          <view class = "cont_model">
            <picker-view indicator-style="height: 50px;" style="width: 100%; height: 300px;" value="{{timevalue}}" catchchange="fnbindChange">
            <!-- 年 -->
              <picker-view-column wx:if="{{years.length > 0}}">
                <view wx:for="{{years}}" wx:key="{{index}}" style="line-height: 50px">{{item}}</view>
              </picker-view-column>
              <!-- 月 -->
              <picker-view-column wx:if="{{months.length > 0}}">
                <view wx:for="{{months}}" wx:key="{{index}}" style="line-height: 50px">{{item}}</view>
              </picker-view-column>
              <!-- 日 -->
              <picker-view-column wx:if="{{days.length > 0}}">
                <view wx:for="{{days}}" wx:key="{{index}}" style="line-height: 50px">{{item}}</view>
              </picker-view-column>
              <!-- 时 -->
              <picker-view-column wx:if="{{hours.length > 0}}">
                <view wx:for="{{hours}}" wx:key="{{index}}" style="line-height: 50px">{{item}}</view>
              </picker-view-column>
              <!-- 分 -->
              <picker-view-column wx:if="{{minutes.length > 0}}">
                <view wx:for="{{minutes}}" wx:key="{{index}}" style="line-height: 50px">{{item}}</view>
              </picker-view-column>
            </picker-view>
          </view>
   </view>  
  </view>

</view>
```
**index.wxss**
```
.modelboxbg{
  position:absolute;
  top:0;
  z-index:10000;
  width:100%;
  height: 100%;
  background: #000;
  opacity: 0.3;
}
.modelbox{
  position:absolute;
  bottom:0;
  z-index:999999;
  width:100%;
  background: #fff;
}
picker-view-column{
  text-align: center;
}
view.model_picker{
  position: relative;
}
.button_model{
  height: 80rpx;
  width: 100%;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #d9d9d9;
}
.button_model text{
    color: #007aff;
    position: absolute;
    background:transparent;
    border: none;
    line-height: 80rpx;
}
.button_model text:first-child{
  left: 32rpx;
}
.button_model text:last-child{
  right: 32rpx;
}
```
**index.js**
```
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    timevalue: {
      type: Array,
      value: "标题"
    },
    years: {
      type: Array,
      value: "年"
    },
    months: {
      type: Array,
      value: "月"
    },
    days: {
      type: Array,
      value: "日"
    },
    hours: {
      type: Array,
      value: "小时"
    },
    minutes: {
      type: Array,
      value: "分钟"
    }
},
  /* 组件的初始数据*/
  data: {
  },
  /** 组件的方法列表 **/
  methods: {
    //取消
    canslebtn(){
      this.triggerEvent("canslebtn");
    },
    //确认
    closebtn() {
      this.triggerEvent("closebtn");
    },
 // 调用父组件  事件
    fnbindChange(e){
      this.triggerEvent("bindChangeEvent",e.detail);
    }
  }
})

```


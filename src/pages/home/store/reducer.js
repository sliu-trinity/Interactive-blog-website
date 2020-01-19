import {fromJS} from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1, 
    title: "社会热点", 
    imgUrl:"https://upload-images.jianshu.io/upload_images/14715425-26bc4fb42c46ae9c.png?imageMogr2/auto-orient/strip|imageView2/2/w/228/format/webp"

  }, {
    id: 2, 
    title: "手绘",
    imgUrl: "https://upload-images.jianshu.io/upload_images/14715425-26bc4fb42c46ae9c.png?imageMogr2/auto-orient/strip|imageView2/2/w/228/format/webp"
  }]

});

export default (state=defaultState, action) => {
  switch(action.type) {
    default: 
      return state;
  }
};
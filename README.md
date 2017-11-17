English | [简体中文](./README.zh-CN.md)

# ShuSheng DEMO
## 使用
```bash
$ git clone https://github.com/zjp2007/shushengDemo.git
$ cd dir
$ npm install
$ npm start         # 访问 http://localhost:8000
```

## 兼容性

现代浏览器及 IE11。

```bash
export const getLayoutData = {

  layout: {
    type: 'Grid',
    potionData: [  //一个对应页面上一行数据
      {
        height: 200,   //行高
        innorObject: [      //一个对象对应页面上一个区域
          {
            width: 6,       //guid 布局总数24   占用的宽度   
            type: 'Card',   //展示组件类型
            data: {
              inType: 1,  //组件内部展示方式    指标，柱状图， 区域图
              bordered: false,
              title: '总销售额',
              action: {
                title: '测试title',
              },
              total: {
                type: 1,
                value: '10000',
              },
              content: [{
                type: '1',
                value: '1223',
                title: '日平均额',
                flag: 'down',
              }, {
                type: '1',
                value: '1223',
                title: '日平均额',
                flag: 'up',
              }],
              footer: [
                {
                  type: 1,
                  value: 120,
                  lable: '销售人数',
                },
                {
                  type: 2,
                  value: 120,
                  lable: '销售人数',
                },
              ],
              contentHeight: 42,
            },
          },
          {
            width: 6,
            type: 'Card',
            data: {
              inType: 2,
              color: '',
              bordered: false,
              title: '总销售额',
              action: {
                title: '测试title',
              },
              total: {
                type: 1,
                value: '10000',
              },
              content: [{
                x: '一月',
                y: 200,
              }, {
                x: '二月',
                y: 400,
              }, {
                x: '三月',
                y: 300,
              }, {
                x: '四月',
                y: 200,
              },
              ],
              footer: [
                {
                  type: 1,
                  value: 120,
                  lable: '销售人数',
                },
                {
                  type: 2,
                  value: 120,
                  lable: '销售人数',
                },
              ],
              contentHeight: 42,
            },
          },
          {
            width: 6,
            type: 'Card',
            data: {
              bordered: false,
              inType: 3,
              color: '',
              title: '总销售额',
              action: {
                title: '测试title',
              },
              total: {
                type: 1,
                value: '10000',
              },
              content: [{
                x: '一月',
                y: 200,
              }, {
                x: '二月',
                y: 400,
              }, {
                x: '三月',
                y: 300,
              }, {
                x: '四月',
                y: 200,
              },
              ],
              footer: [
                {
                  type: 1,
                  value: 120,
                  lable: '销售人数',
                },
                {
                  type: 2,
                  value: 120,
                  lable: '销售人数',
                },
              ],
              contentHeight: 42,
            },
          },
          {
            width: 6,
            type: 'Card',
            data: {
              bordered: false,
              inType: 4,
              color: '',
              title: '总销售额',
              action: {
                title: '测试title',
              },
              total: {
                type: 1,
                value: '10000',
              },
              content: {
                percent: 78,
                strokeWidth: 8,
                target: 80,
                color: '#13C2C2',
              },
              footer: [
                {
                  type: 1,
                  value: 120,
                  lable: '销售人数',
                },
                {
                  type: 2,
                  value: 120,
                  lable: '销售人数',
                },
              ],
              contentHeight: 42,
            },
          },
        ],
      },
    ],
  },
};
export default {
  getLayoutData,
};
```

[English](./README.md) | 简体中文

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

## Layout 布局json

```bash
{
        width: 24,
        height: '',
        type: 'container',
        children: [
          {
            width: 18,
            height: '',
            type: 'container',
            children: [
              {
                width: 24,
                height: '',
                type: 'container',
                children: [
                  {
                    width: 24,
                    height: 200,
                    type: 'container',
                    children: [
                      {
                        width: 12,
                        height: 200,
                        type: 'content',
                        data: '',
                      },
                      {
                        width: 12,
                        height: 200,
                        type: 'content',
                        data: '',
                      },
                    ],
                  },
                  {
                    width: 24,
                    height: 600,
                    type: 'container',
                    children: [
                      {
                        width: 8,
                        height: 600,
                        type: 'content',
                        data: '',
                      },
                      {
                        width: 16,
                        height: 600,
                        type: 'container',
                        children: [
                          {
                            width: 8,
                            height: 600,
                            type: 'content',
                            data: '',
                          },
                          {
                            width: 16,
                            height: 600,
                            type: 'container',
                            children: [
                              {
                                width: 24,
                                height: 200,
                                type: 'content',
                                data: '',
                              },
                              {
                                width: 24,
                                height: 400,
                                type: 'container',
                                children: [
                                  {
                                    width: 12,
                                    height: 400,
                                    type: 'content',
                                    data: '',
                                  },
                                  {
                                    width: 12,
                                    height: 400,
                                    type: 'content',
                                    data: '',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            width: 6,
            height: 800,
            type: 'container',
            children: [
              {
                width: 24,
                height: 300,
                type: 'content',
                data: '',
              },
              {
                width: 24,
                height: 500,
                type: 'content',
                data: '',
              },
            ],
          },
        ],
      },
    ];
```

## 指标Card
```bash
{
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
            }
```
## 柱状/区域Card

```bash
             {
              inType: 2,    //3为柱状
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
            }
```
## 目标Card

```bash
            {
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
            }
```                        
  



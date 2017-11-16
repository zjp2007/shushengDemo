export const getLayoutData = {

  layout: {
    type: 'Grid',
    potionData: [ //数组中一个对象是一行
      {
        height: 200,
        innorObject: [
          {
            width: 6,   //图标宽度   可以拓展为响应式布局[1, 12, 12, 8, 6] 对应
            type: 'Card',  //展示方式     card   柱状图
            data: { //图标数据
              inType: 1,  //中心部位显示方式   1：指标展示   2 柱状图 。。。。。。
              bordered: false,
              title: '总销售额',
              action: {
                title: '测试title',
              },
              total: {
                type: 1,
                value: '10000',
              },
              content: [{   //中心位置显示内容
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
              footer: [  //底部显示内容
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
              contentHeight: 42,//中心部位高低
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
          }],
      },
    ],
  },
};
export default {
  getLayoutData,
}
;

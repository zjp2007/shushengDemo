export const getLayoutData = {

  layout: {
    type: 'Grid',
    potionData: [
      {
        height: 200,

        innorObject: [
          {
            width: 6,
            type: 'Card',
            data: {
              inType: 1,
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

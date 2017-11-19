import React from 'react';
import { Row, Col } from 'antd';
import { GenNonDuplicateID } from '../../utils/utils';

export default class TreeIndex extends React.Component {
  generateMenu(menuObj) {
    const vdom = [];
    if (menuObj instanceof Array) {
      const list = [];
      for (const item of menuObj) {
        list.push(this.generateMenu(item));
      }
      vdom.push(
        <Row gutter={24} key={GenNonDuplicateID()}>
          {list}
        </Row>
      );
    } else if (menuObj) {
      vdom.push(
        <Col key={GenNonDuplicateID()} xs={menuObj.width} style={{ border: '1px solid #ccc', height: menuObj.height }}>
          {menuObj && menuObj.type === 'content' &&
          <h1>
            我是要写内容的
          </h1>
          }
          {this.generateMenu(menuObj.children)}
        </Col>
      );
    }
    return vdom;
  }

  render() {
    const data = [
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

    return (
      <div>
        {this.generateMenu(data)}
      </div>
    );
  }
}

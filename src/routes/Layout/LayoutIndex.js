import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import ChartCard from '../../components/NewChart/Card/Card';
import BarIndex from '../../components/NewChart/Bar/BarIndex';

@connect(state => ({
  layout: state.layout,
}))
export default class LayoutIndex extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'layout/getLayoutData',
    });
  }

  render() {
    const { layout } = this.props.layout;
    const domTree = [];
    if (layout) {
      layout.potionData.forEach((item, index) => {
        const childDiv = [];
        item.innorObject.forEach((u, j) => {
          childDiv.push(
            <Col
              key={`${u.data + j + index}`}
              xs={u.width}
              style={{ height: item.height, border: '1px solid #ccc' }}
            >
              {u.type === 'Card' && <ChartCard {...u.data} />}
              {u.type === 'Bar' && <BarIndex {...u.data} />}
            </Col>);
        });
        domTree.push(<Row key={`${item.height + index}`} gutter={24} style={{ marginBottom: 24 }}>{childDiv}</Row>);
      });
    }
    return <div>{domTree}</div>;
  }
}

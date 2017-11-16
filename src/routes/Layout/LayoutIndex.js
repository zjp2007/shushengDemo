import React from 'react';
import {connect} from 'dva';
import {List, Card, Row, Col, Radio, Input, Progress, Button, Icon, Dropdown, Menu, Avatar} from 'antd';
import ChartCard from '../../components/NewChart/Card/Card';

@connect(state => ({
  layout: state.layout,
}))
export default class LayoutIndex extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'layout/getLayoutData',
    }).then(() => this.setState({loading: false}));
  }

  render() {
    const {layout} = this.props.layout;
    let domTree = [];
    if (layout) {
      layout.potionData.forEach((item, index) => {
        let childDiv = [];
        item.innorObject.forEach((u, j) => {
            childDiv.push(<Col key={j + '_' + index} xs={u.width} style={{
              height: item.height,
            }}><ChartCard {...u.data} /></Col>);
          }
        );
        domTree.push(<Row key={index} gutter={24}>{childDiv}</Row>);
      })
    }
    return <div>{domTree}</div>
  }
}

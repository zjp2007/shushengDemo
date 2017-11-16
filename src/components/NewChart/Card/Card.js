import React from 'react';
import numeral from 'numeral';
import Trend from '../../../components/Trend';
import styles from './Card.less';
import {Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown} from 'antd';
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../../components/Charts';

export default function Result({inType, bordered, title, action, total, footer, content, contentHeight}) {
  return <ChartCard
    bordered={bordered}
    title={title}
    action={<Tooltip title={action.title}><Icon type={action.icon || 'info-circle-o'}/></Tooltip>}
    total={total.type === 1 ? yuan(total.value) : total.type === 2 ? `${numeral(total.value).format('0,0')}%` : total.value}
    footer={footer.map((item, index) => {
      return (<Field key={index} label={item.lable}
                     value={item.type === 1 ? `${yuan(item.value)}` : item.type === 2 ? `${numeral(item.value).format('0,0')}%` : item.value}/>)
    })}
    contentHeight={contentHeight}
  >
    {inType === 1 && content.map((item, index) => {
      return <Trend key={index + ''} flag={item.flag} style={{marginRight: 16}}>
        {item.title} <span> {item.value}</span>
      </Trend>
    })}
    {inType === 2 && <MiniArea color="#975FE4" height={46} data={content}/>}
    {inType === 3 && <MiniBar height={46} data={content}/>}
    {inType === 4 && <MiniProgress height={46} percent={content.percent} strokeWidth={content.strokeWidth} target={content.target} color={content.color} />}
  </ChartCard>
}

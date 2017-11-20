
import React from 'react';
import { Card, Tabs } from 'antd';
import { Bar } from '../../../components/Charts';
import styles from './BarIndex.less';


const { TabPane } = Tabs;

export default function BarIndex({ content }) {
  return (
    <Card
      loading={false}
      bordered={false}
      bodyStyle={{ padding: 0 }}
    >
      <div className={styles.ceshi}>
        <Tabs size="large" tabBarStyle={{ marginBottom: 24 }}>
          <TabPane tab="销售额" key="sales">
            <Bar
              height={320}
              title="销售额趋势"
              data={content}
            />
          </TabPane>
        </Tabs>
      </div>
    </Card>
  );
}

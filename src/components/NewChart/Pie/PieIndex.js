import React from 'react';
import { Card, Tabs } from 'antd';
import { Bar } from '../../../components/Charts';
import styles from './PieIndex.less';

const { TabPane } = Tabs;

export default function PieIndex({ content }) {
  return (
    <Card
      loading={false}
      bordered={false}
      bodyStyle={{ padding: 0 }}
    >
      <div className={styles.aaa}>
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

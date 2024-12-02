import { Card, Col, Row } from 'antd';
import { Column, Pie } from '@ant-design/charts';

const barData = [
    { name: 'Jan', total: 100 },
    { name: 'Feb', total: 200 },
    { name: 'Mar', total: 50 },
    { name: 'Apr', total: 100 },
    { name: 'May', total: 500 },
];

const pieData = [
    { type: 'Group A', value: 400 },
    { type: 'Group B', value: 600 },
];

const AdminCharts = () => {
    const columnConfig = {
        data: barData,
        xField: 'name',
        yField: 'total',
        color: '#0095FF',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };

    const pieConfig = {
        appendPadding: 10,
        data: pieData,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
            type: 'outer',
            content: '{name} {percentage}',
        },
        interactions: [
            {
                type: 'pie-legend-active',
            },
            {
                type: 'element-active',
            },
        ],
    };

    return (
        <Row gutter={16}>
            <Col span={16}>
                <Card>
                    <Column {...columnConfig} />
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                    <Pie {...pieConfig} />
                </Card>
            </Col>
        </Row>
    );
};

export default AdminCharts;

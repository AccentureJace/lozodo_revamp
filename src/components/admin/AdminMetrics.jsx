import { Card, Col, Row, Statistic } from 'antd';
import { ShoppingCart, People, PersonOff } from '@mui/icons-material';

const AdminMetrics = () => {
    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card className='tw-p-10'>
                    <Statistic
                        title='Total Sales'
                        value={200}
                        prefix={<ShoppingCart />}
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card className='tw-p-10'>
                    <Statistic
                        title='Active Users'
                        value={500}
                        prefix={<People />}
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card className='tw-p-10'>
                    <Statistic
                        title='Inactive Users'
                        value={100}
                        prefix={<PersonOff />}
                    />
                </Card>
            </Col>
        </Row>
    );
};

export default AdminMetrics;

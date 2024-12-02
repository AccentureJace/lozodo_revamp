import { Avatar, Button, Layout, Typography } from 'antd';
import { Logout, Person } from '@mui/icons-material';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const AdminHeader = () => {
    return (
        <AntHeader className='tw-flex tw-items-center tw-justify-between tw-bg-white tw-px-6'>
            <Title level={4} className='tw-m-0'>
                welcome Felix!
            </Title>
            <div className='tw-flex tw-items-center gap-4'>
                <div className='tw-flex tw-items-center gap-2'>
                    <Avatar icon={<Person />} />
                    <span className='tw-text-sm tw-font-medium'>
                        Felix Angelo Siena
                    </span>
                </div>
                <Button icon={<Logout />} size='small'>
                    Sign-out
                </Button>
            </div>
        </AntHeader>
    );
};

export default AdminHeader;

import { PageHeader } from 'antd';
import { Link } from 'react-router-dom';

function AppHeader() {

    return (
        <PageHeader className="white-shadowed">
            <Link to={'/'}>
                <span style={{ fontWeight: 500, fontSize: '16pt', color: '#000000', marginLeft: 20}}>YANJIE's Page</span>
                <span style={{ marginLeft: 10, color: 'grey' }}>still under construction</span>
            </Link>
        </PageHeader>
    )
}

export default AppHeader;
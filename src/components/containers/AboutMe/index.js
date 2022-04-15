import { Row, Col } from 'antd';
import { useMediaQuery } from 'react-responsive';


import Personal from './Personal'

function AboutMe() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 576px)' });

    return (
        isBigScreen ? (
            <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Col style={{ display: 'flex', alignItems: 'center', marginRight: '20px'}}>
                    <h1 color="#f6f4f7">Haven't decided on what to put here 🕵🏻 </h1>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: '95%', width: '1px', background: '#e7e4eb', marginTop: '5%' }} />
                </Col>
                <Col>
                    <Personal />
                </Col>
            </Row>
        ) :
            (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <Personal />
                    {/* <div style={{ flexBasis: '100%', height: 0 }} /> */}
                    <div style={{ height: '1px', width: '95%', background: '#e7e4eb', marginTop: '5%' }} />
                    <div style={{ margin: '20px'}}>
                        <h1 color="#f6f4f7">Haven't decided on what to put here 🕵🏻 </h1>
                    </div>
                </div>
            )

    );

}

export default AboutMe;
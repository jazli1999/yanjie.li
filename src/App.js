import { AppHeader, Navigation, ContentPanel } from './components/layout';
import Home from './components/containers/Articles';
import { Layout } from 'antd';
import './App.less';

function App() {
  const { Header, Content, Sider } = Layout;

  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Layout className="app-body">
        <Sider>
          <Navigation />
        </Sider>
        {/* <Content className='white-shadowed' style={{ margin: '5px 10px 5px 10px', textAlign: 'center', padding: '20px' }}>
          <h1>Under Construction</h1>
          <img src={require('./res/images/under-construction.png')} alt="under construction"
            style={{ width: "50%" }} />
        </Content> */}
        <Content>
          <ContentPanel content={<Home />} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

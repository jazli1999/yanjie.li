import { AppHeader, Navigation, ContentPanel } from './components/layout';
import { Layout } from 'antd';
import './App.less';

function App() {
  const { Header, Content, Sider, Footer } = Layout;

  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Layout className="app-body">
        <Sider>
          <Navigation />
        </Sider>
        <Content>
          <ContentPanel />
        </Content>
      </Layout>
      <Footer>
        <p style={{ textAlign: 'center', color: '#BBBBBB', marginTop: 10}}>@Yanjie :)</p>
      </Footer>
    </Layout>
  );
}

export default App;

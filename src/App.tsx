import Layout from "./Components/Layout/Layout";
import Market from "./Components/MarketPage/Market";
import SocketContextComponent from "./lib/SocketProvider";

function App() {
  return (
    <Layout>
      <SocketContextComponent>
        <Market />
      </SocketContextComponent>
    </Layout>
  );
}

export default App;

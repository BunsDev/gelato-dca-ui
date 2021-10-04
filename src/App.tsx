import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

// import Header from "./components/Header"
// import Footer from "./components/Footer"
// import { EthereumProvider } from "./contexts/Ethereum"
// import ModalNetwork from "./components/ModalNetwork"
// import useEthereum from "./hooks/useEthereum"
// import { CHAIN_ID } from "./constants"
// import Redeem from "./pages/Redeem"
// import Settle from "./pages/Settle"
import Logo from "./assets/dango-placeholder.png";

function App() {
  // const { chainId } = useEthereum();
  return (
    <Router>
      <div className="flex-col h-screen">
        <div className="fixed flex w-screen justify-between py-3 px-5">
          <div className="flex items-center">
            <img src={Logo} className="h-7"/>
            <span className="text-2xl font-mono font-light mx-2">
              Dango
            </span>
          </div>
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-2 rounded-xl font-mono">Connect</button>
        </div>
        <div className="bg-red-100 h-full">
          {/* <Header /> */}
          <div>
            <Switch>
              {/* <Route path="/redeem">
                <Redeem />
              </Route>
              <Route path="/settle">
                <Settle />
              </Route> */}
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </div>
        </div>
        {/* <ModalNetwork isOpen={chainId !== undefined && chainId !== CHAIN_ID.MAINNET} /> */}
      </div>
    </Router>
  );
}

const Providers: React.FC = ({ children }) => {
  return (
    <>
    {/* <ThemeProvider theme={styledTheme}>
      <ChakraProvider theme={chakraTheme}>
        <EthereumProvider>
          <GammaProvider> */}
            {children}
          {/* </GammaProvider>
        </EthereumProvider>
      </ChakraProvider>
    </ThemeProvider> */}
    </>
  );
};

function withProviders<P>(
  Component: React.ComponentType<P>
) {
  const ComponentProviders = (props: P) => {
    return (
      <Providers>
        <Component {...props}/>
      </Providers>
    )
  };
  return ComponentProviders;
}

export default withProviders(App);
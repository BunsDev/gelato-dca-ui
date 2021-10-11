import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

// import { EthereumProvider } from "./contexts/Ethereum"
// import ModalNetwork from "./components/ModalNetwork"
// import useEthereum from "./hooks/useEthereum"
// import { CHAIN_ID } from "./constants"
import Logo from "./assets/dango-placeholder.png";
import Create from "./pages/Create/Create";
import Detail from "./pages/Detail/Detail";
import Button from "./components/Button/Button";

function App() {
  // const { chainId } = useEthereum();
  return (
    <Router>
      <div className="flex-col h-full">
        <div className="fixed flex w-screen justify-between py-3 px-5">
          <div className="flex items-center">
            <img src={Logo} className="h-7"/>
            <span className="text-2xl font-mono font-light mx-2">
              Dango
            </span>
          </div>
          <Button label="Connect" onClick={() => {}} 
            isPrimary={false} isMono fullWidth={false} padding="px-8 py-2"/>
        </div>
        <div className="bg-red-100 pb-10 min-h-screen">
          <div>
            <Switch>
              <Route path="/add">
                <Create />
              </Route>
              <Route exact path="/position/:positionId">
                <Detail />
              </Route>
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
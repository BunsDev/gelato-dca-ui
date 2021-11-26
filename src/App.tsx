import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

import Logo from "./assets/dangologo.png";
import Create from "./pages/Create/Create";
import Detail from "./pages/Detail/Detail";
import Web3Account from "./components/Web3Account/Web3Account";
import { EthereumProvider } from "./contexts/Ethereum";
import ModalNetwork from "./components/ModalNetwork/ModalNetwork";
import { CHAIN_ID, WEB3_DATA_TYPE } from "./constants";
import useEthereum from "./hooks/useEthereum";
import PolygonLogo from "./assets/polygon.png";
import GelatoLogo from "./assets/gelato.png";
import { getEtherscanUrl } from "./utils/misc";
import { DCA_CORE_ADDRESS } from "./constants/address";

function App() {
  const { ethAccount, chainId } = useEthereum();
  
  const goToEtherscan = () => {
    const newWindow = window.open(
      getEtherscanUrl(DCA_CORE_ADDRESS, WEB3_DATA_TYPE.Address), '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <Router>
      <div className="flex-col h-full">
        <div className="fixed flex w-screen justify-center bg-red-500">
          <span className="text-white font-mono font-light mx-2">
            dango dapp has not been audited yet - proceed at your own risk
          </span>
        </div>
        <div className="fixed flex w-screen justify-between py-3 px-5 mt-5">
          <div className="flex items-center">
            <img src={Logo} className="h-7"/>
            <span className="text-2xl font-mono font-light mx-2">
              Dango
            </span>
          </div>
          <Web3Account />
        </div>
        <div className="fixed bottom-5 w-screen">
          <div className="flex justify-between px-5">
            <img src={PolygonLogo} className="h-6 cursor-pointer" onClick={goToEtherscan}/>
            <img src={GelatoLogo} className="h-5 mr-1"/>
          </div>
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
        <ModalNetwork isOpen={ethAccount !== undefined && chainId !== 0 && chainId !== CHAIN_ID.POLYGON} />
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
            <EthereumProvider>
              {children}
            </EthereumProvider>
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
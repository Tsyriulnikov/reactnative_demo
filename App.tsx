import {store} from "./src/store/store";
import {Provider} from "react-redux";
import {Main} from "./Main";
import { NativeBaseProvider } from 'native-base';
import {Advice} from "./src/components/Advice";
import {Login} from "./src/components/Login";
export default function App() {
  return (
      <Provider store={store}>
        <NativeBaseProvider >
          <Main/>
            {/*<Advice/>*/}
            <Login/>
        </NativeBaseProvider>
      </Provider>
  );
}



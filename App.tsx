import {store} from "./src/store/store";
import {Provider} from "react-redux";
import {Main} from "./Main";
import { NativeBaseProvider } from 'native-base';
export default function App() {
  return (
      <Provider store={store}>
        <NativeBaseProvider >
          <Main/>
        </NativeBaseProvider>
      </Provider>
  );
}



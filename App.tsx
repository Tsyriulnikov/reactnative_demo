import {store} from "./src/store/store";
import {Provider} from "react-redux";
import {Main} from "./src/components/Main";
import {NativeBaseProvider, ScrollView} from 'native-base';
import {Fetch} from "./src/components/Fetch";
import {Login} from "./src/components/Login";
export default function App() {
  return (
      <Provider store={store}>
        <NativeBaseProvider >
          {/*<Main/>*/}
            {/*<Advice/>*/}
            {/*<ScrollView>*/}
            <Login/>
<Fetch/>
            {/*</ScrollView>*/}
        </NativeBaseProvider>
      </Provider>
  );
}



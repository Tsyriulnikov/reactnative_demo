import {store} from "./src/store/store";
import {Provider} from "react-redux";
import {NativeBaseProvider} from 'native-base';
import {Todolists} from "./src/components/Todolists";


export default function App() {

    return (
        <Provider store={store}>
            <NativeBaseProvider >
                <Todolists/>
            </NativeBaseProvider>
        </Provider>
    );
}



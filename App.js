import Navigations from './Navigations/Navigations';
// import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
// import SSRProvider from '@react-aria/ssr';
// import { Provider } from 'react-redux';
// import {store} from './app/store'


export default function App() {
  return (
    <>
      <NativeBaseProvider>
        {/* <Provider store={store}> */}
          <Navigations />
        {/* </Provider> */}
      </NativeBaseProvider>

    </>

  )
}

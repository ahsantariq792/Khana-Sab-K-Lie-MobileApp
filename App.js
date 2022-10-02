import Navigations from './Navigations/Navigations';
// import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
// import SSRProvider from '@react-aria/ssr';

export default function App() {
  return (
    <>
      <NativeBaseProvider>
          <Navigations />
      </NativeBaseProvider>

    </>

  )
}

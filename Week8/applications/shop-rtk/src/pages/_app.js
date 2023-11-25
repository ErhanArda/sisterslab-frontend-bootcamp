import '@/styles/globals.css';
import { Provider } from 'react-redux';
import DashboardLayout from '@/components/DashboardLayout';
import { store } from '@/store/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </Provider>
  );
}

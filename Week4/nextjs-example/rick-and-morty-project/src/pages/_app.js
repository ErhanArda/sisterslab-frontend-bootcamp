import DashboardLayout from '@/components/DashboardLayout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}

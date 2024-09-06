import './App.css';
import LandingPage from './LandingPage/LandingPage.tsx';
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, }
  }
});
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient} contextSharing >
        <LandingPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;

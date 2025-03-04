import { BrowserRouter } from "react-router-dom";
import { ROUTERS } from "../routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ROUTERS />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

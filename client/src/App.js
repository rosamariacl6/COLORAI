import { ColorAIProvider } from "./context/ColorAIProvider";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <ColorAIProvider>
        <AppRoutes />
      </ColorAIProvider>
    </>
  );
}

export default App;

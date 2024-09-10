import AuthContextProvider from "./contexts/Client/AuthContexts";
import Router from "./Router/Router";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  );
}

export default App;

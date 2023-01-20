import React from "react";
import "./App.css";

const AppHeader = React.lazy(() => import("host/AppHeader"));

function App() {
  return (
    <div>
      <AppHeader />
      <iframe
        src="https://community.htb.solutions/auth/login"
        width="100%"
        height="100%"
        sandbox="allow-scripts allow-modal"
        loading="lazy"
        title="Custom title"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;

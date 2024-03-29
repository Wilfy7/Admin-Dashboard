import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from "react-router-dom";



const App2 = () => {
const [theme, colorMode] = useMode();
return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
               <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
       </div>
    </ThemeProvider>
  </ColorModeContext.Provider> 
  
);
}


export default App2

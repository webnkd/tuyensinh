import Router from "./Router";
// import Bgvideo from "./pages/Bgvideo";
// import Bganh from "./pages/Bganh";

import { ThemeProvider } from "./layout/themeContext";

// bg-cover bg-no-repeat mobile:bg-bg1 tablet:bg-bg1 laptop:bg-bg2 desktop:bg-bg2

function App() {
  return (
    <ThemeProvider>
    <body className="bg-bg-light dark:bg-bg-dark transition-all w-full h-full absolute bg-cover bg-no-repeat">
      {/* <div className="w-full h-full absolute z-0"> */}
      {/* <Bgvideo /> */}
      {/* <Bganh /> */}
      {/* </div>  */}
      <div className="w-full h-screen absolute z-1">
        <Router />
      </div>
    </body>
    </ThemeProvider>
  );
}

export default App;

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div 
      className=' w-full h-screen flex flex-col justify-between overflow-x-hidden max-w-screen-2xl mx-auto border-x-[1px] border-black relative'
    >
      <DataProvider>
        <Header />
        <Main />
        <Footer />
        <MobileNav />
      </DataProvider>
    </div>
  );
}

export default App;

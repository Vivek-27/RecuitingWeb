import './App.css';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/page2/Page2';
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Page1 />
      <Page2 />
      <Footer />
    </div>
  );
}

export default App;

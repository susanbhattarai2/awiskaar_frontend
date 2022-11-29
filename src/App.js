import { Banner,Navbar,About,Services,Projects,Footer } from './landingPage';
import './App.css';

const App = () => (


    <div >
        <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Banner />
        </div>
        <div><About /></div>
        <div><Services /></div>
        <div><Projects /></div>
        <div><Footer /></div>
        </div>
    </div>
    

);
export default App;


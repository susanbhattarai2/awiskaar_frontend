import { Banner,Navbar,About,Services,Clients,Footer,Contact } from './landingPage';
//import contact from './contact/contact'
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
            <div><Clients /></div>
            <div><Contact /></div>
            <div><Footer /></div>
        </div>
       
    </div>
    

);
export default App;


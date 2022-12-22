import React, { useState } from 'react';
import { Banner, Navbar, About, Services, Clients, Footer, Contact, SplitImage } from './landingPage';

//import contact from './contact/contact'
import './App.css';

const App = () => {

    const [loading, setloading] = useState(true);
    const spinner = document.getElementById('spinner');
    if (spinner) {
        setTimeout(() => {
            spinner.style.display = 'none';
            setloading(false);

        }, 2000);
    };

    return (
        !loading && (
            <div >
                <div className="App">
                    <div className="gradient__bg hero_container">
                        <Navbar />
                        {/* <SplitImage /> */}
                        <Banner />
                    </div>
                    <div><About /></div>
                    <div><Services /></div>
                    <div><Clients /></div>
                    <div><Contact /></div>
                    <div><Footer /></div>
                </div>

            </div>
        )
    );

}
export default App;


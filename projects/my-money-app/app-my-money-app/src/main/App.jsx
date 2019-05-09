import '../common/template/dependencies'
import  React  from "react";
import Header from '../common/template/Header';
import Sidebar from '../common/template/Sidebar';
import Footer from '../common/template/Footer';
import Routers from './Routers';

export default props => (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
        <Routers/>
        </div>
        <Footer/>
    </div>
)
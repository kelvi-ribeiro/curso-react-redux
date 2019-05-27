import './Nav.css'
import React from 'react'
import NavItem from './NavItem';

export default props =>
    <aside className="menu-area">
        <nav className="menu">        
        <NavItem url="/" nome="Início" icon="home"/>
        <NavItem url="/users" nome="Usuários" icon="users"/>        
        </nav>
    </aside>
import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi.js';
import MenuCard from "./MenuCard";
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
        Menu.map((curElm) => {
            return curElm.category;   
        })   
    ), "All",
];
console.log(uniqueList);

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList] = useState(uniqueList);
    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElm) => {
            return curElm.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData = {menuData}/>
        </>
    );
};
export default Resturant;
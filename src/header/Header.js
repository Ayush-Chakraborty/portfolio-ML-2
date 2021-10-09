import React, { useRef } from 'react'
import './header.css'
import NavItem from './navItem/NavItem'
import { useState } from 'react'
import { useEffect } from 'react'
function Header() {
    const navItemList=[
        "about me",
        "education",
        "skills",
        "projects",
        "achievement",
        "contact"
    ]
    const menuRef=useRef();
    const upperbarRef=useRef()
    const lowerbarRef=useRef()
    const middlebarRef=useRef()
    const activeSection=useRef()
    const [section,setSection]=useState("About Me")
    const ids=navItemList.map(item=> item.replace(' ',''));
    useEffect(()=>{
        const navElements=navItemList.map((item,i)=> 
            document.querySelector(`a[href='#${ids[i]}'] div`));
        const elements=navItemList.map((item,i)=> 
            document.querySelector(`#${ids[i]}`));
        const height=window.innerHeight;
        const dist=height-100;
        let lastY=0;
        let lastElement=0;
        navElements[lastElement].classList.add("navItem__active");
        elements[0].classList.add("appear")
        const handler=()=>{
            const distances=elements.map((el)=>
                el.getBoundingClientRect().top
            )
            const y=window.scrollY
            if(y > lastY){
                let index=lastElement,maxDist=0;
                distances.forEach((d,i)=>{
                    if(d>=maxDist && d<dist){
                        maxDist=d;
                        index=i;
                    }
                })
                if(index!=lastElement){
                    navElements[index].classList.add("navItem__active");
                    if(lastElement!=-1)
                    navElements[lastElement].classList.remove("navItem__active");
                    setSection(navItemList[index]);
                    elements[index].classList.add("appear")
                    lastElement=index;
                }
            }
            else{
                let index=lastElement,minDist=height;
                distances.forEach((d,i)=>{
                    if(d>100 && d<minDist){
                        minDist=d;
                        index=Math.max(0,i-1);
                    }
                })
                if(index!=lastElement){
                    navElements[index].classList.add("navItem__active");
                    if(lastElement!=-1)
                    navElements[lastElement].classList.remove("navItem__active");
                    elements[index].classList.add("appear")
                    setSection(navItemList[index]);
                    lastElement=index;
                }
            }
            lastY=y;
        }
        window.addEventListener("scroll",handler)
    },[])
   

    return (
        <header id="header">
            <div className="header__icon"> sp </div>
            <nav>
                <button className="header__mobile" onClick={()=>{
                    menuRef.current.classList.toggle("header__menu_visible")
                    upperbarRef.current.classList.toggle("header__upper_open")
                    middlebarRef.current.classList.toggle("header__middle_open")
                    lowerbarRef.current.classList.toggle("header__lower_open")
                    activeSection.current.classList.toggle("header__active_section")
                }}>
                    <div className="header__menu_icon" ref={upperbarRef}></div>
                    <div className="header__menu_icon" ref={middlebarRef}></div>
                    <div className="header__menu_icon" ref={lowerbarRef}></div>
                </button>
                <div className="header__menu" ref={menuRef}>
                    { navItemList.map(el => <NavItem >{el}</NavItem>)}
                </div>
                <div className="header__mobile_active" ref={activeSection}>{section}</div>
            </nav>
        </header>
    )
}

export default Header

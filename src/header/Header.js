import React, { useRef } from "react";
import "./header.css";
import NavItem from "./navItem/NavItem";
import { useState } from "react";
import { useEffect } from "react";
function Header() {
    const navItemList = [
        "about me",
        "education",
        "skills",
        "experience",
        "projects",
        "achievement",
        "contact",
    ];
    const menuRef = useRef();
    const upperbarRef = useRef();
    const lowerbarRef = useRef();
    const middlebarRef = useRef();
    const activeSection = useRef();
    const [section, setSection] = useState("About Me");
    const ids = navItemList.map((item) => item.replace(" ", ""));
    useEffect(() => {
        const navElements = navItemList.map((item, i) =>
            document.querySelector(`a[href='#${ids[i]}'] div`)
        );
        const elements = navItemList.map((item, i) => document.querySelector(`#${ids[i]}`));
        const height = window.innerHeight;
        const dist = height * 0.8;
        let lastY = window.scrollY;
        console.log(lastY);
        let lastElement = 0;
        const distances = elements.map((el) => el.getBoundingClientRect().top);
        let index = lastElement,
            minDist = dist;
        distances.forEach((d, i) => {
            if (Math.abs(d) < minDist) {
                minDist = d;
                index = i;
            }
        });
        lastElement = index;
        elements[index].classList.add("appear");
        if (
            index < elements.length - 1 &&
            elements[index + 1].getBoundingClientRect().top < height
        ) {
            elements[index + 1].classList.add("appear");
        }
        navElements[lastElement].classList.add("navItem__active");
        elements[0].classList.add("appear");
        const handler = () => {
            const y = window.scrollY;
            if (y > lastY) {
                const distances = elements.map((el) => el.getBoundingClientRect().top);
                let index = lastElement,
                    maxDist = 0;
                distances.forEach((d, i) => {
                    if (d >= maxDist && d < dist) {
                        maxDist = d;
                        index = i;
                    }
                });
                if (index === lastElement) return;
                lastElement = index;
                navElements.forEach((el, i) => {
                    if (i === index) {
                        el.classList.add("navItem__active");
                        elements[i].classList.add("appear");
                        if (window.innerWidth < 750) setSection(navItemList[i]);
                    } else {
                        el.classList.remove("navItem__active");
                    }
                });
            } else {
                const distances = elements.map((el) => el.getBoundingClientRect().bottom);
                let index = lastElement,
                    minDist = height;
                distances.forEach((d, i) => {
                    if (d >= height * 0.2 && d < minDist) {
                        minDist = d;
                        index = i;
                    }
                });
                if (index === lastElement) return;
                lastElement = index;
                navElements.forEach((el, i) => {
                    if (i === index) {
                        el.classList.add("navItem__active");
                        elements[i].classList.add("appear");
                        if (window.innerWidth < 750) setSection(navItemList[i]);
                    } else {
                        el.classList.remove("navItem__active");
                    }
                });
            }
            lastY = y;
        };
        window.addEventListener("scroll", handler);
    });

    return (
        <header id="header">
            <div className="header__icon"> sp </div>
            <nav>
                <button
                    className="header__mobile"
                    onClick={() => {
                        menuRef.current.classList.toggle("header__menu_visible");
                        upperbarRef.current.classList.toggle("header__upper_open");
                        middlebarRef.current.classList.toggle("header__middle_open");
                        lowerbarRef.current.classList.toggle("header__lower_open");
                        activeSection.current.classList.toggle("header__active_section");
                    }}
                >
                    <div className="header__menu_icon" ref={upperbarRef}></div>
                    <div className="header__menu_icon" ref={middlebarRef}></div>
                    <div className="header__menu_icon" ref={lowerbarRef}></div>
                </button>
                <div className="header__menu" ref={menuRef}>
                    {navItemList.map((el) => (
                        <NavItem>{el}</NavItem>
                    ))}
                </div>
                <div className="header__mobile_active" ref={activeSection}>
                    {section}
                </div>
            </nav>
        </header>
    );
}

export default Header;

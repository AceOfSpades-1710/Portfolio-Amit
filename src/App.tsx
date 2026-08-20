import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

import { useEffect, useState } from "react";

import "./App.css";

import Home from "./Home/Home";
import Articles from "./Articles/articles";
import Weekends from "./Weekends/Weekends";
import Blogs from "./Blogs/Blogs";


// ======================================================
// PAGE TRANSITION
// ======================================================

function PageTransition() {

    const location = useLocation();

    const [isTransitioning, setIsTransitioning] =
        useState(false);

    const [displayLocation, setDisplayLocation] =
        useState(location);


    // ==================================================
    // PAGE TRANSITION LOGIC
    // ==================================================

    useEffect(() => {

        // Nothing to do if the displayed route
        // is already the requested route.
        if (
            location.pathname ===
            displayLocation.pathname
        ) {
            return;
        }


        // ==================================================
        // 1. START BLUR
        // ==================================================

        setIsTransitioning(true);


        // ==================================================
        // 2. WAIT FOR BLUR-OUT
        // ==================================================

        const timer = window.setTimeout(() => {


            // =================================================
            // 3. CHANGE THE DISPLAYED PAGE
            // =================================================

            setDisplayLocation(location);


            // =================================================
            // 4. WAIT FOR NEW PAGE TO MOUNT
            // =================================================

            requestAnimationFrame(() => {

                requestAnimationFrame(() => {


                    // =============================================
                    // RETURNING TO HOME
                    // =============================================

                    if (location.pathname === "/") {

                        const homeScrollPosition =
                            sessionStorage.getItem(
                                "homeAboutScrollPosition"
                            );


                        if (homeScrollPosition !== null) {

                            window.scrollTo({
                                top: Number(homeScrollPosition),
                                left: 0,
                                behavior: "smooth",
                            });

                        } else {

                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "instant",
                            });

                        }

                    }


                    // =============================================
                    // OTHER PAGES
                    // =============================================

                    else {

                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "instant",
                        });

                    }


                    // =============================================
                    // 5. REMOVE BLUR
                    // =============================================

                    setIsTransitioning(false);

                });

            });

        }, 350);


        return () => {
            window.clearTimeout(timer);
        };

    }, [
        location,
        displayLocation,
    ]);


    // ======================================================
    // CHANGE BODY BACKGROUND
    // ======================================================

    useEffect(() => {

        // Remove only our page classes.
        document.body.classList.remove(
            "home-page",
            "articles-page",
            "weekends-page"
        );


        // HOME
        if (location.pathname === "/") {

            document.body.classList.add(
                "home-page"
            );

        }


        // ARTICLES
        else if (location.pathname === "/In-Media") {

            document.body.classList.add(
                "articles-page"
            );

        }


        // WEEKENDS
        else if (location.pathname === "/Weekends") {

            document.body.classList.add(
                "weekends-page"
            );

        }


        // Cleanup
        return () => {

            document.body.classList.remove(
                "home-page",
                "articles-page",
                "weekends-page"
            );

        };

    }, [location.pathname]);


    return (
        <>

            {/* =================================================
                PAGE
                ================================================= */}

            <div className="page-content">

                <Routes location={displayLocation}>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/In-Media"
                        element={<Articles />}
                    />

                    <Route
                        path="/Weekends"
                        element={<Weekends />}
                    />

                    <Route
                        path="/Blogs"
                        element={<Blogs />}
                    />

                </Routes>

            </div>


            {/* =================================================
                TRANSITION OVERLAY
                ================================================= */}

            <div
                className={`page-transition-overlay ${
                    isTransitioning
                        ? "transition-active"
                        : ""
                }`}
            />

        </>
    );
}


// ======================================================
// APP
// ======================================================

function App() {

    // ==================================================
    // BACKGROUND CURSOR WOBBLE
    // ==================================================

    useEffect(() => {

        const handleMouseMove = (e: MouseEvent) => {

            const x =
                (e.clientX / window.innerWidth - 0.5);

            const y =
                (e.clientY / window.innerHeight - 0.5);


            const moveX = x * 20;
            const moveY = y * 20;
            const rotate = x * 1.5;


            document.body.style.setProperty(
                "--bg-x",
                `${moveX}px`
            );

            document.body.style.setProperty(
                "--bg-y",
                `${moveY}px`
            );

            document.body.style.setProperty(
                "--bg-rotate",
                `${rotate}deg`
            );

        };


        window.addEventListener(
            "mousemove",
            handleMouseMove
        );


        return () => {

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

        };

    }, []);


    return (
        <BrowserRouter>

            <PageTransition />

        </BrowserRouter>
    );
}


export default App;

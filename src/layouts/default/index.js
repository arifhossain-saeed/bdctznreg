import React from "react";
import MainNavigation from "../../components/layout_parts/MainNavigation";
import LeftNavigation from "../../components/layout_parts/LeftNavigation";
import RightNavigation from "../../components/layout_parts/RightNavigation";

const AppLayout = ({pageTitle = "", pageContent = "", children, showLeftNav=true, showRightNav=true}) => (
    <div className="default-layout">
        <header className="site-header">
            <div className="main-navigation">
                <MainNavigation/>
            </div>
        </header>

        <main className="main-content">
            {showLeftNav ? <LeftNavigation /> : <></>}

            <div>
                <h1>{pageTitle}</h1>
                <h3>{pageContent}</h3>
                {children}
            </div>

            {showRightNav ? <RightNavigation /> : <></>}
        </main>

        <footer>
            <h4>Site Footer</h4>
        </footer>
    </div>
);

export default AppLayout;
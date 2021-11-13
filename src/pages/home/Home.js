import React from "react";
import AppLayout from "../../layouts/default";
import LeftNavigation from "../../components/layout_parts/LeftNavigation";
import RightNavigation from "../../components/layout_parts/RightNavigation";

const Home = () => (
    <AppLayout pageTitle="Home Page" pageContent="Home Page Detail" showRightNav={false}>
        <div className="page-content">
            <h1>This is home page content.</h1>
        </div>
    </AppLayout>
);

export default Home;
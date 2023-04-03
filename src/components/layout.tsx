import React from "react";

import Header from "./header";
import Footer from "./footer";

export default function Layout({children}: any){

    return (
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
    );

}
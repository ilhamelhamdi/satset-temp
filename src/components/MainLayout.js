import React from "react";

function MainLayout({children}){
    return(
        <div className="w-full">
            {/* Header */}
            {children}
            {/* Footer */}
        </div>
    )
}

export default MainLayout
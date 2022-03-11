import React from "react";
import './arduardoHeader.css';
function Header() : JSX.Element{
    return(
        <React.Fragment>
            <div className="flex-none p-6 w-full">            
                <h1 className="text-2xl font-bold text-center text-white">Arduardo IoT</h1>
            </div>
        </React.Fragment>
    );
}
export {Header};
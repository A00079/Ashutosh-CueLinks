import React from 'react';
import { Link } from "react-router-dom";

const CuelinksProductCards = (props) => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4  w-full">
                {props.coupons &&
                    props.coupons.map((el, index) => {
                        return (
                            <a key={index} href={el.productUrl} target="_blank">
                                <div key={index} className="h-full flex flex-col items-center text-center">
                                    <img alt="team" className="flex-shrink-0 bg-gray-100 rounded-lg w-28 h-28 object-contain object-center mb-4" src={el.campaignImage} />
                                    <div className="w-full">
                                        <h2 className="title-font font-bold text-sm text-gray-900 mb-1">{el.companyName}</h2>
                                        <h3 className="text-gray-600 font-medium text-xs w-full text-center mx-auto">{el.productName}</h3>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </React.Fragment >
    )
}

export default CuelinksProductCards;
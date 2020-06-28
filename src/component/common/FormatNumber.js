import React from 'react';

const FormatNumber = ({ number }) => {
    return (
        <span>
            {new Intl.NumberFormat("ES-CL", {
                style: "currency",
                currency: "CLP"
            }).format(number)}
        </span>
    );
}

export default FormatNumber;
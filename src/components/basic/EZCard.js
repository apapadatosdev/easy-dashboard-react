import React, { Children } from "react";
import PropTypes from 'prop-types';
import CardBarChart from "../cards/CardBarChart";
import CardLineChart from "../cards/CardLineChart";
import CardStatistic from "../cards/CardStatistic";
import CardTable from "../cards/CardTable";

function EZCard({type, children, className, data}) {
    
    const renderWidget = () => {
        if(type === "indicator") {
            return <CardStatistic className={className} data={data}></CardStatistic>
        }
        else if (type === "barchart") {
            return <CardBarChart className={className} data={data}></CardBarChart>
        }
        else if (type === "linechart") {
            return <CardLineChart className={className} data={data}></CardLineChart>
        }
        else if (type === "table") {
            return <CardTable className={className} data={data}></CardTable>
        }
        else {
            return children;
        }
    }

    return (
        renderWidget()
    )
}


EZCard.propTypes = {
    /**
    * @type Enum ['indicator', 'barchart', 'linechart', 'table']
    * 
    * The type of widget is going to be created on this card
    */
    type:  PropTypes.oneOf(['indicator', 'barchart', 'linechart', 'table']).isRequired,
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    data: PropTypes.object,
    theme: PropTypes.object,
    chartjs: PropTypes.object
}

export default EZCard
import React from "react";
import PropTypes from "prop-types";
import './CardStatistic.css';

import EZLabel from "../shared/EZLabel";

export default function CardStatistic({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
  className,
}) {
  return (
    <div className={className}>
      <div className={" shadow-lg ez-statistic ez-card z-depth-4"}>   
        <div className="ez-vertical-center">
            <div className="ez-data" style={{background: ''}}>
                <div className="ez-data-row" style={{background: ''}}>                
                    <h5 className="ez-title"><EZLabel text={statSubtitle} pre={{font_awesome: "fa-solid fa-user"}} post={{material_icon: "settings"}}></EZLabel></h5>
                    <span className="ez-indicator"><EZLabel text={statTitle} pre={{font_awesome: "fa-solid fa-user"}} post={ <img src={process.env.PUBLIC_URL + "demo_icon.svg"} alt="demo drink icon" style={{height: '1em'}} ></img> }></EZLabel></span>
                </div>
                <div className="ez-data-row" style={{background: ''}}>
                    <span className="ez-info"><i class="fa-solid fa-user"></i> {statPercent} <i class="material-icons">settings</i></span>                
                    <span className="ez-info"><i class="fa-solid fa-user"></i> {statDescripiron} <i class="material-icons">settings</i></span>
                </div>
            </div>
            <div className="ez-icon" style={{background: ''}}>
                <div className="ez-circle">        
                  <i class="material-icons">settings</i>          
                  {/* <i class="fa-solid fa-user"></i> */}
                </div>                
            </div>
        </div>             
      </div>
    </div>
  );
}

CardStatistic.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardStatistic.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};

import React from "react";
import PropTypes from "prop-types";
import './CardTable.css';

export default function CardTable({
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
    <>
      <div className={className + " shadow-lg ez-statistic ez-card-table z-depth-4"}>        
        <table className="ez-table">
            
            <thead>
                <tr>
                    <th colspan="5">
                    <i class="fa-solid fa-user"></i> {statSubtitle} <i class="material-icons">settings</i>
                    </th>                    
                </tr>                
                <tr className="color">
                    <th>
                        Column1
                    </th>
                    <th>
                        Column2
                    </th>
                    <th>
                        Column3
                    </th>
                    <th>
                        Column4
                    </th>
                    <th>
                        Column5
                    </th>
                </tr>                
            </thead>
            <tbody>
                <tr><td>Value 1</td><td>Value 2</td><td>Value 3</td><td>Value 4</td><td>Value 5</td></tr>
                <tr><td>Value 1</td><td>Value 2</td><td>Value 3</td><td>Value 4</td><td>Value 5</td></tr>
                <tr><td>Value 1</td><td>Value 2</td><td>Value 3</td><td>Value 4</td><td>Value 5</td></tr>
                <tr><td>Value 1</td><td>Value 2</td><td>Value 3</td><td>Value 4</td><td>Value 5</td></tr>
                <tr><td>Value 1</td><td>Value 2</td><td>Value 3</td><td>Value 4</td><td>Value 5</td></tr>
                <tr><td>Value 1</td><td>Value 2</td><td>Value 3</td><td>Value 4</td><td>Value 5</td></tr>
                <tr><td>Value 1</td><td>Value 2</td><td>Value 3</td><td>Value 4</td><td>Value 5</td></tr>                
            </tbody>
        </table>
        {/* <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p> 
        </div>*/}
      </div>
    </>
  );
}

CardTable.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardTable.propTypes = {
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

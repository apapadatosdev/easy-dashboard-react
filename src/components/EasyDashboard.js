// import Chart from "chart.js";
import { useEffect, useRef, useState } from "react";
import CardBarChart from "./Cards/CardBarChart";
import CardLineChart from "./Cards/CardLineChart";
import CardSimpleIndicator from "./Cards/CardSimpleIndicator";
import CardStatistic from "./Cards/CardStatistic";
import CardTable from "./Cards/CardTable";
import './EasyDashboard.css';

const EasyDashboard = (props) => {


    const [maxViewportClass, setMaxViewportClass] = useState({ 
        //xl 1280px or bigger
        //2xl 1536px or bigger
        class: ""        

    })    

    let styles1 = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4    gap-4 m-5";
    let styles2 = "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6   gap-4 m-5";
    let styles3 = "grid grid-cols-1 lg:grid-cols-2  gap-4 m-5";
    let styles4 = "grid grid-cols-1 lg:grid-cols-2  gap-4 m-5";
    
    let styles_1_slot = "col-12 col-md-6 col-xl-3"    
    let styles_2_slot = "col-12 col-md-4 col-xl-2"    
    let styles_3_slot = "col-12 col-lg-6"    
    let styles_4_slot = "col-12 col-lg-6"

    let framework_used_class = props.cssframework == "tailwind" ? "ez-tailwind" : 
                                props.cssframework == "materialize" ? "ez-materialize" : 
                                props.cssframework == "bootstrap" ? "container-fluid ez-bootstrap" : 
                                props.cssframework == "material" ? "mdc-layout-grid ez-material" : 
                                "ez-nocssframework";

    if(props.cssframework === "tailwind"){        
        styles1 = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4    gap-4 m-5";
        styles2 = "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6   gap-4 m-5";
        styles3 = "grid grid-cols-1 lg:grid-cols-2  gap-4 m-5";
        styles4 = "grid grid-cols-1 lg:grid-cols-2  gap-4 m-5";

        styles_1_slot = "";
        styles_2_slot = "";
        styles_3_slot = "";
        styles_4_slot = "";
    }
    else if(props.cssframework === "bootstrap") {        
        let st = "row g-4 my-2 mx-4"
        styles1 = st;
        styles2 = st;
        styles3 = st;
        styles4 = st;

        styles_1_slot = "col-12 col-lg-6 col-xxl-3";
        styles_2_slot = "col-12 col-lg-4 col-xxl-2";
        styles_3_slot = "col-12 col-lg-6";
        styles_4_slot = "col-12 col-lg-6";
    }
    else if(props.cssframework === "material") {
        let st = "mdc-layout-grid__inner"
        styles1 = st;
        styles2 = st;
        styles3 = st;
        styles4 = st;

        styles_1_slot = "---mdc-layout-grid__cell--span-3-desktop ---mdc-layout-grid__cell--span-4-laptop mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-8-phone"; //;"mdl-cell mdl-cell--3-col";     //mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--span-6-laptop 
        styles_2_slot = "mdc-layout-grid__cell--span-6";
        styles_3_slot = "mdc-layout-grid__cell--span-6";
        styles_4_slot = "mdc-layout-grid__cell--span-6";
    } 
    else if(props.cssframework === "materialize") {
        let st = "row"
        styles1 = st;
        styles2 = st;
        styles3 = st;
        styles4 = st;

        styles_1_slot = "col s12 m6 xl3"; //;"mdl-cell mdl-cell--3-col";     //mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--span-6-laptop 
        styles_2_slot = "col s12 m6 l4 xl2";
        styles_3_slot = "col s12 m6";
        styles_4_slot = "col s12 m6";
    }    





    const containerRef = useRef();

    let calculateWidthClass = function() {        
        if(parseInt(containerRef.current.offsetWidth) > 1280) {
            console.log("resize width mdc-layout-grid__cell--span-3-desktop");
            setMaxViewportClass({class: "mdc-layout-grid__cell--span-3-desktop"});
        }
        else {
            setMaxViewportClass({class: "mdc-layout-grid__cell--span-6-desktop"});        
        }        
    }


    // useEffect(() => {
    //     //console.log("container width ", containerRef.current.offsetWidth);

    //     function handleResize() {
    //         calculateWidthClass();
    //         //console.log("resize width ", containerRef.current.offsetWidth);            
    //     }

    //     window.addEventListener('resize', handleResize);

    //     console.log("initial width ", containerRef.current.offsetWidth);

    //     return _ => {
    //         window.removeEventListener('resize', handleResize)                      
    //     }
    // }, []);

    return (        
             (props.cssframework==="material" && false) ?
                <div className={framework_used_class} ref={containerRef}>
                    <div className="mdc-layout-grid__inner">                        
                            {/* <CardStatistic className={styles_1_slot}></CardStatistic>
                            <CardStatistic className={styles_1_slot}></CardStatistic>
                            <CardBarChart className={styles_1_slot}></CardBarChart>
                            <CardLineChart className={styles_1_slot}></CardLineChart>
                        
                        
                            <CardStatistic className={styles_2_slot}></CardStatistic>
                            <CardStatistic className={styles_2_slot}></CardStatistic>
                            <CardStatistic className={styles_2_slot}></CardStatistic>
                            <CardStatistic className={styles_2_slot}></CardStatistic>
                            <CardStatistic className={styles_2_slot}></CardStatistic>
                            <CardStatistic className={styles_2_slot}></CardStatistic>
                        
                        
                            <CardLineChart className={styles_3_slot}></CardLineChart>
                            <CardTable className={styles_3_slot}></CardTable>
                        
                        
                            <CardBarChart className={styles_4_slot}></CardBarChart>
                            <CardTable className={styles_4_slot}></CardTable>                 */}
                        
                        {/* <div className={styles1}>
                            <CardStatistic className={styles_1_slot}></CardStatistic>
                            <CardStatistic className={styles_1_slot}></CardStatistic>
                            <CardBarChart className={styles_1_slot}></CardBarChart>
                            <CardLineChart className={styles_1_slot}></CardLineChart>
                        </div>        
                        <div className={styles2}>
                            <CardStatistic className={styles_2_slot}></CardStatistic>
                            <CardStatistic className={styles_2_slot}></CardStatistic>
                            <CardStatistic className={styles_2_slot}></CardStatistic>
                            <CardStatistic className={styles_2_slot}></CardStatistic>
                            <CardStatistic className={styles_2_slot}></CardStatistic>
                            <CardStatistic className={styles_2_slot}></CardStatistic>
                        </div>   
                        <div className={styles3}>                
                            <CardLineChart className={styles_3_slot}></CardLineChart>
                            <CardTable className={styles_3_slot}></CardTable>
                        </div>     
                        <div className={styles4}>
                            <CardBarChart className={styles_4_slot}></CardBarChart>
                            <CardTable className={styles_4_slot}></CardTable>                
                        </div>     */}
                    </div>
                </div>        
             :
             <div className={framework_used_class} ref={containerRef}>                
                <div className={styles1}>
                    <CardStatistic className={maxViewportClass.class + " " + styles_1_slot}></CardStatistic>
                    <CardStatistic className={maxViewportClass.class + " " + styles_1_slot}></CardStatistic>
                    <CardBarChart className={maxViewportClass.class + " " + styles_1_slot}></CardBarChart>
                    <CardLineChart className={maxViewportClass.class + " " + styles_1_slot}></CardLineChart>
                </div>        
                <div className={styles2}>
                    <CardStatistic className={styles_2_slot}></CardStatistic>
                    <CardStatistic className={styles_2_slot}></CardStatistic>
                    <CardStatistic className={styles_2_slot}></CardStatistic>
                    <CardStatistic className={styles_2_slot}></CardStatistic>
                    <CardStatistic className={styles_2_slot}></CardStatistic>
                    <CardStatistic className={styles_2_slot}></CardStatistic>
                </div>   
                <div className={styles3}>                
                    <CardLineChart className={styles_3_slot}></CardLineChart>
                    <CardTable className={styles_3_slot}></CardTable>
                </div>     
                <div className={styles4}>
                    <CardBarChart className={styles_4_slot}></CardBarChart>
                    <CardTable className={styles_4_slot}></CardTable>                
                </div>                    
            </div>                       
    )
}


export default EasyDashboard;
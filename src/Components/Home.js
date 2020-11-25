import React, { Component } from "react";
import ReactToPrint from 'react-to-print';
import './Home.css';
import Select from 'react-select';
import userDatas from "../data.json";

class PrintDatas extends React.Component {

    render() {
        const {user}=this.props
        let arr=[]
        let expectedArr=[]
        if(user.Competency && user.Competency.length>0){
            for(let i=0;i<user.Competency.length;i++){
                if(user.Competency[i].expected_level===1){
                    expectedArr.push(3)
                }
                else if(user.Competency[i].expected_level===2){
                    expectedArr.push(8.7)
                }
                else if(user.Competency[i].expected_level===3){
                    expectedArr.push(14.3)
                }
                else if(user.Competency[i].expected_level===4){
                    expectedArr.push(20.1)
                }
                else{
                    expectedArr.push(25.7)
                }
                let arr1=[0,0,0,0,0]
                let b=user.Competency[i].actual_level
                for(let j=b;j>0;j--){
                    arr1[j-1]=1
                }
                arr.push(arr1)
            }
        }
        return (
            <div>
                <div className="header">
                    <img src="/images/logo1.png" alt="logo1" />
                    <div className="header-text" >
                        <div>Technical Competencies</div>
                        <div>Self Assessment Report</div>
                    </div>
                </div>
                <div>
                    <div className="form-data">
                        <div className="form-logo">
                            <img src="/images/logo2.png" alt="logo3" />
                        </div>
                        <div className="form-content">
                            <div>Name</div>
                            <div className="form-text">{user.Name}</div>
                        </div>
                        <hr className="form-hr" />
                        <div className="form-content">
                            <div>Staff ID</div>
                            <div className="form-text">{user.StaffId}</div>
                        </div>
                        <hr className="form-hr" />
                        <div className="form-content">
                            <div>Department/OPU</div>
                            <div className="form-text">{user.Department}</div>
                        </div>
                        <hr className="form-hr" />
                        <div className="form-content">
                            <div>Business</div>
                            <div className="form-text">{user.OPU}</div>
                        </div>
                        <hr className="form-hr" />
                        <div className="form-content">
                            <div>Self Assessment Date</div>
                            <div className="form-text">{user.Date}</div>
                        </div>
                    </div>
                </div>
                <div className="cont">
                    <div className="background">
                        <img src="/images/CoverPage.png" alt="background" />
                    </div>
                    <div className="text">
                        <p>About the Report</p>
                        <div>
                        This is a system generated report based on your self assessment. This report gives you the competency proficiency levels against those required level for the role. You are advised to review the report and identify the competency strengths and development area which you may want to focus upon.
                        </div>
                        <div>
                        Please note that this report is generated based on the self assessment prototype which is currently under testing and refinement. The results of the report will not impact your performance, progression, career mobility and promotion.
                        </div>
                    </div>
                </div>
                <div className="cont">
                    <div className="intro">
                        <img src="/images/top.png" alt="intro" />
                        <div className="intro-logo">
                            <img src="/images/logo.png" alt="logo" />
                            <div>Introduction</div>
                        </div>
                    </div>
                    <div className="text1">
                        <p>This is a system generated competency self assessment report. The purpose of the report is to help you reflect upon the competency strengths and development areas and consider these in finalizing the development plan.</p>
                        <p>This report compares the actual proficiency with those required for the role and defined in the SPUR (Success Profile for Unique Role) document.</p>
                        <p>To assist you in the interpretation, the table below shows the various proficiency levels along with their description.</p>
                    </div>
                    <div className="intro-table">
                        <div className="table-header">
                            <div className="table-level-header">Proficiency Level</div>
                            <div>Description</div>
                        </div>
                        <hr />
                        <div className="table-cont">
                            <div style={{width:"28rem"}}>Level 5</div>
                            <div>Network, originate, design strategy and policies, able to influence top management  advise others how to do</div>
                        </div>
                        <hr />
                        <div className="table-cont">
                            <div style={{width:"27rem"}}>Level 4</div>
                            <div>Mentor, integrate with cross functional teams, able to resolve complex problems  teach others how to do</div>
                        </div>
                        <hr />
                        <div className="table-cont">
                            <div style={{width:"45rem"}}>Level 3</div>
                            <div>Has all the knowledge and skills required to perform the job. Apply, demonstrate, analyse and provide insights, able to resolve problems within own areas  do without help</div>
                        </div>
                        <hr />
                        <div className="table-cont">
                            <div style={{width:"31rem"}}>Level 2</div>
                            <div>Has most of the knowledge and some skills required to perform the job. Contribute, participate, analyse  do with help</div>
                        </div>
                        <hr />
                        <div className="table-cont">
                            <div style={{width:"22rem"}}>Level 1</div>
                            <div>Has some basic/minimum knowledge. Recognise, identify  ask when help needed</div>
                        </div>
                    </div>
                    <div className="footer" style={{marginTop:"15rem"}}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    
                </div>
                <div className="cont">
                    <div className="intro">
                        <img src="/images/top.png" alt="intro" />
                        <div className="intro-logo">
                            <img src="/images/logo.png" alt="logo" />
                            <div>Competency Overview</div>
                        </div>
                    </div>
                    <div className="text1">
                        <p>The chart below shows your proficiency level compared against SPUR requirement. You may want to focus on the development of competencies where you observe a gap.</p>
                        <p className="head">Note:</p>
                        <p style={{marginBottom:"0"}}>This chart has been developed basis the self assessment you conducted. We wish to reiterate that the tool is currently undergoing further testing and refinement and therefore you are advised not to take any career, progression, mobility or performance related decisions basis this report.</p>
                    </div>
                    <div className="rating">
                        <div>
                            <div>
                                <span className="color"></span>Self-Assessment Score
                            </div>
                        </div>
                        <div>
                            <div>
                            <i class="fa fa-star icon" aria-hidden="true"></i>Expected Competency Level
                            </div>
                        </div>
                    </div>
                    {user.Competency && user.Competency.length>0?
                        user.Competency.map((ele,i)=>{
                                return(
                                    <div style={{marginTop:"4rem"}}>
                                        <div className="rating-list">
                                            <div>{ele.name}</div>
                                            <div className="rating-view">
                                                <div className="star" style={{marginLeft:expectedArr[i]+"rem"}}><i class="fa fa-star" aria-hidden="true"></i></div>
                                                <div style={{display:"none"}}></div>
                                                <div className={arr[i][0]===1?'expected':"normal"}>
                                                </div>
                                                <div className={arr[i][1]===1?'expected':"normal"}></div>
                                                <div className={arr[i][2]===1?'expected':"normal"}></div>
                                                <div className={arr[i][3]===1?'expected':"normal"}></div>
                                                <div className={arr[i][4]===1?'expected':"normal"}></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }):
                    ""}
                    <div className="footer" style={{marginTop:"58rem"}}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="cont">
                    <div className="intro">
                        <img src="/images/top.png" alt="intro" />
                        <div className="intro-logo">
                            <img src="/images/logo.png" alt="logo" />
                            <div>Learning Recommendations</div>
                        </div>
                    </div>
                    <div className="text1" style={{width:"85%", fontSize:"22px"}}>
                        <p>These are AI driven learning recommendations generated by the system based on the competency gaps observed. You may review the learning recommendations and consider incorporating them in your final development plan.</p>
                    </div>
                    <div style={{marginLeft:"3rem",width:"85%",height:"70rem"}}>
                        <div className="learn-table">
                            <div>SKG  Name</div>
                            <div>Competency  Name</div>
                            <div>Expected  Level</div>
                            <div>Actual  Level</div>
                            <div>Learning Recommendation</div>
                        </div>
                        <hr />
                        {user.Competency && user.Competency.length>0?
                        user.Competency.map((ele,i)=>{
                            if(ele.gap==="Yes"){
                                return(
                                    <div>
                                        <div className="learn-table learn-cont">
                                            <div>General</div>
                                                <div>{ele.name}</div>
                                                <div>L{ele.expected_level}</div>
                                                <div>L{ele.actual_level}</div>
                                                <div>{ele.recommend}</div>
                                        </div>
                                        <hr />
                                    </div>
                                )   
                            }
                        }):
                            ""
                        }
                    </div>
                    <div className="footer" style={{marginTop:"7rem"}}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="cont">
                    <div className="intro">
                        <img src="/images/top.png" alt="intro" />
                        <div className="intro-logo">
                            <img src="/images/logo.png" alt="logo" />
                            <div>Notes</div>
                        </div>
                    </div>
                    <div className="notes">
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    <div className="footer" style={{marginTop:"9rem"}}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            datas:""
        }
    }

    handleChange=(opt)=> {
        this.setState({datas:opt})
    }

    render(){
        const {datas}=this.state
        return(
            <div>
                <ReactToPrint
                    trigger={() => {
                        return <a className="print" href="/#">Print this out!</a>;
                    }}
                    content={() => this.componentRef}
                />
                <Select
                    className="select"
                    options={userDatas.users}
                    onChange={this.handleChange}
                />
                <PrintDatas user={datas}  ref={el => (this.componentRef = el)} />
            </div>
        )
    }

    
}

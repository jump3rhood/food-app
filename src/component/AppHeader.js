import React from 'react'
import { Link } from 'react-scroll'
import { Layout, Row, Col } from 'antd';
import Logo from '../Images/logo.png'
import './style.css'

class AppHeader extends React.Component {
    constructor(props){
        super(props)
        this.state={
            foodDetail:this.props.foods.foodDetail
        }
    }
    activeLinkChange=(index)=>{
        let data=this.state.foodDetail
        data.forEach((element) => {
            if(element.id===index)
                element.active=true
            else
                element.active=false
        });
        this.setState({foodDetail:data})

    }
    render() {
        return (
            <Layout className="layout app-layout">
                <Row>
                    <Col span={11}>
                        <img src={Logo} alt=".."></img>
                    </Col>
                    <Col span={13}>
                        <ul className="app-navbar">
                            {this.state.foodDetail.map((link,index)=>(
                                <li key={index}>
                                <Link to={"list"+(index+1)} smooth={true} duration={1000} className={link.active?"header-active-link":"header-link"} onClick={()=>this.activeLinkChange(link.id)}>{link.title}</Link>
                            </li>
                            
                            ))}
                            
                        </ul>
                    </Col>
                </Row>

            </Layout>
        )
    }
}
export default AppHeader
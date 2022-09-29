import React from 'react'
import { connect } from 'react-redux';
import { Row, Col, Button, Card } from 'antd'
import AppHeader from '../component/AppHeader'
import FoodContainer from './FoodContainer';
import './style.css'

class AppLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartDetail: [],
            total:0
        }
    }
    componentWillReceiveProps(State) {
        if (State.foodDetail && State.foodDetail.cartDetail) {
            this.setState({ cartDetail: State.foodDetail.cartDetail }
                , () => {
                    let detail=State.foodDetail.cartDetail
                    let total=0
                    detail.forEach(element => {
                        total=total+element.total
                    });
                    this.setState({total:total})
                })
        }
    }
    render() {
        return (
            <div>
                <AppHeader foods={this.props.foodDetail} />
                <Row className="container">
                    <Col span={16}>
                        <FoodContainer foods={this.props.foodDetail} />
                    </Col>
                    <Col span={8}>
                        <Card bordered={true} className="custom-add-card">

                            <Row>
                                <Col span={24}>
                                    <h2 className="basket-header">
                                        Your Basket
                                    </h2>
                                    {this.state.cartDetail.length ?
                                        <>
                                            <Row>
                                                <Col span={4}>
                                                    <h3 className="item-price" style={{color:"black"}}>Count</h3>
                                                </Col>
                                                <Col span={11}>
                                                    <h3 className="item-price" style={{color:"black"}}>Item List</h3>
                                                </Col>
                                                <Col span={9} style={{ alignItems: "right" }}>
                                                    <h4 className="item-price" style={{color:"black"}}>Price</h4>
                                                </Col>

                                            </Row>

                                            {this.state.cartDetail.map((cart, index) => (
                                                <>
                                                    <Row>
                                                        <Col span={4}>
                                                            <h3 className="item-price">{cart.count}</h3>
                                                        </Col>
                                                        <Col span={11}>
                                                            <h3 className="item-price">{cart.product.title}</h3>
                                                        </Col>
                                                        <Col span={9} style={{ alignItems: "right" }}>
                                                            <h4 className="item-price">$ {cart.product.price}</h4>
                                                        </Col>

                                                    </Row>

                                                    <Row>
                                                        <Col span={4}></Col>
                                                        <Col span={11}>

                                                            <h4>{cart.freeProduct}</h4>
                                                        </Col>
                                                    </Row>
                                                    {cart.extraItem.map((item, index) => (
                                                        <Row key={index}>
                                                            <Col span={4}>
                                                            </Col>
                                                            <Col span={11}>
                                                                <h4>{item.title}</h4>
                                                            </Col>
                                                            <Col span={9} style={{ alignItems: "right" }}>
                                                                <h4 className="item-price">$ {item.price}</h4>
                                                            </Col>

                                                        </Row>
                                                    ))}

                                                </>

                                            ))}


                                        </> : "No Product in Basket"}
                                    {this.state.cartDetail.length ?
                                        <Row>
                                            <Col span={24}>
                                                <Button className="modal-add-btn">
                                                    <Row>
                                                        <Col span={18}>
                                                            Checkout
                                                </Col>
                                                        <Col span={6}>
                                                            $ {this.state.total}
                                                </Col>
                                                    </Row>
                                                </Button>

                                            </Col>

                                        </Row> : null}

                                </Col>
                                {/* <Col span={9}>
                                    <img src={data.image} alt=".." className="item-image"></img>
                                </Col> */}
                            </Row>


                        </Card>

                    </Col>
                </Row>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const foodDetail = state.AppDetailReducer
    return { foodDetail };
};
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({login}, dispatch)
// }
export default connect(mapStateToProps, null)(AppLayout)

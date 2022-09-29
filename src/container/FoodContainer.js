import React from 'react'
import { Card, Row, Col, Modal, Button, Checkbox } from 'antd'
import { connect } from 'react-redux';
import './style.css'
class FoodContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foodDetail: this.props.foods.foodDetail,
            pizzaList: this.props.foods.pizzaList,
            extraItemList: this.props.foods.extraItemList,
            initialExtraItemList: [],
            loading: false,
            visible: false,
            selectedFood: {},
            count: 1,
            totalOfProduct: 0,
            freePizza: "Vegetable Pizza",
            selectedPizza: "pizza0",
            activeTab: 1,
            extraAmount: 0,
            extraItemCount:0
        }
    }
    componentDidMount(){
        this.setState({initialExtraItemList:this.state.extraItemList})
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };
    handleCancel = () => {
        let data = this.state.extraItemList
        data.forEach(element => {
            element.checked =false
             
        });
        this.setState({ visible: false, selectedFood: {}, count: 1, totalOfProduct: 0, selectedPizza: "pizza0", freePizza: "Vegetable Pizza", extraItemList: data, activeTab: 1, extraAmount: 0,extraITemCount:0 });
    };
    handleFoodChange = (index, index1) => {
        this.setState({
            visible: true,
            selectedFood: this.state.foodDetail[index].items[index1],
            totalOfProduct: this.state.foodDetail[index].items[index1].price,
            count: this.state.count,
            activeTab: 1
        });

    }
    minusCount = () => {
        if (this.state.count > 1) {
            this.setState({ count: this.state.count - 1, totalOfProduct: this.state.selectedFood.price * (this.state.count - 1) })
        }
    }
    plusCount = () => {
        this.setState({ count: this.state.count + 1, totalOfProduct: this.state.selectedFood.price * (this.state.count + 1) })

    }
    addProductHandler = () => {
        let data = this.state.extraItemList
        let extraItem = []
        data.forEach(element => {
            if (element.checked === true)
                extraItem.push(element)
        })
        let finalData = {
            count: this.state.count,
            total: this.state.totalOfProduct+this.state.extraAmount,
            product: this.state.selectedFood,
            freeProduct: this.state.freePizza,
            extraItem:extraItem
        }
        this.props.dispatch({
            type: "ADD_PRODUCT_SAVE_DETAIL",
            cartDetail: finalData
        })
        let oldData = this.state.extraItemList
        oldData.forEach(element => {
            element.checked =false
             
        });
        this.setState({ visible: false, selectedFood: {}, count: 1, totalOfProduct: 0,extraAmount:0,extraItemCount:0,freePizza:"Vegetable Pizza",extraItemList:oldData });

    }
    pizzSelectHandler = (index) => {
        this.setState({ selectedPizza: "pizza" + (index), freePizza: this.state.pizzaList[index].title })
    }
    addExtraItemAmount = () => {
        let data = this.state.extraItemList
        let amount = 0
        let count=0
        data.forEach(element => {
            if (element.checked === true){
                amount += element.price
                count=count+1
            }
        });
        this.setState({ extraAmount: amount,extraItemCount:count })
    }
    onExtraItemCheck = (index) => {
        let item = this.state.extraItemList
        if (item[index].checked === true)
            item[index].checked = false
        else
            item[index].checked = true
        this.setState({ extraItemList: item }, () => {
            this.addExtraItemAmount()
        })
    }
    activeTabChangeHandler = (id) => {
        this.setState({ activeTab: id })
    }
    render() {
        const { selectedFood } = this.state
        return (
            <div style={{ marginLeft: "20px" }}>
                {this.state.foodDetail.map((food, index) => (
                    <div id={"list" + (index + 1)} key={index}>
                        <h1 className="main-item-title" key={index}>{food.title}</h1>
                        <Row>
                            {food.items.map((data, index1) => (
                                <Col span={12} key={index1} onClick={() => this.handleFoodChange(index, index1)} style={{ cursor: "pointer" }}>
                                    <Card bordered={true} className="custom-card">
                                        <Row key={index}>
                                            <Col span={15}>
                                                <h3>
                                                    {data.title}
                                                </h3>
                                                <p>{data.description}</p>
                                                <Row>
                                                    <Col span={15}>
                                                        <h3 className="item-price">$ {data.price}</h3>
                                                    </Col>
                                                    <Col span={9}>
                                                        <h4 className="item-price">Popular</h4>
                                                    </Col>

                                                </Row>

                                            </Col>
                                            <Col span={9}>
                                                <img src={data.image} alt=".." className="item-image"></img>
                                            </Col>
                                        </Row>

                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}

                <Modal
                    title="Add Item To Basket"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                >
                    {this.state.activeTab === 1 ?
                        <div>
                            {/* first tab */}

                            <img src={selectedFood.image} className="popup-image" alt=".."></img>
                            <Row className="modal-item-title">
                                <Col span={16}>
                                    <h3>
                                        {selectedFood.title}
                                    </h3>
                                </Col>
                                <Col span={8} style={{ textAlign: "right" }}>
                                    <h3 className="item-price">$ {selectedFood.price} </h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <p>{selectedFood.description}</p>
                                </Col>

                            </Row>
                            <h4 className="choose-your-favorites">
                                Choose Your Favorites
                            </h4>
                            <Row>
                                <Col span={15}>
                                    <h3>
                                        {selectedFood.title}
                                    </h3>
                                    <p style={{ margin: "0px" }}>Extra cheese,double salami,mushrooms....</p>
                                </Col>
                                <Col span={9} className="item-price" style={{ textAlign: "right" }}>
                                    $ {selectedFood.price}
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <h3 style={{ cursor: "pointer" }} onClick={() => this.activeTabChangeHandler(2)} className="choose-your-favorites">
                                        Click to choose your second Pizza
                                    </h3>
                                </Col>
                            </Row>
                            <Row className="custom-modal-footer">
                                <Col span={10} >
                                    <div className="modal-plus-minus">
                                        <Button className="modal-plus-minus-btn" onClick={() => this.minusCount()}>-</Button>
                                        <Button className="modal-plus-minus-btn">{this.state.count}</Button>
                                        <Button className="modal-plus-minus-btn" onClick={() => this.plusCount()}>+</Button>
                                    </div>
                                </Col>
                                <Col span={14}>
                                    <Button className="modal-add-btn">
                                        <Row>
                                            <Col span={18} onClick={() => this.addProductHandler()} style={{ cursor: "pointer" }}>
                                                Add to basket
                            </Col>
                                            <Col span={6}>
                                                $ {this.state.totalOfProduct + this.state.extraAmount}
                                            </Col>
                                        </Row>
                                    </Button>

                                </Col>
                            </Row>
                        </div>
                        : this.state.activeTab === 2 ?
                            <div>
                                {/* second tab choose 2nd pizza */}

                                <Row className="modal-list-item">
                                    <Button className="modal-link-btn-active" onClick={() => this.activeTabChangeHandler(1)}>{this.state.count>0?<span className="span-count">{this.state.count}</span>:null} Pizza</Button>
                                    <Button className= "modal-link-btn-active" onClick={() => this.activeTabChangeHandler(3)}>{this.state.extraItemCount>0?<span className="span-count">{this.state.extraItemCount}</span>:null} Extra</Button>
                                </Row>

                                {this.state.pizzaList.map((pizza, index) => (
                                    <Row className="modal-list-item" key={index}>
                                        <Col span={2}>
                                            <input type="radio" name="selectedPizza" value={"pizza" + (index)} className="pizza-radio" checked={this.state.selectedPizza === "pizza" + (index)} onChange={() => this.pizzSelectHandler(index)}></input>
                                        </Col>
                                        <Col span={14}>
                                            <h3 style={{ margin: "0px" }}>
                                                {pizza.title}
                                            </h3>
                                            <p style={{ margin: "0px" }}>{pizza.description}</p>
                                            <h4 className="item-price" style={{ color: "red" }}>Popular</h4>
                                        </Col>
                                        <Col span={8}>
                                            <img src={pizza.image} alt=".." className="item-image1"></img>
                                        </Col>
                                    </Row>

                                ))}
                                <Row className="custom-modal-footer" style={{ marginLeft: "20px" }}>
                                    <Col span={24}>
                                        <Button className="modal-add-btn">
                                            <Row>
                                                <Col span={18} onClick={() => this.addProductHandler()} style={{ cursor: "pointer" }}>
                                                    Add to basket
                                                </Col>
                                                <Col span={6}>
                                                    $ {this.state.totalOfProduct + this.state.extraAmount}
                                                </Col>
                                            </Row>
                                        </Button>

                                    </Col>
                                </Row>
                            </div>
                            : this.state.activeTab === 3 ?
                                <div>
                                    {/* extra item   */}

                                    <Row className="modal-list-item">
                                        <Button className="modal-link-btn-active" onClick={() => this.activeTabChangeHandler(1)}>{this.state.count>0?<span className="span-count">{this.state.count}</span>:null} Pizza</Button>
                                        <Button className="modal-link-btn-active" onClick={() => this.activeTabChangeHandler(3)}>{this.state.extraItemCount>0?<span className="span-count">{this.state.extraItemCount}</span>:null} Extra</Button>
                                    </Row>

                                    {this.state.extraItemList.map((item, index) => (
                                        <Row className="modal-list-item" key={index} style={{ marginTop: "16px" }}>
                                            <Col span={16}>
                                                <h3 style={{ margin: "0px" }}>
                                                    {item.title}
                                                </h3>
                                            </Col>

                                            <Col span={4}>

                                                <h3 className="item-price">$ {item.price}</h3>
                                            </Col>
                                            <Col span={4} style={{ marginTop: "-6px" }}>
                                                <h2 className="item-price" >
                                                    <Checkbox
                                                        onChange={() => this.onExtraItemCheck(index)}
                                                        checked={item.checked}
                                                    >
                                                    </Checkbox>
                                                </h2>
                                            </Col>

                                        </Row>


                                    ))}
                                    <Row className="modal-list-item"style={{ marginTop: "16px" ,marginBottom:"10px"}}>
                                            <Col span={24} onClick={()=>this.activeTabChangeHandler(1)} style={{cursor:"pointer"}}>
                                                <h3 style={{ margin: "0px" }}>
                                                  <i className="fa fa-plus"> </i>  Add more Item
                                                </h3>
                                            </Col>

                                        </Row>
                                    <Row className="custom-modal-footer" style={{ marginLeft: "20px" }}>
                                        <Col span={24}>
                                            <Button className="modal-add-btn">
                                                <Row>
                                                    <Col span={18} onClick={() => this.addProductHandler()} style={{ cursor: "pointer" }}>
                                                        Add to basket
                                        </Col>
                                                    <Col span={6}>
                                                        $ {this.state.totalOfProduct + this.state.extraAmount}
                                                    </Col>
                                                </Row>
                                            </Button>

                                        </Col>
                                    </Row>
                                </div>

                                : null}
                </Modal>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    const foodDetail = state.AppDetailReducer
    return { foodDetail };
};
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ addProduct }, dispatch)
// }
export default connect(mapStateToProps, null)(FoodContainer)

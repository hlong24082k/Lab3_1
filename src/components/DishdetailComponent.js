import React,{Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, NavItem} from 'reactstrap';


    
    function renderDish({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
const DishDetail = (props) =>{


        if(props.dish != null)
            return(
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <renderDish dish={props.dish}></renderDish>
                        </div>
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
}


export default DishDetail;
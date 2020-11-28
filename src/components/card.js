import React from 'react';
import { Card, CardTitle, CardText, CardImg } from 'reactstrap';
import cardsStyles from "./cards.module.scss";

const Cards = (props) => {
  return (
        <Card body className={cardsStyles.body}>
          
          <CardTitle className={cardsStyles.title}>{props.title}</CardTitle>
          <CardImg width="100%" height="200px" src={props.src} alt="Card Image" />
          <CardText>{props.message}</CardText>   
        </Card>
  );
};

export default Cards;
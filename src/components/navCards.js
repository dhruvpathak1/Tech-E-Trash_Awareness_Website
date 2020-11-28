import React from 'react';
import { Card, CardTitle} from 'reactstrap';
import navStyles from "./navCards.module.scss";
import {Link} from "gatsby"

const Cards = (props) => {


  return (
    <Card  className={navStyles.body}>

      <CardTitle className={navStyles.title}><Link className={navStyles.links} to={props.page}>{props.title}</Link> </CardTitle>

    </Card>
  );
};

export default Cards;
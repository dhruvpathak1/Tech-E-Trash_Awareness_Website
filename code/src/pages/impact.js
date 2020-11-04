import React from "react"
import Layout from "../components/layout"
import impactStyles from "../styles/impact.module.scss"
import img1 from "../images/1a.jpg"
import img2 from "../images/1b.jpg"
import img3 from "../images/1c.jpg"
import img4 from "../images/1d.jpg"
import img5 from "../images/1e.jpg"
import img6 from "../images/1f.jpg"
import img7 from "../images/1g.jpg"
import img8 from "../images/1h.jpg"
import img9 from "../images/1i.jpg"
import { Helmet } from "react-helmet"

const ImpactPage = () => {
    return(
    <Layout>
        <Helmet title="Tech-E | Impact of E-Waste" defer={false} />
        <div className={impactStyles.title}>       
        </div>

        <div className={impactStyles.body}>
        <div className = {impactStyles.contain}>
        <div className={impactStyles.emage} >
            <img className={impactStyles.photo} src={img1} alt="image1" data-sal="zoom-out" data-sal-delay="300" data-sal-duration="2000"></img>
        </div>
        </div>
        <div className = {impactStyles.contain}>
        <div className={impactStyles.emage} >
            <img className={impactStyles.photo} src={img2} alt="image2" data-sal="flip-left" data-sal-delay="300" data-sal-easing="ease"></img>
        </div>
        </div >
        <div className = {impactStyles.contain}>
        <div className={impactStyles.emage} >
            <img className={impactStyles.photo} src={img3} alt="image3" data-sal="slide-left" data-sal-delay="300" data-sal-duration="2000"></img>
        </div>
        </div>
        <div className = {impactStyles.contain}>
        <div className={impactStyles.emage} >
            <img className={impactStyles.photo} src={img4} alt="image4" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease"></img>
        </div>
        </div>
        <div className = {impactStyles.contain}>
        <div className={impactStyles.emage} >
            <img className={impactStyles.photo} src={img5} alt="image5" data-sal="flip-right" data-sal-delay="300" data-sal-easing="ease"></img>
        </div>
        </div>
        <div className = {impactStyles.contain}>
        <div className={impactStyles.emage} >
            <img className={impactStyles.photo} src={img6} alt="image6" data-sal="slide-left" data-sal-delay="300" data-sal-easing="ease"></img>
        </div>
        </div>
        <div className = {impactStyles.contain}>
        <div className={impactStyles.emage} >
            <img className={impactStyles.photo} src={img7} alt="image7" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease"></img>
        </div>
        </div>
        <div className = {impactStyles.contain}>
        <div className={impactStyles.emage} >
            <img className={impactStyles.photo} src={img8} alt="image8" data-sal="zoom-in" data-sal-delay="300" data-sal-easing="ease"></img>
        </div>
        </div>
        <div className = {impactStyles.contain}>
        <div className={impactStyles.emage} >
            <img className={impactStyles.photo} src={img9} alt="image9" data-sal="slide-right" data-sal-delay="800" data-sal-easing="ease"></img>
        </div>
        </div>
        <div className = {impactStyles.contain}>
            <div data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease">
                <h2 className={impactStyles.header}>Every recycled electronic device helps us get one step closer to the E-Future. </h2>
                <h2 className={impactStyles.header}>So lets make your device count! &emsp; :)</h2>
                <iframe className={impactStyles.apiiframe} src="https://www.google.com/maps/d/embed?mid=1MwKVxFEwp0XENHG6t105jiSiV7uJX4Oa" width="500" height="500" />
            </div>
        </div>
        </div>
    </Layout>
    )
    }
export default ImpactPage
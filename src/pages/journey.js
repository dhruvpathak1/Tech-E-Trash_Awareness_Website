import React, {Component} from 'react';
import Layout from "../components/layout"
import journeyStyles from "../styles/journey.module.scss"
import img1 from "../images/j1.png"
import img2 from "../images/j2.png"
import img3 from "../images/j22.png"
import img4 from "../images/j23.png"
import img5 from "../images/j3.jpeg"
import img6 from "../images/j4.jpg"
import "../styles/journey.scss"
import $ from "jquery"
import { Helmet } from "react-helmet"

export default class App extends Component {
    componentDidMount(){
        var $element=$('.each-event, .title');
        var $window = $(window);
        $window.on('scroll resize', check_for_fade);
        $window.trigger('scroll');
        function check_for_fade() { 
            var window_height = $window.height();
            
            $.each($element, function (event) {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_offset = $element.offset().top;
                var space = window_height - (element_height + element_offset -$(window).scrollTop());
                if (space < 60) {
                    $element.addClass("non-focus");
                } else {
                    $element.removeClass("non-focus");
                }
        
            });
        };
    }
    render(){
    return(
    <Layout>
                <Helmet title="Tech-E | Journey of a Device" defer={false} />
        <div className={journeyStyles.title}></div>
        <div className={journeyStyles.main}>
        <div class="wrapper">
        <h1 className={journeyStyles.head}>Visualizing Journey Of A Device.</h1>
        <h2 className={journeyStyles.head}>Using Example Of Mobile Phone.</h2>
        <section class="block">
        <div class="each-year">
            <div class="title">Today</div>
            <div class="each-event">
            <div class="event-description">
            <img src={img1} alt="buy"></img>
            </div>
            </div>
            <div class="each-event">
            <div class="event-description">
            <p className={journeyStyles.para}>Story starts when we buy a device.</p>
            </div>
            </div>
            </div>
        </section>

        <section class="block">
        <div class="each-year">
        <div class="title">After One Month</div>
            <div class="each-event">
            <div class="event-description">
            <img src={img2} alt="buy"></img>
            </div>
            </div>
            <div class="each-event">
            <div class="event-description">
            <p className={journeyStyles.para}>We enjoy using our device and we take its proper care.</p>
            </div>
            </div>
        </div>
        </section>

        <section class="block">
        <div class="each-year">
        <div class="title">After Six Month</div>
            <div class="each-event">
            <div class="event-description">
            <img src={img3} alt="buy"></img>
            </div>
            </div>
            <div class="each-event">
            <div class="event-description">
            <p className={journeyStyles.para}>Device starts becoming trivial.</p>
            </div>
            </div>
        </div>
        </section>

        <section class="block">
        <div class="each-year">
        <div class="title">After One Year</div>
            <div class="each-event">
            <div class="event-description">
            <img src={img4} alt="buy"></img>
            </div>
            </div>
            <div class="each-event">
            <div class="event-description">
            <p className={journeyStyles.para}>As we stop caring for device, some physical damages start apearing on device.</p>
            </div>
            </div>
        </div>
        </section>

        <section class="block">
        <div class="each-year">
        <div class="title">After Two Year</div>
            <div class="each-event">
            <div class="event-description">
            <img src={img5} alt="buy"></img>
            </div>
            </div>
            <div class="each-event">
            <div class="event-description">
            <p className={journeyStyles.para}>Finally device becomes non-usable.</p>
            </div>
            </div>
        </div>
        </section>

        <section class="block">
        <div class="each-year">
        <div class="title">End</div>
            <div class="each-event">
            <div class="event-description">
            <img src={img6} alt="buy"></img>
            </div>
            </div>
            <div class="each-event">
            <div class="event-description">
            <p className={journeyStyles.para}>Now only way is to dump our device.</p>
            </div>
            </div>
        </div>
        </section>
        </div>
        </div>
    </Layout>
    );
}
}

import React from 'react'
import "./css/styles.css"
import PortfolioItems from './PortfolioItems'
import Img1 from "./assets/img/portfolio/cabin.png"
import Img2 from "./assets/img/portfolio/cake.png"
import Img3 from "./assets/img/portfolio/circus.png"
import Img4 from "./assets/img/portfolio/game.png"
import Img5 from "./assets/img/portfolio/safe.png"
import Img6 from "./assets/img/portfolio/submarine.png"

function Portfolio() {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
               
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
               
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-center">
                    <PortfolioItems name="Cabin" img={Img1}></PortfolioItems>
                    <PortfolioItems name="Cake" img={Img2}></PortfolioItems>
                    <PortfolioItems name="Circus" img={Img3}></PortfolioItems>
                    <PortfolioItems name="Game" img={Img4}></PortfolioItems>
                    <PortfolioItems name="Safe" img={Img5}></PortfolioItems>
                    <PortfolioItems name="Sub" img={Img6}></PortfolioItems>
                </div>
            </div>
        </section>
    )
}

export default Portfolio

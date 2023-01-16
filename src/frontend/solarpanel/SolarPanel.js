
import Section from './Section';
import './anasayfa.css';
const SolarPanel = () => {
    const HeroSections = [
        {
            backgroundImage: "solar-panel.jpg",
            title: "Lowest Cost Solar Panel in America",
            description: "Money-back guarantee",
            descriptionSpan: "",
            leftButton: "Order Now",
            rightButton: "Learn More"

        },
        
    ]
    return (<>
      <div className="HomePage">
            {HeroSections.map((section, index) => <Section key={index} model={section.model} title={section.title} description={section.description} descriptionSpan={section.descriptionSpan} leftButton={section.leftButton} rightButton={section.rightButton} backgroundImage={section.backgroundImage}
            />)}
        </div>
        <div className="info">
                <div>
                    <h2>Solar Panels</h2>
                    <p>Convert Sunlight to Energy</p>
                </div>
                <div>
                    <h2>$</h2>
                    <p>Guaranteed Lowest Price for Solar</p>
                </div>
                <div>
                    <h2>24/7</h2>
                <p>Energy Monitoring</p>
                </div>
            </div>
    </>
      
    )
}

export default SolarPanel;
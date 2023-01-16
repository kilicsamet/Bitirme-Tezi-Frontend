
import Section from './Section';
import './anasayfa.css';
const SolarRoof = () => {
    const HeroSections = [
        {
            backgroundImage: "solar-roof.jpg",
            title: "Solar for New Roofs",
            description: "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
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
                <h2>Solar Roof</h2>
                <p>Beautiful
                    Solar</p>
            </div>
            <div>
                <h2>25 -Year</h2>
                <p>Tile Warranty</p>
            </div>
            <div>
                <h2>24/7</h2>
                <p>Outage Protection</p>
            </div>
        </div>
    </>
      
    )
}

export default SolarRoof;
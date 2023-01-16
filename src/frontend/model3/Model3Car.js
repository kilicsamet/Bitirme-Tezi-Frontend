
import Section from './Section';
import './anasayfa.css';
const Model3Car = () => {
    const HeroSections = [
        {
            backgroundImage: "model-3.jpg",
            title: "Model 3",
            description: "Order Online for",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy"

        },
        
    ]
    return (<>
      <div className="HomePage">
            {HeroSections.map((section, index) => <Section key={index} model={section.model} title={section.title} description={section.description} descriptionSpan={section.descriptionSpan} leftButton={section.leftButton} rightButton={section.rightButton} backgroundImage={section.backgroundImage}
            />)}
        </div>
        <div className="info">
                <div>
                    <h2>3.1 s</h2>
                    <p>60 mph</p>
                </div>
                <div>
                    <h2>AVD</h2>
                    <p>Dual Motor</p>
                </div>
                <div>
                    <h2>358 mi</h2>
                    <p>Max Range</p>
                </div>
                <div className="line">
                </div>
                <div>
                    <h2 id="model">Model 3</h2>
                </div>
            </div>
    </>
      
    )
}

export default Model3Car;
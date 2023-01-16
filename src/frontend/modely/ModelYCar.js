
import Section from './Section';
import './anasayfa.css';
const ModelYCar = () => {
    const HeroSections = [
        {
            backgroundImage: "model-y.jpg",
            title: "Model Y",
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
                    <h2>76 cu ft</h2>
                    <p>Cargo Space</p>
                </div>
                <div>
                    <h2>AWD</h2>
                    <p>Dual Motor</p>
                </div>
                <div>
                    <h2>330 mi</h2>
                    <p>Max Range</p>
                </div>
                <div className="line">
                </div>
                <div>
                    <h2 id="model">Model Y</h2>
                </div>
            </div>
    </>
      
    )
}

export default ModelYCar;
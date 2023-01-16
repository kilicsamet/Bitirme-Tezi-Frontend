
import Section from './Section';
import './anasayfa.css';
const ModelXCar = () => {
    const HeroSections = [
        {
            backgroundImage: "model-x.jpg",
            title: "Model X",
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
                    <h2>2.5 s</h2>
                    <p>60 mph</p>
                </div>
                <div>
                    <h2>9.9 s</h2>
                    <p>1/4 Mile</p>
                </div>
                <div>
                    <h2>333 mi</h2>
                    <p>Max Range</p>
                </div>
                <div className="line">
                </div>
                <div>
                    <h2 id="model">Model X</h2>
                </div>
            </div>
    </>
      
    )
}

export default ModelXCar;
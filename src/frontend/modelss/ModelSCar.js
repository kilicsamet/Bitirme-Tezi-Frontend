
import Section from './Section';
import './anasayfa.css';
const ModelSCar = () => {
    const HeroSections = [
        {
            backgroundImage: "model-s.jpg",
            title: "Model S",
            description: "Order Online for",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy",
        },
        
    ]
    return (<>
      <div className="HomePage">
            {HeroSections.map((section, index) => <Section key={index} model={section.model} title={section.title} description={section.description} descriptionSpan={section.descriptionSpan} leftButton={section.leftButton} rightButton={section.rightButton} backgroundImage={section.backgroundImage}
            />)}
        </div>
          <div className="info">
          <div>
              <h2>1.9 s</h2>
              <p>60 mph</p>
          </div>
          <div>
              <h2>200 mph</h2>
              <p>Top Speed</p>
          </div>
          <div>
              <h2>396 mi</h2>
              <p>Max Range</p>
          </div>
          <div className="line">
          </div>
          <div>
              <h2 id="model">Model S</h2>
          </div>
      </div>
    </>
      
    )
}

export default ModelSCar;
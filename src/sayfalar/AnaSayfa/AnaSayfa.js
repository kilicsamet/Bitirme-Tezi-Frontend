
import Section from './Section';
import './anasayfa.css';
const Home = () => {

    const HeroSections = [
        {
            backgroundImage: "model-s.jpg",
            title: "Model S",
            description: "Order Online for",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Model S Araçlar",
            rightButton: "Model S Araç Ekle",

        },
        {
            backgroundImage: "model-y.jpg",
            title: "Model Y",
            description: "Order Online for",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Model Y Araçlar",
            rightButton: "Model Y Araç Ekle",

        },
        {
            backgroundImage: "model-3.jpg",
            title: "Model 3",
            description: "Order Online for",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Model 3 Araçlar",
            rightButton: "Model 3 Araç Ekle",

        },
        {
            backgroundImage: "model-x.jpg",
            title: "Model X",
            description: "Order Online for",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Model X Araçlar",
            rightButton: "Model X Araç Ekle",

        },
        {
            backgroundImage: "solar-panel.jpg",
            title: "Lowest Cost Solar Panel in America",
            description: "Money-back guarantee",
            descriptionSpan: "",
            leftButton: "Order Now",
            rightButton: "Learn More"

        },
        {
            backgroundImage: "solar-roof.jpg",
            title: "Solar for New Roofs",
            description: "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
            descriptionSpan: "",
            leftButton: "Order Now",
            rightButton: "Learn More"

        },
    ]

    return (
        <div className="HomePage">
            {HeroSections.map((section, index) => <Section key={index} model={section.model} title={section.title} description={section.description} descriptionSpan={section.descriptionSpan} leftButton={section.leftButton} rightButton={section.rightButton} backgroundImage={section.backgroundImage}
            />)}
        </div>
    )
}

export default Home;
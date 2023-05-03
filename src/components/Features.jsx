import FeatureSingle from "./FeatureSingle"
import BR from "../assets/images/icon-brand-recognition.svg"
import DR from "../assets/images/icon-detailed-records.svg"
import FC from "../assets/images/icon-fully-customizable.svg"

const Features = () => {
  return(
    <>
    <div className="feature-brief">
      <h2>Advanced Statistics</h2>
      <p>Track how your links are performing accross the web with our advanced statistics dashboard</p>
    </div>
    <div className="feature-detail">
    <FeatureSingle
    logo={BR} 
    heading={"Brand Recognition"}
    para={"Boost your brand recognition with each click. Generic links don't mean a thing. Brandend links help instil confidence in your content"}
    />
    <FeatureSingle
    logo={DR} 
    heading={"Detailed Records"}
    para={"Gain insights into who is clicking your links. Knowing when and where people engage with your content help inform better decisions."}
    />
    <FeatureSingle
    logo={FC} 
    heading={"Fully Customizable"}
    para={"Improve brand awareness and content discoverability with customizable links, supercharging audience engangement."}
    />
    </div>
    </>
  )
}

export default Features;
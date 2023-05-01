import FeatureHeading from "./FeatureHeading";
import FeatureContent1 from "./FeatureContent1";
import FeatureContent2 from "./FeatureContent2";
import FeatureContent3 from "./FeatureConten3";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const FeatureContent = () => {

  const { slideTab } = useContext(DataContext);

  return (
    <section>
      <FeatureHeading />
      <div
        className={`relative w-auto h-auto grid grid-cols-feature-col custom-transition ${slideTab}`
        }
      >
        <FeatureContent1 />
        <FeatureContent2 />
        <FeatureContent3 />
      </div>
    </section>
  )
}

export default FeatureContent;
import Zapier from "../../utils/images/zapier.png";
import Spotify from "../../utils/images/spotify.png";
import Zoom from "../../utils/images/zoom.png";
import Slack from "../../utils/images/slack.png";
import Amazon from "../../utils/images/amazon.png";
import Adobe from "../../utils/images/adobe.png"; 

const Brands = () => {
    return (
        <div className="mt-12 mb-20">
        <p className="text-gray-400 font-medium text-sm mt-12 md:mt-20 p-2 text-center">Trusted By 250+ Companies</p>
            <div className="flex flex-col items-center md:flex-row justify-center mb-6">
                <img src={Zapier} alt="zapier-logo" className="w-43 h-16"></img>
                <img src={Spotify} alt="spotify-logo" className="w-43 h-16"></img>
                <img src={Zoom} alt="zoom-logo" className="w-43 h-16"></img>
                <img src={Slack} alt="slack-logo" className="w-43 h-16"></img>
                <img src={Amazon} alt="amazon-logo" className="w-43 h-16"></img>
                <img src={Adobe} alt="adobe-logo" className="w-43 h-16"></img>

            </div>
        </div>
    )
}

export default Brands

import Zapier from "../../utils/images/zapier.png";
import Spotify from "../../utils/images/spotify.png";
import Zoom from "../../utils/images/zoom.png";
import Slack from "../../utils/images/slack.png";
import Amazon from "../../utils/images/amazon.png";
import Adobe from "../../utils/images/amazon.png"; 

const Brands = () => {
    return (
        <>
        <p className="text-gray-400 font-medium text-sm mt-20 p-2 text-center">Trusted By 250+ Companies</p>
            <div className="flex justify-center mb-6">
                <img src={Zapier} alt="zapier-logo"></img>
                <img src={Spotify} alt="spotify-logo"></img>
                <img src={Zoom} alt="zoom-logo"></img>
                <img src={Slack} alt="slack-logo"></img>
                <img src={Amazon} alt="amazon-logo"></img>
                <img src={Adobe} alt="adobe-logo"></img>

            </div>
        </>
    )
}

export default Brands

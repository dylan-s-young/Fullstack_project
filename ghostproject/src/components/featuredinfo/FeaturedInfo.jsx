import "./featuredInfo.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredtitle">Bitcoin</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">2000</span>
                    <span className="featuredmoneyrate">
                        -11.40 <ArrowDropDownIcon className="featuredicon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to yesterday</span>
            </div>
            <div className="featuredItem">
                <span className="featuredtitle">Ethereum</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">4000</span>
                    <span className="featuredmoneyrate">
                        -100.56 <ArrowDropDownIcon className="featuredicon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to yesterday</span>
            </div>
            <div className="featuredItem">
                <span className="featuredtitle">Cardano</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">2000</span>
                    <span className="featuredmoneyrate">
                        +11.40 <ArrowDropUpIcon className="featuredicon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to yesterday</span>
            </div>
        </div>
    )
}

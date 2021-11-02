import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import "./adminPanel.css"
import {cryptoData} from "../../dummyData"

export default function AdminPanel() {
    return (
        <div className="admin">
            <FeaturedInfo />
            <Chart data={cryptoData} title="Crypto Analytics" grid dataKey="Crypto Value"/>
        </div>
    )
}

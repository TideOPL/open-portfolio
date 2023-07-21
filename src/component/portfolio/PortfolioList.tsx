import { useRouter } from "next/router";
import PortfolioItem from "./PortfolioItem"

const PortfolioList = () => {
    const router = useRouter();
    return (
        <div className="min-w-full grid sm:grid-cols-1 md:grid-cols-2 py-12 lg:grid-cols-3 gap-5">
            <PortfolioItem title="Wembley Partners" subtitle="Part Time" body="Test1" image="/wembleypartners.png" imageType="cover" url={'https://orna.app'} />
            <PortfolioItem title="North Green Security" subtitle="Contract" body="Test2" image="/northgreen.png" imageType="contain" imagePadding={64} url={'https://northgreensecurity.com/'} />
            <PortfolioItem title="Gottaspace" subtitle="Contract" body="Test3" image="/gottaspace.png" imageType="contain" imagePadding={12} url="https://gottaspace.com/" />
            <PortfolioItem title="NearSocial" subtitle="Part Time" body="Test4" image="/near.png" imageType="contain" url="https://nearsocial.app/" />
        </div>
    )
}

export default PortfolioList
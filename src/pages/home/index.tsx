// import { Cape } from "./cape"
import { useTranslation } from 'react-i18next';


const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* <Cape/> */}
            <h1>{t('Home')}</h1>
        </>
    )
}

export default Home
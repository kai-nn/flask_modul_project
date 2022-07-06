import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import ArchitectureIcon from '@mui/icons-material/Architecture';



// загружать с api
const links = [
    {
        label: 'Главная',
        url: '',
        icon: <HomeOutlinedIcon />
    },
        {
        label: 'Деталь',
        url: 'detail',
        icon: <ArchitectureIcon />
    },
    {
        label: 'Технология',
        url: 'list',
        icon: <PrecisionManufacturingOutlinedIcon />
    },
]

function App() {
    return (
        <div>
            <Header links={links} />
            <Main />
            <Footer />
        </div>
    );
}

export default App;

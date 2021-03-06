import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header1 } from "components/ui/Header/Index";
import { Navbar1 } from "components/ui/Navbar/Index"
import {
    HugIcon,
    TeamIcon
} from "components/Icon/Index";


const Layout1 = ({
    cn,
    children
}) => {
    const location = useLocation()
    return (
        <>
            <div className={cn}>
                <Navbar1 routeList={[
                    {link: "/", icon: <HugIcon color={location.pathname === "/" ? '#FEA013' : '#69563A'} />},
                    {link: "/formation", icon: <TeamIcon color={location.pathname === "/formation" ? '#FEA013' : '#69563A'} />}
                ]} />
                <div className='h-screen flex-1 flex flex-col p-10 bg-c_neutral_1 gap-y-6'>
                    <Header1 />
                    {children}
                </div>
            </div>
        </>
    )
}

Layout1.propTypes = {
    cn: PropTypes.string,
    children: PropTypes.element
};

export default Layout1
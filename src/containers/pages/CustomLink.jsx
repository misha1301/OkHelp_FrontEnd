import { Link, useMatch} from "react-router-dom";

const CustomLink = ({children, to, ...props }) => {

    const match_1 = useMatch({
        path: "/user-profile/" + to,
        end: false,
    });

    const match_2 = useMatch({
        path: "/user-profile/" + to,
        end: true,
    });

    const linkStyleFunc = () => {
        if (match_1) {
            if (match_2)
                return 'active';
            else
                return 'active_bg';
        }
        else
            return '';
    }
    
    return (
        <Link to={to}
            className={linkStyleFunc()}
            {...props}
        >
            {children}
        </Link>
    )
}

export default CustomLink
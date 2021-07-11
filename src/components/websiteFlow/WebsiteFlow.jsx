import React, {useState} from 'react'
import './WebsiteFlow.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Home/Logo.svg'
import {FiLogIn} from 'react-icons/fi'
import {FaRegUser} from 'react-icons/fa'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popper from '../popper/Popper'

// Mobile Header is here
import MobileFlow from '../mobileFlow/MobileFlow'
import SeriveTab from '../../components/servicesTab/servicesTab'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    desktopMenu:{},
    quoteBtn:{
        color:'white',
        backgroundColor:'#5f45ea',
        width:200,
        fontSize:10,
        fontWeight:300,
        transition:'0.3s',
        marginLeft:5,
        boxShadow:'0px 5px 10px #999999',
        [theme.breakpoints.down('md')]: {
            width:300,
          },
        "&:hover, &:focus":{
            backgroundColor:'#7962f5',
            boxShadow:'0px 0px 10px gray',
            transition:'0.3s'
        }
    }
  }));

function WebsiteFlow({ children }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [popperText, setPopperText] = useState("")
    const [openServices, setOpenServices] = useState(null);

    const manageService = () => {
        setOpenServices(true)
    }
    
    
    return (
        <div>
            <Popper text={popperText} states={{anchorEl, setAnchorEl}}/>
            <div className="header-wrapper">
                <img className="header-logo" src={Logo} alt="Logo" />

                <div className="header-items">

                    <div className="header-item" onMouseOver={() => setOpenServices(false)}>
                        <Link className="header-link" style={{ color: '#5f45ea' }}>
                            Home
                        </Link>
                    </div>

                    <div className="header-item" onMouseOver={manageService}>
                        <Link className="header-link">
                            Services
                        </Link>
                    </div>

                    <div className="header-item" onMouseOver={() => console.log(false)}>
                        <Link className="header-link">
                            Packages
                        </Link>
                    </div>

                    <div className="header-item" onMouseOver={() => setOpenServices(false)}>
                        <Link className="header-link">
                            Technologies
                        </Link>
                    </div>

                    <div className="header-item" onMouseOver={() => setOpenServices(false)}>
                        <Link className="header-link">
                            About Us
                        </Link>
                    </div>
 
                </div>

                <div className="header-items-response">

                    <div className="login-btn">
                        <FaRegUser 
                           className="login-btn-icon"
                           onMouseOver={(event) => {setAnchorEl(anchorEl ? null : event.currentTarget); setPopperText("Signup to get 50% off Now")}} 
                           onMouseOut={(event) => setAnchorEl(anchorEl ? null : event.currentTarget)}/>
                    </div>
                   
                    <div className="login-btn">
                        <FiLogIn 
                           className="login-btn-icon" 
                           onMouseOver={(event) => {setAnchorEl(anchorEl ? null : event.currentTarget); setPopperText("Login")}} 
                           onMouseOut={(event) => setAnchorEl(anchorEl ? null : event.currentTarget)}
                           />
                    </div>
                        
                    <Button 
                    variant="contained" 
                    className={classes.quoteBtn}
                    onMouseOver={(event) => {setAnchorEl(anchorEl ? null : event.currentTarget); setPopperText("Build your own custom Package and you will be paying for what you have chosen.")}} 
                    onMouseOut={(event) => setAnchorEl(anchorEl ? null : event.currentTarget)}
                    >
                        Create Your Package
                    </Button>

                </div>

            </div>

            <SeriveTab open={openServices} setOpen={setOpenServices}/>

            <MobileFlow />

            {/* Website Header End */}

            {children}
            
        </div>
    )
}

export default WebsiteFlow

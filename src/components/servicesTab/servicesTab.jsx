import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import ReactCardFlip from 'react-card-flip'
import { ImCross } from 'react-icons/im'
import InnerPage from './serviceInnerPage/serviceInnerPage'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -100000000000000000
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [flip1, setFlip1] = useState(false)
  const { open, setOpen } = props
  const [serviceData, setServiceData] = useState('graphic-design')

  const AddServiceData = (data) => {
    setServiceData(data)
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade className="fade-style" in={open} onClose={() => setOpen(false)}>

          <Grid className="service-box" container>

            <Grid item sm={4} xs={12}>
              <div className="slide-menu">

                <div className="slide-tab" style={serviceData == 'graphic-design' ? {backgroundColor:'#4f8cffed', color:'white'} : null} onMouseOver={() => { setFlip1(true); AddServiceData("graphic-design") }}>
                  Graphic Designing
                </div>

                <div className="slide-tab" style={serviceData == 'web-design' ? {backgroundColor:'#4f8cffed', color:'white'} : null} onMouseOver={() => { setFlip1(true); AddServiceData("web-design") }}>
                  Web Designing
                </div>

                <div className="slide-tab" style={serviceData == 'app-development' ? {backgroundColor:'#4f8cffed', color:'white'} : null} onMouseOver={() => { setFlip1(true); AddServiceData("app-development") }}>
                  App Development
                </div>

                <div className="slide-tab" style={serviceData == 'web-development' ? {backgroundColor:'#4f8cffed', color:'white'} : null} onMouseOver={() => { setFlip1(true); AddServiceData("web-development") }}>
                  Web Development
                </div>

                <div className="slide-tab" style={serviceData == 'seo' ? {backgroundColor:'#4f8cffed', color:'white'} : null} onMouseOver={() => { setFlip1(true); AddServiceData("seo") }}>
                  SEO
                </div>

                <div className="slide-tab" style={serviceData == 'digital-marketing' ? {backgroundColor:'#4f8cffed', color:'white'} : null} onMouseOver={() => { setFlip1(true); AddServiceData("digital-marketing") }}>
                  Digital Marketing
                </div>

                <div className="slide-tab" style={serviceData == 'software-solution' ? {backgroundColor:'#4f8cffed', color:'white'} : null} onMouseOver={() => { setFlip1(true); AddServiceData("software-solution") }}>
                  Software Solutions
                </div>

                <div className="slide-tab" style={serviceData == 'content-writing' ? {backgroundColor:'#4f8cffed', color:'white'} : null} onMouseOver={() => { setFlip1(true); AddServiceData("content-writing") }}>
                  Content Writing
                </div>

                <div className="slide-tab" style={serviceData == 'ecommerce-app' ? {backgroundColor:'#4f8cffed', color:'white'} : null} onMouseOver={() => { setFlip1(true); AddServiceData("ecommerce-app") }}>
                  Ecommerce Application
                </div>

                <div className="slide-tab" style={serviceData == 'devops' ? {backgroundColor:'#4f8cffed', color:'white'} : null} onMouseOver={() => { setFlip1(true); AddServiceData("devops") }}>
                  DevOps
                </div>

              </div>
            </Grid>

            <Grid item sm={8} xs={12}>

              <div className="slide-menu2">

                <ImCross size={20} onClick={() => setOpen(false)} className="service-tab-cross" />
  
                <ReactCardFlip isFlipped={flip1} flipDirection="vertical">
                  <div className="flip-card">
                    You need to select any service first.
                  </div>

                  <div className="flip-card card-body">
                    <InnerPage service={serviceData} />
                  </div>
                </ReactCardFlip>

              </div>

            </Grid>

          </Grid>


        </Fade>
      </Modal>
    </div >
  );
}

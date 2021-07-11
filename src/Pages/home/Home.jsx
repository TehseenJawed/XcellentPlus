import React, {useState} from 'react'
import Lottie from 'react-lottie';
import HomeLeftAnimation from '../../assets/lottie/homepage-left.json'
import './Home.scss'
import HomeLeft from '../../assets/Home/home-left.png'
import ReactCardFlip from 'react-card-flip'
import Services from './InnerComponents/Services'

function Home() {

  const LeftSideAnimation = {
    loop: true,
    autoplay: true,
    animationData: HomeLeftAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const [flip, setFlip] = useState(false)
  
  setInterval(() => setFlip(!flip),15000)

  return (
    <div>
      <div className="home-comp-1">

        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">

          <div className="home-comp1-innerText">
            <div className="home-comp1-typography1">XcellentPlus</div>
            <div className="home-comp1-typography2">Place An Order And Let Us Manage Your Excellent Technical Wordflow</div>
          </div>

          <div className="home-comp1-innerText">
            <div className="home-comp1-typography1">XcellentPlus</div>
            <div className="home-comp1-typography2">Place An Order And Let Us Manage Your Excellent Technical Wordflow</div>
          </div>
        </ReactCardFlip>

        <Lottie options={LeftSideAnimation} />
      </div>

      <Services />
    </div>
  )
}

export default Home

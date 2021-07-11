import React from 'react';
import Lottie from 'react-lottie';
import GraphicDesign from '../../../assets/lottie/service-tab-graphicdesign.json'
import WebDesign from '../../../assets/lottie/service-tab-webdesign.json'
import AppDevelopment from '../../../assets/lottie/service-tab-appdevelopment.json'
import WebDevelopment from '../../../assets/lottie/service-tab-webdevelopment.json'
import SEO from '../../../assets/lottie/service-tab-seo.json'
import DigitalMarketing from '../../../assets/lottie/service-tab-digitalmarketing.json'
import SoftwareSolution from '../../../assets/lottie/service-tab-softwaresolution.json'
import ContentWriting from '../../../assets/lottie/service-tab-contentwriting.json'
import Ecommerce from '../../../assets/lottie/service-tab-ecommerce.json'
import DevOps from '../../../assets/lottie/service-tab-devops.json'

function serviceInnerPage(props) {
    const { service } = props

    const graphicOptions = {
        loop: true,
        autoplay: true, 
        animationData: GraphicDesign,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
 
    const webDesignOptions = {
        loop: true,
        autoplay: true, 
        animationData: WebDesign,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
 
    const appDevelopmentOptions = {
        loop: true,
        autoplay: true, 
        animationData: AppDevelopment,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
 
    const webDevelopmentOptions = {
        loop: true,
        autoplay: true, 
        animationData: WebDevelopment,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
 
    const SEOOption = {
        loop: true,
        autoplay: true, 
        animationData: SEO,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
 
    const DigitalMarketingOption = {
        loop: true,
        autoplay: true, 
        animationData: DigitalMarketing,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
 
    const SoftwareSolutionOption = {
        loop: true,
        autoplay: true, 
        animationData: SoftwareSolution,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
 
    const ContentWritingOption = {
        loop: true,
        autoplay: true, 
        animationData: ContentWriting,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
 
    const EcommerceAppOption = {
        loop: true,
        autoplay: true, 
        animationData: Ecommerce,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
 
    const DevOpsOption = {
        loop: true,
        autoplay: true, 
        animationData: DevOps,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
 
    switch (service) {
        case 'graphic-design':

            return (
                <div className="graphic-innerpage">
                    <div className="graphic-innerpage-header">
                        <Lottie options={graphicOptions} />
                    </div>
                </div>
            )

        case 'web-design':

            return (
                <div className="webdesign-innerpage">
                    <div className="graphic-innerpage-header">
                        <Lottie options={webDesignOptions} />
                        <h1 className="service-tab-header">Web Designing</h1>
                    </div>
                </div>
            )

        case 'app-development':

            return (
                <div className="webdesign-innerpage">
                    <div className="graphic-innerpage-header">
                        <Lottie options={appDevelopmentOptions} />
                    </div>
                </div>
            )

        case 'web-development':

            return (
                <div className="webdesign-innerpage">
                    <div className="graphic-innerpage-header">
                        <Lottie options={webDevelopmentOptions} />
                        <h1 className="service-tab-header">Web Development</h1>
                    </div>
                </div>
            )

        case 'seo':

            return (
                <div>
                    <div className="graphic-innerpage-header">
                        <Lottie options={SEOOption} />
                        <h1 className="service-tab-header">Search Engine Optimization</h1>
                    </div>
                </div>
            )

        case 'digital-marketing':

            return (
                <div className="webdesign-innerpage">
                    <div className="graphic-innerpage-header">
                        <Lottie options={DigitalMarketingOption} />
                        <h1 className="service-tab-header">Digital Marketing</h1>
                    </div>
                </div>
            )

        case 'software-solution':

            return (
                <div className="webdesign-innerpage">
                    <div className="graphic-innerpage-header">
                        <Lottie options={SoftwareSolutionOption} />
                        <h1 className="service-tab-header">Software Solution</h1>
                    </div>
                </div>
            )

        case 'content-writing':

            return (
                <div className="webdesign-innerpage">
                    <div className="graphic-innerpage-header">
                        <Lottie options={ContentWritingOption} />
                        <h1 className="service-tab-header">Content Writing</h1>
                    </div>
                </div>
            )

        case 'ecommerce-app':

            return (
                <div className="webdesign-innerpage">
                    <div className="graphic-innerpage-header">
                        <Lottie options={EcommerceAppOption} />
                        <h1 className="service-tab-header1">Ecommerce Application</h1>
                    </div>
                </div>
            )

        case 'devops':

            return (
                <div className="webdesign-innerpage">
                    <div className="graphic-innerpage-header">
                        <Lottie options={DevOpsOption} />
                        <h1 className="service-tab-header">DevOps</h1>
                    </div>
                </div>
            )

    }

}

export default serviceInnerPage

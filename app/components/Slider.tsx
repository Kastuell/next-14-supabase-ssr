'use client'

import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export default class Slider extends Component {
    render(){
        return (
            // <div className="p-2">
            //   <div className="relative max-w-3xl my-0 mx-auto">
            //     <div className="flex aspect-video overflow-x-hidden snap-mandatory scroll-smooth shadow-[0_6px_12px_-3px_rgba(0,0,0,0.3)] rounded-lg">
            //       <img className="flex-10100 snap-start object-cover" id="slide-1" src='https://www.grayreed.com/Practices/.../portalresource/lookup/poid/Z1tOl9NPlK4UmLcSfLcRZLMGoLMOVbMRXTMPpfZCpC3%21/photoWeb.name%3D/iStock-478255432.jpg'  />
            //       <img className="flex-10100 snap-start object-cover" id="slide-2" src='https://медуниверситет.рф/upload/iblock/2c9/m3gma8pjrgp9ydufisqi2osts781obwl.jpg' />
            //       <img className="flex-10100 snap-start object-cover" id="slide-3" src="https://ic.pics.livejournal.com/konstolkh2016/78629009/433223/433223_original.jpg"  />
            //     </div>
            //     <div className="flex gap-1 absolute bottom-[6px] left-[50%] translate-x-[-50%] z-[1]">
            //       <a className=" w-2 h-2 rounded-full bg-black opacity-75 transition-opacity ease-in-out delay-[350] hover:opacity-100" href="#slide-1"></a>
            //       <a className=" w-2 h-2 rounded-full bg-black opacity-75 transition-opacity ease-in-out delay-[350] hover:opacity-100" href="#slide-2"></a>
            //       <a className=" w-2 h-2 rounded-full bg-black opacity-75 transition-opacity ease-in-out delay-[350] hover:opacity-100" href="#slide-3"></a>
            //     </div>
            //   </div>
            // </div>
    
            <div className="flex justify-center items-center ">
                <Carousel stopOnHover={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} className="overflow-hidden aspect-video overflow-x-hidden snap-mandatory scroll-smooth shadow-[0_6px_12px_-3px_rgba(0,0,0,0.3)]">
                    <img className="flex-10100 snap-start object-cover rounded-lg" src="https://www.grayreed.com/Practices/.../portalresource/lookup/poid/Z1tOl9NPlK4UmLcSfLcRZLMGoLMOVbMRXTMPpfZCpC3%21/photoWeb.name%3D/iStock-478255432.jpg" />
                    <img className="flex-10100 snap-start object-cover rounded-lg" src="https://медуниверситет.рф/upload/iblock/2c9/m3gma8pjrgp9ydufisqi2osts781obwl.jpg" />
                    <img className="flex-10100 snap-start object-cover rounded-lg" src="https://ic.pics.livejournal.com/konstolkh2016/78629009/433223/433223_original.jpg" />
                </Carousel>
            </div>
        )
    }
}

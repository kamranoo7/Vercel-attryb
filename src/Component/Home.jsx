import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2 style={{textAlign:'center',fontSize:"20px",marginTop:"20px"}}>Welcome To Buy car</h2>
        <Slider {...settings}>
         <div>
          <img style={{width:"90%",height:"500px",padding:"10px",margin:"auto"}} src="https://images10.gaadi.com/usedcar_image/original/usedcar_10583512798_b10fe00858204bd3bc0d2ec988acdac0_exterior_1_2807576_1688376318.jpg?imwidth=640" alt="" />
         </div>
         <div>
          <img style={{width:"90%",height:"500px",padding:"10px",margin:"auto"}} src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/S-Presso/10348/Maruti-S-Presso-LXi/1687519307943/front-left-side-47.jpg?tr=w-456" alt="" />
         </div>
         <div>
          <img style={{width:"90%",height:"500px",padding:"10px",margin:"auto"}} src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9977/1683047876204/front-left-side-47.jpg?tr=w-456" alt="" />
         </div>
         <div>
          <img style={{width:"90%",height:"500px",padding:"10px",margin:"auto"}} src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/8076/1601635839903/front-left-side-47.jpg?tr=w-456" alt="" />
         </div>
         <div>
          <img style={{width:"90%",height:"500px",padding:"10px",margin:"auto"}} src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Exter/9482/1684926596004/front-left-side-47.jpg?tr=w-456" alt="" />
         </div>
        </Slider>
        <img src="https://i.imgur.com/flEIlsb.png" alt="" />
        <img src="https://i.imgur.com/TLdI5Tz.png" alt="" />
        <img src="https://i.imgur.com/LS8JUiZ.png" alt="" />
        <img src="https://i.imgur.com/siHBUmg.png" alt="" />
      </div>
    );
  }
}

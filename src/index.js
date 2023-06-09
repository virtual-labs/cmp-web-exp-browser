import React, { useEffect, useState } from "react";
import './index.css'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
export function Bulma_component(props) {
    const [data,setdata] = useState( {
      exp_name: 'Experiment Name',
      exp_link: 'https://google.com',
      institute: 'institute',
      exp_img: '',
      institute_img: '',
      card_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.',
      rating: '4.5',
      modal_content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.',
      // modal_img:'',
      tags:["tag1 ","tag2","tag3"],
      domain:'Domain',
      lab:'Lab',
      saved:false
      });
      const [saved,setsaved] = useState(false)
    const [flag,setflag] = useState(false)
    useEffect(()=>{
        setdata(props?.UserData);
        setflag(true);
        setsaved(props?.UserData?.saved);
    },[])
    const call_backfunc = () =>{
      props?.onValueChange(!saved);
      setsaved(!saved);
    }
    const call_back_link = () =>{
      props?.onclickinglink(data?.exp_link)
    }
  return (
    flag?(
      <>
    <div class="card column mx-5 my-5 has-background-white has-text-black p-2" style={{minWidth:"280px"}}>
          <div class="card-image ">
              <figure class="image is-4by3">
              {data?.exp_img === "" || data?.exp_img === undefined?(
                      <img style={{borderBottomRightRadius:"50%",boxShadow:"1px 1px 5px 1px black "}} src="https://bulma.io/images/placeholders/1280x960.png"/>):(<img style={{borderBottomRightRadius:"50%",boxShadow:"1px 1px 5px 1px black "}}  src={data?.exp_img} />)}
                      </figure>
          </div>
          <div class="card-content px-0 pb-0">
            <div >
            <span class=" is-pulled-right icon-text tag is-primary is-light is-medium pr-2 is-rounded" style={{marginTop:"-35px"}}>
              <span class="icon has-text-primary">
                <i class="fa-solid fa-lg fa-star"></i>
              </span>
              <span> {data?.rating}</span>
            </span>
            </div>
              <div class="media mb-1">
                  <div class="media-left my-auto">
                      <figure class="image is-48x48 ">
                        <div className="container">
                          {data?.institute_img === "" || data?.institute_img === undefined?(
                            <img src="https://bulma.io/images/placeholders/96x96.png"/>):(<img  src={data?.institute_img} />)}
                          <div className="overlay "><p>{data?.institute}</p></div>
                        </div>
                      </figure>
                  </div>
                  <div class="media-content">
                    <div className="text_hover">
                      <p  class="title is-4 has-text-primary is-underlined is-clickable text mb-0 " onClick={()=>{call_back_link(data?.exp_link)}}>{data?.exp_name}</p>
                      <div className="tooltip">{data?.exp_name}</div>
                    </div>
                    <div className="text_hover_domain">
                      <p  class=" has-text-primary text_domain" >{data?.domain}</p>
                      <div className="tooltip_domain">{data?.domain}</div>
                    </div>
                  </div>
              </div> 

              <div class="content mb-2 text_hover_content">
                <p className="text_content">{data?.card_content}</p>
                <div className="tooltip_content">{data?.card_content}</div>
              </div>
          </div>
              <footer class="card-footer">
                   {saved === true ? (
                    <button className="card-footer-item button is-primary is-light" style={{border:"green solid 3px"}} onClick={()=>{call_backfunc()}}>
                      <span class="icon-text">
                        <span class="icon has-text-primary">
                          <i class="fa-solid fa-lg fa-heart"></i>
                        </span>
                        <p className=" is-underlined has-text-weight-bold"> Added to Favourites</p>
                      </span>
                    </button>
                  ):(
                    <button className="card-footer-item  button is-primary is-light" style={{border:"green solid 2px"}} onClick={()=>{call_backfunc()}}>
                    <span class="icon-text">
                      <span class="icon has-text-primary">
                        <i class="fa-regular fa-lg fa-heart"></i>
                      </span>
                      <span className="is-underlined has-text-weight-medium"> Add to Favourites</span>
                    </span>
                  </button>
                    )}
              </footer>
      </div>
        </>):(<>Loading</>)
  );
}
export function People_Card(){
  return(
    <div className="outer_card mx-5 has-background-white" >
        <div className="lines is-clipped"></div>
        <div className="height"></div>
        <div className="imgbx has-background-white">
          <img src="https://picsum.photos/96/96"></img>
          <div className="is-flex is-flex-direction-column wrapper">
            <div className="data has-text-centered">
              <p className="is-size-3 has-text-weight-semibold has-text-black">Yatharth Gupta</p>
              <span className="is-size-4 has-text-weight-medium has-text-black">Developer</span>
              <p className="px-1 mt-1 has-text-black has-text-black">Lorem jgbllbj rgngejO wough owugh owg hwighoGh ig hiwuhisgu high ig hiugh iguh ig gkenaleknlagbagb jabg kjen</p>
            </div>
            <div class="card-footer mt-auto ">
              <span class="icon-text card-footer-item">
                <span class="icon has-text-danger">
                  <i class="fas fa-lg fa-star"></i>
                </span>
                <span className="has-text-black"> 4.5/5</span>
              </span>
              <span class="card-footer-item is-size-5">
                <span class="icon has-text-danger">
                  <i class="fa-solid fa-lg fa-envelope"></i>
                </span>
              </span>
              <span class="card-footer-item is-size-5">
                <span class="icon has-text-danger">
                <i class="fa-brands fa-lg fa-linkedin"></i>
              </span>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}

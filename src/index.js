import React, { useEffect, useState } from "react";
import './index.css'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
export default function Exp_Card(props) {
  const [data,setdata] = useState( {
    exp_name: 'Experiment Name',
    exp_link: 'https://google.com',
    collage: 'Collage',
    exp_img: '',
    collage_img: '',
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
    function open_modal(){
        const get_modal = document.getElementById(data?.exp_name);
        get_modal.classList.add("is-active");
      }
      function close_modal(){
        const get_modal = document.getElementById(data?.exp_name);
        get_modal.classList.remove("is-active");
      }
  return (
    flag?(
      <>
      <div class="card column mx-5 my-5 has-background-white has-text-black">
          <div class="card-image ">
              <figure class="image is-4by3">
              {data?.exp_img === "" || data?.exp_img === undefined?(
                      <img style={{borderBottomRightRadius:"50%"}} src="https://bulma.io/images/placeholders/1280x960.png"/>):(<img style={{borderBottomRightRadius:"50%"}}  src={data?.exp_img} />)}
              </figure>
          </div>
          <div class="card-content px-0 pb-0">
              <div className="saved">
                  {saved === true ? (
                    <span class=" is-pulled-right icon-text" style={{marginTop:"-30px",position:"relative"}} onClick={()=>{call_backfunc()}}>
                      <span class="icon has-text-primary">
                        <i class="fa-solid fa-lg fa-star"></i>
                      </span>
                      <span className=" is-size-6 has-text-primary is-underlined"> Saved</span>
                    </span>
                  ):(<span class=" is-pulled-right icon has-text-primary" style={{marginTop:"-30px",position:"relative"}} onClick={()=>{call_backfunc()}}>
                      <i class="fa-regular fa-lg fa-star"></i>
                    </span>
                    )}
              </div>
              <div class="media">
                  <div class="media-left">
                      <figure class="image is-48x48">
                      {data?.collage_img === "" || data?.collage_img === undefined?(
                      <img src="https://bulma.io/images/placeholders/96x96.png"/>):(<img  src={data?.collage_img} />)}
                      </figure>
                  </div>
                  <div class="media-content has-text-black">
                    <span className="">
                    <p class="title is-4 has-text-primary is-underlined is-clickable" onClick={()=>{call_back_link(data?.exp_link)}}>{data?.exp_name }</p>
                      <p class="subtitle is-6 has-text-black">{data?.collage}</p>
                    </span>
                  </div>
              </div>

              <div class="content">
              {data?.card_content}
              </div>
              <footer class="card-footer">
                    <span class="icon-text card-footer-item is-size-5">
                      <span class="icon has-text-danger">
                        <i class="fa-solid fa-lg fa-thumbs-up"></i>
                      </span>
                      <span> {data?.rating}/5</span>
                    </span>
                    <button class="js-modal-trigger card-footer-item button is-primary" data-target="modal-js-example" onClick={()=>{open_modal()}}>
                      Learn More
                    </button>
              </footer>
          </div>
      </div>
      <div id={data?.exp_name} class="modal is-small">
    <div class="modal-background"></div>

      <div class="modal-card has-text-black">
        <header class="modal-card-head has-background-white py-2">
        <p class="title is-4 has-text-primary is-underlined is-clickable" onClick={()=>{call_back_link(data?.exp_link)}}>{data?.exp_name }</p>
          <button class="delete is-large has-background-primary ml-auto" onClick={()=>{close_modal()}}></button>
        </header>
        <section class="modal-card-body">
        <p className="has-text-weight-medium is-size-5">{data?.domain}</p>
        <hr className="my-2 has-background-black"/>
        <p className="has-text-weight-medium is-size-6">{data?.lab}</p>
        <ul className="pl-5" style={{height:"72px",overflowY:"scroll",listStyleType:"disc"}}>

        {data?.tags?.map((elem,i)=>{
          return(
            <li>
            <span >{elem}</span>
            </li>
            )
          })}
          </ul>
        </section>
        <footer class="modal-card-foot has-background-white">
          {data?.modal_content}
        </footer>
      </div>
    </div>
        </>):(<>Loading</>)
  );
}
import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
export default function Exp_Card(props) {
    const [data,setdata] = useState( {
        exp_name: 'Experiment Name',
        collage: 'Collage',
        exp_img: '',
        collage_img: '',
        card_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.',
        rating: '4.5',
        modal_content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.',
        modal_img:'',
        tags:["tag1 ","tag2","tag3"],
        domain:'Domain',
        lab:'Lab',
      });
    const [flag,setflag] = useState(false)
    useEffect(()=>{
        setdata(props?.UserData);
        setflag(true);
    },[])
    function open_modal(){
        const get_modal = document.getElementById("modal-js-example");
        get_modal.classList.add("is-active");
      }
      function close_modal(){
        const get_modal = document.getElementById("modal-js-example");
        get_modal.classList.remove("is-active");
      }
  return (
    flag?(
        <>
        <div class="card column mx-5 my-5 has-background-white has-text-black">
            <div class="card-image ">
                <figure class="image is-4by3">
                {data?.exp_img === "" || data?.exp_img === undefined?(
                        <img src="https://bulma.io/images/placeholders/1280x960.png"/>):(<img  src={data?.exp_img} />)}
                </figure>
            </div>
            <div class="card-content px-0 ">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        {data?.collage_img === "" || data?.collage_img === undefined?(
                        <img src="https://bulma.io/images/placeholders/96x96.png"/>):(<img  src={data?.collage_img} />)}
                        </figure>
                    </div>
                    <div class="media-content has-text-black">
                        {console.log(data?.exp_name)}
                        <p class="title is-4 has-text-black">{data?.exp_name}</p>
                        <p class="subtitle is-6 has-text-black">{data?.collage}</p>
                    </div>
                </div>

                <div class="content">
                {data?.card_content}
                </div>
                <footer class="card-footer">
                      <span class="icon-text card-footer-item is-size-5">
                        <span class="icon has-text-danger">
                          <i class="fas fa-lg fa-star"></i>
                        </span>
                        <span> {data?.rating}/5</span>
                      </span>
                      <button class="js-modal-trigger card-footer-item button is-info" data-target="modal-js-example" onClick={()=>{open_modal()}}>
                        Learn More
                      </button>
                </footer>
            </div>
        </div>
        <div id="modal-js-example" class="modal is-small">
      <div class="modal-background"></div>

        <div class="modal-card has-text-black">
          <header class="modal-card-head has-background-white py-2">
            <p class="modal-card-title has-text-black"><b>{data?.exp_name}</b></p>
            <button class="delete is-large has-background-info ml-auto" onClick={()=>{close_modal()}}></button>
          </header>
          <section class="modal-card-body">
          {data?.modal_img === "" || data?.modal_img === undefined?(<img src="https://bulma.io/images/placeholders/960x400.png"/>):(<img  src={data?.modal_img} />)}
          <hr className="my-2 has-background-black"/>
          <p className="has-text-weight-medium is-size-5">{data?.domain}</p>
          <p className="has-text-weight-medium is-size-6">{data?.lab}</p>
          <ul className="pl-5" style={{height:"72px",overflowY:"scroll",listStyleType:"disc"}}>

          {data.tags.map((elem,i)=>{
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
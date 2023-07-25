import React, { useEffect, useState } from "react";
import "./index.css";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
export function ExpComponent(props) {
  const [data, setdata] = useState({
    exp_name: "Experiment Name",
    exp_link: "https://google.com",
    institute: "institute",
    exp_img: "",
    institute_img: "",
    card_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
    rating: "4.5",
    domain: "Domain",
    saved: false,
  });
  const [saved, setsaved] = useState(false);
  const [flag, setflag] = useState(false);
  useEffect(() => {
    setdata(props?.UserData);
    setflag(true);
    setsaved(props?.UserData?.saved);
  }, []);
  const call_backfunc = () => {
    props?.onValueChange(!saved);
    setsaved(!saved);
  };
  const call_back_link = () => {
    props?.onclickinglink(data?.exp_link);
  };
  return (
    <div class="card has-background-white has-text-black p-2">
      <div class="card-image ">
        <figure class="image is-4by3">
          {data?.exp_img === "" || data?.exp_img === undefined ? (
            <img
              style={{
                borderBottomRightRadius: "50%",
                boxShadow: "1px 1px 5px 1px black ",
              }}
              src="https://bulma.io/images/placeholders/1280x960.png"
            />
          ) : (
            <img
              style={{
                borderBottomRightRadius: "50%",
                boxShadow: "1px 1px 5px 1px black ",
              }}
              src={data?.exp_img}
            />
          )}
        </figure>
      </div>
      <div class="card-content px-0 pb-0">
        <div>
          {data.rating !== 0 ? (
            <span
              class=" is-pulled-right icon-text tag is-primary is-light is-medium pr-2 is-rounded"
              style={{ marginTop: "-35px" }}
            >
              <span class="icon has-text-primary">
                <i class="fa-solid fa-lg fa-star"></i>
              </span>
              <span> {data?.rating}</span>
            </span>
          ) : null}
        </div>
        <div class="media mb-1">
          <div class="media-left mr-2" style={{ marginTop: "6px" }}>
            <figure class="image is-48x48 ">
              <div className="container">
                {data?.institute_img === "" ||
                data?.institute_img === undefined ? (
                  <img src="https://bulma.io/images/placeholders/96x96.png" />
                ) : (
                  <img src={data?.institute_img} />
                )}
                <div className="overlay ">
                  <p>{data?.institute}</p>
                </div>
              </div>
            </figure>
          </div>
          <div class="media-content">
            <div className="text_hover">
              <p
                class="title is-4 has-text-primary is-underlined is-clickable text mb-0 "
                onClick={() => {
                  call_back_link();
                }}
              >
                {data?.exp_name}
              </p>
              <div className="tooltip">{data?.exp_name}</div>
            </div>
            <div className="text_hover_domain">
              <p class=" has-text-primary text_domain">{data?.domain}</p>
              <div className="tooltip_domain">{data?.domain}</div>
            </div>
          </div>
        </div>

        <div class="content text_hover_content">
          <p className="text_content">{data?.card_content}</p>
          <div className="tooltip_content">{data?.card_content}</div>
        </div>
      </div>
      <footer class="card-footer">
        {saved === true ? (
          <button
            className="card-footer-item button is-primary is-light p-0"
            style={{ border: "3px solid green" }}
            onClick={() => {
              call_backfunc();
            }}
          >
            <span class="icon-text ml-1">
              <span class="icon has-text-primary mr-0">
                <i class="fa-solid fa-lg fa-heart"></i>
              </span>
              <p className="is-size-6 is-size-7-mobile is-size-7-tablet is-underlined has-text-weight-medium">
                {" "}
                Added to Favourites
              </p>
            </span>
          </button>
        ) : (
          <button
            className="card-footer-item  button is-primary is-light"
            style={{ border: "3px solid green" }}
            onClick={() => {
              call_backfunc();
            }}
          >
            <span class="icon-text">
              <span class="icon has-text-primary">
                <i class="fa-regular fa-lg fa-heart"></i>
              </span>
              <span className="is-size-6 is-size-7-mobile is-size-7-tablet is-underlined has-text-weight-medium">
                {" "}
                Add to Favourites
              </span>
            </span>
          </button>
        )}
      </footer>
    </div>
  );
}
export function PeopleCard(props) {
  const [data, setdata] = useState({
    present: true,
    display_name: "First Last",
    full_name: "first Middlename last",
    curr_position: "Employee",
    last_working_year: "present",
    about_me:
      "Lorem ipsum sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris. ",
    institute: "IIIT-H",
    profile_img: "https://picsum.photos/96/96",
    impact_score: "4.5",
    linkedin: "https://www.linkedin.com/",
    email: "example@gamil.com",
    associations: [
      {
        name: "DASS",
        joining: "Jan-23",
        leaving: "Apr-23",
        projects: [
          {
            link: "https://github.com/",
            title: "title",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          },
          {
            link: "https://github.com/",
            title: "title1",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
        ],
      },
      {
        name: "Summer Intern",
        joining: "May-23",
        leaving: "present",
        projects: [
          {
            link: "null11",
            title: "title11",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
          {
            link: "null12",
            title: "title12",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
        ],
      },
      {
        name: "RA",
        joining: "May-23",
        leaving: "present",
        projects: [
          {
            link: "null11",
            title: "title11",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
          {
            link: "null12",
            title: "title12",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
        ],
      },
      {
        name: "RA",
        joining: "May-23",
        leaving: "present",
        projects: [
          {
            link: "null11",
            title: "title11",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
          {
            link: "",
            title: "title12",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
        ],
      },
      {
        name: "RA",
        joining: "May-23",
        leaving: "present",
        projects: [
          {
            link: "null11",
            title: "title11",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
          {
            link: "null12",
            title: "title12",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
        ],
      },
      {
        name: "RA",
        joining: "May-23",
        leaving: "present",
        projects: [
          {
            link: "null11",
            title: "title11",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
          {
            link: "null12",
            title: "title12",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
        ],
      },
      {
        name: "RA",
        joining: "May-23",
        leaving: "present",
        projects: [
          {
            link: "null11",
            title: "title11",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
          {
            link: "null12",
            title: "title12",
            contribution:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
          },
        ],
      },
    ],
  });
  useEffect(() => {
    setdata(props?.UserData);
  }, []);
  function openModal() {
    const modal = document.getElementById(data?.email + data?.about_me);
    modal.classList.add("is-active");
  }
  function closeModal() {
    const modal = document.getElementById(data?.email + data?.about_me);
    modal.classList.remove("is-active");
  }
  const getClass = () => {
    if (data?.present === true) {
      return "present";
    } else {
      return "past";
    }
  };
  const additionalClassNames = "is-clipped";
  return (
    <>
      <div className="outer_card mx-5 has-background-white">
        <div className={`${getClass()} ${additionalClassNames}`}></div>
        <div className="height"></div>
        <div className="imgbx has-background-white">
          <img src={data?.profile_img}></img>
          <div className="is-flex is-flex-direction-column wrapper">
            <div className="has-text-centered">
              <div class="display_name_hover">
                <p class="is-size-3 has-text-weight-semibold has-text-black display_name_text">
                  {data?.display_name}
                </p>
                <p class="display_name_tooltip">{data?.display_name}</p>
              </div>
              <span class="has-text-black subtitle is-size-5 ">
                {data?.curr_position}
              </span>
              <div class="abt_me_hover">
                <p class="px-1 has-text-black has-text-black abt_me_text">
                  {data?.about_me}
                </p>
                <p class="abt_me_tooltip">{data?.about_me}</p>
              </div>
            </div>
            <div class="card-footer mt-auto ">
              <button
                class="card-footer-item button is-primary m-1 p-0 is-2"
                onClick={() => {
                  openModal();
                }}
              >
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id={data?.email + data?.about_me}>
        <div
          class="modal-background"
          onClick={() => {
            closeModal();
          }}
        ></div>
        <div
          class="modal-content has-text-centered has-background-white"
          style={{ height: "30rem", width: "100%", maxWidth: "50rem" }}
        >
          <div class="columns m-auto" style={{ height: "100%" }}>
            <button
              class="modal-close is-large has-background-primary"
              aria-label="close"
              onClick={() => {
                closeModal();
              }}
            ></button>
            <div class="column is-two-fifths px-0 has-background-primary is-flex is-justify-content-center is-flex-direction-column">
              <header>
                <img src={data?.profile_img} style={{ borderRadius: "50%" }} />
              </header>
              <section>
                <div class="name_hover">
                  <p class="title name my-0">{data?.full_name}</p>
                  <p class="tooltip_name">{data?.full_name}</p>
                </div>
                <p class="subtitle my-0 mx-4">{data?.curr_position}</p>
                <p class=" my-0">{data?.institute}</p>
              </section>
              <footer class="columns is-mobile is-vcentered mt-3">
                {data?.associations.some(
                  (association) => association.name.toLowerCase() === "emplyoee"
                ) || data?.curr_position.toLowerCase() === "employee" ? (
                  <span class="icon-text column">
                    <span class="icon has-text-danger">
                      <i class="fas fa-2x fa-star"></i>
                    </span>
                    <span className="has-text-black is-size-4"> {data.impact_score}</span>
                  </span>
                ) : null}
                <span class="column">
                  <span class="icon has-text-danger mail_container">
                    <div class="mail">
                      <i class="fa-solid fa-2x fa-envelope "></i>
                      <div class="mail-content">{data?.email}</div>
                    </div>
                  </span>
                </span>
                <span class=" column ">
                  <span class="icon has-text-danger">
                    <a
                      target="_blank"
                      class="is-clickable has-text-danger"
                      href={data?.linkedin}
                    >
                      <i class="fa-brands fa-2x fa-linkedin"></i>
                    </a>
                  </span>
                </span>
              </footer>
            </div>
            <div class="column pl-4 project-content">
              <p class="is-size-4 has-text-weight-medium is-underlined tag is-light is-primary">
                Contributions
              </p>
              <section class="content">
                <ul class="has-text-left ml-2 my-0">
                  {data.associations.map((item, i) => {
                    return (
                      <>
                        <li class="is-size-5 has-text-weight-medium is-vcentered">
                          <span class="has-text-left mx-auto">{item.name}</span>
                          <span class="is-pulled-right is-size-6 ">
                            {item?.joining} - {item?.leaving}
                          </span>
                        </li>
                        <ul class="has-text-left ml-3 my-0">
                          {item.projects.map((project) => {
                            return (
                              <li class="is-size-6">
                                <b>{project.title}</b> - {project.contribution}
                                {
                                  project.link !== "" ? (
                                <a target="_blank" href={project.link}>
                                  | LINK
                                </a>):(null)
                                }
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    );
                  })}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

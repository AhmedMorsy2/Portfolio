import React, { useEffect } from "react";
import bookmark from "../assets/bookmark.jpg";
import yummy from "../assets/yummy.jpg";
import ecommerce from "../assets/e-commerce.jpg";
import weatherApp from "../assets/weatherApp.jpg";
import freegames from "../assets/Freegmaes.jpg";
import saraha from "../assets/sarahaClone.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Projects() {
  let frontendProj = [
    {
      id: 1,
      title: "E-commerce App",
      description: `e-commerce app with seamless integration with Route Academy e-commerce API. Using React.js and React Router, 
      I created an intuitive UI for easy navigation. Implemented secure user authentication for personalized experiences,  
      including individual shopping carts and wishlists`,
      link: "https://ahmedmorsy2.github.io/e_commerce/",
      cover: ecommerce,
    },
    {
      id: 2,
      title: "Yummy",
      description: `Meal app that shows you meals according to their categories, and areas or by searching using mealDB API, shows you the Ingredients of a meal and lets you go to YouTube to see a live video of that meal being cooked`,
      link: "https://ahmedmorsy2.github.io/Yummy_project/",
      cover: yummy,
    },
    {
      id: 3,
      title: "Weather App",
      description: `Weather app that shows current-day weather, 
      two days after, andthe map of your current location using weather API to get accurateweather conditions, 
      geolocation function to get the user location,and Google map iframe to show location on a visible map for you`,
      link: "https://ahmedmorsy2.github.io/Weather_App/",
      cover: weatherApp,
    },
    {
      id: 4,
      title: "Free Games",
      description: `Free Games is an application that displays a collection of free PC games available on 
      platforms such as Steam, Epic Games, and other websites, 
      along with relevant download links. Additionally, 
      it provides information on browser-based computer games that you can play live in your web browser`,
      link: " https://ahmedmorsy2.github.io/FreeGames/",
      cover: freegames,
    },
    {
      id: 5,
      title: "Book Mark",
      description: `Bookmark app that allows users to save any links for websites that are important to them, 
      you can view saved websites any time using the CRUD concept`,
      link: " https://ahmedmorsy2.github.io/Bookmarks_Using_CRUD/",
      cover: bookmark,
    },
    {
      id: 6,
      title: "Saraha App Clone",
      description: `A Sarah App Clone replicates the original Sarah app, a platform where users can send and receive anonymous messages. Building this copy using the MVC design pattern makes it easier to manage and organize the project `,
      link: " https://github.com/AhmedMorsy2/sarahaAppClone",
      cover: saraha,
    },
  ];
  let backendProj = [
    {
      id: 6,
      title: "E-commerce Node.js",
      description: `An e-commerce database built with Node.js and MongoDB is designed to store and manage all the data needed for running an online store.`,
      link: "https://github.com/AhmedMorsy2/E-commerceApp_NodeJs",
      documentation:
        "https://documenter.getpostman.com/view/32813656/2sA3s3GBEc",
    },
    {
      id: 7,
      title: "Library-Management-System Node.js",
      description: `A library management system is a database that stores information about books, authors, pattrons, and Book rental `,
      link: "https://github.com/AhmedMorsy2/Library-Management-System",
      documentation:
        "https://documenter.getpostman.com/view/32813656/2sA3rwNEh8",
    },
    {
      id: 8,
      title: "Job Search App Node.js",
      description: `A comprehensive job search application built with Node.js, 
      designed to facilitate seamless interaction between companies and job seekers. 
      The app features dual functionality: enabling company HRs to post job openings and 
      allowing users to search for jobs and companies and apply for available positions efficiently.`,
      link: "https://github.com/AhmedMorsy2/Job_Search_App_NodeJs",
      documentation:
        "https://documenter.getpostman.com/view/32813656/2sA3e1BqDJ",
    },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="container" id="projects">
        <div className="title text-center mb-5" data-aos="zoom-in-right">
          <h1>My Projects</h1>
        </div>
        <div className="myProjects">
          <div className="row g-4 mb-4">
            {frontendProj.map((items) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6"
                    key={items.id}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div
                      className="card overflow-hidden"
                      style={{ height: "500px" }}
                    >
                      <div className="card-img" style={{ height: "200px" }}>
                        <img
                          src={items.cover}
                          alt="coverImage"
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">{items.title}</h4>
                        <p className="card-text"> {items.description} </p>
                      </div>
                      <div className="card-footer">
                        <a
                          href={items.link}
                          target="_blank"
                          className="btn linkBtn "
                          rel="noopener noreferrer"
                        >
                          Link
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {backendProj.map((item) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6"
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div
                      className="card overflow-hidden"
                      style={{ height: "360px" }}
                    >
                      <div className="card-body">
                        <h4 className="card-title pb-2">{item.title}</h4>
                        <p className="card-text"> {item.description} </p>
                      </div>
                      <div className="card-footer d-flex justify-content-between align-content-center">
                        <a
                          href={item.link}
                          target="_blank"
                          className="btn linkBtn "
                          rel="noopener noreferrer"
                        >
                          Link
                        </a>
                        <a
                          href={item.documentation}
                          target="_blank"
                          className="btn docsBtn"
                          rel="noopener noreferrer"
                        >
                          Docs
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

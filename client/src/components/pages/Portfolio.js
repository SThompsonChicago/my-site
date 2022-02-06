import React from 'react';
import Card from './Card'

const styles = {
  hov: {
    cursor: 'pointer',
  },
  vertspace: {
    marginTop:'25px',
  },
  space: {
    margin:"5px",
  },
  right: {
    float: "right",
  },
  noLineBlack: {
    textDecoration: "none",
    color: "black",
  },
  noLineWhite: {
  textDecoration: "none",
  color: "white",
  }
}

export default function Portfolio() {
    return (
<div className="card notification is-black is-size-6-mobile">

  <div className="card-content notification is-black">
    <p className="title is-4 is-size-6-mobile">
      My React.js Single-Page Apps
    </p>
  </div>






  <div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
<div className="box notification is-black">
          <div className="content">
            <p className="title is-black is-4 is-size-6-mobile has-text-centered">Macroeconomic Forecaster</p>
          </div>
          </div>

<div className="card notifcation is-black">
    <div className="card-image">
          <figure className="image is-4by3">
            <a href="https://sthompsonchicago.github.io/macro-disequilibrium/">
              <img src="https://sthompsonchicago.github.io/My_portfolio/assets/macrosimulation.png" alt="Simulation image"/>
            </a>
          </figure>
        </div>

        </div>
        <div  style={styles.vertspace} className="box">
          <div className="content">
            <p>This React.js app allows the user to choose inputs for a macroeconomic model, and then view an animation showing the results. The app solves the model using the Runge-Kutta method, and describes a disequilibrium framework in which users can understand the long-run dynamics with statistical calculations. It is based on work in an <a href='https://onlinelibrary.wiley.com/doi/10.1111/meca.12377'>academic article</a> I published. 
            </p>
            <ul>
              <li><a href="https://sthompsonchicago.github.io/macro-disequilibrium/">Link to deployed application.</a></li>
              <li><a href="https://github.com/SThompsonChicago/macro-disequilibrium">Link to GitHub repository.</a> </li>
              <li><a href="https://www.youtube.com/watch?v=fQPoRxZOOuA">Link to video demonstration.</a> </li>
            </ul>
            <br/>
          </div>

        </div>
    </article>
  </div>

  <div class="tile is-parent">
    <article class="tile is-child box">

    <div className="box notification is-black">
          <div className="content">
            <p className="title is-black is-4 is-size-6-mobile has-text-centered">Epidemic Simulator</p>
          </div>
          </div>
<div className="card notifcation is-black">
    <div className="card-image">
          <figure className="image is-4by3">
          <a href="https://sthompsonchicago.github.io/pandemic-simulator/">
              <img src="https://sthompsonchicago.github.io/My_portfolio/assets/simulation.png" alt="Simulation image"/>
            </a>
          </figure>
        </div>
</div>
        <div  style={styles.vertspace} className="box">
          <div className="content">
          <p>This is a React application that allows the user to view an animation describing a simulation of an epidemiological model. The user can input a variety of different parameters and see how the results change. The model shows how public policy can help control the spread of diseases, and is based on a <a href='https://www.aimsciences.org/article/doi/10.3934/eect.2013.2.173'>paper</a> I published in graduate school.
            </p>
            <ul>
              <li><a href="https://sthompsonchicago.github.io/pandemic-simulator/">Link to deployed application.</a></li>
              <li><a href="https://github.com/SThompsonChicago/pandemic-simulator">Link to GitHub repository.</a> </li>
              <li><a href="https://www.youtube.com/watch?v=zGMR58tAFeY">Link to video demonstration.</a> </li>
            </ul>
            <br/>
          </div>
        </div>
    </article>
  </div>
</div>




<div className="card-content notification is-black">
    <p className="title is-4 is-size-6-mobile">
      MERN Apps
    </p>
  </div>





<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">

    <div className="box notification is-black">
          <div className="content">
            <p className="title is-black is-4 is-size-6-mobile has-text-centered">MERN Blog</p>
          </div>
          </div>
<div className="card notifcation is-black">
    <div className="card-image">
    <figure className="image is-4by3">
    <a href="https://vast-mountain-43651.herokuapp.com/">
      <img src="https://sthompsonchicago.github.io/My_portfolio/assets/Mernblog.png" alt="Image of blog app"/>
    </a>
    </figure>
        </div>
</div>
        <div  style={styles.vertspace} className="box">
          <div className="content">
          <p>This is a simple blog that allows a user to create an account, write blog posts and view posts by others. It is a full-stack application which was created with the MERN stack.
            </p>
            <ul>
              <li><a href="https://vast-mountain-43651.herokuapp.com/">Link to deployed application.</a></li>
              <li><a href="https://github.com/SThompsonChicago/mern-blog">Link to GitHub repository.</a> </li>
            </ul>
            <br/>
          </div>
        </div>
    </article>
  </div>
  <div class="tile is-parent is-link">
    <article class="tile is-child box">
    <div className="box notification is-black">
          <div className="content">
            <p className="title is-black is-4 is-size-6-mobile has-text-centered">Shifty</p>
          </div>
          </div>
        <div className="card notifcation is-black">
        <div className="card-image">
          <figure className="image is-4by3">
          <a href="https://protected-bastion-67300.herokuapp.com/">
              <img src="https://sthompsonchicago.github.io/My_portfolio/assets/shifty.png" alt="Image of shifty app"/>
            </a>
          </figure>
        </div>
        </div>


        <div  style={styles.vertspace} className="box">
        <div className="content">
        <p>This is a MERN application created for service-industry professionals, especially bartenders. The application allows users to create accounts, view job postings and create posts for new jobs. This was a group project created with Git version control. My main contributions were in back-end development, using GraphQL and MongoDB. 
          </p>
          <ul>
            <li><a href="https://protected-bastion-67300.herokuapp.com/">Link to deployed application.</a></li>
            <li><a href="https://github.com/riveranelson99/shifty">Link to GitHub repository.</a> </li>
          </ul>
          <br/>
        </div>
      </div>

    </article>
  </div>
</div>



<div className="card-content notification is-black">
    <p className="title is-4 is-size-6-mobile">
      Apps with Relational Databases and Model-View-Controller Architecture
    </p>
  </div>



<div class="tile is-ancestor">
<div class="tile is-parent is-link">
    <article class="tile is-child box">
    <div className="box notification is-black">
          <div className="content">
            <p className="title is-black is-4 is-size-6-mobile has-text-centered">Book Talk</p>
          </div>
          </div>
        <div className="card notifcation is-black">
        <div className="card-image">
          <figure className="image is-4by3">
          <a href="https://book-club-chicago.herokuapp.com">
              <img src="https://sthompsonchicago.github.io/My_portfolio/assets/bookTalkPic.png" alt="Image of Book Talk app"/>
            </a>
          </figure>
        </div>
        </div>


        <div  style={styles.vertspace} className="box">
        <div className="content">
        <p>This is a full stack web application that allows users upload and share book 
                              reviews with friends online. 
                              The aim is to make reading a more interactive and social experience. This was a group project that I completed with Git version control. My main contribution was in creating the express routes and back-end structure, as well as helping to create front-end functionality using Handlebars.js.  
          </p>
          <ul>
            <li><a href="https://book-club-chicago.herokuapp.com">Link to deployed application.</a></li>
            <li><a href="https://github.com/SThompsonChicago/book-club">Link to GitHub repository.</a> </li>
          </ul>
          <br/>
        </div>
      </div>

    </article>
  </div>


  
  <div class="tile is-parent">
    <article class="tile is-child box">
    <div className="box notification is-black">
          <div className="content">
            <p className="title is-black is-4 is-size-6-mobile has-text-centered">Model-View-Controller Blog</p>
          </div>
          </div>
        <div className="card notifcation is-black">
        <div className="card-image">
          <figure className="image is-4by3">
            <a href="https://still-refuge-81895.herokuapp.com/">
              <img src="https://sthompsonchicago.github.io/My_portfolio/assets/appimage.png" alt="Image of blog app"/>
            </a>
          </figure>
        </div>
        </div>


        <div  style={styles.vertspace} className="box">
        <div className="content">
          <p>This is a full-stack web application created with the Model-View-Controller (MVC) architecture. It allows the user to create an account, write/edit/delete blog posts of their own, and also view posts by others. It was created using Express, Handlebars, MySQL, and Node.
          </p>
          <ul>
            <li><a href="https://still-refuge-81895.herokuapp.com/">Link to deployed application.</a></li>
            <li><a href="https://github.com/SThompsonChicago/tech-blog">Link to GitHub repository.</a> </li>
          </ul>
          <br/>
        </div>
      </div>

    </article>
  </div>
</div>






<div className="card-content notification is-black">
    <p className="title is-4 is-size-6-mobile">
      Python/Django apps
    </p>
  </div>



<div class="tile is-ancestor">
<div class="tile is-parent is-link">
    <article class="tile is-child box">
    <div className="box notification is-black">
          <div className="content">
            <p className="title is-black is-4 is-size-6-mobile has-text-centered">Python Simulation Space</p>
          </div>
          </div>
        <div className="card notifcation is-black">
        <div className="card-image">
          <figure className="image is-4by3">
          <a href="https://book-club-chicago.herokuapp.com">
              <img src="https://sthompsonchicago.github.io/My_portfolio/assets/singwithsims.png" alt="Image of Book Talk app"/>
            </a>
          </figure>
        </div>
        </div>


        <div  style={styles.vertspace} className="box">
        <div className="content">
        <p>This full-stack Python/Django application allows users to access a database containing simulations of different models. By clicking on a simulation, the user will be given options to choose parameter values, run the simulation, and then see the results. 
          </p>
          <ul>
            <li><a href="https://singwithsims.herokuapp.com">Link to deployed application.</a></li>
            <li><a href="https://github.com/SThompsonChicago/python-simulation-space">Link to GitHub repository.</a> </li>
          </ul>
          <br/>
        </div>
      </div>

    </article>
  </div>


  
  <div class="tile is-parent is-black">
    
  </div>
</div>








</div>

    );
}
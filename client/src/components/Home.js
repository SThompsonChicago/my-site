import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  hov: {
    cursor: 'pointer',
  },
  vertspace: {
    marginTop:'25px',
    marginBottom:'25px',
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

export default function Home() {
    return (
      <div style={styles.vertspace}>
      

        <div className="tile is-ancestor">
                <div className="tile is-parent">

                

    <Link className="tile is-child notification is-primary"
    to="/portfolio"
    style={styles.noLineWhite}
    >
      <div className="content is-size-6-mobile">

        <p className="title is-size-6-mobile">Portfolio</p>
        <p> Click to view web apps I've created (includes pictures, links to GitHub repositories and links to deployed applications).</p>

          <div className="content">
        </div>
      </div>
    </Link>

               </div> 

  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <Link className="tile is-child notification is-white is-size-6-mobile"
        to="/about"
        style={styles.noLineBlack}
        >
        <p className="title is-size-6-mobile">About</p>
        <p> Click to read a brief bio and overview of my skills.</p>
        </Link>

        <Link className="tile is-child notification is-link is-size-6-mobile"
        to="/contact"
        style={styles.noLineWhite}
        >
        <p className="title is-size-6-mobile">Contact</p>
        <p> Click to get in touch with me.</p>
        </Link>
      </div>
      <div className="tile is-parent">
        <Link className="tile is-child notification is-danger is-size-6-mobile"
        to="/resume"
        style={styles.noLineWhite}
        >
        <p className="title is-size-6-mobile">Resume</p>
        <p> Click to see my education, skills and work history.</p>
    
        </Link>
      </div>
    </div>
    <div className="tile is-parent">
      <Link className="tile is-child notification is-warning"
      to="/publications"
      style={styles.noLineBlack}
      >

        <p className="title is-size-7-mobile">Publications</p>
        <p> Click for links to my publications in scientific journals.</p>

        <div className="content">
          
        </div>
      </Link>
      
    </div>

    
    
  </div>

  
  
</div>

<div class="tile is-ancestor">
  <div class="tile is-12 is-vertical is-parent">
  <Link className="tile is-child notification is-white"
      to="/blog"
      style={styles.noLineBlack}
      >

        <p className="title is-size-7-mobile">Blog</p>
        <p> Click to see short posts about projects I've worked on.</p>

        <div className="content">
          
        </div>
      </Link>
  </div>
</div>

</div>

    );
}
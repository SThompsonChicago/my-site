import React from 'react';

const styles = {
  hov: {
    cursor: 'pointer',
  },
  space: {
    margin:"5px",
  },
  right: {
    float: "right",
  }
}

export default function Home({currentPage, handlePageChange }) {
    return (
      <div>
      <div>
        <section className="hero notification is-link is-size-6-mobile">
        <div className="hero-head">
    <header className="navbar" style={styles.right}>
    <a className="button is-black is-size-6-mobile"
    style={styles.space}
    href="#home"
    onClick={() => handlePageChange('Home')}
    >
      <span>Home</span>
    </a>
    <a className="button is-black is-size-6-mobile"
    style={styles.space}
    href="#portfolio"
    onClick={() => handlePageChange('Portfolio')}
    >
      <span>Portfolio</span>
    </a>
    <a className="button is-black is-size-6-mobile"
    style={styles.space}
    href="#contact"
    onClick={() => handlePageChange('Contact')}
    >
      <span>Contact</span>
    </a>
    </header>
  </div>
            <div className="hero-body">
                <article className="media">
                    <div className="media-left is-size-6-mobile">
                    <figure className="image is-64x64"
                    style={styles.hov}
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    >
        <img src="https://sthompsonchicago.github.io/My_portfolio/assets/Me.png" alt="Image" className="is-rounded"/>
      </figure>                
      </div>
      <div className="media-content">
                <p className="title is-size-6-mobile">
                    Stephen Thompson
                </p>
                <p className="subtitle is-size-7-mobile">
                    Web developer and mathematician
                </p>
</div>
                </article>
                </div>
        </section>
        </div>

<div className="card notification is-black" id="port">
        <div className="tile is-ancestor">
                <div className="tile is-parent">

                

    <article className="tile is-child notification is-primary"
    style={styles.hov}
    href="#portfolio"
    onClick={() => handlePageChange('Portfolio')
  }
    >
      <div className="content is-size-6-mobile">

        <p className="title is-size-6-mobile">Portfolio</p>
        <p> Click to view web apps I've created (includes pictures, links to GitHub repositories and links to deployed applications).</p>

          <div className="content">
        </div>
      </div>
    </article>

               </div> 

  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-warning is-size-6-mobile"
        style={styles.hov}
        href="#about"
        onClick={() => handlePageChange('About')}
        >
        <p className="title is-size-6-mobile">About</p>
        <p> Click to read a brief bio and overview of my skills.</p>
        </article>
        <article className="tile is-child notification is-link is-size-6-mobile"
        style={styles.hov}
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        >
        <p className="title is-size-6-mobile">Contact</p>
        <p> Click to get in touch with me.</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-danger is-size-6-mobile"
        style={styles.hov}
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        >
        <p className="title is-size-6-mobile">Resume</p>
        <p> Click to see my education, skills and work history.</p>
    
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-white"
      style={styles.hov}
                    href="#publications"
                    onClick={() => handlePageChange('Publications')}
      >

        <p className="title is-size-7-mobile">Publications</p>
        <p> Click for links to my publications in scientific journals.</p>

        <div className="content">
          
        </div>
      </article>
    </div>
  </div>
</div>
</div>
</div>
    );
}
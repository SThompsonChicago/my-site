import React from 'react';

const styles = {
  hov: {
    cursor: 'pointer',
  },
  right: {
    float: "right",
  },
  space: {
    margin:"5px",
  },
}

function Header({currentPage, handlePageChange }) {
    return (
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
            <div className="hero-body is-size-6-mobile">
                <article className="media">
                    <div className="media-left">
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
    );
}

export default Header;
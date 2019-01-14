import React from "react";
import "./Starwars.css";
import { TimelineLite } from "gsap";

class Starwars extends React.Component {
  constructor(props) {
    super(props);
    this.intro = React.createRef(); // shiny new React 16.3 ref API!
    this.content = React.createRef();
  }
  componentDidMount() {
    const tl = new TimelineLite();

    tl.to(this.intro.current, 6.5, { opacity: 1, delay: 2 })
      .to(this.intro.current, 1.5, { opacity: 0 })
      .to(this.content.current, 10, { top: "-170%" });
  }

  render() {
    return (
      <div className="container">
        <section className="intro" ref={this.intro}>
          <p>Why waste a good super power?</p>
        </section>
        <section className="crawl">
          <div className="content" ref={this.content}>
            <h1 className="title">The World Needs You!</h1>
            <h2 className="subtitle">SOCIETY IN DISARRAY</h2>
            <p>Civilians need help left, right and centre.</p>
            <p>
              Superpower strength required for that tricky jar of chutney.....
            </p>
            <p>Bounding pylometric leaps, to rescue cats in trees....</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Starwars;

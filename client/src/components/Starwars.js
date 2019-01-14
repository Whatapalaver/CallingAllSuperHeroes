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

    tl
      // .to(this.intro.current, 0.5, { opacity: 1, delay: 2 })
      .to(this.content.current, 3, { opacity: 1, delay: 5 })
      .to(this.content.current, 30, { top: "-160%" })
      .to(this.content.current, 3, { opacity: 0, delay: 5 })
      .to(this.intro.current, 0.5, { opacity: 1, delay: 2 });
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

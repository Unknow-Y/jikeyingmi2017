import React, { Component } from 'react';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Timeline.scss';

const durationFn = function(deltaTop) {
  return deltaTop;
}

class Timeline extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="timeline" id="expample">
        <Element name="container" className="element" id="containerElement">
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li><Link activeClass="active" to="first-relative" spy={true} smooth={true} duration={250} containerId="nestedRelativeContainerElement">1st element</Link></li>
              <li><Link activeClass="active" to="second-relative" spy={true} smooth={true} duration={250} containerId="nestedRelativeContainerElement">2nd element</Link></li>
              <li><Link activeClass="active" to="third-relative" spy={true} smooth={true} duration={250} containerId="nestedRelativeContainerElement">3rd element</Link></li>
              <li><Link activeClass="active" to="fourth-relative" spy={true} smooth={true} duration={250} containerId="nestedRelativeContainerElement">4th element</Link></li>
            </ul>
          </nav>

          <Element name="relativeContainer" className="element fixed-size" id="nestedRelativeContainerElement">
            <Element name="first-relative" className="element relative fixed-size">first element inside container</Element>
            <Element name="second-relative" className="element relative fixed-size">second element inside container</Element>
            <Element name="third-relative" className="element relative fixed-size">third element inside container</Element>
            <Element name="fourth-relative" className="element relative fixed-size">fourth element inside container</Element>
          </Element>

        </Element>
      </div>
    )
  }
}

export default Timeline;
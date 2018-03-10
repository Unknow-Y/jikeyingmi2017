import React, { Component } from 'react';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Timeline.scss';

const durationFn = function(deltaTop) {
  return deltaTop;
}

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.scrollTop = this.scrollTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  scrollTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>  
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="timeline">
       <nav className="navbar navbar-default static">
       <ul className="nav navbar-nav">
         <li><Link activeClass="active" to="first" spy={true} smooth={true} duration={250} containerId="containerElement">1st element</Link></li>
         <li><Link activeClass="active" to="second" spy={true} smooth={true} duration={250} containerId="containerElement">2nd element</Link></li>
         <li><Link activeClass="active" to="nestedContainer" spy={true} smooth={true} duration={250} containerId="containerElement">nested container element</Link></li>
         <li><Link activeClass="active" to="fourth" spy={true} smooth={true} duration={250} containerId="containerElement">4th element</Link></li>
         <li><Link activeClass="active" to="relativeContainer" spy={true} smooth={true} duration={250} containerId="containerElement">nested relative container element</Link></li>
         <li><Link activeClass="active" to="rel1" spy={true} smooth={true} duration={250} >rel 1</Link></li>
         <li><Link activeClass="active" to="rel2" spy={true} smooth={true} duration={250} >rel 2</Link></li>
         <li><Link activeClass="active" to="rel3" spy={true} smooth={true} duration={250} >rel 3</Link></li>
         <li><Link activeClass="active" to="rel4" spy={true} smooth={true} duration={250} >rel 4</Link></li>
         <li><Link activeClass="active" to="normal" spy={true} smooth={true} duration={250} >normal</Link></li>
       </ul>
     </nav>

     <Element name="container" className="element" id="containerElement">
       <Element name="first" className="element">first element inside container</Element>
       <Element name="second" className="element">second element inside container</Element>

       <nav className="navbar navbar-default">
         <ul className="nav navbar-nav">
           <li><Link activeClass="active" to="first-nested" spy={true} smooth={true} duration={250} containerId="nestedContainerElement">1st element</Link></li>
           <li><Link activeClass="active" to="second-nested" spy={true} smooth={true} duration={250} containerId="nestedContainerElement">2nd element</Link></li>
           <li><Link activeClass="active" to="third-nested" spy={true} smooth={true} duration={250} containerId="nestedContainerElement">3rd element</Link></li>
           <li><Link activeClass="active" to="fourth-nested" spy={true} smooth={true} duration={250} containerId="nestedContainerElement">4th element</Link></li>
         </ul>
       </nav>

       <Element name="nestedContainer" className="element fixed-size" id="nestedContainerElement">
         <Element name="first-nested" className="element">first element inside container</Element>
         <Element name="second-nested" className="element">second element inside container</Element>
         <Element name="third-nested" className="element">third element inside container</Element>
         <Element name="fourth-nested" className="element">fourth element inside container</Element>
       </Element>


       <Element name="fourth" className="element">fourth element inside container</Element>

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

     <div className="relative">
       <Element name="rel1" className="element big">relative 1</Element>
       <Element name="rel2" className="element big">relative 2</Element>
       <Element name="rel3" className="element big">relative 3</Element>
       <Element name="rel4" className="element big">relative 4</Element>
     </div>

     <Element name="normal" className="element big">normal</Element>
      </div>
    )
  }
}

export default Timeline;
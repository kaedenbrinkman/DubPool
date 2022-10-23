import { Component } from "react";

interface AboutProps { }

interface AboutState { }

class About extends Component<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">About</h1>
            <p className="lead fw-normal">Carpool Made Easy.</p>
          </div>
          <p>
            DubPool was created with the intent to provide UW students with a safe means of transportation through carpooling: a common method of commute for many students. After signing in, the user will be given the option to either search for a carpool ride, or be the one to offer it.
          </p>
          <p>
            If the user chooses the first option, they will be connected with UW students around them that are offering to drive them. If the choose the second option, they will also be connected to students around them, however, the user will have to be the one to pick them up and drive them.
          </p>
          <p>
            In order to offer the most optimal experience, users are required to input their location on and near campus and then will be accordingly matched. Additionally, the user will also have to input a time they would like to leave to ensure efficiency in arriving to and from campus.
          </p>
          <p>
            During this process, the user will have access to a local map, allowing them to see where their driver is. Additionally, the driver will also be able to see the general location of the user. This feature aids communication, as students do not need to get into the hassle of finding the address of a general location to meet the driver. Furthermore, by knowing where their drivers are, students can better time their meetup.
          </p>
          <p>
            To aid with the user experience, users can decide whether they would like to build a schedule. This will allow them to obtain rides without having to schedule one every time they would like to go to campus.
          </p>
          <p>
            Additionally, there is an inbuilt messaging system for users to communicate and connect with others, specifically those that are accompanying them.
          </p>
        </div>
      </main >);
  }
}

export default About;
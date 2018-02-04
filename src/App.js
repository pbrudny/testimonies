import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Story from './Story';

import {
  Button,
  Hero,
  Container,
  Title,
  SubTitle,
  Section,
  Box,
  Media,
  Level,
  Icon,
  Image,
  Content
} from 'reactbulma'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero medium dark bold>
          <Hero.Body>
            <Container>
              <Title>
                Koniec Mroku
              </Title>
              <SubTitle>
                Prawdziwe Historie
              </SubTitle>
              <Icon>
                <i className="fa fa-home"/>
              </Icon>
            </Container>
          </Hero.Body>
        </Hero>
        <Section>
          <Container>
            <Title>Historie</Title>
            <div className="columns">
              <div className="column">
                <Story
                  story="https://www.youtube-nocookie.com/embed/-SJ9pasoZfw?rel=0&amp;showinfo=0"
                  name="Kamil"
                />
              </div>
              <div className="column">
                <Story
                  story="https://www.youtube-nocookie.com/embed/7TGkixmO8rQ?rel=0&amp;showinfo=0"
                  name="Paweł"
                />
              </div>
              <div className="column">
                  <Story
                    story="https://www.youtube-nocookie.com/embed/_mUdQhLteg8?rel=0&amp;showinfo=0"
                    name="Krzysztof"
                  />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <Story
                  story="https://www.youtube-nocookie.com/embed/ocT-Qz2D8Cs?rel=0&amp;showinfo=0"
                  name="Edyta"

                />
              </div>
              <div className="column"></div>
              <div className="column"></div>

              </div>
          </Container>
        </Section>


      </div>
    );
  }
}

export default App;

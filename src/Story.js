import React, { Component } from 'react';

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

class Story extends Component {
  render() {
    return (
      <Box>
        <Media>
          <Media.Content>
            <Content>
              <p>
                <iframe src={this.props.story} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

              </p>
            </Content>
            <Level mobile>

              <Level.Left>
                <Level.Item>
                  <strong>{this.props.name}</strong>
                </Level.Item>
              </Level.Left>
              <Level.Right>
                <Level.Item>
                  <Icon small><i className="fa fa-reply"/></Icon>
                </Level.Item>
                <Level.Item>
                  <Icon small><i className="fa fa-retweet"/></Icon>
                </Level.Item>
                <Level.Item>
                  <Icon small><i className="fa fa-heart"/></Icon>
                </Level.Item>
              </Level.Right>
            </Level>
          </Media.Content>
        </Media>
      </Box>
    );
  }
}

export default Story;

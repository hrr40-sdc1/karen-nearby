/* eslint-disable max-len */
import styled from 'styled-components';

import React from 'react';
import Stars from './Stars.jsx';
import Heart from './Heart.jsx';

const ImageHouse = styled.img`
  width: 300px;
  height: 225px;
`;
const ImageContainer = styled.div`
  width: 300px;
  height: 225px;
  position: relative;
`;
const HouseContainer = styled.div`
  float: left;
  margin: 8px 8px 8px 8px;
  width: 300px;
  height: 275x;
`;
const Words = styled.div`
  font-weight: 300;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
`;
const LightDescription = styled.div`
  line-height: 30%;
  color: #616A6B;
  font-size: 13px;
`;

class House extends React.Component {
  handleClick() {
    this.props.changeCurrentHouse(this.props.house.nearbyNum);
  }

  render() {
    return (
      <HouseContainer className='house'>
        <ImageContainer>
          <Heart heartArr={this.props.heartArr} arrIndex={this.props.house.listingId} heartHouseClicked={this.props.heartHouseClicked}/>
          <ImageHouse
            className='image'
            onClick={this.handleClick.bind(this)}
            src={`https://hrr40-sdc1.s3-us-west-2.amazonaws.com/images/${this.props.house.photo1}`}>
          </ImageHouse>
        </ImageContainer>
        <Words onClick={this.handleClick.bind(this)}>
          <LightDescription className='layout'>
            <h5>
              {this.props.house.type.toUpperCase()}: {this.props.house.cityId}
            </h5>
          </LightDescription>
          <div className='description'>
            <h3>{this.props.house.title} </h3>
          </div>
          <LightDescription className='cost'>
            <h5>{this.props.house.cost.low} </h5>
          </LightDescription>
          <div className='stars'>
            <h5>
              <Stars
                key={this.props.house.listingId}
                rating={this.props.house.stars.low}
              />
              {this.props.house.reviews.low}
            </h5>
          </div>
        </Words>
      </HouseContainer>
    );
  }
}

export default House;

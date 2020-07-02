import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Icon from "../../image/icon.png";
import FilterBox from "../../component/filterbox/FilterBox";
import ArrowBtn from "../../component/arrow/ArrowBtn";

const Filter = ({ color, category, brand }) => {
  const [arrowrotate, setRotate] = useState(false);
  const [curIdx, setCurIdx] = useState(0);

  const handleIdx = (num) => {
    console.log("curIdx :", curIdx);
  };

  const handleRotate = (num) => {
    setRotate(!arrowrotate);
    setCurIdx(num);
  };

  if (color !== undefined && category !== undefined && brand !== undefined) {
    return (
      <Wrap>
        <FilterContainer>
          <Section>
            <Bar>
              <FilterName>CATEGORY</FilterName>
              <ArrowBtn
                idx="1"
                curIdx={curIdx}
                arrowrotate={arrowrotate}
                handleRotate={handleRotate}
              />
              {/*<ArrowWrap onClick={() => handleRotate()} arrowrotate={arrowrotate}>
              <Arrow>
                <AIcon src={Icon} arrowrotate={arrowrotate} />
              </Arrow>
  </ArrowWrap>*/}
            </Bar>
            <Select idx="1" curIdx={curIdx} arrowrotate={arrowrotate}>
              {category.map((category) => {
                return <FilterBox data={category} />;
              })}
            </Select>
          </Section>
          <Section>
            <Bar>
              <FilterName>Product Color</FilterName>
              <ArrowBtn
                idx="2"
                curIdx={curIdx}
                arrowrotate={arrowrotate}
                handleRotate={handleRotate}
              />
            </Bar>
            <Select idx="2" curIdx={curIdx} arrowrotate={arrowrotate}>
              {color.map((color) => {
                return <FilterBox data={color} />;
              })}
            </Select>
          </Section>
          <Section>
            <Bar>
              <FilterName>Brand</FilterName>
              <ArrowBtn
                idx="3"
                curIdx={curIdx}
                arrowrotate={arrowrotate}
                handleRotate={handleRotate}
              />
            </Bar>
            <Select idx="3" curIdx={curIdx} arrowrotate={arrowrotate}>
              {brand.map((brand) => {
                return <FilterBox data={brand} />;
              })}
            </Select>
          </Section>
        </FilterContainer>
      </Wrap>
    );
  }
};

export default Filter;

//style

const Wrap = styled.div`
  position: relative;
  padding-top: 0px;
  top: 0px;
  padding-right: 3px;
  height: 389px;
  max-width: 240px;
  min-height: 3px;
  overflow: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dfdfdf;
    border-radius: 3px;
  }
  &::-webkit-scorllbar-track {
    background: transparent;
  }
`;

const FilterContainer = styled.div`
  overflow-y: auto;
`;

const Section = styled.div``;

const Bar = styled.div`
  margin: 10px 0;
  height: 40px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterName = styled.p`
  padding-left: 5px;
  vertical-align: middle;
  line-height: 40px;
  font-size: 17px;
  font-weight: bold;
  @media only screen and (max-width: 1200px) {
    font-size: 100%;
  }
  @media only screen and (max-width: 768px) {
    font-size: 100%;
  }
`;

//background: ${(props) => (props.arrowrotate === true ? "yellow" : "red")};
//display: ${(props) => (props.arrowrotate === true ? "none" : "block")};
const Select = styled.div`
  height: 100%;
  max-height: 300px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 12px;
  display: ${(props) =>
    props.arrowrotate === true && props.curIdx === props.idx
      ? `none`
      : `block`};

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dfdfdf;
    border-radius: 3px;
  }
  &::-webkit-scorllbar-track-element {
    background: transparent;
  }
`;

// display: ${(props) => (props.arrowrotate === true ? `none` : `block`)};

//display: ${(props) =>
//props.arrowrotate === true && props.idx === props.curIdx ? "block" : "none"}

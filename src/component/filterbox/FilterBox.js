import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const FilterBox = ({
  checked,
  handleCheck,
  check,
  category,
  setCheck,
  data,
  key,
  id,
}) => {
  return (
    <ItemContainer>
      <ItemInner>
        <CheckBox
          //value={value}
          //key={key}
          //id={key}
          type="checkbox"
          //checked={checked}
          //onChange={handleCheck({ key })}
          onClick={() => check(category)}
        />
        <Label>{category}</Label>
      </ItemInner>
    </ItemContainer>
  );
};

export default FilterBox;

const ItemContainer = styled.div`
  height: 20px;
  padding: 0 5px;
  display: flex;
  font-size: 12px;
`;

const ItemInner = styled.div`
  align-self: center;
  margin: 5px 0 0 !important;
  position: relative;
  display: block;
  padding-left: 20px;
`;

const CheckBox = styled.input`
  position: absolute;
  margin-left: -20px;
  opacity: 1;
  z-index: 1;
  cursor: pointer;
`;

const Label = styled.label`
  white-space: nowrap;
  font-weight: lighter;
  padding-left: 10px !important;
  min-height: 20px;
  margin-bottom: 0;
  cursor: pointer;
  display: inline-block;
  position: relative;
`;

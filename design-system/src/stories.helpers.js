import React from "react";
import styled from "styled-components";

import { colors } from "./tokens";

const packageInfo = require("../package.json");

export function VersionInfo() {
  return (
    <>
    Current library version: {packageInfo.version}
    </>
    )
  }

export function SizesSet({spaces}) {
    return (
      <div>{Object.entries(spaces).map(([sizeVar, size]) => <SizesBox key={size} size={size} sizeVar={sizeVar} />)}</div>
    )
  }

const SizesBoxStyled = styled.div`
  margin-bottom: 2em;
  display: flex;
`;

const SizesUnitHolder = styled.div`
  width: 80px;
  display: inline-block;
`;

const SizesUnit = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: inline-block;
  background-color: ${colors.primary500};
`;

export function SizesBox({sizeVar, size}) {
    return (
      <SizesBoxStyled>
        <SizesUnitHolder>
          <SizesUnit size={size}/>
        </SizesUnitHolder>
        <code>
          Variable: {sizeVar}
          <br/>
          Value: {size}
        </code>
      </SizesBoxStyled>
    )
  }
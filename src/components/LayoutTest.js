import PropTypes from "prop-types";
import React, { Component } from "react";
import { HeaderTest } from "./HeaderTest";
import { FooterTest } from "./FooterTest";
import { Ribbon } from "./Ribbon";
import Body from "./Body";

export default class LayoutTest extends Component {
  render() {
    return (
      <div>
            <HeaderTest />
            <Body 
                 style={{
                    height: '90vh',
                    backgroundColor: 'white'
                }}
            />
            {/* <div
                style={{
                    height: '75vh',
                    backgroundColor: 'white'
                }}
            >

            </div> */}
            <Ribbon />
            <FooterTest />
      </div>
    )
  }
}

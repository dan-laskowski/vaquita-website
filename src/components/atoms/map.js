import React from "react";
import styled from "styled-components";

const StyledMap = styled.iframe``;

const Map = ({ ...props }) => {
  return (
    <StyledMap
      as="iframe"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2247.683042391808!2d13.215237!3d55.711881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc4e1137b972a9033!2sIdeon%20Open%20AB!5e0!3m2!1sen!2spl!4v1623751019441!5m2!1sen!2spl"
      width="100%"
      title="map"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      {...props}
    />
  );
};

export default Map;

import React from "react";
import styled from "styled-components";

const StyledMap = styled.iframe``;

const Map = ({ ...props }) => {
  return (
    <StyledMap
      as="iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.89881006048!2d13.241146362537847!3d55.7174821503516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46539656aaee4557%3A0xc7491b5b948f5ff7!2sStralsundsv%C3%A4gen%2029%2C%20224%2079%20Lund%2C%20Szwecja!5e0!3m2!1spl!2spl!4v1615805918171!5m2!1spl!2spl"
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

// @ flow

import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";

//const BigRating = styled(Rating)``;

function RatingComponent(props) {
  const { handleRating, dishName } = props;
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Rating
        name="simple-controlled"
        //value={null}
        onChange={event => handleRating(event, dishName)}
        size="large"
        name={dishName}
      />
    </Box>
  );
}

export default RatingComponent;

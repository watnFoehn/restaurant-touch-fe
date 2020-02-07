// @ flow

import React from "react";
import GradeIcon from "@material-ui/icons/Grade";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

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
        icon={<GradeIcon fontSize="large" />}
      />
    </Box>
  );
}

export default RatingComponent;

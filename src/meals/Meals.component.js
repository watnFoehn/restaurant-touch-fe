// @ flow

import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import RatingComponent from "../rating/Rating.component";

import Dialog from "@material-ui/core/Dialog";

//TODO: decide if we need a grid here, change size of buttons

const StyledCard = styled(Card)`
  margin: 15px auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
`;

const mealOptions = [
  { name: "dish1", rating: 0 },
  { name: "dish2", rating: 0 },
  { name: "dish3", rating: 0 }
];

const mealRatings = {
  dish1: 0,
  dish2: 0,
  dish3: 0
};

//TODO: do I even really need the state? --> no, but we can use it here
function Meals() {
  const [ratingState, setRating] = React.useState(mealRatings);
  const [lastRating, setLastRating] = React.useState({});

  const handleRating = (e, dish) => {
    let newRatingValue = parseInt(e.target.value);
    switch (dish) {
      case "dish1":
        setRating({ ...ratingState, dish1: newRatingValue });
        break;
      case "dish2":
        setRating({ ...ratingState, dish2: newRatingValue });
        break;
      case "dish3":
        setRating({ ...ratingState, dish3: newRatingValue });
        break;
    }

    handleIncludeRating(dish, newRatingValue);
    handleClickOpen();
    const timestamp = new Date();
    const storeObject = { [dish]: newRatingValue };
    localStorage.setItem(timestamp, JSON.stringify(storeObject));
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2300);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(lastRating);
  };

  const handleIncludeRating = async (dish, newRatingValue) => {
    //const { name, rating, time } = this.state
    let newRatingObject = { name: dish, rating: newRatingValue };
    setLastRating(newRatingObject);
  };

  const renderMealOptions = () => {
    return mealOptions.map((option, index) => {
      return (
        <StyledCard key={option.name}>
          <CardContent>
            <Typography variant="h3" align="center">
              {option.name}
            </Typography>
            <RatingComponent
              handleRating={(e, dishName) => handleRating(e, dishName)}
              dishName={option.name}
            />
          </CardContent>
        </StyledCard>
      );
    });
  };

  return (
    <Wrapper id="myCheck">
      {renderMealOptions()}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* TODO: close message automatically after 3 seconds */}
          <Typography id="alert-dialog-title" variant="h2">
            {"You rated "}
            {lastRating.name} {" with "} {lastRating.rating} {" stars."}
          </Typography>
          <Typography variant="h3">
            <p></p>Thank you very much!
          </Typography>
        </Dialog>
      </div>
    </Wrapper>
  );
}

export default Meals;

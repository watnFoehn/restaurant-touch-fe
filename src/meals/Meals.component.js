// @ flow

import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import RatingComponent from "../rating/Rating.component";
import AlertDialog from "../alert/Alert.component";

import api from "../api";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//TODO: decide if we need a grid here, change size of buttons

const StyledCard = styled(Card)`
  min-width: 275px;
  margin: 15px auto;
  min-height: 200px;
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
  };

  const handleClose = () => {
    setOpen(false);
    setRating(mealRatings);
    console.log(ratingState);
  };

  const handleIncludeRating = async (dish, newRatingValue) => {
    //const { name, rating, time } = this.state
    let newRatingObject = { name: dish, rating: newRatingValue };
    await api.insertRating(newRatingObject);
  };

  const renderMealOptions = () => {
    return mealOptions.map((option, index) => {
      return (
        <StyledCard key={option.name}>
          <CardContent>
            <Typography variant="h3" align="center">
              {option.name}
            </Typography>
            <CardActions>
              {/* TODO: add sth here to expand a textfield for detailed review */}
            </CardActions>
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
          <DialogTitle id="alert-dialog-title">
            {"Thank you very much for the rating!"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Wrapper>
  );
}

export default Meals;

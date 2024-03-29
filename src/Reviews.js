import React, { useContext, useState } from "react";
import AppContext from "./context/appContext";
import { Grid, Hidden } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MobileReviews from "./MobileReviews";

const themeColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};
export const Reviews = () => {
  const appContext = useContext(AppContext);
  const { horizontalPadding } = appContext;

  const reviewArr = [
    {
      reviewer: "Johnny",
      body: "I had a deep tissue full body massage with Keala, and she did an AMAZING job getting the knots out of my back. I've had this tightness in my legs and upper back for the longest time but she managed to iron it all out.",
    },
    {
      reviewer: "Quin",
      body: "The quality of the massage is wonderful better than more known places. Very affordable prices. Highly recommend. ",
    },
    {
      reviewer: "Jackie",
      body: "Great prices and the massages are magical. First massage therapist that actually made me feel relaxed. I go every time I'm in Kansas City",
    },
  ];
  const [currentReview, setCurrentReview] = useState(0);
  function goToNext() {
    const lengthOfReviews = reviewArr.length - 1;
    if (currentReview === lengthOfReviews) return setCurrentReview(0);
    else setCurrentReview(currentReview + 1);
  }
  function goBack() {
    if (currentReview === 0) return;
    else setCurrentReview(currentReview - 1);
  }
  function showReviews() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            color: themeColors.homePurple,
            fontSize: 60,
            fontFamily: "ReinaNeue-Heavy",
          }}
        >
          "
        </div>

        <div>
          <p style={{ textAlign: "center" }}>{reviewArr[currentReview].body}</p>
          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            -- {reviewArr[currentReview].reviewer}
          </p>
        </div>
        <div
          style={{
            color: themeColors.homePurple,
            fontSize: 60,
            fontFamily: "ReinaNeue-Heavy",
          }}
        >
          "
        </div>
      </div>
    );
  }
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingTop: 24,
        paddingBottom: 56,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        flex: 1,
      }}
      alignItems="space-between"
    >
      <Hidden mdDown>
        <Grid item container xs={3} alignItems="center">
          <Grid item xs={12} container justifyContent="flex-start">
            <ArrowBackIosNewIcon
              sx={{
                color: themeColors.homeRed,
                fontSize: 40,
                cursor: "pointer",
              }}
              onClick={goBack}
            />
          </Grid>
        </Grid>
        <Grid item container xs={6} alignItems="center" justifyContent="center">
          {showReviews()}
        </Grid>

        <Grid
          item
          container
          xs={3}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item container xs={12} justifyContent="flex-end">
            <ArrowForwardIosIcon
              sx={{
                color: themeColors.homeRed,
                fontSize: 40,
                cursor: "pointer",
              }}
              onClick={goToNext}
            />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <MobileReviews />
      </Hidden>
    </Grid>
  );
};

export default Reviews;


const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

// const header = (props) => <Header {...props} />;
// const headerGuess = (props) => <HeaderGuess {...props} />;

export default {
  noHeader: {
    options: {
      ...horizontalAnimation,
      headerShown: false,
      // header,
    },
  },
  defaultHeader: {
    options: {
      ...horizontalAnimation,
      // header,
    },
  },
};

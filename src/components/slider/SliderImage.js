import React from "react";
import PropTypes from "prop-types";
import { Box, Image, ResponsiveContext, Stack, Text } from "grommet";

const SliderImage = ({ name, score, src }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Stack anchor="bottom">
        <Box
          round="xlarge"
          overflow="hidden"
          align="center"
          margin="small"
          height="large"
        >
          <Image src={src} />
        </Box>
        <Box margin="xlarge">
          {name}
        </Box>
        <Box>
          {size !== "small" && size !== "xsmall" && (
            <Text
              margin={{ bottom: "30px" }}
              weight="bold"
              color="white"
              size="large"
            >
              {score}
            </Text>
          )}
        </Box>
      </Stack>
    )}
  </ResponsiveContext.Consumer>
);

SliderImage.propTypes = {
  name: PropTypes.array,
  score: PropTypes.array,
  src: PropTypes.string
};

export { SliderImage };

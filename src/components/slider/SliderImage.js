import React from "react";
import PropTypes from "prop-types";
import { Anchor, Box, Image, ResponsiveContext, Stack } from "grommet";

const SliderImage = ({name,score, src }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Stack anchor="bottom">
        <Box
          overflow="hidden"
          align="center"
          margin="0"
          height="large"
        >
          <Image 
            src={src}  
            fit="contain"
          />
        </Box>
        <Box>
          {size !== "small" && size !== "xsmall" && (
            <Anchor
              margin={{ bottom: "50px" }}
              weight="bold"
              color="white"
              size="medium"
            >
              {name}
            </Anchor>
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

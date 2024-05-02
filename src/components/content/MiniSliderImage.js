import React from "react";
import PropTypes from "prop-types";
import { Anchor, Box, Image, ResponsiveContext, Stack } from "grommet";

const MiniSliderImage = ({name,score, src }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Stack anchor="bottom">
        <Box
          round=""
          overflow="hidden"
          align="center"
          margin="0"
          height="medium"
        >
          <Image 
            src={src}  
            fit="fill"
          />
        </Box>
        <Box>
          {size !== "small" && size !== "xsmall" && (
            <Anchor
              margin={{ bottom: "-30px" }}
              weight="bold"
              color="black"
              size="xsmall"
            >
              {name}
            </Anchor>
          )}
        </Box>
      </Stack>
    )}
  </ResponsiveContext.Consumer>
);

MiniSliderImage.propTypes = {
  name: PropTypes.array,
  score: PropTypes.array,
  src: PropTypes.string
};

export { MiniSliderImage };

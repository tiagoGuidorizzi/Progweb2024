import React from "react";
import PropTypes from "prop-types";
import { Anchor, Box, Image, ResponsiveContext } from "grommet";
import { BotaoAddLista } from "./BotaAddLista";

const MiniSliderImage = ({name,score, src }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box>
        <Box
          round=""
          overflow="hidden"
          align="center"
          margin="0"
          height="medium"
          justify="center"
        >
          <Image 
            src={src}  
            fit="fill"
          />
          </Box>

          <Box>
            <Box height={"80px"}>
              {size !== "small" && size !== "xsmall" && (
                <Anchor
              
                alignSelf="center"
                weight="bold"
                color="black"
                size="medium"
              >
              {"Nome: "} {name}

              </Anchor>
              )}
            </Box>
            <BotaoAddLista />
          </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

MiniSliderImage.propTypes = {
  name: PropTypes.array,
  score: PropTypes.array,
  src: PropTypes.string
};

export { MiniSliderImage };

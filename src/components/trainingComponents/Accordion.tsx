import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Tooltip } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const tooltipText = {
    epoch: `One epoch means that each and every sample in the training dataset has been fed through the training model at least once. If your epochs are set to 50, for example, it means that the model you are training will work through the entire training dataset 50 times. Generally the larger the number, the better your model will learn to predict the data.`,
    batchSize: `A batch is a set of samples used in one iteration of training. For example, let's say that you have 80 images and you choose a batch size of 16. This means the data will be split into 80 / 16 = 5 batches. Once all 5 batches have been fed through the model, exactly one epoch will be complete.`,
  };
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Advanced</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* <FormControl> */}
            <hr />
            <span style={{ display: "inline-block", marginRight: "5px" }}>
              Epochs:
            </span>
            <input
              type="number"
              name="gender"
              id="male"
              defaultValue="50"
              className="form-control"
              style={{
                display: "inline-block",
                width: "40%",
                marginLeft: "6px",
              }}
            />
            <span style={{ float: "right" }}>
              <Tooltip title={tooltipText.epoch}>
                <HelpOutlineIcon color="action" fontSize="small" />
              </Tooltip>
            </span>

            <hr />
            <span style={{ display: "inline-block", marginRight: "5px" }}>
              Batch Size:
            </span>
            <select
              className="form-control"
              id="batchSize"
              style={{
                display: "inline-block",
                width: "40%",
                marginLeft: "6px",
              }}
            >
              <option>16</option>
              <option>32</option>
              <option>64</option>
              <option>128</option>
              <option>256</option>
            </select>
            <span style={{ float: "right" }}>
              <Tooltip title={tooltipText.batchSize}>
                <HelpOutlineIcon color="action" fontSize="small" />
              </Tooltip>
            </span>

            <hr />
            {/* </FormControl> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            Disabled Accordion
          </Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}

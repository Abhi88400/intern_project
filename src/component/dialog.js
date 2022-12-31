import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ResponsiveDialog({ props }) {
  return (
    <div>
      <Button variant="contained" onClick={props.opened}>
        view_Details
      </Button>
      <Dialog
        open={props.open}
        onClose={props.closed}
        aria-labelledby="responsive-dialog-title"
        style={{ position: "absolute" }}
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            LAUNCH_DATE -:{" "}
            {props.ele.launch_date_local !== undefined
              ? props.ele.launch_date_local
              : null}
          </DialogContentText>
          <DialogContentText>
            MISSION_NAME -:{" "}
            {props.ele.mission_name !== undefined
              ? props.ele.mission_name
              : null}
          </DialogContentText>
          <DialogContentText>
            SITE_NAME_LONG -:
            {props.ele?.launch_site?.site_name_long !== undefined
              ? props.ele.launch_site.site_name_long
              : null}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.closed}>
            Disagree
          </Button>
          <Button onClick={props.closed} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

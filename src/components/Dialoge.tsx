import * as React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function AlertDialog({ title }: { title: string }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        {title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {
            "What are the conditions that you must meet before joining the platform?"
          }
        </DialogTitle>
        <DialogContent>
          <ol>
            <li>Being Somali (The platform is only for Somali People)</li>
            <li>You must have at least one of the following skills:</li>
            <ul>
              <li>Basic Web Developement</li>
              <li>Basic Mobile App Developement</li>
              <li>Web API</li>
              <li>Basic Database Knowledge</li>
            </ul>
          </ol>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

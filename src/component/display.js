import React, { useEffect, useState } from "react";
import spaceXMissionService from "../graphQl/index";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./display.css";
import CustomizedDialogs from "./dialog";
import { Container } from "@mui/system";
function DisplayGraph() {
  const [state, setState] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };

  const handleOpen = (index) => {
    setUser(state[index]);
    setOpen(true);
  };

  async function getData() {
    const res = await spaceXMissionService.getSpaceMission(10);
    console.log(res.data.launchesPast, "reach");
    setState(res.data.launchesPast);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fixed maxWidth="xl">
      <div className="graphql_boxes">
        {state?.map((data, index) => (
          <Card key={index} className="cards" sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 100 }}
              image="https://picsum.photos/id/232/200/300"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.mission_name}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <CustomizedDialogs
                props={{
                  closed: () => handleClose(),
                  opened: () => handleOpen(index),
                  open,
                  ele: user,
                }}
              ></CustomizedDialogs>
              <Button variant="contained" href={data.links.video_link}>
                youtube_Link
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Container>
  );
}
export default DisplayGraph;

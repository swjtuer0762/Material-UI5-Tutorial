import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://th.bing.com/th/id/OIP.wV_XLjVgNujZuaXgvXTjVAHaHa?rs=1&pid=ImgDetMain"
          />
          <Avatar
            alt="Travis Howard"
            src="https://th.bing.com/th/id/OIP.wV_XLjVgNujZuaXgvXTjVAHaHa?rs=1&pid=ImgDetMain"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://th.bing.com/th/id/OIP.wV_XLjVgNujZuaXgvXTjVAHaHa?rs=1&pid=ImgDetMain"
          />
          <Avatar alt="Agnes Walker" src="https://th.bing.com/th/id/OIP.wV_XLjVgNujZuaXgvXTjVAHaHa?rs=1&pid=ImgDetMain" />
          <Avatar
            alt="Trevor Henderson"
            src="https://th.bing.com/th/id/OIP.wV_XLjVgNujZuaXgvXTjVAHaHa?rs=1&pid=ImgDetMain"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://th.bing.com/th/id/OIP.wV_XLjVgNujZuaXgvXTjVAHaHa?rs=1&pid=ImgDetMain"
          />
          <Avatar
            alt="Travis Howard"
            src="https://th.bing.com/th/id/OIP.wV_XLjVgNujZuaXgvXTjVAHaHa?rs=1&pid=ImgDetMain"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://th.bing.com/th/id/OIP.wV_XLjVgNujZuaXgvXTjVAHaHa?rs=1&pid=ImgDetMain"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://th.bing.com/th/id/OIP.wV_XLjVgNujZuaXgvXTjVAHaHa?rs=1&pid=ImgDetMain"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt=""
            />
          </ImageListItem>
          {/* <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1567306301408-9b74779a11af"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"
              alt=""
            />
          </ImageListItem> */}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.wV_XLjVgNujZuaXgvXTjVAHaHa?rs=1&pid=ImgDetMain" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.wV_XLjVgNujZuaXgvXTjVAHaHa?rs=1&pid=ImgDetMain" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/OIP.wV_XLjVgNujZuaXgvXTjVAHaHa?rs=1&pid=ImgDetMain" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;

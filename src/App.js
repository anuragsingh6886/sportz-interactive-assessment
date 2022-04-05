import './App.css';
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'sans-serif',
      textTransform: 'none',
      fontSize: 25,
    },
  },
});

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/20c1afef1661881ddc9c")
      .then((msg) => msg.json())
      .then((val) => {
        setUsers(val.playerList);
      });
  }, [users]);

  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '20 30px 50px 20px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 400,
      padding: '10px 10px',
    },
  });
  const classes = useStyles();
  return (
    <div>
       <Grid container  >
        {users.map((u) => (
          <Grid item xm={4}>
            <Card sx={{ margin: 1.5 }} className={classes.root}>
              <img src={`./images/${u.Id}.jpg`} style={{
                borderRadius: 5,
                height: 200,
                width: 250
              }} />
              <CardContent>
                <Typography variant="h6" theme={theme}>
                  {u.PFName}
                </Typography>
                <Typography variant="subtitle1" >{u.SkillDesc}</Typography>
                <Typography variant="h6" sx={{fontFamily:['Arial']}} >${u.Value}</Typography>              
                <Typography variant="subtitle1" sx={{fontFamily:['sans-serif']}} >{u.UpComingMatchesList[0].CCode} vs {u.UpComingMatchesList[0].VsCCode}</Typography>
                <Typography variant="subtitle1" sx={{fontFamily:['Arial']}} >{u.UpComingMatchesList[0].MDate}</Typography>
              </CardContent>{" "}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default App;

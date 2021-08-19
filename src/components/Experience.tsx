import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { FunctionComponent } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import CreateIcon from "@material-ui/icons/Create";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import HomeIcon from "@material-ui/icons/Home";
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      textAlign: "justify",
      backgroundColor: theme.palette.grey[900],
      color: theme.palette.background.paper,
    },
    content: {
      paddingLeft: theme.spacing(2),
    },
    subContent: {
      paddingLeft: theme.spacing(4),
    },
    paper: {
      backgroundColor: theme.palette.grey[800],
      padding: "6px 16px",
      color: "white",
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    datesText: {
      color: theme.palette.primary.light,
    },
    experienceTitle: {
      color: theme.palette.secondary.light,
    },
    chargeText: {
      color: theme.palette.secondary.main,
    },
  })
);

const Experience: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography component="span">
              <span className={classes.datesText}>December 2011</span>
              <b>{" <=> "}</b>
              <span className={classes.datesText}>January 2013</span>
              <br />
              <span className={classes.chargeText}>
                <b>Systems assistant</b>
              </span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <CreateIcon color="primary" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h3">
                <span>{"<"}</span>
                <span className={classes.experienceTitle}>IMAGENGROUP</span>
                <span>{"/>"}</span>
              </Typography>
              <Typography align="justify">
                Maintenance and development of web pages
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography component="span">
              <span className={classes.datesText}>April 2013</span>
              <b>{" <=> "}</b>
              <span className={classes.datesText}>December 2014</span>
              <br />
              <span className={classes.chargeText}>
                <b>Web developer</b>
              </span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <LocationCityIcon color="primary" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h3">
                <span>{"<"}</span>
                <span className={classes.experienceTitle}>
                  BUCARAMANGA CITY HALL
                </span>
                <span>{"/>"}</span>
              </Typography>
              <Typography align="justify">
                Provide programming services and software development to improve
                activities related with procedures and services of online
                government policy and Web development in ASP.NET fr amework with
                C# language and SQL server databases for the technological
                platform of Bucaramanga city
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography component="span">
              <span className={classes.datesText}>February 2015</span>
              <b>{" <=> "}</b>
              <span className={classes.datesText}>February 2016</span>
              <br />
              <span className={classes.chargeText}>
                <b>Systems Engineer</b>
              </span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <LocalGasStationIcon color="primary" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h3">
                <span>{"<"}</span>
                <span className={classes.experienceTitle}>ISMOCOL S.A</span>
                <span>{"/>"}</span>
              </Typography>
              <Typography align="justify">
                Desktop software development with ASP.NET framework, Visual
                Basic language and SQL server databases, Deve lopment of the
                active and inventory control system of the warehouses,
                requisitions and purchase orders approval web app, mass emailing
                module for payroll information, work certificate double
                verification codification with QR code, responsive web app for
                ma terial query
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography component="span">
              <span className={classes.datesText}>April 2016</span>
              <b>{" <=> "}</b>
              <span className={classes.datesText}>July 2021</span>
              <br />
              <span className={classes.chargeText}>
                <b>Semi-senior developer / SEO analyst</b>
              </span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <HomeIcon color="primary" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h3">
                <span>{"<"}</span>
                <span className={classes.experienceTitle}>
                  FINCARAIZ.COM.CO
                </span>
                <span>{"/>"}</span>
              </Typography>
              <Typography align="justify">
                Web development using visual ASP.NET framework, C# language and
                SQL server databases , front end developing in the site
                migration using React and Nextjs , also using knowledge of
                Search Engine Optimization and data interpretation to improve
                the ranking of Fincaraiz.com.co
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography component="span">
              <span className={classes.datesText}>July 2021</span>
              <b>{" <=> "}</b>
              <span className={classes.datesText}>TODAY</span>
              <br />
              <span className={classes.chargeText}>
                <b>Web engineer M2</b>
              </span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <WebIcon color="primary" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h3">
                <span>{"<"}</span>
                <span className={classes.experienceTitle}>HUGE INC.</span>
                <span>{"/>"}</span>
              </Typography>
              <Typography align="justify">
                Web developpent in front end for all the projects asigned in Huge inc.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
};

export default Experience;

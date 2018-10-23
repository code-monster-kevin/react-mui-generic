import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  card: {
    display: 'flex',
    backgroundColor: '#C5CAE9'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

class CardGrid extends Component {
  render() {
    const { classes, content } = this.props;

    return (
      <Grid container spacing={40} className={classes.cardGrid}>
        {content.map(item => (
          <Grid item key={item.key} xs={12} md={6}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {item.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Open video...
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia className={classes.cardMedia} image={item.image} title={item.title} />
              </Hidden>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

CardGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired
};

export default withStyles(styles)(CardGrid);

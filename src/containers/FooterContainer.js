import React from 'react';
import { withStore } from '@spyna/react-store'
import { withStyles } from '@material-ui/styles';
import theme from '../theme/theme'

import Grid from '@material-ui/core/Grid';

import config from '../config'

const styles = () => ({
    navContainer: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        minHeight: 52
    },
    link: {
        marginRight: theme.spacing(2)
    },
    rightLinkContainer: {
        justifyContent: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-start',
            paddingTop: theme.spacing(1)
        }
    }
})

class FooterContainer extends React.Component {
    async componentDidMount() {
    }

    render() {
        const {
            classes,
        } = this.props

        return <Grid item xs={12}>
            {<Grid className={classes.navContainer} container alignItems='center'>
              <Grid item xs={12} sm={6}>
                  <Grid container alignItems='center'>
                      <div className={classes.link}><a href="https://docs.rockside.io" rel="noopener noreferrer" target='_blank'>Rockside Relay API</a></div>&nbsp;|&nbsp; 
                      <div className={classes.link}><a href="https://rockside.io" rel="noopener noreferrer" target='_blank'>About Rockside</a></div>&nbsp;|&nbsp;
                      <div className={classes.link}><a href="https://github.com/MrChico/stablecoin.services" rel="noopener noreferrer" target='_blank'>Forked from StableCoin.service</a></div>
                  </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Grid container className={classes.rightLinkContainer}>
                      <span>Interacting with the <a href={'https://etherscan.io/address/' + config.WITH_PERMIT + '#code'} rel="noopener noreferrer" target='_blank'>Dach (with permit) Contract</a></span>
                  </Grid>
              </Grid>
            </Grid>}
        </Grid>
    }
}

export default withStyles(styles)(withStore(FooterContainer))

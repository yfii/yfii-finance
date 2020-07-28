import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Select,
  MenuItem,
  FormControl
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';
import { colors } from '../../theme'

import Store from "../../stores";
const store = Store.store

const styles = theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  footer: {
    position: 'absolute',
    top: '0px',
    padding: '24px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    }
  },
  footerLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '420px'
  },
  footerText: {
    cursor: 'pointer'
  },
  languageContainer: {
    paddingLeft: '12px',
    display: 'none'
  },
  selectInput: {
    fontSize: '14px',
    color: colors.pink
  },
  link: {
    textDecoration: 'none'
  }
});


class Footer extends Component {

  constructor(props) {
    super()

    this.state = {
      languages: store.getStore('languages'),
      language: 'en',
      open: true
    }
  }

  closeAlert = () => {
    this.setState({open: false})
  }

  render() {
    const { classes, t, location } = this.props;
    const { open } = this.state

    return (
      <>
      <div className={classes.footer}>
        <div className={classes.footerLinks}>
          <Link to={"/"} className={ classes.link }>
            <Typography className={ classes.footerText } variant={ 'h6'}>Home</Typography>
          </Link>
        </div>
      </div>
      <div className={classes.root}><Collapse in={open}>
        <Alert
          variant="filled" severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={this.closeAlert}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {t('Slogan')}
        </Alert>
    </Collapse></div></>
    )
  }
}

export default withNamespaces()(withRouter(withStyles(styles)(Footer)));

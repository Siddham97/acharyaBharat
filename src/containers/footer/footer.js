import React from 'react';
import {default as Footer} from '../../components/footer';
import { IconButton, Typography, Link, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

export function FooterContainer(){

    const useStyles = makeStyles(({ palette }) => ({
        header: {
          fontSize: 14,
          color: palette.grey[500],
          marginBottom: "0.5em",
        },
        container:{
            display: "flex",
            justifyContent: "center",
            paddingTop: 10,
            paddingBottom:0,
        }
      }));

    const styles = useStyles();

    return (
        <Box mx={6} py={3} className={styles.container}>
            <Typography className={styles.header}>
                © Copyright 2020 Acharya Bharat.
            </Typography>
        </Box>
    )
}
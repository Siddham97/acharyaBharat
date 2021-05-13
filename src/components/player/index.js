import React, {useState,useContext, createContext} from 'react';
import ReactDOM from 'react-dom';
import {Container, Button, Overlay, Inner, Close} from './styles/player';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

export const PlayerContext = createContext();

export default function Player({children, ...restProps}){
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer}}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({src, ...restProps}){
    const {showPlayer, setShowPlayer} = useContext(PlayerContext);
    const theme = useTheme();
    const matchMD = useMediaQuery(theme.breakpoints.up("md"));

    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
            <Inner>
            <iframe src={`https://www.youtube.com/embed/${src}`}
            width={matchMD ? '850' : '450'}
            height={matchMD ? '580' : '350'}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/>
                <Close />
            </Inner>
        </Overlay>,
        document.body
    ) : null;
}

Player.Button = function PlayerButton({...restProps}){
    const {showPlayer, setShowPlayer} = useContext(PlayerContext);

    return (<Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
        <PlayArrowIcon />Play
    </Button>)
}
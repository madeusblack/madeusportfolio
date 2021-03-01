/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useSound from 'use-sound';
import classes from './Header.module.css';
import boopSfx from '../../assets/bgm2.mp3';
import music from '../../assets/music.svg';

const Header = () => {
  const [checked, setChecked] = useState(false);
  const [play, { stop }] = useSound(boopSfx);

  const handleMusic = () => {
    console.log(checked);
    checked ?
      stop() :
      play();
  };
  const handleClick = () => {
    handleMusic();
    setChecked(!checked);
  };

  return (
    <header className={classes.Header}>
      <input onClick={handleClick} id='myCheckbox1' checked={checked} className={checked ? classes.checked : classes.notChecked} type='checkbox' />
      <label htmlFor='myCheckbox1'>
        <img className={classes.music} src={music} alt='music' />
      </label>

      <div className={classes.linksContainer}>
        <h3 className={classes.link}>About</h3>
        <h3 className={classes.link}>Projects</h3>
        <h3 className={classes.link}>Contact</h3>
      </div>
    </header>
  );
};
export default Header;

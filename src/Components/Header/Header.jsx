/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useSound from 'use-sound';
import { Link } from 'react-router-dom';
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
      <div onClick={handleClick} role='button' className={classes.musicContainer}>
        <input id='myCheckbox1' checked={checked} className={checked ? classes.checked : classes.notChecked} type='checkbox' />
        <label htmlFor='myCheckbox1'>
          <img className={classes.music} src={music} alt='music' />
        </label>
      </div>

      <div className={classes.linksContainer}>
        <Link to='/' className={classes.link}>About</Link>
        <Link to='/Projects' className={classes.link}>Projects</Link>
        <Link to='/Contact' className={classes.link}>Contact</Link>
      </div>
    </header>
  );
};
export default Header;

import React,  { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Experience from './Experience.js';
import ModeSwitch from './ModeSwitch.js';
import ModalHeaderFooter from './ModalHeaderFooter.js';

WorkModal.propTypes = {
  activeMode: PropTypes.string,
  nextMode: PropTypes.func.isRequired,
  prevMode: PropTypes.func.isRequired,
}

function WorkModal(props) {
  return (
    <div className={classNames('modal-container', 'isExperience', props.activeMode)}>
     <ModeSwitch className='modal-prev' switchMode={props.prevMode}/>
      <div className={classNames('modal-content-container')}>
        <ModalHeaderFooter headerText='experience'/>
          <Experience
            header="Software Developer Intern"
            subheader="IMC Financial Markets (June - August 2017)"
            description="Built a missed-trades analysis tool for high-frequency
              traders.  Wrote performant JavaSpark code to handle data processing
              with terabytes of trades and market data. Implemented logic to
              identify two specific reasons why potentially-profitable trades were
              missed. Java, Apache Spark."
            image="../../assets/imc.png"/>
          <Experience
            header="iOS Developer Intern"
            subheader="Samsung Accelerator (June - August 2016)"
            description="Worked with one other engineer to build the iOS app for
              Unclip, a cross-platform video editing and sharing application
              geared toward action sports athletes. Built responsive video gallery
              UI for integration of cloud- and locally-stored videos.  Built
              feature for editing the viewing frames/angles for 360° video.
              Patched FFmpeg, a video encoding/decoding library, to read and write
              spherical metadata on 360° video files. Swift, iOS SDK. "
            image="../../assets/samsungacceleratorlogo.png"/>
        <ModalHeaderFooter headerText='projects'/>
        <Experience
          header="Pollen"
          description="Pollen is a cross-platform campus polling app developed
            to better assess and inform student opinions on campus issues.
            Built the entire mobile client for Android and iOS. Tech stack
            includes React Native, Express.js, MongoDB, websockets, Expo, Docker.
            Expect to deploy in Fall 2017."
          image="../../assets/samsungacceleratorlogo.png"/>
        <Experience
          header="hillydilly2spotify"
          description="Built a simple web app built to seamlessly convert the
            newest posts from hillydilly.com, one of my favorite music blogs, to
            Spotify playlists.  Tech stack includes Flask, ReactJs, SASS, Webpack.
            Powered by Spotify’s web API. "
          image="../../assets/samsungacceleratorlogo.png"/>
      </div>
     <ModeSwitch className='modal-next' switchMode={props.nextMode}/>
    </div>
  );
};

export default WorkModal;

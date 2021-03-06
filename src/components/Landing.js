import React, { Component } from 'react';
import Typed from 'typed.js';
import { MODAL_MODES } from './constants.js';

const classNames = require('classnames');

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var options = {
      strings: ["Zachry Bai"],
      typeSpeed: 100,
      showCursor: false
    }

    var typed = new Typed(".landing-header-text", options);
  }

  introClicked() {
    this.props.onClickedLink(MODAL_MODES.INTRO);
  }

  workClicked() {
    this.props.onClickedLink(MODAL_MODES.WORK);
  }

  contactClicked() {
    this.props.onClickedLink(MODAL_MODES.CONTACT);
  }

  render() {
    return (
      <div className={classNames('landing-container',
          this.props.modalOn ? 'on' : null)}
          onClick={this.props.modalOn ? this.props.toggleModal : null}>
        <div className={classNames('landing-header-text')}>
        </div>
        <div className={classNames('landing-links', 'text')}>
          <div className={classNames('landing-link')} onClick={this.introClicked.bind(this)}>
            intro
          </div>
          <div className={classNames('landing-slash')}>
            /
          </div>
          <div className={classNames('landing-link')} onClick={this.workClicked.bind(this)}>
            work
          </div>
          <div className={classNames('landing-slash')}>
            /
          </div>
          <div className={classNames('landing-link')} onClick={this.contactClicked.bind(this)}>
            contact
          </div>
        </div>
        <div className={classNames('landing-links')}>
          <a href="https://github.com/zachbai" target="_blank">
            <i className={classNames('fa fa-github', 'landing-icon', 'icon')}></i>
          </a>
          <a href="https://linkedin.com/in/zachbai" target="_blank">
            <i className={classNames('fa fa-linkedin', 'landing-icon', 'icon')}></i>
          </a>
        </div>
      </div>
    )
  }
};

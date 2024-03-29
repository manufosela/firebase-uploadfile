// Copyright 2022 manufosela.
// SPDX-License-Identifier: MIT
import { css } from 'lit-element';

export const firebaseUploadfileStyles = css`
  /* CSS CUSTOM VARS
    --firebase-uploadfile-width-image: 150px;
    --firebase-uploadfile-zoom-image: 1.2;
    --firebase-uploadfile-progress-bg-color, #eee;
    --firebase-uploadfile-progress-color1: #09c;
    --firebase-uploadfile-progress-color2: #f44;
    --firebase-uploadfile-progress-width: 500px;
    --firebase-uploadfile-bgcolor-button: #106BA0;
    --firebase-uploadfile-color-button: #FFF;
    --firebase-uploadfile-progress-width: 500px
    --firebase-uploadfile-margin: 10px 0
  */
  :host {
    --firebase-uploadfile-width-image: 150px;
    --firebase-uploadfile-zoom-image: 1.2;
    --firebase-uploadfile-progress-bg-color: #eee;
    --firebase-uploadfile-progress-color1: #09c;
    --firebase-uploadfile-progress-color2: #f44;
    --firebase-uploadfile-progress-width: 500px;
    --firebase-uploadfile-bgcolor-button: #106ba0;
    --firebase-uploadfile-color-button: #fff;
    --firebase-uploadfile-progress-width: 500px;
    --firebase-uploadfile-margin: 10px 0;
    --firebase-uploadfile-font-size: 10px;

    display: flex;
    padding: 0;
    margin: var(--firebase-uploadfile-margin, 10px 0);
    align-items: start;
    justify-content: center;
    flex-direction: column;
    font-size: var(--firebase-uploadfile-font-size, 13px);
  }

  #uploader {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
  }
  #msg {
    border: 3px outset gray;
    border-radius: 15px;
    width: 30rem;
    height: 10rem;
    position: absolute;
    background: gray;
    display: none;
    color: #fff;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    /* font-size: 1rem; */
  }
  label {
    font-weight: bold;
    margin: 5px 0;
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
  .bloque1 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: var(--firebase-uploadfile-progress-width, 500px);
  }
  .bloque1 label {
    grid-area: 1 / 1 / 2 / 2;
    padding: 0.5rem;
  }
  .bloque1 button {
  }
  .bloque1 .buttonsLayer {
    display: flex;
    grid-area: 2 / 1 / 3 / 2;
    height: 3.5rem;
    align-items: center;
  }

  .bloque1 .progressLayer {
    width: 100%;
    margin-bottom: 10px;
    grid-area: 2 / 1 / 3 / 2;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0px;
    height: 2.5rem;
    background: #fff;
  }

  .bloque2 {
    margin-left: 20px;
    position: absolute;
    right: 1rem;
  }
  .bloque2 a {
    display: block;
  }

  .fakefile {
    width: 80px;
    height: 80px;
    border: 2px solid black;
  }
  .fakefile > div::before {
    transform: rotate(-45deg);
    content: 'FILE';
  }
  .invisible {
    visibility: hidden;
    width: 0;
  }
  progress[value]::-webkit-progress-bar {
    background-color: var(--firebase-uploadfile-progress-bg-color, #eee);
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
  progress[value]::-webkit-progress-value {
    background-image: -webkit-linear-gradient(
        -45deg,
        transparent 33%,
        rgba(0, 0, 0, 0.1) 33%,
        rgba(0, 0, 0, 0.1) 66%,
        transparent 66%
      ),
      -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
      -webkit-linear-gradient(left, var(--firebase-uploadfile-progress-color1, #09c), var(--firebase-uploadfile-progress-color2, #f44));
    border-radius: 2px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
    -webkit-animation: animate-stripes 5s linear infinite;
    animation: animate-stripes 5s linear infinite;
  }
  progress[value]::-moz-progress-bar {
    background-image: -moz-linear-gradient(
        135deg,
        transparent 33%,
        rgba(0, 0, 0, 0.1) 33%,
        rgba(0, 0, 0, 0.1) 66%,
        transparent 66%
      ),
      -moz-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
      -moz-linear-gradient(left, var(--firebase-uploadfile-progress-color1, #09c), var(--firebase-uploadfile-progress-color2, #f44));
    border-radius: 2px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
    animation: animate-stripes 5s linear infinite;
  }
  input[type='file'] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  label[for='fileButton'] {
    padding: 0.5rem;
  }
  label[for='fileButton'],
  button {
    font-weight: 600;
    color: var(--firebase-uploadfile-color-button, #fff);
    background-color: var(--firebase-uploadfile-bgcolor-button, #106ba0);
    display: flex;
    transition: all 0.5s ease 0s;
    cursor: pointer;
    text-transform: uppercase;
    height: 2.5rem;
    max-height: calc(var(--firebase-uploadfile-font-size, 16px) * 4);
    width: 10rem;
    min-width: calc(var(--firebase-uploadfile-font-size, 16px) * 10);
    border: 2px outset var(--firebase-uploadfile-bgcolor-button, #106ba0);
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: var(--firebase-uploadfile-font-size, 16px);
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-basis: content;
    margin: 0.3rem;
    padding: 0.5rem;
    appearance: auto;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-indent: 0px;
    text-shadow: none;
    box-sizing: border-box;
  }
  #imageLoaded {
    width: var(--firebase-uploadfile-width-image, 150px);
    transition: transform 1s;
    object-fit: cover;
  }

  #imageLoaded:hover {
    width: 300px;
    transform: scale(var(--firebase-uploadfile-zoom-image, 1.2));
  }

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes animate-stripes {
    100% {
      background-position: -100px 0px;
    }
  }
  @keyframes animate-stripes {
    100% {
      background-position: -100px 0px;
    }
  }

  @keyframes bigScale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(2);
    }
  }
`;

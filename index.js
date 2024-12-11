#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';

const showBanner = () => {
  const banner = figlet.textSync('AymenAE', { horizontalLayout: 'full' });
  const purpleGradient = gradient('#00FFFF', '#8A2BE2');
  console.log(purpleGradient(banner));
};

const lineGradient = (text, startColor, endColor) => {
  const gradientFn = gradient(startColor, endColor);
  return gradientFn.multiline(text);
};

const showBusinessCard = () => {
    console.log(chalk.white('\nHi there! 👋 I\'m Aymen Ebrahim.'));
    console.log(chalk.white('\nA 23 year old software developer from the Netherlands.\n'));

  console.log(`
    ${lineGradient('💻 GitHub:', '#00FFFF', '#8A2BE2')} ${chalk.underline('https://github.com/aymenae')}
    ${lineGradient('💼 LinkedIn:', '#00DDFF', '#8A2BE2')} ${chalk.underline('https://linkedin.com/in/aymen-ebrahim')}
    ${lineGradient('🌐 Website:', '#00AAFF', '#8A2BE2')} ${chalk.underline('https://aymen.nl')}
    ${lineGradient('☕ Ko-fi:', '#0088FF', '#8A2BE2')} ${chalk.underline('https://ko-fi.com/aymenae')}
  `);

  console.log(chalk.white('Hit me up! '));
};

const main = () => {
  showBanner();
  showBusinessCard();
};

main();

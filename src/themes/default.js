// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from 'styled-theme/composer';
import colors from './colors';

const theme = {};

theme.palette = {
  progress: ['#141517', '#414245', '#2F3033'],
  ...colors // Imported common colors across all themes
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
  primary:
    'Oswald, Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
};


export default theme;

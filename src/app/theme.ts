export interface Theme {
  name: string;
  properties: any;
}

export const dawn: Theme = {
  name: 'dawn',
  properties: {
    '--background-default': '#f9fbfd',
    '--background-secondary': '#ffffff',
    '--background-tertiary': '#ffffff',
    '--background-quaternary': '#171A21',
    '--background-light': '#171A21',
    '--font-color-default': '#000000',
    '--font-color-secondary': '#6e84a3',
    '--font-color-tertiary': '#95aac9',
    '--font-color-quaternary': '#95aac9',
    '--scrollbar-color': '#cccccc80',
    '--box-shadow-default': '0 0.75rem 1.5rem rgba(18 , 38, 63,.03)',
    '--outline-color-default': '#edf2f9',
    '--border-color-default': '#e3ebf6'
  }
};

export const dusk: Theme = {
  name: 'dusk',
  properties: {
    '--background-default': '#171A21',
    '--background-secondary': '#1c222f',
    '--background-tertiary': '#272a30',
    '--background-quaternary': '#171A21',
    '--background-light': '#171A21',
    '--font-color-default': '#ffffff',
    '--font-color-secondary': '#c9cacc',
    '--font-color-tertiary': '#5e636d',
    '--font-color-quaternary': '#6284a3',
    '--scrollbar-color': '#88888880',
    '--box-shadow-default': '0 0.75rem 1.5rem rgba(23, 30, 41, 0.5)',
    '--outline-color-default': '#1c222f',
    '--border-color-default': '#5e636d'
  }
};


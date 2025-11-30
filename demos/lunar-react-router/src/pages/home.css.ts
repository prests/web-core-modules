import { style } from '@vanilla-extract/css';

const mainContainer = style({
  padding: '20px',
});

const sectionDivider = style({
  margin: '20px 0',
  borderBottom: '1px solid #ccc',
  paddingBottom: '20px',
});

const finalSection = style({
  margin: '20px 0',
});

const customButton = style({
  background: 'linear-gradient(45deg, #007bff, #28a745)',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
});

const formContainer = style({
  margin: '10px 0',
});

const formInput = style({
  margin: '0 10px',
  padding: '5px',
});

export { mainContainer, sectionDivider, finalSection, customButton, formContainer, formInput };

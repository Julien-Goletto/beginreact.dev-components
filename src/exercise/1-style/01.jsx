import "./global.css"

const VariantsStyle = { 
  primary: { backgroundColor: '#646cff'},
  secondary: { backgroundColor: '#16a34a'},
  default: { backgroundColor: '#171717'},
};

const SizeStyles = {
  small: { padding: '8px 16px', fontSize: '1rem'},
  large: { padding: '12px 24px', fontSize: '1.2rem'},
}

const Button = ({ variant = 'default', size, children }) => {
  const variantStyle = VariantsStyle[variant];
  const sizeStyle = SizeStyles[size];
  const style = { 
    ['--background-color']: variantStyle.backgroundColor,
    ['--padding']: sizeStyle.padding,
    ['--font-size']: sizeStyle.fontSize,
  }

  return (
  <button
    className="button"
    style={style}
    >
    {children}
  </button>);
};

const Demo = () => {
  return (
    <div 
      style = {{['--bg-color']: '#F1F1F1'}}
      className="container"
    >
      <Button variant="primary" size="small">
        Primary small
      </Button>
      <Button variant="secondary" size="small">
        Primary small
      </Button>
      <Button variant="default" size="small">
        Default small
      </Button>
      <Button variant="primary" size="large">
        Primary large
      </Button>
      <Button variant="secondary" size="large">
        Secondary large
      </Button>
      <Button variant="default" size="large">
        Default large
      </Button>
    </div>
  );
};

// ℹ️ Ne pas modifier le code ci-dessous
const App = () => {
  return (
    // ℹ️ Cette classe permet d'enlever les styles par défaut des boutons !
    <div className="remove-global-styles">
      <Demo />
    </div>
  );
};

export default App;

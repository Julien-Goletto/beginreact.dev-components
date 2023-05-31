import styles from "./01.module.css";
// import clsx from "clsx";
import styled from 'styled-components';

// const VariantsStyle = { 
//   primary: { backgroundColor: '#646cff'},
//   secondary: { backgroundColor: '#16a34a'},
//   default: { backgroundColor: '#171717'},
// };

// const SizeStyles = {
//   small: { padding: '8px 16px', fontSize: '1rem'},
//   large: { padding: '12px 24px', fontSize: '1.2rem'},
// }

const Button = styled.button({
  backgroundColor: ({variant}) => {
    if (variant === 'primary') return '#646cff';
    if (variant === 'secondary') return '#16a34a';
    return '#171717';
  },
  color: 'white',
  borderRadius: 4,
  borderColor: 'transparent',
  padding: ({size}) => size === 'small' ? '8px 16px' : '12px 24px',
  fontSize: ({size}) => size === 'large' ? '1rem' : '1.2rem',
});

  // const Button = ({ variant = 'default', size, children }) => {
  // const variantStyle = VariantsStyle[variant];
  // const sizeStyle = SizeStyles[size];
  // const style = { 
  //   ['--background-color']: variantStyle.backgroundColor,
  //   ['--padding']: sizeStyle.padding,
  //   ['--font-size']: sizeStyle.fontSize,
  // }

//   return (
//   <button
//     // className={styles.button}
//     className={
//       clsx(
//         "rounded text-white font-medium pointer border border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-red-800",
//         { 
//           'bg-[#646cff]': variant === "primary",
//           'bg-green-600': variant === "secondary",
//           'bg-neutral-900': variant === "default",
//         },
//         {
//           'px-2 py-4 text-base': size === 'small',
//           'px-3 py-6 text-lg': size === 'large',
//         }
//       )
//     }
//     // style={style}
//     >
//     {children}
//   </button>);
// };

const Demo = () => {
  return (
    <div 
      style = {{['--bg-color']: '#F1F1F1'}}
      className={styles.container}
      // className="flex flex-col items-center gap-2"
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

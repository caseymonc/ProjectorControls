import styles from './Spacer.module.css';

type SpaceSizes = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

function Spacer({ size = '4' }: { size?: SpaceSizes }): JSX.Element {
  return <div className={styles[`var${size}`]} />;
}

export default Spacer;

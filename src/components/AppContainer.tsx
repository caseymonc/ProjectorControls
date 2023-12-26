import { PropsWithChildren } from 'react';
import styles from './AppContainer.module.scss';

type AppContainerProps = PropsWithChildren<{
  size?: 'small' | 'normal' | 'large';
}>;

function AppContainer({ size = 'normal', children }: AppContainerProps): JSX.Element {
  let className = size === 'normal' ? styles.container : styles.containerLarge;
  if (size === 'small') className = styles.containerSmall;
  return <div className={className}>{children}</div>;
}

export default AppContainer;

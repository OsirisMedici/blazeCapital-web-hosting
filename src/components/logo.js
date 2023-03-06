/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from '../assets/blaze2.png';
import styles from '../theme/shadows.module.css';

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Image src={logo} alt="blaze logo" />
      <b className={styles.logo}> BlazeCaptial</b>
      
    </Link>
  );
}

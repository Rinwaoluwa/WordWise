import Map from "../src/components/Map";
import Sidebar from "../src/components/Sidebar";
import User from "../src/components/User";
import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User /> 
    </div>
  );
}
 
export default AppLayout;

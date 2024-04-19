import LeftDrawer from "@/components/drawer";
import styles from "../../styles/primaryLayout.module.scss"




export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className={styles.container}>
        <LeftDrawer />
          {children}
        </div>
    );
  }








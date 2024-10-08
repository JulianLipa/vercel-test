import Image from "next/image";
import styles from "./page.module.css";
import PropertyCardData from "@/app/components/PropertyCard/PropertyCardData";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <PropertyCardData dataId={1} loading={false} />
      </main>
    </div>
  );
}

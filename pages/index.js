import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Products } from "../components/Products";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <>
      <main className={styles.main}>
        <Products />
      </main>
    </>
  );
}

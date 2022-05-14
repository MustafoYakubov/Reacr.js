import styles from "../styles/blog.module.css";
import Link from "next/link";
const blog = () => {
  return (
    <div>
      <h1 className={styles.title}>blog js working...</h1>
      <Link href="/">home</Link>
    </div>
  );
};

export default blog;

import React from "react";
import styles from "./skeleton.module.css";

function Skeleton({ width, height }: { width: string; height: string }) {
    return <div className={styles.skeleton} style={{ width, height }} />;
}

export default Skeleton;
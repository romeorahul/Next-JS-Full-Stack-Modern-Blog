"use client";
import Image from "next/image";
import React from "react";
import HomeImg from "public/hero.png";
import styles from "./page.module.css";
import { db } from "@/utils/db";
import web from "public/web.svg";
import android from "public/android.svg";
import graphic from "public/graphic.svg";
import Slider from "@component/components/Slider/Slider";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  // Add more image URLs as needed
];

// Rest of your server setup and routes

// Close the MongoDB connection when the application is terminated
process.on("SIGINT", () => {
  db.close(() => {
    console.log("MongoDB connection closed.");
    process.exit(0);
  });
});

const page = () => {
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    // Add more image URLs as needed
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.texts}>
          <h1>Welcome to the modern blog</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
          <button className={styles.btn}>Read More</button>
        </div>
        <div className={styles.imgContainer}>
          <Image src={HomeImg} alt="home page image" className={styles.img} />
        </div>
      </div>

      {/* services section starts from here */}

      <div className={styles.about}>
        <h1 className={styles.aboutheading}>Our Services</h1>
        <div className={styles.box}>
          <div className={styles.innerbox}>
            <Image src={web} className={styles.serviceimg} />
            <h1>Web development</h1>
            <p>It is a long established fact that a reader</p>
            <button className={styles.aboutbtn}>Read More</button>
          </div>
          <div className={styles.innerbox}>
            <Image src={android} className={styles.serviceimg} />
            <h1>Web development</h1>
            <p>It is a long established fact that a reader</p>
            <button className={styles.aboutbtn}>Read More</button>
          </div>
          <div className={styles.innerbox}>
            <Image src={web} className={styles.serviceimg} />
            <h1>Web development</h1>
            <p>It is a long established fact that a reader</p>
            <button className={styles.aboutbtn}>Read More</button>
          </div>
          <div className={styles.innerbox}>
            <Image src={web} className={styles.serviceimg} />
            <h1>Web development</h1>
            <p>It is a long established fact that a reader</p>
            <button className={styles.aboutbtn}>Read More</button>
          </div>
          <div className={styles.innerbox}>
            <Image src={web} className={styles.serviceimg} />
            <h1>Web development</h1>
            <p>It is a long established fact that a reader</p>
            <button className={styles.aboutbtn}>Read More</button>
          </div>
          <div className={styles.innerbox}>
            <Image src={web} className={styles.serviceimg} />
            <h1>Web development</h1>
            <p>It is a long established fact that a reader</p>
            <button className={styles.aboutbtn}>Read More</button>
          </div>
          <div className={styles.innerbox}>
            <Image src={web} className={styles.serviceimg} />
            <h1>Web development</h1>
            <p>It is a long established fact that a reader</p>
            <button className={styles.aboutbtn}>Read More</button>
          </div>
          <div className={styles.innerbox}>
            <Image src={web} className={styles.serviceimg} />
            <h1>Web development</h1>
            <p>It is a long established fact that a reader</p>
            <button className={styles.aboutbtn}>Read More</button>
          </div>
        </div>
      </div>

      {/* services section ends here  */}
      <Slider />
    </>
  );
};

export default page;

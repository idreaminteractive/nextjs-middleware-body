import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  // req.body in middleware is always null
  const sendPost = () => {
    fetch("/api/middlewaretest", {
      method: "post",
      body: JSON.stringify({ hello: "world" }),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((e) => {
        console.error(e);
      });
  };

  // Will appear properly in logs
  const sendPostToHello = () => {
    fetch("/api/hello", {
      method: "post",
      body: JSON.stringify({ hello: "world" }),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className={styles.container}>
      <div>
        Submitting a post request to /api fails to have a body under the request
      </div>
      <div>
        <button onClick={sendPost}>Send the post.</button>
      </div>
      <div>
        <button onClick={sendPostToHello}>Send the post to hello.</button>
      </div>
    </div>
  );
};

export default Home;

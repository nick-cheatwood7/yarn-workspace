import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Form } from "../comonents/Form";
import { axiosClient } from "../utils/axios";
import { GetPost } from "@yarn-workspace/server";

const App: NextPage = () => {
    const id = "abc123";
    const fetchPost = async () => {
        const res = await axiosClient.get<GetPost["response"]>(`/posts/${id}`);
        console.dir(res.data);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <div className={styles.formContainer}>
                    <Form />
                    <button onClick={fetchPost}>Fetch post</button>
                </div>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
};

export default App;

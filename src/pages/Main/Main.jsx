import React, {useContext} from 'react';
import styles from './Main.module.css';
import Login from "../../components/Login/Login";
import {AuthContext} from "../../context";
import cosmonauts from "../../asset/cosmonauts.jpeg"
import MyButton from "../../components/UI/MyButton/MyButton";
import {NavLink} from "react-router-dom";

const Main = () => {
    const {isAuth, isMobile} = useContext(AuthContext);

    return (
        <div className={styles.root}>
            <h1>SpaceFlight News</h1>
            <h2>Get an overview of the latest Spaceflight news, from various sources!</h2>
            {isAuth
                ? <div className={styles.isAuthWrapper}>
                    <img className={styles.image} src={cosmonauts} alt={'Cosmonauts from different countries'}/>
                </div>
                : <div className={styles.isNotAuthWrapper}>
                    <Login/>
                </div>
            }
            {isMobile &&
                <div className={styles.navButtons}>
                    <NavLink to="/news">
                        <MyButton>
                            Go to news  🚀
                        </MyButton>
                    </NavLink>
                    <NavLink to="/blog">
                        <MyButton>
                            Go to Blog  🌏
                        </MyButton>
                    </NavLink>
                </div>
            }
        </div>
    );
};

export default Main;
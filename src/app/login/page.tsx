'use client';
import { useRouter } from "next/router";
import serverStore from '@/lib/server/serverStore';
import { useEffect, useState } from "react";
import { signIn, useSession, signOut } from 'next-auth/react';
import axios from "axios";
import './login.scss'

export default function Login() {
    const [localUserInputEmail, setEmail] = useState('');
    const [localUserInputPassword, setPassword] = useState('');


    // -------------------------------------------------- 로그인
    // 소셜로그인 - 깃허브
    async function loginGit() {
        const result = await signIn("github", {
            redirect: true,
            callbackUrl: "/login",
        });
    }

    // 소셜로그인 - 네이버
    async function loginNaver() {
        const result = await signIn("naver", {
            redirect: true,
            credentials: { id: 10000 },
            callbackUrl: "/login",
        });
    }

    // 로컬 로그인 
    async function loginLocal(bodyData) {
        const result = await signIn("credentials", {
            redirect: true,
            body: JSON.stringify(bodyData),
            callbackUrl: "/login",
        });
    }



    // -------------------------------------------------- 세션 저장 next auth
    const { data: session, status } = useSession();
    // console.log(session);



    // -------------------------------------------------- 로그아웃
    if (status === 'authenticated') {
        return <section>
            <p>Signed in as {session.user?.name}</p>
            <button onClick={() => { signOut() }}>logout</button>
        </section>
    }


    // -------------------------------------------------- 로컬 로그인 검사
    const inputEmailChange = (e) => { // input email 값 저장
        setEmail(e.currentTarget.value);
    }

    const inputPasswordChange = (e) => { // input password 값 저장
        setPassword(e.currentTarget.value);
    }

    const submitLogin = (e) => {
        {/*
            >> 해야할 일
            db에서 LoginData를 get해와서 전체 데이터중에 localUserInputEmail이 있는지 체크한다.
            아니면 ID나 PASSWORD가 일치하지 않습니다^^ 알림띄움
            있으면 localUserInputPassword가 맞는지 체크한다.
            맞으면 loginLocal(bodyData)에 값을 보냄
            아니면 ID나 PASSWORD가 일치하지 않습니다^^ 알림띄움
        */}

        e.preventDefault();
        console.log('submit 이메일은', localUserInputEmail);
        console.log('submit 비밀번호는', localUserInputPassword);

        const res = await serverStore('get', 'Login');
        if (res !== null) {
            setResult(res.data);
        }
        setOriginalData(result)

    }


    return (
        <section>
            <div className="loginMain">
                <h2>로그인</h2>

                <form onSubmit={submitLogin}>
                    <div className="EmailContainer">
                        <label htmlFor="">이메일</label>
                        <input type="email" id="userEmail" name="Email" onChange={(e) => { inputEmailChange(e) }} />
                    </div>
                    <div className="passwordContainer">
                        <label htmlFor="">비밀번호</label>
                        <input type="password" id="userPassaword" name="passaword" onChange={(e) => { inputPasswordChange(e) }} />
                    </div>
                    <button type="submit">로그인</button>
                </form>

                <div className="centerLine">
                    <span>소셜 로그인</span>
                </div>
                <div className="apiLogin">
                    <button className="naverBtn" onClick={loginNaver}></button>
                    <button className="GitBtn" onClick={loginGit}></button>
                </div>
                <div className="joinMembership">
                    <a href="/signUp">아직 회원이 아니십니까? <span>회원가입하기</span></a>
                </div>
            </div>
            <div className="backgroundCharactor">
                <div className="cho"></div>
                <div className="ding"></div>
            </div>
        </section>

    );
}

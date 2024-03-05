// import axios from "axios";
// import YouTube, { YouTubeProps } from 'react-youtube';
// import "./search.scss"

// export default function Search() {

//     const iframeProps = {
//         id: "ytplayer",
//         type: "text/html",
//         width: "720",
//         height: "405",
//         src: "https://www.youtube.com/embed/g_VbJkbt64g",
//         frameborder: "0",
//         allowfullscreen: "allowfullscreen",
//     };

//     const onPlayerReady: YouTubeProps['onReady'] = (event) => {
//         event.target.pauseVideo();
//     }

//     const opts: YouTubeProps['opts'] = {
//         height: '390',
//         width: '640',
//         playerVars: {
//             autoplay: 1,
//         },
//     };

//     return (
//         <>
//             {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />; */}
//             <section>
//                 강의 전체 검색
//                 <div>
//                     <iframe {...iframeProps}></iframe>
//                 </div>
//             </section>
//         </>
"use client"
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Naver from './components/Naver';
import Google from './components/Google';
import Youtube from './components/Youtube';
import SearchInputSub from '@/components/searchSub/SearchInputSub';
import './search.scss';

export default function Search() {
    const [query, setQuery] = useState<string>('');

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const recommendQuerys = ['개발자 이력서 쓰는법', '개발자 포트폴리오', 'React useEffect', 'Nextjs14 Router', '자바스크립트 최신 강의', '푸바오', '오늘 점심 오트밀계란밥', '농담곰 인형'];

    useEffect(() => {
        const q = searchParams.get('key');
        setQuery(q)
    }, [pathname, searchParams]);

    const totalSearchFunc = (q: string) => {
        if (q.length > 2) {
            setQuery(q)
        }
    }

    return (
        <section id="totalSearch">
            <section className='totalSearchHeader'>
                <SearchInputSub
                    query={query}
                    totalSearchFunc={totalSearchFunc}
                />
            </section>

            <section className='recommendQuery'>
                <h3>추천 검색어</h3>
                <ul>
                    {
                        recommendQuerys.map((item, i) => {
                            return <li key={i} onClick={() => { setQuery(item) }}>{item}</li>
                        })
                    }
                </ul>
            </section>

            <section className='checkQuery'>
                <span>{query}</span> 검색 결과
            </section>

            <section id="totalSearch1" className='totalSearchSection'>
                <p className='subheading'>동영상</p>
                <Youtube />
            </section>

            <section id="totalSearch2" className='totalSearchSection'>
                <p className='subheading'>웹문서</p>
                <Google
                    query={query}
                />
            </section>

            <section id="totalSearch3" className='totalSearchSection'>
                <p className='subheading'>블로그</p>
                <Naver />
            </section>
        </section>
    );
}
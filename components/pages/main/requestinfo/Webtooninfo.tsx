import { WebtoonStateType } from '@/types/webtoon/webtoonDataType';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/requestinfo/Webtooninfo.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Config from '@/configs/config.export';

export default function Webtooninfo() {

    const router = useRouter();
    const { baseUrl } = Config();
    const { requestId } = router.query;
    const { webtoonId } = router.query;

    const [webtooninfo, setWebtoonInfo] = useState<WebtoonStateType>(
        {
            id: 0,
            title: '',
            description: '',
            genre: '',
            day: '',
            author: '',
            illustrator: '',
            mainImageData: '',
            thumbnailImageData: '',
            ask: true,
        }
    );

    useEffect(() => {
        axios.get('api')
            .then(res => res.data)
            .then(data => setWebtoonInfo(data))
    }, [])

    const handleApproval = () => {
        axios.post(`${baseUrl}/webtoon-service/v1/demands?target=webtoon&type=modify&whether=accept&webtoonId=${webtoonId}`, {
            webtoonId: webtoonId,
        },
            {
                headers: {

                }
            })
            .then((res) => {
                console.log(res)
                router.push("/request")
            })
    }

    const handleRefusal = () => {
        axios.post('api', {
            title: webtooninfo.title,
            description: webtooninfo.description,
            genre: webtooninfo.genre,
            day: webtooninfo.day,
            author: webtooninfo.author,
            illustrator: webtooninfo.illustrator,
            mainImageData: webtooninfo.mainImageData,
            thumbnailImageData: webtooninfo.thumbnailImageData,
            ask: false,
        })
            .then((res) => {
                console.log(res)
                router.push("/request")
            })
    }

    return (
        <div className={style.adminBox}>
            {webtooninfo &&
                <div className={style.WebtoonInfoWrap} key={webtooninfo.id}>
                    <p className={style.webtooninfotitle}>웹툰 수정</p>
                    <div className={style.InfoBox}>
                        <p>작품명 : </p>
                        <p className={style.infotxt}>{webtooninfo.title}</p>
                    </div>
                    <div className={style.InfoBox}>
                        <p>줄거리 : </p>
                        <p className={style.infotxt}>{webtooninfo.description}</p>
                    </div>
                    <div className={style.InfoBox}>
                        <p>장르 : </p>
                        <p className={style.infotxt}>{webtooninfo.genre}</p>
                    </div>
                    <div className={style.InfoBox}>
                        <p>요일 : </p>
                        <p className={style.infotxt}>{webtooninfo.day}</p>
                    </div>
                    <div className={style.InfoBox}>
                        <p>작가 : </p>
                        <p className={style.infotxt}>{webtooninfo.author}</p>
                    </div>
                    <div className={style.InfoillustratorBox}>
                        <p>일러스트레이터 : </p>
                        <p className={style.infotxt}>{webtooninfo.illustrator}</p>
                    </div>
                    <div className={style.InfoImgBox}>
                        <div className={style.labelBox}>
                            <p>메인 이미지</p>
                        </div>
                        <div className={style.ImageBox}>
                            <Image src={webtooninfo.mainImageData} alt="WebtoonMainImagePreview" width={200} height={200} />
                        </div>
                    </div>
                    <div className={style.InfoImgBox}>
                        <div className={style.labelBox}>
                            <p>썸네일 이미지</p>
                        </div>
                        <div className={style.ImageBox}>
                            <Image src={webtooninfo.thumbnailImageData} alt="WebtoonThumbnailImagePreview" width={200} height={200} />
                        </div>
                    </div>
                    <div className={style.submit}>
                        <button onClick={handleApproval}>승인</button>
                        <button onClick={handleRefusal}>거부</button>
                    </div>
                </div>
            }
        </div>
    )
}

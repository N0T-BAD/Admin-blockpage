import React, { useEffect, useState } from 'react'
import style from '@/components/pages/comments/CommentsPage.module.css'
import { CommentsDataType } from '@/types/comments/commentsDataType'
import { commentsData } from '@/data/commentsData';

export default function CommentsPage() {

  const [comments, setComments] = useState<CommentsDataType[]>([]);

  useEffect(() => {
    console.log(commentsData);
    setComments(commentsData);
  }, [])

  return (

    <div className={style.adminBox}>
      {comments.map(comments => (
        <div className={style.commentspage} key={comments.id}>
          <p className={style.reporttop}>{comments.type}</p>
          <div className={style.reportlist}>
            <div className={style.reportbox}>
              <div className={style.reporttxt}>
                <p>{comments.name}</p>
                <p className={style.reportday}>{comments.date} {comments.time}</p>
              </div>
              <p className={style.reportcontent}>{comments.comment}</p>
            </div>
            <div className={style.reportbtn}>
              <button>삭제</button>
              <button>반려</button>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  )
}

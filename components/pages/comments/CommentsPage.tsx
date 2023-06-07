import React, { useEffect, useState } from 'react'
import style from '@/components/pages/comments/CommentsPage.module.css'
import { CommentsDataType } from '@/types/comments/commentsDataType'
import { commentsData } from '@/data/commentsData';
import axios from 'axios';
import Config from '@/configs/config.export';
import Swal from 'sweetalert2';

export default function CommentsPage() {

  const { baseUrl } = Config();

  const [comments, setComments] = useState<CommentsDataType>({
    data: [{
      memberId: '',
      reportDate: '',
      memberNickname: '',
      content: '',
      reportType: '',
      commentId: 0,
    }]
  });

  useEffect(() => {
    axios.get(`${baseUrl}/comment-service/v1/reports`)
      .then((res) => {
        console.log(res.data)
        setComments(res.data)
        console.log(comments)
      })
      .catch((err) => {
        console.log(err)
      })
    // console.log(commentsData);
    // setComments(commentsData);
  }, [])

  const handleAccept = (commentId: number) => {
    axios.patch(`${baseUrl}/comment-service/v1/reports`, {
      commentId: commentId,
    })
      .then((res) => {
        console.log(res)
        Swal.fire({
          icon: 'success',
          title: '삭제되었습니다.',
          showConfirmButton: false,
          timer: 1500
        })
          .then(() => {
            window.location.reload();
          })
      })
  }

  const handleRefuse = (commentId: number) => {
    axios.delete(`${baseUrl}/comment-service/v1/reports`, {
      data: {
        commentId: commentId,
      }
    })
      .then((res) => {
        console.log(res)
        Swal.fire({
          icon: 'success',
          title: '반려되었습니다.',
          showConfirmButton: false,
          timer: 1500
        })
          .then(() => {
            window.location.reload();
          })
      })
  }

  return (

    <div className={style.adminBox}>
      {comments.data && comments.data ? (
        comments.data.map((comments) => (
          <div className={style.commentspage} key={comments.commentId}>
            <div className={style.reporttop}>
              <p>{comments.reportType}</p>
              <p>{comments.reportDate}</p>
            </div>
            <div className={style.reportlist}>
              <div className={style.reportbox}>
                <p className={style.reportId}>{comments.memberNickname}</p>
                <p className={style.reportcontent}>{comments.content}</p>
              </div>
              <div className={style.reportbtn}>
                <button onClick={() => handleAccept(comments.commentId)}>삭제</button>
                <button onClick={() => handleRefuse(comments.commentId)}>반려</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )
      }
    </div>
  )
}

export interface CommentsDataType {
  data: [{
    memberId: string;
    reportDate: string;
    memberNickname: string;
    content: string;
    reportType: string;
    commentId: number;
  }]
}
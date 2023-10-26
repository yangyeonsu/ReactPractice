import React from "react";
import Comment from "./Comment";

const guestBook = [
    {
        name: "양숭",
        comment: "안녕하세요, 연숭이입니다."
    },
    {
        name: "기쪽",
        comment: "리액트 잘보고 갑니다~"
    },
    {
        name: "구찌",
        comment: "월월월월월"
    }
]

function CommentList(props) {
    return (
        <div>
            {guestBook.map((reply) => {
                return (
                    <Comment name={reply.name} comment={reply.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
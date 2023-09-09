import React from "react";
import CommentInput from "./CommentInput";
import PrevComment from "./PrevComment";
import AlertForComment from "./AlertForComment";

export default function CommentSection() {
  const validUser = false;
  return (
    <div>
      {validUser ? <CommentInput /> : <AlertForComment />}

      <PrevComment />
    </div>
  );
}

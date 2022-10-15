import React  from "react";
import "./CommentUserInfo.css";

const CommentUserInfo = ({data}) => {
    console.log(data);
    return (
        <div className="UserInfo">
            <img src={data.avatarUrl} alt="img" />
            <div className="UserInfo">{data.name}</div>
        </div>
    )
};
export default CommentUserInfo;
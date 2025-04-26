import { useSelector } from "react-redux";
import moment from "moment";
import { useGetConversationQuery } from "../../features/conversation/conversationApi";
import ChatItem from "./ChatItem";
import Error from "../ui/Error";
import getPartnerInfo from "../../utils/getPartnerInfo";
import gravatarUrl from "gravatar-url";
import { Link } from "react-router-dom";
export default function ChatItems() {
    const {user}=useSelector(state=>state.auth)|| {}
    const {email}=user
    const {data:conversations,isLoading,isError,error}=useGetConversationQuery(email)

    //decide what to render

    let content=null;

    if(isLoading){
        content=<li className="mt-2 text-center">Loading...</li>
    }else if(!isLoading && isError){
        content=<li className="mt-2 text-center"><Error message={error.data}/></li>
    }else if(!isLoading && !isError && conversations?.length===0){
        content=<li className="mt-2 text-center">No Conversations Found</li>
    }
    else if(!isLoading && !isError && conversations?.length>0){
        content=conversations.map((conversation)=>{
            const {id,message,timestamp}=conversation;
            const {name,email:partnerEmail}=getPartnerInfo(conversation.users,email);
            return(
                (
                    <li  key={conversation.id}>
                   <Link to={`/inbox/${id}`}> <ChatItem
                        avatar={gravatarUrl(partnerEmail,{size:80})}
                        name={name}
                        lastMessage="bye"
                        lastTime={moment(timestamp).fromNow()}
                       
                    /></Link>
                   
                </li>
                )
            )
        })
    }



    return (
        <ul>
            {content}
        </ul>
    );
}

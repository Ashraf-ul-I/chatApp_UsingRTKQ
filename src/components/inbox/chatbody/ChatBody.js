// import Blank from "./Blank";
import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../../../features/messages/messagesApi";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";
import Error from "../../ui/Error";
export default function ChatBody() {
    const {id}=useParams();
    const {data:messages,isLoading,isError,error}=useGetMessagesQuery(id);
    
    let content=null;

    if(isLoading){
        content=<div className="mt-2 text-center">Loading...</div>
    }else if(!isLoading && isError){
        content=<div className="mt-2 text-center"><Error message={error.data}/></div>
    }else if(!isLoading && !isError && messages?.length===0){
        content=<li className="mt-2 text-center">No Messages Found</li>
    }
    else if(!isLoading && !isError && messages?.length>0){
        content=<>
               <ChatHead
                    message={messages[0]}
                />
                <Messages messages={messages}/>
                <Options />
                </>
    }
    return (
        <div className="w-full lg:col-span-2 lg:block">
            <div className="w-full grid conversation-row-grid">
                
                {content}
            </div>
        </div>
    );
}

import { differenceInDays, differenceInHours, differenceInMinutes, differenceInYears, formatRelative } from "date-fns";

export const formatDate = (seconds) => {
    let formattedDate = ''
    if(seconds){
        formattedDate = formatRelative(new Date(seconds * 1000), new Date());
        formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
    }
    return formattedDate;
}

export const formatTime = (seconds) =>{
    let formattedDate = ''
    if(seconds){
        const currentDate = new Date();
        const messageDate = new Date(seconds * 1000);

        const diffMinutes = differenceInMinutes(currentDate, messageDate);
        const diffHours = differenceInHours(currentDate, messageDate);
        const diffDays = differenceInDays(currentDate, messageDate);
        const diffYears = differenceInYears(currentDate, messageDate);

        
        if(diffMinutes < 1){
            formattedDate = "bây giờ"
        }else if(diffMinutes < 60 ){
            formattedDate = `${diffMinutes} phút`
        }else if(diffHours < 24 ){
            formattedDate = `${diffHours} giờ`
        }else if(diffDays < 52){
            formattedDate = `${diffDays} tuần`
        }else{
            formattedDate = `${diffYears} năm`
        }
        return formattedDate;
    }

}
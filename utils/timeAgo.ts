import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";
TimeAgo.addDefaultLocale(ko);

const timeAgo = new TimeAgo("ko-KO");

const formatTimeAgo = (time: Date) => {
    if (!time) {
        return "";
    }
    if (typeof time === "string") {
        time = new Date(time);
    }
    return timeAgo.format(time);
};

export default formatTimeAgo;

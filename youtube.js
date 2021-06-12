const blank = "\u200b".repeat(500); 
Jsoup = org.jsoup.Jsoup;
var allsee="\u200b".repeat(500); 
var key = "key값은 google에서 제공하는 api key를 넣으시면 됩니다."
var api = "https://www.googleapis.com/youtube/v3/videos?key="+key+"&part=snippet,contentDetails,statistics,status&id=";
var tube = "https://m.youtube.com/watch?v=32Rs5LVEV70&feature=youtu.be";
var sink = "https://youtu.be/nesBazLzQF0";
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){ 
 
 if(msg=="/재시작"){
   Api.reload("00조회수판독기.js");
   replier.reply("리로드되었습니다.");
 }
 
 if(msg=="/켜기"){
   replier.reply("ON.");
   Api.on("00조회수판독기.js");
 }
 
 if(msg=="/끄기"){
   replier.reply("OFF.");
   Api.off("00조회수판독기.js");
 }
 
 try{
  if(msg.indexOf("/조회수 ")==0) { 
  let link = msg.substr(5);
 let id = link.split('&')[0].split('v=')[1];
 let Url = api+id
 
 let res = Jsoup.connect(Url).ignoreContentType(true).get().text();
 let res1 = JSON.parse(res);
  
  let 조회수 = res1.items[0].statistics.viewCount
  let 채널명 = res1.items[0].snippet.channelTitle
  let 제목 = res1.items[0].snippet.title
  let 태그 = res1.items[0].snippet.tags
  let 댓글 = res1.items[0].statistics.commentCount
  let 좋아요 = res1.items[0].statistics.favoriteCount
  let 업로드시각 = res1.items[0].snippet.publishedAt
  
  //replier.reply("<"+채널명+">"+"\n제목: "+제목+"\n조회수: "+조회수+" 회"+"\n댓글: "+댓글+" 개"+"\n좋아요: "+좋아요+"\n업로드: "+업로드시각+"\n"+allsee+"\n태그: "+태그);
 replier.reply(조회수+" "+댓글+"\n"+업로드시각+"\n"+"<"+채널명+">"+"\n제목: "+제목+"\n조회수: "+조회수+" 회"+"\n댓글: "+댓글+" 개"+"\n좋아요: "+좋아요+"\n업로드: "+업로드시각+"\n"+allsee+"\n태그: "+태그);
 
  }
   
}catch(e){
  replier.reply(e);
}

if(msg.indexOf("/조회 ")==0) { 
  let link = msg.substr(4);
 let id = link.split('&')[0].split('be/')[1];
 let Url = api+id
 
 let res = Jsoup.connect(Url).ignoreContentType(true).get().text();
 let res1 = JSON.parse(res);
  
  let 조회수 = res1.items[0].statistics.viewCount
  let 채널명 = res1.items[0].snippet.channelTitle
  let 제목 = res1.items[0].snippet.title
  let 태그 = res1.items[0].snippet.tags
  let 댓글 = res1.items[0].statistics.commentCount
  let 좋아요 = res1.items[0].statistics.favoriteCount
  let 업로드시각 = res1.items[0].snippet.publishedAt
  
  replier.reply(조회수+" "+댓글+"\n"+업로드시각+"\n"+"<"+채널명+">"+"\n제목: "+제목+"\n조회수: "+조회수+" 회"+"\n댓글: "+댓글+" 개"+"\n좋아요: "+좋아요+"\n업로드: "+업로드시각+"\n"+allsee+"\n태그: "+태그);
  }




}


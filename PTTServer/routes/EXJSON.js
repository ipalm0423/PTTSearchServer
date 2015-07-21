
var topHint = {
  "topSearch": ["世大運", "八仙", "柯p", "課綱微調", "tutorABC"],
  "topTopic": ["小資投資", "樂活料理"],
  "suggestHint": ["八仙樂園", "八仙爆炸", "八仙山森林遊樂園", "八仙樂園門票", "八仙樂園爆炸"]
};

var searchResult = {
  "uid" : "uid1234",
  "scope" : "profie",
  "account" : "account123",
  "name" : "5566forever",
  "title" : "有沒有五五六六的八卦",
  "postTime" : Date.now,
  "picture" : "http://PTTSearch/picture/5566forever",
  "score" : "9.2",
  "lastOnline": "time",
  "osArticle" : "3",
  "ofArticle" : "2",
  "totalArticle" : "34",
  "follower" : "56",
  "redPush" : "200",
  "greenPush" : "123",
  "pushLsit": ["小資投資", "樂活料理"],
  "postList": ["八仙樂園", "八仙爆炸", "八仙山森林遊樂園", "八仙樂園門票", "八仙樂園爆炸"]
};

var profileEX = {
  "uid" : "profileuid1234",
  "scope" : "profie",
  "account" : "account123",
  "name" : "5566forever",
  "title" : "有沒有五五六六的八卦",
  "postTime" : Date.now,
  "picture" : "http://PTTSearch/picture/5566forever",
  "score" : "9.2",
  "lastOnline": "time",
  "osArticle" : "3",
  "ofArticle" : "2",
  "totalArticle" : "34",
  "follower" : "56",
  "redPush" : "200",
  "greenPush" : "123",
  "pushList": ["小資投資", "樂活料理"],
  "articleList": ["八仙樂園", "八仙爆炸", "八仙山森林遊樂園", "八仙樂園門票", "八仙樂園爆炸"]
};

var titleEC = {
  "uid" : "uid1234",
  "account" : "joug",
  "name" : "我是人腐",
  "subTitle" : "問卦",
  "title" : "有沒有五五六六的八卦",
  "board" : "Gossiping",
  "time" : Date.now,
  "totalPush" : "26",
  "board" : "Gossiping",
  "muid" : "motheruid1234"
};

var articleEX = {
  "uid" : "uid1234",
  "muid" : "motheruid1234",
  "account" : "joug",
  "title" : "有沒有五五六六的八卦",
  "time" : Date.now,
  "board" : "Gossiping",
  "content" : [Content0, Content1],
  "signature" : "套一句kobe的話 我會打到我不能打為止
  我如果打得很爛 我不會讓我的粉絲看到我很爛的一面 我會自己退出
  我覺得如果你有夢想的 就不要怕任何阻礙去追尋
  不放手 直到夢想到手 - westdoor",
  "ip" : "220.128.96.188",
  "url" : "https://www.ptt.cc/bbs/Gossiping/M.1437382721.A.F68.html",
  "push" : [pushEX1, pushEX2, pushEX3, pushEX1, pushEX2]
};

var Content0 {
  //此uid為所屬文章的uid
  "uid" : "uid1234",
  "type" : "content",
  "subType" : "text",
  "owner" : "true",
  "content" : "Angelababy   每次看她的臉都覺得很不自然

  但她堅稱自己沒整型

  最近剛跟明教教主 黃曉明結婚

  鄉民打趣說想看小孩長怎樣  (兩人都疑似整型)",
  "account" : "joug",
  "time" : Date.now,
  "floor" : "0"
};

var Content1 {
  //此uid為所屬文章的uid
  "uid" : "uid1234",
  "type" : "content",
  "subType" : "image",
  "content" : "uid1234image",
  "account" : "joug",
  "time" : Date.now,
  "floor" : "1"
};

var pushEX1 = {
  //此uid為所屬文章的uid
  "uid" : "uid1234",
  "type" : "push",
  "subType" : "red",
  "content" : "你那天穿短褲嗎?",
  "account" : "gn01838335",
  "time" : Date.now,
  "floor" : "1"
};
var pushEX2 = {
  //此uid為所屬文章的uid
  "uid" : "uid1234",
  "type" : "push",
  "subType" : "black",
  "content" : "真神奇 沒人噓?",
  "account" : "sd09090",
  "time" : Date.now,
  "floor" : "2"
};
var pushEX3 = {
  //此uid為所屬文章的uid
  "uid" : "uid1234",
  "type" : "push",
  "subType" : "green",
  "content" : "胡粉快來噓阿?",
  "account" : "robertchun",
  "time" : Date.now,
  "floor" : "3"
};


var wearther = {
    "location": "Toronto, Canada",
    "three_day_forecast": [
        {
            "conditions": "Partly cloudy",
            "day" : "Monday",
            "temperature": 20
        },
        {
            "conditions": "Showers",
            "day" : "Tuesday",
            "temperature": 22
        },
        {
            "conditions": "Sunny",
            "day" : "Wednesday",
            "temperature": 28
        }
    ]
};

exports.topHint = topHint;
exports.searchResult = searchResult;
exports.profileEX = profileEX;
exports.articleEX = articleEX;
exports.pushEX1 = pushEX1;
exports.pushEX2 = pushEX2;
exports.pushEX3 = pushEX3;
exports.wearther = wearther;

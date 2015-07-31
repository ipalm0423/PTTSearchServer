
var topHint = {
  "topSearch": ["世大運", "八仙", "柯p", "課綱微調", "tutorABC"],
  "topTopic": ["小資投資", "樂活料理"],
  "suggestHint": ["八仙樂園", "八仙爆炸", "八仙山森林遊樂園", "八仙樂園門票", "八仙樂園爆炸"]
};

var topProfileHint = {
  "accounts": ["abc12", "abcbc", "abcccc", "abc5566", "abc888"]
};


var searchResult = {
  "hint" : "五五六六",
  "uids" : ["uid1234", "uid5678", "uid9012"],
  "scopes" : ["profie", "profie", "article"],
  "accounts" : ["account123", "account456", "account789"],
  "names" : ["我是人腐", "我是鞋子", "我是ＸＸ"],
  "titles" : ["", "", "有沒有鞋子的八卦"],
  "subTitles" : ["9.2", "4.8", "有沒有鞋子的八卦"],
  "times" : [Date.now, Date.now, Date.now],
  "icons" : ["http://PTTSearch/picture/5566forever", "http://PTTSearch/picture/5566forever", "http://PTTSearch/picture/5566forever"],
};

var profileEX = {
  "uid" : "profileuid1234",
  "account" : "account123",
  "name" : "5566forever",
  "icon" : "http://PTTSearch/picture/5566forever",
  "score" : "9.2",
  "lastOnline": Date.now,
  "osArticle" : "3",
  "ofArticle" : "2",
  "totalArticle" : "34",
  "follower" : "56",
  "redPush" : "200",
  "greenPush" : "123"
};

var noResult = {
  "uid" : null
};

var titleEC = {
  "uid" : "uid1234",
  "url" : "https://www.ptt.cc/bbs/Gossiping/M.1437382721.A.F68.html",
  "ip" : "220.128.96.188",
  "account" : "joug",
  "name" : "我是人腐",
  "subTitle" : "問卦",
  "title" : "有沒有五五六六的八卦",
  "board" : "Gossiping",
  "time" : Date.now,
  "totalPush" : "26",
  "icon" : "http://PTTSearch/picture/5566forever",
  "politic" : "left",
  "motheruid" : "motheruid1234",
  "childuid" : ["childuid123", "childuid1234", "childuid12345"],
  "tag" : ["5566", "五五六六"]
};

var articleEX = {
  "uid" : "uid1234",
  "muid" : "motheruid1234",
  "content" : [Content0, Content1],
  "signature" : "套一句kobe的話 我會打到我不能打為止  我如果打得很爛 我不會讓我的粉絲看到我很爛的一面 我會自己退出 我覺得如果你有夢想的 就不要怕任何阻礙去追尋 不放手 直到夢想到手 - westdoor",
  "push" : [pushEX1, pushEX2, pushEX3, pushEX1, pushEX2]
};

var Content0 = {
  //此uid為所屬文章的uid
  "uid" : "uid1234",
  "type" : "content",
  "subType" : "text",
  "owner" : "true",
  "content" : "Angelababy   每次看她的臉都覺得很不自然  但她堅稱自己沒整型  最近剛跟明教教主 黃曉明結婚  鄉民打趣說想看小孩長怎樣  (兩人都疑似整型)",
  "floor" : "0"
};

var Content1 = {
  //此uid為所屬文章的uid
  "uid" : "uid1234",
  "type" : "content",
  "subType" : "image",
  "title" : "有沒有五五六六的八卦",
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
  "title" : "有沒有五五六六的八卦",
  "content" : "你那天穿短褲嗎?",
  "account" : "gn01838335",
  "time" : Date.now,
  "floor" : "1",
  "childfloor" : "0"
};
var pushEX2 = {
  //此uid為所屬文章的uid
  "uid" : "uid1234",
  "type" : "push",
  "subType" : "black",
  "title" : "有沒有五五六六的八卦",
  "content" : "真神奇 沒人噓?",
  "account" : "sd09090",
  "time" : Date.now,
  "floor" : "2",
  "childfloor" : "0"
};
var pushEX3 = {
  //此uid為所屬文章的uid
  "uid" : "uid1234",
  "type" : "push",
  "subType" : "green",
  "title" : "有沒有五五六六的八卦",
  "content" : "胡粉快來噓阿?",
  "account" : "robertchun",
  "time" : Date.now,
  "floor" : "3",
  "childfloor" : "0"
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

exports.noResult = noResult;
exports.topProfileHint = topProfileHint;
exports.topHint = topHint;
exports.searchResult = searchResult;
exports.profileEX = profileEX;
exports.articleEX = articleEX;
exports.pushEX1 = pushEX1;
exports.pushEX2 = pushEX2;
exports.pushEX3 = pushEX3;
exports.wearther = wearther;

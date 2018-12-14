/**
 * 全局变量
 * */
var Global;
(function (Global) {
    var friendRank; //好友排行榜
    var worldRank; //世界好友排行榜
    //好友排行榜
    function friendget() {
        return friendRank;
    }
    Global.friendget = friendget;
    function friendset(param) {
        friendRank = param;
    }
    Global.friendset = friendset;
    //世界好友排行榜
    function worldget() {
        return worldRank;
    }
    Global.worldget = worldget;
    function worldset(param) {
        worldRank = param;
    }
    Global.worldset = worldset;
})(Global || (Global = {}));

$(function(){
    chrome.storage.sync.get('limit',function(ltm){
        $("#limit").val(ltm.limit);   
    })
        $("#setlimit").click(function(){
            var limit= $("#limit").val();
            if(limit)
            {
                chrome.storage.sync.set({'limit':limit},function(){
                    var notiId1="reset";
                    chrome.notifications.clear(notiId1, function() {
                        chrome.notifications.create(
                            "reset", //id
                                {  //obj
                                    type:"basic",
                                    title:"New Limit",
                                    message:"A New limit has been successfully added! ",
                                    iconUrl:"./icon48.png"
                                },function(){} //func
                    );
                });
                    close();
                })
            }
        });
        $('#reset').click(function(){
            chrome.storage.sync.set({"total":0})
            var notiId2 = 'total'; //id
                    chrome.notifications.clear(notiId2, function() {
                        chrome.notifications.create(
                            "total", //id
                                {  //obj
                                    type:"basic",
                                    title:"Reset",
                                    message:"Total reset to 0!",
                                    iconUrl:"./icon48.png"
                                },function(){} //func
                    );
                });
        });
});
 
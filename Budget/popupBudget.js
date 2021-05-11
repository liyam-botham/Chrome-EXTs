//we need permission from chrome to use chrome APIs for chrome storage
$(document).ready(function(){  
    chrome.storage.sync.get(['total','limit'],function(bdg){
        $('#total').text(bdg.total);
        $("#limit").text(bdg.limit);   
        });    
    $("#btn").click(function(){             //chrome.storage.sync.get("valu1,value2")
       chrome.storage.sync.get(["total","limit"],function(bdg){     //value 1 is the value we are callings 
            var newTot=0;
            if(bdg.total)
            {
                newTot+= parseInt(bdg.total);
            }
            var amount=$(amt).val();
            if(amount)
            {
                newTot+=parseInt(amount);
            }
           else{
               close();
           }
            chrome.storage.sync.set({"total":newTot},function(){
                if(amount && newTot>=bdg.limit){
                    var notiId = 'Limit';
                    chrome.notifications.clear(notiId, function() {
                        chrome.notifications.create(
                            "Limit", //id
                                {  //obj
                                    type:"basic",
                                    title:"Limit Reached!",
                                    message:"Looks like you've reached the limit!",
                                    iconUrl:"./icon48.png"
                                },function(){} //func
                    );
                });
            }
            });
            $("#total").text(newTot);
            $("#amt").val(" ");     
       });           
    });
});
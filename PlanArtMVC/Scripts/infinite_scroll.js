﻿$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        FetchDataFromServer();
        nova();
        //proba();
    }
});


var skipCount = 5; // start at 6th record (assumes first 5 included in initial view)
var takeCount = 5; // return new 5 records
var hasMoreRecords = true;
var picture;
var posts;
var slika = "LoveFest.jpg"

function FetchDataFromServer() {
    if (!hasMoreRecords) {
        return;
    }
    $.when(
    $.ajax({
        url: yourApp.Urls.editUserUrl,
        data: { email: email, skipCount: skipCount, takeCount: takeCount },
        datatype: 'json',
        success: function (data) {
            if (data.Count < 5) {
                hasMoreRecords = false; // signal no more records to display
            }
            $.each(data.items, function (index, item) {
                posts = data.items;
                var obj = jQuery.parseJSON(item);
                var container = $('<div></div>', {
                    class: 'w3-container w3-card-2 w3-white w3-round w3-margin cont'
                });
                var br = $("<br />");
                container.append(br);

                var img = $('<img />', {
                    class: 'w3-left w3-margin-right',
                    alt: 'Avatar',
                    style: 'width:60px',
                    id: obj.email + obj.time
                });
                container.append(img);

                var span = $('<span></span>', {
                    class: 'w3-right w3-opacity',
                    text: obj.time
                });
                container.append(span);

                var h4 = $('<h4></h4', {
                    text: obj.firstname + obj.lastname
                });
                container.append(h4);

                var hr = $('<hr>', {
                    class: "w3-clear"
                });
                container.append(hr);

                var p = $('<p></p>', {
                    text: obj.text
                });
                container.append(p);

                var div = $('<div></div>', {
                    class: 'w3-content w3-display-container'
                });
                container.append(div);

                var a = $('<a></a>', {
                    class: 'w3-btn-floating w3-display-left',
                    onclick: 'plusDivs(-1, @(post.email + post.time))'
                });
                container.append(a);

                var a1 = $('<a></a>', {
                    class: 'w3-btn-floating w3-display-right',
                    onclick: 'plusDivs(-1, @(post.email + post.time))'
                });
                container.append(a1);

                $("#result").append(container);
            });
            skipCount += takeCount; // update for next iteration
        },
        error: function () {
            alert("error");
        }
    })
    ).done(function(){
        //var i = 0;
        for(var i = 0;i < posts.count; i++)
        {   
            $.ajax({
                url: yourApp1.Urls.editUserUrl,
                data: {
                    name: jQuery.parseJSON(posts[i]).profilepic
                },
                success: function (pic) {
                    $("#" + jQuery.parseJSON(posts[i]).email + jQuery.parseJSON(posts[i]).time).attr("src", pic);
                }
            })
        }
    }).then(function () {
        
    });
           
}

function nova(){
    for (var i = 0; i < posts.length; i++) {
        $.ajax({
            url: yourApp1.Urls.editUserUrl,
            data: {
                name: jQuery.parseJSON(posts[i]).profilepic
            },
            success: function (pic) {
                $("#" + jQuery.parseJSON(posts[i]).email + jQuery.parseJSON(posts[i]).time).attr("src", pic);
            }
        })
    }
}

function proba() {
    $.ajax({
        url: yourApp1.Urls.editUserUrl,
        data: { name: slika },
        success: function (pic) {
 
            var container = $('<div></div>', {
                class: 'w3-container w3-card-2 w3-white w3-round w3-margin cont'
            });

            var img = $('<img />', {
                class: 'w3-left w3-margin-right',
                alt: 'Avatar',
                style: 'width:60px',
                src: pic
            });
            container.append(img);

            $("#result").append(container);
        }
    })
}
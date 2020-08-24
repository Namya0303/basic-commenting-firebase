(function () {
    var dbRoot = firebase.database();
    var comments = dbRoot.ref('comments/');
    comments.on('child_added', snap => {
        var publishedOn = Date(snap.child("time").val());
        $('.comments').prepend('<a class="mb-3 align-left fromtop" target="_blank"><div class="comment row no-gutters"><div class="col"><div class="card-body"><h5 class="card-title">' + snap.child("name").val() + '</h5><div class="section-hr left"></div><br><p class="card-text">' + snap.child("comment").val()  + '</span></small></p></div></div></div></a>');
    });
}());

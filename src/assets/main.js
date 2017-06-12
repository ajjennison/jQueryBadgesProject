$(function() {

  $.ajax ({
    url: "https://www.codeschool.com/users/3364148.json",
    dataType: "jsonp",
    success: function(response) {
      console.log(response);
      let completedCourses = response.courses.completed;
      for(let i=0; i < completedCourses.length; i++) {
        let newBadge = '<div class="course">';
        newBadge += "<h3>" + completedCourses[i].title + "</h3>";
        newBadge += '<img src="' + completedCourses[i].badge + '"></img>';
        newBadge += '<a href="' + completedCourses[i].url +
        '" target="_blank" class="btn btn-primary">' + 'See Course' + '</a>';
        newBadge += '</div>';
        $("#badges").append(newBadge);
      }
    }
  });

});

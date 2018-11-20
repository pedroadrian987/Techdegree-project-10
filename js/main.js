
$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {
    $('td').each(function(i){
      $(this).html('<img class="svg" src="assets/iconmonstr-x-mark-1.svg" alt="x"/> <img class="image" src=" ' + data.results[i].picture.large + '" />' +
      '<span class="name">'  + data.results[i].name.first + " " + data.results[i].name.last + '</span></br><span class="email">' +
      data.results[i].email + '</span></br><span class="location">' +
      data.results[i].location.city + '</span><span class="cell">' + data.results[i].cell + '</span></br><span class="adrss">' +
      data.results[i].location.street + " " + data.results[i].location.state + " " + data.results[i].location.postcode + ' </span></br><span class="bDay"> Birthday:' +
      (data.results[i].dob.date).substring(0,10) + '</span>');

  });
    console.log(data);

  }
});


$('td.no-modal').click(function(){

    $(this).add("div").addClass("modal").removeClass('no-modal');
    $(this).addClass("no-hover");
    $(".modal").css("display", "block");
    $("div:last-child").addClass("modal-backg");
    $(this).children(".svg").addClass("svgShow").removeClass("svg");
    $(this).children("img").addClass("image-show").removeClass("image");
    $(this).children("span.name").addClass("name-show").removeClass("name");
    $(this).children("span.email").addClass("email-show").removeClass("email");
    $(this).children("span.location").addClass("location-show").removeClass("location").append('<hr/>');
    $(this).children("span.cell").addClass("cell-show").removeClass("cell");
    $(this).children("span.adrss").addClass("adrss-show").removeClass("adrss");
    $(this).children("span.bDay").addClass("bDay-show").removeClass("bDay");
    $('tr').off("click", 'td');
});



$('tr').on("click", ".svgShow", function(){

  $('td').css('display', 'table-cell');
  $('td').addClass('modal').removeClass('modal');
  $('.modal').css("display", "none");
  $('td').removeClass('no-hover');
  $('div:last-child').removeClass("modal-backg");
  $('div').removeClass('modal');
  $('td .svgShow').addClass('svg').removeClass('svgShow');
  $('td .image-show').addClass('image').removeClass('image-show');
  $('td .name-show').addClass('name').removeClass('name-show');
  $('td .email-show').addClass('email').removeClass('email-show');
  $('td .location-show').addClass('location').removeClass('location-show');
  $('td hr').detach();
  $('td .cell-show').addClass('cell').removeClass('cell-show');
  $('td .adrss-show').addClass('adrss').removeClass('adrss-show');
  $('td .bDay-show').addClass('bDay').removeClass('bDay-show');
});

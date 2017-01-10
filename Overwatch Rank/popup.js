document.addEventListener('DOMContentLoaded', function() {
  var checkRankButton = document.getElementById('checkRank');
  checkRankButton.addEventListener('click', function() {
    var temp = document.getElementById('battleID').value;
    var battleID = temp.replace("#", "-");
    var requestURL = "https://api.lootbox.eu/pc/us/".concat(battleID, "/profile");
    var overwatchAPI = new XMLHttpRequest();
    overwatchAPI.open("GET", requestURL, false);
    overwatchAPI.send();
    var json = JSON.parse(overwatchAPI.responseText);

    if (json.statusCode === "404") {
      document.write("Found no user with the BattleTag:".concat(temp));
    } else {
      document.write('<img style= "width: 140px; height: 140px;" src='.concat(json.data.competitive.rank_img, '>'))
      document.write('<p style="text-align:center;">' + json.data.competitive.rank.fontsize("20").bold().italics() + '</p>');
    }
  }, false);
}, false);
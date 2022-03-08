window.addEventListener('message', function (e) {
// Get the sent data
const data = e.data;
ele_update(data);

function ele_update(data)
{
if(data != ""){     
localStorage.setItem('config_data', data);
$('#config_data').val(data);
var config_data = JSON.parse(document.querySelector("input[name=config_data]").value);
debugger
var r = document.querySelector(':root');
r.style.setProperty('--backgroundcolor', config_data.color.backgroundcolor); 
r.style.setProperty('--fontcolor', config_data.color.fontcolor); 
r.style.setProperty('--navText', config_data.color.navText); 
r.style.setProperty('--headerBackground', config_data.color.headerBackground);
r.style.setProperty('--bodyFontFamily', config_data.color.bodyFontFamily);
$('#footer').css('background-color' , config_data.color.footerBackground);
$('#footer > div').css('color' , config_data.color.footerText);
$("#logo").attr("src", config_data.contents.logoUrl);
$("#footer > div").append(config_data.contents.footerText);
$(".bi-envelope-open").attr("fill", config_data.color.fontcolor);
if(config_data.contents.hideFooter === true)
{
 $('#footer').hide();
}
if(config_data.contents.hideMenu === true)
{
 $('#nav-border').hide();
}
if(config_data.contents.hideHeader === true)
{
 $('#home-jumbotron').hide();
}
}
}
});

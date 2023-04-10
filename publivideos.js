
function newtwitvid(videozer) {
  var output = "<embed allowfullscreen='true' allowscriptaccess='always' flashvars='file="+ videozer +"&amp;autostart=false&amp;playlistsize=210&amp;fullscreen=true&amp;controlbar=over&amp;' height='318' src='http://www.4shared.com/flash/player.swf' width='565' wmode='opaque'>";
  document.write (output);
}
function anterior(enlace) {
var link = enlace;
document.write("<div style='display:inline-block; width:252px; height:51px; background:url(http://i.imgur.com/JR0Mkdx.png); float: left;'><a class='btn_nav' href='" +link+ "'>Capitulo Anterior</a></div>");
}
function siguiente(enlace) {
var link = enlace;
document.write("<div style='display:inline-block; width:251px; height:51px; background:url(http://i.imgur.com/79sWuuv.png); float: left;'><a class='btn_nav_n' href='" +link+ "'>Capitulo Siguiente</a></div>");
}
function listacap(enlace) {
var link = enlace;
document.write("<a href='" +link+ "'><img src='http://i.imgur.com/sEpu0Qb.jpg' width='77' height='51' title='Volver a la lista de Capitulos' alt='Volver a la lista de Capitulos'></a>");
}

function dailymotion(IDdailymotion) {
  var output = "<object width='565' height='318'>";
  output += "<param name='movie' value='http://www.dailymotion.com/swf/video/"+IDdailymotion+"'></param>";
  output += "<param name='allowFullScreen' value='true'></param>";
  output += "<param name='allowScriptAccess' value='always'></param>";
  output += "<embed type='application/x-shockwave-flash' src='http://www.dailymotion.com/swf/video/"+IDdailymotion+"' width='565' height='318' allowfullscreen='true' allowscriptaccess='always'>";
  output += "</embed></object>";
  document.write (output);
}

function verzend(IDverzend) {
  var output = "<iframe title=\"verzend video player\" width=\"565\" height=\"318\" src=\"http://verzend.be/" + IDverzend + ".html\" frameborder=\"0\" allowfullscreen>";
  output += "</iframe>";
  document.write (output);
}

function vidbull(IDvidbull) {
  var output = "<iframe title=\"vidbull video player\" width=\"565\" height=\"318\" src=\"http://vidbull.com/" + IDvidbull + ".html\" frameborder=\"0\" allowfullscreen>";
  output += "</iframe>";
  document.write (output);
}

function videobam(IDvideobam) {
  var output = "<iframe allowNetworking=\"internal\" src=\"http://videobam.com/widget/" + IDvideobam + "/custom/575\" width=\"565\" height=\"318\" frameborder=\"0\" scrolling=\"no\">";
  output += "</iframe>";
  document.write (output);
}

function modovideo(IDmodovideo) {
  var output = "<iframe src=\"http://www.modovideo.com/frame.php?v=" + IDmodovideo + "\" width=\"565\" height=\"318\" frameborder=\"0\">";
  output += "</iframe>";
  document.write (output);
}

function novamov(IDnovamov) {
  var output = "<iframe title=\"novamov video player\" width=\"565\" height=\"318\" src=\"http://embed.novamov.com/embed.php?width=565&amp;height=318&amp;v=" + IDnovamov + "&amp;px=1\" frameborder=\"0\" allowfullscreen>";
  output += "</iframe>";
  document.write (output);
}

function veevr(IDveevr) {
  var output = "<iframe src=\"http://veevr.com/embed/" + IDveevr + "?w=565&amp;h=318\" width=\"565\" height=\"318\" scrolling=\"no\" frameborder=\"0\">";
  output += "</iframe>";
  document.write (output);
}

function nowvideo(IDnowvideo) {
  var output = "<iframe src=\"http://embed.nowvideo.eu/embed.php?v=" + IDnowvideo + "&amp;width=565&amp;height=318\" width=\"565\" height=\"318\" scrolling=\"no\" frameborder=\"0\">";
  output += "</iframe>";
  document.write (output);
}

function mediafire(IDmediafire) {
  var output = "<center><iframe src=\"http://veranimesonline.com/frans/stream/mediafire.php?id=" + IDmediafire + "\" width=\"565\" height=\"318\" scrolling=\"no\" frameborder=\"0\">";
  output += "</iframe></center>";
  document.write (output);
}

function jokeroo(jokeroo) {
  var output = "<object id=\"player\" width=\"565\" height=\"318\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" >";
  output += "<param name=\"movie\" value=\"http://www.jokeroo.com/bin/player.swf?" + jokeroo + "\" >";
  output += "</param>";
  output += "<param name=\"allowFullScreen\" value=\"true\" >";
  output += "</param>";
  output += "<param name=\"allowscriptaccess\" value=\"always\">";
  output += "</param>";
  output += "<embed src=\"http://www.jokeroo.com/bin/player.swf?" + jokeroo + "\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"565\" height=\"318\">";
  output += "</embed>";
  output += "</object>";
  document.write (output);
}

function moevideo(moevideo) {
  var output = "<object id=\"player\" width=\"565\" height=\"318\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" >";
  output += "<param name=\"movie\" value=\"http://moevideo.net/swf/letplayerflx3.swf?file=" + moevideo+ "&amp;width=600amp;height=380\" >";
  output += "</param>";
  output += "<param name=\"allowFullScreen\" value=\"true\" >";
  output += "</param>";
  output += "<param name=\"allowscriptaccess\" value=\"always\">";
  output += "</param>";
  output += "<embed src=\"http://moevideo.net/swf/letplayerflx3.swf?file=" + moevideo+ "&amp;width=565&amp;height=318\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"565\" height=\"318\">";
  output += "</embed>";
  output += "</object>";
  document.write (output);
}

function vk(IDvk) {
  var output = "<iframe src='http://vk.com/video_ext.php?oid="+ IDvk +"&id=166737071&hash=8dbf78afdefa99ef&hd=2' width='565' height='318' frameborder='0'>";
  output += "</iframe>";
  document.write (output);
}

function allmyvideos(IDallmyvideos) {
  var output = "<iframe title=\"vk video player\" width=\"565\" height=\"318\" src=\"http://allmyvideos.net/" + IDallmyvideos + "\" frameborder=\"0\" allowfullscreen>";
  output += "</iframe>";
  document.write (output);
}

function videoweed(IDvideoweed) {
  var output = "<iframe title=\"vk video player\" width=\"565\" height=\"318\" src=\"http://embed.videoweed.es/embed.php?v=" + IDvideoweed + "&amp;width=600&amp;height=350\" frameborder=\"0\" allowfullscreen>";
  output += "</iframe>";
  document.write (output);
}

function movzap(IDmovzap) {
  var output = "<iframe title=\"movzap video player\" width=\"565\" height=\"318\" src=\"http://movzap.com/embed/" + IDmovzap + "\" frameborder=\"0\" allowfullscreen>";
  output += "</iframe>";
  document.write (output);
}

function vidxden(IDvidxden) {
  var output = "<iframe title=\"vidxden video player\" width=\"565\" height=\"318\" src=\"http://www.vidxden.com/" + IDvidxden + "&amp;width=565&amp;height=318\" frameborder=\"0\" allowfullscreen>";
  output += "</iframe>";
  document.write (output);
}


function vreer(IDvreer) {
  var output = "<iframe title=\"vreer video player\" width=\"565\" height=\"318\" src=\"http://vreer.com/" + IDvreer + "\" frameborder=\"0\" allowfullscreen>";
  output += "</iframe>";
  document.write (output);
}

function tutv(tutv) {
  var output = "<object id=\"player\" width=\"565\" height=\"318\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" >";
  output += "<param name=\"movie\" value=\"http://tu.tv/tutvweb.swf?xtp=" + tutv  + "\" >";
  output += "</param>";
  output += "<param name=\"allowFullScreen\" value=\"true\" >";
  output += "</param>";
  output += "<param name=\"allowscriptaccess\" value=\"always\">";
  output += "</param>";
  output += "<embed src=\"http://tu.tv/tutvweb.swf?xtp=" + tutv + "\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"565\" height=\"318\">";
  output += "</embed>";
  output += "</object>";
  document.write (output);
}

function rutube(rutube) {
  var output = "<object width='565' height='353'><param name='movie' value='http://video.rutube.ru/"+rutube+"<'></param><param name='wmode' value='window'></param><param name='allowFullScreen' value='true'></param><embed src='http://video.rutube.ru/"+rutube+"' type='application/x-shockwave-flash' wmode='window' width='565' height='318' allowFullScreen='true'>";
  output += "</embed></object>";
  document.write (output);
}

function youtube(IDyoutube) {
  var output = "<object width='565' height='318'><param name='movie' value='//www.youtube.com/v/"+ IDyoutube +"?hl=es_ES&amp;version=3&amp;rel=0'></param><param name='allowFullScreen' value='true'></param><param name='allowscriptaccess' value='always'></param><embed src='//www.youtube.com/v/"+ IDyoutube +"?hl=es_ES&amp;version=3&amp;rel=0' type='application/x-shockwave-flash' width='565' height='318' allowscriptaccess='always' allowfullscreen='true'>";
  output += "</embed></object>";
  document.write (output);
}


function vimeo(IDvimeo) {
    
  var output = "<object type='application/x-shockwave-flash' style='width: 565px;height: 318px;' data='http://vimeo.com/moogaloop.swf?clip_id="+ IDvimeo +"&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=00adef&fullscreen=1' width='565' height='318'>";
    output +=  "<param name='wmode' value='transparent'>";
    output +=  "<param name='allowFullScreen' value='true'>";
  output += "</object>";
  document.write (output);
}

function zippyshare(IDzippy) {
  var output = "<embed name='flashplayer' src='https://codewarblog-js-css.googlecode.com/svn/trunk/jkanime/js/player.swf' flashvars='plugins=https://codewarblog-js-css.googlecode.com/svn/trunk/jkanime/js/proxy.swf&amp;proxy.link="+ IDzippy +"' type='application/x-shockwave-flash' allowfullscreen='true' allowscriptaccess='always' height='318' width='565'>";
  document.write (output);
}
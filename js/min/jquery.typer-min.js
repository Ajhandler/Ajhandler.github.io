String.prototype.rightChars=function(t){return 0>=t?"":t>this.length?this:this.substring(this.length,this.length-t)},function($){var t={highlightSpeed:20,typeSpeed:100,clearDelay:900,typeDelay:900,clearOnHighlight:!0,typerDataAttr:"data-typer-targets",typerInterval:2e3},r,n,e,o,i,a,p,s,u,h,g,l,c;i=function(t,r){return"rgba(0, 0, 0, 0)"===t&&(t="rgb(255, 255, 255)"),$("<span></span>").css("color",t).css("background-color","#3498DB")},u=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},s=function(t){t.removeData(["typePosition","highlightPosition","leftStop","rightStop","primaryColor","backgroundColor","text","typing"])},o=function(t){var r=t.data("text"),n=t.data("oldLeft"),e=t.data("oldRight");return r&&0!==r.length?(t.text(n+r.charAt(0)+e).data({oldLeft:n+r.charAt(0),text:r.substring(1)}),void setTimeout(function(){o(t)},l())):void s(t)},n=function(t){t.find("span").remove(),setTimeout(function(){o(t)},p())},r=function(t){var e=t.data("highlightPosition"),o,p,s;return u(e)||(e=t.data("rightStop")+1),e<=t.data("leftStop")?void setTimeout(function(){n(t)},a()):(o=t.text().substring(0,e-1),p=t.text().substring(e-1,t.data("rightStop")+1),s=t.text().substring(t.data("rightStop")+1),t.html(o).append(i(t.data("backgroundColor"),t.data("primaryColor")).append(p)).append(s),t.data("highlightPosition",e-1),void setTimeout(function(){return r(t)},g()))},h=function(t){var r;if(!t.data("typing")){try{r=JSON.parse(t.attr($.typer.options.typerDataAttr)).targets}catch(n){}"undefined"==typeof r&&(r=$.map(t.attr($.typer.options.typerDataAttr).split(","),function(t){return $.trim(t)})),t.typeTo(r[Math.floor(Math.random()*r.length)])}},$.typer=function(){return{options:t}}(),$.extend($.typer,{options:t}),$.fn.typer=function(){var t=$(this);return t.each(function(){var t=$(this);"undefined"!=typeof t.attr($.typer.options.typerDataAttr)&&(h(t),setInterval(function(){h(t)},c()))})},$.fn.typeTo=function(t){var n=$(this),e=n.text(),o=0,i=0;if(e===t)return console.log("Our strings our equal, nothing to type"),n;if(e!==n.html())return console.error("Typer does not work on elements with child elements."),n;for(n.data("typing",!0);e.charAt(o)===t.charAt(o);)o++;for(;e.rightChars(i)===t.rightChars(i);)i++;return t=t.substring(o,t.length-i+1),n.data({oldLeft:e.substring(0,o),oldRight:e.rightChars(i-1),leftStop:o,rightStop:e.length-i,primaryColor:n.css("color"),backgroundColor:n.css("background-color"),text:t}),r(n),n},g=function(){return $.typer.options.highlightSpeed},l=function(){return $.typer.options.typeSpeed},a=function(){return $.typer.options.clearDelay},p=function(){return $.typer.options.typeDelay},c=function(){return $.typer.options.typerInterval}}(jQuery);

var ACTIVEPROPERTY;
//to add double quotes
var QUOTEDVALUES=["MAPCONFIG MS_ENCRYPTION_KEY","MAPCONFIG MS_ERRORFILE","MAPNAME","MAPSHAPEPATH","MAPSYMBOLSET","CLASSEXPRESSION","CLASSKEYIMAGE","CLASSNAME",
"CLASSSYMBOL","CLASSTEMPLATE","CLASSTEXT","FEATUREITEMS","GRIDLABELFORMAT","JOINCONNECTION","JOINFOOTER","JOINHEADER","JOINNAME","JOINTABLE","JOINTEMPLATE",
"LAYERCONNECTION","LAYERDATA","LAYERFILTER","LAYERFOOTER","LAYERGEOMTRANSFORM","LAYERHEADER","LAYERPLUGIN","LAYERTEMPLATE","LAYERTILEINDEX","LEGENDTEMPLATE",
"OUTPUTFORMATNAME","REFERENCEIMAGE","SYMBOLNAME","STYLEGEOMTRANSFORM","WEBEMPTY","WEBERROR","WEBHEADER","WEBFOOTER","WEBIMAGEPATH",
"WEBIMAGEURL","WEBLOG","WEBMAXTEMPLATE","WEBTEMPLATE","WEBTEMPPATH","LAYERNAME","LAYERLABELITEM","LAYERCLASSITEM"];

//change hex color code to rgb color code 
var COLORELEMENTS=["imagecolor","offsite","outlinecolor","backgroundcolor","color","shadowcolor","transparent"];
 
var LOOKUP={EXTENT:["minx","miny","maxx","maxy"],ANCHORPOINT:["x","y"],SIZE:["x","y"],POINTS:["x","y"],KEYSIZE:["x","y"],KEYSPACING:["x","y"],BACKGROUNDSHADOWSIZE:["x","y"],OFFSET:["x","y"],SHADOWSIZE:["x","y"]};
//to add end tag 
var ENDVALUES=["POINTS"];
 
var PROPSMAP={'Map': MAPPROPERTIES, 'Layer':LAYERPROPERTIES,'Projection':PROJECTIONPROPERTIES,'Web':WEBPROPERTIES,'Legend':LEGENDPROPERTIES,'Scalebar':SCALEBARPROPERTIES,
              'Querymap': QUERYMAPPROPERIES, 'Outputformat':OUTPUTFORMATPROPERTIES,'Reference':REFERENCEPROPERTIES,'Class':CLASSPROPERTIES,'Label':LABELPROPERTIES,
              'Symbol':SYMBOLPROPERTIES,'Feature':FEATUREPROPERTIES,'Style': STYLEPROPERTIES,'Cluster':CLUSTERPROPERTIES,'Composite':COMPSITEPROPERTIES,
              'Grid':GRIDPROPERTIES,'Join':JOINPROPERTIES,'Leader':LEADERPROPERTIES};


 Array.prototype.move = function (old_index, new_index) {
   if (new_index >= this.length) {
       var k = new_index - this.length;
       while ((k--) + 1) {
           this.push(undefined);
       }
   }
   this.splice(new_index, 0, this.splice(old_index, 1)[0]);
   return this; // for testing purposes
  };

function showTab() {
   // hide all other tabs
   $("#content p").hide();
   $("#tabs li").removeClass("current");

   // show current tab
   $("#Group1_content").show();
   $("a#Group1.tab").parent().addClass("current");
}

function addPropertyPattern(arrayVal,name)
{
	 var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");
       addTab("1",arrayVal,"0",arrayVal.length,name);
       showTab();
	
}

function addPropertyValidation(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");
       addTab("1",arrayVal,"0",arrayVal.length,name);
       showTab();
   }
function addPropertyMetaData(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");
       addTab("1",arrayVal,"0",arrayVal.length,name);
       showTab();
   }
   function addPropertyFeature(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0",arrayVal.length,name);
       showTab();
   }

function addPropertyProjection(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0",arrayVal.length,name);
       showTab();
   }


function addPropertyOutputFormat(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0","6",name);
       addTab("2",arrayVal,"6",arrayVal.length,name);
       showTab();
   }
  function addPropertySymbols(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0","7",name);
       addTab("2",arrayVal,"7",arrayVal.length,name);
       showTab();
   }
  function addPropertyLeader(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0",arrayVal.length,name);
       showTab();
   }
  function addPropertyJoin(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0",arrayVal.length,name);
       showTab();
   }
  function addPropertyGrid(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0","6",name);
       addTab("2",arrayVal,"6",arrayVal.length,name);
       showTab();
   }
  function addPropertyComposite(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0",arrayVal.length,name);
       showTab();
   }
  function addPropertyCuster(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0",arrayVal.length,name);
       showTab();
   }
  function addPropertyStyle(arrayVal,name)
   {
       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0","10",name);
       addTab("2",arrayVal,"10","20",name);
       addTab("3",arrayVal,"20",arrayVal.length,name);
       showTab();
   }

  function addPropertyLabel(arrayVal,name)
   {
       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0","10",name);
       addTab("2",arrayVal,"10","20",name);
       addTab("3",arrayVal,"20","30",name);
       addTab("4",arrayVal,"30",arrayVal.length,name);
       showTab();
   }
  function addPropertyClass(arrayVal,name)
   {
       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0",arrayVal.length,name);
       showTab();
   }
  function addPropertyReference(arrayVal,name)
   {
       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0","8",name);
       addTab("2",arrayVal,"8",arrayVal.length,name);
       showTab();
   }
  function addPropertyQueryMap(arrayVal,name)
   {
       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0",arrayVal.length,name);
       showTab();
   }
  function addPropertyScalebar(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0","8",name);
       addTab("2",arrayVal,"8",arrayVal.length,name);
       showTab();
   }
   function addPropertyLegend(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0","8",name);
       addTab("2",arrayVal,"8",arrayVal.length,name);
       showTab();
   }
   function addPropertyWeb(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0","10",name);
       addTab("2",arrayVal,"10",arrayVal.length,name);
       showTab();
   }

  function addPropertyLayer(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0","10",name);
       addTab("2",arrayVal,"10","14",name);
       addTab("3",arrayVal,"14","23",name);
       addTab("4",arrayVal,"23","32",name);
       addTab("5",arrayVal,"32","42",name);
       addTab("6",arrayVal,"42",arrayVal.length,name);
       showTab();
   }

  function addPropertyMap(arrayVal,name)
   {

       var contentdiv = d3.select(".elmprops").append("div").attr("class", "wrapper");
       contentdiv.append("ul").attr("id", "tabs");
       contentdiv.append("div").attr("id", "content");

       addTab("1",arrayVal,"0","10",name);
       addTab("2",arrayVal,"10","20",name);
       addTab("3",arrayVal,"20","27",name);
       addTab("4",arrayVal,"27",arrayVal.length,name);
       showTab();
   }

     function isUpperCase(str) {
  		 return str === str.toUpperCase();
	}
	function startsWith(str, word) {
  		 return str.lastIndexOf(word, 0) === 0;
	}

	//mandatory check
	function mandatorycheck() {
		var fields = document.getElementsByClassName('item-required');
		// var alertstr="Please check the fields and modify.\n";
		$.each(fields, function(i, field) {
		if (!field.value)
			// alertstr+=field.id + "\n";
			if (!(document.getElementById("span_" + field.id))) {
			$( "<span class='errmsg' id='span_"+field.id+"'>* Required</span>" ).insertAfter( field );
			}
		});
		// alert(alertstr);
	}
	//onkeyblur function
	function callBlur(elmid,validstr){
		if(validstr=="SPACESPLITEVEN"){
			if (document.getElementById(elmid)) {
				var elmtval=document.getElementById(elmid).value.trim();
				var splitstr=elmtval.split(" ");
				if(splitstr.length%2!=0){
					// document.getElementById(elmid).value="";
					if (!(document.getElementById("span_" + elmid))) {
						$( "<span class='errmsg' id='span_"+elmid+"'>* Invalid</span>" ).insertAfter( document.getElementById(elmid) );
					}
				}
			}
		}
	}
//Validation	
function Validate(elmid) {
 	var validstr="";
	var tmparr=PROPSMAP[ACTIVEPROPERTY]; 
	var tmpname=tmparr.name;

	for (var q = 0; q < tmparr.length; q++) {
		if(tmparr[q].id==elmid){
			validstr=tmparr[q].vstring;
		}
	}

	if (document.getElementById(elmid)) {
		// remove error message if exists already  
		if (document.getElementById("span_" + elmid)) {
			var spanelmt = document.getElementById("span_" + elmid);
			spanelmt.parentNode.removeChild(spanelmt);
		}

		var $th = document.getElementById(elmid);
		
		var regExp = "";
		var maxlen = "";
		var maxval = "";
		// var reg="^\\-?\\d*\\.?\\d*$";
		if (validstr.regex) {
			regExp = new RegExp(validstr.regex);
			if(regExp.test($th.value)==false){
   				$th.value = $th.value.substring(0,$th.value.length - 1);
  			}
		}
		
		if (validstr.onblurfuc) {
			$th.setAttribute( "onblur" , "callBlur('"+elmid+"','" + validstr.onblurfuc + "')" );
		}
			
		if (validstr.maxchars) {
			maxlen = validstr.maxchars;
			$th.setAttribute( "maxLength" , maxlen );
		}
		if (validstr.maxval) {
			maxval = validstr.maxval;
			if($th.value>parseInt(maxval)){$th.value=maxval;}
		}
	}
}
// function ValidatePaste(element) {
    // setTimeout(function(){
    	// var input=element.value.replace(/[^\w\s]/gi,'');
        // element.value=input;
    // }, 0);
// }
//Validation onload
function validateonload(arr) {
} 
function onchanged(){
 	if(document.getElementById('labelformat').selectedIndex==4){
 		document.getElementById('cformatstring').style.display="block";
 	}else{
 		document.getElementById('cformatstring').style.display="none";
 		document.getElementById('cformatstring').value="";
 	}
} 
function addTab(val, arrContent, initialval, limitval, contentVal) {

	var name = "Group" + val;

	// to remove
	$("#" + name).remove();

	// hide other tabs
	$("#tabs li").removeClass("current");
	$("#content p").hide();
	// add new tab and related content
	$("#tabs").append("<li class='current'><a class='tab nojump' id='" + name + "' href='javascript:void(0);'>" + name + "</a></li>");

	$("#content").append("<p class='content" + val + "' id='" + name + "_content'>" + "" + "</p>");

	// set the newly added tab as current
	$("#" + name + "_content").show();

	//loading table

	var table = d3.select(".content" + val).append("table").attr("class", "table table-bordered table-hover");

	var tbody = table.append("tbody");

	var tr = tbody.selectAll("tr").data(dummy);

	//get either saved properties or default values
	var loadArr = "";
	var propsArr = "";
	for (var l = 0; l < data.length; l++) {
		if (data[l].name == contentVal) {
			propsArr = data[l].properties;
		}
	}
	/*Load splitted once....*/

	if (propsArr != undefined) {
		for (var i in propsArr) {
			//CONFIG ^
			if (startsWith(i, "CONFIG")) {
				var newid = i.replace(" ", "^");
				if (!( newid in propsArr)) {
					propsArr[newid] = propsArr[i];
					delete propsArr[i];
				}
			}

			//header
			if (i == "header") {
				var hid = "*" + i;
				propsArr[hid] = propsArr[i];
				delete propsArr[i];
			}
			//LOOKUP ARRAY VALUES $ &
			if (isUpperCase(i)) {
				if (LOOKUP[i]) {
					var splitkeyarr = LOOKUP[i];
					var splitvaluearr = propsArr[i].split(' ');
					for (var t = 0; t < splitkeyarr.length; t++) {
						var keyVal = "$" + i + "&" + (splitkeyarr[t]);
						propsArr[keyVal] = splitvaluearr[t];
					}
				}
			}

		}
	}

	if (propsArr != undefined) {
		loadArr = propsArr;
	} 
	else {
		// loadArr = DEFAULTVAL[ACTIVEPROPERTY];
	}
	
	// console.log(loadArr);


	if(ACTIVEPROPERTY=="MetaData" || ACTIVEPROPERTY=="Validation"){
		var tempstring=ACTIVEPROPERTY.toLowerCase();
		if( (propsArr==undefined) || jQuery.isEmptyObject( propsArr ) ){
			tr.enter().append("tr");
        	tr.append('td').append("input").attr("type", "textbox").attr("class", tempstring).attr("id", tempstring+"key1").attr("onkeyup", "keypressed('" + tempstring + "key1')");
        	tr.append('td').append("input").attr("type", "textbox").attr("id", tempstring + "value1").attr("onkeyup", "keypressed('" + tempstring + "value1')");
        	tr.exit().remove();
			
		}else{
			var tempvar=1;
			for (var key in propsArr) {
				tr.enter().append("tr");
        		tr.append('td').append("input").attr("type", "textbox").attr("class", tempstring).attr("id", tempstring + "key"+tempvar).attr("value", key).attr("onkeyup", "keypressed('" + tempstring + "key" + tempvar + "')");
        		tr.append('td').append("input").attr("type", "textbox").attr("id", tempstring + "value"+tempvar).attr("value", propsArr[key]).attr("onkeyup", "keypressed('" + tempstring + "value" + tempvar + "')");
        		tr.exit().remove();
        		tempvar++;
			}
       }
       tr.enter().append("tr").attr("class", "tr" + tempstring);
       tr.append('td').append("input").attr("onclick","appendText('" + tempstring + "')").attr("type", "button").attr("value", "Add more");
       tr.exit().remove();
	}else if(ACTIVEPROPERTY=="Projection" || ACTIVEPROPERTY=="Pattern"){
		var tempstring=ACTIVEPROPERTY.toLowerCase();
		if( (propsArr==undefined) || jQuery.isEmptyObject( propsArr ) ){
			tr.enter().append("tr");
        	tr.attr("colspan","2").append('td').append("input").attr("type", "textbox").attr("class", tempstring).attr("id", tempstring+"txt1").attr("onkeyup", "keypressed('" + tempstring + "txt1')");
        	tr.exit().remove();
		}else{
			var tmpcount=1;
			for (var key in propsArr) {
				tr.enter().append("tr");
        		tr.attr("colspan","2").append('td').append("input").attr("type", "textbox").attr("class", tempstring).attr("id",tempstring + "txt"+tmpcount).attr("value", propsArr[key]).attr("onkeyup", "keypressed('" + tempstring + "txt" + tmpcount + "')");
        		tr.exit().remove();
        		tmpcount++;
        	}
        }
        	tr.enter().append("tr").attr("class", "tr" + tempstring);
        	tr.append('td').append("input").attr("onclick","appendTB('" + tempstring + "')").attr("type", "button").attr("value", "Add more");
        	tr.exit().remove();
	}else{
		
	for (var i = initialval; i < limitval; i++) {

		tr.enter().append("tr");
		var values = arrContent[i];
		var tempid = values.id;
		var temptitle="";
		if(values.tooltip){temptitle=values.tooltip;}
		
		var loadVal = "";
		if ( loadArr[tempid]!= undefined) {
			loadVal = loadArr[tempid];
		}

		//append label
		if (values.type == "label") {
			tr.style("height", "20px").style("font-size", "15px").append('td').style("padding", "0px").style("background", "#EEEEEE").attr("colspan", "2").style("text-align", "center")
												.append("span").text(values.title).style("color", "black");
		} else {
			tr.append('td').append("span").text(values.title);
		}

		
		if (values.type == "textbox") {
			if(values.id.toUpperCase()!="CFORMATSTRING"){
				tr.append('td').append("input").attr("type", "textbox").attr("id", values.id).attr("name", values.id).attr("value", loadVal)
						.attr("data-toggle","tooltip").attr("title",temptitle)
						// .attr("onpaste","ValidatePaste(this)")
						// .attr("class","item-required")onpaste="return false;"
						// .attr("onblur", "callBlur('"+tempid+"')")
						.attr("onkeyup", "Validate('"+tempid+"')");
			}else{
				tr.append('td').append("input").attr("type", "textbox").attr("id", values.id).attr("name", values.id).attr("value", loadVal)
						.attr("data-toggle","tooltip").attr("title",temptitle).attr("onkeyup", "Validate('"+tempid+"')").attr("style","display:none;");		
			}
			$('[data-toggle="tooltip"]').tooltip({placement: "right"});
												
		} else if (values.type == "dropdown") {
			var options = values.doptions.split('|');
			
			var trtemp = tr.append('td').append("select").attr("id", values.id);
			//enable cformat string on labelformat change
			if(values.id.toUpperCase()=="LABELFORMAT"){trtemp.attr("onchange","onchanged()");}

			trtemp.append("option").attr("disabled", "true").append("span").text("select");
			
			for (var k = 0; k < options.length; k++) {
				if (loadVal.toUpperCase( )== options[k].toUpperCase()) {
					trtemp.append("option").attr("value", options[k]).attr("selected", "selected").append("span").text(options[k]);
				} else {
					trtemp.append("option").attr("value", options[k]).append("span").text(options[k]);
				}
			}
		} else if (values.type == "radio") {
			var trtemp = tr.append('td');
			var options = values.doptions.split('|');
			for (var t = 0; t < options.length; t++) {
				if (loadVal.toUpperCase() == options[t].toUpperCase()) {
					trtemp.append("input").attr("checked", "checked").attr("type", "radio").style("width", "auto").attr("value", options[t]).attr("name", values.id).attr("id", options[t]);
				} else {
					trtemp.append("input").attr("type", "radio").style("width", "auto").attr("value", options[t]).attr("name", values.id).attr("id", options[t]);
				}
				trtemp.append("label").attr("class", "lbl").attr("for", options[t]).text(options[t]);
			}
		} else if (values.type == "colorpicker") {

			tr.append('td').append("input").attr("type", "text").attr("id", values.id).attr("class", "colorpickr").attr("value", loadVal);
			$('.colorpickr').colorpicker();
		} else if (values.type == "switch") {
			if (loadVal.toUpperCase() == "ON") {
				tr.append('td').append("input").attr("type", "checkbox").attr("id", values.id).attr("checked", "true").attr("class", "chk");
			} else {
				tr.append('td').append("input").attr("type", "checkbox").attr("id", values.id).attr("class", "chk");
			}
			$('.chk').bootstrapSwitch();
		}
		tr.exit().remove();
		
		//appending add more button
		if(values.id.toUpperCase()=="FORMATOPTION" || values.id.toUpperCase()=="PROCESSING"){
			var idstr="";var trstr="";
			(values.id.toUpperCase()=="PROCESSING")?idstr="processing":idstr="formatoption";
			trstr="tr"+idstr;
			tr.enter().append("tr").attr("class", trstr);
        	tr.append('td').attr("colspan","2").append("input").attr("onclick","appendtxt('" + idstr + "','')").attr("type", "button").attr("value", "Add more");
        	tr.exit().remove();
		}
		
		
	}			

	}
	//load multiple formatoption/processing if value exists
	if((ACTIVEPROPERTY.toUpperCase()=="LAYER" || ACTIVEPROPERTY.toUpperCase()=="OUTPUTFORMAT") && val==2){
		var strid="";
		(ACTIVEPROPERTY.toUpperCase()=="LAYER")?strid="processing":strid="formatoption";
		for (var key in propsArr) {
		    if(startsWith(key.toLowerCase(), strid) && key.toLowerCase()!=strid){
		    	appendtxt(strid,propsArr[key]);
		    }
		}
	}

	
	//hide/display cformatstring and load values
	var optionsArr=["DD","DDMM","DDMMSS","C format string"];
	if(ACTIVEPROPERTY.toUpperCase()=="GRID"){
		for (var key in propsArr) {
		    if(key.toUpperCase()=="LABELFORMAT"){
		    	if(propsArr[key]!=undefined && propsArr[key]!="" && optionsArr.indexOf(propsArr[key]) < 0){
		    		if(document.getElementById('cformatstring')){
						document.getElementById('cformatstring').style.display="block";
						document.getElementById('cformatstring').value=propsArr[key];
						//to set selected value for the dropdown
						document.getElementById('labelformat').selectedIndex=4;
					}
				}
		    }
		}
	}

}
function appendtxt(classname,val) {
	var container="tr" + classname;
    var numItems = $('.'+classname).length+1;
    $( "<tr><td></td><td><input type='text' value='" + val + "' class='" + classname + "' id='" + classname + numItems + "'></td></tr>" )
    		.insertBefore( $( "." + container ) );
}

function appendText(classname) {
	var container="tr" + classname;
    var numItems = $('.'+classname).length+1;
    var kp="";
    (classname.toLowerCase()=="validation")?kp="":kp="onkeyup=keypressed('" + classname +"key"+numItems+ "')";
    var vp="";
    (classname.toLowerCase()=="validation")?vp="":vp="onkeyup=keypressed('" + classname +"value"+numItems+ "')";
    $( "<tr><td><input type='text' class='" + classname + "' id='" + classname + "key" + numItems + "' " + kp +"></td><td><input type='text' id='" + classname + "value" + numItems + "' " + vp +"></td></tr>" ).insertBefore( $( "." + container ) );
}

function appendTB(classname) {
	var container="tr" + classname;
    var numItems = $('.'+classname).length+1;
    var pp="onkeyup=keypressed('" + classname +"txt"+numItems+ "')";
    $( "<tr colspan='2'><td><input type='text' class='" + classname + "' id='" + classname + "txt" + numItems + "'" + pp+ "></td></tr>" ).insertBefore( $( "." + container ) );
}

function keypressed(elmtid){
	if (document.getElementById(elmtid)) {
		var th = document.getElementById(elmtid);
		var regExp = new RegExp("^[A-Za-z\\d\\s\-_]+$");
		if(regExp.test(th.value)==false){
   			th.value = th.value.substring(0,th.value.length - 1);
  		}
  	}
}

var pactive=false;
d3.selection.prototype.actionBuilder = function(o, f) {


  var body, clipped, clipper, d, defaults, height, holder, optionsList, parent, positions, sets, voronois, width;

  if (arguments.length < 2) {
    f = o;
  }
  body = d3.select('body');

  defaults = {
    type: "tooltip",
    text: "You need to pass in a string for the text value",
    title: "Title value",
    content: "Content examples",
    detection: "shape",
    placement: "fixed",
    gravity: "right",
    position: [100, 100],
    displacement: [0, 0],
    mousemove: false
  };
  optionsList = [];
  voronois = [];
  this.each(function(d, i) {

    var opt;
    opt = f.apply(this, arguments);

    optionsList.push(opt);

  });

  return this.each(function(d, i) {
    var el, move_tip, options;
    options = optionsList[i];
    el = d3.select(this);
    move_tip = function(selection) {
      var center, offsets;
      center = [0, 0];
      if (options.placement === "mouse") {
        center = d3.mouse(body.node());
      } else {
        offsets = this.ownerSVGElement.getBoundingClientRect();
        center[0] = offsets.left;
        center[1] = offsets.top;
        center[0] += options.position[0];
        center[1] += options.position[1];
        center[0] += window.scrollX;
        center[1] += window.scrollY;
      }
      center[0] += options.displacement[0];
      center[1] += options.displacement[1];
      return selection.style("left", "" + center[0] + "px").style("top", "" + center[1] + "px").style("display", "block");
    };
    el.on("click", function() {

      
      if(!options) return;
      if(pactive) return;

      ACTIVEPROPERTY=options.nodetype;

      var tip;
      tip = body.append("div").classed(options.type, true).classed(options.gravity, true).classed('fade', true).style("display", "none");




         if(options.nodetype === "Map"){
         	 buildFrame(tip);
         	 addActionBar(buildMapActions(),"Map",d);
         	 addPropertyMap(MAPPROPERTIES,d.name);
         	 pactive=true;

         }else if(options.nodetype === "Layer"){
         	 buildFrame(tip);
         	 addActionBar(buildLayerActions(),"Layer",d);
         	 addPropertyLayer(LAYERPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Class"){
         	 buildFrame(tip);
         	 addActionBar(buildClassActions(),"Class",d);
         	 addPropertyClass(CLASSPROPERTIES,d.name);
         	 pactive=true;;
         }else if(options.nodetype === "Label"){

         	 buildFrame(tip);
         	 addActionBar(buildLblBdrActions(),"Label",d);
         	 addPropertyLabel(LABELPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Leader"){
         	 buildFrame(tip);
         	 addActionBar(buildLblBdrActions(),"Leader",d);
         	 addPropertyLeader(LEADERPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Web"){
         	 buildFrame(tip);
         	 addActionBar(buildWebActions(),"Web",d);
         	 addPropertyWeb(WEBPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Legend"){
         	 buildFrame(tip);
         	 addActionBar(buildScaleLegendActions(),"Legend",d);
         	 addPropertyWeb(LEGENDPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Scalebar"){
         	 buildFrame(tip);
         	 addActionBar(buildScaleLegendActions(),"Scalebar",d);
         	 addPropertyScalebar(SCALEBARPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Projection"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Projection",d);
         	 addPropertyProjection(PROJECTIONPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Outputformat"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Outputformat",d);
         	 addPropertyOutputFormat(OUTPUTFORMATPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Reference"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Reference",d);
         	 addPropertyReference(REFERENCEPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Querymap"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Querymap",d);
         	 addPropertyQueryMap(QUERYMAPPROPERIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Cluster"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Cluster",d);
         	 addPropertyCuster(CLUSTERPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Composite"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Composite",d);
         	 addPropertyComposite(COMPSITEPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Feature"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Feature",d);
         	 addPropertyFeature(FEATUREPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Grid"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Grid",d);
         	 addPropertyGrid(GRIDPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Join"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Join",d);
         	 addPropertyJoin(JOINPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Symbol"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Symbol",d);
         	 addPropertySymbols(SYMBOLPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "Style"){
         	 buildFrame(tip);
         	 addActionBar(buildStyleActions(),"Style",d);
         	 addPropertyStyle(STYLEPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "MetaData"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Metadata",d);
         	 addPropertyMetaData({},d.name);
         	 pactive=true;
         }else if(options.nodetype === "Validation"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Validation",d);
         	 addPropertyValidation({},d.name);
         	 pactive=true;
         }else if(options.nodetype === "Pattern"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Pattern",d);
         	 addPropertyPattern({},d.name);
         	 pactive=true;
         }
         
        

      if(pactive){
      	tip.append("div").attr("class", "arrow").attr("style", "top:61px");


      }
      setTimeout(function() {
        return tip.classed('in', true);

      }, 10);


      return tip.style("display", "").call(move_tip.bind(this));



    });

	function getNodePropsValues(key) {
		var result = {};
		if(key == "MetaData" || key == "Validation") {
			var tmpstring=key.toLowerCase();
			var keycount = $('.'+tmpstring).length;	
			for (var k = 1; k <= keycount; k++) {
				var keyelm="";var valueelm="";
				if (document.getElementById(tmpstring + "key" + k)) {
						keyelm = document.getElementById(tmpstring + "key" + k).value;
				}
				if (document.getElementById(tmpstring + "value" + k)) {
						valueelm = document.getElementById(tmpstring + "value" + k).value;
				}
				if(keyelm!=null && keyelm!="" && valueelm!=null && valueelm!=""){
					result[keyelm] = valueelm;
				}
			}
		}else  if (key == "Projection" || key == "Pattern") {
			var tmpstring=key.toLowerCase();
			var projkeycount = $('.'+tmpstring).length;	
			for (var t = 1; t <= projkeycount; t++) {
				var projkeyelm=tmpstring+"txt" + t;
				var projvalueelm="";
				if (document.getElementById(tmpstring+"txt" + t)) {
						projvalueelm = document.getElementById(tmpstring+"txt" + t).value;
				}
				if(projkeyelm!=null && projkeyelm!="" && projvalueelm!=null && projvalueelm!=""){
					result[projkeyelm] = projvalueelm;
				}
			}
		}else {
			var p = PROPSMAP[key];
			
			for (var q = 0; q < p.length; q++) {

				var elm = p[q];
				var id = elm.id;

				if (id.charAt(0) != "$") {

					var val = "";
					if (elm.type == "textbox") {
						if (document.getElementById(id)) {
							val = document.getElementById(id).value;
						}
						
					}else if(elm.type == "colorpicker"){
						if (document.getElementById(id)) {
							var tmpval = document.getElementById(id).value;
							if(tmpval!=""){
								val="'" + tmpval + "'";
							}
						}
					}else if(elm.type == "dropdown"){
						if (document.getElementById(id)) {
							var tmpval = document.getElementById(id).value;
							//to check if it gets "choose" value
							if(tmpval!="select"){
								val=tmpval;
							}
						}
					} else if (elm.type == "radio") {
						if ($("input[name='" + id + "']:checked").val()) {
							val = $("input[name='" + id + "']:checked").val();
						}
					} else if (elm.type == "switch") {
						if (document.getElementById(id)) {
							if (document.getElementById(id).checked) {
								val = "on";
							} else {
								// val = "off";
							}
						}
					}

					if (val != "") {
						id = id.replace("*", "");
						id = id.replace("^", " ");
						result[id] = val;
					}
					
					//load data array if multiple formatoption/processing exists
					if(id.toUpperCase()=="FORMATOPTION" || id.toUpperCase()=="PROCESSING"){
						var idcreated=id.toLowerCase();
						var focount = $('.'+idcreated).length;
						if(focount>0){
							for (var c = 1; c <= focount; c++) {
								var tempval="";var tempid=idcreated+c;
								if (document.getElementById(tempid)) {
									tempval = document.getElementById(tempid).value;
									if(tempval!=""){result[tempid] = tempval};
				    			}
							}
						}
					}
						
						
				} else {

					var parentelm = id.substring(id.lastIndexOf("$") + 1, id.lastIndexOf("&"));
					var tempval;
					if (document.getElementById(id)) {
						tempval = document.getElementById(id).value;
				    }
					if (tempval != "") {
						if ( parentelm in result) {
							result[parentelm] += " " + tempval;
						} else {
							result[parentelm] = tempval;
						}
					}
				}
				
			}
		} 
		// console.log(result);
		//assign value from cformatstring to labelformat
		if(result['labelformat']!=undefined && result['labelformat']=="C format string" && result['cformatstring']!=undefined){
			result['labelformat']=result['cformatstring'];
			delete result['cformatstring'];
		}
		
		return result;
	}

    function updateProperty()
    {
    	if(ACTIVEPROPERTY){
    		var props = getNodePropsValues(ACTIVEPROPERTY);
            d['properties'] = props;
    	}
    }


    function removePopup()
    {

// mandatorycheck();

      updateProperty();

      var pop;
      pop = d3.selectAll("." + options.type).classed('in', false);
      pactive=false;
      prepareTree();
      return setTimeout(function() {
        return pop.remove();
      }, 150);
         
    }

   function buildFrame(tip){

       tip.attr("style","max-width:none");
       var inner;
       d3.selectAll("p").classed('elmprops', true).remove();

       inner = tip.append("div").attr("class", "popover-inner");
       var title=inner.append("div").attr("class", "popover-title");
       title.append("div").attr("class", "glyphicon glyphicon-remove popover-close").on("click",function(){
       	 removePopup();
       });

       //added
       inner.append("div").attr("class", "popover-tablist");
       inner.append("div").attr("class", "popover-content").append("p").attr("class", "elmprops");
      

   }

   function printObject(object)
   {

   		var output = '';
		for (var property in object) {
		  output += property + ': ' + object[property]+'; ';
		}
		console.log(object);
   }

   function addActionBar(actions,ptype,element)
   {

   	 var current=element.name;


   	 d3.select(".popover-title").append("div").attr("class","action_bar");



   	 	if(current!='Map'){
	   	 	d3.select(".action_bar").append("div").attr("class","btn btn-primary btn-circle action_Moveup glyphicon glyphicon-arrow-up").on("click",function (d,q){

	   	 		 moveUpDown(element,false);
	   	 		 removePopup();
	   	 	});
	   	 	d3.select(".action_bar").append("div").attr("class","btn btn-primary btn-circle action_Movedown glyphicon glyphicon-arrow-down").on("click",function (d,q){

	   	 		 moveUpDown(element,true);
	   	 		 removePopup();

	   	 	});
	   	 	d3.select(".action_bar").append("div").attr("class","btn btn-danger btn-circle action_Delete glyphicon glyphicon-remove").on("click",function (d,q){





						if (element.parent && element.parent.children) {

							removeFromData(element.name);
							buildTreeData();
			                prepareTree();
			                ACTIVEPROPERTY=null;
						    removePopup();


						}



	   	 		  return false;

	   	 	});
	   	 	d3.select(".action_bar").append("div").attr("class","action_Spacer");
   	 	}

   	 	for(i=0;i<actions.length;i++){
   	    	var p=d3.select(".action_bar").append("div").html(actions[i].charAt(0));
   	    	p.append("span").attr("class","mtooltiptext").html(actions[i]);
   	    	p.attr("class","mtooltip btn-circle action_"+actions[i]).on("click",function (d,q)
   	    	{
   	    		var t=d3.select(this).attr("class").split("_");
                 removePopup();
   	    		 addNode(t[1],current,t[1],ptype);


   	    	}
   	    	);
   	 	}


   }
   function moveUpDown(element,dir)
   {
   	             var nm=element.name;
	   	 		 var pname=element.parent==null?null:element.parent.name;
	   	 		 var pos=-1;

	   	 		 for(var j=0;j<data.length;j++)
	   	 		 {

	   	 		 	if(data[j].parent.name==pname){
	   	 		 		pos++;

	   	 		 	}
	   	 		 	if(data[j].name==nm && data[j].parent.name==pname){
	   	 		 		pos=j;break;
	   	 		 	}

	   	 		 }
	   	 		 if(pos>-1 && ((dir && pos< data.length-1) || (!dir && pos>0)) ){

	   	 		 		dir?data.move(pos,pos+1):data.move(pos,pos-1);
	   	 		 		d3.selectAll("svg").remove();
	   	 		        buildTreeData();
			            prepareTree();
				 }
   }

   function buildNoneActions()
   {
   	 var noneactions=[];
   	 return noneactions;

   }

   function buildMapActions()
   {
   	  var mapActions=['Projection',"Web","Legend","Scalebar","Outputformat","Querymap","Reference","Layer","Symbol"];

   	  return mapActions;

   }
   function buildLayerActions()
   {
   	  var layerActions=["Class","Cluster","Composite","Feature","Grid","Join","Projection","MetaData","Validation"];

   	  return layerActions;

   }
   function buildClassActions()
   {
   	  var classActions=["Label","Leader","Style","MetaData","Validation"];

   	  return classActions;

   }
   function buildLblBdrActions()
   {
   	  var labelLdrActions=["Style"];

   	  return labelLdrActions;

   }

   function buildScaleLegendActions()
   {
   	  return ["Label"];

   }
   function buildWebActions()
   {
   	  var webActions=["MetaData","Validation"];

   	  return webActions;

   }
   
   function buildStyleActions()
   {
   	
   	   var styleActions=["Pattern"];

   	  return styleActions;
   }


  });
};

function hexToRgb(hex){
	hex = hex.replace(/['"]/g,"");
	
	if(hex.charAt(0)!="#")return hex;
	
	hex = hex.replace(/[#]/g,"");
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + " " + g + " " + b;
}

var DATABUFFER = "";
         var DEPTH = 0;
         function str(obj) {

             var child = obj.children;
             var props = obj.properties;

             for (var j = 0; j < DEPTH; j++) {

                 DATABUFFER += "\t";
             }
             DATABUFFER += obj.type.toUpperCase() + "\n";
             if (props != null) {
                 DEPTH++;
                 for (var k in props) {
         
					 var tempstr="";
                     for (var j = 0; j < DEPTH; j++) {
                         tempstr += "\t";
                     }
                           
                     //code to add end tag for values in endvalues array like points
                     if(ENDVALUES.indexOf(k.toUpperCase()) > -1){
                     	DATABUFFER += tempstr + k.toUpperCase() + "\n";
                     	DATABUFFER += tempstr + "\t" + " " + props[k] + "\n";
                     	DATABUFFER += tempstr + "END" + "\n";
                     }else{
                     	
                     	var quotedelement= obj.type.toUpperCase().trim() + k.toUpperCase().trim() ;
                     			
                     	if (k.toUpperCase().substring(0, 13) == "PROJECTIONTXT" || k.toUpperCase().substring(0, 10) == "PATTERNTXT") 
                     	{
                     			DATABUFFER += tempstr + '"' + props[k] + '"\n';
                     		
                     	}else if (QUOTEDVALUES.indexOf(quotedelement)>-1) 
                     	{
                     			var val="";
                     			if(quotedelement.toUpperCase()=="CLASSEXPRESSION" || quotedelement.toUpperCase()=="LAYERFILTER" || quotedelement.toUpperCase()=="CLASSTEXT" || quotedelement.toUpperCase()=="STYLEGEOMTRANSFORM"){
                     				if( (props[k].startsWith("(")&&props[k].endsWith(")")) || (props[k].startsWith("\/")&&props[k].endsWith("\/")) || (props[k].startsWith("{")&&props[k].endsWith("}")) ){
                     					val=props[k];
                     				}else{
                     					val='"'+ props[k] + '"';
                     				}
                     			}else{
                     				val='"'+ props[k] + '"';
                     			}
                     			DATABUFFER += tempstr + k.toUpperCase() + ' ' + val + '\n';
                     			
                     	}else{
                     			var key,val;

                     			//------- add double quotes if there is a space or if it is a child of metadata/validation
                     			( (k.indexOf(" ")>-1 && k.toUpperCase().substring(0, 6)!="CONFIG") || obj.type.toUpperCase()=="METADATA" || obj.type.toUpperCase()=="VALIDATION")?key='"'+ k + '"':key=k; 
                     			( (props[k].indexOf(" ")>-1 && k.toUpperCase()!="EXPRESSION" && (LOOKUP[k])==null) || obj.type.toUpperCase()=="GRID"  || obj.type.toUpperCase()=="METADATA" || obj.type.toUpperCase()=="VALIDATION")?val='"'+ props[k] + '"':val=props[k];
                     			
                     			//-----------replace integer and add double quotes 
                     			if (startsWith(key.toUpperCase(), "FORMATOPTION") || startsWith(key.toUpperCase(), "PROCESSING")) {
                 					key = key.replace(/[0-9]/g, '');
                 					val='"'+ props[k] + '"';
                 				}
                 	
                 				//change hexadecimal color code to rgb
                 				if(COLORELEMENTS.indexOf(k)>-1){
                     				val=hexToRgb(props[k]);
                     			}
                     		   
								                		
                     			DATABUFFER += tempstr + key.toUpperCase() + " " + val + "\n";
                     		
                     	}
                     }
                 }
                DEPTH--;
             }

             if (child != null) {
                 DEPTH++;
                 for (var i = 0; i < child.length; i++) {

                     str(child[i]);

                 }
                  DEPTH--;
             }


             for (var j = 0; j < DEPTH; j++) {

                 DATABUFFER += "\t";
             }

             DATABUFFER += "END" + "\n";

         }
         function generateMapFile() {
         	// d.removePopup();
         	   DATABUFFER = "#Mapserver Mapfile - Generated by Maptell Crowmap\n#For more information contact http://www.maptell.com/crowmap\n";
               DEPTH = 0;
               str(data[0]);
             console.log(DATABUFFER);
         	return DATABUFFER;
         }

         function saveFile() {
  window.URL = window.URL || window.webkitURL ;

  var prevLink = dlnkplace.querySelector('a');
  if (prevLink) {
    window.URL.revokeObjectURL(prevLink.href);
    dlnkplace.innerHTML = '';
  }

  var blb = new Blob([generateMapFile()], {type: MIME_TYPE});

  var a = document.createElement('a');
  a.download = filesaver.querySelector('input[type="text"]').value;
  a.href = window.URL.createObjectURL(blb);
  a.setAttribute("class","btn btn-warning");
  a.textContent = 'Download ';
  a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(':');

  var sp = document.createElement('span');
  a.appendChild(sp);
  sp.setAttribute("class","glyphicon glyphicon-download");

  dlnkplace.appendChild(a);

  a.onclick = function(e) {
    if ('disabled' in this.dataset) {
      return false;
    }

    clearDownload(this,sp);
  };
}

var clearDownload = function(a,sp) {
  a.textContent = 'Done ';
  a.dataset.disabled = true;
  a.setAttribute("class","btn btn-success");
  //appendChild(sp) added
  a.appendChild(sp);
  sp.setAttribute("class","glyphicon glyphicon-thumbs-up");

  //a.classed('btn-warning',false).attr("class","btn-succes");

  //d3.select('span').classed("glyphicon",false).attr("class","glyphicon-thumbs-up");
  // Wait to finish
  setTimeout(function() {
    window.URL.revokeObjectURL(a.href);
  }, 2000);
};



function init()
{
	//ITEMCOUNTER=0;
	buildTreeData();
	prepareTree();

}


function update(source) {

  var color = d3.scale.category10()
    .domain(d3.range(10));

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
	  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 130; });



  // Declare the nodes…
  var node = svg.selectAll("g.node")
	  .data(nodes, function(d) { return d.id || (d.id = ++ITEMCOUNTER); });


	  var grads = svg.append("defs").selectAll("radialGradient")
    .data(nodes)
   .enter()
    .append("radialGradient")
    .attr("gradientUnits", "objectBoundingBox")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", "100%")
    .attr("id", function(d, i) { return "grad" + i; });

    grads.append("stop")
    .attr("offset", "0%")
    .style("stop-color", "white");

grads.append("stop")
    .attr("offset", "100%")
    .style("stop-color",  function(d) { return color(1); });


  // Enter the nodes.
  var nodeEnter = node.enter().append("g")
	  .attr("class", "node")
	  .attr("transform", function(d) {
		  return "translate(" + d.y + "," + d.x + ")"; })
		  .actionBuilder(function(d, i) {
				var r, svg1,g;



				svg1 = d3.select(document.createElement("svg"));
				g = svg1.append("g");
				g.append("rect").attr("width", 20).attr("height", 10);

				return {
					element:d,
					type : "popover",
					nodetype:d.type,
					parent:d.parent,
					title : "Element"+d.name +"(" + d.parent + ")",
					content : svg,
					detection : "shape",
					placement : "fixed",
					gravity : "right",
					position : [0, 0],
					displacement : [10, -63],
					mousemove : false,
					placement : "mouse"
				};
			});




  nodeEnter.append("circle")
	  .attr("r", 10)
	  .style("fill", function(d, i) {
        return "url(#grad" + i + ")";
   });

  nodeEnter.append("text")
	  .attr("x", function(d) {
		  return d.children || d._children ? -13 : 13; })
	  .attr("dy", ".35em")
	  .attr("id",function(d,i){return d.name})
	  .attr("text-anchor", function(d) {
		  return d.children || d._children ? "end" : "start"; })
	  .text(function(d) {var res=getNodeName(d.name); return res==null?d.type: d.type + " (" + res + ")" ; })
	  .style("fill-opacity", 1);

  // Declare the links…
  var link = svg.selectAll("path.link")
	  .data(links, function(d) { return d.target.id; });

  // Enter the links.
  link.enter().insert("path", "g")
	  .attr("class", "link")
	  .attr("d", diagonal);



	  setMaxID();


}
function getNodeName(name){
	for(var k=0;k<data.length;k++){
		if(data[k].name==name){
			if(data[k].properties){
				return data[k].properties.name;
			}		
		}
	}
	return  null;
}

function setMaxID()
{

	  for(var k=0;k<data.length;k++){

	  		var maxval=data[k].code;

	  		if(ITEMCOUNTER<=maxval){


	  			ITEMCOUNTER=maxval+1;
	  		}
	  }



}

function addNode(ntype,parent,title,ptype)
{





	if(ptype==='Map'){

		if(!nodeExists(ntype,ptype) || (nodeExists(ntype,ptype) && ntype =='Layer')  ){
			var name=ntype+ITEMCOUNTER;
			updateNewNode(name,ntype,parent,title,ITEMCOUNTER);
       }else{

       	    alert ( "One " +ntype +" already exists");
       }
	}else if(ptype=='Layer'){


		    var name=ntype+ITEMCOUNTER;
		    updateNewNode(name,ntype,parent,title,ITEMCOUNTER);

	}else if(ptype=='Class'){
		    var name=ntype+ITEMCOUNTER;
		    updateNewNode(name,ntype,parent,title,ITEMCOUNTER);

	}else if(ptype=='Label'){
		    var name=ntype+ITEMCOUNTER;
		    updateNewNode(name,ntype,parent,title,ITEMCOUNTER);
	}else if(ptype=='Leader'){

		    var name=ntype+ITEMCOUNTER;
		    updateNewNode(name,ntype,parent,title,ITEMCOUNTER);
	}else if(ptype=='Scalebar'){

		    var name=ntype+ITEMCOUNTER;
		    updateNewNode(name,ntype,parent,title,ITEMCOUNTER);
	}else if(ptype=='Legend'){

		    var name=ntype+ITEMCOUNTER;
		    updateNewNode(name,ntype,parent,title,ITEMCOUNTER);
	}else if(ptype=='Web'){

		    var name=ntype+ITEMCOUNTER;
		    updateNewNode(name,ntype,parent,title,ITEMCOUNTER);
	}else if(ptype=='Style'){

		    var name=ntype+ITEMCOUNTER;
		    updateNewNode(name,ntype,parent,title,ITEMCOUNTER);
	}

}



function updateNewNode(name,ntype,parent,title,code)
{


	        var cnode= { "name" : name,"title":title, "parent":parent, "type": ntype, "code":code};
			data.push(cnode);
			buildTreeData();
			prepareTree();

}

function nodeExists(ntype,parent)
{
	for(var i=0;i<data.length;i++)
	{
		if(data[i].type===ntype)
		 return true;
	}
	return false;
}

function cleanData()
{
	var tmpdata=[];
	ITEMCOUNTER=0;
	for(var j=0;j<data.length;j++)
	{
		var p;
		//if( typeof data[i].parent = )
		if(data[j].parent==null){
		  p="null";
		}else if( typeof data[j].parent =='object' ){
		  p=data[j].parent.name;
		}else{
			p=data[j].parent;
		}


		var tmprow={"name":data[j].name,"title":data[j].title,"parent":p,"type":data[j].type,"code":data[j].code,"properties":data[j].properties};

		tmpdata.push(tmprow);
	}
	data=tmpdata;


}

function removeFromData(name){
	var index=-1;
	for(var j=0;j<data.length;j++)
	{
		if(data[j].name==name){
			index=j;
		}
	}
	if(index>-1){
		data.splice(index,1);

	}
}


function buildTreeData()
{
	 cleanData();
	 dataMap=null;

	  dataMap = data.reduce(function(map, node) {
			map[node.name] = node;
			return map;
		}, {});

		// create the tree array
	treeData = [];
data.forEach(function(node) {


	// add to parent
	var parent = dataMap[node.parent];
	if (parent) {
		// create child array if it doesn't exist
		(parent.children || (parent.children = []))
			// add node to child array
			.push(node);
	} else {
		// parent is null or missing
		treeData.push(node);
	}
});

}

function prepareTree()
{
	var lcount=0;
	for(var k=0;k< data.length;k++)
	{
		if(data[k].type==="Layer" || data[k].type==="Class"){
			lcount++;
		}
	}
	
	 d3.select("svg").remove();
	 svg = d3.select("body").append("svg")
	.attr("width", width + margin.right + margin.left)
	// .attr("height", height + margin.top + margin.bottom)
	.attr("height", height + (lcount*100) )
    .append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	tree = d3.layout.tree()
	// .size([height , width]);
	.size([height+ (lcount*50), width]);

 	diagonal = d3.svg.diagonal()
	.projection(function(d) { return [d.y, d.x]; });
	root = treeData[0];

    update(root);

}


function removeNode(currenttype,currentname)
{
	var index=-1;
	for(var k=0;k< data.length;k++)
	{

		if(data[k].type===currenttype && data[k].name===currentname){
			index=k;
		}

	}
	if(index>-1){
		data.splice(index,1);
	}

}

function getCurrentIndex(currenttype,currentname)
{

	for(var k=0;k< data.length;k++)
	{

		if(data[k].type===currenttype && data[k].name===currentname){
			return k;
		}

	}
	return -1;

}

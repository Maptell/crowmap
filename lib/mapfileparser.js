/* Copyright (c) 2016-2016 Maptell Geosystems (P) Ltd.
 * Author : Ullas Dastakar
 * Public GNU License.  See http://www.github/Maptell/crowmap/license.txt for the
 * full text of the license. */

Crowmap.MapParser = Crowmap.Base({
	data:null,
	tokens:null,
	response:null,
	counter:0,
	init:function(data)
	{
		
		this.data=data;
	},
	convert:function(){
		
		if(!this.data || this.data.length ==0)return;
        this.tokens=[];
        this.data=this.data.trim();
        
        while(this.data.length>0){
        	var token=this.getToken();
        	
        	
            if(token){
             if(token.startsWith("\"")){
              	token=token.substring(1,token.length);
              	
              }
              if(token.endsWith("\"")){
              	token=token.substring(0,token.length-1);
              	
              }
              if(token.startsWith("\'")){
              	token=token.substring(1,token.length);
              	
              }
              if(token.endsWith("\'")){
              	token=token.substring(0,token.length-1);
              	
              }
              this.tokens.push(token.trim());
              
            }
        }
	   /* var darray=this.data.split("\n");
		for(var k=0;k<darray.length;k++){

			var line= darray[k].trim();
            if(line.startsWith("#"))continue;

			//var tkns=line.match(/\w+|"[^"]+"/g);
			var tkns=line.match(/[a-z#A-Z_\-\.\\\/0-9\(\)\[\]\|\{\},]*|"[^"]+"|'[^']+'|\/[^\/]+\/'/g);
			if(!tkns)continue;
			
			//parse a single line
			for(var i=0;i<tkns.length;i++){

				var token=tkns[i].trim();
				// if(token.startsWith("#"))continue;
				if(token.trim().length==0)continue;
				// console.log("Token:"+token);
				this.tokens.push(token);


			}
		}*/
		 //console.log(JSON.stringify(this.tokens));
		
		return this.parse();
	},
	getToken:function()
	{
		this.data=this.data.trim();
		
		if(this.data.length>0){
			
			var c= this.data.substring(0,1);
			this.data=this.data.substring(1,this.data.length);
			
			if(c=='#'){
				
				var tmp=c;
				do{
					var t= this.data.substring(0,1);
					this.data=this.data.substring(1,this.data.length);
					tmp+=t;
					
				}while(t !='\n' &&  this.data.length>0);
				// console.log(tmp);
				
				return null;
			}else if(c=='\''){
				
				var tok=c;
				do{
					var t= this.data.substring(0,1);
					this.data=this.data.substring(1,this.data.length);
					tok+=t;
					
					
				}while((t !='\r' && t!='\'' ) && this.data.length>0);
				return tok.length>0?tok:null;
				
			}else if(c=='"'){
				
				var tok=c;
				do{
					var t= this.data.substring(0,1);
					this.data=this.data.substring(1,this.data.length);
					tok+=t;
					
					
				}while((t !='\r' && t!='"' ) && this.data.length>0);
				
				return tok.length>0?tok:null;
				
			}else if(c=='('){
				var tok=c;
				var cntflag=true;
				var innerCount=0;
				do{
					var t= this.data.substring(0,1);
					this.data=this.data.substring(1,this.data.length);
					
					tok+=t;
					if(t=='('){
						innerCount++;
						
					}
					if(t==")"){
						innerCount--;
					}
					if(t==')' && innerCount==0){
						cntflag=true;
					}
					
				}while((t !='\r' && t!='\n' && cntflag ) && this.data.length>0);
		
				return tok.length>0?tok:null;
				
			}else{
				
				var tok=c;
				do{
				
					var t= this.data.substring(0,1);
					this.data=this.data.substring(1,this.data.length);
					if(t!='\t' && t!='\n' && t!='\r'){
					  tok+=t;
					}
					
					
				}while((t !='\r' && t!=' ' && t!='\t' && t!='\n' ) &&  this.data.length>0);
				
				return tok.length>0?tok:null;
			}
			
		}
		
	},
	parse:function(){
       
       var properties={};
		
		if(this.tokens.length<2){
			alert("Doesn't look like a proper mapfile");
			return;
		}
		var elm1=this.tokens.shift().trim().toUpperCase();
		
		
		if(elm1!='MAP'){
			console.log("First Element should be MAP");
			return;
		}
		this.response=[];
		var nmap={ "name" : "Map","title":"New Map", "parent":"null", "type": "Map" ,"code":0 , "properties":properties};
		this.response.push(nmap);
		 
		this.counter=0;
		while(elm1 !='END' && this.tokens.length > 1){

			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1.toUpperCase();
			// console.log("Map"+elm1);
			if(elmc=='CONFIG'){
			   var key=this.tokens.shift();
			   key=(key==null)?null:key.toLowerCase();
			   var val=this.tokens.shift();
			   if(key && val){
			   properties['CONFIG '+key]=val;
			   }

			}else if(elmc=='DATAPATTERN'){

				 var pattern=this.tokens.shift();
				 properties[elm1]=pattern;
 
			}else if(elmc=='DEBUG'){
				var value=this.tokens.shift();
				properties[elm1]=value;

			}else if(elmc=='EXTENT'){
				var minx=this.tokens.shift();
				var miny=this.tokens.shift();
				var maxx=this.tokens.shift();
				var maxy=this.tokens.shift();
			    properties['EXTENT']=minx + " " + miny + " " + maxx + " " + maxy;
			}else if(elmc=='ANGLE'){
				var angle=this.tokens.shift();
                properties[elm1]=angle;
			}else if(elmc=='TEMPLATEPATTERN'){
				var tpattern=this.tokens.shift();
                 properties[elm1]=tpattern;
			}else if(elmc=='FONTSET'){
				var fset=this.tokens.shift();
                properties[elm1]=fset;
			}else if(elmc=='IMAGECOLOR'){
				var c=this.parseColor();
				properties[elm1]=c;
			}else if(elmc=='IMAGEQUALITY'){
				var qal=this.tokens.shift();
                properties[elm1]=qal;
			}else if(elmc=='IMAGETYPE'){
				var imtp=this.tokens.shift();
                properties[elm1]=imtp;
			}else if(elmc=='INTERLACE'){
				var interlace=this.tokens.shift();
                properties[elm1]=interlace;
			}else if(elmc=='LATLON'){
              
			}else if(elmc=='LAYER'){
				var id=this.counter++;
				var r=this.parseLayer(id);
				var nmap={ "name" : "Layer"+id,"title":"Layer", "parent":"Map", "type": "Layer" ,"code":id , "properties":r};
                this.response.push(nmap);
			}else if(elmc=='OUTPUTFORMAT'){
				var r=this.parseOutputformat();
				var id=this.counter++;
                var nmap={ "name" : "Outputformat"+id,"title":"Outputformat", "parent":"Map", "type": "Outputformat" ,"code":id , "properties":r};
                this.response.push(nmap);
			}else if(elmc=='LEGEND'){
				
				var id=this.counter++;
				var r=this.parseLegend(id);
                var nmap={ "name" : "Legend"+id,"title":"Legend", "parent":"Map", "type": "Legend" ,"code":id , "properties":r};
                this.response.push(nmap);
                
			}else if(elmc=='MAXSIZE'){
                var maxsize=this.tokens.shift();
                 properties[elm1]=maxsize;
			}else if(elmc=='NAME'){
                 var name=this.tokens.shift();
                 properties[elm1]=name;
			}else if(elmc=='PROJECTION'){
                var r= this.parseProjection();
                
                 var id=this.counter++;
                var nmap={ "name" : "Projection"+id,"title":"Projection", "parent":"Map", "type": "Projection" ,"code":id , "properties":r};
                this.response.push(nmap);
			}else if(elmc=='QUERYMAP'){
                  var r=this.parseQueryMap();
                  var id=this.counter++;
                  var nmap={ "name" : "Querymap"+id,"title":"Querymap", "parent":"Map", "type": "Querymap" ,"code":id , "properties":r};
                  this.response.push(nmap);
			}else if(elmc=='REFERENCE'){
                 var r=this.parseReference();
                  var id=this.counter++;
                  var nmap={ "name" : "Reference"+id,"title":"Reference", "parent":"Map", "type": "Reference" ,"code":id , "properties":r};
                  this.response.push(nmap);
			}else if(elmc=='RESOLUTION'){
                var res=this.tokens.shift();
                 properties[elm1]=res;
			}else if(elmc=='DEFRESOLUTION'){
                var defres=this.tokens.shift();
                properties[elm1]=defres;
			}else if(elmc=='SCALE'){
                var scale=this.tokens.shift();
                properties['scaledenom']=scale;
			}else if(elmc=='SCALEDENOM'){
                var scaledom=this.tokens.shift();
                properties[elm1]=value;
			}else if(elmc=='SCALEBAR'){
                
                var id=this.counter++;
                var r=this.parseScalebar(id);
                  var nmap={ "name" : "Scalebar"+id,"title":"Scalebar", "parent":"Map", "type": "Scalebar" ,"code":id , "properties":r};
                  this.response.push(nmap);
			}else if(elmc=='SHAPEPATH'){
                  var value=this.tokens.shift();
                  properties[elm1]=value;
			}else if(elmc=='SIZE'){
                  var sizex=this.tokens.shift();
                  var sizey=this.tokens.shift();
                  properties['SIZE']=sizex+" "+sizey;
			}else if(elmc=='STATUS'){
                  var status=this.tokens.shift();
                  properties[elm1]=status;
			}else if(elmc=='SYMBOL'){
                   var r=this.parseSymbol();
                   var id=this.counter++;
                  var nmap={ "name" : "Symbol"+id,"title":"Symbol", "parent":"Map", "type": "Symbol" ,"code":id , "properties":r};
                  this.response.push(nmap);
			}else if(elmc=='SYMBOLSET'){
                   var sybset=this.tokens.shift();
                   properties[elm1]=sybset;
			}else if(elmc=='TRANSPARENT'){
                  var trans=this.tokens.shift();
                    properties[elm1]=trans;
			}else if(elmc=='UNITS'){
                   var unit=this.tokens.shift();
                    properties[elm1]=unit;
			}else if(elmc=='WEB'){
				var id=this.counter++;
                var r=this.parseWeb(id);
                var nmap={ "name" : "Web"+id,"title":"Web", "parent":"Map", "type": "Web" ,"code":id , "properties":r};
                this.response.push(nmap);
			}else {
				//console.log("Error Unknown Element Found"+elmc);
			}

		}
		 
		 
		
		 return this.response;
		 
        



	},
	parseLayer:function(pid)
	{
		 var properties={};
		 var pcounter=0;
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1.toUpperCase();
			
			if(elmc=='CLASS'){
				var id=this.counter++;
			    var r=this.parseClass(id);
			    
               var nmap={ "name" : "Class"+id,"title":"Class", "parent":"Layer"+pid, "type": "Class" ,"code":id , "properties":r};
               this.response.push(nmap);
			}else if(elmc=='CLUSTER'){
				var id=this.counter++;
                var r=this.parseCluster(id);  
                var nmap={ "name" : "Cluster"+id,"title":"Cluster", "parent":"Layer"+pid, "type": "Cluster" ,"code":id , "properties":r};
                this.response.push(nmap);
			}else if(elmc=='CLASSGROUP'){
                   var cgrp=this.tokens.shift();
                   properties[elm1]=cgrp;
			}else if(elmc=='CLASSITEM'){
                   var citm=this.tokens.shift();
                   properties[elm1]=citm;
			}else if(elmc=='COMPOSITE'){
				  var id=this.counter++;
                  var r=this.parseComposite();
                  var nmap={ "name" : "Composite"+id,"title":"Composite", "parent":"Layer"+pid, "type": "Composite" ,"code":id , "properties":r};
                this.response.push(nmap);
			}else if(elmc=='CONNECTION'){
                   var conn=this.tokens.shift();
                   properties[elm1]=conn;
			}else if(elmc=='CONNECTIONTYPE'){
                  var ctype=this.tokens.shift();
                   properties[elm1]=ctype;
			}else if(elmc=='DATA'){
                   var dta=this.tokens.shift();
                   properties[elm1]=dta;
			}else if(elmc=='DEBUG'){
                  var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='DUMP'){
                  var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='ENCODING'){
                  var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='EXTENT'){
                  var minx=this.tokens.shift();
				var miny=this.tokens.shift();
				var maxx=this.tokens.shift();
				var maxy=this.tokens.shift();
			   properties['EXTENT']=minx + " " + miny + " " + maxx + " " + maxy;
			    
			}else if(elmc=='FEATURE'){
				  var id=this.counter++;
                  var r=this.parseFeature();
                   var nmap={ "name" : "Feature"+id,"title":"Feature", "parent":"Layer"+pid, "type": "Feature" ,"code":id , "properties":r};
                this.response.push(nmap);
			}else if(elmc=='FILTER'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='FILTERITEM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='FOOTER'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
                   
			}else if(elmc=='GRID'){
				  var id=this.counter++;
                  var r=this.parseGrid(id);
                  var nmap={ "name" : "Grid"+id,"title":"Grid", "parent":"Layer"+pid, "type": "Grid" ,"code":id , "properties":r};
                  this.response.push(nmap);
			}else if(elmc=='GROUP'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
                   
			}else if(elmc=='GEOMTRANSFORM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='HEADER'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
                   
			}else if(elmc=='JOIN'){
				   var id=this.counter++;
                  var r=this.parseJoin(id);
                  var nmap={ "name" : "Join"+id,"title":"Join", "parent":"Layer"+pid, "type": "Join" ,"code":id , "properties":r};
                  this.response.push(nmap);
                  
			}else if(elmc=='LABELCACHE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='LABELITEM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='LABELMAXSCALE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='LABELMAXSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='LABELMINSCALE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='LABELMINSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='LABELREQUIRES'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
                   
			}else if(elmc=='MASK'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXFEATURES'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXSCALE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXGEOWIDTH'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='METADATA'){
				  var id=this.counter++;
                  var r=this.parseMetaData();
                  var nmap={ "name" : "MetaData"+id,"title":"MetaData", "parent":"Layer"+pid, "type": "MetaData" ,"code":id , "properties":r};
                  this.response.push(nmap);
			}else if(elmc=='MINSCALE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINGEOWIDTH'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINFEATURESIZE'){
                   var sizex=this.tokens.shift();
                  var sizey=this.tokens.shift();
                  properties['MINFEATURESIZE']=sizex + " " + sizey;
			}else if(elmc=='NAME'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OFFSITE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OPACITY'){
                   var val=this.tokens.shift();
                   properties['transparency']=val;
			}else if(elmc=='TRANSPARENCY'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='PLUGIN'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='PROCESSING'){
                   var val=this.tokens.shift();
                  
                    if(pcounter ==0){
                      properties[elm1]=val;
                   }else{
                   	 properties[elm1+pcounter]=val;
                   }
                   pcounter++;
                   
			}else if(elmc=='POSTLABELCACHE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='PROJECTION'){
				   var id=this.counter++;
                   var r=this.parseProjection();
                    var nmap={ "name" : "Projection"+id,"title":"Projection", "parent":"Layer"+pid, "type": "Projection" ,"code":id , "properties":r};
                  this.response.push(nmap);
			}else if(elmc=='REQUIRES'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='SCALETOKEN'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='SIZEUNITS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='STATUS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='STYLEITEM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='SYMBOLSCALE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='SYMBOLSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TEMPLATE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TILEINDEX'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TILEITEM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TILESRS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TOLERANCE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TOLERANCEUNITS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TRANSFORM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TYPE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='UNITS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='UTFDATA'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='UTFITEM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='VALIDATION'){
                  var id=this.counter++;
                  var r=this.parseValidation();
                  var nmap={ "name" : "Validation"+id,"title":"Validation", "parent":"Layer"+pid, "type": "Validation" ,"code":id , "properties":r};
                  this.response.push(nmap);
                  
			}else if(elmc=='END'){
                   
			}else {
                  
                  console.log("There is an error parsing Layer"+ elm1);break;
			}
			
			
			
		}while(elmc !='END' && this.tokens.length > 1);
		return properties;
	},
	parseOutputformat:function()
	{
		 var properties={};
		 var opcounter=0;
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			
			
			if(elmc=='NAME'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MIMETYPE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='DRIVER'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='EXTENSION'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='FORMATOPTION'){
                   var val=this.tokens.shift();
                   if(opcounter==0){
                      properties[elm1]=val;
                   }else{
                   	 properties[elm1+opcounter]=val;
                   }
                   opcounter++;
			}else if(elmc=='IMAGEMODE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TRANSPARENT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TRANSPARENT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='END'){
                   
			}else {
                  
                  console.log("There is an error parsing OutputFormat");break;
			}
			
			
		}while(elmc !='END' && this.tokens.length > 1);
		
		
		return properties;
			
	},
	parseLegend:function(pid)
	{
		var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			
			
			
			if(elmc=='IMAGECOLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
                  
			}else if(elmc=='INTERLACE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='KEYSIZE'){
                   var sizex=this.tokens.shift();
                  var sizey=this.tokens.shift();
                  properties['KEYSIZE']=sizex + " " + sizey;
			}else if(elmc=='KEYSPACING'){
                    var sizex=this.tokens.shift();
                  var sizey=this.tokens.shift();
                  properties['KEYSPACING']=sizex + " " + sizey;
			}else if(elmc=='LABEL'){
                 var id=this.counter++;
                  var r=this.parseLabel(id);
                   var nmap={ "name" : "Label"+id,"title":"Label", "parent":"Legend"+pid, "type": "Label" ,"code":id , "properties":r};
                    this.response.push(nmap);  
			}else if(elmc=='OUTLINECOLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='POSITION'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='POSTLABELCACHE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='STATUS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TEMPLATE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TRANSPARENT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='END'){
                  
			}else {
                  
                  console.log("There is an error parsing Legend "+elm1);break;
			}
			
			
			
		}while(elmc !='END' && this.tokens.length > 1);
		
		return properties;
	},
	parsePattern:function()
	{
		 var properties={};
		 var proj="";
		 var cont=0;
		 var elm1="";
		do{
			elm1=this.tokens.shift();
		    var elmc=elm1?elm1.toUpperCase():null;
		    if(elmc=='END'){
                   
			}else{
 
         
                 properties['patterntxt'+ ++cont]=elm1 ;
			}
			
			
			
			
		}while(elm1 !='END' && this.tokens.length > 1);
		
		return properties;
	},
	parseProjection:function()
	{
		 var properties={};
		 var proj="";
		 var cont=0;
		 var elm1="";
		do{
			elm1=this.tokens.shift();
		    var elmc=elm1?elm1.toUpperCase():null;
		    if(elmc=='END'){
                   
			}else{
 
         
                 properties['projectiontxt'+ ++cont]=elm1 ;
			}
			
			
			
			
		}while(elm1 !='END' && this.tokens.length > 1);
		
		return properties;
	},
	
	parseQueryMap:function()
	{
		 var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			if(elmc=='COLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='STATUS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='STYLE'){
                   var val=this.tokens.shift();
                   properties['type']=val;
			}else if(elmc=='SIZE'){
                    var sizex=this.tokens.shift();
                    var sizey=this.tokens.shift();
                    properties['SIZE']=sizex+" "+sizey;
                  // properties['$SIZE&x']=sizex;
                  // properties['$SIZE&y']=sizey;
			}else if(elmc=='TYPE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='END'){
                   
			}else {
                  
                  console.log("There is an error parsing Querymap");break;
			}
			
			
		}while(elmc !='END' && this.tokens.length > 1);
		return properties;
	},
	parseScalebar:function(pid)
	{
		var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			
			if(elmc=='ALIGN'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='BACKGROUNDCOLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='COLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='IMAGECOLOR'){
                    var val=this.parseColor();
                   properties[elm1]=val;
                   
			}else if(elmc=='INTERLACE'){
                  var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='INTERVALS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='LABEL'){
                 var id=this.counter++;
                  var r=this.parseLabel(id);
                   var nmap={ "name" : "Label"+id,"title":"Label", "parent":"Scalebar"+pid, "type": "Label" ,"code":id , "properties":r};
                    this.response.push(nmap);
			}else if(elmc=='OUTLINECOLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='POSITION'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='POSTLABELCACHE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='SIZE'){
                    var sizex=this.tokens.shift();
                  var sizey=this.tokens.shift();
                  properties['SIZE']=sizex + " " + sizey;
			}else if(elmc=='STATUS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='STYLE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TRANSPARENT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='UNITS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='END'){
                   
			}else {
                  
                  console.log("There is an error parsing Scalebar");break;
			}
			
			
			
		}while(elmc !='END' && this.tokens.length > 1);
		return properties;
	},
	parseSymbol:function()
	{
		 var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			// console.log("Sym-----"+elm1);
			if(elmc=='ANCHORPOINT'){
                  var sizex=this.tokens.shift();
                  var sizey=this.tokens.shift();
                  properties['ANCHORPOINT']=sizex+ " " +sizey;
			}else if(elmc=='ANTIALIAS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='CHARACTER'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='FILLED'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='FONT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='IMAGE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='NAME'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='POINTS'){
                   var val=this.parsePoints();
                   properties[elm1]=val;
			}else if(elmc=='TRANSPARENT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TYPE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='END'){
                   
			}else {
                  
                  console.log("There is an error parsing Symbol" + elmc);break;
			}
			
		}while(elmc !='END' && this.tokens.length > 1);
		return properties;
	},
	parseWeb:function(pid)
	{
		 var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			//console.log("elm1-----"+elm1+"--"+elmc);
			
			if(elmc=='BROWSEFORMAT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='ERROR'){
                     var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='EMPTY'){
                     var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='EXTENT'){
                var minx=this.tokens.shift();
				var miny=this.tokens.shift();
				var maxx=this.tokens.shift();
				var maxy=this.tokens.shift();
			     properties['EXTENT']=minx + " " + miny + " " + maxx + " " + maxy;
			    
			}else if(elmc=='FOOTER'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
                   
			}else if(elmc=='HEADER'){
                  var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='IMAGEPATH'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TEMPPATH'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='IMAGEURL'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='LEGENDFORMAT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='LOG'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXSCALE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXTEMPLATE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='METADATA'){
                   var id=this.counter++;
                  var r=this.parseMetaData();
                  var nmap={ "name" : "MetaData"+id,"title":"MetaData", "parent":"Web"+pid, "type": "MetaData" ,"code":id , "properties":r};
                  this.response.push(nmap);
			}else if(elmc=='MINSCALE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='QUERYFORMAT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINTEMPLATE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TEMPLATE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='VALIDATION'){
                  var id=this.counter++;
                  var r=this.parseValidation();
                  var nmap={ "name" : "Validation"+id,"title":"Validation", "parent":"Web"+pid, "type": "Validation" ,"code":id , "properties":r};
                  this.response.push(nmap);
			}else if(elmc=='END'){
                   //Nothing to Do.
			}else {
                  
                  console.log("There is an error parsing Web"+elmc);
                 
                  break;
			}
			
			
			
		}while( elmc !='END' && this.tokens.length>1);
		return properties;
	},
	parseColor:function()
	{
		        var r=this.tokens.shift();
		        
		        //console.log("Color"+ r);
		        if(!r)return null;
		       
				var g,b;
				var filler1="",filler2="",filler3="";
				if($.isNumeric(r)){
				   g=this.tokens.shift().toUpperCase();
				   b=this.tokens.shift().toUpperCase();
				    if(r<17){
				   	  filler1="0";
				   }
				   if(g<17){
				   	  filler2="0";
				   }
				   if(b<17){
				   	  filler3="0";
				   }
				  
				   return r&&g&&b ? "'#"+ filler1+ Number(r).toString(16)+ filler2 +Number(g).toString(16)+ filler3 +Number(b).toString(16) + "'":null;
				}
				return r;
				
	},
	parseClass: function(pid)
	{
		 var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			if(elmc=='DEBUG'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='EXPRESSION'){
                     var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='GROUP'){
                var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='KEYIMAGE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
                   
			}else if(elmc=='LABEL'){
				  var id=this.counter++;
                  var r=this.parseLabel(id);
                   var nmap={ "name" : "Label"+id,"title":"Label", "parent":"Class"+pid, "type": "Label" ,"code":id , "properties":r};
               this.response.push(nmap);
			}else if(elmc=='LEADER'){
				   var id=this.counter++;
                   var r=this.parseLeader(id);
                    var nmap={ "name" : "Leader"+id,"title":"Leader", "parent":"Class"+pid, "type": "Leader" ,"code":id , "properties":r};
                   this.response.push(nmap);
			}else if(elmc=='MAXSCALE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='METADATA'){
                    var id=this.counter++;
                  var r=this.parseMetaData();
                  var nmap={ "name" : "MetaData"+id,"title":"MetaData", "parent":"Class"+pid, "type": "MetaData" ,"code":id , "properties":r};
                  this.response.push(nmap);
			}else if(elmc=='MINSCALE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINFEATURESIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='NAME'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='STATUS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
                   
			}else if(elmc=='STYLE'){
				  var id=this.counter++;
                  var r=this.parseStyle(pid);
                  var nmap={ "name" : "Style"+id,"title":"Style", "parent":"Class"+pid, "type": "Style" ,"code":id , "properties":r};
                   this.response.push(nmap);
			}else if(elmc=='TEMPLATE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TEXT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TITLE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='BACKGROUNDCOLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='COLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='MAXSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OUTLINECOLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='SIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='SYMBOL'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OVERLAYBACKGROUNDCOLOR'){
                  var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='OVERLAYCOLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='OVERLAYMAXSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OVERLAYMINSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OVERLAYOUTLINECOLOR'){
                  var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='OVERLAYSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OVERLAYSYMBOL'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='VALIDATION'){
                    var id=this.counter++;
                  var r=this.parseValidation();
                  var nmap={ "name" : "Validation"+id,"title":"Validation", "parent":"Class"+pid, "type": "Validation" ,"code":id , "properties":r};
                  this.response.push(nmap);
			}else if(elmc=='END'){
                  
			}else {
                  
                  console.log("There is an error parsing Class"+elm1);break;
			}
			
		}while( elmc !='END' && this.tokens.length>1);
		return properties;
	},
	parseCluster:function(pid)
	{
		 var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			
			if(elmc=='MAXDISTANCE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='BUFFER'){
                 var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='REGION'){
                  var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='GROUP'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='FILTER'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='END'){
                   
			}else {
                  
                  console.log("There is an error parsing Cluster");break;
			}
			
		}while( elmc !='END' && this.tokens.length>1);
		return properties;
	},
	parseComposite:function(pid)
	{
		 var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			if(elmc=='COMPOP'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OPACITY'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='END'){
                  
			}else {
                  
                  console.log("There is an error parsing Composite");break;
			}
			
		}while( elmc !='END' && this.tokens.length>1);
		return properties;
	},
	parseLeader:function(pid)
	{
		 var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			if(elmc=='GRIDSTEP'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXDISTANCE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='STYLE'){
                   var id=this.counter++;
                  var r=this.parseStyle(pid);
                  var nmap={ "name" : "Style"+id,"title":"Style", "parent":"Leader"+pid, "type": "Style" ,"code":id , "properties":r};
                   this.response.push(nmap);
			}else if(elmc=='END'){
                  
			}else {
                  
                  console.log("There is an error parsing leader");break;
			}
			
		}while( elmc !='END' && this.tokens.length>1);
		return properties;
	},
	parseMetaData:function()
	{
		  var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			var value=null;
			if(elmc!='END'){
				value=this.tokens.shift().toLowerCase();
			}
			
			if(elm1 && value ){
				properties[elm1]=value;
			}
		}while( elmc !='END' && this.tokens.length>1);
		return properties;
	},
	parseValidation:function()
	{
		  var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			var value=null;
			if(elmc!='END'){
				value=this.tokens.shift().toLowerCase();
			}
			
			if(elm1 && value ){
				properties[elm1]=value;
			}
		}while( elmc !='END' && this.tokens.length>1);
		return properties;
	},
	parseJoin:function(pid)
	{
		    var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			if(elmc=='CONNECTION'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='CONNECTIONTYPE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='FOOTER'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='FROM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='HEADER'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='JOIN'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='NAME'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TABLE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TEMPLATE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TO'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TYPE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='END'){
                   
			}else {
                  
                  console.log("There is an error parsing Join");break;
			}
			
		}while( elmc !='END' && this.tokens.length>1);
		return properties;
	},
	parseFeature:function()
	{
		  var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			if(elmc=='POINTS'){
                   this.parsePoints();
			}else if(elmc=='ITEMS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TEXT'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='WKT'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='END'){
                   
			}else {
                  
                  console.log("There is an error parsing Feature"+elm1);break;
			}
			
		}while( elmc !='END' && this.tokens.length>1);
		return properties;
	},
	parseGrid:function()
	{
		 var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			if(elmc=='LABELFORMAT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINARCS'){
                  var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXARCS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MININTERVAL'){
                  var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXINTERVAL'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINSUBDIVIDE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXSUBDIVIDE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='END'){
				
			}else {
                  
                  console.log("There is an error parsing Grid");break;
			}
			
		}while( elmc !='END' && this.tokens.length>1);
		return properties;
	},
	parseLabel:function(pid)
	{
		 var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			
			
			
			if(elmc=='ANGLE'){
                   var val=this.tokens.shift();
                   properties[elmc]=val;
			}else if(elmc=='ALIGN'){
                     var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='ANTIALIAS'){
               
			      var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='BUFFER'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
                   
			}else if(elmc=='COLOR'){
                  var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='ENCODING'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='EXPRESSION'){
                  var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='FONT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='FORCE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elmc]=val;
			}else if(elmc=='MAXLENGTH'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINDISTANCE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='REPEATDISTANCE'){
                  var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXOVERLAPANGLE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}
			else if(elmc=='SYMBOL'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINFEATURESIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OFFSET'){
				var sizex=this.tokens.shift();
                  var sizey=this.tokens.shift();
                  properties['OFFSET']=sizex + " " + sizey;
			}else if(elmc=='OUTLINECOLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='OUTLINEWIDTH'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='PARTIALS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='POSITION'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='PRIORITY'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='SHADOWCOLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='SHADOWSIZE'){
                    var sizex=this.tokens.shift();
                  var sizey=this.tokens.shift();
                  properties['SHADOWSIZE']=sizex + " " + sizey;
			}else if(elmc=='SIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='STYLE'){
                  
                   var id=this.counter++;
                   var r=this.parseStyle(pid);
                    var nmap={ "name" : "Style"+id,"title":"Style", "parent":"Label"+pid, "type": "Style" ,"code":id , "properties":r};
                  this.response.push(nmap);
                  
			}else if(elmc=='TEXT'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='TYPE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='WRAP'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='END'){
				
			}else {
                  
                  console.log("There is an error parsing Label"+elm1);break;
			}
			
		}while( elmc !='END' && this.tokens.length>1);
		
		return properties;
	},
	parseReference:function(){
		var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			
			if(elmc=='COLOR'){
                   var val=this.parseColor()
                   properties[elm1]=val;
			}else if(elmc=='EXTENT'){
                var minx=this.tokens.shift();
				var miny=this.tokens.shift();
				var maxx=this.tokens.shift();
				var maxy=this.tokens.shift();
			   properties['EXTENT']=minx + " " + miny + " " + maxx + " " + maxy;
			}else if(elmc=='IMAGE'){
                var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OUTLINECOLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='SIZE'){
                 var sizex=this.tokens.shift();
                  var sizey=this.tokens.shift();
                  properties['SIZE']=sizex + " " + sizey;
			}else if(elmc=='STATUS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MARKER'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MARKERSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINBOXSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXBOXSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='END'){
				
			}else {
                  
                  console.log("There is an error parsing parseReference"+elm1);break;
			}
			
		}while( elmc !='END' && this.tokens.length>1);
		return properties;
	},
	parseStyle:function(pid)
	{
		var properties={};
		do{
			var elm1=this.tokens.shift().toLowerCase();
			var elmc=elm1?elm1.toUpperCase():null;
			
			if(elmc=='COLORRANGE'){
                 var minval=this.parseColor();
                 var maxval=this.parseColor();
                 properties[elm1]= minval + " " + maxval;
			}else if(elmc=='DATARANGE'){
                   var val1=this.parseColor();
                   var val2=this.parseColor();
                   properties[elm1]=val1 + " " +val2;
			}else if(elmc=='ANGLEITEM'){
                  var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='ANGLE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='ANTIALIAS'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='BACKGROUNDCOLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='COLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='GAP'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='INITIALGAP'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINSCALEDENOM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='GEOMTRANSFORM'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='LINECAP'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='LINEJOIN'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='LINEJOINMAXSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINSIZE'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MAXWIDTH'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='MINWIDTH'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OFFSET'){
                   var x=this.tokens.shift();
                   var y=this.tokens.shift();
                   properties['OFFSET']=x + " " + y;
			}else if(elmc=='OPACITY'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OUTLINECOLOR'){
                   var val=this.parseColor();
                   properties[elm1]=val;
			}else if(elmc=='PATTERN'){
                  var r= this.parsePattern();
                
                 var id=this.counter++;
                var nmap={ "name" : "Pattern"+id,"title":"Pattern", "parent":"Style", "type": "Pattern" ,"code":id , "properties":r};
                this.response.push(nmap); 
			}else if(elmc=='POSITION'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='OUTLINEWIDTH'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='SIZE'){
                   var x=this.tokens.shift();
                   properties[elm1]=x;
			}else if(elmc=='SYMBOL'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='WIDTH'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='POLAROFFSET'){
                   var val=this.tokens.shift();
                   properties[elm1]=val;
			}else if(elmc=='END'){
				
			}else {
                  
                  console.log("There is an error parsing Style"+elm1);break;
			}
		
		}while( elmc !='END' && this.tokens.length>1);
		return properties;
	},
	parsePoints:function()
	{
		var points="";
		do{
			var elm1=this.tokens.shift();
			var elmc=elm1?elm1.toUpperCase():null;
			if(elmc=='END'){
				
			}else{
				points+=" " + elm1;
			}
			
			
		}while( elmc !='END' && this.tokens.length>1);
		return points;
			
	},
	
    CLASSNAME: "Crowmap.MapParser"
});

Crowmap.Notifier = Crowmap.Base({
	update:function(d)
	{
		alert(d);
	},
	
CLASSNAME: "Crowmap.Notifier"
});
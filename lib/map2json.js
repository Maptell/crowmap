var CrowmapParser=  function(data){
	
	this.data=data,
	this.tokens=[],
	this.convert= function(){
		if(!this.data || this.data.length ==0)return;
		
	    var darray=this.data.split("\n");
		for(var k=0;k<darray.length;k++){
		
			var line= darray[k];
			
			
			var tkns=line.match(/\w+|"[^"]+"/g);
			//parse a single line
			for(var i=0;i<tkns.length;i++){
				
				var token=tkns[i].trim();
				if(token.startsWith("#"))break;
				this.tokens.push(token);
				
				
			}
		}
		
	},
	this.parse=function(){
		
		if(this.tokens.length<2)return;
		var elm=this.tokens.shift();
		if(elm.toUpperCase!='MAP'){
			console.log("First Element should be MAP");
		}
		elm=this.tokens.shift().toUpperCase();
		while(elm !='END' && this.tokens.length > 1){
			
			var elm1=this.tokens.shift().toUpperCase();
			if(elm1=='CONFIG'){
			   var key=this.tokens.shift().toUpperCase();
			   var val=this.tokens.shift().toUpperCase();
				
			}else if(elm1=='DATAPATTERN'){
				 
				 var pattern=this.tokens.shift().toUpperCase();
				
			}else if(elm1=='DEBUG'){
				var value=this.tokens.shift().toUpperCase();
				
			}else if(elm1=='EXTENT'){
				var minx=this.tokens.shift().toUpperCase();
				var miny=this.tokens.shift().toUpperCase();
				var maxx=this.tokens.shift().toUpperCase();
				var maxy=this.tokens.shift().toUpperCase();
				
			}else if(elm1=='ANGLE'){
				var angle=this.tokens.shift().toUpperCase();
				
			}else if(elm1=='TEMPLATEPATTERN'){
				var tpattern=this.tokens.shift().toUpperCase();
				
			}else if(elm1=='FONTSET'){
				var fset=this.tokens.shift().toUpperCase();
				
			}else if(elm1=='IMAGECOLOR'){
				var r=this.tokens.shift().toUpperCase();
				var g=this.tokens.shift().toUpperCase();
				var b=this.tokens.shift().toUpperCase();
				
			}else if(elm1=='IMAGEQUALITY'){
				var qal=this.tokens.shift().toUpperCase();
				
			}else if(elm1=='IMAGETYPE'){
				var imtp=this.tokens.shift().toUpperCase();
				
			}else if(elm1=='INTERLACE'){
				var interlace=this.tokens.shift().toUpperCase();
				
			}else if(elm1=='LATLON'){
				
			}else if(elm1=='LAYER'){
				this.parseLayer();
			}else if(elm1=='OUTPUTFORMAT'){
				this.parseOutputformat();
			}else if(elm1=='LEGEND'){
				this.parseLegend();
			}else if(elm1=='MAXSIZE'){
				
			}else if(elm1=='NAME'){
				
			}else if(elm1=='PROJECTION'){
				
			}else if(elm1=='QUERYMAP'){
				
			}else if(elm1=='REFERENCE'){
				
			}else if(elm1=='RESOLUTION'){
				
			}else if(elm1=='DEFRESOLUTION'){
				
			}else if(elm1=='SCALE'){
				
			}else if(elm1=='SCALEDENOM'){
				
			}else if(elm1=='SCALEBAR'){
				
			}else if(elm1=='SHAPEPATH'){
				
			}else if(elm1=='SIZE'){
				
			}else if(elm1=='STATUS'){
				
			}else if(elm1=='SYMBOL'){
				
			}else if(elm1=='SYMBOLSET'){
				
			}else if(elm1=='TRANSPARENT'){
				
			}else if(elm1=='UNITS'){
				
			}else if(elm1=='WEB'){
				
			}else {
				console.log("Error");
			}
			
		}
		
		
		
		
	},
	
	this.debug=function(){
		console.log(this.tokens);
	}
}


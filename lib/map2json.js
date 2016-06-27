Crowmap.Map2json = Crowmap.Base({
  parser:null,
  parent:null,
  readMapFile:function(e) {
	  var file = e.target.files[0];
	  if (!file) {
	    return;
	  }
    if(!file.name.endsWith(".map")){
			alert("Crowmap eats only .map files :) ");
			return ;
		}

	  var reader = new FileReader();
	  var _this=this;
	  reader.onload = function(e) {
	    var contents = e.target.result;
	    var element = document.getElementById('filename');
        element.setAttribute("value",file.name) ;
		 var parser= new Crowmap.MapParser(contents);
		 var result=parser.convert();
		 
		 data=result;
		 init();
		 
	  };
	  reader.readAsText(file);
	} ,
	init: function(parent)  {
		this.parent=parent;
	   document.getElementById('file-input')
     .addEventListener('change', this.readMapFile, false);
   } ,
   

CLASSNAME: "Crowmap.Map2json"
});
/*
*/
/*var CrowmapParser=  function(){

	

	this.readMapFile= function(e) {
	  var file = e.target.files[0];
	  if (!file) {
	    return;
	  }
    if(!file.name.endsWith(".map")){
			alert("Crowmap eats only .map files :) ");
			return ;
		}

	  var reader = new FileReader();
	 
	  reader.onload = function(e) {
	    var contents = e.target.result;
	    var element = document.getElementById('filename');
        element.setAttribute("value",file.name) ;
		 var parser= new Crowmap.MapParser(contents);
		 parser.convert();
		 
	  };
	  reader.readAsText(file);
	} ,

    

	   this.init= function()  {
	   document.getElementById('file-input')
     .addEventListener('change', this.readMapFile, false);
   } 
    
}*/

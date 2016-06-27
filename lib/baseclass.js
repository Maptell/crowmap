/* Copyright (c) 2016-2016 Maptell Geosystems (P) Ltd.
 * Author : Ullas Dastakar
 * Public GNU License.  See http://www.github/Maptell/crowmap/license.txt for the
 * full text of the license. */

/**
 * Constructor: Crowmap.Base
 * Base class used to construct all other classes. Includes support for 
 *     multiple inheritance.
 *     
 
 * To create a new Crowmap class with multiple inheritance, use the
 *     following syntax:
 *     var newCrowmapClass = Crowmap.Base(Class1, Class2, prototype);
 * 
 *
 */
var Crowmap={};
Crowmap.Base = function() {
   
    var A;
    if(typeof arguments[arguments.length-1].init == "function")
    {
    	A=arguments[arguments.length-1].init
    	
    }else{
    	A=function(){
    		arguments[0].prototype.init.apply(this,arguments);
    		
    	}
    }
    if(arguments.length>1){
    	var additional=[A,arguments[0]];
    	var tmp=Array.prototype.slice.call(arguments).slice(1, arguments.length-1);
    	additional=additional.concat(tmp,arguments[arguments.length-1]);
    	Crowmap.inherit.apply(null,additional);
    	
    }else{
    	
    	A.prototype=arguments[arguments.length-1];
    }
    
    
    return A;
    
};

/**
 * Function: Crowmap.inherit
 *
 * Parameters:
 * NewClass - {Object} the class that inherits
 * BaseClass - {Object} the superclass to inherit from
 *
 * In addition to the mandatory NewClass and BaseClass parameters, an arbitrary number of
 * objects can be passed, which will extend NewClass.
 */
Crowmap.inherit = function(NewClass, BaseClass) {
   var F = function() {};
   F.prototype = BaseClass.prototype;
   NewClass.prototype = new F;
   var obj;
   for(var i=2; i<arguments.length; i++) {
      
       obj= (typeof arguments[i] === "function")?arguments[i].prototype:arguments[i];
       
       Crowmap.extend(NewClass.prototype, o);
   }
};


/**
 * 
 * Copy all properties of a source object to a destination object. 
 *
 * Parameters:
 * target - {Object} The object that will be modified
 * source - {Object} The object with properties to be set on the target
 *
 * Returns:
 * {Object} The target object.
 */

Crowmap.extend = function(destination, target) {
    target = target || {};
   		 if(!source)return target;
   		
   		/*Copy all the properties..*/
   		
        for (var property in source) {
            var value = source[property];
            if (value !== undefined) {
                target[property] = value;
            }
        }

        /**
         * For IE explicity check toString()
         */


        if (!(typeof window.Event == "function"
                  && source instanceof window.Event)  
                  && source.hasOwnProperty 
                  && source.hasOwnProperty("toString")) {
            target.toString = source.toString;
        }
    
    return target;
};





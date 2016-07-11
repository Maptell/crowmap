var ACTIVEPROPERTY;


   var PROJECTIONPROPERTIES = [{title:"Prj4 String",value:"",id:"proj4",enabled:"1",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:""}];
   var LOOKUP={EXTENT:["minx","miny","maxx","maxy"],ANCHORPOINT:["x","y"],SIZE:["x","y"],POINTS:["x","y"],KEYSIZE:["x","y"],KEYSPACING:["x","y"],BACKGROUNDSHADOWSIZE:["x","y"],OFFSET:["x","y"],SHADOWSIZE:["x","y"]};

var ENDVALUES=["POINTS","VALIDATION"];

 var MAPPROPERTIES = [{title:"Name*",id:"name",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",maxchars:"10",required:"true"},tooltip:"Prefix attached to map, scalebar and legend GIF filenames created using this mapfile. It should be kept short."},
{title:"Size",id:"size",enabled:"0",type:"label"},{title:"X",id:"$SIZE&x",enabled:"0",type:"textbox",vstring:{regex:"[^[-+]?([0-9]*\.[0-9]+|[0-9]+)]",required:"true"},tooltip:"Size in pixels of the output image (i.e. the map)."},
{title:"Y",id:"$SIZE&y",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Size in pixels of the output image (i.e. the map)."},
{title:"Extent",id:"extent",enabled:"0",type:"label"},
{title:"Minx", id:"$EXTENT&minx",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The spatial extent of the map to be created."},
{title:"Miny",id:"$EXTENT&miny",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The spatial extent of the map to be created."},
{title:"Maxx",id:"$EXTENT&maxx",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The spatial extent of the map to be created."},
{title:"Maxy",id:"$EXTENT&maxy",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The spatial extent of the map to be created."},
{title:"Status",id:"status",enabled:"0",type:"switch"},
{title:"Shapepath",id:"shapepath",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Path to the directory holding the shapefiles or tiles. There can be further subdirectories under SHAPEPATH."},
{title:"Symbolset",id:"symbolset",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Filename of the symbolset to use. Can be a path relative to the mapfile, or a full path."},
{title:"FontSet",id:"fontset",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Filename of fontset file to use. Can be a path relative to the mapfile, or a full path."},
{title:"Imagetype",id:"imagetype",enabled:"0",type:"dropdown",doptions:"jpeg|pdf|png|svg|...|userdefined"},
{title:"ImageColor",id:"imagecolor",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to initialize the map with (i.e. background color). "},
{title:"Imagequality",id:"imagequality",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:""},
{title:"Resolution",id:"resolution",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Sets the pixels per inch for output, only affects scale computations."},
{title:"Defresolution",id:"defresolution",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Sets the reference resolution (pixels per inch) used for symbology."},
{title:"Scaledenom",id:"scaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Computed scale of the map. Set most often by the application."},
{title:"MaxSize",id:"maxsize",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Sets the maximum size of the map image. This will override the default value."},
{title:"Transparent",id:"transparent",enabled:"0",type:"switch"},
{title:"Units",id:"units",enabled:"0",type:"dropdown",doptions:"dd|feet|inches|kilometers|meters|miles|nauticalmiles"},
{title:"TemplatePattern",id:"templatepattern",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"This defines a regular expression to be applied to requests to change the TEMPLATE parameters via URL requests"},
{title:"DataPattern",id:"datapattern",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"This defines a regular expression to be applied to requests to change DATA parameters via URL requests"},
{title:"Debug",id:"debug",enabled:"0",type:"dropdown",doptions:"on|off|0|1|2|3|4|5"}, {title:"Interlace",id:"interlace",enabled:"0",type:"switch"},
{title:"Angle",id:"angle",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true",maxval:"360"},tooltip:"Angle, given in degrees, to rotate the map. The rendered map will rotate in a clockwise direction. "},
{title:"Config",id:"config",enabled:"0",type:"label"},
{title:"CGI_CONTEXT_URL",id:"CONFIG^cgi_context_url",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"This CONFIG parameter can be used to enable loading a map context from a URL. "},
{title:"MS_ENCRYPTION_KEY",id:"CONFIG^ms_encryption_key",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"This CONFIG parameter can be used to specify an encryption key that is used with MapServer’s msencypt utility."},
{title:"MS_ERRORFILE",id:"CONFIG^ms_errorfile",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"This CONFIG parameter can be used to write MapServer errors to a file."},
{title:"MS_NONSQUARE",id:"CONFIG^ms_nonsquare",enabled:"0",type:"switch"},
{title:"ON_MISSING_DATA",id:"CONFIG^on_missing_data",enabled:"0",type:"dropdown",doptions:"FAIL|LOG|IGNORE"},
{title:"PROJ_LIB",id:"CONFIG^proj_lib",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"This CONFIG parameter can be used to define the location of your EPSG files for the Proj.4 library."}
];


 var LAYERPROPERTIES = [{title:"Classgroup",id:"classgroup",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Specify the class’s group that would be considered at rendering time. The CLASS object’s GROUP parameter must be used in combination with CLASSGROUP."},
 {title:"Classitem",id:"classitem",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Item name in attribute table to use for class lookups."},
{title:"Connection",id:"connection",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Database connection string to retrieve remote data."},
{title:"ConnectionType",id:"connectiontype",enabled:"0",type:"dropdown",doptions:"contour|kerneldensity|local|ogr|oraclespatial|plugin|postgis|sde|union|uvraster|wfs|wms"},
{title:"Data",id:"data",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Full filename of the spatial data to process. No file extension is necessary for shapefiles."},
{title:"Debug",id:"debug",enabled:"0",type:"radio",doptions:"on|off|0|1|2|3|4|5"},{title:"Dump",id:"dump",enabled:"0",type:"radio",doptions:"True|False"},
{title:"Encoding",id:"encoding",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"The encoding used for text in the layer data source. The value must be supported by ICONV"},
{title:"Extent",id:"extent",enabled:"0",type:"label"},
{title:"Minx",id:"$EXTENT&minx",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The spatial extent of the data. "},
{title:"Miny",id:"$EXTENT&miny",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The spatial extent of the data. "},
{title:"Maxx",id:"$EXTENT&maxx",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The spatial extent of the data. "},
{title:"Maxy",id:"$EXTENT&maxy",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The spatial extent of the data. "},
{title:"Filter",id:"filter",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"This parameter allows for data specific attribute filtering that is done at the same time spatial filtering is done, but before any CLASS expressions are evaluated. The string is simply a mapserver regular expression"},
{title:"FilterItem",id:"filteritem",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Item to use with simple FILTER expressions. OGR and shapefiles only."},
{title:"Footer",id:"footer",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Template to use after a layer’s set of results have been sent. Multiresult query modes only."},
{title:"Geomtransform",id:"geomtransform",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Used to indicate that the current feature will be transformed."},
{title:"Group",id:"group",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Name of a group that this layer belongs to. The group name can then be reference as a regular layer name in the template files, allowing to do things like turning on and off a group of layers at once."},
{title:"Header",id:"*header",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Template to use before a layer’s set of results have been sent. Multiresult query modes only."},
{title:"LabelCache",id:"labelcache",enabled:"0",type:"switch"},
{title:"LabelItem",id:"labelitem",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Item name in attribute table to use for class annotation (i.e. labeling)."},
{title:"LabelMaxScaleDenom",id:"labelmaxscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Minimum scale at which this LAYER is labeled."},
{title:"LabelMinScaleDenom",id:"labelminscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Maximum scale at which this LAYER is labeled."},
{title:"LabelRequires",id:"labelrequires",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"The expression consists of a boolean expression based on the status of other layers, each [layer name] substring is replaced by a 0 or a 1 depending on that layer’s STATUS and then evaluated as normal. Logical operators AND and OR can be used."},
{title:"Mask",id:"mask",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"The data from the current layer will only be rendered where it intersects features from the [layername] layer. [layername] must reference the NAME of another LAYER defined in the current mapfile. can be any kind of mapserver layer, i.e. vector or raster. "},
{title:"MaxFeautres",id:"maxfeatures",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Specifies the number of features that should be drawn for this layer in the CURRENT window. Has some interesting uses with annotation and with sorted data (i.e. lakes by area)."},
{title:"MaxGeoWidth",id:"maxgeowidth",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Maximum width, in the map’s geographic units, at which this LAYER is drawn. If MAXSCALEDENOM is also specified then MAXSCALEDENOM will be used instead."},
{title:"MaxScaleDenom",id:"maxscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Minimum scale at which this LAYER is drawn. Scale is given as the denominator of the actual scale fraction, for example for a map at a scale of 1:24,000 use 24000."},
{title:"MinGeoWidth",id:"mingeowidth",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Minimum width, in the map’s geographic units, at which this LAYER is drawn. If MINSCALEDENOM is also specified then MINSCALEDENOM will be used instead."},
{title:"MinScaleDenom",id:"minscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Maximum scale at which this LAYER is drawn. Scale is given as the denominator of the actual scale fraction, for example for a map at a scale of 1:24,000 use 24000."},
{title:"Name",id:"name",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Short name for this layer. This name is the link between the mapfile and web interfaces that refer to this name. They must be identical. The name should be unique, unless one layer replaces another at different scales. Use the GROUP option to associate layers with each other. It is recommended that the name not contain spaces, special characters, or begin with a number"},
{title:"Offsite",id:"offsite",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Sets the color index to treat as transparent for raster layers."},
{title:"Opacity",id:"opacity",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:""},
{title:"Plugin",id:"plugin",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Additional library to load by MapServer, for this layer. "},
{title:"PostLabelCache",id:"postlabelcache",enabled:"0",type:"radio",doptions:"True|False"},
{title:"Processing",id:"processing",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Passes a processing directive to be used with this layer. The supported processing directives vary by layer type, and the underlying driver that processes them."},
{title:"Requires",id:"requires",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Sets context for displaying this layer"},
{title:"SizeUnits",id:"sizeunits",enabled:"0",type:"dropdown",doptions:"feet|inches|kilometers|meters|miles|nauticalmiles|pixels"},
{title:"Status",id:"status",enabled:"0",type:"radio",doptions:"on|off|default"},
{title:"StyleItem",id:"styleitem",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Styling based on attributes or generated with Javascript"},
{title:"SymbolScaleDenom",id:"symbolscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"The scale at which symbols and/or text appear full size. This allows for dynamic scaling of objects based on the scale of the map. If not set then this layer will always appear at the same size"},
{title:"Template",id:"template",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Used as a global alternative to CLASS TEMPLATE."},
{title:"TileIndex",id:"tileindex",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Name of the tileindex file or layer. A tileindex is similar to an ArcInfo library index. The tileindex contains polygon features for each tile. The item that contains the location of the tiled data is given using the TILEITEM parameter."},
{title:"TileItem",id:"tileitem",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Item that contains the location of an individual tile, default is “location”."},
{title:"TileSrs",id:"tilesrs",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Name of the attribute that contains the SRS of an individual tile."},
{title:"Tolerance",id:"tolerance",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Sensitivity for point based queries."},
{title:"ToleranceUnits",id:"toleranceunits",enabled:"0",type:"dropdown",doptions:"pixels|feet|inches|kilometers|meters|miles|nauticalmiles|dd"},
{title:"Transform",id:"transform",enabled:"0",type:"radio",doptions:"True|False"},
{title:"UTFItem",id:"utfitem",enabled:"0",type:"textbox","doptions":"ul|uc|ur|lc|cc|lr|ll|lc|lr"},
{title:"Type",id:"type",enabled:"0",type:"dropdown",doptions:"chart|circle|line|point|polygon|raster|query"},
{title:"Units",id:"units",enabled:"0",type:"dropdown",doptions:"dd|feet|inches|kilometers|meters|miles|nauticalmiles|percentages|pixels"},
{title:"UTFData",id:"utfdata",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"A UTFGrid JSON template. MapServer expression syntax (expressionObj). If no UTFDATA is provided, no data beyond the UTFITEM values will be exposed. If UTFITEM is set, the UTFDATA expose those so that keys and data can be connected. "},
{title:"UTFItem",id:"utfitem",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"The attribute to use as the ID for the UTFGrid. If a UTFITEM is not set, the sequential id (based on rendering order) is being used. If UTFITEM is set, the UTFDATA expose those so that keys and data can be connected. "}];

var WEBPROPERTIES = [{title:"BrowseFormat",id:"browseformat",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Format of the interface output, using MapServer CGI."},
{title:"Empty",id:"empty",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"URL to forward users to if a query fails. If not defined the value for ERROR is used."},
{title:"Error",id:"error",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"URL to forward users to if an error occurs. Ugly old MapServer error messages will appear if this is not defined"},
{title:"Footer",id:"footer",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Template to use AFTER anything else is sent. Multiresult query modes only."},
{title:"Header",id:"*header",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Template to use BEFORE everything else has been sent. Multiresult query modes only."},
{title:"ImagePath",id:"imagepath",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Path to the temporary directory for writing temporary files and images. Must be writable by the user the web server is running as. Must end with a / or depending on your platform."},
{title:"ImageUrl",id:"imageurl",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Base URL for IMAGEPATH. This is the URL that will take the web browser to IMAGEPATH to get the images."},
{title:"LegendFormat",id:"legendformat",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Format of the legend output, using MapServer CGI. "},
{title:"Log",id:"log",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"File to log MapServer activity in."},
{title:"MaxScaleDenom",id:"maxscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Minimum scale at which this interface is valid. "},
{title:"MaxScale",id:"maxscale",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"The minimum scale at which this interface is valid."},
{title:"MaxTemplate",id:"maxtemplate",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Template to be used if below the minimum scale for the app "},
{title:"MinScaleDenom",id:"minscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Maximum scale at which this interface is valid."},
{title:"MinScale",id:"minscale",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"The maximum scale at which this interface is valid."},
{title:"MinTemplate",id:"mintemplate",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Template to be used if above the maximum scale for the app"},
{title:"QueryFormat",id:"queryformat",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Format of the query output. "},
{title:"Template",id:"template",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Template file or URL to use in presenting the results to the user in an interactive mode"},
{title:"TempPath",id:"temppath",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Path for storing temporary files. "},
{title:"Validation",id:"validation",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:""}];

    var LEGENDPROPERTIES = [{title:"ImageColor",id:"imagecolor",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to initialize the legend with (i.e. the background)."},
    {title:"Interlace",id:"interlace",enabled:"0",type:"switch",doptions:"True|False"},
{title:"KeySize",id:"keysize",enabled:"0",type:"label"},{title:"X",id:"$KEYSIZE&x",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Size of symbol key boxes in pixels."},
{title:"Y",id:"$KEYSIZE&y",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Size of symbol key boxes in pixels."},{title:"KeySpacing",id:"keyspacing",enabled:"0",type:"label"},
{title:"X",id:"$KEYSPACING&x",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Spacing between symbol key boxes ([y]) and labels ([x]) in pixels."},
{title:"Y",id:"$KEYSPACING&y",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Spacing between symbol key boxes ([y]) and labels ([x]) in pixels."},
{title:"OutlineColour",id:"outlinecolor",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to use for outlining symbol key boxes."},
{title:"Position",id:"position",enabled:"0",type:"dropdown",doptions:"ul|uc|ur|ll|lc|lr"},{title:"PostLabelCache",id:"postlabelcache",enabled:"0",type:"switch",doptions:"True|False"},
{title:"Status",id:"status",enabled:"0",type:"dropdown",doptions:"on|off|embed"},
{title:"Template",id:"template",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"HTML legend template file."},
{title:"Transparent",id:"transparent",enabled:"0",type:"switch"}];


   var SCALEBARPROPERTIES = [{title:"Align",id:"align",enabled:"0",type:"dropdown",doptions:"left|center|right"},
   {title:"BackgroundColor",id:"backgroundcolor",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to use for scalebar background, not the image background."},
{title:"Color",id:"color",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to use for drawing all features if attribute tables are not used."},
{title:"ImageColor",id:"imagecolor",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to initialize the scalebar with (i.e. background)."},
{title:"Interlace",id:"interlace",enabled:"0",type:"radio",doptions:"true|false"},
{title:"Intervals",id:"intervals",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Number of intervals to break the scalebar into. "},
{title:"Outlinecolor",id:"outlinecolor",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to use for outlining individual intervals."},
{title:"Position",id:"position",enabled:"0",type:"dropdown",doptions:"ul|uc|ur|ll|lc|lr"},
{title:"PostLabelCache",id:"postlabelcache",enabled:"0",type:"switch",doptions:"True|False"},
{title:"Size",id:"size",enabled:"0",type:"label"},{title:"X",id:"$SIZE&x",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Size in pixels of the scalebar. Labeling is not taken into account."},
{title:"Y",id:"$SIZE&y",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Size in pixels of the scalebar. Labeling is not taken into account."},
{title:"Status",id:"status",enabled:"0",type:"dropdown",doptions:"on|off|embed"},
{title:"Style",id:"style",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Chooses the scalebar style. Valid styles are 0 and 1."},
{title:"Transparent",id:"transparent",enabled:"0",type:"switch"},
{title:"Units",id:"units",enabled:"0",type:"dropdown",doptions:"dd|feet|inches|kilometers|meters|miles|nauticalmiles|percentages|pixels"}];


var QUERYMAPPROPERIES = [{title:"Color",id:"color",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color in which features are highlighted."},
{title:"Size",id:"size",enabled:"0",type:"label"},
{title:"X",id:"$SIZE&x",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Size of the map in pixels."},
{title:"Y",id:"$SIZE&y",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Size of the map in pixels."},
{title:"Status",id:"status",enabled:"0",type:"switch"},{title:"Style",id:"style",enabled:"0",type:"dropdown",doptions:"normal|hilite|selected"}];


var OUTPUTFORMATPROPERTIES = [{title:"Driver",id:"driver",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"The name of the driver to use to generate this output format."},
{title:"Extension",id:"extension",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Provide the extension to use when creating files of this type. "},
{title:"FormatOption",id:"formatoption",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Provides a driver or format specific option. Zero or more FORMATOPTION statement may be present within a OUTPUTFORMAT declaration."},
{title:"ImageMode",id:"imagemode",enabled:"0",type:"dropdown",doptions:"PC256|RGB|RGBA|INT16|FLOAT32|FEATURE"},
{title:"MIMEType",id:"mimetype",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Provide the mime type to be used when returning results over the web."},
{title:"Name",id:"name",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"The name to use in the IMAGETYPE keyword of the map file to select this output format."},
{title:"Transparent",id:"transparent",enabled:"0",type:"switch"}];


var REFERENCEPROPERTIES = [{title:"Color",id:"color",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color in which the reference box is drawn."},
{title:"Extent",id:"extent",enabled:"0",type:"label"},
{title:"Minx",id:"$EXTENT&minx",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The spatial extent of the base reference image."},
{title:"Miny",id:"$EXTENT&miny",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The spatial extent of the base reference image."},
{title:"Maxx",id:"$EXTENT&maxx",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The spatial extent of the base reference image."},
{title:"Maxy",id:"$EXTENT&maxy",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The spatial extent of the base reference image."},
{title:"Image",id:"image",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Full filename of the base reference image. Must be a GIF image."},
{title:"Marker",id:"marker",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Defines a symbol (from the symbol file) to use when the box becomes too small "},
{title:"MarkerSize",id:"marker",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Defines the size of the symbol to use instead of a box "},
{title:"MinBoxSize",id:"minboxsize",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"If box is smaller than MINBOXSIZE (use box width or height) then use the symbol defined by MARKER and MARKERSIZE."},
{title:"MaxBoxSize",id:"maxboxsize",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"If box is greater than MAXBOXSIZE (use box width or height) then draw nothing"},
{title:"OutlineColor",id:"outlinecolor",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to use for outlining the reference box. Set any component to -1 for no outline."},
{title:"Size",id:"size",enabled:"0",type:"label"},{title:"X",id:"$SIZE&x",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Size, in pixels, of the base reference image."},
{title:"Y",id:"$SIZE&y",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Size, in pixels, of the base reference image."},{title:"Status",id:"status",enabled:"0",type:"switch"}];



       var CLASSPROPERTIES = [
{title:"Debug",id:"debug",enabled:"0",type:"switch"},
{title:"Expression",id:"expression",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Four types of expressions are now supported to define which class a feature belongs to: String comparisons, regular expressions, logical expressions, and string functions"},
{title:"Group",id:"group",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Allows for grouping of classes. "},
{title:"KeyImage",id:"keyimage",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Full filename of the legend image for the CLASS. This image is used when building a legend"},
{title:"MaxScaleDenom",id:"maxscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Minimum scale at which this CLASS is drawn."},
{title:"MaxSize",id:"maxsize",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:""},
{title:"MinScaleDenom",id:"minscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Maximum scale at which this CLASS is drawn. "},
{title:"MinSize",id:"minsize",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:""},
{title:"Name",id:"name",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Name to use in legends for this class. If not set class won’t show up in legend."},
{title:"Status",id:"status",enabled:"0",type:"switch"},
{title:"Template",id:"template",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Template file or URL to use in presenting query results to the user."},
{title:"Text",id:"text",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Text to label features in this class with."},
];



       var LABELPROPERTIES = [{title:"Align",id:"align",enabled:"0",type:"dropdown",doptions:"left|center|right"},
{title:"Angle",id:"angle",enabled:"0",type:"dropdown",doptions:"double|auto|auto2|follow|attribute"},
{title:"AntiAlias",id:"antialias",enabled:"0",type:"radio",doptions:"TRUE|FALSE"},
{title:"Buffer",id:"buffer",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Padding, in pixels, around labels. Useful for maintaining spacing around text to enhance readability. Available only for cached labels."},
{title:"Color",id:"color",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to draw text with."},
{title:"Encoding",id:"encoding",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Supported encoding format to be used for labels. If the format is not supported, the label will not be drawn."},
{title:"Expression",id:"expression",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Expression that determines when the LABEL is to be applied."},
{title:"Font",id:"font",enabled:"0",type:"textbox"},
{title:"Force",id:"status",enabled:"0",type:"radio",doptions:"TRUE|FALSE"},
{title:"MaxLength",id:"maxlength",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"This keyword interacts with the WRAP keyword so that line breaks only occur after the defined number of characters."},
{title:"MaxOverlapAngle",id:"maxoverlapangle",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Angle threshold to use in filtering out ANGLE FOLLOW labels in which characters overlap"},
{title:"MaxScaleDenom",id:"maxscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Minimum scale at which this LABEL is drawn."},
{title:"MaxSize",id:"maxsize",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Maximum font size to use when scaling text (pixels). "},
{title:"MinDistance",id:"mindistance",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Minimum distance between duplicate labels."},
{title:"MinFeatureSize",id:"minfeaturesize",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Minimum size a feature must be to be labeled. Given in pixels."},
{title:"MinScaleDenom",id:"minscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Maximum scale at which this LABEL is drawn."},
{title:"MinSize",id:"minsize",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Minimum font size to use when scaling text (pixels). "},
{title:"OffSet",id:"offset",enabled:"0",type:"label"},
{title:"X",id:"$OFFSET&x",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Offset values for labels, relative to the lower left hand corner of the label and the label point. Given in pixels."},
{title:"Y",id:"$OFFSET&y",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Offset values for labels, relative to the lower left hand corner of the label and the label point. Given in pixels."},
{title:"OutlineColor",id:"outlinecolor",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to draw a one pixel outline around the characters in the text."},
{title:"OutlineWidth",id:"outlinewidth",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Width of the outline if OUTLINECOLOR has been set. "},
{title:"Partials",id:"partials",enabled:"0",type:"radio",doptions:"TRUE|FALSE"},
{title:"Position",id:"position",enabled:"0",type:"tdropdown",doptions:"ul|uc|ur|cl|cc|cr|ll|lc|lr|auto"},
{title:"Priority",id:"priority",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The priority parameter takes an integer value between 1 (lowest) and 10 (highest)."},
{title:"Repeatdistance",id:"repeatdistance",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"The label will be repeated on every line of a multiline shape and will be repeated multiple times along a given line at an interval of REPEATDISTANCE pixels."},
{title:"ShadowColor",id:"shadowcolor",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color of drop shadow. A label with the same text will be rendered in this color before the main label is drawn, resulting in a shadow effect on the the label characters."},
{title:"Symbol",id:"symbol",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:""},
{title:"ShadowSize",id:"shadowsize",enabled:"0",type:"label"},
{title:"X",id:"$SHADOWSIZE&x",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Shadow offset in pixels, see SHADOWCOLOR."},
{title:"Y",id:"$SHADOWSIZE&y",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Shadow offset in pixels, see SHADOWCOLOR."},
{title:"Size",id:"size",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Text size. Use a number to give the size in pixels of your TrueType font based label, or any of the other 5 listed keywords for bitmap fonts."},
{title:"Text",id:"text",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Text to label features with (useful when multiple labels are used). Overrides values obtained from the LAYER LABELITEM and the CLASS TEXT."},
{title:"Type",id:"type",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Type of font to use. Generally bitmap fonts are faster to draw then TrueType fonts. "},
{title:"Wrap",id:"wrap",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Character that represents an end-of-line condition in label text, thus resulting in a multi-line label. Interacts with MAXLENGTH for conditional line wrapping after a given number of characters"}];



       var STYLEPROPERTIES = [{title:"Angle",id:"angle",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Angle, given in degrees, to rotate the symbol (counter clockwise). "},
       {title:"AngleItem",id:"angleitem",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:""},
{title:"AntiAlias",id:"antialias",enabled:"0",type:"dropdown",doptions:"TRUE|FALSE"},
{title:"BackgroundColor",id:"backgroundcolor",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to use for non-transparent symbols."},
{title:"Color",id:"color",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to use for drawing features."},
{title:"Gap",id:"gap",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"GAP specifies the distance between SYMBOLs (center to center) for decorated lines and polygon fills in layer SIZEUNITS. For polygon fills, GAP specifies the distance between SYMBOLs in both the X and the Y direction. For lines, the centers of the SYMBOLs are placed on the line. "},
{title:"GeomTransform",id:"geomtransform",enabled:"0",type:"dropdown",doptions:"bbox|centroid|end|labelpnt|labelpoly|start|vertices|<expression>"},
{title:"InitialGap",id:"initialgap",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Used to indicate that the current feature will be transformed before the actual style is applied. "},
{title:"LineCap",id:"linecap",enabled:"0",type:"dropdown",doptions:"butt|round|square"},
{title:"LineJoin",id:"linejoin",enabled:"0",type:"dropdown",doptions:"round|miter|bevel"},
{title:"LineJoinMaxSize",id:"linejoinmaxsize",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Sets the max length of the miter LINEJOIN type. The value represents a coefficient which multiplies a current symbol size."},
{title:"MaxScaleDenom",id:"maxscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Minimum scale at which this STYLE is drawn. "},
{title:"MaxSize",id:"maxsize",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Maximum size in pixels to draw a symbol. "},
{title:"MaxWidth",id:"maxwidth",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Maximum width in pixels to draw the line work."},
{title:"MinScaleDenom",id:"minscaledenom",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Maximum scale at which this STYLE is drawn."},
{title:"MinSize",id:"minsize",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Minimum size in pixels to draw a symbol. "},
{title:"MinWidth",id:"minwidth",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Minimum width in pixels to draw the line work."},
{title:"OffSet",id:"offset",enabled:"0",type:"label"},
{title:"X",id:"$OFFSET&x",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Geometry offset values in layer SIZEUNITS. In the general case, SIZEUNITS will be pixels."},
{title:"Y",id:"$OFFSET&y",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Geometry offset values in layer SIZEUNITS. In the general case, SIZEUNITS will be pixels."},
{title:"Opacity",id:"opacity",enabled:"0",type:"slider"},
{title:"OutlineColor",id:"outlinecolor",enabled:"0",type:"colorpicker",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Color to use for outlining polygons and certain marker symbols (ellipse, vector polygons and truetype). Has no effect for lines."},
{title:"OutlineWidth",id:"outlinewidth",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Width in pixels for the outline. "},
{title:"Pattern",id:"pattern",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Used to define a dash pattern for line work (lines, polygon outlines, hatch lines, ...). "},
{title:"PolarOffset",id:"polaroffset",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Offset given in polar coordinates."},
{title:"Size",id:"size",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Height, in layer SIZEUNITS, of the symbol/pattern to be used."},
{title:"Width",id:"width",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"WIDTH refers to the thickness of line work drawn, in layer SIZEUNITS."}];




       var CLUSTERPROPERTIES = [{title:"MaxDistance",id:"maxdistance",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Specifies the distance of the search region (rectangle or ellipse) in pixel positions."},
       {title:"Region",id:"region",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Defines the search region around a feature in which the neighbouring features are negotiated. Can be ‘rectangle’ or ‘ellipse’."},
{title:"Buffer",id:"buffer",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"Defines a buffer region around the map extent in pixels."},
{title:"Group",id:"group",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"This expression evaluates to a string and only the features that have the same group value are negotiated."},
{title:"Filter",id:"filter",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"We can define the FILTER expression filter some of the features from the final output. This expression evaluates to a boolean value and if this value is false the corresponding shape is filtered out. "}];



       var COMPSITEPROPERTIES = [{title:"Opacity",id:"opacity",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Sets the opacity level (or the inability to see through the layer) of all classed pixels for a given layer. A value of 100 is opaque and 0 is fully transparent."},
       {title:"ComPop",id:"compop",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Name of the compositing operator to use when blending the temporary image onto the main map image. "}];



       var GRIDPROPERTIES = [{title:"LabelFormat",id:"labelformat",enabled:"0",type:"dropdown",doptions:"DD|DDMM|DDMMSS|C format string"},
{title:"MinArcs",id:"minarcs",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"The minimum number of arcs to draw. Increase this parameter to get more lines. "},
{title:"MaxArcs",id:"maxarcs",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"The maximum number of arcs to draw. Decrease this parameter to get fewer lines. "},
{title:"MinInterval",id:"mininterval",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"The minimum number of intervals to try to use. The distance between the grid lines, in the units of the grid’s coordinate system."},
{title:"MaxInterval",id:"maxinterval",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"The maximum number of intervals to try to use. The distance between the grid lines, in the units of the grid’s coordinate system."},
{title:"MinSubdivide",id:"minsubdivide",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"The minimum number of segments to use when rendering an arc. If the lines should be very curved, use this to smooth the lines by adding more segments. "},
{title:"MaxSubDivide",id:"maxsubdivide",enabled:"0",type:"textbox",vstring:{regex:"[^.0-9]",required:"true"},tooltip:"The maximum number of segments to use when rendering an arc. If the graticule should be very straight, use this to minimize the number of points for faster rendering. "}];



       var JOINPROPERTIES = [{title:"ConnectionType",id:"connectiontype",enabled:"0",type:"dropdown",doptions:"csv|mysql|postgresql"},
{title:"Footer",id:"footer",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Template to use after a layer’s set of results have been sent. In other words, this header HTML will be displayed after the contents of the TEMPLATE HTML."},
{title:"From",id:"from",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Join column in the dataset. This is case sensitive."},
{title:"Header",id:"*header",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Template to use before a layer’s set of results have been sent. In other words, this header HTML will be displayed before the contents of the TEMPLATE HTML."},
{title:"Name",id:"name",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Unique name for this join. "},
{title:"Table",id:"table",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"For file-based joins this is the name of XBase or comma delimited file (relative to the location of the mapfile) to join TO. For PostgreSQL support this is the name of the PostgreSQL table to join TO."},
{title:"Template",id:"template",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Template to use with one-to-many joins. The template is processed once for each record and can only contain substitutions for columns in the joined table."},
{title:"To",id:"to",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Join column in the table to be joined. This is case sensitive."},
{title:"Type",id:"type",enabled:"0",type:"dropdown",doptions:"ONE-TO-ONE|ONE-TO-MANY"}];



       var LEADERPROPERTIES = [{title:"GridStep",id:"gridstep",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Specifies the number of pixels between positions that are tested for a label line. "},
       {title:"MaxDistance",id:"maxdistance",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Specifies the maximum distance in pixels from the normal label location that a leader line can be drawn."}];



       var SYMBOLPROPERTIES = [{title:"AnchorPoint",id:"anchorpoint",enabled:"0",type:"label"},
{title:"X",id:"$ANCHORPOINT&x",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Used to specify the location (within the symbol) that is to be used as an anchorpoint when rotating the symbol and placing the symbol on a map."},
{title:"Y",id:"$ANCHORPOINT&y",enabled:"0",type:"textbox",vstring:{regex:"[^0-9]",required:"true"},tooltip:"Used to specify the location (within the symbol) that is to be used as an anchorpoint when rotating the symbol and placing the symbol on a map."},
{title:"AntiAlias",id:"antialias",enabled:"0",type:"dropdown",doptions:"TRUE|FALSE"},
{title:"Character",id:"character",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Character used to reference a particular TrueType font character. You’ll need to figure out the mapping from the keyboard character to font character."},
{title:"Filled",id:"filled",enabled:"0",type:"dropdown",doptions:"TRUE|FALSE"},
{title:"Font",id:"font",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Name of TrueType font to use as defined in the FONTSET."},
{title:"Image",id:"image",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Image (GIF or PNG) to use as a marker or brush for type pixmap symbols."},
{title:"Name",id:"name",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Alias for the symbol. To be used in CLASS STYLE objects."},
{title:"Points",id:"points",enabled:"0",type:"textbox",vstring:{regex:"[^ 0-9]",required:"true"},tooltip:"Signifies the start of a sequence of points that make up a symbol of TYPE vector or that define the x and y radius of a symbol of TYPE ellipse. "},
{title:"Transparent",id:"transparent",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Sets a transparent color for the input image for pixmap symbols, or determines whether all shade symbols should have a transparent background. "},
{title:"Type",id:"type",enabled:"0",type:"dropdown",doptions:"ellipse|hatch|pixmap|svg|truetype|vector"}];

var FEATUREPROPERTIES = [{title:"Points",id:"points",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"A set of xy pairs terminated with an END."},
{title:"Items",id:"items",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"Comma separated list of the feature attributes"},
{title:"Text",id:"text",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"String to use for labeling this feature."},
{title:"Wkt",id:"wkt",enabled:"0",type:"textbox",vstring:{regex:"[^A-Za-z.0-9]",required:"true"},tooltip:"A geometry expressed in OpenGIS Well Known Text geometry format. This feature is only supported if MapServer is built with OGR or GEOS support."}];

var PROPSMAP={'Map': MAPPROPERTIES, 'Layer':LAYERPROPERTIES,'Projection':PROJECTIONPROPERTIES,'Web':WEBPROPERTIES,'Legend':LEGENDPROPERTIES,'Scalebar':SCALEBARPROPERTIES,
              'Querymap': QUERYMAPPROPERIES, 'Outputformat':OUTPUTFORMATPROPERTIES,'Reference':REFERENCEPROPERTIES,'Class':CLASSPROPERTIES,'Label':LABELPROPERTIES,
              'Style':STYLEPROPERTIES,'Cluster':CLUSTERPROPERTIES,'Composite':COMPSITEPROPERTIES,'Grid':GRIDPROPERTIES, 'Join':JOINPROPERTIES,'Leader':LEADERPROPERTIES,
              'Symbol':SYMBOLPROPERTIES,'Feature':FEATUREPROPERTIES
             };





  /*Default Values */

 var DEFAULTVAL={Map:{"angle":"0","CONFIG^cgi_context_url":"","CONFIG^ms_encryption_key":"","CONFIG^ms_errorfile":"",
"CONFIG^ms_nonsquare":"","CONFIG^on_missing_data":"","CONFIG^proj_lib":"","datapattern":"","debug":"",defresolution:"72",
"$EXTENT&minx":"","$EXTENT&miny":"","$EXTENT&maxx":"","$EXTENT&maxy":"","fontset":"",
"imagecolor":"#FFFFFF","imagequality":"80","imagetype":"png","interlace":"","maxsize":"2048","name":"","resolution":"72","scaledenom":"",
"shapepath":"","$SIZE&x":"","$SIZE&y":"","status":"","symbolset":"","templatepattern":"","transparent":"","units":""},
Layer:{"classgroup":"","classitem":"","connection":"","connectiontype":"local",
"data":"","debug":"","dump":"","encoding":"","$EXTENT&minx":"","$EXTENT&miny":"","$EXTENT&maxx":"","$EXTENT&maxy":"",
"filter":"","filteritem":"","footer":"","geomtransform":"","group":"","header":"","labelangleitem":"","labelcache":"on",
"labelitem":"lu_name","labelmaxscaledenom":"","labelminscaledenom":"","labelrequires":"","labelsizeitem":"","mask":"","maxfeatures":"",
"maxgeowidth":"","maxscaledenom":"","mingeowidth":"","minscaledenom":"","name":"","offsite":"#FFFFFF","opacity":"",
"plugin":"","postlabelcache":"false","processing":"","requires":"","sizeunits":"pixels",
"status":"","styleitem":"","symbolscaledenom":"","template":"","tileindex":"","tileitem":"location",
"tilesrs":"","":"","toleranceunits":"","transparency":"","transform":"true","type":"","units":"","utfdata":"","utfitem":""},
Web:{"browseformat":"","empty":"","error":"","footer":"","header":"","imagepath":"","imageurl":"",
"legendformat":"image/svg+xml","LOG":"","maxscaledenom":"25000","maxscale":"100000","maxtemplate":"",
"minscaledenom":"3000","minscale":"","mintemplate":"","queryformat":"text/html","template":"","temppath":""},
Outputformat:{"driver":"","extension":"png","formatoption":"GAMMA=0.75","imagemode":"rgb","mimetype":"image/png",
"name":"png","transparent":"on"},
Legend:{"imagecolor":"#FFFFFF","interlace":"on","$KEYSIZE&x":"20","$KEYSIZE&y":"10","$KEYSPACING&x":"5","$KEYSPACING&y":"5","outlinecolor":"#FFFFFF",
"position":"lr","postlabelcache":"false","status":"","template":"","transparent":"off"},
Scalebar:{"align":"Center","backgroundcolor":"#FFFFFF","color":"#FFFFFF","imagecolor":"#FFFFFF","interlace":"on","intervals":"4","outlinecolor":"#FFFFFF","position":"lr",
"postlabelcache":"false","$SIZE&x":"","$SIZE&y":"","status":"off","style":"","transparent":"off","units":"miles"},
Querymap:{"color":"#FFFF00","$SIZE&x":"","$SIZE&y":"","status":"","Style":""},
Reference:{"color":"#FF0000","$EXTENT&minx":"","$EXTENT&miny":"","$EXTENT&maxx":"","$EXTENT&maxy":"",
"image":"","marker":"","markersize":"","minboxsize":"","maxboxsize":"","outlinecolor":"#FFFFFF","$SIZE&x":"","$SIZE&y":"","status":"off"},
Class:{"debug":"","expression":"","group":"","keyimage":"","maxscaledenom":"",
"maxsize":"","minscaledenom":"","minsize":"","name":""},
Label:{"align":"","angle":"0","antialias":"FALSE","backgroundcolor":"#FFFFFF","backgroundshadowcolor":"#FFFFFF","$BACKGROUNDSHADOWSIZE&x":"1",
"$BACKGROUNDSHADOWSIZE&y":"1","buffer":"0","color":"#FFFFFF","encoding":"","expression":"","font":"","force":"FALSE","maxlength":"",
"maxoverlapangle":"","maxscaledenom":"","maxsize":"256","mindistance":"","minfeaturesize":"","minscaledenom":"",
"minsize":"4","$OFFSET&x":"","$OFFSET&y":"","outlinecolor":"#FFFFFF","outlinewidth":"","partials":"true","position":"","priority":"1",
"repeatdistance":"","shadowcolor":"","$SHADOWSIZE&x":"","$SHADOWSIZE&y":"","size":"","text":"","type":"","wrap":""},
Class:{"backgroundcolor":"#FFFFFF","color":"#FFFFFF","debug":"","expression":"",
"group":"","keyimage":"","maxscaledenom":"","maxsize":"","minscaledenom":"","minsize":"","name":"",
"outlinecolor":"#FFFFFF","size":"","status":"","symbol":"","template":"","text":""},
Style:{"angle":"0","angleitem":"","antialias":"false","backgroundcolor":"#FFFFFF","color":"#FFFFFF","gap":"",
"geomtransform":"","initialgap":"","linecap":"round","linejoin":"round","linejoinmaxsize":"3","maxscaledenom":"","maxsize":"500","maxwidth":"32",
"minscaledenom":"","minsize":"0","minwidth":"0","$OFFSET&x":"","$OFFSET&y":"","opacity":"","outlinecolor":"#FFFFFF","outlinewidth":"0",
"pattern":"","polaroffset":"","size":"","width":"1.0"},
Cluster:{"maxdistance":"","region":"","buffer":"0","group":"","filter":""},
Composite:{"opacity":"","compop":""},
Grid:{"labelformat":"","minarcs":"","maxarcs":"","mininterval":"","maxinterval":"","minsubdivide":"","maxsubdivide":"256"},
Join:{"connectiontype":"","footer":"","from":"","header":"","name":"","table":"","template":"","to":"0","type":"one-to-one"},
Leader:{"gridstep":"","maxdistance":""},
Symbol:{"$ANCHORPOINT&x":"0.5","$ANCHORPOINT&y":"0.5","antialias":"false","character":"","filled":"false","font":"","image":"",
"name":"","points":"","transparent":"","type":""},Feature:{"points":"","items":"","text":"","wkt":""},
Projection:{"proj4":""}};


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

       addTab("1",arrayVal,"0",arrayVal.length,name);
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

       addTab("1",arrayVal,"0",arrayVal.length,name);
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

       addTab("1",arrayVal,"0","10",name);
       addTab("2",arrayVal,"10",arrayVal.length,name);
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
       addTab("2",arrayVal,"10","20",name);
       addTab("3",arrayVal,"20","30",name);
       addTab("4",arrayVal,"30","40",name);
       addTab("5",arrayVal,"40","50",name);
       addTab("6",arrayVal,"50",arrayVal.length,name);
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

		// var $th = $('#' + elmid);
		var $th = document.getElementById(elmid);
		
		var regExp = "";
		var maxlen = "";
		var maxval = "";
		// var reg="/^[0-9]+\.?[0-9]*$/";
		if (validstr.regex) {
			regExp = new RegExp(validstr.regex);
			$th.value=$th.value.replace(regExp, '');
		}
		// $th.value=$th.value.replace(reg, '');
		
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
  
function addTab(val, arrContent, initialval, limitval, contentVal) {

	var name = "Group" + val;

	// to remove
	$("#" + name).remove();

	// hide other tabs
	$("#tabs li").removeClass("current");
	$("#content p").hide();
	// add new tab and related content
	$("#tabs").append("<li class='current'><a class='tab nojump' id='" + name + "' href='#'>" + name + "</a></li>");

	$("#content").append("<p class='content" + val + "' id='" + name + "_content'>" + "" + "</p>");

	// set the newly added tab as current
	$("#" + name + "_content").show();

	//loading table

	table = d3.select(".content" + val).append("table").attr("class", "table table-bordered table-hover");

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
	} else {
		loadArr = DEFAULTVAL[ACTIVEPROPERTY];
	}
	if(ACTIVEPROPERTY!="MetaData"){
		
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
			tr.append('td').append("input").attr("type", "textbox").attr("id", values.id).attr("name", values.id).attr("value", loadVal)
						.attr("data-toggle","tooltip").attr("title",temptitle)
						// .attr("class","item-required")
						.attr("onkeyup", "Validate('"+tempid+"')");
			$('[data-toggle="tooltip"]').tooltip({placement: "right"});
												
		} else if (values.type == "dropdown") {
			var trtemp = tr.append('td').append("select").attr("id", values.id);
			var options = values.doptions.split('|');
			for (var k = 0; k < options.length; k++) {
				if (loadVal == options[k]) {
					trtemp.append("option").attr("value", options[k]).attr("selected", "selected").append("span").text(options[k]);
				} else {
					trtemp.append("option").attr("value", options[k]).append("span").text(options[k]);
				}
			}
		} else if (values.type == "radio") {
			var trtemp = tr.append('td');
			var options = values.doptions.split('|');
			for (var t = 0; t < options.length; t++) {
				if (loadVal == options[t]) {
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
			if (loadVal == "on") {
				tr.append('td').append("input").attr("type", "checkbox").attr("id", values.id).attr("checked", "true").attr("class", "chk");
			} else {
				tr.append('td').append("input").attr("type", "checkbox").attr("id", values.id).attr("class", "chk");
			}
			$('.chk').bootstrapSwitch();
		}
		tr.exit().remove();
	}
	}else{
		if( (propsArr==undefined) || jQuery.isEmptyObject( propsArr ) ){
			tr.enter().append("tr");
        	tr.append('td').append("input").attr("type", "textbox").attr("class", "metadata").attr("id", "metadatakey1");
        	tr.append('td').append("input").attr("type", "textbox").attr("id", "metadatavalue1");
        	tr.exit().remove();
			
		}else{
			var tempvar=1;
			for (var key in propsArr) {
				tr.enter().append("tr");
        		tr.append('td').append("input").attr("type", "textbox").attr("class", "metadata").attr("id", "metadatakey"+tempvar).attr("value", key);
        		tr.append('td').append("input").attr("type", "textbox").attr("id", "metadatavalue"+tempvar).attr("value", propsArr[key]);
        		tr.exit().remove();
        		tempvar++;
			}
       }
       tr.enter().append("tr").attr("class", "trmetadata");
       tr.append('td').append("input").attr("onclick","appendText('trmetadata')").attr("type", "button").attr("value", "Add more");
       tr.exit().remove();
	}
}


function appendText(container) {
    var numItems = $('.metadata').length+1;
    $( "<tr><td><input type='text' class='metadata' id='metadatakey" + numItems + "'></td><td><input type='text' id='metadatavalue" + numItems + "'></td></tr>" ).insertBefore( $( "." + container ) );
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
         	 addActionBar(buildNoneActions(),"Web",d);
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
         	 addActionBar(buildNoneActions(),"Style",d);
         	 addPropertyStyle(STYLEPROPERTIES,d.name);
         	 pactive=true;
         }else if(options.nodetype === "MetaData"){
         	 buildFrame(tip);
         	 addActionBar(buildNoneActions(),"Style",d);
         	 addPropertyMetaData({},d.name);
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
		
		if (key != "MetaData") {
			var p = PROPSMAP[key];
			
			for (var q = 0; q < p.length; q++) {

				var elm = p[q];
				var id = elm.id;

				if (id.charAt(0) != "$") {

					var val = "";
					if (elm.type == "textbox" || elm.type == "colorpicker" || elm.type == "dropdown") {
						if (elm.type == 'colorpicker') {
							val = "'" + document.getElementById(id).value + "'";
						} else {

							if (document.getElementById(id)) {
								val = document.getElementById(id).value;
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
								val = "off";
							}
						}
					}

					if (val != "") {
						id = id.replace("*", "");
						id = id.replace("^", " ");
						result[id] = val;
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
		} else {
			var keycount = $('.metadata').length;	
			for (var k = 1; k <= keycount; k++) {
				var keyelm="";var valueelm="";
				if (document.getElementById("metadatakey" + k)) {
						keyelm = document.getElementById("metadatakey" + k).value;
				}
				if (document.getElementById("metadatavalue" + k)) {
						valueelm = document.getElementById("metadatavalue" + k).value;
				}
				if(keyelm!=null && keyelm!="" && valueelm!=null && valueelm!=""){
					result[keyelm] = valueelm;
				}
			}
		}
		// console.log(result);
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


      var tip;
      tip = d3.selectAll("." + options.type).classed('in', false);
      pactive=false;
      return setTimeout(function() {
        return tip.remove();
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
   	  var layerActions=["Class","Cluster","Composite","Feature","Grid","Join","Projection","MetaData"];

   	  return layerActions;

   }
   function buildClassActions()
   {
   	  var classActions=["Label","Leader","Style","MetaData"];

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



  });
};


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
                     

                     
                     
                    //code to add end tag for values in endvalues array
                     if(ENDVALUES.indexOf(k) > -1){
                     	DATABUFFER += tempstr + k.toUpperCase() + "\n";
                     	DATABUFFER += tempstr + "\t" + " " + props[k] + "\n";
                     	DATABUFFER += tempstr + "END" + "\n";
                     }else{
                     	DATABUFFER += tempstr + k.toUpperCase() + " " + props[k] + "\n";
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
         	   DATABUFFER = "#Mapserver Mapfile - Generated by Maptell Crowmap\n#For more information contact http://www.maptell.com/crowmap\n";
               DEPTH = 0;
             str(data[0]);
             return DATABUFFER;
         }

         function saveFile() {
  window.URL = window.webkitURL || window.URL;

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
  nodes.forEach(function(d) { d.y = d.depth * 180; });



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
	  .attr("text-anchor", function(d) {
		  return d.children || d._children ? "end" : "start"; })
	  .text(function(d) { return d.name; })
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
			p=data[j].parent
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

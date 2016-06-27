
var test;
var ACTIVEPROPERTY;


   var PROJECTIONPROPERTIES = [{title:"Prj4 String",value:"",id:"proj4",enabled:"1",type:"textbox"}];
   var LOOKUP={EXTENT:["minx","miny","maxx","maxy"],SIZE:["x","y"],KEYSIZE:["x","y"],KEYSPACING:["x","y"],BACKGROUNDSHADOWSIZE:["x","y"],OFFSET:["x","y"],SHADOWSIZE:["x","y"] };



 var MAPPROPERTIES = [{title:"Name*",value:"0",id:"name",enabled:"0",type:"textbox"},{title:"Size",value:"0",id:"size",enabled:"0",type:"label"},{title:"X",value:"0",id:"$SIZE&x",enabled:"0",type:"textbox"},
{title:"Y",value:"0",id:"$SIZE&y",enabled:"0",type:"textbox"},{title:"Extent",value:"0",id:"extent",enabled:"0",type:"label"},
{title:"Minx",value:"0", id:"$EXTENT&minx",enabled:"0",type:"textbox"},
{title:"Miny",value:"0",id:"$EXTENT&miny",enabled:"0",type:"textbox"},
{title:"Maxx",value:"0",id:"$EXTENT&maxx",enabled:"0",type:"textbox"},
{title:"Maxy",value:"0",id:"$EXTENT&maxy",enabled:"0",type:"textbox"},
{title:"Status",value:"0",id:"status",enabled:"0",type:"switch"},
{title:"Shapepath",value:"0",id:"shapepath",enabled:"0",type:"textbox"},
{title:"Symbolset",value:"0",id:"symbolset",enabled:"0",type:"textbox"},
{title:"FontSet",value:"0",id:"fontset",enabled:"0",type:"textbox"},
{title:"Imagetype",value:"0",id:"imagetype",enabled:"0",type:"dropdown",doptions:"jpeg|pdf|png|svg|...|userdefined"},
{title:"ImageColor",value:"0",id:"imagecolor",enabled:"0",type:"colorpicker"},
{title:"Imagequality",value:"0",id:"imagequality",enabled:"0",type:"textbox"},
{title:"Resolution",value:"0",id:"resolution",enabled:"0",type:"textbox"},
{title:"Defresolution",value:"0",id:"defresolution",enabled:"0",type:"textbox"},
{title:"Scaledenom",value:"0",id:"scaledenom",enabled:"0",type:"textbox"},
{title:"MaxSize",value:"0",id:"maxsize",enabled:"0",type:"textbox"},
{title:"Transparent",value:"0",id:"transparent",enabled:"0",type:"switch"},
{title:"Units",value:"0",id:"units",enabled:"0",type:"dropdown",doptions:"dd|feet|inches|kilometers|meters|miles|nauticalmiles"},
{title:"TemplatePattern",value:"0",id:"templatepattern",enabled:"0",type:"textbox"},
{title:"DataPattern",value:"0",id:"datapattern",enabled:"0",type:"textbox"},
{title:"Debug",value:"0",id:"debug",enabled:"0",type:"dropdown",doptions:"on|off|0|1|2|3|4|5"},
{title:"Interlace",value:"0",id:"interlace",enabled:"0",type:"switch"},{title:"Angle",value:"0",id:"angle",enabled:"0",type:"textbox"},
{title:"Config",value:"0",id:"config",enabled:"0",type:"label"},
{title:"CGI_CONTEXT_URL",value:"0",id:"CONFIG^cgi_context_url",enabled:"0",type:"textbox"},{title:"MS_ENCRYPTION_KEY",value:"0",id:"CONFIG^ms_encryption_key",enabled:"0",type:"textbox"},
{title:"MS_ERRORFILE",value:"0",id:"CONFIG^ms_errorfile",enabled:"0",type:"textbox"},{title:"MS_NONSQUARE",value:"0",id:"CONFIG^ms_nonsquare",enabled:"0",type:"switch"},
{title:"ON_MISSING_DATA",value:"0",id:"CONFIG^on_missing_data",enabled:"0",type:"dropdown",doptions:"FAIL|LOG|IGNORE"},{title:"PROJ_LIB",value:"0",id:"CONFIG^proj_lib",enabled:"0",type:"textbox"},

];


 var LAYERPROPERTIES = [{title:"Classgroup",value:"0",id:"classgroup",enabled:"0",type:"textbox"},{title:"Classitem",value:"0",id:"classitem",enabled:"0",type:"textbox"},
{title:"Connection",value:"0",id:"connection",enabled:"0",type:"textbox"},
{title:"ConnectionType",value:"0",id:"connectiontype",enabled:"0",type:"dropdown",doptions:"contour|kerneldensity|local|ogr|oraclespatial|plugin|postgis|sde|union|uvraster|wfs|wms"},
{title:"Data",value:"0",id:"data",enabled:"0",type:"textbox"},
{title:"Debug",value:"0",id:"debug",enabled:"0",type:"radio",doptions:"on|off|0|1|2|3|4|5"},{title:"Dump",value:"0",id:"dump",enabled:"0",type:"radio",doptions:"True|False"},
{title:"Encoding",value:"0",id:"encoding",enabled:"0",type:"textbox"},
{title:"Extent",value:"0",id:"extent",enabled:"0",type:"label"},
{title:"Minx",value:"0",id:"$EXTENT&minx",enabled:"0",type:"textbox"},
{title:"Miny",value:"0",id:"$EXTENT&miny",enabled:"0",type:"textbox"},
{title:"Maxx",value:"0",id:"$EXTENT&maxx",enabled:"0",type:"textbox"},
{title:"Maxy",value:"0",id:"$EXTENT&maxy",enabled:"0",type:"textbox"},
{title:"Filter",value:"0",id:"filter",enabled:"0",type:"textbox"},{title:"FilterItem",value:"0",id:"filteritem",enabled:"0",type:"textbox"},
{title:"Footer",value:"0",id:"footer",enabled:"0",type:"textbox"},{title:"Geomtransform",value:"0",id:"geomtransform",enabled:"0",type:"textbox"},
{title:"Group",value:"0",id:"group",enabled:"0",type:"textbox"},{title:"Header",value:"0",id:"*header",enabled:"0",type:"textbox"},
{title:"LabelCache",value:"0",id:"labelcache",enabled:"0",type:"switch"},
{title:"LabelItem",value:"0",id:"labelitem",enabled:"0",type:"textbox"},{title:"LabelMaxScaleDenom",value:"0",id:"labelmaxscaledenom",enabled:"0",type:"textbox"},
{title:"LabelMinScaleDenom",value:"0",id:"labelminscaledenom",enabled:"0",type:"textbox"},{title:"LabelRequires",value:"0",id:"labelrequires",enabled:"0",type:"textbox"},
{title:"Mask",value:"0",id:"mask",enabled:"0",type:"textbox"},
{title:"MaxFeautres",value:"0",id:"maxfeatures",enabled:"0",type:"textbox"},{title:"MaxGeoWidth",value:"0",id:"maxgeowidth",enabled:"0",type:"textbox"},
{title:"MaxScaleDenom",value:"0",id:"maxscaledenom",enabled:"0",type:"textbox"},
{title:"MinGeoWidth",value:"0",id:"mingeowidth",enabled:"0",type:"textbox"},{title:"MinScaleDenom",value:"0",id:"minscaledenom",enabled:"0",type:"textbox"},
{title:"Name",value:"0",id:"name",enabled:"0",type:"textbox"},{title:"Offsite",value:"0",id:"offsite",enabled:"0",type:"colorpicker"},
{title:"Opacity",value:"0",id:"opacity",enabled:"0",type:"textbox"},{title:"Plugin",value:"0",id:"plugin",enabled:"0",type:"textbox"},
{title:"PostLabelCache",value:"0",id:"postlabelcache",enabled:"0",type:"radio",doptions:"True|False"},{title:"Processing",value:"0",id:"processing",enabled:"0",type:"textbox"},
{title:"Requires",value:"0",id:"requires",enabled:"0",type:"textbox"},
{title:"SizeUnits",value:"0",id:"sizeunits",enabled:"0",type:"dropdown",doptions:"feet|inches|kilometers|meters|miles|nauticalmiles|pixels"},
{title:"Status",value:"0",id:"status",enabled:"0",type:"radio",doptions:"on|off|default"},{title:"StyleItem",value:"0",id:"styleitem",enabled:"0",type:"textbox"},
{title:"SymbolScaleDenom",value:"0",id:"symbolscaledenom",enabled:"0",type:"textbox"},{title:"Template",value:"0",id:"template",enabled:"0",type:"textbox"},
{title:"TileIndex",value:"0",id:"tileindex",enabled:"0",type:"textbox"},{title:"TileItem",value:"0",id:"tileitem",enabled:"0",type:"textbox"},
{title:"TileSrs",value:"0",id:"tilesrs",enabled:"0",type:"textbox"},{title:"Tolerance",value:"0",id:"tolerance",enabled:"0",type:"textbox"},
{title:"ToleranceUnits",value:"0",id:"toleranceunits",enabled:"0",type:"dropdown",doptions:"pixels|feet|inches|kilometers|meters|miles|nauticalmiles|dd"},
{title:"Transform",value:"0",id:"transform",enabled:"0",type:"radio",doptions:"True|False"},
{title:"UTFItem",value:"0",id:"utfitem",enabled:"0",type:"textbox","doptions":"ul|uc|ur|lc|cc|lr|ll|lc|lr"},
{title:"Type",value:"0",id:"type",enabled:"0",type:"dropdown",doptions:"chart|circle|line|point|polygon|raster|query"},
{title:"Units",value:"0",id:"units",enabled:"0",type:"dropdown",doptions:"dd|feet|inches|kilometers|meters|miles|nauticalmiles|percentages|pixels"},
{title:"UTFData",value:"0",id:"utfdata",enabled:"0",type:"textbox"},{title:"UTFItem",value:"0",id:"utfitem",enabled:"0",type:"textbox"}];

var WEBPROPERTIES = [{title:"BrowseFormat",value:"0",id:"browseformat",enabled:"0",type:"textbox"},{title:"Empty",value:"0",id:"empty",enabled:"0",type:"textbox"},
{title:"Error",value:"0",id:"error",enabled:"0",type:"textbox"},{title:"Footer",value:"0",id:"footer",enabled:"0",type:"textbox"},
{title:"Header",value:"0",id:"*header",enabled:"0",type:"textbox"},{title:"ImagePath",value:"0",id:"imagepath",enabled:"0",type:"textbox"},
{title:"ImageUrl",value:"0",id:"imageurl",enabled:"0",type:"textbox"},{title:"LegendFormat",value:"0",id:"legendformat",enabled:"0",type:"textbox"},
{title:"Log",value:"0",id:"log",enabled:"0",type:"textbox"},{title:"MaxScaleDenom",value:"0",id:"maxscaledenom",enabled:"0",type:"textbox"},
{title:"MaxScale",value:"0",id:"maxscale",enabled:"0",type:"textbox"},{title:"MaxTemplate",value:"0",id:"maxtemplate",enabled:"0",type:"textbox"},
{title:"MinScaleDenom",value:"0",id:"minscaledenom",enabled:"0",type:"textbox"},
{title:"MinScale",value:"0",id:"minscale",enabled:"0",type:"textbox"},{title:"MinTemplate",value:"0",id:"mintemplate",enabled:"0",type:"textbox"},
{title:"QueryFormat",value:"0",id:"queryformat",enabled:"0",type:"textbox"},{title:"Template",value:"0",id:"template",enabled:"0",type:"textbox"},
{title:"TempPath",value:"0",id:"temppath",enabled:"0",type:"textbox"},{title:"Validation",value:"0",id:"validation",enabled:"0",type:"textbox"}];

    var LEGENDPROPERTIES = [{title:"ImageColor",value:"0",id:"imagecolor",enabled:"0",type:"colorpicker"},{title:"Interlace",value:"0",id:"interlace",enabled:"0",type:"switch",doptions:"True|False"},
{title:"KeySize",value:"0",id:"keysize",enabled:"0",type:"label"},{title:"X",value:"0",id:"$KEYSIZE&x",enabled:"0",type:"textbox"},
{title:"Y",value:"0",id:"$KEYSIZE&y",enabled:"0",type:"textbox"},{title:"KeySpacing",value:"0",id:"keyspacing",enabled:"0",type:"label"},
{title:"X",value:"0",id:"$KEYSPACING&x",enabled:"0",type:"textbox"},{title:"Y",value:"0",id:"$KEYSPACING&y",enabled:"0",type:"textbox"},
{title:"OutlineColour",value:"0",id:"outlinecolor",enabled:"0",type:"colorpicker"},
{title:"Position",value:"0",id:"position",enabled:"0",type:"dropdown",doptions:"ul|uc|ur|ll|lc|lr"},{title:"PostLabelCache",value:"0",id:"postlabelcache",enabled:"0",type:"switch",doptions:"True|False"},
{title:"Status",value:"0",id:"status",enabled:"0",type:"dropdown",doptions:"on|off|embed"},{title:"Template",value:"0",id:"template",enabled:"0",type:"textbox"},
{title:"Transparent",value:"0",id:"transparent",enabled:"0",type:"switch"}];


   var SCALEBARPROPERTIES = [{title:"Align",value:"0",id:"align",enabled:"0",type:"dropdown",doptions:"left|center|right"},{title:"BackgroundColor",value:"0",id:"backgroundcolor",enabled:"0",type:"colorpicker"},
{title:"Color",value:"0",id:"color",enabled:"0",type:"colorpicker"},{title:"ImageColor",value:"0",id:"imagecolor",enabled:"0",type:"colorpicker"},
{title:"Interlace",value:"0",id:"interlace",enabled:"0",type:"radio",doptions:"true|false"},{title:"Intervals",value:"0",id:"intervals",enabled:"0",type:"textbox"},
{title:"Outlinecolor",value:"0",id:"outlinecolor",enabled:"0",type:"colorpicker"},{title:"Position",value:"0",id:"position",enabled:"0",type:"dropdown",doptions:"ul|uc|ur|ll|lc|lr"},
{title:"PostLabelCache",value:"0",id:"postlabelcache",enabled:"0",type:"switch",doptions:"True|False"},
{title:"Size",value:"0",id:"size",enabled:"0",type:"label"},{title:"X",value:"0",id:"$SIZE&x",enabled:"0",type:"textbox"},
{title:"Y",value:"0",id:"$SIZE&y",enabled:"0",type:"textbox"},{title:"Status",value:"0",id:"status",enabled:"0",type:"dropdown",doptions:"on|off|embed"},
{title:"Style",value:"0",id:"style",enabled:"0",type:"textbox"},{title:"Transparent",value:"0",id:"transparent",enabled:"0",type:"switch"},
{title:"Units",value:"0",id:"units",enabled:"0",type:"dropdown",doptions:"dd|feet|inches|kilometers|meters|miles|nauticalmiles|percentages|pixels"}];


var QUERYMAPPROPERIES = [{title:"Color",value:"0",id:"color",enabled:"0",type:"colorpicker"},{title:"Size",value:"0",id:"size",enabled:"0",type:"label"},
{title:"X",value:"0",id:"$SIZE&x",enabled:"0",type:"textbox"},{title:"Y",value:"0",id:"$SIZE&y",enabled:"0",type:"textbox"},
{title:"Status",value:"0",id:"status",enabled:"0",type:"switch"},{title:"Style",value:"0",id:"style",enabled:"0",type:"dropdown",doptions:"normal|hilite|selected"}];


var OUTPUTFORMATPROPERTIES = [{title:"Driver",value:"0",id:"driver",enabled:"0",type:"textbox"},
{title:"Extension",value:"0",id:"extension",enabled:"0",type:"textbox"},{title:"FormatOption",value:"0",id:"formatoption",enabled:"0",type:"textbox"},
{title:"ImageMode",value:"0",id:"imagemode",enabled:"0",type:"dropdown",doptions:"PC256|RGB|RGBA|INT16|FLOAT32|FEATURE"},
{title:"MIMEType",value:"0",id:"mimetype",enabled:"0",type:"textbox"},{title:"Name",value:"0",id:"name",enabled:"0",type:"textbox"},
{title:"Transparent",value:"0",id:"transparent",enabled:"0",type:"switch"}];


var REFERENCEPROPERTIES = [{title:"Color",value:"0",id:"color",enabled:"0",type:"colorpicker"},{title:"Extent",value:"0",id:"extent",enabled:"0",type:"label"},
{title:"Minx",value:"0",id:"$EXTENT&minx",enabled:"0",type:"textbox"},{title:"Miny",value:"0",id:"$EXTENT&miny",enabled:"0",type:"textbox"},
{title:"Maxx",value:"0",id:"$EXTENT&maxx",enabled:"0",type:"textbox"},{title:"Maxy",value:"0",id:"$EXTENT&maxy",enabled:"0",type:"textbox"},
{title:"Image",value:"0",id:"image",enabled:"0",type:"textbox"},{title:"Marker",value:"0",id:"marker",enabled:"0",type:"textbox"},
{title:"MarkerSize",value:"0",id:"marker",enabled:"0",type:"textbox"},{title:"MinBoxSize",value:"0",id:"minboxsize",enabled:"0",type:"textbox"},
{title:"MaxBoxSize",value:"0",id:"maxboxsize",enabled:"0",type:"textbox"},{title:"OutlineColor",value:"0",id:"outlinecolor",enabled:"0",type:"colorpicker"},
{title:"Size",value:"0",id:"size",enabled:"0",type:"label"},{title:"X",value:"0",id:"$SIZE&x",enabled:"0",type:"textbox"},
{title:"Y",value:"0",id:"$SIZE&y",enabled:"0",type:"textbox"},{title:"Status",value:"0",id:"status",enabled:"0",type:"switch"}];



       var CLASSPROPERTIES = [
{title:"Debug",value:"0",id:"debug",enabled:"0",type:"switch"},
{title:"Expression",value:"0",id:"expression",enabled:"0",type:"textbox"},
{title:"Group",value:"0",id:"group",enabled:"0",type:"textbox"},
{title:"KeyImage",value:"0",id:"keyimage",enabled:"0",type:"textbox"},
{title:"MaxScaleDenom",value:"0",id:"maxscaledenom",enabled:"0",type:"textbox"},
{title:"MaxSize",value:"0",id:"maxsize",enabled:"0",type:"textbox"},
{title:"MinScaleDenom",value:"0",id:"minscaledenom",enabled:"0",type:"textbox"},
{title:"MinSize",value:"0",id:"minsize",enabled:"0",type:"textbox"},
{title:"Name",value:"0",id:"name",enabled:"0",type:"textbox"},
{title:"Status",value:"0",id:"status",enabled:"0",type:"switch"},
{title:"Template",value:"0",id:"template",enabled:"0",type:"textbox"},
{title:"Text",value:"0",id:"text",enabled:"0",type:"textbox"}

];



       var LABELPROPERTIES = [{title:"Align",value:"0",id:"align",enabled:"0",type:"dropdown",doptions:"left|center|right"},
{title:"Angle",value:"0",id:"angle",enabled:"0",type:"dropdown",doptions:"double|auto|auto2|follow|attribute"},
{title:"AntiAlias",value:"0",id:"antialias",enabled:"0",type:"radio",doptions:"TRUE|FALSE"},
{title:"Buffer",value:"0",id:"buffer",enabled:"0",type:"textbox"},
{title:"Color",value:"0",id:"color",enabled:"0",type:"colorpicker"},
{title:"Encoding",value:"0",id:"encoding",enabled:"0",type:"textbox"},
{title:"Expression",value:"0",id:"expression",enabled:"0",type:"textbox"},
{title:"Font",value:"0",id:"font",enabled:"0",type:"label"},
{title:"Force",value:"0",id:"status",enabled:"0",type:"radio",doptions:"TRUE|FALSE"},
{title:"MaxLength",value:"0",id:"maxlength",enabled:"0",type:"textbox"},
{title:"MaxOverlapAngle",value:"0",id:"maxoverlapangle",enabled:"0",type:"textbox"},
{title:"MaxScaleDenom",value:"0",id:"maxscaledenom",enabled:"0",type:"textbox"},
{title:"MaxSize",value:"0",id:"maxsize",enabled:"0",type:"textbox"},
{title:"MinDistance",value:"0",id:"mindistance",enabled:"0",type:"textbox"},
{title:"MinFeatureSize",value:"0",id:"minfeaturesize",enabled:"0",type:"textbox"},
{title:"MinScaleDenom",value:"0",id:"minscaledenom",enabled:"0",type:"textbox"},
{title:"MinSize",value:"0",id:"minsize",enabled:"0",type:"textbox"},
{title:"OffSet",value:"0",id:"offset",enabled:"0",type:"label"},
{title:"X",value:"0",id:"$OFFSET&x",enabled:"0",type:"textbox"},
{title:"Y",value:"0",id:"$OFFSET&y",enabled:"0",type:"textbox"},
{title:"OutlineColor",value:"0",id:"outlinecolor",enabled:"0",type:"colorpicker"},
{title:"OutlineWidth",value:"0",id:"outlinewidth",enabled:"0",type:"textbox"},
{title:"Partials",value:"0",id:"partials",enabled:"0",type:"radio",doptions:"TRUE|FALSE"},
{title:"Position",value:"0",id:"position",enabled:"0",type:"tdropdown",doptions:"ul|uc|ur|cl|cc|cr|ll|lc|lr|auto"},
{title:"Priority",value:"0",id:"priority",enabled:"0",type:"textbox"},
{title:"Repeatdistance",value:"0",id:"repeatdistance",enabled:"0",type:"textbox"},
{title:"ShadowColor",value:"0",id:"shadowcolor",enabled:"0",type:"colorpicker"},
{title:"Symbol",value:"0",id:"symbol",enabled:"0",type:"textbox"},
{title:"ShadowSize",value:"0",id:"shadowsize",enabled:"0",type:"label"},
{title:"X",value:"0",id:"$SHADOWSIZE&x",enabled:"0",type:"textbox"},
{title:"Y",value:"0",id:"$SHADOWSIZE&y",enabled:"0",type:"textbox"},
{title:"Size",value:"0",id:"size",enabled:"0",type:"textbox"},
{title:"Text",value:"0",id:"text",enabled:"0",type:"textbox"},
{title:"Type",value:"0",id:"type",enabled:"0",type:"textbox"},
{title:"Wrap",value:"0",id:"wrap",enabled:"0",type:"textbox"}];



       var STYLEPROPERTIES = [{title:"Angle",value:"0",id:"angle",enabled:"0",type:"textbox"},{title:"AngleItem",value:"0",id:"angleitem",enabled:"0",type:"textbox"},
{title:"AntiAlias",value:"0",id:"antialias",enabled:"0",type:"dropdown",doptions:"TRUE|FALSE"},{title:"BackgroundColor",value:"0",id:"backgroundcolor",enabled:"0",type:"colorpicker"},
{title:"Color",value:"0",id:"color",enabled:"0",type:"colorpicker"},{title:"Gap",value:"0",id:"gap",enabled:"0",type:"textbox"},
{title:"GeomTransform",value:"0",id:"geomtransform",enabled:"0",type:"dropdown",doptions:"bbox|centroid|end|labelpnt|labelpoly|start|vertices|<expression>"},
{title:"InitialGap",value:"0",id:"initialgap",enabled:"0",type:"textbox"},{title:"LineCap",value:"0",id:"linecap",enabled:"0",type:"dropdown",doptions:"butt|round|square"},
{title:"LineJoin",value:"0",id:"linejoin",enabled:"0",type:"dropdown",doptions:"round|miter|bevel"},{title:"LineJoinMaxSize",value:"0",id:"linejoinmaxsize",enabled:"0",type:"textbox"},
{title:"MaxScaleDenom",value:"0",id:"maxscaledenom",enabled:"0",type:"textbox"},{title:"MaxSize",value:"0",id:"maxsize",enabled:"0",type:"textbox"},
{title:"MaxWidth",value:"0",id:"maxwidth",enabled:"0",type:"textbox"},
{title:"MinScaleDenom",value:"0",id:"minscaledenom",enabled:"0",type:"textbox"},{title:"MinSize",value:"0",id:"minsize",enabled:"0",type:"textbox"},
{title:"MinWidth",value:"0",id:"minwidth",enabled:"0",type:"textbox"},
{title:"OffSet",value:"0",id:"offset",enabled:"0",type:"label"},
{title:"X",value:"0",id:"offsetx",enabled:"0",type:"textbox"},{title:"Y",value:"0",id:"offsety",enabled:"0",type:"textbox"},
{title:"Opacity",value:"0",id:"opacity",enabled:"0",type:"slider"},{title:"OutlineColor",value:"0",id:"outlinecolor",enabled:"0",type:"colorpicker"},
{title:"OutlineWidth",value:"0",id:"outlinewidth",enabled:"0",type:"textbox"},{title:"Pattern",value:"0",id:"pattern",enabled:"0",type:"textbox"},
{title:"PolarOffset",value:"0",id:"polaroffset",enabled:"0",type:"textbox"},{title:"Size",value:"0",id:"size",enabled:"0",type:"textbox"},
{title:"Width",value:"0",id:"width",enabled:"0",type:"textbox"}];




       var CLUSTERPROPERTIES = [{title:"MaxDistance",value:"0",id:"maxdistance",enabled:"0",type:"textbox"},{title:"Region",value:"0",id:"region",enabled:"0",type:"textbox"},
{title:"Buffer",value:"0",id:"buffer",enabled:"0",type:"textbox"},{title:"Group",value:"0",id:"group",enabled:"0",type:"textbox"},
{title:"Filter",value:"0",id:"filter",enabled:"0",type:"textbox"}];



       var COMPSITEPROPERTIES = [{title:"Opacity",value:"0",id:"opacity",enabled:"0",type:"textbox"},{title:"ComPop",value:"0",id:"compop",enabled:"0",type:"textbox"}]



       var GRIDPROPERTIES = [{title:"LabelFormat",value:"0",id:"labelformat",enabled:"0",type:"dropdown",doptions:"DD|DDMM|DDMMSS|C format string"},
{title:"MinArcs",value:"0",id:"minarcs",enabled:"0",type:"textbox"},{title:"MaxArcs",value:"0",id:"maxarcs",enabled:"0",type:"textbox"},
{title:"MinInterval",value:"0",id:"mininterval",enabled:"0",type:"textbox"},{title:"MaxInterval",value:"0",id:"maxinterval",enabled:"0",type:"textbox"},
{title:"MinSubdivide",value:"0",id:"minsubdivide",enabled:"0",type:"textbox"},{title:"MaxSubDivide",value:"0",id:"maxsubdivide",enabled:"0",type:"textbox"}];



       var JOINPROPERTIES = [{title:"ConnectionType",value:"0",id:"connectiontype",enabled:"0",type:"dropdown",doptions:"csv|mysql|postgresql"},
{title:"Footer",value:"0",id:"footer",enabled:"0",type:"textbox"},{title:"From",value:"0",id:"from",enabled:"0",type:"textbox"},
{title:"Header",value:"0",id:"*header",enabled:"0",type:"textbox"},{title:"Name",value:"0",id:"name",enabled:"0",type:"textbox"},
{title:"Table",value:"0",id:"table",enabled:"0",type:"textbox"},{title:"Template",value:"0",id:"template",enabled:"0",type:"textbox"},
{title:"To",value:"0",id:"to",enabled:"0",type:"textbox"},{title:"Type",value:"0",id:"type",enabled:"0",type:"dropdown",doptions:"ONE-TO-ONE|ONE-TO-MANY"}];



       var LEADERPROPERTIES = [{title:"GridStep",value:"0",id:"gridstep",enabled:"0",type:"textbox"},{title:"MaxDistance",value:"0",id:"maxdistance",enabled:"0",type:"textbox"}];



       var SYMBOLPROPERTIES = [{title:"AnchorPoint",value:"0",id:"anchorpoint",enabled:"0",type:"label"},
{title:"X",value:"0",id:"$ANCHORPOINT&x",enabled:"0",type:"textbox"},{title:"Y",value:"0",id:"$ANCHORPOINT&y",enabled:"0",type:"textbox"},
{title:"AntiAlias",value:"0",id:"antialias",enabled:"0",type:"dropdown",doptions:"TRUE|FALSE"},
{title:"Character",value:"0",id:"character",enabled:"0",type:"textbox"},
{title:"Filled",value:"0",id:"filled",enabled:"0",type:"dropdown",doptions:"TRUE|FALSE"},
{title:"Font",value:"0",id:"font",enabled:"0",type:"textbox"},{title:"Image",value:"0",id:"image",enabled:"0",type:"textbox"},
{title:"Name",value:"0",id:"name",enabled:"0",type:"textbox"},{title:"Points",value:"0",id:"points",enabled:"0",type:"label"},
{title:"X",value:"0",id:"$POINTS&x",enabled:"0",type:"textbox"},{title:"Y",value:"0",id:"$POINTS&y",enabled:"0",type:"textbox"},
{title:"Transparent",value:"0",id:"transparent",enabled:"0",type:"textbox"},{title:"Type",value:"0",id:"type",enabled:"0",type:"dropdown",doptions:"ellipse|hatch|pixmap|svg|truetype|vector"}];

var FEATUREPROPERTIES = [{title:"Points",value:"0",id:"points",enabled:"0",type:"textbox"},{title:"Items",value:"0",id:"items",enabled:"0",type:"textbox"},
                                                   {title:"Text",value:"0",id:"text",enabled:"0",type:"textbox"},{title:"Wkt",value:"0",id:"wkt",enabled:"0",type:"textbox"}];

var PROPSMAP={'Map': MAPPROPERTIES, 'Layer':LAYERPROPERTIES,'Projection':PROJECTIONPROPERTIES,'Web':WEBPROPERTIES,'Legend':LEGENDPROPERTIES,'Scalebar':SCALEBARPROPERTIES,
              'Querymap': QUERYMAPPROPERIES, 'Outputformat':OUTPUTFORMATPROPERTIES,'Reference':REFERENCEPROPERTIES,'Class':CLASSPROPERTIES,'Label':LABELPROPERTIES,
              'Style':STYLEPROPERTIES,'Cluster':CLUSTERPROPERTIES,'Composite':COMPSITEPROPERTIES,'Grid':GRIDPROPERTIES, 'Join':JOINPROPERTIES,'Leader':LEADERPROPERTIES,
              'Symbol':SYMBOLPROPERTIES,'Feature':FEATUREPROPERTIES
             };





  /*Default Values */

 var DEFAULTVAL={Map:{"angle":"0","CONFIG^CGI_CONTEXT_URL":"","CONFIG^MS_ENCRYPTION_KEY":"","CONFIG^MS_ERRORFILE":"",
"CONFIG^MS_NONSQUARE":"","CONFIG^ON_MISSING_DATA":"","CONFIG^PROJ_LIB":"","Datapattern":"","debug":"",Defresolution:"",
"$EXTENT&minx":"","$EXTENT&miny":"","$EXTENT&maxx":"","$EXTENT&maxy":"","FONTSET":"",
"imagecolor":"#FFFFFF","imagequality":"80","imagetype":"png","interlace":"","maxsize":"2048","Name":"","resolution":"72","Scaledenom":"",
"Shapepath":"","$SIZE&x":"","$SIZE&y":"","Status":"","Symbolset":"","Templatepattern":"","Transparent":"","Units":""},
Layer:{"Classgroup":"","Classitem":"","Connection":"","Connectiontype":"local",
"Data":"","Debug":"","Dump":"","Encoding":"","$EXTENT&minx":"","$EXTENT&miny":"","$EXTENT&maxx":"","$EXTENT&maxy":"",
"Filter":"","Filteritem":"","Footer":"","Geomtransform":"","Group":"","Header":"","Labelangleitem":"","Labelcache":"on",
"Labelitem":"lu_name","Labelmaxscaledenom":"","Labelminscaledenom":"","Labelrequires":"","Labelsizeitem":"","Mask":"","Maxfeatures":"",
"Maxgeowidth":"","Maxscaledenom":"","mingeowidth":"","Minscaledenom":"","Name":"","Offsite":"","Opacity":"",
"Plugin":"","Postlabelcache":"","Processing":"","Requires":"","Sizeunits":"Pixels",
"Status":"","Styleitem":"","Symbolscaledenom":"","Template":"","Tileindex":"","Tileitem":"",
"Tilesrs":"","":"","Toleranceunits":"","Transparency":"","Transform":"true","Type":"","Units":"","Utfdata":"","Utfitem":""},
Web:{"Browseformat":"","Empty":"","Error":"","Footer":"","Header":"","Imagepath":"","Imageurl":"",
"Legendformat":"image/svg+xml","LOG":"","Maxscaledenom":"25000","Maxscale":"100000","Maxtemplate":"",
"Minscaledenom":"3000","Minscale":"","Mintemplate":"","Queryformat":"text/html","Template":"","Temppath":""},
OutputFormat:{"Driver":"","Extension":"png","Formatoption":"GAMMA=0.75","Imagemode":"rgb","Mimetype":"image/png",
"Name":"png","Transparent":"on"},
Legend:{"imagecolor":"#FFFF00","interlace":"ON","$KEYSIZE&x":"20","$KEYSIZE&y":"10","$KEYSPACING&x":"5","$KEYSPACING&y":"5","Outlinecolor":"",
"Position":"lr","Postlabelcache":"false","Status":"","Template":"","Transparent":""},
Scalebar:{"Align":"Center","Backgroundcolor":"","COLOR":"","Imagecolor":"","Interlace":"on","Intervals":"4","Outlinecolor":"","Position":"lr",
"Postlabelcache":"false","$SIZE&x":"","$SIZE&y":"","Status":"off","Style":"","Transparent":"OFF","Units":"miles"},
QueryMap:{"Color":"#FFFF00","$SIZE&x":"","$SIZE&y":"","Status":"","Style":""},
Reference:{"Color":"#FF0000","$EXTENT&minx":"67.429360","$EXTENT&miny":"5.758329","$EXTENT&maxx":"98.067696","$EXTENT&maxy":"38.010637",
"Image":"","Marker":"","Markersize":"","Minboxsize":"","Maxboxsize":"","Outlinecolor":"","$SIZE&x":"180","$SIZE&y":"140","Status":"off"},
Class:{"Debug":"","Expression":"","Group":"","Keyimage":"","Maxscaledenom":"",
"Maxsize":"","Minscaledenom":"","Minsize":"","Name":""},
Label:{"Align":"","Angle":"","Antialias":"FALSE","Backgroundcolor":"","Backgroundshadowcolor":"","$BACKGROUNDSHADOWSIZE&x":"",
"$BACKGROUNDSHADOWSIZE&y":"","Buffer":"","Color":"","Encoding":"","Expression":"","FONT":"","FORCE":"FALSE","MAXLENGTH":"",
"Maxoverlapangle":"22.5degrees","Maxscaledenom":"","MAXSIZE":"256","Mindistance":"","Minfeaturesize":"","Minscaledenom":"",
"Minsize":"4","$OFFSET&x":"","$OFFSET&y":"","Outlinecolor":"","Outlinewidth":"1","Partials":"true","Position":"","Priority":"1",
"Repeatdistance":"","Shadowcolor":"","$SHADOWSIZE&x":"","$SHADOWSIZE&y":"","Size":"","Text":"","Type":"","Wrap":""},
Class:{"Backgroundcolor":"","Color":"","Debug":"","Expression":"",
"Group":"","Keyimage":"","MAXSCALEDENOM":"","MAXSIZE":"","Minscaledenom":"","Minsize":"","Name":"",
"Outlinecolor":"","Size":"","Status":"","Symbol":"","Template":"","Text":""},
Style:{"Angle":"0","Angleitem":"","Antialias":"false","Backgroundcolor":"","COLOR":"","Gap":"",
"Geomtransform":"","Initialgap":"","Linecap":"round","Linejoin":"round","Linejoinmaxsize":"","Maxscaledenom":"","Maxsize":"500","Maxwidth":"32",
"Minscaledenom":"","Minsize":"0","Minwidth":"0","$OFFSET&x":"","$OFFSET&y":"","Opacity":"","Outlinecolor":"","Outlinewidth":"0",
"Pattern":"","Polaroffset":"","Size":"","Width":""},
Cluster:{"MAXDISTANCE":"","REGION":"","BUFFER":"0","GROUP":"","Filter":""},
                           Composite:{"Opacity":"","Compop":""},
Grid:{"Labelformat":"","Minarcs":"","Maxarcs":"","Mininterval":"","Maxinterval":"","Minsubdivide":"","Maxsubdivide":"256"},
Join:{"Connectiontype":"","Footer":"","From":"","Header":"","Name":"","TABLE":"","TEMPLATE":"","To":"0","Type":"one-to-one"},
Leader:{"Gridstep":"","Maxdistance":""},
Symbol:{"$ANCHORPOINT&x":"0.5","$ANCHORPOINT&y":"0.5","Antialias":"","Character":"","Filled":"false","Font":"","Image":"",
"Name":"","Points":"","Transparent":"","Type":""},Feature:{"Points":"","Items":"","Text":"","Wkt":""},Outputformat:{},Projection:{},Querymap:{}};


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
       addTab("3",arrayVal,"20","28",name);
       addTab("4",arrayVal,"28",arrayVal.length,name);
       showTab();
   }

     function isUpperCase(str) {
  		 return str === str.toUpperCase();
	}
	function startsWith(str, word) {
  		 return str.lastIndexOf(word, 0) === 0;
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

    table = d3.select(".content" + val).append("table").attr("class","table table-bordered table-hover");

    var tbody = table.append("tbody");

    var tr = tbody.selectAll("tr").data(dummy);



    //get either saved properties or default values
    var loadArr="";var propsArr="";
    for(var l=0;l<data.length;l++){
        if(data[l].name==contentVal){
            propsArr=data[l].properties;
        }
    }
    /*Load splitted once....*/

    if(propsArr!=undefined){
        for(var i in propsArr) {
            //CONFIG ^
            if(startsWith(i, "CONFIG")){
                var newid=i.replace(" ","^");
                if(!(newid in propsArr)){
                    propsArr[newid]=propsArr[i];
                    delete propsArr[i];
                }
            }

            //header
            if(i=="header"){
                var hid="*" + i;
                propsArr[hid]=propsArr[i];
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

    if(propsArr!=undefined){
        loadArr = propsArr;
    }else{
        loadArr = DEFAULTVAL[ACTIVEPROPERTY];
    }




    for (var i = initialval; i < limitval; i++) {

        tr.enter().append("tr");
        var values = arrContent[i];
        var tempid = values.id;
        
        //Code to load default val
        var loadVal = "";
        if(loadArr[tempid]!=undefined){
            loadVal = loadArr[tempid];
            
        }

        //append label
        if (values.type == "label") {
            tr.style("height", "20px").style("font-size", "15px").append('td').style("padding", "0px").style("background", "#EEEEEE").attr("colspan", "2").style("text-align", "center").append("span").text(values.title).style("color", "black");
        } else {
            tr.append('td').append("span").text(values.title);
        }

        //append controls based on type
        if (values.type == "textbox") {
            tr.append('td').append("input").attr("type", "textbox").attr("id", values.id).attr("value", loadVal);
        } else if (values.type == "dropdown") {
            var trtemp = tr.append('td').append("select").attr("id", values.id);
            var options = values.doptions.split('|');
            for (var k = 0; k < options.length; k++) {
                if(loadVal==options[k]){
                    trtemp.append("option").attr("value", options[k]).attr("selected","selected").append("span").text(options[k]);
                }else{
                    trtemp.append("option").attr("value", options[k]).append("span").text(options[k]);
                }
            }
        } else if (values.type == "radio") {
            var trtemp = tr.append('td');
            var options = values.doptions.split('|');
            for (var t = 0; t < options.length; t++) {
                if(loadVal==options[t]){
                    trtemp.append("input").attr("checked", "checked").attr("type", "radio").style("width", "auto").attr("value",options[t]).attr("name", values.id).attr("id", options[t]);
                }else{
                    trtemp.append("input").attr("type", "radio").style("width", "auto").attr("value", options[t]).attr("name", values.id).attr("id", options[t]);
                }
                trtemp.append("label").attr("class", "lbl").attr("for", options[t]).text(options[t]);
            }
        } else if (values.type == "colorpicker") {
        	loadVal=loadVal.replace("'","").replace("'","");
        	tr.append('td').append("input").attr("type", "color").attr("id", values.id).attr("class", "color").attr("value", loadVal);
        } else if (values.type == "switch") {
             if(loadVal=="on"){
       			tr.append('td').append("input").attr("type", "checkbox").attr("id", values.id).attr("checked", "true").attr("class", "chk");
   			}else{
       			tr.append('td').append("input").attr("type", "checkbox").attr("id", values.id).attr("class", "chk");
   			}
  			 $('.chk').bootstrapSwitch();
        }
        tr.exit().remove();
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
           var p = PROPSMAP[key];
           var result = {};
           for (var q = 0; q < p.length; q++) {

               var elm = p[q];
               var id = elm.id;

               if (id.charAt(0) != "$") {

                   var val = "";
                   if (elm.type == "textbox" || elm.type == "colorpicker" || elm.type == "dropdown") {
                       if(elm.type=='colorpicker'){
                       	 val="'" + document.getElementById(id).value +"'";
                       }else{
                      
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
                   	    id=id.replace("*","");
       					 id=id.replace("^"," ");
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
   	  var layerActions=["Class","Cluster","Composite","Feature","Grid","Join","Projection"];

   	  return layerActions;

   }
   function buildClassActions()
   {
   	  var classActions=["Label","Leader","Style"];

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

                     for (var j = 0; j < DEPTH; j++) {

                         DATABUFFER += "\t";
                     }

                     DATABUFFER += k.toUpperCase() + " " + props[k] + "\n";
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
	  .data(nodes, function(d) { return d.id || (d.id = ++ITEMCOUNTER); })


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
    })

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
	 d3.select("svg").remove();
	 svg = d3.select("body").append("svg")
	.attr("width", width + margin.right + margin.left)
	.attr("height", height + margin.top + margin.bottom)
    .append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	tree = d3.layout.tree()
	.size([height, width]);

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

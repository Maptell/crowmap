## crowmap

"Keep your maps clean"

[UMN Mapserver](http://mapserver.org/), mapserver as it is widely called, is one of the most powerful opensource mapping servers available.

Despite it's stark power and the availability of a large number of connectors, the developers using UMN Mapserver are not too many. There are some reasons but the obvious one is the lack of a powerful and convenient editor to edit [mapfiles](http://mapserver.org/mapfile/), the configuration file used in mapserver.

Crowmap attempts to solve this disability by providing an easy-to-use, intuitive tool to create mapserver mapfiles.

It keeps your maps in a clean way.

## Installation

Crowmap works as a local Web application. You do not need a Webserver to run the mapfile editor. Clone or download the latest version from [crowmap master branch](https://github.com/Maptell/crowmap). Open `index.html` file using any of the standard Web browsers.

<p align="center">
<img alt="Crowmap Screen" src="/img/readme/crowmapa.png" width="500" />
</p>

You can add mapfile objects and parameters using crowmap's intuitive interface. Once the mapfile parameters are entered, give a suitable name to the map file and click `Create Map` button. You will be able to download the mapfile by clicking the `Download` button.

<p align="center">
<img alt="Crowmap Screen" src="/img/readme/crowmapb.png" width="500" />
</p>

If you want to open an already existing mapfile, click on the `Open` button.

The order of various objects of Mapserver including the layers can be changed using the `Up` and `Down` arrows in the dialog box. Use the `Delete` button placed next to the arrow keys to remove the objects.

<p align="center">
<img alt="Crowmap Screen" src="/img/readme/crowmapc.png" width="500" />
</p>

### Crowmap with Mapserver for Windows (MS4W)

You can use crowmap with [Mapserver for Windows (MS4W)](http://ms4w.com/) by following the steps given below.

1. The applications in MS4W package are in `/ms4w/apps/` folder. Put the crowmap application in `/ms4w/apps/crowmap` folder.
2. Move the `crowmap.pkg` file in crowmap ms4w folder to `/ms4w/Apache/htdocs/` folder.
3. Move the `httpd_crowmap.conf` file in crowmap ms4w folder to `/ms4w/httpd.d/` folder.
4. Restart the MS4W `Apache Webserver`.

You can now access crowmap application in the browser by pointing to `http://localhost/crowmap`. If you use any port other than the the default http port, change the URL accordingly.

### Known Issues

Crowmap doesn't support mapfile comments.
The order of individual mapfile parameters is not maintained when you open an existing mapfile.

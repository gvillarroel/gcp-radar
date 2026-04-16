---
title: "Python Installation \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/python_install
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/command_line
source_metadata:
  url: https://developers.google.com/earth-engine/guides/python_install
  title: "Python Installation \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
Python Installation
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Keep your client library up to date by running the command for the package manager you used to install earthengine-api .
The Earth Engine Python client library is compatible with Python versions supported by Google Cloud, and using unsupported versions may cause issues.
If you are using Google Colab, the latest version of the Earth Engine Python client library is already installed, while other users can manually install and update using conda or pip.
Prior to using the Earth Engine Python client library, you need to authenticate and initialize it with a project you own or have permissions to use.
Printing an Earth Engine object in Python prints the serialized request, not the object itself, and you should use getInfo() to retrieve the object from the server, being cautious of blocking execution for large or expensive computations.
The Earth Engine ui module is only available through the JavaScript API, and for UI elements in Python, you should use third-party libraries like geemap, Folium, or ipyleaflet for interactive map display, and Matplotlib, Altair, or seaborn for charting.
Keep your client library up to date by running the command for the package manager you used to
install earthengine-api :
Conda Package Manager :
conda update -c conda-forge earthengine-api
Python Package Installer :
pip install earthengine-api --upgrade
Python support
The Earth Engine Python client library is compatible with
Python versions
supported by Google Cloud . Support is updated annually following the Python point
release schedule ( PEP 602 ;
Status of Python versions ). Using
unsupported Python versions may cause authentication failures, unexpected behavior, or failure
of certain operations.
Install options
If you are using Google Colab , the latest version of the Earth Engine Python
client library has already been installed (via pip). Try the following notebook to get started
with Earth Engine and Colab:
Run in Google Colab
View source on GitHub
If you don't use Colab, the Earth Engine client library can be manually installed and
updated on your system using conda (recommended) or pip :
Install with conda
Install with pip expand_more
Install the API to an
arbitrary Python environment using
pip . From a terminal or
command prompt:
pip install earthengine-api
Once installed, you can import, authenticate and initialize the Earth Engine API as
described here .
Update the API:
pip install earthengine-api --upgrade
Package import
The Python API package is called ee . It must be imported and initialized for
each new Python session and script:
import ee
Authentication and Initialization
Prior to using the Earth Engine Python client library, you need to
authenticate and use the resultant credentials to initialize the Python
client. Run:
ee . Authenticate ()
This will select the best authentication mode for your environment, and prompt
you to confirm access for your scripts. To initialize, you will need to provide
a project that you own, or have
permissions
to use. This project will be used for running all Earth Engine operations:
ee . Initialize ( project = 'my-project' )
See the authentication
guide for troubleshooting and to learn more about authentication modes
and Cloud projects.
Hello world!
Here is a short script to test that you're all set for working with Earth Engine.
import ee
ee . Authenticate ()
ee . Initialize ( project = 'my-project' )
print ( ee . String ( 'Hello from the Earth Engine servers!' ) . getInfo ())
Syntax
Both the Python and JavaScript APIs access the same server-side functionality,
but client-side expressions ( learn more about client vs. server )
can vary because of language syntax differences. The following table includes
a list of the common syntax differences you'll encounter
when working with the Python API relative to the JavaScript API.
Common syntax differences between JavaScript and Python
Property
JavaScript
Python
Function definition
function myFun ( arg ) {
return arg ;
}
var myFun = function ( arg ) {
return arg ;
};
def my_fun ( arg ):
return arg
Anonymous function mapping
var foo = col . map ( function ( arg ) {
return arg ;
});
foo = col . map ( lambda arg : arg )
Variable definition
var myVar = 'var' ;
my_var = 'var'
Logical operators
var match = such . and ( that );
var match = such . or ( that );
var match = such . not ( that );
match = such . And ( that )
match = such . Or ( that )
match = such . Not ( that )
Multi-line method chain
var foo = my . really ()
. reallyLong ()
. methodChain ();
foo = ( my . really ()
. reallyLong ()
. methodChain ())
Dictionary keys
var dic = { 'key' : value };
var dic = { key : value };
dic = { 'key' : value }
Dictionary object access
var value = dic . key ;
var value = dic [ 'key' ];
value = dic [ 'key' ]
Function argument definition
// Positional arguments.
var foo = fun ( argX , argY , argZ );
// Keyword arguments object.
var foo = fun ({ y : argY });
# Positional arguments.
foo = fun ( arg_x , arg_y , arg_z )
# Keyword arguments dictionary.
foo = fun ( ** { 'y' : arg_y })
# Keyword arguments.
foo = fun ( x = arg_x , z = arg_z )
Boolean
var t = true ;
var f = false ;
t = True
f = False
Null values
var na = null ;
na = None
Comment
//
#
Notes regarding Python API syntax:
Anonymous function mapping is achieved via
lambda functions, which accept only a single expression. Use traditional
named functions when complex mapping operations are required.
Function arguments provided as a keyword arguments dictionary must be
specified as **kwargs ;
i.e., prepend two asterisks to the function input dictionary:
y = fun(**{'x': 0}) or y = fun(**arg_dict) .
Date objects
Define and manipulate client-side date objects with the
datetime module. Include the module in your script:
import datetime
Convert ee.Date to client-side date:
ee_date = ee . Date ( '2020-01-01' )
py_date = datetime . datetime . utcfromtimestamp ( ee_date . getInfo ()[ 'value' ] / 1000.0 )
Convert client-side date to ee.Date:
py_date = datetime . datetime . utcnow ()
ee_date = ee . Date ( py_date )
Exporting data
Exporting data with the Python API requires the use of the ee.batch
module, which provides an interface to the
Export
functions. Pass parameter arguments as you would with the JavaScript API, minding the
differences noted in the syntax table above. Export tasks must be
started by calling the start() method on a defined task. Query a task's status by
calling the status() method on it. The following example demonstrates exporting
an ee.Image object.
Create an export task:
task = ee . batch . Export . image . toDrive ( image = my_image , # an ee.Image object.
region = my_geometry , # an ee.Geometry object.
description = 'mock_export' ,
folder = 'gdrive_folder' ,
fileNamePrefix = 'mock_export' ,
scale = 1000 ,
crs = 'EPSG:4326' )
Start an export task:
task . start ()
Check export task status:
task . status ()
The result of task.status() is a dictionary containing information such as the
state of the task and its ID.
{
'state' : 'READY' ,
'description' : 'my_export_task' ,
'creation_timestamp_ms' : 1647567508236 ,
'update_timestamp_ms' : 1647567508236 ,
'start_timestamp_ms' : 0 ,
'task_type' : 'EXPORT_IMAGE' ,
'id' : '56TVJIZABUMTD5CJ5YHTMYK4' ,
'name' : 'projects/earthengine-legacy/operations/56TVJIZABUMTX5CJ5HHTMYK4'
}
You can monitor task progress using the state field. See the Processing
Environments page for a
list of state values and more information on
task lifecycle .
Note: Tasks started from the Python API will also appear in the Tasks
tab of the JavaScript
Code Editor for the
same Google account.
Printing objects
Printing an Earth Engine object in Python prints the serialized request for the object,
not the object itself. Refer to the
Client vs. server page
to understand the reason for this.
Call getInfo() on Earth Engine objects to get the desired object from the server
to the client:
# Load a Landsat image.
img = ee . Image ( 'LANDSAT/LT05/C02/T1_L2/LT05_034033_20000913' )
# Print image object WITHOUT call to getInfo(); prints serialized request instructions.
print ( img )
# Print image object WITH call to getInfo(); prints image metadata.
print ( img . getInfo ())
Note that getInfo() is a synchronous operation, meaning execution of expressions
following the getInfo() call are blocked until the result is returned to the client.
Additionally, requests for a lot of data or expensive computations can return an error and/or
hang. In general, the best practice is to
export your results ,
and once complete, import them into a new script for further analysis.
Caution: Calling getInfo() in your script will block execution.
Additionally, requests for a lot of data or expensive computations can return an error
and/or hang.
Export to obtain the
results of expensive, large, or long running computations.
UI objects
The Earth Engine ui module is only available through the JavaScript API Code
Editor. Use third party libraries for UI elements in Python. Libraries such as
geemap ,
Folium , and
ipyleaflet
provide interactive map display, while charting can be done with
Matplotlib ,
Altair , or
seaborn , to name a few. See examples
in the
Earth Engine in Colab setup notebook for using geemap and Matplotlib.
Python in the Developer Guide
Python code is included throughout the Earth Engine Developer Guide. Where available,
code examples can be viewed by clicking on the "Colab (Python)" tab at the top of code blocks.
Guide pages may also include buttons at the top for running the page as a Colab notebook or
viewing on GitHub. Python code examples are intended to be run using
Google Colab . Interactive map and object exploration are
handled by the geemap
library. Both the Earth Engine Python client library and geemap are preinstalled
in Colab.
Earth Engine setup
Running Python code requires that you import the Earth Engine library, authenticate,
and initialize. The following commands are used in examples
(see the Authentication and Initialization page for
alternatives).
import ee
ee . Authenticate ()
ee . Initialize ( project = 'my-project' )
Interactive exploration with geemap
The geemap library is used
for displaying map tiles and printing rich representations of Earth Engine objects.
The library depends respectively on
ipyleaflet
and eerepr for these features.
The geemap library and its dependencies are preinstalled in Google Colab;
import it into each session.
import geemap.core as geemap
Geographic Earth Engine data classes, such as ee.Image and
ee.FeatureCollection , can be viewed using the geemap.Map object.
First, define the map object. Then, add layers to it or alter its viewport.
# Initialize a map object.
m = geemap . Map ()
# Define an example image.
img = ee . Image . random ()
# Add the image to the map.
m . add_layer ( img , None , 'Random image' )
# Display the map (you can call the object directly if it is the final line).
display ( m )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-03-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-03-07 UTC."],[],["To work with the Earth Engine Python API, install it via `pip install earthengine-api` or `conda update -c conda-forge earthengine-api`. Update with `pip install earthengine-api --upgrade` or the conda equivalent. After installation, import the API with `import ee`, authenticate using `ee.Authenticate()`, and initialize with `ee.Initialize(project='my-project')`. Utilize `ee.batch` for data exports and `getInfo()` to retrieve Earth Engine objects. For interactive map displays in Python, use third-party libraries like `geemap`.\n"]]

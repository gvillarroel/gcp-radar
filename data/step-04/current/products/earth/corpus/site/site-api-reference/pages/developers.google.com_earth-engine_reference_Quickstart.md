---
title: "Quickstart \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/Quickstart
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/Quickstart
  title: "Quickstart \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
Quickstart
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide demonstrates how to issue queries to the Earth Engine REST API from Python using Google Colab.
The REST API includes new and advanced features and may not be suitable for users new to Earth Engine.
Before you begin, you need to configure Earth Engine access and create a service account with a private key file for authentication.
You can authenticate to Google Cloud in Colab using gcloud auth login and obtain a service account key file using gcloud iam service-accounts keys create .
Once authenticated, you can access and test your credentials to make authorized HTTP requests to the Earth Engine API.
The guide explains how to find datasets using the Earth Engine Code Editor and how to query for specific images within a dataset based on criteria like time, location, and cloud cover.
You can inspect details of a particular image asset, including band information and spatial metadata, and fetch pixel values for specified bands and regions using getPixels .
The guide also shows how to generate thumbnail images using getPixels by specifying image dimensions, bands, and visualization options.
This guide explains how you can quickly get started issuing queries to the Earth Engine REST API from Python using Google Colab . The same concepts apply to accessing the API from other languages and environments.
Note: The REST API contains new and advanced features that may not be suitable for all users. If you are new to Earth Engine, please get started with the JavaScript guide .
Run in Google Colab
View source on GitHub
Before you begin
Follow these instructions to:
Configure Earth Engine access
Create a service account
Set up your Colab notebook
If you are starting this quickstart from scratch, you can create a new Colab notebook by clicking NEW NOTEBOOK from the Colab start page and enter the code samples below into a new code cell. Colab already has the Cloud SDK installed. This includes the gcloud command-line tool that you can use to manage Cloud services. Alternatively, run the demo notebook from the button at the start of this page.
Authenticate to Google Cloud
The first thing to do is login so that you can make authenticated requests to Google Cloud.
In Colab, you can run:
PROJECT = 'my-project'
! gcloud auth login -- project { PROJECT }
(Or if you're running locally, from a command line, assuming you have the Cloud SDK installed:)
PROJECT='my-project'
gcloud auth login --project $PROJECT
Accept the option to log in using your Google user account and complete the sign-in process.
Obtain a private key file for your service account
Before you can use the service account to authenticate, you must download a private key file. To do that in Colab, downloading to the notebook VM:
SERVICE_ACCOUNT = 'foo-name@project-name.iam.gserviceaccount.com'
KEY = 'my-secret-key.json'
! gcloud iam service - accounts keys create { KEY } -- iam - account { SERVICE_ACCOUNT }
Or alternatively from command line:
SERVICE_ACCOUNT='foo-name@project-name.iam.gserviceaccount.com'
KEY='my-secret-key.json'
gcloud iam service-accounts keys create $KEY --iam-account $SERVICE_ACCOUNT
Accessing and Testing your Credentials
You are now ready to send your first query to the Earth Engine API. Use the private key to get credentials. Use the credentials to create an authorized session to make HTTP requests. You can enter this into a new code cell of your Colab notebook. (If you are using command line, you will need to ensure that the necessary libraries are installed).
from google.auth.transport.requests import AuthorizedSession
from google.oauth2 import service_account
credentials = service_account . Credentials . from_service_account_file ( KEY )
scoped_credentials = credentials . with_scopes (
[ 'https://www.googleapis.com/auth/cloud-platform' ])
session = AuthorizedSession ( scoped_credentials )
url = 'https://earthengine.googleapis.com/v1alpha/projects/earthengine-public/assets/LANDSAT'
response = session . get ( url )
from pprint import pprint
import json
pprint ( json . loads ( response . content ))
If everything is configured correctly, running this will produce output that looks like:
{'id': 'LANDSAT',
'name': 'projects/earthengine-public/assets/LANDSAT',
'type': 'FOLDER'}
Pick a Dataset
You can search and explore available datasets using the Earth Engine Code Editor at code.earthengine.google.com . Let's look for some Sentinel 2 data. (If this is your first time using the Code Editor then you will be prompted to authorize it to access Earth Engine on your behalf when you sign in.) In the Code Editor, search for "sentinel" in search box at the top. Several raster datasets appear:
Click on "Sentinel-2: MultiSpectral Instrument (MSI), Level-1C":
Dataset description pages like this one include the critical information you need in order to use any dataset in the Earth Engine Public Data Catalog, including a brief description of the dataset, links to the data provider to get additional details, information about any usage restrictions that may apply to the dataset, and the dataset's Earth Engine asset ID.
In this case we see on the right side of the window that this is an image collection asset whose path is COPERNICUS/S2 .
Query for Particular Images
This Sentinel-2 dataset includes over two million images covering the world from 2015 through the present. Let's issue a projects.assets.listImages query against the image collection to find some data from April, 2017, with low cloud cover that includes a particular point in Mountain View, California.
import urllib
coords = [ - 122.085 , 37.422 ]
project = 'projects/earthengine-public'
asset_id = 'COPERNICUS/S2'
name = ' {} /assets/ {} ' . format ( project , asset_id )
url = 'https://earthengine.googleapis.com/v1alpha/ {} :listImages? {} ' . format (
name , urllib . parse . urlencode ({
'startTime' : '2017-04-01T00:00:00.000Z' ,
'endTime' : '2017-05-01T00:00:00.000Z' ,
'region' : '{"type":"Point", "coordinates":' + str ( coords ) + '}' ,
'filter' : 'CLOUDY_PIXEL_PERCENTAGE < 10' ,
}))
response = session . get ( url )
content = response . content
for asset in json . loads ( content )[ 'images' ]:
id = asset [ 'id' ]
cloud_cover = asset [ 'properties' ][ 'CLOUDY_PIXEL_PERCENTAGE' ]
print ( ' %s : %s ' % ( id , cloud_cover ))
This script queries the collection for matching images, decodes the resulting JSON response, and prints the asset ID and cloud cover for each matching image asset. The output should look like:
COPERNICUS/S2/20170420T184921_20170420T190203_T10SEG : 4.3166
COPERNICUS/S2/20170430T190351_20170430T190351_T10SEG : 0
Evidently there are two images over this point that were taken in this month and have low cloud cover.
Inspect a Particular Image
It looks like one of the matching has essentially zero cloud cover. Let's take a closer look at that asset, whose ID is COPERNICUS/S2/20170430T190351_20170430T190351_T10SEG . Note that all public catalog assets belong to the project earthengine-public . Here's a Python snippet that will issue a projects.assets.get query to fetch the details of that particular asset by ID, print the available data bands, and print more detailed information about the first band:
asset_id = 'COPERNICUS/S2/20170430T190351_20170430T190351_T10SEG'
name = ' {} /assets/ {} ' . format ( project , asset_id )
url = 'https://earthengine.googleapis.com/v1alpha/ {} ' . format ( name )
response = session . get ( url )
content = response . content
asset = json . loads ( content )
print ( 'Band Names: %s ' % ',' . join ( band [ 'id' ] for band in asset [ 'bands' ]))
print ( 'First Band: %s ' % json . dumps ( asset [ 'bands' ][ 0 ], indent = 2 , sort_keys = True ))
The output should look like something like this:
Band Names: B1,B2,B3,B4,B5,B6,B7,B8,B8A,B9,B10,B11,B12,QA10,QA20,QA60
First Band: {
"dataType": {
"precision": "INTEGER",
"range": {
"max": 65535
}
},
"grid": {
"affineTransform": {
"scaleX": 60,
"scaleY": -60,
"translateX": 499980,
"translateY": 4200000
},
"crsCode": "EPSG:32610",
"dimensions": {
"height": 1830,
"width": 1830
}
},
"id": "B1",
"pyramidingPolicy": "MEAN"
}
The list of data bands corresponds to what we saw earlier in the dataset description . We can see that this dataset has 16-bit integer data in the EPSG:32610 coordinate system, or UTM Zone 10N. This first band has the ID B1 and a resolution of 60 meters per pixel. The origin of the image is at position (499980,4200000) in this coordinate system.
The negative value of affineTransform.scaleY indicates that the origin is in the north-west corner of the image, as is usually the case: increasing y pixel indices correspond to decreasing y spatial coordinates (heading south).
Fetching Pixel Values
Let's issue a projects.assets.getPixels query to fetch some data from the high resolution bands of this image. The dataset description page says that bands B2 , B3 , B4 , and B8 have a resolution of 10 meters per pixel. This script fetches the top-left 256x256-pixel tile of data from those four bands. Loading the data in the numpy NPY format makes it easy to decode the response into a Python data array.
import numpy
import io
name = ' {} /assets/ {} ' . format ( project , asset_id )
url = 'https://earthengine.googleapis.com/v1alpha/ {} :getPixels' . format ( name )
body = json . dumps ({
'fileFormat' : 'NPY' ,
'bandIds' : [ 'B2' , 'B3' , 'B4' , 'B8' ],
'grid' : {
'affineTransform' : {
'scaleX' : 10 ,
'scaleY' : - 10 ,
'translateX' : 499980 ,
'translateY' : 4200000 ,
},
'dimensions' : { 'width' : 256 , 'height' : 256 },
},
})
pixels_response = session . post ( url , body )
pixels_content = pixels_response . content
array = numpy . load ( io . BytesIO ( pixels_content ))
print ( 'Shape: %s ' % ( array . shape ,))
print ( 'Data:' )
print ( array )
The output should look like this:
Shape: (256, 256)
Data:
[[( 899, 586, 351, 189) ( 918, 630, 501, 248) (1013, 773, 654, 378) ...,
(1014, 690, 419, 323) ( 942, 657, 424, 260) ( 987, 691, 431, 315)]
[( 902, 630, 541, 227) (1059, 866, 719, 429) (1195, 922, 626, 539) ...,
( 978, 659, 404, 287) ( 954, 672, 426, 279) ( 990, 678, 397, 304)]
[(1050, 855, 721, 419) (1257, 977, 635, 569) (1137, 770, 400, 435) ...,
( 972, 674, 421, 312) (1001, 688, 431, 311) (1004, 659, 378, 284)]
...,
[( 969, 672, 375, 275) ( 927, 680, 478, 294) (1018, 724, 455, 353) ...,
( 924, 659, 375, 232) ( 921, 664, 438, 273) ( 966, 737, 521, 306)]
[( 920, 645, 391, 248) ( 979, 728, 481, 327) ( 997, 708, 425, 324) ...,
( 927, 673, 387, 243) ( 927, 688, 459, 284) ( 962, 732, 509, 331)]
[( 978, 723, 449, 330) (1005, 712, 446, 314) ( 946, 667, 393, 269) ...,
( 949, 692, 413, 271) ( 927, 689, 472, 285) ( 966, 742, 516, 331)]]
To select a different set of pixels from this image, simply specify the affineTransform accordingly. Remember that the affineTransform is specified in the image's spatial coordinate reference system; if you want to adjust the location of the origin in pixel coordinates instead, use this simple formula:
request_origin = image_origin + pixel_scale * offset_in_pixels
Generating a Thumbnail Image
We can use a similar mechanism to generate an RGB thumbnail of this image. Instead of requesting data at its native resolution, we will specify a region and image dimensions explicitly. To get a thumbnail of the entire image, we can use the image's footprint geometry as the request region. Finally, by specifying the red, green, and blue image bands and an appropriate range of data values, we can obtain an attractive RGB thumbnail image.
Putting this all together, the Python snippet looks like this (using the Colab IPython image display widget):
url = 'https://earthengine.googleapis.com/v1alpha/ {} :getPixels' . format ( name )
body = json . dumps ({
'fileFormat' : 'PNG' ,
'bandIds' : [ 'B4' , 'B3' , 'B2' ],
'region' : asset [ 'geometry' ],
'grid' : {
'dimensions' : { 'width' : 256 , 'height' : 256 },
},
'visualizationOptions' : {
'ranges' : [{ 'min' : 0 , 'max' : 3000 }],
},
})
image_response = session . post ( url , body )
image_content = image_response . content
from IPython.display import Image
Image ( image_content )
Here is the resulting thumbnail image:
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-12-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-12-30 UTC."],[],["This guide demonstrates using Python in Google Colab to interact with the Earth Engine REST API. Key actions include: configuring Earth Engine access and creating a service account, authenticating to Google Cloud, and obtaining a service account private key. Users learn to query datasets, specifically Sentinel-2, using `listImages`, filter by time and cloud cover, inspect images with `get`, and fetch pixel data via `getPixels`. The process to generate thumbnail images is also shown. All this allow to access and manipulate Earth Engine data.\n"]]

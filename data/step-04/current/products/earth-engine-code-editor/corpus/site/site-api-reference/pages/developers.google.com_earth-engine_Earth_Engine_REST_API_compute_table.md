---
title: "Table computations with the Earth Engine REST API \_|\_ Google Earth Engine\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table
  title: "Table computations with the Earth Engine REST API \_|\_ Google Earth Engine\
    \ \_|\_ Google for Developers"
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
Table computations with the Earth Engine REST API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Earth Engine REST API can be used to apply computations to data and obtain results, as demonstrated by calculating the mean of pixels in an ImageCollection within features of a FeatureCollection.
Accessing Earth Engine data and performing computations through the REST API requires setting up a Google Cloud project, enabling the Earth Engine API, creating and registering a service account, and obtaining a private key file.
Authentication is required to make requests to Google Cloud and Earth Engine, which can be done by logging in with your Google Cloud project and using a service account key file to obtain credentials for an authorized session.
Before sending a compute request, the Earth Engine computation needs to be serialized into the expression graph format, which represents the steps of the computation.
The computed results are returned in the response as GeoJSON, which can be easily used by other applications.
Run in Google Colab
View source on GitHub
Note: The REST API contains new and advanced features that may not be suitable for all users. If you are new to Earth Engine, please get started with the JavaScript guide .
The Earth Engine REST API quickstart shows how to access blocks of pixels from an Earth Engine asset. The compute pixels example demonstrates how to apply a computation to the pixels before obtaining the result. This example demonstrates getting the mean of pixels in each image of an ImageCollection in each feature of a FeatureCollection . Specifically, this is a POST request to the computeFeatures endpoint.
Before you begin
Follow these instructions to:
Apply for Earth Engine
Create a Google Cloud project
Enable the Earth Engine API on the project
Create a service account
Give the service account project level permission to perform Earth Engine computations
Note : To complete this tutorial, you will need a service account that is registered for Earth Engine access. See these instructions to register a service account before proceeding.
Authenticate to Google Cloud
The first thing to do is login so that you can make authenticated requests to Google Cloud. You will set the project at the same time. Follow the instructions in the output to complete the sign in.
# INSERT YOUR PROJECT HERE
PROJECT = 'your-project'
!gcloud auth login --project {PROJECT}
Obtain a private key file for your service account
You should already have a service account registered to use Earth Engine. If you don't, follow these instructions to get one. Copy the email address of your service account into the following cell. (The service account must already be registered to use Earth Engine). In the following cell, the gsutil command line is used to generate a key file for the service account. The key file will be created on the notebook VM.
# INSERT YOUR SERVICE ACCOUNT HERE
SERVICE_ACCOUNT = 'your-service-account@your-project.iam.gserviceaccount.com'
KEY = 'key.json'
!gcloud iam service-accounts keys create {KEY} --iam-account {SERVICE_ACCOUNT}
Start an AuthorizedSession and test your credentials
Test the private key by using it to get credentials. Use the credentials to create an authorized session to make HTTP requests. Make a GET request through the session to check that the credentials work.
from google.auth.transport.requests import AuthorizedSession
from google.oauth2 import service_account
credentials = service_account . Credentials . from_service_account_file ( KEY )
scoped_credentials = credentials . with_scopes (
[ 'https://www.googleapis.com/auth/cloud-platform' ])
session = AuthorizedSession ( scoped_credentials )
url = 'https://earthengine.googleapis.com/v1beta/projects/earthengine-public/assets/LANDSAT'
response = session . get ( url )
from pprint import pprint
import json
pprint ( json . loads ( response . content ))
Serialize a computation
Before you can send a request to compute something, the computation needs to be put into the Earth Engine expression graph format. The following demonstrates how to obtain the expression graph.
Authenticate to Earth Engine
Get Earth Engine scoped credentials from the service account. Use them to initialize Earth Engine.
import ee
# Get some new credentials since the other ones are cloud scope.
ee_creds = ee . ServiceAccountCredentials ( SERVICE_ACCOUNT , KEY )
ee . Initialize ( ee_creds )
Define a computation
Prototype a simple computation with the client API. Note that the result of the computation is a FeatureCollection .
To check that the computation can succeed without errors, get a value from the first Feature (the mean NDVI in the polygon).
# A collection of polygons .
states = ee . FeatureCollection ( 'TIGER/2018/States' )
maine = states . filter ( ee . Filter . eq ( 'NAME' , 'Maine' ))
# Imagery : NDVI vegetation index from MODIS .
band = 'NDVI'
images = ee . ImageCollection ( 'MODIS/006/MOD13Q1' ). select ( band )
image = images . first ()
computation = image . reduceRegions (
collection = maine ,
reducer = ee . Reducer . mean (). setOutputs ( [ band ] ),
scale = image . projection (). nominalScale ()
)
# Print the value to test .
print ( computation . first (). get ( band ). getInfo ())
Serialize the expression graph
This will create an object that represents the Earth Engine expression graph (specifically, an Expression ). In general, you should build these with one of the client APIs.
# Serialize the computation.
serialized = ee.serializer.encode(computation)
Send the request
Make a POST request to the computeFeatures endpoint. Note that the request contains the Expression , which is the serialized computation.
import json
url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /table:computeFeatures'
response = session . post (
url = url . format ( PROJECT ),
data = json . dumps ({ 'expression' : serialized })
)
import json
pprint ( json . loads ( response . content ))
The response contains the resultant FeatureCollection as GeoJSON, which can be consumed by other apps or processes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2023-08-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-08-10 UTC."],[],[]]

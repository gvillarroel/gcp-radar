---
title: "Maps Datasets API client libraries \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/client_libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/client_libraries
  title: "Maps Datasets API client libraries \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Maps Datasets API
Send feedback
Maps Datasets API client libraries
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page provides instructions on getting started with the Maps Datasets API client libraries for Node.js and Python.
You'll learn how to install the necessary client libraries using npm or pip.
Authentication is handled using Application Default Credentials (ADC), and the page links to resources for setting up ADC.
Code samples demonstrate basic usage of the client libraries, such as creating a dataset, for both Node.js and Python.
Links to additional resources like source code, issue trackers, and Stack Overflow are provided for further assistance.
This page shows how to get started with the client libraries for
Maps Datasets API.
Read more about the client libraries in Client Libraries
Explained .
Install the client library
Node.js
For more information, see Setting Up a Node.js Development Environment .
npm install @googlemaps/maps-platform-datasets
Python
For more information, see Setting Up a Python Development Environment .
pip install --upgrade google-maps-mapsplatformdatasets
Set up authentication
When you use client libraries, you use
Application Default Credentials (ADC)
to authenticate. For information about setting up ADC, see
Provide credentials for Application Default Credentials .
For information about using ADC with client libraries, see
Authenticate using client libraries .
Use the client library
Node.js
View on GitHub
/**
* This snippet has been automatically generated and should be regarded as a code template only.
* It will require modifications to work.
* It may require correct/in-range values for request initialization.
* TODO(developer): Uncomment these variables before running the sample.
*/
/**
* Required. Parent project that will own the dataset.
* Format: projects/{project}
*/
// const parent = 'abc123'
/**
* Required. The dataset version to create.
*/
// const dataset = {}
// Imports the Mapsplatformdatasets library
const { MapsPlatformDatasetsClient } = require ( '@googlemaps/maps-platform-datasets' ). v1 ;
// Instantiates a client
const mapsplatformdatasetsClient = new MapsPlatformDatasetsClient ();
async function callCreateDataset () {
// Construct request
const request = {
parent ,
dataset ,
};
// Run request
const response = await mapsplatformdatasetsClient . createDataset ( request );
console . log ( response );
}
callCreateDataset ();
Python
View on GitHub
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.maps import mapsplatformdatasets_v1
def sample_create_dataset ():
# Create a client
client = mapsplatformdatasets_v1 . MapsPlatformDatasetsClient ()
# Initialize request argument(s)
request = mapsplatformdatasets_v1 . CreateDatasetRequest (
parent = "parent_value" ,
)
# Make the request
response = client . create_dataset ( request = request )
# Handle the response
print ( response )
Additional resources
Node.js
Source Code
GitHub Issue Tracker
Stack Overflow
Python
Source Code
GitHub Issue Tracker
Stack Overflow
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To utilize the Maps Datasets API client libraries, first, install the library using `npm install @googlemaps/maps-platform-datasets` for Node.js or `pip install --upgrade google-maps-mapsplatformdatasets` for Python. Set up Application Default Credentials (ADC) for authentication. Node.js and Python code examples show creating a dataset by instantiating a client, constructing a request, and making the request. Additional resources include links to source code, issue trackers, and Stack Overflow.\n"]]

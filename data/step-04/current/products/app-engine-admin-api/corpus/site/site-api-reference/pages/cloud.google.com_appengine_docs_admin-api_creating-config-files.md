---
title: "Creating JSON Configuration Files for Your Deployments \_|\_ App Engine Admin\
  \ API \_|\_ Google Cloud Documentation"
url: https://cloud.google.com/appengine/docs/admin-api/creating-config-files
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://cloud.google.com/appengine/docs/admin-api/reference/rest
source_metadata:
  url: https://cloud.google.com/appengine/docs/admin-api/creating-config-files
  title: "Creating JSON Configuration Files for Your Deployments \_|\_ App Engine\
    \ Admin API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
App Engine
Admin API
Reference
Send feedback
Creating JSON Configuration Files for Your Deployments
Stay organized with collections
Save and categorize content based on your preferences.
To deploy a version of your app with the Admin API, you define the
configuration details of your version using a JSON formatted file. You can
either manually create the configuration file or convert an existing app.yaml
file.
There are two parts to creating a JSON formatted configuration file:
Define the configuration information for the version that you want to deploy.
Define a deployment section to specify all your app's files and resources
that you want to deploy.
Tip: Consider programmatically generating the app.json configuration file.
Before you begin
You must first upload all the files and resources of your app to a
Cloud Storage bucket
before you can create the app.json configuration file.
Manually creating the JSON configuration file
Use the following steps if you need to manually create the configuration file,
for example, when your app excludes an app.yaml or your existing Java app
uses an appengine-web.xml file.
To manually create the app.json configuration file for deploying your app with
the Admin API:
Create a file name app.json .
Use the configuration information that is provided in the
apps.services.versions collection
to define and configure the version that you want to deploy.
Use the template in the Defining the deployment
section to specify all the files and resources that you
want to deploy from your Cloud Storage bucket.
Also see the Example section below to assist you with
creating your app.json configuration file.
Converting an app.yaml file into the JSON format
Note: The convert_yaml.py tool requires Python 2.7 and is incompatible with
Python 3. Additionally, this tool doesn't support newer runtimes in the
App Engine flexible environment that require the runtime_config element to be specified in the
app.yaml file.
You can use the convert_yaml.py tool to convert and generate an app.json
version from an existing app.yaml
file.
If an app.yaml file exists, which you normally use to manually deploy
versions of your app , you can
retain that information by converting those configuration settings into the JSON
format.
Prerequisite
Download and install the
convert_yaml.py tool , including the specified requirements.
Converting YAML files with the convert_yaml.py tool
To convert your app.yaml file with the convert_yaml.py tool:
Locate and note the directory path to your app.yaml .
Example:
cd root/apps-container/my-application/
Where the app.yaml of the example-python-app.py application might look like:
service : default
version : v1
runtime : python27
threadsafe : true
handlers :
- url : /.*
script : example - python - app . py
Navigate to the local directory where you downloaded the
convert_yaml.py tool, for example:
cd root / tools / appengine - config - transformer
Create the app.json file from the app.yaml file by running the
convert_yaml.py tool:
python . / convert_yaml . py [ DIRECTORY_PATH ]/ app . yaml > [ DIRECTORY_PATH ]/ app . json
Where [DIRECTORY_PATH] is the directory path to your app.yaml file.
A JSON version ( app.json ) of your app.yaml file is created in the
[DIRECTORY_PATH] directory.
Ensure that the ID of your version is defined in the app.json
configuration file.
If your app.yaml file excludes the version: [VERSION_NAME] element,
then the "id": [VERSION_NAME] element is not included in your
app.json file after the conversion. For example, if you want to set your
version ID to v1 , you must manually add the following line to your
app.json file:
"id": "v1",
Use the template in the Defining the deployment
section to specify all the files and resources of
your app that you want to deploy.
Also see the Example section below to assist you with
creating your app.json configuration file.
Defining the deployment section
To create a deployment section in the app.json configuration file and
manually define all of the resources that are located in your Cloud Storage
bucket, you use the reference information in the deployment
section
of the apps.services.versions collection. If you are defining individual
files, you can use the following template:
"deployment" : {
"files" : {
"my-resource-file1" : {
"sourceUrl" : "https://storage.googleapis.com/[MY_BUCKET_ID]/my-application/my-resource-file1"
} ,
}
} ,
Where my-resource-file1 defines the file name and relative directory
path of where you want to deploy that file in App Engine.
Example app.json file
Use the following example app.json to help you create your configuration file.
In the following app.json example, the v1 version ID is defined along with a
deployment
section that includes two example source files from the [MY_BUCKET_ID]
Cloud Storage bucket.
{
"deployment" : {
"files" : {
"example-resource-file1" : {
"sourceUrl" : "https://storage.googleapis.com/[MY_BUCKET_ID]/example-application/example-resource-file1"
} ,
"images/example-resource-file2" : {
"sourceUrl" : "https://storage.googleapis.com/[MY_BUCKET_ID]/example-application/images/example-resource-file2"
} ,
}
} ,
"id" : "v1" ,
"handlers" : [
{
"urlRegex": "/.*",
"script": {
"scriptPath": "example-python-app.py"
}
},
] ,
"runtime" : "python27" ,
"threadsafe" : true ,
}
Tip: Not all of the runtimes that are supported by App Engine include
support for a
ScriptHandler .
For more information, see the corresponding app.yaml or appengine-web.xml
reference of your language's runtime .
What's next
Deploying Versions to Your App
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
title: "Hosting a static website on App Engine \_|\_ App Engine standard environment\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/python/services/access
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website
  title: "Hosting a static website on App Engine \_|\_ App Engine standard environment\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Hosting a static website on App Engine
Stay organized with collections
Save and categorize content based on your preferences.
Region ID
The REGION_ID is an abbreviated code that Google assigns
based on the region you select when you create your app. The code does not
correspond to a country or province, even though some region IDs may appear
similar to commonly used country and province codes. For apps created after
February 2020, REGION_ID .r is included in
App Engine URLs. For existing apps created before this date, the
region ID is optional in the URL.
Learn more
about region IDs .
OK
You can use App Engine to host a static website. Static web pages
can contain client-side technologies such as HTML, CSS, and JavaScript. Hosting
your static site on App Engine can cost less than using a traditional
hosting provider, as App Engine standard environment provides a free tier.
Sites hosted on App Engine are hosted on the
REGION_ID .r.appspot.com
subdomain, such as [my-project-id].uc.r.appspot.com . After you deploy your
site, you can map your own domain name to your App Engine hosted website.
Before you begin
Before you can host your website on App Engine:
Create a new Google Cloud console project or retrieve the project ID of
an existing project to use:
Go to the Projects page
Tip: You can retrieve a list of your existing project IDs with the
gcloud command line tool .
Install and then initialize the Google Cloud CLI:
Download the SDK
Listing your Google Cloud console project IDs
From the command line, run:
gcloud projects list
OK
Creating a website to host on Google App Engine
Basic structure for the project
This guide uses the following structure for the project:
app.yaml : Configure the settings of your App Engine application.
www/ : Directory to store all of your static files, such as HTML, CSS,
images, and JavaScript.
css/ : Directory to store stylesheets.
style.css : Basic stylesheet that formats the look and feel of your
site.
images/ : Optional directory to store images.
index.html : An HTML file that displays content for your website.
js/ : Optional directory to store JavaScript files.
Other asset directories.
Creating the app.yaml file
The app.yaml file is a configuration file that tells App Engine how to
map URLs to your static files. In the following steps, you will add handlers
that will load www/index.html when someone visits your website, and all static
files will be stored in and called from the www directory.
Create the app.yaml file in your application's root directory:
Create a directory that has the same name as your project ID. You can find
your project ID in the Console .
In directory that you just created, create a file named app.yaml .
Edit the app.yaml file and add the handlers element based on your website
requirements. For example, app.yaml file for Python
runtime may be created as follows:
runtime : python314
handlers :
- url : /
static_files : www / index . html
upload : www / index . html
- url : / ( .* )
static_files : www / \ 1
upload : www / ( .* )
More reference information about the app.yaml file can be found in the
app.yaml reference documentation .
Creating the index.html file
Create an HTML file that will be served when someone navigates to the root page
of your website. Store this file in your www directory.
< html >
< head >
< title>Hello , world ! < / title >
< link rel = "stylesheet" type = "text/css" href = "/css/style.css" >
< / head >
< body >
< h1>Hello , world ! < / h1 >
< p >
This is a simple static HTML file that will be served from Google App
Engine .
< / p >
< / body >
< / html >
Deploying your application to App Engine
When you deploy your application files, your website will be uploaded to App
Engine. To deploy your app, run the following command from within the root
directory of your application where the app.yaml file is located:
gcloud app deploy
Optional flags:
Include the --project flag to specify an alternate Google Cloud console project ID to what you initialized as the default in the gcloud CLI. Example: --project [YOUR_PROJECT_ID]
Include the -v flag to specify a version ID, otherwise one is generated
for you. Example: -v [YOUR_VERSION_ID]
To learn more about deploying your app from the command line, see
Deploying your application .
Viewing your application
To launch your browser and view the app at
https:// PROJECT_ID . REGION_ID .r.appspot.com , run the
following command:
gcloud app browse
What's next
Serve your App Engine hosted website from a custom domain .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

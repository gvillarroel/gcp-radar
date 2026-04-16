---
title: "Downloading and uploading an API proxy configuration bundle \_|\_ Apigee \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/download-api-proxies
knowledge_key: corpus
source_id: site-docs-reference-required-14
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/download-api-proxies
  title: "Downloading and uploading an API proxy configuration bundle \_|\_ Apigee\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Downloading and uploading an API proxy configuration bundle
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
You may want to download an API proxy configuration bundle (as a zip file) from Apigee to perform one of the following tasks:
Import an API proxy using the API proxy configuration bundle to another organization, as described in
Importing an API proxy from an API proxy bundle .
Unzip the API proxy to your local system. This is useful for setting up
file-based API proxy development in source control or viewing the file-based
version of the resources. If you modify the API proxy configuration locally,
you can upload your changes as a new revision of your API proxy .
The following sections describe how to download and upload an API proxy configuration bundle.
For information about the expanded contents of the zip file, see
API proxy configuration directory structure .
Video
Note: This video was recorded with a
previous version of the Apigee UI; however, the concepts are still valid.
Watch the following video to learn more about downloading and uploading an API proxy configuration bundle.
Video
Description
Download API
proxy (Apigee)
Download an API proxy using the Apigee UI and API.
Downloading an API proxy configuration bundle
Download an API proxy configuration bundle, as described in the following sections.
Apigee UI
To download an API proxy configuration bundle using the Google Cloud console:
In the Google Cloud console, go to the Apigee > Proxy development > API proxies page.
Go to API proxies
Select the desired API proxy.
Click the Develop tab.
Select the API proxy revision that you want to download in the Revision menu.
Click
more_vert
More revision actions > Export revision n , where n specifies the selected revision.
Apigee API
To download an API proxy configuration bundle using the API, see Get API proxy revision .
To view the contents of the API proxy configuration bundle, create a new directory and expand the zip file using a utility such as unzip ,
as shown in the following example:
mkdir myappdir
unzip ./my-app_app_rev3_2019_04_20.zip -d myappdir
For more information about the expanded contents of the zip file, see
API proxy configuration directory structure .
Uploading an API proxy configuration bundle
Before you upload an API proxy configuration bundle, re-archive the API proxy configuration bundle directory if you have modified it,
including any new or changed files. You can use a
utility such as zip , as the following example shows:
zip my-new-proxy.zip -r .
The top-level directory in the zip file must be /apiproxy . For more information about the required directory structure,
see API proxy configuration directory structure .
Note: There are no special requirements for the zip file name. For example, you do not need to
increment the revision number or specify the date in the file name, unless you find it
useful for debugging or source control.
Upload an API proxy configuration bundle, as described in the following sections.
Apigee UI
To upload an API proxy configuration bundle and create a new revision of an existing API proxy :
In the Google Cloud console, go to the Apigee > Proxy development > API proxies page.
Go to API proxies
Select the desired API proxy.
Click the Develop tab.
Click
more_vert
More revision actions > Import revision .
Click Browse and navigate to the zip file in your local directory and click Open .
Click Import .
Apigee API
To upload an API proxy configuration using the API, see Update an existing API proxy revision
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

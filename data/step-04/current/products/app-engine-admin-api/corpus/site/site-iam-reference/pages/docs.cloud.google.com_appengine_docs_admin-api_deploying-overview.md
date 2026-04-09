---
title: "Deploy your apps with the Admin API \_|\_ App Engine Admin API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/admin-api/deploying-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/admin-api/deploying-overview
  title: "Deploy your apps with the Admin API \_|\_ App Engine Admin API \_|\_ Google\
    \ Cloud Documentation"
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
Deploy your apps with the Admin API
Stay organized with collections
Save and categorize content based on your preferences.
To deploy a version of the source code and configuration files that make up a
service in your application, you must first stage your files, create a
configuration file, and authenticate before you can send the HTTP POST
request.
The App Engine Admin API requires that you upload and stage all of your version's
resources in a Cloud Storage bucket, including the relevant
code files, static files, and any Dockerfiles that are used. You must also
create a JSON formatted configuration file that contains the definition of your
version and a manifest of all your resources in Cloud Storage. The last
step before you can deploy your version to your App Engine application is to
authenticate with your Google Cloud Platform project.
For more information about versions and how they make up the services in your
application, see the
Overview of App Engine .
To manually deploy your app, see
Deploying Your App .
Before you begin
Before you can deploy your apps, you must be able to authorize your HTTP
requests. For more information about configuring your Google Cloud
project, creating credentials, and obtaining access tokens, see
Accessing the API .
Deploying versions to your App Engine application
To deploy a version of your app with the Admin API:
Upload your app's resources to Cloud Storage.
Create a configuration file that defines your deployment.
Create and send the HTTP request for deploying your app.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

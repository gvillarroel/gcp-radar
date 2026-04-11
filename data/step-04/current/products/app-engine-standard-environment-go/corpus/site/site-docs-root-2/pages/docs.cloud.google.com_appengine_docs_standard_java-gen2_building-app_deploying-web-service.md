---
title: "Deploy your web service \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/deploying-web-service
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/go/runtime?authuser=3
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/deploying-web-service
  title: "Deploy your web service \_|\_ App Engine standard environment \_|\_ Google\
    \ Cloud Documentation"
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
Deploy your web service
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
Note: If you are deploying a new Java web service to Google Cloud,
we recommend getting started with
Cloud Run .
This section of the guide shows how to use the gcloud CLI to deploy your
Java web service on App Engine. To learn more about
the Java runtime environment, see
Java Runtime Environment .
Before you begin
Create a Google Cloud project with an App Engine app .
Write a Java web server ready to deploy on App Engine .
Install Google Cloud CLI , which provides the gcloud command-line
tool. Ensure gcloud is configured to use the Google Cloud project you want to
deploy to.
Key points
Use gcloud app deploy and gcloud app browse to deploy and view your
service.
Deploy your service
In your my-java-service folder, where your Maven POM or
Gradle build file is located, run the following command in your terminal:
gcloud app deploy
Your source files are then uploaded to Cloud Storage. Cloud Build
builds your app and deploys it to App Engine.
Note: Files listed in your
.gcloudignore
file will not be uploaded.
Deploy multiple services
You can add multiple services in your project by creating an app.yaml file for each service. Include the
service attribute in each app.yaml file to specify the name of the service.
To learn more about structuring your app using multiple services, see
Structuring Web Services in App Engine .
To deploy multiple services, follow these instructions
Each deployed service will have its own assigned URL.
View your service
To quickly launch your browser and access your web service at
https:// PROJECT_ID . REGION_ID .r.appspot.com , use the following
command:
gcloud app browse
Services and versions
You've just created and deployed a service on App Engine.
You can specify the name of your service in the app.yaml file. If the
name is omitted, it is treated as default . The first service you deploy
must be the default service.
You can update your service at any time by running the gcloud app deploy
command again. Each time you deploy, a new version is created and traffic
is automatically routed to the latest version.
To confirm that your service has been created and a version has been deployed:
View your App Engine services in the Google Cloud console:
View services
You should see one service listed, named default . The default service is
publicly accessible at the following URL:
https:// PROJECT_ID . REGION_ID .r.appspot.com
View your versions:
View versions
You should see one timestamped version listed, corresponding to your
deployment.
To learn how to send requests to specific services and versions, see
How Requests are Routed .
Next steps
Congratulations! You built an application that can store and classify uploaded
images. Learn how to add other features to your application by exploring the
following pages:
See more Java code samples for the App Engine standard environment
on the Google Cloud GitHub repository. . These samples can be used for both Java.
Learn more about writing application logs and interpreting system logs in
Reading and writing application logs .
For a deeper dive into how App Engine works, see the
Java runtime environment .
Previous
arrow_back
Write your web service
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

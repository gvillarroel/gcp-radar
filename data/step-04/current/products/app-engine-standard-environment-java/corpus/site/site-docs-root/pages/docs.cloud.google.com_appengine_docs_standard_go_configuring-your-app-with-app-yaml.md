---
title: "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/overview
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml
  title: "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\
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
Defining runtime settings
Stay organized with collections
Save and categorize content based on your preferences.
An App Engine app is configured using an app.yaml
file, that contains the runtime, handlers, scaling, and other general settings
including environment variables.
About app.yaml files
You can specify the runtime configuration for your Go 1.12+ app,
including versions and URLs, in the app.yaml file. This file acts as a deployment descriptor of a specific
service
version.
You must first create the app.yaml file for the default service of your app
before you can create and deploy app.yaml files for additional services.
Generally, your app.yaml file requires only the runtime element for a simple
Go 1.12+ app in the standard environment, for
example:
runtime : go126
App Engine provides default values for all other settings, including
the F1 instance class , which
determines the memory and CPU resources that are available to your app, and
automatic scaling ,
which controls how and when new instances of your app are created.
If you need to override the default settings, create an app.yaml file and
specify the settings you need. For more information, see
app.yaml file reference .
You can specify a unique name for your app.yaml files, but then you must
specify the file name with the deployment
command
as well. For example, if you name your app.yaml file service-name-app.yaml
or app.standard.yaml , then you must deploy your app using either:
gcloud app deploy service - name - app . yaml
gcloud app deploy app . standard . yaml
To learn more about structuring multiple services and app.yaml files in your
app, see Structuring web services .
All configuration elements
For a complete list of all the supported elements in this configuration file,
see the
app.yaml reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

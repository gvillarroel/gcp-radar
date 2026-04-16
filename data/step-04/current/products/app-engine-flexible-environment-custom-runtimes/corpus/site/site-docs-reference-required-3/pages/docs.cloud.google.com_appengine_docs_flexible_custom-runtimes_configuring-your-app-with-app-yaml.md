---
title: "Configuring your app with app.yaml \_|\_ App Engine flexible environment \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml
  title: "Configuring your app with app.yaml \_|\_ App Engine flexible environment\
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
Flexible environment
Guides
Send feedback
Configuring your app with app.yaml
Stay organized with collections
Save and categorize content based on your preferences.
An App Engine app is configured using an app.yaml
file, that contains CPU, memory, network and disk resources, scaling, and other
general settings including environment variables.
About app.yaml files
You can specify the runtime configuration for your Custom Runtime app,
including versions and URLs, in the app.yaml file. This file acts as a
deployment descriptor of a specific service version.
You must first create the app.yaml file for the default service of your app
before you can create and deploy app.yaml files for additional services.
runtime : custom
env : flex
Depending on the complexity of your app's service, you might only need to define
a few elements in the corresponding app.yaml file. The following example
demonstrates what a simple Custom Runtime app might require in the
flexible environment:
You can specify a unique name for your app.yaml files, but then you must
specify the file name with the deployment
command
as well. For example, if you name your app.yaml file service-name-app.yaml
or app.flexible.yaml , then you must deploy your app using either:
gcloud app deploy service-name-app.yaml
gcloud app deploy app.flexible.yaml
All configuration elements
For a complete list of all the supported elements in this configuration file,
see the
app.yaml reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

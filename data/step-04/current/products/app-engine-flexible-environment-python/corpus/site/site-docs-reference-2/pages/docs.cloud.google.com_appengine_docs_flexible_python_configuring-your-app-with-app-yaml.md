---
title: "Configuring your app with app.yaml \_|\_ App Engine flexible environment \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/python/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml
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
Note: Some Python runtimes have reached end of support . You cannot re-deploy
versions that use runtimes after their end of support date. We recommend that
you upgrade your app
to use the latest version of Python.
An App Engine app is configured using an app.yaml
file, that contains CPU, memory, network and disk resources, scaling, and other
general settings including environment variables.
About app.yaml files
You can specify the runtime configuration for your Python app,
including versions and URLs, in the app.yaml file. This file acts as a deployment descriptor of a specific
service
version.
You must first create the app.yaml file for the default service of your app
before you can create and deploy app.yaml files for additional services.
The following app.yaml demonstrates how to configure your app to use
the latest version of Python. To use any other supported version of Python,
you must update your app.yaml file. For more information, see
Python runtime .
# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
runtime : python
env : flex
entrypoint : gunicorn -b :$PORT main:app
runtime_config :
operating_system : ubuntu24
runtime_version : 3.12
# This sample incurs costs to run on the App Engine flexible environment.
# The settings below are to reduce costs during testing and are not appropriate
# for production use. For more information, see:
# https://cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml
manual_scaling :
instances : 1
resources :
cpu : 1
memory_gb : 0.5
disk_size_gb : 10
Depending on the complexity of your app's service, you might only need to define
a few elements in the corresponding app.yaml file. The following example
demonstrates what a simple Python app might require in the
flexible environment:
You can specify a unique name for your app.yaml files, but then you must
specify the file name with the deployment
command
as well. For example, if you name your app.yaml file service-name-app.yaml
or app.flexible.yaml , then you must deploy your app using either:
gcloud app deploy service - name - app . yaml
gcloud app deploy app . flexible . yaml
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

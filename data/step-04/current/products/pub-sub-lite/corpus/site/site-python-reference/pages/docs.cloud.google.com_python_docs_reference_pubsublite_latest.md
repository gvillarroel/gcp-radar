---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/pubsublite/latest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/pubsublite/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/pubsublite/latest
  title: "Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.13.0 (latest)
1.12.0
1.11.1
1.10.0
1.9.0
1.8.3
1.7.0
1.6.0
1.5.0
1.4.3
1.3.0
1.2.0
1.1.4
1.0.2
0.6.1
0.5.0
0.4.1
0.3.0
0.2.0
0.1.0
Python Client for Pub/Sub Lite API
Pub/Sub Lite API : is designed to provide reliable,
many-to-many, asynchronous messaging between applications. Publisher
applications can send messages to a topic and other applications can
subscribe to that topic to receive the messages. By decoupling senders and
receivers, Google Cloud Pub/Sub allows developers to communicate between
independently written applications.
Compared to Google Pub/Sub, Pub/Sub Lite provides partitioned zonal data
storage with predefined capacity. Both products present a similar API, but
Pub/Sub Lite has more usage caveats.
See the Google Pub/Sub Lite docs for more details on how to activate
Pub/Sub Lite for your project, as well as guidance on how to choose between
Cloud Pub/Sub and Pub/Sub Lite.
Client Library Documentation
Product Documentation
Quick Start
In order to use this library, you first need to go through the following steps:
Select or create a Cloud Platform project.
Enable billing for your project.
Enable the Pub/Sub Lite API.
Setup Authentication.
Installation
Install this library in a virtualenv using pip. virtualenv is a tool to
create isolated Python environments. The basic problem it addresses is one of
dependencies and versions, and indirectly permissions.
With virtualenv , it’s possible to install this library without needing system
install permissions, and without clashing with the installed system
dependencies.
Code samples and snippets
Code samples and snippets live in the samples/ folder.
Supported Python Versions
Our client libraries are compatible with all current active and maintenance versions of
Python.
Python >= 3.7
Unsupported Python Versions
Python <= 3.6
If you are using an end-of-life
version of Python, we recommend that you update as soon as possible to an actively supported version.
Mac/Linux
pip install virtualenv
virtualenv <your-env>
source <your-env>/bin/activate
<your-env>/bin/pip install google-cloud-pubsublite
Windows
pip install virtualenv
virtualenv <your-env>
<your-env>\Scripts\activate
<your-env>\Scripts\pip.exe install google-cloud-pubsublite
Next Steps
Read the Client Library Documentation for Pub/Sub Lite API
to see other available methods on the client.
Read the Pub/Sub Lite API Product documentation to learn
more about the product and see How-to Guides.
View this README to see the full list of Cloud
APIs that we cover.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]

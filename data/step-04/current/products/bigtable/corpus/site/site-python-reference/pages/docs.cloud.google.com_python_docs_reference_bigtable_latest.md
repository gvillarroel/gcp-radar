---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
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
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.1
2.29.0
2.28.1
2.26.0
2.25.0
2.24.0
2.23.1
2.22.0
2.21.0
2.20.0
2.19.0
2.18.1
2.17.0
2.16.0
2.15.0
2.14.1
2.13.2
2.12.0
2.11.3
2.10.1
2.9.0
2.8.1
2.7.1
2.6.0
2.5.2
2.4.0
2.3.3
2.2.0
2.1.0
2.0.0
1.7.3
1.6.1
1.5.1
1.4.0
1.3.0
1.2.1
1.1.0
1.0.0
0.34.0
Python Client for Google Cloud Bigtable
Google Cloud Bigtable is Google’s NoSQL Big Data database service. It’s the
same database that powers many core Google services, including Search,
Analytics, Maps, and Gmail.
Client Library Documentation
Product Documentation
Async Data Client
v2.23.0 includes a release of the new BigtableDataClientAsync client, accessible at the import path
google.cloud.bigtable.data .
The new client brings a simplified API and increased performance using asyncio.
The new client is focused on the data API (i.e. reading and writing Bigtable data), with admin operations
remaining exclusively in the existing synchronous client.
Feedback and bug reports are welcome at cbt-python-client-v3-feedback@google.com ,
or through the Github issue tracker .
NOTE : It is generally not recommended to use the async client in an otherwise synchronous codebase. To make use of asyncio’s
performance benefits, the codebase should be designed to be async from the ground up.
Quick Start
In order to use this library, you first need to go through the following steps:
Select or create a Cloud Platform project.
Enable billing for your project.
Enable the Cloud Bigtable API.
Setup Authentication.
Installation
Install this library in a virtualenv using pip. virtualenv is a tool to
create isolated Python environments. The basic problem it addresses is one of
dependencies and versions, and indirectly permissions.
With virtualenv , it’s possible to install this library without needing system
install permissions, and without clashing with the installed system
dependencies.
Supported Python Versions
Python >= 3.7
Deprecated Python Versions
Python 2.7: the last released version which supported Python 2.7 was
version 1.7.0, released 2021-02-09.
Python 3.5: the last released version which supported Python 3.5 was
version 1.7.0, released 2021-02-09.
Python 3.6: the last released version which supported Python 3.6 was
version v2.10.1, released 2022-06-03.
Mac/Linux
pip install virtualenv
virtualenv <your-env>
source <your-env>/bin/activate
<your-env>/bin/pip install google-cloud-bigtable
Windows
pip install virtualenv
virtualenv <your-env>
<your-env>\Scripts\activate
<your-env>\Scripts\pip.exe install google-cloud-bigtable
Next Steps
Read the Client Library Documentation for Cloud Bigtable API
to see other available methods on the client.
Read the Product documentation to learn
more about the product and see How-to Guides.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]

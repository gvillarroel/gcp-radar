---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/client-intro
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/client-intro
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
Base for Everything
To use the API, the Client
class defines a high-level interface which handles authorization
and creating other objects:
from google.cloud.bigtable.client import Client
client = Client()
Long-lived Defaults
When creating a Client , the
user_agent argument has sensible a default
( DEFAULT_USER_AGENT ).
However, you may over-ride it and the value will be used throughout all API
requests made with the client you create.
Configuration
For an overview of authentication in google-cloud-python ,
see Authentication .
In addition to any authentication configuration, you can also set the
GOOGLE_CLOUD_PROJECT environment variable for the Google Cloud Console
project you’d like to interact with. If your code is running in Google App
Engine or Google Compute Engine the project will be detected automatically.
(Setting this environment variable is not required, you may instead pass the
project explicitly when constructing a
Client ).
After configuring your environment, create a
Client
>>> from google.cloud import bigtable
>>> client = bigtable . Client ()
or pass in credentials and project explicitly
>>> from google.cloud import bigtable
>>> client = bigtable . Client (project='my-project', credentials=creds)
Admin API Access
If you’ll be using your client to make Instance Admin and Table Admin
API requests, you’ll need to pass the admin argument:
client = bigtable.Client(admin=True)
Read-Only Mode
If, on the other hand, you only have (or want) read access to the data,
you can pass the read_only argument:
client = bigtable.Client(read_only=True)
This will ensure that the
READ_ONLY_SCOPE is used
for API requests (so any accidental requests that would modify data will
fail).
Next Step
After a Client , the next highest-level
object is an Instance . You’ll need
one before you can interact with tables or data.
Head next to learn about the Instance Admin API .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]

---
title: "Importing Python Libraries \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/import-python-libraries
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/fundamentals
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/import-python-libraries
  title: "Importing Python Libraries \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Guides
Send feedback
Importing Python Libraries
Stay organized with collections
Save and categorize content based on your preferences.
You can use Python libraries in your Python templates. Deployment Manager
uploads and runs the Python code in your templates in a secure environment.
You can use libraries that are supported by Deployment Manager, listed below. To
use a different Python library, import the full library source in your template.
Supported libraries
Deployment Manager supports specific Python libraries that you can use in your
templates. These libraries include:
base64
collections
encodings
encodings.utf_8
encodings.utf_16
hashlib
json
math
random
io
sys
string
time
yaml
zipfile
Caution: Do not use system calls in your template. If a template contains any
code that makes system or network calls, it is rejected. This includes any method
that performs system calls using the supported libraries listed
above. For example, sys contains a number of system calls that will
automatically be rejected if you use them in your template.
If you want to import libraries that are not explicitly supported, import
the library using the filename. This is especially useful if you want to
import your own helper methods. The same restrictions for system calls apply to
custom libraries as well.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

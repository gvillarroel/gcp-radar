---
title: "Class HTTPContext (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.error_reporting.client.HTTPContext
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.error_reporting.client.HTTPContext
  title: "Class HTTPContext (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class HTTPContext (1.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.15.0 (latest)
1.14.0
1.13.0
1.12.0
1.11.1
1.10.0
1.9.2
1.8.2
1.7.0
1.6.3
1.5.3
1.4.1
1.3.0
1.2.3
1.1.2
1.0.0
0.34.0
0.33.0
0.32.1
HTTPContext (
method = None ,
url = None ,
user_agent = None ,
referrer = None ,
response_status_code = None ,
remote_ip = None ,
)
HTTPContext defines an object that captures the parameter for the
httpRequest part of Error Reporting API
Parameters
Name
Description
method
str
The type of HTTP request, such as GET, POST, etc.
url
str
The URL of the request
user_agent
str
The user agent information that is provided with the request.
referrer
str
The referrer information that is provided with the request.
response_status_code
int
The HTTP response status code for the request.
remote_ip
str
The IP address from which the request originated. This can be IPv4, IPv6, or a token which is derived from the IP address, depending on the data that has been provided in the error report.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

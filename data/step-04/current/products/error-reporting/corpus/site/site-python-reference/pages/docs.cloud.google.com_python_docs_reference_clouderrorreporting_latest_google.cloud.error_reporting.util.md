---
title: "Module util (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.error_reporting.util
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.error_reporting.util
  title: "Module util (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Module util (1.15.0)
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
Utility functions for Error Reporting.
Modules
Functions
build_flask_context
build_flask_context ( request )
Builds an HTTP context object from a Flask (Werkzeug) request object.
This helper method extracts the relevant HTTP context from a Flask request
object into an object ready to be sent to Error Reporting.
>>> @app.errorhandler(HTTPException)
... def handle_error(exc):
... client.report_exception(
... http_context=build_flask_context(request))
... # rest of error response code here
Parameter
Name
Description
request
werkzeug.wrappers.request
The Flask request object to convert.
Returns
Type
Description
HTTPContext
An HTTPContext object ready to be sent to the Error Reporting API.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

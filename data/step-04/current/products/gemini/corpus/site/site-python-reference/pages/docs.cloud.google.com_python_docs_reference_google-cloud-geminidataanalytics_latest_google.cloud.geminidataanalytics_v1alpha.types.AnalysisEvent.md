---
title: "Class AnalysisEvent (0.12.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.types.AnalysisEvent
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.types.AnalysisEvent
  title: "Class AnalysisEvent (0.12.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class AnalysisEvent (0.12.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.12.0 (latest)
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
AnalysisEvent ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An event indicating the progress of an analysis.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
planner_reasoning
str
Python codegen planner's reasoning.
This field is a member of oneof _ kind .
coder_instruction
str
Instructions issued for code generation.
This field is a member of oneof _ kind .
code
str
Generated code.
This field is a member of oneof _ kind .
execution_output
str
Output from code execution.
This field is a member of oneof _ kind .
execution_error
str
An error from code execution.
This field is a member of oneof _ kind .
result_vega_chart_json
str
Result as Vega chart JSON string.
This field is a member of oneof _ kind .
result_natural_language
str
Result as NL string.
This field is a member of oneof _ kind .
result_csv_data
str
Result as CSV string.
This field is a member of oneof _ kind .
result_reference_data
str
Result as a reference to a data source.
This field is a member of oneof _ kind .
error
str
A generic error message.
This field is a member of oneof _ kind .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

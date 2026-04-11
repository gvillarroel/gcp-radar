---
title: "Class Aggregation (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.types.Aggregation
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.types.Aggregation
  title: "Class Aggregation (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Aggregation (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.15
Aggregation ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Message describing an aggregation. The message includes the
aggregation type, parameters, and the field on which to perform
the aggregation.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
field
str
The name of the field on which to aggregate.
count
google.cloud.migrationcenter_v1.types.Aggregation.Count
Count the number of matching objects.
This field is a member of oneof _ aggregation_function .
sum
google.cloud.migrationcenter_v1.types.Aggregation.Sum
Sum over a numeric field.
This field is a member of oneof _ aggregation_function .
histogram
google.cloud.migrationcenter_v1.types.Aggregation.Histogram
Creates a bucketed histogram of field values.
This field is a member of oneof _ aggregation_function .
frequency
google.cloud.migrationcenter_v1.types.Aggregation.Frequency
Creates a frequency distribution of all field
values.
This field is a member of oneof _ aggregation_function .
Classes
Count
Count ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Object count.
Frequency
Frequency ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Frequency distribution of all field values.
Histogram
Histogram ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Histogram of bucketed assets counts by field value.
Sum
Sum ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Sum of field values.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]

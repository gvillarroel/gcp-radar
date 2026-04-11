---
title: "Class DimensionsInfo (0.6.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.types.DimensionsInfo
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.types.DimensionsInfo
  title: "Class DimensionsInfo (0.6.0) \_|\_ Python client libraries \_|\_ Google\
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
Class DimensionsInfo (0.6.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.6.0 (latest)
0.5.0
0.4.0
0.3.0
0.2.0
0.1.18
DimensionsInfo ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The detailed quota information such as effective quota value
for a combination of dimensions.
Attributes
Name
Description
dimensions
MutableMapping[str, str]
The map of dimensions for this dimensions
info. The key of a map entry is "region", "zone"
or the name of a service specific dimension, and
the value of a map entry is the value of the
dimension. If a dimension does not appear in
the map of dimensions, the dimensions info
applies to all the dimension values except for
those that have another DimenisonInfo instance
configured for the specific value.
Example: {"provider" : "Foo Inc"} where
"provider" is a service specific dimension of a
quota.
details
google.cloud.cloudquotas_v1.types.QuotaDetails
Quota details for the specified dimensions.
applicable_locations
MutableSequence[str]
The applicable regions or zones of this dimensions info. The
field will be set to ['global'] for quotas that are not per
region or per zone. Otherwise, it will be set to the list of
locations this dimension info is applicable to.
Classes
DimensionsEntry
DimensionsEntry ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The abstract base class for a message.
Parameters
Name
Description
kwargs
dict
Keys and values corresponding to the fields of the message.
mapping
Union[dict, .Message ]
A dictionary or message to be used to determine the values for this message.
ignore_unknown_fields
Optional(bool)
If True, do not raise errors for unknown fields. Only applied if mapping is a mapping type or there are keyword parameters.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]

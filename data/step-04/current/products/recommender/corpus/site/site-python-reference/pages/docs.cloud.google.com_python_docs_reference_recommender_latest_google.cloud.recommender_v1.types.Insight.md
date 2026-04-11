---
title: "Class Insight (2.21.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.types.Insight
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/recommender/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.types.Insight
  title: "Class Insight (2.21.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Insight (2.21.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.21.0 (latest)
2.20.0
2.19.0
2.18.2
2.17.0
2.16.1
2.15.5
2.14.0
2.13.0
2.12.0
2.11.2
2.10.1
2.9.0
2.8.3
2.7.4
2.6.0
2.5.1
2.4.0
2.3.4
2.2.0
2.1.0
2.0.0
1.1.3
1.0.0
0.3.0
0.2.0
0.1.0
Insight ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An insight along with the information used to derive the
insight. The insight may have associated recommendations as
well.
Attributes
Name
Description
name
str
Name of the insight.
description
str
Free-form human readable summary in English.
The maximum length is 500 characters.
target_resources
MutableSequence[str]
Fully qualified resource names that this
insight is targeting.
insight_subtype
str
Insight subtype. Insight content schema will
be stable for a given subtype.
content
google.protobuf.struct_pb2.Struct
A struct of custom fields to explain the
insight. Example: "grantedPermissionsCount":
"1000".
last_refresh_time
google.protobuf.timestamp_pb2.Timestamp
Timestamp of the latest data used to generate
the insight.
observation_period
google.protobuf.duration_pb2.Duration
Observation period that led to the insight. The source data
used to generate the insight ends at last_refresh_time and
begins at (last_refresh_time - observation_period).
state_info
google.cloud.recommender_v1.types.InsightStateInfo
Information state and metadata.
category
google.cloud.recommender_v1.types.Insight.Category
Category being targeted by the insight.
severity
google.cloud.recommender_v1.types.Insight.Severity
Insight's severity.
etag
str
Fingerprint of the Insight. Provides
optimistic locking when updating states.
associated_recommendations
MutableSequence[ google.cloud.recommender_v1.types.Insight.RecommendationReference ]
Recommendations derived from this insight.
Classes
Category
Category ( value )
Insight category.
RecommendationReference
RecommendationReference ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Reference to an associated recommendation.
Severity
Severity ( value )
Insight severity levels.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]

---
title: "Package types (2.21.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/recommender/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.types
  title: "Package types (2.21.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Package types (2.21.0)
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
API documentation for recommender_v1.types package.
Classes
CostProjection
Contains metadata about how much money a recommendation can
save or incur.
GetInsightRequest
Request to the GetInsight method.
GetInsightTypeConfigRequest
Request for the GetInsightTypeConfig` method.
GetRecommendationRequest
Request to the GetRecommendation method.
GetRecommenderConfigRequest
Request for the GetRecommenderConfig` method.
Impact
Contains the impact a recommendation can have for a given
category.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Insight
An insight along with the information used to derive the
insight. The insight may have associated recommendations as
well.
InsightStateInfo
Information related to insight state.
InsightTypeConfig
Configuration for an InsightType.
InsightTypeGenerationConfig
A configuration to customize the generation of insights.
Eg, customizing the lookback period considered when generating a
insight.
ListInsightsRequest
Request for the ListInsights method.
ListInsightsResponse
Response to the ListInsights method.
ListRecommendationsRequest
Request for the ListRecommendations method.
ListRecommendationsResponse
Response to the ListRecommendations method.
MarkInsightAcceptedRequest
Request for the MarkInsightAccepted method.
MarkRecommendationClaimedRequest
Request for the MarkRecommendationClaimed Method.
MarkRecommendationDismissedRequest
Request for the MarkRecommendationDismissed Method.
MarkRecommendationFailedRequest
Request for the MarkRecommendationFailed Method.
MarkRecommendationSucceededRequest
Request for the MarkRecommendationSucceeded Method.
Operation
Contains an operation for a resource loosely based on the JSON-PATCH
format with support for:
Custom filters for describing partial array patch.
Extended path values for describing nested arrays.
Custom fields for describing the resource for which the operation
is being described.
Allows extension to custom operations not natively supported by
RFC6902. See https://tools.ietf.org/html/rfc6902 for details on
the original RFC.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
OperationGroup
Group of operations that need to be performed atomically.
Recommendation
A recommendation along with a suggested action. E.g., a
rightsizing recommendation for an underutilized VM, IAM role
recommendations, etc
RecommendationContent
Contains what resources are changing and how they are
changing.
RecommendationStateInfo
Information for state. Contains state and metadata.
RecommenderConfig
Configuration for a Recommender.
RecommenderGenerationConfig
A Configuration to customize the generation of
recommendations. Eg, customizing the lookback period considered
when generating a recommendation.
ReliabilityProjection
Contains information on the impact of a reliability
recommendation.
SecurityProjection
Contains various ways of describing the impact on Security.
SustainabilityProjection
Contains metadata about how much sustainability a
recommendation can save or incur.
UpdateInsightTypeConfigRequest
Request for the UpdateInsightTypeConfig method.
UpdateRecommenderConfigRequest
Request for the UpdateRecommenderConfig method.
ValueMatcher
Contains various matching options for values for a GCP
resource field.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]

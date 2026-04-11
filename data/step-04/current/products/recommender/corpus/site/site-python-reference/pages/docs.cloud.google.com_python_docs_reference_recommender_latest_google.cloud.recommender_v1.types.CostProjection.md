---
title: "Class CostProjection (2.21.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.types.CostProjection
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/recommender/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.types.CostProjection
  title: "Class CostProjection (2.21.0) \_|\_ Python client libraries \_|\_ Google\
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
Class CostProjection (2.21.0)
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
CostProjection ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Contains metadata about how much money a recommendation can
save or incur.
Attributes
Name
Description
cost
google.type.money_pb2.Money
An approximate projection on amount saved or
amount incurred. Negative cost units indicate
cost savings and positive cost units indicate
increase. See google.type.Money documentation
for positive/negative units.
A user's permissions may affect whether the cost
is computed using list prices or custom contract
prices.
duration
google.protobuf.duration_pb2.Duration
Duration for which this cost applies.
cost_in_local_currency
google.type.money_pb2.Money
The approximate cost savings in the billing
account's local currency.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]

---
title: "Measuring re-identification and disclosure risk \_|\_ Sensitive Data Protection\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis
knowledge_key: corpus
source_id: site-docs-reference-required-12
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/analyzing-and-reporting
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis
  title: "Measuring re-identification and disclosure risk \_|\_ Sensitive Data Protection\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Measuring re-identification and disclosure risk
Stay organized with collections
Save and categorize content based on your preferences.
Re-identification risk analysis , or just risk analysis , is the process of
analyzing sensitive data to find properties that might increase the risk of
subjects being identified. You can use risk analysis methods before
de-identification to help determine an effective de-identification strategy or
after de-identification to monitor for any changes or outliers.
Sensitive Data Protection can compute four re-identification risk metrics: k -anonymity,
l -diversity, k -map, and δ -presence. If you're not familiar with risk
analysis or these metrics, see the risk analysis concept
topic before continuing on.
This section provides overviews of how to use Sensitive Data Protection for risk
analysis of structured data using any of these metrics, plus other related
topics.
Calculate re-identification risk
Sensitive Data Protection can analyze your structured data stored in
BigQuery tables and compute the following re-identification risk
metrics. Click the link for the metric you want to calculate to learn more.
Metric
Description
k -anonymity
A property of a dataset that indicates the re-identifiability of its records. A dataset is k -anonymous if quasi-identifiers for each person in the dataset are identical to at least k – 1 other people also in the dataset.
l -diversity
An extension of k -anonymity that additionally measures the diversity of sensitive values for each column in which they occur. A dataset has l -diversity if, for every set of rows with identical quasi-identifiers, there are at least l distinct values for each sensitive attribute.
k -map
Computes re-identifiability risk by comparing a given de-identified dataset of subjects with a larger re-identification—or "attack"—dataset.
δ -presence
Estimates the probability that a given user in a larger population is present in the dataset. This is used when membership in the dataset is itself sensitive information.
Calculate other statistics
Sensitive Data Protection can also compute numerical and categorical
statistics for data stored in BigQuery tables using the same
DlpJob resource as the
risk analysis APIs.
Metric
Description
Numerical statistics
Determines minimum, maximum, and quantile values for an individual BigQuery column.
Categorical numerical statistics
Computes categorical numerical statistics for the individual histogram buckets within a BigQuery column.
For more information, see
Computing numerical and categorical statistics .
Visualize re-identification risk
You can visualize the risk metrics that Sensitive Data Protection calculates
directly in the Google Cloud console using Sensitive Data Protection
( k -anonymity or
l -diversity ), or using other
Google Cloud products.
Product
Description
Looker Studio
After calculating k -anonymity values for a dataset using Sensitive Data Protection, you can visualize the results in Looker Studio. By doing so, you'll also be able to better understand re-identification risk and help evaluate the trade-offs in utility you might be making if you redact or de-identify data.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

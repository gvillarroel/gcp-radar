---
title: "Activate adaptive filtering in AlloyDB AI \_|\_ AlloyDB for PostgreSQL \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/activate-adaptive-filtering
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/activate-adaptive-filtering
  title: "Activate adaptive filtering in AlloyDB AI \_|\_ AlloyDB for PostgreSQL \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Activate adaptive filtering in AlloyDB AI
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
You can process personal data for
this feature
as outlined in the
Cloud Data
Processing Addendum , subject to the obligations and restrictions described in the
agreement under which you access Google Cloud.
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page provides instructions for enabling adaptive filtering in AlloyDB AI, a feature that optimizes filtered vector searches.
Note: Inline filtering is supported only when you use the ScaNN algorithm. Inline filtering is not compatible with the Inverted File (IVF), Inverted File Flat (IVFFlat), or Hierarchical Navigable Small Worlds (HNSW) algorithms.
Enable adaptive filtering
To enable adaptive filtering, you must set the scann.enable_preview_features flag to on .
Note: The scann.enable_preview_features flag is an umbrella for multiple preview features and enables all of them.
gcloud alloydb instances update INSTANCE_ID \
--database-flags scann.enable_preview_features = on \
--region = REGION \
--cluster = CLUSTER_ID \
--project = PROJECT_ID
Replace the following:
INSTANCE_ID : the ID of the instance where you want to enable adaptive filtering.
REGION : the region where your instance is located for example, us-central1 .
CLUSTER_ID : the ID of the cluster where your instance is located.
PROJECT_ID : the ID of the project where your cluster is located.
Setting this flag to on activates the adaptive filtering behavior, allowing the query optimizer to dynamically switch between inline and pre-filtering strategies.
What's next
Filtered vector search in AlloyDB AI
Understand adaptive filtering in AlloyDB AI
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

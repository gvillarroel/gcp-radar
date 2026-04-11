---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.014Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Apache Pig on ARM images"
feature_slug: "apache-pig-on-arm-images"
latest_feature_date: "2026-02-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/testIamPermissions"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse"
keywords:
  - "apache"
  - "pig"
  - "on"
  - "arm"
  - "images"
  - "is"
  - "available"
  - "in"
---

# Apache Pig on ARM images

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Apache Pig is available in Dataproc ARM images; Apache Pig is available in Dataproc ARM images.

## Extended Definition

Apache Pig is available in Dataproc ARM images; Apache Pig is available in Dataproc ARM images.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/testIamPermissions](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/testIamPermissions)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Feature Apache Pig is now available in ARM images.
- Feature Apache Pig is now available in ARM images.
- October 28, 2022 Announcement The following preview Dataproc image versions are available: 2.1.0-RC2-debian11 2.1.0-RC2-rocky8 2.1.0-RC2-ubuntu20 The following component versions are available for use with the 2.1.0-RC2 images (the HBase and Druid components are not supported in 2.1 image versions): Apache Atlas 2.2.0 Apache Flink 1.15.0 Apache Hadoop 3.3.3 Apache Hive 3.1.3 Apache Hive WebHCat 3.1.3 Apache Kafka 3.1.0 Apache Pig 0.18.0-SNAPSHOT Apache Spark 3.3.0 Apache Sqoop v1 1.5.0-SNAPSHOT Apache Sqoop v2 1.99.6 Apache Tez 0.10.1 Cloud Storage Connector hadoop3-2.2.8 Conscrypt 2.5.2 Docker 20.10 Hue 4.10.0 Java temurin-11-jdk JupyterLab Notebook 3.4 Oozie 5.2.1 Presto 376 Python 3.10 R 4.1 Ranger 2.2.0 Scala 2.12.14 Solr 9.0.0 Zeppelin Notebook 0.10.1 Zookeeper 3.8.0 Security Dataproc Serverless for Spark runtime version 2.0.1 upgrades Apache Commons Text to 1.10.0 , addressing CVE-2022-42889 Libraries Dataproc Serverless for Spark runtime version 2.0.1 upgrades the following components: Spark to 3.3.1 SLF4J to 2.0.3 Announcement Dataproc Serverless for Spark now now uses runtime version 1.0.21 and 2.0.1 .
- March 03, 2026 Announcement New Serverless for Apache Spark runtime versions : 1.2.73 2.2.73 2.3.26 February 27, 2026 Announcement New Serverless for Apache Spark runtime versions : 1.2.72 2.2.72 2.3.25 3.0.9 February 24, 2026 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.160-debian10, 2.0.160-rocky8, 2.0.160-ubuntu18 2.1.109-debian11, 2.1.109-rocky8, 2.1.109-ubuntu20, 2.1.109-ubuntu20-arm 2.2.77-debian12, 2.2.77-rocky9, 2.2.77-ubuntu22, 2.2.77-ubuntu22-arm 2.3.24-debian12, 2.3.24-ml-ubuntu22, 2.3.24-rocky9, 2.3.24-ubuntu22, 2.3.24-ubuntu22-arm Fixed Fixed an issue that could cause gsutil failures on clusters using custom images built from new base images.

### "Method: projects.locations.autoscalingPolicies.testIamPermissions \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/testIamPermissions](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/testIamPermissions)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback Method: projects.locations.autoscalingPolicies.testIamPermissions Stay organized with collections Save and categorize content based on your preferences.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
- Request body The request body contains data with the following structure: JSON representation { "permissions" : [ string ] } Fields permissions[] string The set of permissions to check for the resource .

### "ListAutoscalingPoliciesResponse \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback ListAutoscalingPoliciesResponse Stay organized with collections Save and categorize content based on your preferences.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.585Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Advanced troubleshooting for Serverless Spark"
feature_slug: "advanced-troubleshooting-for-serverless-spark"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/network-access"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob"
keywords:
  - "advanced"
  - "troubleshooting"
  - "serverless"
  - "spark"
  - "dataproc"
  - "provides"
  - "workloads"
---

# Advanced troubleshooting for Serverless Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark provides advanced troubleshooting for supported Spark workloads.

## Extended Definition

Dataproc Serverless for Spark provides advanced troubleshooting for supported Spark workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/network-access](https://docs.cloud.google.com/dataproc-metastore/docs/network-access)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob)

## Supporting Pages

### Configuring Network Access for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/network-access](https://docs.cloud.google.com/dataproc-metastore/docs/network-access)
- Source ID: `site-docs-root-2`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Refer to General Troubleshooting: For more detailed network diagnostics, refer to: Troubleshooting Managed Service for Apache Spark Cluster Creation Failures Troubleshooting Managed Service for Apache Spark Batch Creation Failures Troubleshooting Dataproc Metastore Connectivity What's next Learn more about Dataproc Metastore .
- Egress Rule from Workload to Metastore: Verify that an egress firewall rule allows outbound TCP traffic from your Managed Service for Apache Spark cluster or Managed Service for Apache Spark workloads to the IP address range of your Dataproc Metastore instance on port 9083 .
- Correct network setup is essential for Managed Service for Apache Spark clusters and Managed Service for Apache Spark workloads to securely and privately communicate with your managed Dataproc Metastore service.
- Check Cloud Logging: Examine Cloud Logging for your Dataproc Metastore instance and related Managed Service for Apache Spark workloads for network-related error messages or connection timeouts.

### PySparkJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- JSON representation A Dataproc job for running Apache PySpark applications on YARN.
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback PySparkJob Stay organized with collections Save and categorize content based on your preferences.
- Note: Spark applications must be deployed in cluster mode for correct environment propagation. properties map (key: string, value: string) Optional.

### SparkJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- JSON representation A Dataproc job for running Apache Spark applications on YARN.
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback SparkJob Stay organized with collections Save and categorize content based on your preferences.
- The jar file that contains the class must be in the default CLASSPATH or specified in SparkJob.jar file uris.


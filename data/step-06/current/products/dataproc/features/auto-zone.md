---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.117Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Auto Zone"
feature_slug: "auto-zone"
latest_feature_date: "2017-06-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/networking"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient"
keywords:
  - "auto"
  - "zone"
  - "lets"
  - "dataproc"
  - "automatically"
  - "choose"
  - "within"
  - "the"
---

# Auto Zone

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Auto Zone lets Dataproc automatically choose a zone within the selected region for cluster placement.

## Extended Definition

Auto Zone lets Dataproc automatically choose a zone within the selected region for cluster placement.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Autozone (Beta) – When you create a new cluster as an alternative to choosing a zone, you can use the Cloud Dataproc Auto Zone feature to let Cloud Dataproc select a zone within your selected region for the placement of the cluster.
- Change Dataproc on Compute Engine: Dataproc now automatically configures Knox Gateway configuration properties gateway.dispatch.whitelist.services and gateway.dispatch.whitelist for component web UIs within the cluster.
- February 04, 2026 Announcement Upcoming Spark data lineage changes See the upcoming May, 2026 Dataproc and Serverless for Apache Spark release notes for an announcement of a change that will automatically enable Dataproc Spark data lineage and Serverless for Apache Spark data lineage when you enable the Data Lineage API (see Control lineage ingestion for a service ) without requiring additional project, cluster, batch workload, or interactive session settings.
- January 30, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.89 1.2.33 2.2.33 Change Dataproc on Compute Engine: Private Google Access is now automatically enabled in the configured subnetwork when creating clusters with internal IP addresses .

### Dataproc Metastore networking overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking)
- Source ID: `site-docs-root-2`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Dataproc Metastore requires the following per region for each VPC network: 1 peering quota /17 and /20 CIDR VPC Network Peering After the VPC network is created, Dataproc Metastore also automatically configures VPC Network Peering for your service.
- After the VPC network is created, Dataproc Metastore also automatically configures VPC Network Peering for your service.
- When you create a Dataproc Metastore, the service automatically creates the VPC network for you.
- This means that when a custom route in a peered network is updated, your VPC network automatically learns and implements the custom route without requiring any additional action from you.

### "Class AutoscalingPolicyServiceAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample create autoscaling policy(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample delete autoscaling policy(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample list autoscaling policies(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample update autoscaling policy(): Create a client client = dataproc v1 .


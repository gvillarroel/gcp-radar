---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.032Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Autoscaler recommendation reasoning details"
feature_slug: "autoscaler-recommendation-reasoning-details"
latest_feature_date: "2023-04-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/logging"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging"
keywords:
  - "autoscaler"
  - "recommendation"
  - "reasoning"
  - "details"
  - "dataproc"
  - "exposes"
  - "in"
  - "logging"
---

# Autoscaler recommendation reasoning details

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc exposes autoscaler recommendation reasoning details in Cloud Logging logs.

## Extended Definition

Dataproc exposes autoscaler recommendation reasoning details in Cloud Logging logs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/logging](https://docs.cloud.google.com/dataproc-metastore/docs/logging)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Feature Autoscaler recommendation reasoning details are available now in Cloud Logging logs.
- April 18, 2023 Change Add Autoscaler recommendation reasoning details in Cloud Logging.
- Change Added recommendation details in Autoscaler Stackdriver logs for the CANCEL and DO NOT CANCEL recommendations.
- Feature Added additional information into Autoscaler recommendations in Stackdriver logging.

### Cloud Logging \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/logging](https://docs.cloud.google.com/dataproc-metastore/docs/logging)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Console In the Google Cloud console, go to the Cloud Logging > Logs (Logs Explorer) page: Go to the Logs Explorer page Select an existing Dataproc Metastore Google Cloud project.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Cloud Logging Stay organized with collections Save and categorize content based on your preferences.
- Access job logs in Logging When you run Dataproc Metastore, a Hive metastore process output is streamed to the Google Cloud console.
- Dataproc Metastore service logs in Logging Dataproc Metastore exports request and system logs to Cloud Logging.

### "Enable GKE logging \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can search for Spark driver and executor logs in Cloud Logging using the following labels: dataproc.googleapis.com/cluster-uuid = Managed Service for Apache Spark cluster UUID dataproc.googleapis.com/job-uuid = Managed Service for Apache Spark job UUID dataproc.googleapis.com/role Sample queries: labels."k8s-pod/dataproc googleapis com/cluster-uuid"=" Managed Service for Apache Spark cluster UUID " labels."k8s-pod/dataproc googleapis com/job-uuid"=" Managed Service for Apache Spark job UUID " labels."k8s-pod/dataproc googleapis com/role"="driver" What's next Learn how to access Managed Service for Apache Spark on GKE job and cluster logs in Logging .
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Enable GKE logging Stay organized with collections Save and categorize content based on your preferences.
- Job driver logs See Managed Service for Apache Spark job logs in Logging for information on configuring and viewing Managed Service for Apache Spark on GKE Spark job driver logs.


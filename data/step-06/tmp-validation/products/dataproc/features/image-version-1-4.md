---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.186Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Image version 1.4"
feature_slug: "image-version-1-4"
latest_feature_date: "2019-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage"
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
keywords:
  - "generally"
  - "preview"
  - "line"
  - "available"
  - "version"
  - "clusters"
  - "image"
---

# Image version 1.4

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc image version 1.4 is a generally available image line for new clusters; Dataproc image version 1.4 is a preview image line that includes Python 3.7 via Miniconda and Spark 2.4.

## Extended Definition

Dataproc image version 1.4 is a generally available image line for new clusters; Dataproc image version 1.4 is a preview image line that includes Python 3.7 via Miniconda and Spark 2.4.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)
- [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### "Enable Hive data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a Managed Service for Apache Spark cluster Run the following command in a local terminal window or in Cloud Shell to create a Managed Service for Apache Spark cluster . gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version IMAGE VERSION \ --initialization-actions gs://goog-dataproc-initialization-actions- REGION /connectors/connectors.sh, gs://goog-dataproc-initialization-actions- REGION /hive-lineage/hive-lineage.sh \ --metadata hive-bigquery-connector-version= HIVE BQ VERSION Notes: CLUSTER NAME : The name of the cluster.
- Note: See Important considerations and guidelines when using initialization actions in production. gcloud CLI cluster creation example: gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version IMAGE VERSION \ --initialization-actions gs://goog-dataproc-initialization-actions- REGION /hive-lineage/hive-lineage.sh Replace the following: CLUSTER NAME : The name of the cluster.
- IMAGE VERSION The intended image version for the cluster. --initialization-actions : These installation actions, located in Cloud Storage, install the Hive-BigQuery connector and enable Hive data lineage .
- IMAGE VERSION The intended image version for the cluster. --initialization-actions : Specifies an installation action located in a Cloud Storage regional location, that enables Hive data lineage .

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable Spark data lineage at the project level, set the following custom project metadata : Key Value DATAPROC LINEAGE ENABLED true DATAPROC CLUSTER SCOPES https://www.googleapis.com/auth/cloud-platform Setting this VM access scope is only necessary for 2.0 image version clusters.
- Set scope on 2.0 image version clusters: Managed Service for Apache Spark cluster VM access cloud-platform scope is required for Spark data lineage.
- Enable the APIs Upcoming Spark data lineage changes See the Managed Service for Apache Spark release notes for the announcement of a change that will automatically make Spark data lineage available to your projects and clusters when you enable the Data Lineage API (see Control lineage ingestion for a service ) without requiring additional project or cluster level settings.
- Managed Service for Apache Spark image version clusters created with image version 2.1 and later have cloud-platform enabled.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- If your project is part of a shared VPC , you must specify the full subnetwork URL in the following format: projects/ HOST PROJECT ID /regions/ REGION /subnetworks/ SUBNET . --optional-components : This flag is available only when using base image versions 2.3 and later.
- Example: Google Cloud CLI cluster creation command: gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags For a listing of available optional flags, see Optional Arguments on GitHub.
- A list of optional components , such as SOLR, RANGER, TRINO, DOCKER, FLINK, HIVE WEBHCAT, ZEPPELIN, HUDI, ICEBERG, and PIG (PIG is available as an optional component in image versions 2.3 and later), to install in the image.
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.


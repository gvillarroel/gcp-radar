---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.205Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Custom service account support"
feature_slug: "custom-service-account-support"
latest_feature_date: "2016-11-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "account"
  - "custom"
  - "managed"
  - "specify"
  - "compute"
  - "user"
  - "users"
  - "lets"
---

# Custom service account support

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Custom service account support lets users specify a user-managed service account for the Compute Engine VMs in a Dataproc cluster.

## Extended Definition

Custom service account support lets users specify a user-managed service account for the Compute Engine VMs in a Dataproc cluster.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: $env :GOOGLE APPLICATION CREDENTIALS = "C:\Users\username\Downloads\service-account-file.json" For command prompt: set GOOGLE APPLICATION CREDENTIALS = KEY PATH Replace KEY PATH with the path of the JSON file that contains your credentials.
- For example: $env :GOOGLE APPLICATION CREDENTIALS = "C:\Users\username\Downloads\service-account-file.json" For command prompt: set GOOGLE APPLICATION CREDENTIALS = KEY PATH Replace KEY PATH with the path of the JSON file that contains your credentials.
- Run the command, below, to create a single-node Managed Service for Apache Spark cluster in the specified Compute Engine zone . gcloud dataproc clusters create ${CLUSTER} \ --project=${PROJECT} \ --region=${REGION} \ --single-node The above command installs the default cluster image version .
- For example: export GOOGLE APPLICATION CREDENTIALS = "/home/user/Downloads/service-account-file.json" Example: Windows For PowerShell: $env :GOOGLE APPLICATION CREDENTIALS = " KEY PATH " Replace KEY PATH with the path of the JSON file that contains your credentials.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.
- JSON representation { "userServiceAccountMapping" : { string : string , ... } } Fields userServiceAccountMapping map (key: string, value: string) Required.
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can grant this permission by granting the roles/compute.imageUser role on the hosted image to your project's Managed Service for Apache Spark Service Agent service account (see Sharing custom images within an organization ).
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- Using hosted custom images: If you use a custom image hosted in another project, the Managed Service for Apache Spark Service Agent service account in your project must have compute.images.get permission on the image in the host project.
- If generate custom image.py is successful, the imageURI of the custom image is displayed in the terminal window output (the full imageUri is shown in bold below): ... managedCluster: clusterName: verify-image-20180614213641-8308a4cd config: gceClusterConfig: zoneUri: ZONE masterConfig: imageUri: https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME ...


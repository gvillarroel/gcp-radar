---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.122Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Custom service account support"
feature_slug: "custom-service-account-support"
latest_feature_date: "2016-11-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
keywords:
  - "custom"
  - "account"
  - "lets"
  - "users"
  - "specify"
  - "user"
  - "managed"
  - "for"
---

# Custom service account support

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Custom service account support lets users specify a user-managed service account for the Compute Engine VMs in a Dataproc cluster.

## Extended Definition

Custom service account support lets users specify a user-managed service account for the Compute Engine VMs in a Dataproc cluster.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Dataproc users can now use Customer-Managed Encryption Keys (CMEK) to access protected BigQuery datasets and tables (see Writing a MapReduce Job with the BigQuery Connector for an example).
- November 29, 2016 Feature Custom service account support – When creating a Cloud Dataproc cluster, you can now specify a user-managed (non-default) service account.
- February 09, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.91 1.2.35 2.2.35 February 07, 2025 Change New Dataproc on Compute Engine subminor image versions: 2.0.131-debian10, 2.0.131-rocky8, 2.0.131-ubuntu18 2.1.79-debian11, 2.1.79-rocky8, 2.1.79-ubuntu20, 2.1.79-ubuntu20-arm 2.2.45-debian12, 2.2.45-rocky9, 2.2.45-ubuntu22 Announcement Spark UI for Dataproc Serverless Batches and Interactive sessions , which lets you to monitor and debug your serverless Spark workloads, is now available for CMEK (Customer-Managed Encryption Keys) and Assured Workloads .
- November 13, 2025 Announcement New Serverless for Apache Spark runtime versions : 1.2.62 2.2.62 2.3.15 Feature Serverless for Apache Spark: Added the dataproc.artifacts.remove property, which lets users remove default artifacts, such as spark-bigquery-connector , iceberg , and delta-lake from a Serverless for Apache Spark runtime.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- You can grant this permission by granting the roles/compute.imageUser role on the hosted image to your project's Managed Service for Apache Spark Service Agent service account (see Sharing custom images within an organization ).
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- Using hosted custom images: If you use a custom image hosted in another project, the Managed Service for Apache Spark Service Agent service account in your project must have compute.images.get permission on the image in the host project.
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- For example: $env :GOOGLE APPLICATION CREDENTIALS = "C:\Users\username\Downloads\service-account-file.json" For command prompt: set GOOGLE APPLICATION CREDENTIALS = KEY PATH Replace KEY PATH with the path of the JSON file that contains your credentials.
- For example: $env :GOOGLE APPLICATION CREDENTIALS = "C:\Users\username\Downloads\service-account-file.json" For command prompt: set GOOGLE APPLICATION CREDENTIALS = KEY PATH Replace KEY PATH with the path of the JSON file that contains your credentials.
- For example: export GOOGLE APPLICATION CREDENTIALS = "/home/user/Downloads/service-account-file.json" Example: Windows For PowerShell: $env :GOOGLE APPLICATION CREDENTIALS = " KEY PATH " Replace KEY PATH with the path of the JSON file that contains your credentials.
- For example: export GOOGLE APPLICATION CREDENTIALS = "/home/user/Downloads/service-account-file.json" Example: Windows For PowerShell: $env :GOOGLE APPLICATION CREDENTIALS = " KEY PATH " Replace KEY PATH with the path of the JSON file that contains your credentials.


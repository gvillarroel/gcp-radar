---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.020Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Hadoop Google Secret Manager Credential Provider for Serverless Spark"
feature_slug: "hadoop-google-secret-manager-credential-provider-for-serverless-spark"
latest_feature_date: "2024-10-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
keywords:
  - "hadoop"
  - "secret"
  - "manager"
  - "credential"
  - "provider"
  - "for"
  - "serverless"
  - "spark"
---

# Hadoop Google Secret Manager Credential Provider for Serverless Spark

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc Serverless for Spark supports the Hadoop Google Secret Manager Credential Provider in 1.2 and 2.2 runtimes.

## Extended Definition

Dataproc Serverless for Spark supports the Hadoop Google Secret Manager Credential Provider in 1.2 and 2.2 runtimes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider](https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### "Use Secret Manager credential provider \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider](https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider)
- Source ID: `site-iam-reference`
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Submit a Managed Service for Apache Spark with Secret Manager credential provider Run the following command locally or in Cloud Shell to submit a Managed Service for Apache Spark job with the required properties. gcloud dataproc jobs submit CLUSTER NAME \ --region= REGION \ --properties="hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed... \ -- job-args Notes: CLUSTER NAME : the name of the cluster that will run the job.
- Create a Managed Service for Apache Spark cluster with Secret Manager credential provider Run the following command locally or in Cloud Shell to create a Managed Service for Apache Spark cluster with the required properties. gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --properties="hadoop:hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hadoop:hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed...
- Use this cluster to run Hive jobs that connect to the external metastore on another Managed Service for Apache Spark cluster. gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --properties="hive:javax.jdo.option.ConnectionURL=jdbc:mysql:// METASTORE CLUSTER NAME -m/metastore,hive:hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hive:hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed...
- Example properties: hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true Restart Hive Metastore. sudo systemctl restart hive-metastore Create a cluster with an external Hive Metastore Run the following command locally or in Cloud Shell to create a Managed Service for Apache Spark cluster with the following cluster properties.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- October 25, 2024 Feature Dataproc Serverless for Spark: The Hadoop Google Secret Manager Credential Provider feature is now available in the Dataproc Serverless for Spark 1.2 and 2.2 runtimes.
- February 29, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.52 2.0.60 2.1.39 2.2.0-RC12 February 28, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.93-debian10, 2.0.93-rocky8, 2.0.93-ubuntu18 2.1.41-debian11, 2.1.41-rocky8, 2.1.41-ubuntu20, 2.1.41-ubuntu20-arm 2.2.7-debian12, 2.2.7-rocky9, 2.2.7-ubuntu22 Feature Dataproc on Compute Engine : The new Secret Manager credential provider feature is available in the latest 2.1 image versions.
- Announcement New Dataproc Serverless for Spark runtime versions : 1.1.50 2.0.58 2.1.37 2.2.0-RC10 February 08, 2024 Feature Dataproc on Compute Engine : The new Secret Manager credential provider feature is available in the latest 2.2 image versions.
- December 21, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.43 2.0.51 2.1.30 2.2.0-RC3 December 18, 2023 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.87-debian10, 2.0.87-rocky8, 2.0.87-ubuntu18 2.1.35-debian11, 2.1.35-rocky8, 2.1.35-ubuntu20, 2.1.35-ubuntu20-arm 2.2.1-debian12, 2.2.1-rocky9, 2.2.1-ubuntu22 December 14, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.42 2.0.50 2.1.29 2.2.0-RC2 Change Added the google-cloud-secret-manager Python package in the latest Dataproc Serverless for Spark runtimes.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Using secure boot MOK (Machine Owner Key) secrets: To enable secure boot with your Managed Service for Apache Spark custom image, do the following: Enable the Secret Manager API ( secretmanager.googleapis.com .
- To disable secure boot: By default, the Managed Service for Apache Spark custom image scripts generate and manage a key pair using Secret Manager when run from a Managed Service for Apache Spark cluster.
- Managed Service for Apache Spark generates and manages a key pair using the Secret Manager service.
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.


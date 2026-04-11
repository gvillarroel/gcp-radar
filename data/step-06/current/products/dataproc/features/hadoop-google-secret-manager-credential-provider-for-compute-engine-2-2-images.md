---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.024Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Hadoop Google Secret Manager Credential Provider for Compute Engine 2.2 images"
feature_slug: "hadoop-google-secret-manager-credential-provider-for-compute-engine-2-2-images"
latest_feature_date: "2024-02-08"
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
  - "compute"
  - "engine"
---

# Hadoop Google Secret Manager Credential Provider for Compute Engine 2.2 images

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc on Compute Engine 2.2 image versions support the Hadoop Google Secret Manager Credential Provider.

## Extended Definition

Dataproc on Compute Engine 2.2 image versions support the Hadoop Google Secret Manager Credential Provider.

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
- Final score: 278
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This behavior is consistent with the Hadoop CredentialProvider API. hadoop credential create SECRET ID -provider gsm://projects/ PROJECT ID -v VALUE List secrets stored in a project. hadoop credential list -provider gsm://projects/ PROJECT ID Check if a secret exists in a project with a specified value. hadoop credential check SECRET ID -provider gsm://projects/ PROJECT ID -v VALUE Check for a specific secret version in a config file. hadoop credential conf CONFIG FILE check SECRET ID -provider gsm://projects/ PROJECT ID -v VALUE CONFIG FILE : The XML file that sets hadoop.security.credstore.google-secret-manager.secret-version .
- Submit a Managed Service for Apache Spark with Secret Manager credential provider Run the following command locally or in Cloud Shell to submit a Managed Service for Apache Spark job with the required properties. gcloud dataproc jobs submit CLUSTER NAME \ --region= REGION \ --properties="hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed... \ -- job-args Notes: CLUSTER NAME : the name of the cluster that will run the job.
- Create a Managed Service for Apache Spark cluster with Secret Manager credential provider Run the following command locally or in Cloud Shell to create a Managed Service for Apache Spark cluster with the required properties. gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --properties="hadoop:hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hadoop:hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed...
- Use this cluster to run Hive jobs that connect to the external metastore on another Managed Service for Apache Spark cluster. gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --properties="hive:javax.jdo.option.ConnectionURL=jdbc:mysql:// METASTORE CLUSTER NAME -m/metastore,hive:hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hive:hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed...

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- February 29, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.52 2.0.60 2.1.39 2.2.0-RC12 February 28, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.93-debian10, 2.0.93-rocky8, 2.0.93-ubuntu18 2.1.41-debian11, 2.1.41-rocky8, 2.1.41-ubuntu20, 2.1.41-ubuntu20-arm 2.2.7-debian12, 2.2.7-rocky9, 2.2.7-ubuntu22 Feature Dataproc on Compute Engine : The new Secret Manager credential provider feature is available in the latest 2.1 image versions.
- March 28, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.97-debian10, 2.0.97-rocky8, 2.0.97-ubuntu18 2.1.45-debian11, 2.1.45-rocky8, 2.1.45-ubuntu20, 2.1.45-ubuntu20-arm 2.2.11-debian12, 2.2.11-rocky9, 2.2.11-ubuntu22 Note: the above subminor image versions were rolled back on April 2, 2024 Feature Dataproc on Compute Engine: New Hadoop Google Secret Manager Credential Provider feature introduced in latest Dataproc on Compute Engine 2.0 image versions .
- Announcement New Dataproc Serverless for Spark runtime versions : 1.1.50 2.0.58 2.1.37 2.2.0-RC10 February 08, 2024 Feature Dataproc on Compute Engine : The new Secret Manager credential provider feature is available in the latest 2.2 image versions.
- October 25, 2024 Feature Dataproc Serverless for Spark: The Hadoop Google Secret Manager Credential Provider feature is now available in the Dataproc Serverless for Spark 1.2 and 2.2 runtimes.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- You can avoid this issue by including the following command in your customization script to clear cached credentials. rm -r /root/.gsutil /root/.config/gcloud --zone : the Compute Engine zone where generate custom image.py will create a temporary VM to use to create your custom image. --gcs-bucket : a URI, in the format gs:// BUCKET NAME , that points to your Cloud Storage bucket . generate custom image.py writes log files to this bucket.
- How it works The generate custom image.py program launches a temporary Compute Engine VM instance with the specified Managed Service for Apache Spark base image, then runs the customization script inside the VM instance to install custom packages and or update configurations.
- Using secure boot MOK (Machine Owner Key) secrets: To enable secure boot with your Managed Service for Apache Spark custom image, do the following: Enable the Secret Manager API ( secretmanager.googleapis.com .
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).


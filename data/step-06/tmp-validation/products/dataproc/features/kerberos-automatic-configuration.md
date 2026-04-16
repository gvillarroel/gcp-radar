---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.157Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Kerberos automatic configuration"
feature_slug: "kerberos-automatic-configuration"
latest_feature_date: "2020-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos"
keywords:
  - "automatic"
  - "kerberos"
  - "configuration"
  - "automatically"
  - "configure"
  - "during"
---

# Kerberos automatic configuration

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc can automatically configure Kerberos during cluster creation without requiring explicit root principal password flags.

## Extended Definition

Dataproc can automatically configure Kerberos during cluster creation without requiring explicit root principal password flags.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)

## Supporting Pages

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- You can sign in by executing gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI.
- If you change your endpoint to gRPC, this value automatically changes to 443 and can't be changed. (Optional) For Dataproc Metastore 1.
- After this is set, your service automatically increases or decreases the scaling factor required to run your workloads.
- If you choose to use a gRPC endpoint, your port number automatically changes to 443 .

### How Kerberos works with Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/about-kerberos)
- Source ID: `site-docs-root-2`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You need to specify the secret version that you want to use, Dataproc Metastore does not pick the latest version automatically. krb5.conf file A valid krb5.conf file contains Kerberos configuration information, such as the KDC IP, port, and realm name.
- Required Kerberos assets The following section provides general information on the Kerberos assets that you need to configure Kerberos for a Dataproc Metastore service.
- Kerberos principal When you configure Kerberos for a Dataproc Metastore service, you generate your principal file using a Managed Service for Apache Spark cluster.
- You can configure Kerberos on the following Dataproc Metastore services: A Dataproc Metastore service that uses the Thrift endpoint protocol .

### "Configure Kerberos for Dataproc Metastore Thrift endpoints \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- Source ID: `site-docs-root-2`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the project ID and number of the project that contains the Cloud Storage bucket. gcloud projects add-iam-policy-binding PROJECT ID \ --member serviceAccount:service- PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com \ --role roles/storage.objectViewer Create a Dataproc Metastore service with Kerberos Create a new Dataproc Metastore service that's configured with your Kerberos files.
- Configure the Managed Service for Apache Spark cluster for Kerberos The following instructions show you how to use SSH to connect to a primary Managed Service for Apache Spark cluster that's associated with your Dataproc Metastore service.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Configure Kerberos for Dataproc Metastore Thrift endpoints Stay organized with collections Save and categorize content based on your preferences.
- Enable Kerberos for Dataproc Metastore The following instructions show you how to configure Kerberos for a Dataproc Metastore service that is attached to a Managed Service for Apache Spark cluster.


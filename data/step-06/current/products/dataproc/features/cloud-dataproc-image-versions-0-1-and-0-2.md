---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.693Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud Dataproc image versions 0.1 and 0.2"
feature_slug: "cloud-dataproc-image-versions-0-1-and-0-2"
latest_feature_date: "2016-08-16"
deprecation_date: "2016-08-16"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions"
keywords:
  - "dataproc"
  - "image"
  - "versions"
  - "were"
  - "deprecated"
  - "no"
  - "longer"
  - "receive"
---

# Cloud Dataproc image versions 0.1 and 0.2

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Cloud Dataproc image versions 0.1 and 0.2 were deprecated and no longer receive updates; deprecated on 2016-08-16.

## Extended Definition

Cloud Dataproc image versions 0.1 and 0.2 were deprecated and no longer receive updates; deprecated on 2016-08-16.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions)
- [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.
- Attempt to create a Managed Service for Apache Spark cluster with an expired custom image or a custom image that will expire within 10 days. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --region= REGION \ ... other flags The gcloud CLI will issue an error message that includes the cluster dataproc:dataproc.custom.image.expiration.token property name and token value. dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE Copy the TOKEN VALUE string to the clipboard.

### Auxiliary versions \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Enable Dataproc Metastore Required Roles To get the permission that you need to create a Dataproc Metastore that uses auxiliary versions, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: Grant full control of Dataproc Metastore resources ( roles/metastore.editor ) Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can check the active account by running gcloud auth list . curl -X POST -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"network":"projects/ PROJECT ID /global/networks/default", "port": 9083, "hive metastore config": {"auxiliary versions": {"aux-version1": {"version": " AUX VERSION "} } } }' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /services?service id= SERVICE ID Replace the following: SERVICE ID : the name of your new Dataproc Metastore service.
- You can check the active account by running gcloud auth list . curl -X PATCH -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"hive metastore config": {"auxiliary versions": {"aux-version1": {"version": " AUX VERSION } } } }' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE ID ?update mask=hive metastore config.auxiliary versions Replace the following: SERVICE ID : the name of your Dataproc Metastore service.
- Click Submit . gcloud CLI To update a Dataproc Metastore service that uses an auxiliary version, run one of the following gcloud metastore services update commands: gcloud metastore services update SERVICE \ --location= LOCATION \ --add-auxiliary-versions= AUXILIARY VERSIONS , ... or gcloud metastore services update SERVICE \ --location= LOCATION \ --update-auxiliary-versions-from-file= AUXILIARY VERSIONS FROM FILE Replace the following: SERVICE : the name of your Dataproc Metastore service.

### "Managed Service for Apache Spark on GKE release versions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Spark Engine 3.5 Component 3.5-dataproc-22 3.5-dataproc-17 Apache Spark 3.5.0 3.5.0 Hadoop Libraries 3.3.6 3.3.6 Cloud Storage Connector 3.0.0 3.0.0 Java 11 11 Python 3.8.5 3.8.5 Conda 4.9.2 4.9.2 R 4.3.0 4.3.0 Spark Engine 3.1(Deprecated) Component 3.1-dataproc-17 3.1-dataproc-16 3.1-dataproc-15 3.1-dataproc-14 Apache Spark 3.1.3 3.1.3 3.1.3 3.1.3 Hadoop Libraries 3.2.3 3.2.3 3.2.3 3.2.3 Cloud Storage Connector hadoop3-2.2.13 hadoop3-2.2.13 hadoop3-2.2.11 hadoop3-2.2.11 Java 8 8 8 8 Python 3.8.5 3.8.5 3.8.5 3.8.5 Conda 4.9.2 23.5.0 4.9.2 4.9.2 R 4.3.0 4.3.0 4.2.3 4.2.3 Spark Engine 2.4(Deprecated) Spark 2.4 has reached EOL for support in DPGKE.
- 3.5 - Most recent version of Spark engine with a Spark major.minor version of 3.5. dataproc-2.2 - Most recent version of Spark engine that is compatible with Managed Service for Apache Spark 2.2 images. latest - Most recent version of Spark engine.
- Component 2.4-dataproc-17 2.4-dataproc-16 2.4-dataproc-15 2.4-dataproc-14 Apache Spark 2.4.8 2.4.8 2.4.8 2.4.8 Hadoop Libraries 2.10.2 2.10.2 2.10.2 2.10.2 Cloud Storage Connector hadoop2-2.1.9 hadoop2-2.1.9 hadoop2-2.1.9 hadoop2-2.1.9 Java 8 8 8 8 Python 3.7.4 3.7.4 3.7.4 3.7.4 Conda 4.7.12 22.11.1 22.11.1 22.1.0 R 3.6.3 3.6.3 3.6.3 3.6.3 Spark version formats on Managed Service for Apache Spark on GKE A fully qualified Spark engine release version is expressed as: 3.1-dataproc-[NUMBER] or 3.5-dataproc-[NUMBER] , for example, 3.1-dataproc-17 or 3.5-dataproc-17 .
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Managed Service for Apache Spark on GKE release versions Stay organized with collections Save and categorize content based on your preferences.


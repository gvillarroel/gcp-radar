---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.152Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Flink Optional Component"
feature_slug: "dataproc-flink-optional-component"
latest_feature_date: "2020-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
keywords:
  - "flink"
  - "adds"
  - "optional"
  - "component"
  - "clusters"
---

# Dataproc Flink Optional Component

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Dataproc Flink Optional Component adds Flink as an optional component for Dataproc clusters.

## Extended Definition

The Dataproc Flink Optional Component adds Flink as an optional component for Dataproc clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- ConfidentialInstanceConfig Confidential Instance Config for clusters using Confidential VMs JSON representation { "enableConfidentialCompute" : boolean } Fields enableConfidentialCompute boolean Optional.
- JSON representation { "imageVersion" : string , "properties" : { string : string , ... } , "optionalComponents" : [ enum ( Component ) ] } Fields imageVersion string Optional.
- Shielded Instance Config for clusters using Compute Engine Shielded VMs . confidentialInstanceConfig object ( ConfidentialInstanceConfig ) Optional.
- Confidential Instance Config for clusters using Confidential VMs . resourceManagerTags map (key: string, value: string) Optional.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Example: Google Cloud CLI cluster creation command : gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags If the component name is not specified when you create the cluster, the optional component, including any custom OS packages and configs, will be deleted.
- Example: Google Cloud CLI cluster creation command: gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags For a listing of available optional flags, see Optional Arguments on GitHub.
- A list of optional components , such as SOLR, RANGER, TRINO, DOCKER, FLINK, HIVE WEBHCAT, ZEPPELIN, HUDI, ICEBERG, and PIG (PIG is available as an optional component in image versions 2.3 and later), to install in the image.
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- IMPORTANT : The Dataproc Presto Optional Component com. google. cloud. dataproc. v1.
- IMPORTANT : The Dataproc Presto Optional Component com. google. cloud. dataproc. v1.
- IMPORTANT : The Dataproc Trino Optional Component com. google. cloud. dataproc. v1.
- IMPORTANT : The Dataproc Trino Optional Component com. google. cloud. dataproc. v1.


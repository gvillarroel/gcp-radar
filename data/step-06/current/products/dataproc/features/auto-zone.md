---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.679Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Auto Zone"
feature_slug: "auto-zone"
latest_feature_date: "2017-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/networking"
keywords:
  - "auto"
  - "zone"
  - "lets"
  - "dataproc"
  - "automatically"
  - "choose"
  - "within"
  - "selected"
---

# Auto Zone

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Auto Zone lets Dataproc automatically choose a zone within the selected region for cluster placement.

## Extended Definition

Auto Zone lets Dataproc automatically choose a zone within the selected region for cluster placement.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking)

## Supporting Pages

### Dataproc Metastore networking overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking)
- Source ID: `site-docs-root-2`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataproc Metastore requires the following per region for each VPC network: 1 peering quota /17 and /20 CIDR VPC Network Peering After the VPC network is created, Dataproc Metastore also automatically configures VPC Network Peering for your service.
- After the VPC network is created, Dataproc Metastore also automatically configures VPC Network Peering for your service.
- When you create a Dataproc Metastore, the service automatically creates the VPC network for you.
- This means that when a custom route in a peered network is updated, your VPC network automatically learns and implements the custom route without requiring any additional action from you.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Attempt to create a Managed Service for Apache Spark cluster with an expired custom image or a custom image that will expire within 10 days. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --region= REGION \ ... other flags The gcloud CLI will issue an error message that includes the cluster dataproc:dataproc.custom.image.expiration.token property name and token value. dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE Copy the TOKEN VALUE string to the clipboard.
- Then, run the generate custom image.py script to have Managed Service for Apache Spark generate and save your custom image. python3 generate custom image.py \ --image-name= CUSTOM IMAGE NAME \ [--family= CUSTOM IMAGE FAMILY NAME ] \ --dataproc-version= IMAGE VERSION \ --customization-script= LOCAL PATH \ --zone= ZONE \ --gcs-bucket= gs:// BUCKET NAME \ [--no-smoke-test] Required flags --image-name : the output name for your custom image.
- This URI can be specified in one of three ways: Full URI: https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/images/ gs://BUCKET NAME` Partial URI: projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME Short name: CUSTOM IMAGE NAME Custom images can also be specified by their family URI, which always chooses the most recent image within the image family.
- In the Choose how to store your data section, do the following: Select a default storage class for the bucket or Autoclass for automatic storage class management of your bucket's data.

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[projectId]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 . acceleratorCount integer The number of the accelerator cards of this type exposed to this instance.
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2 projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the machine type resource, for example, n1-standard-2 . diskConfig object ( DiskConfig ) Optional.
- Hyperdisk Balanced High Availability is not supported because that's for cross-zone usages, which is not supported in Dataproc.
- Dataproc will use the most recent image from the family: https://www.googleapis.com/compute/v1/projects/[projectId]/global/images/family/[custom-image-family-name] projects/[projectId]/global/images/family/[custom-image-family-name] If the URI is unspecified, it will be inferred from SoftwareConfig.image version or the system default. machineTypeUri string Optional.


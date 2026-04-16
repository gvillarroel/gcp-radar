---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.201Z"
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
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
keywords:
  - "selected"
  - "within"
  - "choose"
  - "automatically"
  - "zone"
  - "auto"
  - "lets"
---

# Auto Zone

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Auto Zone lets Dataproc automatically choose a zone within the selected region for cluster placement.

## Extended Definition

Auto Zone lets Dataproc automatically choose a zone within the selected region for cluster placement.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- This URI can be specified in one of three ways: Full URI: https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/images/ gs://BUCKET NAME` Partial URI: projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME Short name: CUSTOM IMAGE NAME Custom images can also be specified by their family URI, which always chooses the most recent image within the image family.
- In the Choose how to store your data section, do the following: Select a default storage class for the bucket or Autoclass for automatic storage class management of your bucket's data.
- Attempt to create a Managed Service for Apache Spark cluster with an expired custom image or a custom image that will expire within 10 days. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --region= REGION \ ... other flags The gcloud CLI will issue an error message that includes the cluster dataproc:dataproc.custom.image.expiration.token property name and token value. dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE Copy the TOKEN VALUE string to the clipboard.
- You can avoid this issue by including the following command in your customization script to clear cached credentials. rm -r /root/.gsutil /root/.config/gcloud --zone : the Compute Engine zone where generate custom image.py will create a temporary VM to use to create your custom image. --gcs-bucket : a URI, in the format gs:// BUCKET NAME , that points to your Cloud Storage bucket . generate custom image.py writes log files to this bucket.

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[projectId]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 . acceleratorCount integer The number of the accelerator cards of this type exposed to this instance.
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2 projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the machine type resource, for example, n1-standard-2 . diskConfig object ( DiskConfig ) Optional.
- Enums PREEMPTIBILITY UNSPECIFIED Preemptibility is unspecified, the system will choose the appropriate setting for each instance group.
- Hyperdisk Balanced High Availability is not supported because that's for cross-zone usages, which is not supported in Dataproc.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- If you choose to use a gRPC endpoint, your port number automatically changes to 443 .
- You can sign in by executing gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI.
- If you change your endpoint to gRPC, this value automatically changes to 443 and can't be changed. (Optional) For Dataproc Metastore 1.
- After this is set, your service automatically increases or decreases the scaling factor required to run your workloads.


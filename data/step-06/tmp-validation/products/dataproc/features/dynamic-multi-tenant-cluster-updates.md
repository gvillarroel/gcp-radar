---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.099Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dynamic multi-tenant cluster updates"
feature_slug: "dynamic-multi-tenant-cluster-updates"
latest_feature_date: "2025-07-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/overview"
keywords:
  - "dynamic"
  - "tenant"
  - "multi"
  - "updates"
  - "clusters"
  - "supports"
  - "cluster"
---

# Dynamic multi-tenant cluster updates

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports dynamic updates for multi-tenant clusters.

## Extended Definition

Dataproc supports dynamic updates for multi-tenant clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc-metastore/docs/overview](https://docs.cloud.google.com/dataproc-metastore/docs/overview)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- Node Group Affinity for sole-tenant clusters. shieldedInstanceConfig object ( ShieldedInstanceConfig ) Optional.
- NodeGroupAffinity Node Group Affinity for clusters using sole-tenant node groups.
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 node-group-1 ShieldedInstanceConfig Shielded Instance Config for clusters using Compute Engine Shielded VMs .
- SINGLE NODE https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/single-node-clusters ZERO SCALE Clusters that can use only secondary workers and be scaled down to zero secondary worker nodes.

### Dataproc Metastore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/overview](https://docs.cloud.google.com/dataproc-metastore/docs/overview)
- Source ID: `site-docs-root-2`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- This integration lets you keep your table information between jobs or make metadata available to other clusters and other processing engines.
- Create a centralized metadata repository that's shared among many ephemeral Managed Service for Apache Spark clusters.
- Rely on standard OAuth authentication used by other Google Cloud products, which supports using granular Identity and Access Management roles to enable access control for individual resources.
- After, you can connect it to a Managed Service for Apache Spark cluster and query the table for information using Hive, Spark SQL, or other query services.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- Usage considerations and limitations Custom image lifetime: To make sure that the clusters receive the latest service updates and bug fixes, the creation of clusters with a custom image is limited to 365 days from the custom image creation date.
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.
- Attempt to create a Managed Service for Apache Spark cluster with an expired custom image or a custom image that will expire within 10 days. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --region= REGION \ ... other flags The gcloud CLI will issue an error message that includes the cluster dataproc:dataproc.custom.image.expiration.token property name and token value. dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE Copy the TOKEN VALUE string to the clipboard.


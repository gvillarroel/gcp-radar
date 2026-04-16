---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.213Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Custom Compute Engine machine types"
feature_slug: "custom-compute-engine-machine-types"
latest_feature_date: "2016-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
keywords:
  - "types"
  - "custom"
  - "machine"
  - "clusters"
  - "compute"
  - "engine"
---

# Custom Compute Engine machine types

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Custom Compute Engine machine types let Dataproc clusters use customized vCPU and memory configurations for master and worker nodes.

## Extended Definition

Custom Compute Engine machine types let Dataproc clusters use customized vCPU and memory configurations for master and worker nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Async Service The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Cluster Controller Client Service Description: The ClusterControllerService provides methods to manage clusters of Compute Engine instances.
- Shielded Instance Config Shielded Instance Config for clusters using Compute Engine Shielded VMs . com. google. cloud. dataproc. v1.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 node-group-1 ShieldedInstanceConfig Shielded Instance Config for clusters using Compute Engine Shielded VMs .
- Shielded Instance Config for clusters using Compute Engine Shielded VMs . confidentialInstanceConfig object ( ConfidentialInstanceConfig ) Optional.
- It cannot be activated on clusters created with supported Dataproc on Compute Engine image versions.
- The Compute Engine subnetwork to be used for machine communications.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- You can avoid this issue by including the following command in your customization script to clear cached credentials. rm -r /root/.gsutil /root/.config/gcloud --zone : the Compute Engine zone where generate custom image.py will create a temporary VM to use to create your custom image. --gcs-bucket : a URI, in the format gs:// BUCKET NAME , that points to your Cloud Storage bucket . generate custom image.py writes log files to this bucket.
- How it works The generate custom image.py program launches a temporary Compute Engine VM instance with the specified Managed Service for Apache Spark base image, then runs the customization script inside the VM instance to install custom packages and or update configurations.
- The generate custom image.py program uses gcloud CLI to run multi-step workflows on Compute Engine.
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.


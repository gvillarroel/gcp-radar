---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:52:40.547Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "Hypercompute Cluster preview"
feature_slug: "hypercompute-cluster-preview"
latest_feature_date: "2024-12-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-slurm-cluster"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a-slurm-cluster-with-a4"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models"
keywords:
  - "provisioning"
  - "entered"
  - "enabling"
  - "preview"
  - "hypercompute"
  - "large"
  - "scale"
  - "cluster"
---

# Hypercompute Cluster preview

Product: AI Hypercomputer
Coverage: MEDIUM

## Step 02 Summary

Hypercompute Cluster entered preview, enabling large-scale provisioning of A3 Ultra accelerator-optimized machines with optimized placement, networking, workload placement, and maintenance controls.

## Extended Definition

Hypercompute Cluster entered preview, enabling large-scale provisioning of A3 Ultra accelerator-optimized machines with optimized placement, networking, workload placement, and maintenance controls.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-slurm-cluster](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-slurm-cluster)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a-slurm-cluster-with-a4)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models)

## Supporting Pages

### "Create an AI-optimized Slurm cluster \_|\_ AI Hypercomputer \_|\_ Google\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-slurm-cluster](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-slurm-cluster)
- Source ID: `site-docs-root-required-2`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you want to enable your cluster to autoscale instead, use examples/machine-learning/a3-ultragpu-8g/a3ultra-slurm-blueprint.yaml file and edit the values of node count static and node count dynamic max to match the following: node count static: 0 node count dynamic max: $(vars.a3u cluster size) Spot To create your deployment file, use a text editor to create a YAML file named a3ultra-slurm-deployment.yaml and add the following content.
- If you want to enable your cluster to autoscale instead, use examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml file and edit the values of node count static and node count dynamic max to match the following: node count static: 0 node count dynamic max: $(vars.a4h cluster size) Spot To create your deployment file, use a text editor to create a YAML file named a4high-slurm-deployment.yaml and add the following content.
- If you want to enable your cluster to autoscale instead, use examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml file and edit the values of node count static and node count dynamic max to match the following: node count static: 0 node count dynamic max: $(vars.a3m cluster size) Spot To create your deployment file, create a YAML file named a3mega-slurm-deployment.yaml and add the following content.
- If you want to enable your cluster to autoscale instead, use examples/machine-learning/a3-highgpu-8g/a3high-slurm-blueprint.yaml file and edit the values of node count static and node count dynamic max to match the following: node count static: 0 node count dynamic max: $(vars.a3h cluster size) Spot To create your deployment file, create a YAML file named a3high-slurm-deployment.yaml and add the following content.

### "Create an AI-optimized Slurm cluster with A4 VMs \_|\_ AI Hypercomputer\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a-slurm-cluster-with-a4)
- Source ID: `site-docs-root-required-2`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A4 accelerator-optimized machine types come with NVIDIA B200 GPUs attached and are specifically engineered for intensive AI computation to help your Slurm cluster efficiently handle large-scale model training and inference.
- On Google Cloud, you can create a Cloud Storage bucket that has versioning enabled. gcloud storage buckets create gs://${GOOGLE CLOUD BUCKET NAME} \ --project=${A4 RESERVATION PROJECT ID} \ --default-storage-class=STANDARD \ --location=${GOOGLE CLOUD BUCKET LOCATION} \ --uniform-bucket-level-access gcloud storage buckets update gs://${GOOGLE CLOUD BUCKET NAME} --versioning Set up the Cluster Toolkit To create a Slurm cluster in a Google Cloud project, you can use Cluster Toolkit to handle deploying and provisioning the cluster.
- Note: Provisioning the cluster can take up to an hour.
- Download the gcluster bundle linux.zip file by using the curl command: curl -LO https://github.com/GoogleCloudPlatform/cluster-toolkit/releases/download/${TAG}/gcluster bundle linux.zip Extract the bundle files to a new gcluster-bundle directory: unzip gcluster bundle linux.zip -d gcluster-bundle Go to the gcluster-bundle directory: cd gcluster-bundle Make the binary gcluster file: chmod +x gcluster To verify the installation, run the following command: ./gcluster --version After installing the binary, you are now ready to deploy clusters to run your jobs or workloads.

### Choose a consumption option \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models)
- Source ID: `site-docs-root-required-2`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use future reservations in AI Hypercomputer To run long-running, large-scale distributed workloads that require densely allocated resources, you can request compute resources for a specific time in the future.
- How to use future reservations in AI Hypercomputer To use future reservations to create VMs or clusters, you must complete the following steps: Request to reserve capacity .
- Comparison of consumption options The following table summarizes the key differences between the consumption options: Consumption option Future reservations in AI Hypercomputer Future reservations for up to 90 days (in calendar mode) Flex-start Spot Supported machines A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High A4, A3 Ultra, A3 Mega, or A3 High with 8 GPUs Any GPU machine except A4X Max and A4X Any GPU machine except A4X Max and A4X Lifespan Unlimited Up to 90 days Up to 7 days Unlimited (but subject to preemption ) Preemptible Capacity assurance Very high .
- Ideal workloads for future reservations in AI Hypercomputer Future reservations are ideal for the following workloads: Pre-training foundation models Multi-host foundation model inference Key characteristics of future reservations in AI Hypercomputer Future reservations have the following characteristics: You can reserve A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High (8 GPUs) machine types.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.090Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "C4A machine series support"
feature_slug: "c4a-machine-series-support"
latest_feature_date: "2025-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/choose-machine-type"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
keywords:
  - "axion"
  - "series"
  - "machine"
  - "based"
  - "adds"
---

# C4A machine series support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

C4A machine series support adds AlloyDB support for Arm-based Axion processors in predefined configurations across limited regions.

## Extended Definition

C4A machine series support adds AlloyDB support for Arm-based Axion processors in predefined configurations across limited regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/choose-machine-type](https://docs.cloud.google.com/alloydb/docs/choose-machine-type)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)

## Supporting Pages

### "Choose an AlloyDB machine type \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/choose-machine-type](https://docs.cloud.google.com/alloydb/docs/choose-machine-type)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Machine type vCPUs Memory (GB) n2-highmem-2 2 16 GB RAM n2-highmem-4 4 32 GB RAM n2-highmem-8 8 64 GB RAM n2-highmem-16 16 128 GB RAM n2-highmem-32 32 256 GB RAM n2-highmem-64 64 512 GB RAM n2-highmem-96 96 768 GB RAM n2-highmem-128 128 864 GB RAM C4A Axion-based The following machine types are available for instances for the C4A Axion-based machine series.
- C4A Axion-based : this machine series provides optimized price-performance and delivers predictable high performance for high demand AlloyDB workloads.
- Region Machine series N2 C4A C4 Z3 africa-south1 ✅ – – – asia-east1 ✅ ✅ ✅ – asia-east2 ✅ – – – asia-northeast1 ✅ – ✅ ✅ asia-northeast2 ✅ – – asia-northeast3 ✅ – ✅ – asia-south1 ✅ – – – asia-south2 ✅ – ✅ – asia-southeast1 ✅ ✅ ✅ ✅ asia-southeast2 ✅ – – – asia-southeast3 ✅ – – – australia-southeast1 ✅ – – – australia-southeast2 ✅ – – – europe-central2 ✅ – – – europe-southwest1 ✅ – – – europe-north1 ✅ – – – europe-north2 ✅ – – – europe-west1 ✅ ✅ ✅ ✅ europe-west2 ✅ ✅ ✅ ✅ europe-west3 ✅ ✅ – ✅ europe-west4 ✅ ✅ ✅ ✅ europe-west6 ✅ – – – europe-west8 ✅ – – – europe-west9 ✅ – – – europe-west10 ✅ – – – europe-west12 ✅ – – – me-central1 ✅ – – – me-central2 ✅ – – – me-west1 ✅ – – – northamerica-northeast1 ✅ – – – northamerica-northeast2 ✅ – ✅ – northamerica-south1 ✅ – ✅ ✅ southamerica-east1 ✅ – – – southamerica-west1 ✅ – – – us-central1 ✅ ✅ – ✅ us-east1 ✅ ✅ – ✅ us-east4 ✅ ✅ ✅ ✅ us-east5 ✅ – ✅ ✅ us-east7 ✅ – – – us-south1 ✅ – – ✅ us-west1 ✅ – ✅ ✅ us-west2 ✅ – – – us-west3 ✅ – ✅ – us-west4 ✅ – ✅ – What's next Create a cluster and its primary instance .
- Machine type vCPUs Memory (GB) c4-highmem-4-lssd 4 32 GB RAM c4-highmem-8-lssd 8 64 GB RAM c4-highmem-16-lssd 16 128 GB RAM c4-highmem-24-lssd 24 192 GB RAM c4-highmem-32-lssd 32 256 GB RAM c4-highmem-48-lssd 48 384 GB RAM c4-highmem-96-lssd 96 768 GB RAM c4-highmem-144-lssd 144 1152 GB RAM c4-highmem-192-lssd 192 1536 GB RAM c4-highmem-288-lssd 288 2304 GB RAM Z3 standardlssd The following machine types are available for instances for the Z3 machine series.

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- For more information about using the C4A Axion-based machine series, including the 1 vCPU machine type, see Considerations when using the C4A Axion-based machine series .
- Select one of the following machine series: C4A (Google Axion-based machine series) N2 (x86-based machine series).
- C4 (x86-based machine series) Z3 (Intel Xeon-based machine series) Select a machine type.
- Create a read pool instance with a schedule-based policy To create a read pool instance with a schedule-based automatic scaling policy that defines a minimum number of nodes for a specific time window, run the following command: Note: If you have an existing autoscaling policy that has --autoscaler-max-node-count set , then this becomes an optional field. gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: MAX NODE COUNT : the maximum number of nodes that the autoscaler can create in the read pool instance.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- If your VPC network contains more than one IP address range that has Considerations when using the C4A Axion-based machine series AlloyDB offers a C4A machine series based on Google Axion, Google's custom Arm-based processor.
- For more information about using C4A Axion-based machine series, including the 1 vCPU machine type see Considerations when using the C4A Axion-based machine series .
- Select one of the following machine series: C4A (Google Axion-based machine series).
- Z3 (Intel Xeon-based machine series).


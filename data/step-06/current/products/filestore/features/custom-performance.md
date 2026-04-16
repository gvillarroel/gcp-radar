---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.655Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Custom performance"
feature_slug: "custom-performance"
latest_feature_date: "2025-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/custom-performance"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/getting-instance-information"
  - "https://docs.cloud.google.com/filestore/docs/editing-instances"
keywords:
  - "custom"
  - "performance"
  - "lets"
  - "you"
  - "configure"
  - "characteristics"
  - "for"
  - "filestore"
---

# Custom performance

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Custom performance lets you configure performance characteristics for Filestore instances.

## Extended Definition

Custom performance lets you configure performance characteristics for Filestore instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/custom-performance](https://docs.cloud.google.com/filestore/docs/custom-performance)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/getting-instance-information](https://docs.cloud.google.com/filestore/docs/getting-instance-information)
- [https://docs.cloud.google.com/filestore/docs/editing-instances](https://docs.cloud.google.com/filestore/docs/editing-instances)

## Supporting Pages

### Custom performance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/custom-performance](https://docs.cloud.google.com/filestore/docs/custom-performance)
- Source ID: `site-docs-root-2`
- Final score: 322
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check custom performance status If you want to the check the custom performance status, follow these instructions: Google Cloud console Go to the Filestore Instances page Click the Instance ID to open the Instance Details page.
- Home Documentation Storage Filestore Guides Send feedback Custom performance Stay organized with collections Save and categorize content based on your preferences.
- You have the following options to configure custom performance: Set an IOPS per TiB ratio where IOPS scale linearly with the instance's size.
- Configure custom performance You can set custom performance for zonal and regional instances that already support it.

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A justification for the deletion protection setting is provided. gcloud filestore instances create render1 \ --project=myproject \ --region=us-central1 \ --tier=REGIONAL \ --performance=max-iops-per-tb=17000 \ --network=name="default",reserved-ip-range="10.0.7.0/29" \ --flags-file=nfs-export-options.json \ --deletion-protection \ --deletion-protection-reason="All genomics data must adhere to current organization policies." nfs-export-options.json file contents: { "--file-share": { "capacity": "2048", "name": "my vol", "nfs-export-options": [ { "access-mode": "READ WRITE", "ip-ranges": [ "10.0.0.0/29", "10.2.0.0/29" ], "squash-mode": "ROOT SQUASH", "anon uid": 1003, "anon gid": 1003 }, { "access-mode": "READ ONLY", "ip-ranges": [ "192.168.0.0/26" ], "squash-mode": "NO ROOT SQUASH" } ] } } REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- PERFORMANCE if you want to use the --performance flag to configure custom performance , use one of the following options: max-iops-per-tb specifies an IOPS per TiB rate that scales IOPS linearly with instance capacity. max-iops specifies an IOPS rate that doesn't scale IOPS with instance capacity.
- Specify IOPS per TiB ratio Enabling custom performance lets you to specify the ratio in the IOPS per TiB field where the performance scales based on the capacity.
- For details, see configure custom performance and Filestore pricing .

### Get instance information \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/getting-instance-information](https://docs.cloud.google.com/filestore/docs/getting-instance-information)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to the Filestore instances page Click the instance ID to open the instance details page. gcloud Get information about a Filestore instance by running the instances describe command: gcloud filestore instances describe instance-id --project= project-id --location= location The response to the instances describe command is similar to the following: createTime: '2021-10-11T17:28:23.340943077Z' customPerformanceSupported: true fileShares: - capacityGb: '1024' name: vol1 kmsKeyName: projects/example-project/locations/us-central1/keyRings/example-ring/cryptoKeys/example-key labels: key:val name: projects/yourproject/locations/us-central1/instances/nfs-server networks: - ipAddresses: - 10.0.0.2 network: default reservedIpRange: 10.0.0.0/26 performanceConfig: iopsPerTb: maxIopsPerTb: '17000' performanceLimits: maxIops: '17000' maxReadIops: '17000' maxReadThroughputBps: '417792000' maxWriteIops: '5100' maxWriteThroughputBps: '139264000' state: READY tier: REGIONAL These fields represent the following values: createTime : The time the instance was created, in RFC 3339 format. fileShares : capacityGb : The size of the Filestore file share in binary gigabytes ( GB ), where 1 GB = 1024 3 bytes. name : The name of the Filestore file share.
- INSTANCE NAME ZONE TIER CAPACITY GB FILE SHARE NAME IP ADDRESS STATE CREATE TIME nfs-loc europe-west1-b BASIC HDD 1024 nfs1 10.0.5.2 READY 2017-10-09T22:11:28 nfs3 us-central1-c BASIC HDD 1024 acme 10.0.6.2 READY 2017-11-06T09:37:18 Example The following command lists the Filestore instances in project myproject : gcloud filestore instances list --project=myproject REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- If not listed, custom performance is not supported. performanceConfig : The custom configuration for custom performance. performanceLimits : The enforced performance limits, calculated from the instance's performance. reservedIpRange : The IP address block reserved for the use of the instance. state : The state of the instance. tier : The Filestore service tier of the instance.
- Example The following command provides information about the test-nfs instance in project myproject , in region us-central1 . gcloud filestore instances describe test-nfs --project=myproject --region=us-central1 REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.

### Edit instances \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/editing-instances](https://docs.cloud.google.com/filestore/docs/editing-instances)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once created, you can modify a Filestore instance in the following ways: Increase its capacity Decrease capacity for the following service tiers : Zonal Regional Enterprise Configure performance Change its description Manage IP-based access control rules Manage labels For more information, see Managing labels .
- You can set the default zone by running: gcloud config set filestore/zone zone PERFORMANCE is the performance configuration used to specify custom performance settings independently of the chosen capacity.
- For details, see configure custom performance and Filestore pricing .
- For details, see configure custom performance and Filestore pricing .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.837Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow Shuffle"
feature_slug: "dataflow-shuffle"
latest_feature_date: "2021-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
keywords:
  - "dataflow"
  - "shuffle"
  - "is"
  - "managed"
  - "for"
  - "batch"
  - "pipelines"
---

# Dataflow Shuffle

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow Shuffle is a managed shuffle service for Dataflow batch pipelines; Dataflow Shuffle is a managed shuffle service for Dataflow batch pipelines.

## Extended Definition

Dataflow Shuffle is a managed shuffle service for Dataflow batch pipelines; Dataflow Shuffle is a managed shuffle service for Dataflow batch pipelines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- October 07, 2019 Feature Cloud Dataflow Shuffle and Streaming Engine are now available in two additional regions: us-west1 (Oregon) asia-east1 (Taiwan) September 03, 2019 Feature Automatic hot key detection is now enabled in batch pipelines for Apache Beam SDK 2.15.0 or higher.
- May 11, 2021 Feature Dataflow Shuffle is now the default mode for all batch pipelines.
- September 15, 2016 Change The default autoscaling ceiling for batch pipelines using the Cloud Dataflow SDK for Java 1.6 or newer has been raised to 10 worker VMs.
- August 18, 2016 Change Autoscaling for batch pipelines using the Cloud Dataflow SDK for Java 1.6 or higher is now being enabled by default.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Pipelines that use Managed I/O might fail with this error if Dataflow can't automatically upgrade the I/O transforms to the latest supported version.
- Java --workerDiskType=pd-ssd Python --worker disk type=pd-ssd Go disk type=pd-ssd No space left on device When a job runs out of disk space, the following error might appear in the worker logs: No space left on device This error can occur for one of the following reasons: The worker persistent storage runs out of free space, which can occur for one of the following reasons: A job downloads large dependencies at runtime A job uses large custom containers A job writes many temporary data to local disk When using Dataflow Shuffle , Dataflow sets lower default disk size .
- You might find additional details regarding this error in Logs Explorer under Dataflow log names managed-transforms-worker and managed-transforms-worker-startup .
- Dataflow is unable to process managed transform(s)...

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Dataflow Shuffle state for batch pipelines.
- Job metadata includes the following: User-supplied data, such as Job Names, Job Parameter values, and Pipeline Graph System-generated data, such as Job IDs and IP addresses of workers Encryption of pipeline state locations The following storage locations are protected with Cloud KMS keys: Persistent Disks attached to Dataflow workers and used for Persistent Disk-based shuffle and streaming state storage.
- For example, Dataflow pipelines can consume these quotas when your pipeline accesses CMEK-protected data in sources and sinks or when the state of a CMEK-encrypted pipeline is retrieved.
- Specifying gcpTempLocation is required. mvn compile exec:java -Dexec.mainClass = org.apache.beam.examples.WordCount \ -Dexec.args = "--inputFile=gs://dataflow-samples/shakespeare/kinglear.txt \ --output=gs:// STORAGE BUCKET /counts \ --runner=DataflowRunner --project= PROJECT ID \ --gcpTempLocation=gs:// STORAGE BUCKET /tmp \ --dataflowKmsKey= KMS KEY " -Pdataflow-runner Python Dataflow does not support creating default Cloud Storage paths for temporary files when using a Cloud KMS key.

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.
- This document explains how to minimize the impact of job failures for large batch pipelines.
- Speculative execution can help pipelines complete faster by providing an alternative execution path for work items that are experiencing delays due to slow worker machines or other transient issues such as nondeterministic bugs, resource throttling, or connectivity issues.
- Limitations and considerations Before enabling speculative execution, consider the following: Streaming pipelines: Speculative execution is not supported for streaming pipelines.


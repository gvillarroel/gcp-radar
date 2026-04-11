---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.799Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Managed I/O automatic connector upgrades"
feature_slug: "managed-i-o-automatic-connector-upgrades"
latest_feature_date: "2025-01-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/managed-io"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
keywords:
  - "managed"
  - "automatic"
  - "connector"
  - "upgrades"
  - "dataflow"
  - "can"
  - "automatically"
  - "use"
---

# Managed I/O automatic connector upgrades

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow Managed I/O can automatically use the latest reliable version of supported I/O connectors.

## Extended Definition

Dataflow Managed I/O can automatically use the latest reliable version of supported I/O connectors.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/managed-io](https://docs.cloud.google.com/dataflow/docs/guides/managed-io)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)

## Supporting Pages

### Dataflow managed I/O \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/managed-io](https://docs.cloud.google.com/dataflow/docs/guides/managed-io)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Automatic upgrades Dataflow pipelines with managed I/O connectors automatically use the latest reliable version of the connector.
- Dataflow automatically upgrades the managed I/O connectors in your pipeline.
- If you're using a Flex Template that uses Managed I/O, use the gcloud dataflow flex-template run command. --additional-experiments=managed transforms rolling upgrade window= DAYS To disable rolling upgrades, set the managed transforms rolling upgrade window service option to never .
- For streaming jobs, Dataflow checks for updates whenever you launch a replacement job , and automatically uses the latest known-good version.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Using this feature, Dataflow pipelines automatically use the latest reliable version of the connector.
- March 08, 2024 Change Streaming jobs created after March 7, 2024 automatically encrypt all user data with customer-managed encryption keys (CMEK) .
- You can create a custom IAM role and assign it to a user-managed service account used in Dataflow instead of assigning the Dataflow Worker role.
- With this feature, Dataflow upgrades your Managed I/O connectors in running pipelines as new connector versions become available.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Pipelines that use Managed I/O might fail with this error if Dataflow can't automatically upgrade the I/O transforms to the latest supported version.
- Java --workerDiskType=pd-ssd Python --worker disk type=pd-ssd Go disk type=pd-ssd No space left on device When a job runs out of disk space, the following error might appear in the worker logs: No space left on device This error can occur for one of the following reasons: The worker persistent storage runs out of free space, which can occur for one of the following reasons: A job downloads large dependencies at runtime A job uses large custom containers A job writes many temporary data to local disk When using Dataflow Shuffle , Dataflow sets lower default disk size .
- Failed to attach disk When you try to launch a Dataflow job that uses C3 VMs with Persistent Disk, the job fails with one or both of the following errors: Failed to attach disk(s), status: generic::invalid argument: One or more operations had an error Can not allocate sha384 (reason: -2), Spectre V2 : WARNING: Unprivileged eBPF is enabled with eIBRS on...
- This means that the version of the runner harness process will be automatically updated at some point 7 days after the initial delivery of the message, resulting in a brief pause in processing.

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dataflow.
- If you use the Google Cloud console and the Create job from template page, this permission is granted automatically and you can skip this step.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- Use sources and sinks that are protected with Cloud KMS keys Dataflow can access Google Cloud sources and sinks that are protected by Cloud KMS keys.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.827Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow Shuffle"
feature_slug: "dataflow-shuffle"
latest_feature_date: "2021-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
keywords:
  - "dataflow"
  - "shuffle"
  - "managed"
  - "batch"
  - "pipelines"
---

# Dataflow Shuffle

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow Shuffle is a managed shuffle service for Dataflow batch pipelines; Dataflow Shuffle is a managed shuffle service for Dataflow batch pipelines.

## Extended Definition

Dataflow Shuffle is a managed shuffle service for Dataflow batch pipelines; Dataflow Shuffle is a managed shuffle service for Dataflow batch pipelines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)

## Supporting Pages

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow Shuffle state for batch pipelines.
- Job metadata includes the following: User-supplied data, such as Job Names, Job Parameter values, and Pipeline Graph System-generated data, such as Job IDs and IP addresses of workers Encryption of pipeline state locations The following storage locations are protected with Cloud KMS keys: Persistent Disks attached to Dataflow workers and used for Persistent Disk-based shuffle and streaming state storage.
- For Encryption type: "Google-Managed key" For Encryption type: "Customer-Managed key" CLI Run the describe command using the gcloud CLI: gcloud dataflow jobs describe JOB ID Search for the line that contains serviceKmsKeyName .
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Pipelines that use Managed I/O might fail with this error if Dataflow can't automatically upgrade the I/O transforms to the latest supported version.
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.
- Java --workerDiskType=pd-ssd Python --worker disk type=pd-ssd Go disk type=pd-ssd No space left on device When a job runs out of disk space, the following error might appear in the worker logs: No space left on device This error can occur for one of the following reasons: The worker persistent storage runs out of free space, which can occur for one of the following reasons: A job downloads large dependencies at runtime A job uses large custom containers A job writes many temporary data to local disk When using Dataflow Shuffle , Dataflow sets lower default disk size .
- The following example demonstrates the Google Cloud CLI command: gcloud compute firewall-rules create FIREWALL RULE NAME \ --network NETWORK \ --action allow \ --direction IN \ --target-tags dataflow \ --source-tags dataflow \ --priority 0 \ --rules tcp:12345-12346 Replace the following: FIREWALL RULE NAME : the name of your firewall rule NETWORK : the name of your network Your job is shuffle-bound .

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-reference-2`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Dataflow Prime Dataflow Runner v2 Default feature with no option to turn off for batch jobs and optional for streaming jobs Default feature with an option to turn off for batch jobs and optional for streaming jobs Dataflow Shuffle for batch jobs Default feature with an option to turn off Default feature with an option to turn off Streaming Engine for streaming jobs Optional feature for Java pipelines and always on for Python pipelines Optional feature for Java pipelines and always on for Python pipelines since 2.45.0 Horizontal Autoscaling Default feature with option to turn off Default feature with option to turn off Vertical Autoscaling Default feature with option to turn off Not applicable Right fitting Optional feature Optional feature Billing Serverless billing Standard billing What's next Read about Dataflow quotas .
- By default, Dataflow Prime uses Dataflow Shuffle and Dataflow Runner v2 for batch pipelines.
- Dataflow Prime is backward compatible with batch jobs that use Dataflow Shuffle and streaming jobs that use Streaming Engine.
- Dataflow Prime supports both batch and streaming pipelines.


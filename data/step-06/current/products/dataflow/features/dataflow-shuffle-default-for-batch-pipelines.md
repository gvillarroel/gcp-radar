---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.823Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow Shuffle default for batch pipelines"
feature_slug: "dataflow-shuffle-default-for-batch-pipelines"
latest_feature_date: "2021-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines"
keywords:
  - "dataflow"
  - "shuffle"
  - "default"
  - "batch"
  - "pipelines"
  - "feature"
  - "makes"
  - "execution"
---

# Dataflow Shuffle default for batch pipelines

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This feature makes Dataflow Shuffle the default execution mode for batch pipelines.

## Extended Definition

This feature makes Dataflow Shuffle the default execution mode for batch pipelines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.
- Java --workerDiskType=pd-ssd Python --worker disk type=pd-ssd Go disk type=pd-ssd No space left on device When a job runs out of disk space, the following error might appear in the worker logs: No space left on device This error can occur for one of the following reasons: The worker persistent storage runs out of free space, which can occur for one of the following reasons: A job downloads large dependencies at runtime A job uses large custom containers A job writes many temporary data to local disk When using Dataflow Shuffle , Dataflow sets lower default disk size .
- The following example demonstrates the Google Cloud CLI command: gcloud compute firewall-rules create FIREWALL RULE NAME \ --network NETWORK \ --action allow \ --direction IN \ --target-tags dataflow \ --source-tags dataflow \ --priority 0 \ --rules tcp:12345-12346 Replace the following: FIREWALL RULE NAME : the name of your firewall rule NETWORK : the name of your network Your job is shuffle-bound .
- Review your organization policy constraints Go to the Organization policies page Review the constraints for any that might limit VM instance creation for either the account you're using (by default, the Dataflow service account ) or in the zone that you're targeting.

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use speculative execution to avoid stragglers For batch pipelines, you can enable speculative execution , a feature to mitigate the impact of slow-running or stuck tasks.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.
- By default, Dataflow retries these failed tasks four times in batch mode and an unlimited number of times in streaming mode.
- Speculative execution can help pipelines complete faster by providing an alternative execution path for work items that are experiencing delays due to slow worker machines or other transient issues such as nondeterministic bugs, resource throttling, or connectivity issues.

### Work with Dataflow data pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines)
- Source ID: `site-docs-reference-required-3`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data pipeline roles For Dataflow data pipeline operations to succeed, you need the necessary IAM roles, as follows: You need the appropriate role to perform operations: Datapipelines.admin : Can perform all data pipeline operations Datapipelines.viewer : Can view data pipelines and jobs Datapipelines.invoker : Can invoke a data pipeline job run (this role can be enabled using the API) The service account used by Cloud Scheduler needs to have the roles/iam.serviceAccountUser role, whether the service account is user-specified or the default Compute Engine service account.
- Create a data pipeline You can create a Dataflow data pipeline in two ways: Import a job , or Create a data pipeline The data pipelines setup page: When you first access the Dataflow pipelines feature in the Google Cloud console, a setup page opens.
- Note: You can report Dataflow data pipelines issues and request new features at google-data-pipelines-feedback ." Overview You can use Dataflow data pipelines for the following tasks: Create recurrent job schedules.
- You can also run a batch pipeline on demand using the Run button in the Dataflow Pipelines console.


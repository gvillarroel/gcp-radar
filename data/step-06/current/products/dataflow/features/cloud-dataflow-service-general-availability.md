---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.870Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Cloud Dataflow Service general availability"
feature_slug: "cloud-dataflow-service-general-availability"
latest_feature_date: "2015-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job"
keywords:
  - "dataflow"
  - "availability"
  - "reached"
---

# Cloud Dataflow Service general availability

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

The Cloud Dataflow Service reached general availability.

## Extended Definition

The Cloud Dataflow Service reached general availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- For details and availability, see Dataflow Shuffle .
- For details and availability, see Dataflow Shuffle .
- For details and availability, see Dataflow Shuffle .
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.

### Dataflow regions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- Source ID: `site-docs-reference-required-3`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Regional placement offers benefits such as: Improved resource availability: Dataflow jobs are more resilient to zonal resource availability errors, because workers can continue to be created in other zones with remaining availability.
- If you need more control over the location of pipeline log messages, you can do the following: Create an exclusion filter for the Default log router sink to prevent Dataflow logs from being exported to the Default log bucket.
- Although user data is strictly handled by Dataflow workers in their assigned geographic region, pipeline log messages are stored in Cloud Logging , which has a single global presence in Google Cloud.
- Data locality You can minimize network latency and network transport costs by running a Dataflow job from the same region as its sources, sinks, staging file locations, and temporary file locations.

### "Create a custom job with the job builder \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)
- Source ID: `site-docs-reference-required-3`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command in your shell or terminal: gcloud dataflow yaml run my-job-builder-job --yaml-pipeline-file = YAML FILE PATH Replace YAML FILE PATH with the path of your YAML file, either locally or in Cloud Storage.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Create a custom job with the job builder Stay organized with collections Save and categorize content based on your preferences.
- Run the pipeline To run a pipeline from the job builder, perform the following steps: Optional: Set Dataflow job options.
- To expand the Dataflow options section, click the arrow right expander arrow.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.859Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Side input metrics"
feature_slug: "side-input-metrics"
latest_feature_date: "2018-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring"
keywords:
  - "side"
  - "input"
  - "metrics"
  - "dataflow"
  - "monitoring"
  - "interface"
  - "shows"
  - "pipelines"
---

# Side input metrics

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

The Dataflow monitoring interface shows side input metrics for pipelines.

## Extended Definition

The Dataflow monitoring interface shows side input metrics for pipelines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring)

## Supporting Pages

### Troubleshoot and debug Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your job fails the validation process, an error message appears in the Dataflow monitoring interface, as well as in your console or terminal window if you are using blocking execution.
- Check your pipeline's status You can detect any errors in your pipeline runs by using the Dataflow monitoring interface .
- Exceptions in user code (for example, your DoFn instances) are reported in the Dataflow monitoring interface .
- Thus, you don't see any feedback in the Dataflow monitoring interface.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Exceptions in user code, for example, your DoFn instances, are reported in the Dataflow monitoring interface .
- To view hot keys in the Dataflow monitoring interface, see Troubleshoot stragglers in batch jobs .
- This issue typically affects pipelines using Pub/Sub as both main and side inputs.
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.

### Dataflow project monitoring dashboard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Dataflow web-based monitoring interface includes a dashboard that monitors your Dataflow jobs at the project level.
- For an example of adding a custom metrics chart to the dashboard, see Customize the Dataflow monitoring dashboard .
- The dashboard uses Cloud Monitoring to access Dataflow job metrics.
- The dashboard uses Cloud Monitoring to access Dataflow job metrics.


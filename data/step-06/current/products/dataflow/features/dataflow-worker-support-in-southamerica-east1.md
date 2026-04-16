---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.864Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow worker support in southamerica-east1"
feature_slug: "dataflow-worker-support-in-southamerica-east1"
latest_feature_date: "2017-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/resources/locations"
  - "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
keywords:
  - "dataflow"
  - "worker"
  - "southamerica"
  - "east1"
  - "can"
  - "run"
  - "workers"
  - "zones"
---

# Dataflow worker support in southamerica-east1

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow can run workers in zones within the southamerica-east1 region.

## Extended Definition

Dataflow can run workers in zones within the southamerica-east1 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)

## Supporting Pages

### Dataflow locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
- Source ID: `site-docs-reference-required-4`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Region description Region name Montréal northamerica-northeast1 Toronto northamerica-northeast2 Queretaro, Mexico northamerica-south1 São Paulo southamerica-east1 Santiago southamerica-west1 Iowa us-central1 South Carolina us-east1 Northern Virginia us-east4 Columbus, Ohio us-east5 Oregon us-west1 Los Angeles, California us-west2 Salt Lake City, Utah us-west3 Las Vegas, Nevada us-west4 Dallas, Texas us-south1 Asia Pacific The following table lists the regions in Asia Pacific where Dataflow is available.
- Regional availability You can use Dataflow workers, endpoints, Streaming Engine, Shuffle, and FlexRS in supported regions.
- Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Bangkok asia-southeast3 Sydney australia-southeast1 Melbourne australia-southeast2 Europe The following table lists the regions in Europe where Dataflow is available.
- This page describes the regions and zones where you can use Dataflow.

### Dataflow regions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- Source ID: `site-docs-reference-required-3`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Regional placement offers benefits such as: Improved resource availability: Dataflow jobs are more resilient to zonal resource availability errors, because workers can continue to be created in other zones with remaining availability.
- Improved reliability: In the event of a zonal failure, Dataflow jobs can continue to run, because workers are recreated in other zones.
- Override the worker region or zone By default, when you submit a job with the --region option, workers are automatically assigned to either zones across the region or the single best zone within the region, depending on the job type.
- Although user data is strictly handled by Dataflow workers in their assigned geographic region, pipeline log messages are stored in Cloud Logging , which has a single global presence in Google Cloud.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.
- Connection timed out When you run a Dataflow job, you might see the following error in the log files: org.springframework.web.client.ResourceAccessException: I/O error on GET request for CONNECTION PATH : Connection timed out (Connection timed out); nested exception is java.net.ConnectException: Connection timed out (Connection timed out) This issue occurs when the Dataflow workers fail to establish or maintain a connection with the data source or destination.
- Runner v2 harness update The following info message appears in the job logs of a Runner v2 job The Dataflow RunnerV2 container image of this job's workers will be ready for update in 7 days.
- When you run a Dataflow job that doesn't use Dataflow Shuffle or Streaming Engine, workers need to communicate with each other using TCP ports 12345 and 12346 within the VPC network.


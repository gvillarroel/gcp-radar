---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.754Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Runner v2 harness upgrade notice"
feature_slug: "runner-v2-harness-upgrade-notice"
latest_feature_date: "2026-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
  - "https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced"
keywords:
  - "runner"
  - "v2"
  - "harness"
  - "upgrade"
  - "notice"
  - "dataflow"
  - "provides"
  - "advance"
---

# Runner v2 harness upgrade notice

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow provides advance notice before upgrading the Runner v2 container image for a streaming pipeline.

## Extended Definition

Dataflow provides advance notice before upgrading the Runner v2 container image for a streaming pipeline.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Runner v2 harness update The following info message appears in the job logs of a Runner v2 job The Dataflow RunnerV2 container image of this job's workers will be ready for update in 7 days.
- It might be possible to retrieve stacktraces of a thread that is holding the GIL on a running Dataflow worker as follows: SSH into a running Dataflow worker VM that is currently a straggler, for example: gcloud compute ssh --zone "us-central1-a" "worker-that-emits-unable-to-retrieve-status-messages" --project "project-id" Install nerdctl to inspect a running container with ptrace privileges. wget https://github.com/containerd/nerdctl/releases/download/v2.0.2/nerdctl-2.0.2-linux-amd64.tar.gz sudo tar Cxzvvf /var/lib/toolbox nerdctl-2.0.2-linux-amd64.tar.gz alias nerdctl = "sudo /var/lib/toolbox/nerdctl -n k8s.io" Find a container running the Python SDK harness.
- Request payload size exceeds the limit: 20971520 bytes When you run a pipeline, the job might fail with the following error: com.google.api.client.googleapis.json.GoogleJsonResponseException: 400 Bad Request POST https://dataflow.googleapis.com/v1b3/projects/PROJECT ID/locations/REGION/jobs/JOB ID/workItems:reportStatus { "code": 400, "errors": [ { "domain": "global", "message": "Request payload size exceeds the limit: 20971520 bytes.", "reason": "badRequest" } ], "message": "Request payload size exceeds the limit: 20971520 bytes.", "status": "INVALID ARGUMENT" } This error can occur when a job using the Dataflow runner has a very large job graph.
- After you select the relevant logs, the query result might look like the following example: resource.type="dataflow step" resource.labels.job id="2022-06-29 08 02 54- JOB ID " labels."compute.googleapis.com/resource name"="testpipeline-jenkins-0629- DATE -cyhg-harness-8crw" logName=("projects/apache-beam-testing/logs/dataflow.googleapis.com%2Fdocker" OR "projects/apache-beam-testing/logs/dataflow.googleapis.com%2Fworker-startup" OR "projects/apache-beam-testing/logs/dataflow.googleapis.com%2Fworker") Because the logs reporting the symptom of the container failure are sometimes reported as INFO , include INFO logs in your analysis.

### "Use Apache Beam notebook advanced features \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can check the beam sql magic usage with the -h or --help option: You can create a PCollection from constant values: You can join multiple PCollections : You can launch a Dataflow job with the -r DataflowRunner or --runner DataflowRunner option: To learn more, see the example notebook Apache Beam SQL in notebooks .
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use Apache Beam notebook advanced features Stay organized with collections Save and categorize content based on your preferences.
- Troubleshooting This section provides information to help you troubleshoot and debug the Interactive FlinkRunner on notebook-managed clusters.
- This page provides details about advanced features that you can use with your Apache Beam notebook.

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Leave the parameter list empty to return the recording status of all pipelines. ib . recordings . describe ( p ) The describe() method provides the following details: Total size (in bytes) of all of the recordings for the pipeline on disk Start time of when the background recording job started (in seconds from Unix epoch) Current pipeline status of the background recording job Python variable for the pipeline Launch Dataflow jobs from a pipeline created in your notebook Optional: Before using your notebook to run Dataflow jobs, restart the kernel, rerun all cells, and verify the output.
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- Advanced features include the following workflows: Use Interactive FlinkRunner on notebook-managed clusters Use Beam SQL and beam sql magic Accelerate using JIT compiler and GPU Build a custom container Disable external IP addresses Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Develop Apache Beam notebooks with the interactive runner Stay organized with collections Save and categorize content based on your preferences.


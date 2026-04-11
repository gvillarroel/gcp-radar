---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.865Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Cloud Dataflow Service general availability"
feature_slug: "cloud-dataflow-service-general-availability"
latest_feature_date: "2015-08-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
keywords:
  - "dataflow"
  - "general"
  - "availability"
  - "the"
  - "reached"
---

# Cloud Dataflow Service general availability

Product: Dataflow
Coverage: LOW

## Step 02 Summary

The Cloud Dataflow Service reached general availability.

## Extended Definition

The Cloud Dataflow Service reached general availability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- April 26, 2024 Feature The following Dataflow templates now support user-defined functions (UDFs) written in Python: Cloud Storage Text to BigQuery Cloud Storage Text to BigQuery (Stream) Pub/Sub to BigQuery Pub/Sub Proto to BigQuery April 05, 2024 Feature The following Dataflow templates are generally available ( GA ): Google Cloud to Neo4j Pub/Sub to Datadog March 28, 2024 Feature The Dataflow right fitting feature is now supported by non-Prime batch pipelines.
- You can now do the following in Cloud Dataflow SQL: Write data to two destinations, including Cloud Pub/Sub Specify how to load data into a BigQuery table Set pipeline options in the Cloud Dataflow SQL UI February 24, 2020 Feature Using Cloud Dataflow with Cloud Key Management Service to create a customer-managed encryption key (CMEK) is generally available.
- July 27, 2023 Feature The following Dataflow templates are generally available ( GA ): MySQL to BigQuery PostgreSQL to BigQuery SQL Server to BigQuery July 26, 2023 Feature Dynamic thread scaling is generally available (GA).
- September 06, 2023 Feature The following Dataflow templates are generally available ( GA ): BigQuery to Bigtable Pub/Sub to Splunk August 22, 2023 Feature Dataflow is available in Berlin ( europe-west10 ).

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.
- It might be possible to retrieve stacktraces of a thread that is holding the GIL on a running Dataflow worker as follows: SSH into a running Dataflow worker VM that is currently a straggler, for example: gcloud compute ssh --zone "us-central1-a" "worker-that-emits-unable-to-retrieve-status-messages" --project "project-id" Install nerdctl to inspect a running container with ptrace privileges. wget https://github.com/containerd/nerdctl/releases/download/v2.0.2/nerdctl-2.0.2-linux-amd64.tar.gz sudo tar Cxzvvf /var/lib/toolbox nerdctl-2.0.2-linux-amd64.tar.gz alias nerdctl = "sudo /var/lib/toolbox/nerdctl -n k8s.io" Find a container running the Python SDK harness.
- Request payload size exceeds the limit: 20971520 bytes When you run a pipeline, the job might fail with the following error: com.google.api.client.googleapis.json.GoogleJsonResponseException: 400 Bad Request POST https://dataflow.googleapis.com/v1b3/projects/PROJECT ID/locations/REGION/jobs/JOB ID/workItems:reportStatus { "code": 400, "errors": [ { "domain": "global", "message": "Request payload size exceeds the limit: 20971520 bytes.", "reason": "badRequest" } ], "message": "Request payload size exceeds the limit: 20971520 bytes.", "status": "INVALID ARGUMENT" } This error can occur when a job using the Dataflow runner has a very large job graph.
- After you select the relevant logs, the query result might look like the following example: resource.type="dataflow step" resource.labels.job id="2022-06-29 08 02 54- JOB ID " labels."compute.googleapis.com/resource name"="testpipeline-jenkins-0629- DATE -cyhg-harness-8crw" logName=("projects/apache-beam-testing/logs/dataflow.googleapis.com%2Fdocker" OR "projects/apache-beam-testing/logs/dataflow.googleapis.com%2Fworker-startup" OR "projects/apache-beam-testing/logs/dataflow.googleapis.com%2Fworker") Because the logs reporting the symptom of the container failure are sometimes reported as INFO , include INFO logs in your analysis.

### "Create a custom job with the job builder \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)
- Source ID: `site-docs-root-2`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command in your shell or terminal: gcloud dataflow yaml run my-job-builder-job --yaml-pipeline-file = YAML FILE PATH Replace YAML FILE PATH with the path of your YAML file, either locally or in Cloud Storage.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Create a custom job with the job builder Stay organized with collections Save and categorize content based on your preferences.
- Run the pipeline To run a pipeline from the job builder, perform the following steps: Optional: Set Dataflow job options.
- To expand the Dataflow options section, click the arrow right expander arrow.

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Leave the parameter list empty to return the recording status of all pipelines. ib . recordings . describe ( p ) The describe() method provides the following details: Total size (in bytes) of all of the recordings for the pipeline on disk Start time of when the background recording job started (in seconds from Unix epoch) Current pipeline status of the background recording job Python variable for the pipeline Launch Dataflow jobs from a pipeline created in your notebook Optional: Before using your notebook to run Dataflow jobs, restart the kernel, rerun all cells, and verify the output.
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- PipelineOptions () Set the project to the default project in your current Google Cloud environment. , options . view as ( GoogleCloudOptions ) . project = google . auth . default () Set the Google Cloud region to run Dataflow. options . view as ( GoogleCloudOptions ) . region = 'us-central1' Choose a Cloud Storage location. dataflow gcs location = 'gs://<change me>/dataflow' Set the staging location.
- This location is used to store temporary files or intermediate results before outputting to the sink. options . view as ( GoogleCloudOptions ) . temp location = ' %s /temp' % dataflow gcs location If and only if you are using Apache Beam SDK built from source code, set the SDK location.


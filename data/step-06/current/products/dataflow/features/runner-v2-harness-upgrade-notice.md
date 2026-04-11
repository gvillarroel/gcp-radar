---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.793Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Runner v2 harness upgrade notice"
feature_slug: "runner-v2-harness-upgrade-notice"
latest_feature_date: "2026-01-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/logging"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
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
Coverage: LOW

## Step 02 Summary

Dataflow provides advance notice before upgrading the Runner v2 container image for a streaming pipeline.

## Extended Definition

Dataflow provides advance notice before upgrading the Runner v2 container image for a streaming pipeline.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- January 13, 2026 Feature Dataflow now serves a notice for when the Dataflow Runner v2 container image of a streaming pipeline will be upgraded.
- August 26, 2025 Fixed Dataflow Runner v2 fixes an issue that could cause data discrepancies when using splittable DoFns, particularly when processing large datasets as side inputs.
- October 30, 2020 Change Dataflow Runner v2 is now the default runner for Python streaming pipelines using SDK 2.21.0 and above.
- This improvement is available in recent Dataflow service releases, and is automatically enabled when using Dataflow Runner v2.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Runner v2 harness update The following info message appears in the job logs of a Runner v2 job The Dataflow RunnerV2 container image of this job's workers will be ready for update in 7 days.
- It might be possible to retrieve stacktraces of a thread that is holding the GIL on a running Dataflow worker as follows: SSH into a running Dataflow worker VM that is currently a straggler, for example: gcloud compute ssh --zone "us-central1-a" "worker-that-emits-unable-to-retrieve-status-messages" --project "project-id" Install nerdctl to inspect a running container with ptrace privileges. wget https://github.com/containerd/nerdctl/releases/download/v2.0.2/nerdctl-2.0.2-linux-amd64.tar.gz sudo tar Cxzvvf /var/lib/toolbox nerdctl-2.0.2-linux-amd64.tar.gz alias nerdctl = "sudo /var/lib/toolbox/nerdctl -n k8s.io" Find a container running the Python SDK harness.
- Python pipeline fails after one hour of worker inactivity When using the Apache Beam SDK for Python with Dataflow Runner V2 on worker machines with many CPU cores, use Apache Beam SDK 2.35.0 or later.
- Error reporting workitem progress For Java pipelines, if you are not using Runner V2, you might see the following error: Error reporting workitem progress update to Dataflow service: ...

### Work with pipeline logs \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- The following example uses the WorkerOptions class to programmatically set pipeline logging options that can be overridden from the command line: from apache beam.options.pipeline options import PipelineOptions , WorkerOptions pipeline args = [ '--project= PROJECT NAME ' , '--job name= JOB NAME ' , '--staging location=gs:// STORAGE BUCKET /staging/' , '--temp location=gs:// STORAGE BUCKET /tmp/' , '--region= DATAFLOW REGION ' , '--runner=DataflowRunner' ] pipeline options = PipelineOptions ( pipeline args ) worker options = pipeline options . view as ( WorkerOptions ) worker options . default sdk harness log level = 'WARNING' Note: In Apache Beam SDK 2.42.0 and earlier versions, use ['{"apache beam.runners.dataflow":"WARNING"}'] worker options . sdk harness log level overrides = { "apache beam.runners.dataflow" : "WARNING" } Pass in pipeline options during pipeline creation. with beam .
- For example, to override the default pipeline log level for the org.apache.beam.runners.dataflow package, and set it to TRACE : --sdkHarnessLogLevelOverrides='{"org.apache.beam.runners.dataflow":"TRACE"}' To make multiple overrides, provide a JSON map: ( --sdkHarnessLogLevelOverrides={"<package/class>":"<level>","<package/class>":"<level>",...} ).
- For example, to override the default pipeline log level for the apache beam.runners.dataflow module, and set it to DEBUG : --sdk harness log level overrides={\"apache beam.runners.dataflow\":\"DEBUG\"} To make multiple overrides, provide a JSON map: ( --sdk harness log level overrides={\"<module>\":\"<level>\",\"<module>\":\"<level>\",...} ).
- If there is a problem starting workers, these logs are a good place to look. harness logs contain messages from the Runner v2 runner harness. shuffler logs contain messages from workers that consolidate the results of parallel pipeline operations. system logs contain messages from the host operating systems of worker VMs.

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Sdk Harness Container Image Defines an SDK harness container for executing Dataflow pipelines. com. google. dataflow. v1beta3.
- This class provides the ability to make remote calls to the backing service through method com. google. dataflow. v1beta3.
- This class provides the ability to make remote calls to the backing service through method com. google. dataflow. v1beta3.
- SnapshotsV1 Beta3 Grpc Provides methods to manage snapshots of Google Cloud Dataflow jobs. com. google. dataflow. v1beta3.


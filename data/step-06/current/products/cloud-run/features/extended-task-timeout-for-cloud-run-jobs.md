---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.891Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Extended task timeout for Cloud Run jobs"
feature_slug: "extended-task-timeout-for-cloud-run-jobs"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "extended"
  - "task"
  - "timeout"
  - "for"
  - "run"
  - "jobs"
  - "timeouts"
  - "of"
---

# Extended task timeout for Cloud Run jobs

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run jobs support task timeouts of up to 168 hours.

## Extended Definition

Cloud Run jobs support task timeouts of up to 168 hours.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- September 01, 2022 Change Terraform samples are now available in many of the Cloud Run tutorials and guides, such as: Static outbound IP address , Pub/Sub with Cloud Run Authenticating service to service Rollbacks & Rollouts Request Timeouts and many other pages.
- November 25, 2024 Feature You can now set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (Preview) November 19, 2024 Feature Support for the Go 1.23 runtime is now in Preview.
- This feature lets you override the arguments, environment variables, number of tasks, and task timeouts already configured for a job when you execute a job.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Outbound request timeouts For Cloud Run services and jobs, there is a timeout after 10 minutes of idle time for requests from your container to VPC .
- 8080 K SERVICE The name of the Cloud Run service being run. hello-world K REVISION The name of the Cloud Run revision being run. hello-world.1 K CONFIGURATION The name of the Cloud Run configuration that created the revision. hello-world Environment variables for jobs For Cloud Run jobs, the following environment variables are set: Name Description Example CLOUD RUN JOB The name of the Cloud Run job being run. hello-world CLOUD RUN EXECUTION The name of the Cloud Run execution being run. hello-world-abc CLOUD RUN TASK INDEX The index of this task.
- If a task exceeds the task timeout , Cloud Run sends a 'SIGTERM' signal indicating the start of a 10 second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal, shutting down the container instance.
- For jobs For Cloud Run jobs, container instances run until the container instance exits, or until the task timeout is reached or until the container crashes.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Outbound request timeouts For Cloud Run services and jobs, there is a timeout after 10 minutes of idle time for requests from your container to VPC .
- 8080 K SERVICE The name of the Cloud Run service being run. hello-world K REVISION The name of the Cloud Run revision being run. hello-world.1 K CONFIGURATION The name of the Cloud Run configuration that created the revision. hello-world Environment variables for jobs For Cloud Run jobs, the following environment variables are set: Name Description Example CLOUD RUN JOB The name of the Cloud Run job being run. hello-world CLOUD RUN EXECUTION The name of the Cloud Run execution being run. hello-world-abc CLOUD RUN TASK INDEX The index of this task.
- If a task exceeds the task timeout , Cloud Run sends a 'SIGTERM' signal indicating the start of a 10 second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal, shutting down the container instance.
- For jobs For Cloud Run jobs, container instances run until the container instance exits, or until the task timeout is reached or until the container crashes.


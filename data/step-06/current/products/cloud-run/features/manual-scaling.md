---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.896Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Manual scaling"
feature_slug: "manual-scaling"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "manual"
  - "scaling"
  - "run"
  - "supports"
  - "manually"
  - "instead"
  - "of"
  - "relying"
---

# Manual scaling

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports manually scaling a service instead of relying only on autoscaling; Cloud Run supports manually scaling a service instead of relying only on autoscaling.

## Extended Definition

Cloud Run supports manually scaling a service instead of relying only on autoscaling; Cloud Run supports manually scaling a service instead of relying only on autoscaling.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### What is Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To change this behavior, use one of the following methods: Configure Cloud Run to keep a minimum amount of instances active so that your service doesn't scale to zero instances Use manual scaling for more control over scaling.
- Manually scale the number of instances that your Cloud Run worker pool requires to handle its workload.
- Built-in traffic management To reduce the risk of deploying a new revision, Cloud Run supports performing a gradual rollout , including routing incoming traffic to the latest revision, rolling back to a previous revision, and splitting traffic to multiple revisions at the same time.
- Optional manual scaling By default, Cloud Run automatically scales to more instances to handle more traffic, but you can override this behavior by using manual scaling to control scaling behavior.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Manually scale the number of instances that your Cloud Run worker pool requires to handle its workload.
- Service scaling By default, a Cloud Run service is automatically scaled to the number of instances needed to handle all incoming requests, events, or CPU utilization.
- The following table lists some of the available metadata server information: Path Description /computeMetadata/v1/project/project-id Project ID of the project the Cloud Run resource belongs to. /computeMetadata/v1/project/numeric-project-id Project number of the project the Cloud Run resource belongs to. /computeMetadata/v1/instance/region Region of this Cloud Run resource, returns projects/ PROJECT-NUMBER /regions/ REGION /computeMetadata/v1/instance/id Unique identifier of the instance (also available in logs ). /computeMetadata/v1/instance/service-accounts/default/email Email for the service identity of this Cloud Run resource. /computeMetadata/v1/instance/service-accounts/default/token Generates an OAuth2 access token for the service account of this Cloud Run resource .
- 8080 K SERVICE The name of the Cloud Run service being run. hello-world K REVISION The name of the Cloud Run revision being run. hello-world.1 K CONFIGURATION The name of the Cloud Run configuration that created the revision. hello-world Environment variables for jobs For Cloud Run jobs, the following environment variables are set: Name Description Example CLOUD RUN JOB The name of the Cloud Run job being run. hello-world CLOUD RUN EXECUTION The name of the Cloud Run execution being run. hello-world-abc CLOUD RUN TASK INDEX The index of this task.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Manually scale the number of instances that your Cloud Run worker pool requires to handle its workload.
- Service scaling By default, a Cloud Run service is automatically scaled to the number of instances needed to handle all incoming requests, events, or CPU utilization.
- The following table lists some of the available metadata server information: Path Description /computeMetadata/v1/project/project-id Project ID of the project the Cloud Run resource belongs to. /computeMetadata/v1/project/numeric-project-id Project number of the project the Cloud Run resource belongs to. /computeMetadata/v1/instance/region Region of this Cloud Run resource, returns projects/ PROJECT-NUMBER /regions/ REGION /computeMetadata/v1/instance/id Unique identifier of the instance (also available in logs ). /computeMetadata/v1/instance/service-accounts/default/email Email for the service identity of this Cloud Run resource. /computeMetadata/v1/instance/service-accounts/default/token Generates an OAuth2 access token for the service account of this Cloud Run resource .
- 8080 K SERVICE The name of the Cloud Run service being run. hello-world K REVISION The name of the Cloud Run revision being run. hello-world.1 K CONFIGURATION The name of the Cloud Run configuration that created the revision. hello-world Environment variables for jobs For Cloud Run jobs, the following environment variables are set: Name Description Example CLOUD RUN JOB The name of the Cloud Run job being run. hello-world CLOUD RUN EXECUTION The name of the Cloud Run execution being run. hello-world-abc CLOUD RUN TASK INDEX The index of this task.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.903Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Multiple containers for jobs"
feature_slug: "multiple-containers-for-jobs"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
keywords:
  - "multiple"
  - "containers"
  - "for"
  - "jobs"
  - "run"
  - "deploying"
  - "including"
  - "sidecars"
---

# Multiple containers for jobs

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run jobs support deploying multiple containers, including sidecars, in a single job; Cloud Run jobs support deploying multiple containers, including sidecars, in a single job.

## Extended Definition

Cloud Run jobs support deploying multiple containers, including sidecars, in a single job; Cloud Run jobs support deploying multiple containers, including sidecars, in a single job.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)

## Supporting Pages

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Use cases Use cases for sidecars in a Cloud Run service include: Application monitoring, logging and tracing Using Nginx , Envoy or Apache2 as a proxy in front of your application container Adding authentication and authorization filters (for example, Open Policy Agent) Running outbound connection proxies such as the Alloy DB Auth proxy Deploying a service with sidecar containers You can deploy multiple sidecars to a Cloud Run service using the Google Cloud console, the Google Cloud CLI, YAML, or Terraform.
- Deploying multiple containers to a service (sidecars) In a Cloud Run deployment with sidecars, there is one ingress container that handles all incoming HTTPS requests at the container PORT you specify, and there are one or more sidecar containers.
- To deploy multiple containers to a service, run the following command: gcloud run deploy SERVICE \ --container INGRESS CONTAINER NAME \ --image = ' INGRESS IMAGE ' \ --port = ' CONTAINER PORT ' \ --container SIDECAR CONTAINER NAME \ --image = ' SIDECAR IMAGE ' Replace the following: SERVICE : the name of the service you are deploying to.
- Notable features available to deployments with sidecars Start up order You can specify the container start up order within a deployment with multiple containers, if you have dependencies that require some containers to start up before other containers in the deployment.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- April 02, 2025 Feature Deploying multiple containers (sidecars) to a Cloud Run job is now generally available. (GA) March 28, 2025 Feature The ability to disable the Invoker IAM check for Cloud Run services is now at general availability (GA).
- January 14, 2025 Feature You can now deploy multiple containers (sidecars) to a Cloud Run job. (In Preview) January 13, 2025 Breaking The principal (user or service account) creating or updating a Cloud Run resource now needs explicit permission to access the container image(s).
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- May 12, 2023 Feature You can now deploy sidecar containers to your Cloud Run service. (In Preview.) Feature You can now configure in-memory volumes for your Cloud Run containers. (In Preview.) May 10, 2023 Feature Cloud Run integrations (Preview) are now available in asia-east1 , europe-west4 , us-east1 , and us-west1 .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- Regardless of its state, Cloud Run always allocates CPU to to all containers, including sidecars within a worker pool instance.
- 8080 K SERVICE The name of the Cloud Run service being run. hello-world K REVISION The name of the Cloud Run revision being run. hello-world.1 K CONFIGURATION The name of the Cloud Run configuration that created the revision. hello-world Environment variables for jobs For Cloud Run jobs, the following environment variables are set: Name Description Example CLOUD RUN JOB The name of the Cloud Run job being run. hello-world CLOUD RUN EXECUTION The name of the Cloud Run execution being run. hello-world-abc CLOUD RUN TASK INDEX The index of this task.


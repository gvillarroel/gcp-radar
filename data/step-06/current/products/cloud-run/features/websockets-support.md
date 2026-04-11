---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.923Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "WebSockets support"
feature_slug: "websockets-support"
latest_feature_date: "2021-01-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "websockets"
  - "run"
  - "supports"
  - "websocket"
  - "connections"
  - "for"
  - "interactive"
  - "bidirectional"
---

# WebSockets support

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports WebSocket connections for interactive bidirectional communication.

## Extended Definition

Cloud Run supports WebSocket connections for interactive bidirectional communication.

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
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- July 20, 2021 Feature Cloud Run is now covered by FedRAMP Moderate June 30, 2021 Feature Cloud Run is now available in the following region: asia-south2 (Delhi, India) June 25, 2021 Feature Cloud Run is now available in the following region: australia-southeast2 (Melbourne) June 22, 2021 Feature Cloud Run support for WebSockets , HTTP/2 , and gRPC streaming are now at general availability (GA).
- March 01, 2021 Feature Cloud Run is now available in the following regions: us-west2 (Los Angeles) us-west3 (Salt Lake city) us-west4 (Las Vegas) January 20, 2021 Feature Cloud Run now supports WebSockets , HTTP/2 and gRPC streaming .
- This execution environment provides better performance and the ability to use network file systems. (Available in public preview.) Feature Cloud Run now supports network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as Cloud Filestore and Cloud Storage FUSE . (Available in public preview.) September 28, 2021 Feature Binary Authorization for Cloud Run is now at generally availability (GA).
- March 19, 2024 Feature You can now mount an NFS file share as a volume for Cloud Run services and jobs . (In Preview) March 14, 2024 Feature Direct VPC egress now supports Cloud NAT with Public NAT IP addresses (in Preview).

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Cloud Run specifically supports the Linux x86 64 ABI format.
- The following table lists some of the available metadata server information: Path Description /computeMetadata/v1/project/project-id Project ID of the project the Cloud Run resource belongs to. /computeMetadata/v1/project/numeric-project-id Project number of the project the Cloud Run resource belongs to. /computeMetadata/v1/instance/region Region of this Cloud Run resource, returns projects/ PROJECT-NUMBER /regions/ REGION /computeMetadata/v1/instance/id Unique identifier of the instance (also available in logs ). /computeMetadata/v1/instance/service-accounts/default/email Email for the service identity of this Cloud Run resource. /computeMetadata/v1/instance/service-accounts/default/token Generates an OAuth2 access token for the service account of this Cloud Run resource .
- 8080 K SERVICE The name of the Cloud Run service being run. hello-world K REVISION The name of the Cloud Run revision being run. hello-world.1 K CONFIGURATION The name of the Cloud Run configuration that created the revision. hello-world Environment variables for jobs For Cloud Run jobs, the following environment variables are set: Name Description Example CLOUD RUN JOB The name of the Cloud Run job being run. hello-world CLOUD RUN EXECUTION The name of the Cloud Run execution being run. hello-world-abc CLOUD RUN TASK INDEX The index of this task.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Cloud Run specifically supports the Linux x86 64 ABI format.
- The following table lists some of the available metadata server information: Path Description /computeMetadata/v1/project/project-id Project ID of the project the Cloud Run resource belongs to. /computeMetadata/v1/project/numeric-project-id Project number of the project the Cloud Run resource belongs to. /computeMetadata/v1/instance/region Region of this Cloud Run resource, returns projects/ PROJECT-NUMBER /regions/ REGION /computeMetadata/v1/instance/id Unique identifier of the instance (also available in logs ). /computeMetadata/v1/instance/service-accounts/default/email Email for the service identity of this Cloud Run resource. /computeMetadata/v1/instance/service-accounts/default/token Generates an OAuth2 access token for the service account of this Cloud Run resource .
- 8080 K SERVICE The name of the Cloud Run service being run. hello-world K REVISION The name of the Cloud Run revision being run. hello-world.1 K CONFIGURATION The name of the Cloud Run configuration that created the revision. hello-world Environment variables for jobs For Cloud Run jobs, the following environment variables are set: Name Description Example CLOUD RUN JOB The name of the Cloud Run job being run. hello-world CLOUD RUN EXECUTION The name of the Cloud Run execution being run. hello-world-abc CLOUD RUN TASK INDEX The index of this task.


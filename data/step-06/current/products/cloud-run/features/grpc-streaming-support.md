---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.923Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "gRPC streaming support"
feature_slug: "grpc-streaming-support"
latest_feature_date: "2021-01-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "grpc"
  - "streaming"
  - "run"
  - "supports"
  - "requests"
  - "and"
  - "responses"
---

# gRPC streaming support

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports streaming gRPC requests and responses.

## Extended Definition

Cloud Run supports streaming gRPC requests and responses.

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
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- March 01, 2021 Feature Cloud Run is now available in the following regions: us-west2 (Los Angeles) us-west3 (Salt Lake city) us-west4 (Las Vegas) January 20, 2021 Feature Cloud Run now supports WebSockets , HTTP/2 and gRPC streaming .
- September 29, 2020 Feature Cloud Run now supports server-side HTTP and gRPC streaming.
- July 20, 2021 Feature Cloud Run is now covered by FedRAMP Moderate June 30, 2021 Feature Cloud Run is now available in the following region: asia-south2 (Delhi, India) June 25, 2021 Feature Cloud Run is now available in the following region: australia-southeast2 (Melbourne) June 22, 2021 Feature Cloud Run support for WebSockets , HTTP/2 , and gRPC streaming are now at general availability (GA).
- This execution environment provides better performance and the ability to use network file systems. (Available in public preview.) Feature Cloud Run now supports network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as Cloud Filestore and Cloud Storage FUSE . (Available in public preview.) September 28, 2021 Feature Binary Authorization for Cloud Run is now at generally availability (GA).

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- TLS is terminated by Cloud Run for HTTPS and gRPC, and then requests are proxied as HTTP/1 or gRPC to the container without TLS.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- If you configure a Cloud Run service to use HTTP/2 end-to-end, your container must handle requests in HTTP/2 cleartext (h2c) format, because TLS is still terminated automatically by Cloud Run.
- Startup For Cloud Run services, your instances must listen for requests within 4 minutes after being started and all containers within the instance need to be healthy.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- TLS is terminated by Cloud Run for HTTPS and gRPC, and then requests are proxied as HTTP/1 or gRPC to the container without TLS.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- If you configure a Cloud Run service to use HTTP/2 end-to-end, your container must handle requests in HTTP/2 cleartext (h2c) format, because TLS is still terminated automatically by Cloud Run.
- Startup For Cloud Run services, your instances must listen for requests within 4 minutes after being started and all containers within the instance need to be healthy.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.896Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Go 1.24 runtime"
feature_slug: "go-1-24-runtime"
latest_feature_date: "2025-07-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
  - "https://docs.cloud.google.com/run/docs/container-contract"
keywords:
  - "go"
  - "24"
  - "runtime"
  - "run"
  - "supports"
  - "the"
  - "for"
  - "deployed"
---

# Go 1.24 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the Go 1.24 runtime for deployed workloads; Cloud Run supports the Go 1.24 runtime for deployed workloads.

## Extended Definition

Cloud Run supports the Go 1.24 runtime for deployed workloads; Cloud Run supports the Go 1.24 runtime for deployed workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- November 25, 2024 Feature You can now set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (Preview) November 19, 2024 Feature Support for the Go 1.23 runtime is now in Preview.
- August 21, 2024 Feature Cloud Run now provides security updates for services that are deployed from source when you specify the runtime base image (Preview).
- July 15, 2025 Feature Support for the Go 1.24 runtime is in Preview .
- October 30, 2025 Feature For Cloud Run source deployed services and functions with GPU enabled , Cloud Run defaults to using Cloud Build's e2-highcpu-8 machine type for the build process when using the gcloud CLI or the Google Cloud console.

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Change to the directory that contains the Cloud Run sample code: Node.js cd nodejs-docs-samples/run/idp-sql/ Python cd python-docs-samples/run/idp-sql/ Java cd java-docs-samples/run/idp-sql/ Visualizing the architecture Diagram shows an end-user logging-in through a Google sign-in dialog provided by Identity Platform, and then being redirected back to Cloud Run with the user's identity.
- You can locate the service URL in the logs after the build or deployment or you can find it anytime using: gcloud run services describe idp-sql --format 'value(status.url)' Go to the APIs & Services > Credentials page Click the pencil icon beside your OAuth Client ID to edit it and under the Authorized redirect URIs click the Add URI button.
- Costs In this document, you use the following billable components of Google Cloud: Cloud Build Artifact Registry Secret Manager Cloud SQL Identity Platform Cloud Run To generate a cost estimate based on your projected usage, use the pricing calculator .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- Cloud Run specifically supports the Linux x86 64 ABI format.
- The following table lists some of the available metadata server information: Path Description /computeMetadata/v1/project/project-id Project ID of the project the Cloud Run resource belongs to. /computeMetadata/v1/project/numeric-project-id Project number of the project the Cloud Run resource belongs to. /computeMetadata/v1/instance/region Region of this Cloud Run resource, returns projects/ PROJECT-NUMBER /regions/ REGION /computeMetadata/v1/instance/id Unique identifier of the instance (also available in logs ). /computeMetadata/v1/instance/service-accounts/default/email Email for the service identity of this Cloud Run resource. /computeMetadata/v1/instance/service-accounts/default/token Generates an OAuth2 access token for the service account of this Cloud Run resource .


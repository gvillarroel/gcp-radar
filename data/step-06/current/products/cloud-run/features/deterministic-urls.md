---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.910Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Deterministic URLs"
feature_slug: "deterministic-urls"
latest_feature_date: "2024-09-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/triggering/https-request"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run"
keywords:
  - "deterministic"
  - "urls"
  - "let"
  - "you"
  - "predict"
  - "run"
  - "url"
  - "before"
---

# Deterministic URLs

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Deterministic URLs let you predict a Cloud Run service URL before the service is created.

## Extended Definition

Deterministic URLs let you predict a Cloud Run service URL before the service is created.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)

## Supporting Pages

### Invoke with an HTTPS Request \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Non-deterministic URL Non-deterministic URLs do not have a deterministic format, meaning that because the URL's second field is a random hash, you cannot predict what the full URL will be before you deploy the services.
- Deterministic URL The deterministic URL lets you predict the service URL before the service is created, which can be useful for service-to-service communication.
- The non-deterministic URL for a Cloud Run service has the format https://[ TAG ---] SERVICE IDENTIFIER .run.app , where TAG refers to the optional traffic tag for the revision that you are requesting, and SERVICE IDENTIFIER is a stable and unique identifier for a Cloud Run service.
- You can retrieve your service's URL by clicking the service name in the Google Cloud console or by running the following command in the gcloud CLI: gcloud run services describe SERVICE --format 'value(status.url)' The deterministic URL is given priority when displayed.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- September 03, 2024 Feature Deterministic URLs , which let you predict a Cloud Run service URL before the service is created, is now in general availability (GA).
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- January 24, 2025 Feature You can now use dual-stack subnets with internal IPv6 to let your Cloud Run services and jobs send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress. (Preview) January 22, 2025 Feature The Cloud Run Builder ( roles/run.builder ) IAM role is now available in preview.
- The set of packages and features provided by Sovereign Controls by Partners lets you use Cloud Run while meeting digital sovereignty requirements and managing your workloads with data sovereignty guarantees.

### Configure IAP for Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- By enabling IAP on Cloud Run directly, you can secure traffic with a single click from all ingress paths, including default run.app URLs and load balancers.
- Before you begin Enable the IAP API: Enable the IAP API Required roles To get the permissions that you need to enable IAP, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Grant access to the IAP-enabled service: IAP Policy Admin ( roles/iap.admin ) on the project Create an IAP-enabled service or update an existing service to enable IAP: Artifact Registry Reader ( roles/artifactregistry.reader ) on the deployed container images Service Account User ( roles/iam.serviceAccountUser ) on the service identity Grant access to users not part of a Google organization: IAP Settings Admin ( roles/iap.settingsAdmin ) on the project Grant access to users from outside an organization or not part of an organization: OAuth Config Editor ( roles/oauthconfig.editor ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- To create or deploy the service, click Create or Deploy . gcloud To enable IAP directly from Cloud Run, add the --iap flag when deploying your app and grant invoker permission to the IAP service agent: Deploy your Cloud Run service using one of the following commands: For a new service: gcloud run deploy SERVICE NAME \ --region = REGION \ --image = IMAGE URL \ --no-allow-unauthenticated \ --iap If you enable IAP for the first time in a project without an organization, you might see the following warning: Deploying services with IAP enabled in a project without an organization may require initial setup via the Cloud Console.
- To retrieve the current IAM policy data, add the following to a google cloud run v2 service iam policy resource in your Terraform configuration. data "google cloud run v2 service iam policy" "policy" { project = google cloud run v2 service.default.project location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name } Manage user or group access By default, IAP for Cloud Run uses a Google-managed OAuth client that lets you add in-organization identities with an email address associated with a user.


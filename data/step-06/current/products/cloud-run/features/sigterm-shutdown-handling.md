---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.926Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "SIGTERM shutdown handling"
feature_slug: "sigterm-shutdown-handling"
latest_feature_date: "2020-10-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run"
keywords:
  - "sigterm"
  - "shutdown"
  - "handling"
  - "run"
  - "sends"
  - "before"
  - "shutting"
  - "down"
---

# SIGTERM shutdown handling

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run sends SIGTERM before shutting down a container instance and can continue CPU allocation for up to 10 seconds if the signal is handled.

## Extended Definition

Cloud Run sends SIGTERM before shutting down a container instance and can continue CPU allocation for up to 10 seconds if the signal is handled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- If a task exceeds the task timeout , Cloud Run sends a 'SIGTERM' signal indicating the start of a 10 second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal, shutting down the container instance.
- Before shutting down an instance, Cloud Run sends a SIGTERM signal to all the containers in an instance, indicating the start of a 10 second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal.
- Before shutting down an instance, Cloud Run sends a SIGTERM signal to all the containers in an instance.
- This signal indicates the start of a 10-second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- If a task exceeds the task timeout , Cloud Run sends a 'SIGTERM' signal indicating the start of a 10 second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal, shutting down the container instance.
- Before shutting down an instance, Cloud Run sends a SIGTERM signal to all the containers in an instance, indicating the start of a 10 second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal.
- Before shutting down an instance, Cloud Run sends a SIGTERM signal to all the containers in an instance.
- This signal indicates the start of a 10-second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal.

### Configure IAP for Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Enable the IAP API: Enable the IAP API Required roles To get the permissions that you need to enable IAP, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Grant access to the IAP-enabled service: IAP Policy Admin ( roles/iap.admin ) on the project Create an IAP-enabled service or update an existing service to enable IAP: Artifact Registry Reader ( roles/artifactregistry.reader ) on the deployed container images Service Account User ( roles/iam.serviceAccountUser ) on the service identity Grant access to users not part of a Google organization: IAP Settings Admin ( roles/iap.settingsAdmin ) on the project Grant access to users from outside an organization or not part of an organization: OAuth Config Editor ( roles/oauthconfig.editor ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- To verify that your service is no longer configured with IAP enabled, run the following command: gcloud run services describe SERVICE NAME The output should no longer contain the following string: Iap Enabled: true IAP is no longer routing all traffic bound for the configured Cloud Run service to IAP for authentication before passing to the container.
- To verify that your service is configured with IAP enabled, run the following command: gcloud run services describe SERVICE NAME The output should contain the following string: Iap Enabled: true IAP is now routing all traffic bound for the configured Cloud Run service to IAP for authentication before passing to the container.
- Cloud Run enforces IAP policies before performing IAM checks on the IAP service account.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.881Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Identity-Aware Proxy integration"
feature_slug: "identity-aware-proxy-integration"
latest_feature_date: "2026-03-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run"
  - "https://docs.cloud.google.com/run/docs/container-contract"
keywords:
  - "identity"
  - "aware"
  - "proxy"
  - "integration"
  - "run"
  - "can"
  - "be"
  - "configured"
---

# Identity-Aware Proxy integration

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run can be configured directly with Identity-Aware Proxy to protect services without a load balancer; Cloud Run supports configuring Identity-Aware Proxy to secure services across ingress paths.

## Extended Definition

Cloud Run can be configured directly with Identity-Aware Proxy to protect services without a load balancer; Cloud Run supports configuring Identity-Aware Proxy to secure services across ingress paths.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.
- Feature You can now configure Identity-Aware Proxy (IAP) for Cloud Run to secure your services with a single click from all ingress paths (in Preview).
- Feature Cloud Run support for network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as Cloud Filestore and Cloud Storage FUSE , is now at general availability (GA.) November 17, 2022 Feature Logs from Cloud Run services can now be tailed or viewed in a command-line friendly format using gcloud beta run services logs tail and gcloud beta run services logs read October 07, 2022 Feature Cloud Run services can now use the Global External HTTP(S) Load Balancer to map Custom Domains using integrations (Preview).
- April 07, 2023 Feature Support for Identity-aware Proxy (IAP) with Cloud Run to use identity and context to guard access to your applications is now at general availability (GA).

### Configure IAP for Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Enable the IAP API: Enable the IAP API Required roles To get the permissions that you need to enable IAP, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Grant access to the IAP-enabled service: IAP Policy Admin ( roles/iap.admin ) on the project Create an IAP-enabled service or update an existing service to enable IAP: Artifact Registry Reader ( roles/artifactregistry.reader ) on the deployed container images Service Account User ( roles/iam.serviceAccountUser ) on the service identity Grant access to users not part of a Google organization: IAP Settings Admin ( roles/iap.settingsAdmin ) on the project Grant access to users from outside an organization or not part of an organization: OAuth Config Editor ( roles/oauthconfig.editor ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- To verify that your service is no longer configured with IAP enabled, run the following command: gcloud run services describe SERVICE NAME The output should no longer contain the following string: Iap Enabled: true IAP is no longer routing all traffic bound for the configured Cloud Run service to IAP for authentication before passing to the container.
- To verify that your service is configured with IAP enabled, run the following command: gcloud run services describe SERVICE NAME The output should contain the following string: Iap Enabled: true IAP is now routing all traffic bound for the configured Cloud Run service to IAP for authentication before passing to the container.
- Service Agent failure causes set IAM error Enabling IAP on a new project for the first time can cause the following error: Setting IAM permissions failed This is because the Cloud Run Service Agent failed.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Shutdown For Cloud Run services, an idle instance can be shut down at any time, including instances kept warm due to a configured minimum number of instances .
- The following table lists some of the available metadata server information: Path Description /computeMetadata/v1/project/project-id Project ID of the project the Cloud Run resource belongs to. /computeMetadata/v1/project/numeric-project-id Project number of the project the Cloud Run resource belongs to. /computeMetadata/v1/instance/region Region of this Cloud Run resource, returns projects/ PROJECT-NUMBER /regions/ REGION /computeMetadata/v1/instance/id Unique identifier of the instance (also available in logs ). /computeMetadata/v1/instance/service-accounts/default/email Email for the service identity of this Cloud Run resource. /computeMetadata/v1/instance/service-accounts/default/token Generates an OAuth2 access token for the service account of this Cloud Run resource .
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- File descriptor limits Cloud Run first and second generation environments set a limit on the number of file descriptors a process can open to 25000.


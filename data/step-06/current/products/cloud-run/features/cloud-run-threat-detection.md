---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.894Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Run Threat Detection"
feature_slug: "cloud-run-threat-detection"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
  - "https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run"
keywords:
  - "run"
  - "threat"
  - "detection"
  - "provides"
  - "capability"
  - "for"
  - "workloads"
  - "capabilities"
---

# Cloud Run Threat Detection

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run provides a threat detection capability for workloads; Cloud Run Threat Detection provides threat detection capabilities for Cloud Run workloads.

## Extended Definition

Cloud Run provides a threat detection capability for workloads; Cloud Run Threat Detection provides threat detection capabilities for Cloud Run workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.
- This execution environment provides better performance and the ability to use network file systems. (Available in public preview.) Feature Cloud Run now supports network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as Cloud Filestore and Cloud Storage FUSE . (Available in public preview.) September 28, 2021 Feature Binary Authorization for Cloud Run is now at generally availability (GA).
- August 21, 2024 Feature Cloud Run now provides security updates for services that are deployed from source when you specify the runtime base image (Preview).
- May 09, 2023 Feature Cloud Run services can now connect to Firebase Hosting for custom domains and CDN capabilities , using Integrations (Preview).

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable the APIs Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Cloud SQL Admin ( roles/cloudsql.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Identity Platform Admin ( roles/identityplatform.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Secret Manager Admin ( roles/secretmanager.admin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Uncomment and add env vars for local development spring . datasource . username = $ { DB USER } spring . datasource . password = $ { DB PASSWORD } spring . cloud . gcp . sql . database - name = $ { DB NAME } spring . cloud . gcp . sql . instance - connection - name = $ { CLOUD SQL CONNECTION NAME } private final JdbcTemplate jdbcTemplate ; public VoteController ( JdbcTemplate jdbcTemplate ) { this . jdbcTemplate = jdbcTemplate ; } Handling sensitive configuration with Secret Manager Secret Manager provides centralized and secure storage of sensitive data such as Cloud SQL configuration.
- Change to the directory that contains the Cloud Run sample code: Node.js cd nodejs-docs-samples/run/idp-sql/ Python cd python-docs-samples/run/idp-sql/ Java cd java-docs-samples/run/idp-sql/ Visualizing the architecture Diagram shows an end-user logging-in through a Google sign-in dialog provided by Identity Platform, and then being redirected back to Cloud Run with the user's identity.

### What is Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram shows use cases for deploying worker pools for pull-based workloads: In a Pub/Sub use case, an autoscaled Cloud Run subscriber pulls messages from a Pub/Sub subscription.
- The following diagram shows how a job with seven tasks takes longer run sequentially than the same job when four instances can process independent tasks in parallel: For example, if you are resizing and cropping 1,000 images from Cloud Storage, processing them consecutively is slower than processing them in parallel with many instances, with Cloud Run managing auto scaling.
- Built-in traffic management To reduce the risk of deploying a new revision, Cloud Run supports performing a gradual rollout , including routing incoming traffic to the latest revision, rolling back to a previous revision, and splitting traffic to multiple revisions at the same time.
- A standard service includes the following features: Unique HTTPS endpoint for every service Every Cloud Run service has an HTTPS endpoint on a unique subdomain of the .run.app domain – and you can configure custom domains as well.


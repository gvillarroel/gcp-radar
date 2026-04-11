---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.919Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Allowed VPC egress settings organization policy"
feature_slug: "allowed-vpc-egress-settings-organization-policy"
latest_feature_date: "2021-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/deploy-functions"
  - "https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run"
keywords:
  - "allowed"
  - "vpc"
  - "egress"
  - "settings"
  - "organization"
  - "policy"
  - "the"
  - "controls"
---

# Allowed VPC egress settings organization policy

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

The Allowed VPC egress settings organization policy controls which VPC egress settings are permitted for Cloud Run.

## Extended Definition

The Allowed VPC egress settings organization policy controls which VPC egress settings are permitted for Cloud Run.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Feature The following organization policies are now at General Availability (GA): Cloud Run Allowed ingress settings and Allowed VPC egress settings .
- January 18, 2024 Feature Direct VPC egress (Preview) is now available in the following additional regions : asia-east1 asia-east2 asia-northeast2 asia-south2 australia-southeast1 europe-north1 europe-southwest1 europe-west12 europe-west4 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 us-east4 us-south1 us-west1 us-west4 January 10, 2024 Change Tags configured on Cloud Run services are now available when exporting Cloud Billing data to BigQuery .
- March 22, 2024 Feature Direct VPC egress (Preview) is now available in the following additional regions : africa-south1 asia-south1 asia-southeast2 australia-southeast2 europe-central2 europe-west2 europe-west6 europe-west8 europe-west9 europe-west10 me-central1 me-central2 southamerica-west1 us-east5 us-west2 us-west3 us-west8 Feature Cloud Run services can now connect to Vertex AI to access generative AI models using integrations (Preview).
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .

### Deploy a Cloud Run function \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Enable the Artifact Registry, Cloud Build, Cloud Run Admin API, and Cloud Logging APIs: gcloud services enable artifactregistry.googleapis.com \ cloudbuild.googleapis.com \ run.googleapis.com \ logging.googleapis.com Optionally, enable the Eventarc API to use event triggers: gcloud services enable eventarc.googleapis.com If you are under a domain restriction organization policy restricting unauthenticated invocations for your project, you will need to access your deployed service as described under Testing private services .
- Expand the Container(s), Volumes, Networking, Security section, to set other optional settings in the appropriate tabs: Concurrency Container configuration CPU limits Memory limits Request timeout Secrets Environment variables Execution environment HTTP/2 Service accounts Cloud SQL connections VPC connection Click Create , and wait for Cloud Run to create the service using a placeholder revision.
- Note: The iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint prevents the Editor role from being automatically granted to default service accounts.
- VPC Service Controls configurations: Ensure that the build service account can reach the target REPOSITORY within the VPC-SC perimeter.

### Configure IAP for Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Enable the IAP API: Enable the IAP API Required roles To get the permissions that you need to enable IAP, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Grant access to the IAP-enabled service: IAP Policy Admin ( roles/iap.admin ) on the project Create an IAP-enabled service or update an existing service to enable IAP: Artifact Registry Reader ( roles/artifactregistry.reader ) on the deployed container images Service Account User ( roles/iam.serviceAccountUser ) on the service identity Grant access to users not part of a Google organization: IAP Settings Admin ( roles/iap.settingsAdmin ) on the project Grant access to users from outside an organization or not part of an organization: OAuth Config Editor ( roles/oauthconfig.editor ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- To retrieve the current IAM policy data, add the following to a google cloud run v2 service iam policy resource in your Terraform configuration. data "google cloud run v2 service iam policy" "policy" { project = google cloud run v2 service.default.project location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name } Manage user or group access By default, IAP for Cloud Run uses a Google-managed OAuth client that lets you add in-organization identities with an email address associated with a user.
- At the organization level, perform the following steps: To apply the OAuth client at the organization level, run the gcloud iap settings set command: gcloud iap settings set iap settings.yaml --organization = ORGANIZATION NUMBER Replace the following: CLIENT ID : the OAuth client ID you saved in the previous step.
- To save the user configuration, click Save . gcloud To add or remove access to a Cloud Run service for individual users or groups, run one of the following commands: To add access: gcloud iap web add-iam-policy-binding \ --member = user: USER EMAIL \ --role = roles/iap.httpsResourceAccessor \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME To remove access: gcloud iap web remove-iam-policy-binding \ --member = user: USER EMAIL \ --role = roles/iap.httpsResourceAccessor \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME To view access: gcloud iap web get-iam-policy \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME Replace the following: USER EMAIL : the user's email address.


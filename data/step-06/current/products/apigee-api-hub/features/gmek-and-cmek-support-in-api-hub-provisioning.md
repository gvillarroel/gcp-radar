---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.547Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "GMEK and CMEK support in API hub provisioning"
feature_slug: "gmek-and-cmek-support-in-api-hub-provisioning"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision"
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform"
keywords:
  - "customer"
  - "managed"
  - "gmek"
  - "cmek"
  - "provisioning"
  - "supports"
---

# GMEK and CMEK support in API hub provisioning

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub provisioning now supports using GMEK and CMEK customer-managed encryption keys.

## Extended Definition

API hub provisioning now supports using GMEK and CMEK customer-managed encryption keys.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)

## Supporting Pages

### Provision API hub in the Cloud console \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- Source ID: `site-docs-root-required-3`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Step 4: Encryption In this step, you can choose to use a Google-owned and Google-managed encryption key or a Customer Managed Encryption Key (CMEK) defined in the Cloud Key Management Service to encrypt the data stored in your API hub instance.
- If a customer-managed encryption key (CMEK) used for an API hub instance is disabled or becomes unavailable for more than 7 days , all data in the instance is permanently deleted and the instance becomes unusable.
- Cloud Key Management Service (KMS) cloudkms.googleapis.com This is required if you choose to use a customer-managed encryption key (CMEK) to encrypt your API hub data.
- Select or create a customer-managed encryption key (CMEK) or use a Google-owned and Google-managed encryption key to encrypt and decrypt your API data at rest.

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- For example: curl -s https://my-hostname.net/mocktarget/echo \ -H 'authorization: a, b' 462685598 UI OPEN The Apigee UI currently does not offer the option for provisioning Apigee orgs with a Google-owned and Google-managed encryption key.
- The Apigee UI does not offer the option of selecting a Google-owned and Google-managed encryption key when provisioning subscription orgs.
- MCP infrastructure deployment may be subject to capacity limitations in the following regions: asia-east2 asia-northeast3 asia-southeast2 australia-southeast1 europe-central2 europe-west12 europe-west9 me-central2 us-central2 If you see an error related to load balancer provisioning failure, or the provisioning status never changes to Deployed , it might be due to temporary infrastructure capacity limits in the selected region.
- Because the hybrid message processor only supports HTTP1, you may see the following error when an API proxy is called: http2 error: Invalid HTTP header field was received: frame type: 1, stream: 1, name: [:authority], value: [domain name] If you see this error, you can take either of the following actions to correct the problem: Modify the target service to omit the Host header in the response.

### Provision API hub using Terraform \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)
- Source ID: `site-iam-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you plan to provision an API hub instance with Custom Managed Encryption Keys (CMEK), you must enable the Cloud KMS API and grant the API hub service identity access to the CMEK key using: Enable the Cloud KMS API: resource "google project service" "kms service" { project = google project.project.
- Grant the apihub.admin and apihub.runtimeProjectServiceAgent roles to the API hub default service account: resource "google project iam member" "apihub service identity permission" { for each = toset([ "roles/apihub.admin", "roles/apihub.runtimeProjectServiceAgent" ]) role = each.key member = "serviceAccount:${google project service identity.apihub service identity.email}" depends on = [google project service identity.apihub service identity] } Optional: Grant the API hub service identity access to the CMEK key.
- Using CMEK resource "google apihub api hub instance" "apihub-instance-search"{ project = " PROJECT ID " api hub instance id = " API HUB INSTANCE ID " description = " DESCRIPTION " location = " LOCATION " config { encryption type = "CMEK" cmek key name = "projects/ PROJECT ID /locations/ HUB LOCATION /keyRings/ KEY RING ID /cryptoKeys/ KEY ID " disable search = SEMANTIC SEARCH BOOLEAN vertex location = " VERTEX AI LOCATION " } } Replace the following: PROJECT ID : the ID of the Google Cloud project.
- Provision an API hub instance: Using default GMEK resource "google apihub api hub instance" "apihub-instance-without-search"{ location = " HUB LOCATION " config { disable search = SEMANTIC SEARCH BOOLEAN } } Replace the following: HUB LOCATION : the location of the API hub instance.


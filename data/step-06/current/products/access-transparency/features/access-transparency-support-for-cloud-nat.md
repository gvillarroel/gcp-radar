---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:33.593Z"
product_name: "Access Transparency"
product_slug: "access-transparency"
feature_name: "Access Transparency support for Cloud NAT"
feature_slug: "access-transparency-support-for-cloud-nat"
latest_feature_date: "2023-01-23"
deprecation_date: ""
coverage_status: "NONE"
source_links:
  - "https://docs.cloud.google.com/iam/docs/authentication"
keywords:
  - "Access Transparency supported services Cloud NAT"
  - "General Availability Cloud NAT Access Transparency"
  - "AT for Cloud NAT"
  - "Cloud NAT access transparency support"
  - "Access Transparency for Cloud NAT"
  - "Cloud NAT in Access Transparency"
  - "Cloud NAT"
  - "NAT"
---

# Access Transparency support for Cloud NAT

Product: Access Transparency
Coverage: NONE

## Step 02 Summary

Access Transparency now supports Cloud NAT in General Availability.

## Extended Definition

Based on the provided evidence, the feature “Access Transparency support for Cloud NAT” cannot be validated as described because the cited material does not mention Access Transparency, Cloud NAT, or their interaction. The available source only explains IAM authentication setup (including local ADC and service account impersonation) and does not define this Access Transparency capability.

## Evidence Summary

The cited page contributes IAM credential and impersonation guidance only, with no explicit statements about Cloud NAT being supported by Access Transparency.

## Source Links

- [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)

## Supporting Pages

### "Authenticate to IAM \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)
- Source ID: `site-iam-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For a local development environment You can set up credentials for a local development environment in the following ways: User credentials for client libraries or third-party tools User credentials for REST requests from the command line Service account impersonation Client libraries or third-party tools Set up Application Default Credentials (ADC) in your local environment: Install the Google Cloud CLI.
- To set up a local ADC file with service account impersonation, use the --impersonate-service-account flag with the gcloud auth application-default login command : gcloud auth application-default login --impersonate-service-account = SERVICE ACCT EMAIL For more information about service account impersonation, see Use service account impersonation .
- You can set up the gcloud CLI to use service account impersonation by using the gcloud config set command : gcloud config set auth/impersonate service account SERVICE ACCT EMAIL For select languages, you can use service account impersonation to create a local ADC file for use by client libraries.
- If your organization's security policies prevent user accounts from having the required permissions, you can use service account impersonation .


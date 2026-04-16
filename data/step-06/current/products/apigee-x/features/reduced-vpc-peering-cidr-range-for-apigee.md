---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.774Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Reduced VPC peering CIDR range for Apigee"
feature_slug: "reduced-vpc-peering-cidr-range-for-apigee"
latest_feature_date: "2022-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
keywords:
  - "required"
  - "reduced"
  - "reduces"
  - "range"
  - "cidr"
  - "peering"
---

# Reduced VPC peering CIDR range for Apigee

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Reduces the required VPC peering CIDR range to a non-overlapping /22 when linking an Apigee VPC, simplifying Apigee provisioning.

## Extended Definition

Reduces the required VPC peering CIDR range to a non-overlapping /22 when linking an Apigee VPC, simplifying Apigee provisioning.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-2`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to create and use the semantic caching policies, ask your administrator to grant you the AI Platform User ( roles/aiplatform.user ) IAM role on the service account you use to deploy Apigee proxies.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud iam service-accounts create ma-client \ --description = " model armor client " \ --display-name = " ma-client " Grant the service account the required roles: Grant the Model Armor User role to the service account: gcloud projects add-iam-policy-binding $PROJECT \ --member = "serviceAccount: SERVICE ACCOUNT NAME @ $PROJECT .iam.gserviceaccount.com" \ --role = "roles/modelarmor.user" Replace SERVICE ACCOUNT NAME with the name of the service account created in the previous step.
- Create a service account to deploy the API proxy Before creating the API proxy, create a service account with the permissions required to deploy an API proxy that has Model Armor related policies: Create the service account: gcloud iam service-accounts create SERVICE ACCOUNT NAME \ --description = " DESCRIPTION " \ --display-name = " SERVICE ACCOUNT DISPLAY NAME " Where: SERVICE ACCOUNT NAME is the name of the service account.
- Required roles To get the permissions that you need to create and use the Apigee Model Armor policies, ask your administrator to grant you the following IAM roles on the service account you use to deploy Apigee proxies: Model Armor User ( roles/modelarmor.user ) Model Armor Viewer ( roles/modelarmor.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT $LOCATION $RUNTIME HOSTNAME Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT Overview The following sections describe the steps required to create and configure the Model Armor policies: Enable Model Armor APIs.

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: N/A


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.543Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Terraform-based API hub provisioning"
feature_slug: "terraform-based-api-hub-provisioning"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform"
  - "https://docs.cloud.google.com/apigee/docs/apihub/deprovision"
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision"
keywords:
  - "provisioned"
  - "terraform"
  - "instances"
  - "provisioning"
  - "based"
---

# Terraform-based API hub provisioning

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub instances can now be provisioned programmatically with Terraform in Google Cloud, including support in Cloud Shell.

## Extended Definition

API hub instances can now be provisioned programmatically with Terraform in Google Cloud, including support in Cloud Shell.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)
- [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision)
- [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)

## Supporting Pages

### Provision API hub using Terraform \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)
- Source ID: `site-iam-reference`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Provision API hub using Terraform To provision API hub using Terraform, complete the following steps: Caution: If you have recently deprovisioned API hub, you must wait 7 days before provisioning a new instance in the same Google Cloud project.
- Initialize Terraform in the directory: terraform init Generate the Terraform execution plan based on the current state of your project and the configuration file: terraform plan Apply the plan to provision API hub: terraform apply If prompted, enter yes to confirm the deployment.
- This is because deprovisioning moves the associated Apigee organization (if any) to a soft-delete state for 7 days , and API hub can only be reprovisioned after the Apigee org is permanently deleted.
- This is because deprovisioning moves the associated Apigee organization (if any) to a soft-delete state for 7 days , API hub can only be reprovisioned after the Apigee org is permanently deleted.

### Provision API hub in the Cloud console \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- Source ID: `site-docs-root-required-3`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- This is because deprovisioning moves the associated Apigee organization (if any) to a soft-delete state for 7 days , and API hub can only be reprovisioned after the Apigee org is permanently deleted.
- This is because deprovisioning moves the associated Apigee organization (if any) to a soft-delete state for 7 days , API hub can only be reprovisioned after the Apigee org is permanently deleted.
- Considerations If you have recently deprovisioned API hub, you must wait 7 days before provisioning a new instance in the same Google Cloud project.
- Caution: If you have recently deprovisioned API hub, you must wait 7 days before provisioning a new instance in the same Google Cloud project.

### Deprovision Apigee API hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST API Look up the project ID of the project where the API hub instance is located: curl --location 'https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /apiHubInstances:lookup' \ --header 'Authorization: Bearer $(gcloud auth print-access-token)' Replace the following: PROJECT ID : the project ID of the Google Cloudproject where the API hub instance is provisioned.
- Delete the API hub instance: curl --location --request DELETE 'https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /apiHubInstances/ INSTANCE ID ' \ --header 'Authorization: Bearer $(gcloud auth print-access-token)' Replace the following: PROJECT ID : the project ID of the Google Cloud project where the API hub instance is provisioned.
- Deprovisioning an API hub instance removes all associated resources, including APIs, versions, deployments, and any Apigee organizations (with no Apigee instances ) from your project.
- The output is similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.apihub.v1.OperationMetadata", "createTime": "2025-03-28T07:41:23.020949825Z", "endTime": "2025-03-28T07:45:12.648333602Z", "target": "projects/ PROJECT ID /locations/ LOCATION /apiHubInstances/ INSTANCE ID ", "verb": "delete", "requestedCancellation": false, "apiVersion": "v1" }, "done": true, "response": { "@type": "type.googleapis.com/google.protobuf.Empty" } } The API returns a done value of true when the deletion is complete.


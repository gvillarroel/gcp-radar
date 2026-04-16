---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.982Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "IAM policy configuration support"
feature_slug: "iam-policy-configuration-support"
latest_feature_date: "2016-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy"
keywords:
  - "iam"
  - "policy"
  - "configuration"
  - "deployment"
  - "manager"
  - "configurations"
  - "can"
  - "specify"
---

# IAM policy configuration support

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager configurations can specify IAM policies.

## Extended Definition

Deployment Manager configurations can specify IAM policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources](https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy)

## Supporting Pages

### "Setting access control in a configuration \_|\_ Cloud Deployment Manager\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources](https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you plan to create Pub/Sub Topics that can be managed by specific users, you can express this to Deployment Manager by specifying an IAM policy in your configuration.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Setting access control in a configuration Stay organized with collections Save and categorize content based on your preferences.
- If you change the account's roles outside Deployment Manager and then update the original deployment, the roles from the deployment configuration are applied to the account.
- Using IAM policies in Deployment Manager An IAM policy is a collection of users and their roles.

### "Deployments: setIamPolicy \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy)
- Source ID: `site-api-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request POST https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ resource /setIamPolicy Parameters Parameter name Value Description Path parameters project string Project ID for this request. resource string Name or id of the resource for this request.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployments: setIamPolicy Stay organized with collections Save and categorize content based on your preferences.
- For example, storage.googleapis.com, cloudsql.googleapis.com. allServices is a special value that covers all services. policy.auditConfigs[]. exemptedMembers[] list policy.auditConfigs[]. auditLogConfigs[] list The configuration for logging of each type of permission. policy.auditConfigs[].auditLogConfigs[]. logType string The log type that this config enables. policy.auditConfigs[].auditLogConfigs[]. exemptedMembers[] list Specifies the identities that do not cause logging for this type of permission.
- This is a longer text which describes the expression, e.g. when hovered over it in a UI. policy.bindings[].condition. location string An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file. policy. auditConfigs[] list Specifies cloud audit logging configuration for this policy. policy.auditConfigs[]. service string Specifies a service that will be enabled for audit logging.

### "Sharing Types Across Projects \_|\_ Cloud Deployment Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: { "policy" : { "version" : "0" , "bindings" : [ { "role" : "roles/owner" , "members" : [ "user:example@gmail.com" ] }, { "role" : "roles/deploymentmanager.typeViewer" , "members" : [ "serviceAccount:123456789012@cloudservices.gserviceaccount.com" ] } ] } } Using types from other projects in your configuration Once you have access to your types, you can specify the type in configurations using the syntax.
- Granting users the ability to list and view types Granting the project's service account the deploymentmanager.typeViewer role allows the project to deploy these types in your configurations but does not allow users to view or list these types.
- Read about Deployment Manager configurations .
- Click Add to add the account. gcloud With the Google Cloud CLI, add a binding to the IAM policy for the project: gcloud projects add-iam-policy-binding [PROJECT ID] \ --member serviceAccount:[SERVICE ACCOUNT EMAIL] --role roles/deploymentmanager.typeViewer where: [PROJECT ID] is the ID of the project containing images you want to share. [SERVICE ACCOUNT EMAIL] is the email of the service account in the project you want to share types with.


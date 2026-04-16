---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.777Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Cloud IAP for on-premises apps"
feature_slug: "cloud-iap-for-on-premises-apps"
latest_feature_date: "2019-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview"
  - "https://docs.cloud.google.com/iap/docs/enabling-on-prem-howto"
  - "https://docs.cloud.google.com/iap/docs/managing-access"
  - "https://docs.cloud.google.com/iap/docs/configuring-reauth"
keywords:
  - "iap"
  - "for"
  - "on"
  - "premises"
  - "apps"
  - "can"
  - "manage"
  - "access"
---

# Cloud IAP for on-premises apps

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Cloud IAP can manage access to HTTP-based applications outside Google Cloud, including on-premises and other-cloud deployments.

## Extended Definition

Cloud IAP can manage access to HTTP-based applications outside Google Cloud, including on-premises and other-cloud deployments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview)
- [https://docs.cloud.google.com/iap/docs/enabling-on-prem-howto](https://docs.cloud.google.com/iap/docs/enabling-on-prem-howto)
- [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- [https://docs.cloud.google.com/iap/docs/configuring-reauth](https://docs.cloud.google.com/iap/docs/configuring-reauth)

## Supporting Pages

### "Overview of IAP for on-premises apps \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview)
- Source ID: `site-docs-root`
- Final score: 340
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The On-Prem Connector uses a Cloud Deployment Manager template to create the resources needed to host and deploy the IAP On-Prem Connector into an IAP-enabled Google Cloud project, forwarding authenticated and authorized requests to on-premises apps.
- When the IAP on-prem connector is deployed and IAP is enabled for the newly created on-prem connector backend service, IAP secures your app with identity and context based Identity and Access Management (IAM) access policies.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Overview of IAP for on-premises apps Stay organized with collections Save and categorize content based on your preferences.
- Because an IAM access policy is configured on the backend service resource level, you're able to have different access control lists for each of your on-premises apps.

### "Enabling IAP for on-premises apps \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/enabling-on-prem-howto](https://docs.cloud.google.com/iap/docs/enabling-on-prem-howto)
- Source ID: `site-docs-root`
- Final score: 324
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Enabling IAP for on-premises apps Stay organized with collections Save and categorize content based on your preferences.
- Manage a connector for an on-premises app To add more apps to your deployment, click Connect new application and then Connect via on-prem connector .
- After the deployment is complete, your on-premises connector apps appear in the Applications table and you can enable IAP.
- For more information on how IAP secures on-premises apps and resources, see the IAP for on-premises apps overview .

### "Manage access to IAP-secured resources \_|\_ Identity-Aware Proxy \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- Source ID: `site-iam-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is an example of an IAM deny policy to deny access to the getSettings API to a principal at an organization and its descendants. { "name" : "policies/cloudresourcemanager.googleapis.com%2Forganizations%2F253519172624/denypolicies/testpolicyid" , "uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" , "kind" : "DenyPolicy" , "displayName" : "Only project admins can delete projects." , "etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" , "createTime" : "2021-09-07T23:15:35.258319Z" , "updateTime" : "2021-09-07T23:15:35.258319Z" , "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "iap.googleapis.com/iap.organizations.getSettings" , "iap.googleapis.com/iap.folders.getSettings" , "iap.googleapis.com/iap.projects.getSettings" , "iap.googleapis.com/iap.web.getSettings" , "iap.googleapis.com/iap.webTypes.getSettings" , "iap.googleapis.com/iap.webServices.getSettings" , "iap.googleapis.com/iap.webServicesVersions.getSettings" , ], } } ] } Instead of specifying all granular permissions, the following is an example of the IAM deny policy with only one permission: .getSettings . { "name" : "policies/cloudresourcemanager.googleapis.com%2Forganizations%2F253519172624/denypolicies/testpolicyid" , "uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" , "kind" : "DenyPolicy" , "displayName" : "Only project admins can delete projects." , "etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" , "createTime" : "2021-09-07T23:15:35.258319Z" , "updateTime" : "2021-09-07T23:15:35.258319Z" , "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "iap.googleapis.com/ .getSettings" , ], } } ] } The following are some simpler ways to create an IAM deny policy without having to specify all of the granular permissions.
- Each IAP resource has its own getIamPolicy and setIamPolicy permission that grants the ability to manage access policies for that resource and its children.
- For App Engine apps, individual versions and services can have different access policies applied.
- IAP Policy Admin ( roles/iap.admin ) iap.web.getIamPolicy iap.web.setIamPolicy iap.webTypes.getIamPolicy iap.webTypes.setIamPolicy iap.webServices.getIamPolicy iap.webServices.setIamPolicy iap.webServiceVersions.getIamPolicy iap.webServiceVersions.setIamPolicy iap.tunnel.getIamPolicy iap.tunnel.setIamPolicy iap.tunnelZones.getIamPolicy iap.tunnelZones.setIamPolicy iap.tunnelInstances.getIamPolicy iap.tunnelInstances.setIamPolicy Grants IAP administrative rights to manage IAP access policies of resources.

### IAP reauthentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/configuring-reauth](https://docs.cloud.google.com/iap/docs/configuring-reauth)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IAP reauthentication lets service and application owners or Google Cloud administrators require authenticated end users to reauthenticate after a specified time when accessing an IAP-protected service or application and limit how long a user can access a IAP-protected service or application before authentication is required.
- For example, mobile and desktop applications cannot reauthenticate users because the resources that require reauthentication are inaccessible to these applications.
- IAP reauthentication (or, reauth) is designed to enforce reauthentication policies for IAP-protected services and applications (or, apps).
- For example, you can specify that users accessing a critical HR application reauthenticate hourly using a second factor.


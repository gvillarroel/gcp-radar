---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.777Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Cloud IAP context-aware access"
feature_slug: "cloud-iap-context-aware-access"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto"
  - "https://docs.cloud.google.com/iap/docs/managing-access"
  - "https://docs.cloud.google.com/iap/docs/concepts-overview"
  - "https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings"
keywords:
  - "iap"
  - "context"
  - "aware"
  - "access"
  - "policies"
  - "can"
  - "be"
  - "extended"
---

# Cloud IAP context-aware access

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Cloud IAP access policies can be extended with access levels and the IAM Conditions Framework; Cloud IAP access policies can be extended with access levels and the IAM Conditions Framework.

## Extended Definition

Cloud IAP access policies can be extended with access levels and the IAM Conditions Framework; Cloud IAP access policies can be extended with access levels and the IAM Conditions Framework.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)
- [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview)
- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)

## Supporting Pages

### "Setting up context-aware access with Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)
- Source ID: `site-docs-root`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example policy.json file { "policy" : { "bindings" : [ { "role" : "roles/iap.httpsResourceAccessor" , "members" : [ "group" : EXAMPLE GROUP@GOOGLE.COM , "user: EXAMPLE USER@GOOGLE.COM " ], "condition" : { "expression" : "" accessPolicies/ ORGANIZATION NUMBER /accessLevels/ ACCESS LEVEL NAME " in request.auth.access levels && request.path.startsWith(" / ")" , "title" : " CONDITION NAME " } } ] } } Set your new policy.json file using the setIamPolicy method. curl -i -H "Content-Type:application/json" \ -H "Authentication: Bearer $(gcloud auth print-access-token)" \ ${IAP BASE URL}/compute/services/${BACKEND SERVICE NAME}:setIamPolicy \ -d @${JSON NEW POLICY} Use hostname and path conditions Access to your app can be secured using the hostname and path of a request URL.
- Example policy.json file { "policy" : { "bindings" : [ { "role" : "roles/iap.httpsResourceAccessor" , "members" : [ "group: EXAMPLE GROUP@GOOGLE.COM " , "user: EXAMPLE USER@GOOGLE.COM " ], "condition" : { "expression" : "" accessPolicies/ ORGANIZATION NUMBER /accessLevels/ ACCESS LEVEL NAME " in request.auth.access levels && request.path.startsWith(" / ")" , "title" : " CONDITION NAME " } } ] } } Set your new policy.json file using the setIamPolicy method. curl -i -H "Authentication: Bearer $(gcloud auth print-access-token)" \ ${GAE BASE URL}:setIamPolicy -d @${JSON NEW POLICY} App Engine services and versions You can also update the IAM policy of a App Engine service, all versions, or a specific version of a service.
- This guide describes how to extend Identity-Aware Proxy (IAP) access policies using access levels and the Identity and Access Management (IAM) Conditions Framework .
- This condition grants access to the user and group if the ACCESS LEVEL NAME access level requirements are met and the resource URL path starts with / . bindings: ... - members: - group: EXAMPLE GROUP@GOOGLE.COM - user: EXAMPLE USER@GOOGLE.COM role: roles/iap.httpsResourceAccessor condition: expression: "accessPolicies/ ORGANIZATION NUMBER /accessLevels/ ACCESS LEVEL NAME " in request.auth.access levels && request.path.startsWith("/") title: CONDITION TITLE ...

### "Manage access to IAP-secured resources \_|\_ Identity-Aware Proxy \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- Source ID: `site-iam-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is an example of an IAM deny policy to deny access to the getSettings API to a principal at an organization and its descendants. { "name" : "policies/cloudresourcemanager.googleapis.com%2Forganizations%2F253519172624/denypolicies/testpolicyid" , "uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" , "kind" : "DenyPolicy" , "displayName" : "Only project admins can delete projects." , "etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" , "createTime" : "2021-09-07T23:15:35.258319Z" , "updateTime" : "2021-09-07T23:15:35.258319Z" , "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "iap.googleapis.com/iap.organizations.getSettings" , "iap.googleapis.com/iap.folders.getSettings" , "iap.googleapis.com/iap.projects.getSettings" , "iap.googleapis.com/iap.web.getSettings" , "iap.googleapis.com/iap.webTypes.getSettings" , "iap.googleapis.com/iap.webServices.getSettings" , "iap.googleapis.com/iap.webServicesVersions.getSettings" , ], } } ] } Instead of specifying all granular permissions, the following is an example of the IAM deny policy with only one permission: .getSettings . { "name" : "policies/cloudresourcemanager.googleapis.com%2Forganizations%2F253519172624/denypolicies/testpolicyid" , "uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" , "kind" : "DenyPolicy" , "displayName" : "Only project admins can delete projects." , "etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" , "createTime" : "2021-09-07T23:15:35.258319Z" , "updateTime" : "2021-09-07T23:15:35.258319Z" , "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "iap.googleapis.com/ .getSettings" , ], } } ] } The following are some simpler ways to create an IAM deny policy without having to specify all of the granular permissions.
- This page describes how to manage individual or group access to Identity-Aware Proxy (IAP) secured resources at the resource level.
- Although deny policies can be applied to any IAP permissions, their effectiveness is tied to a deny policy attachment point .
- IAP Policy Admin ( roles/iap.admin ) iap.web.getIamPolicy iap.web.setIamPolicy iap.webTypes.getIamPolicy iap.webTypes.setIamPolicy iap.webServices.getIamPolicy iap.webServices.setIamPolicy iap.webServiceVersions.getIamPolicy iap.webServiceVersions.setIamPolicy iap.tunnel.getIamPolicy iap.tunnel.setIamPolicy iap.tunnelZones.getIamPolicy iap.tunnelZones.setIamPolicy iap.tunnelInstances.getIamPolicy iap.tunnelInstances.setIamPolicy Grants IAP administrative rights to manage IAP access policies of resources.

### Identity-Aware Proxy overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Context-aware access As part of the authorization step, you can use context-aware access to provide secure access to the following types of resources: Google Cloud console and APIs First layer of defense in protecting infrastructure access to Google Cloud.
- How IAP works When an application or resource is protected by IAP, it can only be accessed through the proxy by principals , also known as users, who have the correct Identity and Access Management (IAM) role .
- With IAP, you can set up group-based application access: a resource could be accessible for employees and inaccessible for contractors, or only accessible to a specific department.
- If you're using Compute Engine or Google Kubernetes Engine, users who can access the application-serving port of the Virtual Machine (VM) can bypass IAP authentication.

### IapSettings \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enables redirect to primary IDP by skipping Google's login screen. https://developers.google.com/identity/protocols/OpenIDConnect#hd-param Note: IAP does not verify that the id token's hd claim matches this value since access behavior is managed by IAM policies. clientId string Optional.
- Settings to configure IAP's behavior for a service mesh. accessDeniedPageSettings object ( AccessDeniedPageSettings ) Optional.
- If IAP prevents access to this page, the default IAP error page will be displayed instead.
- RCToken are IAP generated JWTs that can be verified at the application.


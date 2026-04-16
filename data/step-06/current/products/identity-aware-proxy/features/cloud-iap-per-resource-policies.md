---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.778Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Cloud IAP per-resource policies"
feature_slug: "cloud-iap-per-resource-policies"
latest_feature_date: "2019-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/auth-policies"
  - "https://docs.cloud.google.com/iap/docs/custom-org-policies"
  - "https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings"
  - "https://docs.cloud.google.com/iap/docs/managing-access"
keywords:
  - "iap"
  - "per"
  - "resource"
  - "policies"
  - "can"
  - "be"
  - "managed"
  - "separately"
---

# Cloud IAP per-resource policies

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Cloud IAP policies can be managed separately for each individual resource in a Google Cloud project; Cloud IAP policies can be managed separately for each individual resource in a Google Cloud project.

## Extended Definition

Cloud IAP policies can be managed separately for each individual resource in a Google Cloud project; Cloud IAP policies can be managed separately for each individual resource in a Google Cloud project.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies)
- [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies)
- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)
- [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)

## Supporting Pages

### "Use authorization policies to delegate authorization to IAP and IAM \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Following is an example YAML file: bindings : members : user:example@example.com role : roles/iap.httpsResourceAccessor Update the permission for who can access the forwarding rule resource gcloud iap web set-iam-policy POLICY FILE [--organization= ORGANIZATION \ --folder= FOLDER --project= PROJECT ID \ --resource-type= RESOURCE TYPE --service= SERVICE ] Configure permission at the organization level gcloud iap web set-iam-policy POLICY FILE --organization= ORGANIZATION Configure permission at the folder level gcloud iap web set-iam-policy POLICY FILE --folder= FOLDER Configure permission at the project level gcloud iap web set-iam-policy POLICY FILE --project= PROJECT ID --resource-type=iap web Configure permission for all global forwarding rules in a project gcloud iap web set-iam-policy POLICY FILE --project= PROJECT ID --resource-type=forwarding rule Configure permission for all forwarding rules in a project in a region gcloud iap web set-iam-policy POLICY FILE --project= PROJECT ID \ --resource-type=forwarding rule --region= REGION Configure permission for a specific global forwarding rule in a project gcloud iap web set-iam-policy POLICY FILE --project= PROJECT ID \ --resource-type=forwarding rule --service= SERVICE Configure permission for a specific forwarding rule in a project in a region gcloud iap web set-iam-policy POLICY FILE --project= PROJECT ID \ --resource-type=forwarding rule --service= SERVICE --region= REGION Replace the following: POLICY FILE : The path to a YAML file that contains a valid policy.
- API Configure permission at the organization level organization/ ORGANIZATION Configure permission at the folder level folders/ FOLDER Configure permission at the project level projects/ PROJECT ID Configure permission for all global forwarding rules in a project projects/ PROJECT ID /forwarding rule Configure permission for all forwarding rules in a project in a region projects/ PROJECT ID /iap web/forwarding rule- REGION Configure permission for a specific global forwarding rule in a project projects/ PROJECT ID /iap web/forwarding rule/services/ SERVICE Configure permission for a specific forwarding rule in a project in a region projects/ PROJECT ID /iap web/forwarding rule- REGION /services/ SERVICE Set the authorization policy curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @policy.json \ "https://iap.googleapis.com/v1/RESOURCE NAME:setIamPolicy" For policy.json , you can create the JSON file by running the following command.
- API Run the following command to prepare a policy.json file. cat << EOF > policy.json { "name": " AUTHZ POLICY NAME ", "target": { "loadBalancingScheme": "INTERNAL MANAGED", "resources": [ "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ LOCATION /forwardingRules/ FORWARDING RULE ID " ], }, "action": "CUSTOM", "httpRules": [ { "from": { "sources": { "ipBlocks": [ { "prefix": "10.0.0.0", "length": 24 } ] } } } ], "customProvider": { "cloudIap": {} } } EOF Run the following command to enable IAP on a forwarding rule. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @policy.json \ "https://networksecurity.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /authzPolicies" Replace the following: PROJECT ID : The Google Cloud project ID.
- The policy allows clients with an IP address range of 10.0.0.0/24 to enable IAP on a forwarding rule. $ cat << EOF > policy.yaml action : CUSTOM description : authz policy with Cloud IAP name : AUTHZ POLICY NAME httpRules : - from : sources : - ipBlocks : - prefix : "10.0.0.0" length : 24 customProvider : cloudIap : {} target : loadBalancingScheme : EXTERNAL MANAGED resources : - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ LOCATION /forwardingRules/ FORWARDING RULE ID EOF Run the following command to enable IAP on a forwarding rule. gcloud network-security authz-policies import AUTHZ POLICY NAME \ --source=policy.yaml \ --location= LOCATION \ --project= PROJECT ID Replace the following: PROJECT ID : The Google Cloud project ID.

### "Use custom organization policies \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the policy Try to create a destination group in the project: gcloud iap tcp dest-groups create org-policy-test \ --region = us-central1 \ --fqdn-list = .example-pet-store.com, .altostrat.com The output is the following: Operation denied by custom org policies: ["customConstraints/custom.denyUnownedDomains": "All tunnel destination groups can only contain company owned domains."] Identity-Aware Proxy supported resources The following table lists the Identity-Aware Proxy resources that you can reference in custom constraints.
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-deny-unowned-domains.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.denyUnownedDomains resourceTypes : - iap.googleapis.com/TunnelDestGroup methodTypes : - CREATE - UPDATE condition : "!resource.fqdns.all(value, value.endsWith(\".example-pet-store.com\"))" actionType : DENY displayName : Deny Unowned Domains description : All tunnel destination groups can only contain company owned domains.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: iap.googleapis.com/TunnelDestGroup To learn more about Organization Policy, see Custom organization policies .
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-deny-unowned-domains.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.denyUnownedDomains DENY CREATE,UPDATE iap.googleapis.com/TunnelDestGroup Deny Unowned Domains ...

### IapSettings \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)
- Source ID: `site-api-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enables redirect to primary IDP by skipping Google's login screen. https://developers.google.com/identity/protocols/OpenIDConnect#hd-param Note: IAP does not verify that the id token's hd claim matches this value since access behavior is managed by IAM policies. clientId string Optional.
- GCIP tenant IDs that are linked to the IAP resource. tenantIds could be a string beginning with a number character to indicate authenticating with GCIP tenant flow, or in the format of <ProjectNumber> to indicate authenticating with GCIP agent flow.
- RCToken are IAP generated JWTs that can be verified at the application.
- Only one workforce pool is accepted. oauth2 object ( OAuth2 ) OAuth 2.0 settings for IAP to perform OIDC flow with workforce identity federation services.

### "Manage access to IAP-secured resources \_|\_ Identity-Aware Proxy \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- Source ID: `site-iam-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of an IAM deny policy to deny access to the getSettings API to a principal at an organization and its descendants. { "name" : "policies/cloudresourcemanager.googleapis.com%2Forganizations%2F253519172624/denypolicies/testpolicyid" , "uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" , "kind" : "DenyPolicy" , "displayName" : "Only project admins can delete projects." , "etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" , "createTime" : "2021-09-07T23:15:35.258319Z" , "updateTime" : "2021-09-07T23:15:35.258319Z" , "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "iap.googleapis.com/iap.organizations.getSettings" , "iap.googleapis.com/iap.folders.getSettings" , "iap.googleapis.com/iap.projects.getSettings" , "iap.googleapis.com/iap.web.getSettings" , "iap.googleapis.com/iap.webTypes.getSettings" , "iap.googleapis.com/iap.webServices.getSettings" , "iap.googleapis.com/iap.webServicesVersions.getSettings" , ], } } ] } Instead of specifying all granular permissions, the following is an example of the IAM deny policy with only one permission: .getSettings . { "name" : "policies/cloudresourcemanager.googleapis.com%2Forganizations%2F253519172624/denypolicies/testpolicyid" , "uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" , "kind" : "DenyPolicy" , "displayName" : "Only project admins can delete projects." , "etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" , "createTime" : "2021-09-07T23:15:35.258319Z" , "updateTime" : "2021-09-07T23:15:35.258319Z" , "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "iap.googleapis.com/ .getSettings" , ], } } ] } The following are some simpler ways to create an IAM deny policy without having to specify all of the granular permissions.
- Although deny policies can be applied to any IAP permissions, their effectiveness is tied to a deny policy attachment point .
- The following is an example call that gets the IAM policy for an App Engine app service version. https://iap.googleapis.com/v1/projects/ PROJECT NUMBER /iap web/ appengine- APP ID /services/ SERVICE ID /versions/ VERSION ID :getIamPolicy The following table lists supported resource types, as well as the permissions required to call the IAM API.
- Each IAP resource has its own getIamPolicy and setIamPolicy permission that grants the ability to manage access policies for that resource and its children.


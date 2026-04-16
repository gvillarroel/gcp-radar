---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.773Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Authorization policy delegation for IAP and IAM"
feature_slug: "authorization-policy-delegation-for-iap-and-iam"
latest_feature_date: "2024-09-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/auth-policies"
  - "https://docs.cloud.google.com/iap/docs/enabling-compute-howto"
  - "https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy"
  - "https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy"
keywords:
  - "authorization"
  - "policy"
  - "delegation"
  - "for"
  - "iap"
  - "and"
  - "iam"
  - "policies"
---

# Authorization policy delegation for IAP and IAM

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Authorization policies can delegate authorization decisions to Identity-Aware Proxy and Identity and Access Management.

## Extended Definition

Authorization policies can delegate authorization decisions to Identity-Aware Proxy and Identity and Access Management.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies)
- [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)
- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy)
- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy)

## Supporting Pages

### "Use authorization policies to delegate authorization to IAP and IAM \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies)
- Source ID: `site-docs-root`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Configure permission at the organization level organization/ ORGANIZATION Configure permission at the folder level folders/ FOLDER Configure permission at the project level projects/ PROJECT ID Configure permission for all global forwarding rules in a project projects/ PROJECT ID /forwarding rule Configure permission for all forwarding rules in a project in a region projects/ PROJECT ID /iap web/forwarding rule- REGION Configure permission for a specific global forwarding rule in a project projects/ PROJECT ID /iap web/forwarding rule/services/ SERVICE Configure permission for a specific forwarding rule in a project in a region projects/ PROJECT ID /iap web/forwarding rule- REGION /services/ SERVICE Set the authorization policy curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @policy.json \ "https://iap.googleapis.com/v1/RESOURCE NAME:setIamPolicy" For policy.json , you can create the JSON file by running the following command.
- API Run the following command to prepare a policy.json file. cat << EOF > policy.json { "name": " AUTHZ POLICY NAME ", "target": { "loadBalancingScheme": "INTERNAL MANAGED", "resources": [ "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ LOCATION /forwardingRules/ FORWARDING RULE ID " ], }, "action": "CUSTOM", "httpRules": [ { "from": { "sources": { "ipBlocks": [ { "prefix": "10.0.0.0", "length": 24 } ] } } } ], "customProvider": { "cloudIap": {} } } EOF Run the following command to enable IAP on a forwarding rule. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @policy.json \ "https://networksecurity.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /authzPolicies" Replace the following: PROJECT ID : The Google Cloud project ID.
- The policy allows clients with an IP address range of 10.0.0.0/24 to enable IAP on a forwarding rule. $ cat << EOF > policy.yaml action : CUSTOM description : authz policy with Cloud IAP name : AUTHZ POLICY NAME httpRules : - from : sources : - ipBlocks : - prefix : "10.0.0.0" length : 24 customProvider : cloudIap : {} target : loadBalancingScheme : EXTERNAL MANAGED resources : - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ LOCATION /forwardingRules/ FORWARDING RULE ID EOF Run the following command to enable IAP on a forwarding rule. gcloud network-security authz-policies import AUTHZ POLICY NAME \ --source=policy.yaml \ --location= LOCATION \ --project= PROJECT ID Replace the following: PROJECT ID : The Google Cloud project ID.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Use authorization policies to delegate authorization to IAP and IAM Stay organized with collections Save and categorize content based on your preferences.

### "Enable IAP for Compute Engine \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Run the following command to prepare a policy.json file. cat << EOF > policy.json { "name": " AUTHZ POLICY NAME ", "target": { "loadBalancingScheme": "INTERNAL MANAGED", "resources": [ "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ LOCATION /forwardingRules/ FORWARDING RULE ID " ], }, "action": "CUSTOM", "httpRules": [ { "from": { "sources": { "ipBlocks": [ { "prefix": "10.0.0.0", "length": 24 } ] } } } ], "customProvider": { "cloudIap": {} } } EOF Run the following command to enable IAP on a forwarding rule. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @policy.json \ "https://networksecurity.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /authzPolicies" Replace the following: PROJECT ID : The Google Cloud project ID.
- Enable IAP on a forwarding rule You can enable IAP on a forwarding rule by using the load balancer authorization policies framework. gcloud Run the following command to prepare a policy.yaml file.
- The policy allows clients with an IP address range of 10.0.0.0/24 to enable IAP on a forwarding rule. $ cat << EOF > policy.yaml action : CUSTOM description : authz policy with Cloud IAP name : AUTHZ POLICY NAME httpRules : - from : sources : - ipBlocks : - prefix : "10.0.0.0" length : 24 customProvider : cloudIap : {} target : loadBalancingScheme : EXTERNAL MANAGED resources : - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ LOCATION /forwardingRules/ FORWARDING RULE ID EOF Run the following command to enable IAP on a forwarding rule. gcloud network-security authz-policies import AUTHZ POLICY NAME \ --source=policy.yaml \ --location= LOCATION \ --project= PROJECT ID Replace the following: PROJECT ID : The Google Cloud project ID.
- API Run the following command to prepare a settings.json file. cat << EOF > settings.json { "iap": { "enabled":true } } EOF Run the following command to enable IAP. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @settings.json \ "https://compute.googleapis.com/compute/v1/projects/ PROJECT ID / REGION /backendServices/ BACKEND SERVICE NAME " After you enable IAP, you can use the Google Cloud CLI to modify the IAP access policy using the IAM role roles/iap.httpsResourceAccessor .

### Method: getIamPolicy \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy)
- Source ID: `site-api-reference`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- IAM Permissions Requires one of the following IAM permissions on the resource resource, depending on the resource type: iap.gateway.getIamPolicy iap.tunnel.getIamPolicy iap.tunnelDestGroups.getIamPolicy iap.tunnelInstances.getIamPolicy iap.tunnelLocations.getIamPolicy iap.tunnelZones.getIamPolicy iap.web.getIamPolicy iap.webServices.getIamPolicy iap.webServiceVersions.getIamPolicy iap.webTypes.getIamPolicy For more information, see the IAM documentation .
- More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing access via the api HTTP request POST https://iap.googleapis.com/v1/{resource= }:getIamPolicy The URL uses gRPC Transcoding syntax.
- Request body The request body contains data with the following structure: JSON representation { "options" : { object ( GetPolicyOptions ) } } Fields options object ( GetPolicyOptions ) OPTIONAL: A GetPolicyOptions object for specifying options to v1.getIamPolicy .
- Home Documentation Security Identity-Aware Proxy Reference Send feedback Method: getIamPolicy Stay organized with collections Save and categorize content based on your preferences.

### Method: setIamPolicy \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- IAM Permissions Requires one of the following IAM permissions on the resource resource, depending on the resource type: iap.gateway.setIamPolicy iap.tunnel.setIamPolicy iap.tunnelDestGroups.setIamPolicy iap.tunnelInstances.setIamPolicy iap.tunnelLocations.setIamPolicy iap.tunnelZones.setIamPolicy iap.web.setIamPolicy iap.webServices.setIamPolicy iap.webServiceVersions.setIamPolicy iap.webTypes.setIamPolicy For more information, see the IAM documentation .
- More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing access via the api HTTP request POST https://iap.googleapis.com/v1/{resource= }:setIamPolicy The URL uses gRPC Transcoding syntax.
- Home Documentation Security Identity-Aware Proxy Reference Send feedback Method: setIamPolicy Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]


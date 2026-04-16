---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:10:45.841Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "BeyondCorp Enterprise Policy Remediator"
feature_slug: "beyondcorp-enterprise-policy-remediator"
latest_feature_date: "2023-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/policy-remediator"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps"
keywords:
  - "remediator"
  - "provides"
  - "guided"
  - "steps"
  - "policy"
  - "users"
  - "beyondcorp"
---

# BeyondCorp Enterprise Policy Remediator

Product: Chrome Enterprise Premium
Coverage: MEDIUM

## Step 02 Summary

The BeyondCorp Enterprise Policy Remediator provides users with guided steps to remediate access-denied issues.

## Extended Definition

The BeyondCorp Enterprise Policy Remediator provides users with guided steps to remediate access-denied issues.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/policy-remediator](https://docs.cloud.google.com/chrome-enterprise-premium/docs/policy-remediator)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)

## Supporting Pages

### "Remediate denied access with the Policy Remediator \_|\_ Chrome Enterprise\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/policy-remediator](https://docs.cloud.google.com/chrome-enterprise-premium/docs/policy-remediator)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use the Policy Remediator to provide users with actionable steps that they can take to remediate their issue before reaching out to an administrator for additional help.
- Grant the remediator role To give users permission to remediate denied access to IAP resources, run the following command in the Google Cloud CLI: gcloud iap web add-iam-policy-binding \ --member=' PRINCIPAL ' \ --role='roles/iap.remediatorUser' Replace PRINCIPAL with an identifier for the principal, or member, which usually has the following form: PRINCIPAL TYPE:ID .
- To give users permission to remediate access to IAP resources at a project level, run the following command in the Google Cloud CLI: gcloud projects add-iam-policy-binding PROJECT ID \ --member PRINCIPAL \ --role roles/iap.remediatorUser Replace the following: PROJECT ID : the Google Cloud project ID.
- Policy attributes and associated messages The following table provides the list of attributes that are supported by the Policy Remediator.

### "Secure access to SaaS applications \_|\_ Chrome Enterprise Premium \_|\_\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example policy grants access only if the source IP address is within a specified access level: { "version" : 3 , "bindings" : [ { "role" : "roles/beyondcorp.securityGatewayUser" , "members" : [ "group:group@example.com" ], "condition" : { "expression" : "request.auth.access levels.contains('accessPolicies/1234567890/accessLevels/in us')" , "title" : "Source IP must be in US" } } ], "etag" : "BwXN8 d-bOM=" } To apply this policy, follow the steps described earlier.
- The following example policy grants access only if the source IP address is within a specified access level: { "version" : 3 , "bindings" : [ { "role" : "roles/beyondcorp.securityGatewayUser" , "members" : [ "group:group@example.com" ], "condition" : { "expression" : "request.auth.access levels.contains('accessPolicies/1234567890/accessLevels/in us')" , "title" : "Source IP must be in US" } } ], "etag" : "BwXN8 d-bOM=" } To apply this policy, follow the steps described earlier.
- This command uses the etag from your file to ensure that you update the correct version. jq '{policy: .}' policy.json curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d @- \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications/ APPLICATION ID :setIamPolicy" Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway APPLICATION ID : the ID of the application resource Add a conditional access policy You can also set access policies with conditions.
- The following command retrieves the policy and saves it to a file named policy.json . curl \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications/ APPLICATION ID :getIamPolicy" > policy.json Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway APPLICATION ID : the ID of the application resource The command creates a policy.json file that contains the current policy.

### "Secure access to private web applications \_|\_ Chrome Enterprise Premium\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example policy grants access only if the source IP address is within a specified access level: { "version" : 3 , "bindings" : [ { "role" : "roles/beyondcorp.securityGatewayUser" , "members" : [ "group:group@example.com" ], "condition" : { "expression" : "request.auth.access levels.contains('accessPolicies/1234567890/accessLevels/in us')" , "title" : "Source IP must be in US" } } ], "etag" : "BwXN8 d-bOM=" } To apply this policy, follow the steps described earlier.
- The following example policy grants access only if the source IP address is within a specified access level: { "version" : 3 , "bindings" : [ { "role" : "roles/beyondcorp.securityGatewayUser" , "members" : [ "group:group@example.com" ], "condition" : { "expression" : "request.auth.access levels.contains('accessPolicies/1234567890/accessLevels/in us')" , "title" : "Source IP must be in US" } } ], "etag" : "BwXN8 d-bOM=" } To apply this policy, follow the steps described earlier.
- To create the application resource, click Create . gcloud To create the application resource using gcloud, run the following command: gcloud beyondcorp security-gateways applications create APPLICATION ID \ --project = PROJECT ID \ --security-gateway = SECURITY GATEWAY ID \ --location = global \ --display-name = " APP DISPLAY NAME " \ --endpoint-matchers = "hostname= HOST NAME ,ports=[ 443 ]" \ --upstreams = network = name = " PRIVATE NETWORK RESOURCE NAME " To specify an egress region (for example, when using static routes), add the --egress-regions flag: gcloud beyondcorp security-gateways applications create APPLICATION ID \ --project = PROJECT ID \ --security-gateway = SECURITY GATEWAY ID \ --location = global \ --display-name = " APP DISPLAY NAME " \ --endpoint-matchers = "hostname= HOST NAME ,ports=[ 443 ]" \ --upstreams = network = name = " PRIVATE NETWORK RESOURCE NAME " ,egressPolicy = regions = us-central1 Replace us-central1 with the Google Cloud region (such as europe-west1 or asia-northeast1 ) that aligns with your regional static routing setup.
- REST To create an application resource with the API, complete the following steps: Create a file named application.json . { "display name" : " APP DISPLAY NAME " , "endpoint matchers" : [ { "hostname" : " HOST NAME " , "ports" : [ 443 ]} ], "upstreams" : [{ "network" : { "name" : " PRIVATE NETWORK RESOURCE NAME " } }] } To specify an egress region (for example, when using static routes), add an egress policy to the upstream configuration: { "display name" : " APP DISPLAY NAME " , "endpoint matchers" : [ { "hostname" : " HOST NAME " , "ports" : [ 443 ]} ], "upstreams" : [{ "network" : { "name" : " PRIVATE NETWORK RESOURCE NAME " }, "egress policy" : { "regions" : [ "us-central1" ] } }] } Replace us-central1 with the Google Cloud region (such as europe-west1 or asia-northeast1 ) that aligns with your regional static routing setup.


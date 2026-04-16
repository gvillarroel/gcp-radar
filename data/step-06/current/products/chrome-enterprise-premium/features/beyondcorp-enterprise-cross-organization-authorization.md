---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:10:45.842Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "BeyondCorp Enterprise cross-organization authorization"
feature_slug: "beyondcorp-enterprise-cross-organization-authorization"
latest_feature_date: "2023-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/cross-org-authorization"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps"
keywords:
  - "authorization"
  - "policies"
  - "cross"
  - "organization"
  - "trust"
  - "allows"
  - "beyondcorp"
---

# BeyondCorp Enterprise cross-organization authorization

Product: Chrome Enterprise Premium
Coverage: MEDIUM

## Step 02 Summary

Cross-organization authorization allows BeyondCorp Enterprise policies to trust and use attributes from other organizations for access control.

## Extended Definition

Cross-organization authorization allows BeyondCorp Enterprise policies to trust and use attributes from other organizations for access control.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/cross-org-authorization](https://docs.cloud.google.com/chrome-enterprise-premium/docs/cross-org-authorization)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps)

## Supporting Pages

### "Configure authorization across organizations \_|\_ Chrome Enterprise Premium\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/cross-org-authorization](https://docs.cloud.google.com/chrome-enterprise-premium/docs/cross-org-authorization)
- Source ID: `site-iam-reference`
- Final score: 211
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Expected post-configuration policies Following are the policies for the resource and partner organizations after cross-org authorization is configured: Resource organization (organizations/RESOURCE ORG ID): access policy : access level : SP1 -- "requireScreenlock" : true AuthorizedorgsDesc : AOD1 -- authorizationtype : trust -- asset type : device -- authorization direction : from -- orgs : [ organizations / PARTNER ORG ID ] Partner organization (organizations/PARTNER ORG ID): access policy : AuthorizedOrgsDesc : AOD2 -- authorizationtype : trust -- asset type : device -- authorization direction : to -- orgs : [ organizations / RESOURCE ORG ID ] The following image shows the visibility of the device attributes of the partner organization after cross-org authorization is configured.
- Following are the policies for the resource and partner organizations before cross-org authorization is configured: Resource organization (organizations/RESOURCE ORG ID): access policy: access level: SP1 --"requireScreenlock": true Partner organization (organizations/PARTNER ORG ID): no access policy In the following image, the device attributes of the device in the partner organization are not visible to the resource organization because cross-org authorization is not configured.
- Cross-org authorization lets you configure an access policy to trust and use data, such as device attributes, owned by other organizations.
- Create an AuthorizedOrgsDesc resource and authorize external organizations To create an AuthorizedOrgsDesc resource and include the external organizations to which you want to grant access, run the following command: gcloud access-context-manager authorized-orgs create AUTHORIZED ORGS DESC NAME --authorization type=AUTHORIZATION TYPE TRUST --asset type=ASSET TYPE DEVICE --authorization direction=AUTHORIZATION DIRECTION FROM --orgs= ORG ID --policy= ACCESS POLICY NUMBER Replace the following: AUTHORIZED ORGS DESC NAME : A unique name for the AuthorizedOrgsDesc resource.

### "Secure access to private web applications \_|\_ Chrome Enterprise Premium\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This command uses the etag from your file to ensure that you update the correct version. jq '{policy: .}' policy.json curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d @- \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications/ APPLICATION ID :setIamPolicy" Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway APPLICATION ID : the ID of the application resource Add a conditional access policy You can also set access policies with conditions.
- You can track the progress in the Notifications section of the Google Cloud console. gcloud To create a secure gateway using gcloud, run the following command: gcloud beyondcorp security-gateways create SECURITY GATEWAY ID \ --project = PROJECT ID \ --location = global \ --display-name = " SECURITY GATEWAY DISPLAY NAME " REST To create a secure gateway using the REST API, run the following command: curl \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -X POST \ -d '{ "display name": " SECURITY GATEWAY DISPLAY NAME " }' \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways?security gateway id= SECURITY GATEWAY ID " Configure a private web application Before you can define specific application resources in the secure gateway, you must configure the necessary permissions and network settings to enable connectivity and proper routing.
- The following command retrieves the policy and saves it to a file named policy.json . curl \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications/ APPLICATION ID :getIamPolicy" > policy.json Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway APPLICATION ID : the ID of the application resource The command creates a policy.json file that contains the current policy.
- This command uses the etag from your file to ensure that you update the correct version. gcloud beta beyondcorp security-gateways applications set-iam-policy APPLICATION ID policy.json \ --security-gateway = SECURITY GATEWAY ID \ --project = PROJECT ID \ --location = global Replace the following: APPLICATION ID : the ID of the application resource SECURITY GATEWAY ID : the ID of the secure gateway PROJECT ID : the ID of the project where the secure gateway is configured Add a conditional access policy You can also set access policies with conditions.

### "Secure access to SaaS applications \_|\_ Chrome Enterprise Premium \_|\_\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This command uses the etag from your file to ensure that you update the correct version. jq '{policy: .}' policy.json curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d @- \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications/ APPLICATION ID :setIamPolicy" Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway APPLICATION ID : the ID of the application resource Add a conditional access policy You can also set access policies with conditions.
- To create, save your settings and create the application, click Create . gcloud To create a SaaS application using gcloud, run the following command: gcloud beyondcorp security-gateways applications create APPLICATION ID \ --project = PROJECT ID \ --security-gateway = SECURITY GATEWAY ID \ --location = global \ --display-name = " APPLICATION DISPLAY NAME " \ --endpoint-matchers = "hostname= HOST NAME ,ports= 443 " REST To create a SaaS application using the REST API, run the following command: curl \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -X POST \ -d "{ \"display name\": \" APPLICATION DISPLAY NAME \", \"endpoint matchers\": [{hostname: \" HOST NAME \", ports: 443 }] }" \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications?application id= APPLICATION ID " Configure Google Chrome proxy mode You can route application traffic through the secure gateway by applying a PAC file in the Chrome settings in the Google Admin console.
- The following command retrieves the policy and saves it to a file named policy.json . curl \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications/ APPLICATION ID :getIamPolicy" > policy.json Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway APPLICATION ID : the ID of the application resource The command creates a policy.json file that contains the current policy.
- This command uses the etag from your file to ensure that you update the correct version. gcloud beta beyondcorp security-gateways applications set-iam-policy APPLICATION ID policy.json \ --security-gateway = SECURITY GATEWAY ID \ --project = PROJECT ID \ --location = global Replace the following: APPLICATION ID : the ID of the application resource SECURITY GATEWAY ID : the ID of the secure gateway PROJECT ID : the ID of the project where the secure gateway is configured Add a conditional access policy You can also set access policies with conditions.


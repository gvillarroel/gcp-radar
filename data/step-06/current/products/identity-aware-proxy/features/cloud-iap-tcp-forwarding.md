---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.776Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Cloud IAP TCP forwarding"
feature_slug: "cloud-iap-tcp-forwarding"
latest_feature_date: "2019-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/managing-access"
  - "https://docs.cloud.google.com/iap/docs/customizing"
  - "https://docs.cloud.google.com/iap/docs/auth-policies"
  - "https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto"
keywords:
  - "iap"
  - "tcp"
  - "forwarding"
  - "lets"
  - "you"
  - "control"
  - "access"
  - "to"
---

# Cloud IAP TCP forwarding

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Cloud IAP TCP forwarding lets you control access to administrative services like SSH and RDP on backends; Cloud IAP TCP forwarding lets you control access to administrative services like SSH and RDP on backends.

## Extended Definition

Cloud IAP TCP forwarding lets you control access to administrative services like SSH and RDP on backends; Cloud IAP TCP forwarding lets you control access to administrative services like SSH and RDP on backends.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing)
- [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies)
- [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)

## Supporting Pages

### "Manage access to IAP-secured resources \_|\_ Identity-Aware Proxy \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- Source ID: `site-iam-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're using IAP to control access to administrative services like SSH and RDP, users will need the iap.tunnelInstances.accessViaIAP permission.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Manage access to IAP-secured resources Stay organized with collections Save and categorize content based on your preferences.
- Manage access in the Google Cloud console To control access to a IAP-secured resource with the Google Cloud console, follow the process to add or remove access.
- Before you begin Before you begin, you'll need the following: An IAP-secured resource to which you want to add individual or group access.

### Customize IAP \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure settings for web-based IAP resources but not resources accessed with IAP for TCP forwarding .
- Customize IAP settings IAP provides the following customization settings: Field Description access settings.cors settings.allow http options Control HTTP OPTIONS (CORS preflight) access settings.oauth settings.login hint Simplify login for users of a G Suite domain application settings.access denied page settings.access denied page uri Show a custom error page when access is denied application settings.csm settings.rctoken aud Issue GKE Enterprise and Istio RCTokens access settings.gcip settings Authenticate with Identity Platform access settings.ReauthSettings Set a reauthentication policy.
- Field Default value application settings.access denied page settings.access denied page uri "" You can set a URL in this field that redirects users to a custom page instead of the default IAP error page whenever access is denied by a policy.
- Field Default value access settings.oauth settings.login hint "" If only members of a specific Google Workspace domain will use your app, you can configure IAP to optimize the authentication flow.

### "Use authorization policies to delegate authorization to IAP and IAM \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Configure permission at the organization level organization/ ORGANIZATION Configure permission at the folder level folders/ FOLDER Configure permission at the project level projects/ PROJECT ID Configure permission for all global forwarding rules in a project projects/ PROJECT ID /forwarding rule Configure permission for all forwarding rules in a project in a region projects/ PROJECT ID /iap web/forwarding rule- REGION Configure permission for a specific global forwarding rule in a project projects/ PROJECT ID /iap web/forwarding rule/services/ SERVICE Configure permission for a specific forwarding rule in a project in a region projects/ PROJECT ID /iap web/forwarding rule- REGION /services/ SERVICE Set the authorization policy curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @policy.json \ "https://iap.googleapis.com/v1/RESOURCE NAME:setIamPolicy" For policy.json , you can create the JSON file by running the following command.
- To delegate authorization to IAP and Identity and Access Management (IAM), you authorize traffic to a forwarding rule based on IAM or end-user identities for managed load balancers.
- This lets you enforce IAP-based access control for your backend services.
- Following is an example YAML file: bindings : members : user:example@example.com role : roles/iap.httpsResourceAccessor Update the permission for who can access the forwarding rule resource gcloud iap web set-iam-policy POLICY FILE [--organization= ORGANIZATION \ --folder= FOLDER --project= PROJECT ID \ --resource-type= RESOURCE TYPE --service= SERVICE ] Configure permission at the organization level gcloud iap web set-iam-policy POLICY FILE --organization= ORGANIZATION Configure permission at the folder level gcloud iap web set-iam-policy POLICY FILE --folder= FOLDER Configure permission at the project level gcloud iap web set-iam-policy POLICY FILE --project= PROJECT ID --resource-type=iap web Configure permission for all global forwarding rules in a project gcloud iap web set-iam-policy POLICY FILE --project= PROJECT ID --resource-type=forwarding rule Configure permission for all forwarding rules in a project in a region gcloud iap web set-iam-policy POLICY FILE --project= PROJECT ID \ --resource-type=forwarding rule --region= REGION Configure permission for a specific global forwarding rule in a project gcloud iap web set-iam-policy POLICY FILE --project= PROJECT ID \ --resource-type=forwarding rule --service= SERVICE Configure permission for a specific forwarding rule in a project in a region gcloud iap web set-iam-policy POLICY FILE --project= PROJECT ID \ --resource-type=forwarding rule --service= SERVICE --region= REGION Replace the following: POLICY FILE : The path to a YAML file that contains a valid policy.

### "Setting up context-aware access with Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Example policy.json file { "policy" : { "bindings" : [ { "role" : "roles/iap.httpsResourceAccessor" , "members" : [ "group" : EXAMPLE GROUP@GOOGLE.COM , "user: EXAMPLE USER@GOOGLE.COM " ], "condition" : { "expression" : "" accessPolicies/ ORGANIZATION NUMBER /accessLevels/ ACCESS LEVEL NAME " in request.auth.access levels && request.path.startsWith(" / ")" , "title" : " CONDITION NAME " } } ] } } Set your new policy.json file using the setIamPolicy method. curl -i -H "Content-Type:application/json" \ -H "Authentication: Bearer $(gcloud auth print-access-token)" \ ${IAP BASE URL}/compute/services/${BACKEND SERVICE NAME}:setIamPolicy \ -d @${JSON NEW POLICY} Use hostname and path conditions Access to your app can be secured using the hostname and path of a request URL.
- Example policy.json file { "policy" : { "bindings" : [ { "role" : "roles/iap.httpsResourceAccessor" , "members" : [ "group: EXAMPLE GROUP@GOOGLE.COM " , "user: EXAMPLE USER@GOOGLE.COM " ], "condition" : { "expression" : "" accessPolicies/ ORGANIZATION NUMBER /accessLevels/ ACCESS LEVEL NAME " in request.auth.access levels && request.path.startsWith(" / ")" , "title" : " CONDITION NAME " } } ] } } Set your new policy.json file using the setIamPolicy method. curl -i -H "Authentication: Bearer $(gcloud auth print-access-token)" \ ${GAE BASE URL}:setIamPolicy -d @${JSON NEW POLICY} App Engine services and versions You can also update the IAM policy of a App Engine service, all versions, or a specific version of a service.
- The empty data bit at the end turns the curl request into POST instead of GET. curl -i -H "Authentication: Bearer $(gcloud auth print-access-token)" \ ${IAP BASE URL}/compute/services/${BACKEND SERVICE NAME}:getIamPolicy \ -d '' Add your IAM conditional binding to the IAM policy JSON file.
- Cloud Audit Logs and access levels Enabling Cloud Audit Logs for your IAP-secured project lets you see authorized and unauthorized access requests.


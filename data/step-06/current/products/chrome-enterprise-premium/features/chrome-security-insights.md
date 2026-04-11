---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:30:05.310Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "Chrome Security Insights"
feature_slug: "chrome-security-insights"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/intune-overview"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps"
keywords:
  - "chrome"
  - "security"
  - "insights"
  - "enables"
  - "enhanced"
  - "monitoring"
  - "of"
  - "activity"
---

# Chrome Security Insights

Product: Chrome Enterprise Premium
Coverage: LOW

## Step 02 Summary

Chrome Security Insights enables enhanced monitoring of Chrome activity to help detect insider risk and data loss; Chrome Security Insights is available to protect against insider risk and data loss through enhanced monitoring of Chrome activity across an organization.

## Extended Definition

Chrome Security Insights enables enhanced monitoring of Chrome activity to help detect insider risk and data loss; Chrome Security Insights is available to protect against insider risk and data loss through enhanced monitoring of Chrome activity across an organization.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes](https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/intune-overview](https://docs.cloud.google.com/chrome-enterprise-premium/docs/intune-overview)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)

## Supporting Pages

### Chrome Enterprise Premium release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes](https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- April 08, 2024 Feature You can now enable Chrome Security Insights to monitor insider risk and data loss with enhanced monitoring for Chrome activity if you have Chrome Enterprise Core and Workspace Enterprise Standard or Workspace Enterprise Plus with assigned licenses.
- December 14, 2023 Feature General Availability : You can now protect against insider risk and data loss with enhanced monitoring of Chrome activity across your organization.
- Home Documentation Security Chrome Enterprise Premium Resources Send feedback Chrome Enterprise Premium release notes Stay organized with collections Save and categorize content based on your preferences.
- These messages are shown to end users when their actions are blocked as a result of a rule triggering in Chrome.

### "Overview of Chrome Enterprise Premium integration with Microsoft Intune\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/intune-overview](https://docs.cloud.google.com/chrome-enterprise-premium/docs/intune-overview)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Security Chrome Enterprise Premium Guides Send feedback Overview of Chrome Enterprise Premium integration with Microsoft Intune Stay organized with collections Save and categorize content based on your preferences.
- Access Context Manager , which is a part of Chrome Enterprise Premium, uses the device information collected by the BCE Intune connector, and provides security-based access control to your resources by using access levels.
- The following diagram shows how Chrome Enterprise Premium works with Intune: What's next Set up Chrome Enterprise Premium integration with Intune Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google's Chrome Enterprise Premium integrates with Microsoft Intune to let you ensure that the devices connecting to your organization's web resources and applications are authorized, secured, and managed as per your organization's policies.

### "Secure access to private web applications \_|\_ Chrome Enterprise Premium\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- You can track the progress in the Notifications section of the Google Cloud console. gcloud To create a secure gateway using gcloud, run the following command: gcloud beyondcorp security-gateways create SECURITY GATEWAY ID \ --project = PROJECT ID \ --location = global \ --display-name = " SECURITY GATEWAY DISPLAY NAME " REST To create a secure gateway using the REST API, run the following command: curl \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -X POST \ -d '{ "display name": " SECURITY GATEWAY DISPLAY NAME " }' \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways?security gateway id= SECURITY GATEWAY ID " Configure a private web application Before you can define specific application resources in the secure gateway, you must configure the necessary permissions and network settings to enable connectivity and proper routing.
- This command uses the etag from your file to ensure that you update the correct version. jq '{policy: .}' policy.json curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d @- \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications/ APPLICATION ID :setIamPolicy" Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway APPLICATION ID : the ID of the application resource Add a conditional access policy You can also set access policies with conditions.
- The following command retrieves the policy and saves it to a file named policy.json . curl \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications/ APPLICATION ID :getIamPolicy" > policy.json Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway APPLICATION ID : the ID of the application resource The command creates a policy.json file that contains the current policy.
- Search for the following extension, and then require it to be installed for all of the users in the organization unit or group: ekajlcmdfcigmdbphhifahdfjbkciflj Click the installed extension, and in the Policy for extensions field, enter the following JSON value: { "securityGateway" : { "Value" : { "authentication" : {}, "context" : { "resource" : "projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID " } } } } Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway To save the configuration, click Save .


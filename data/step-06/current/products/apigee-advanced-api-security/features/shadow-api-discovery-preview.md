---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.422Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Shadow API Discovery preview"
feature_slug: "shadow-api-discovery-preview"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions"
keywords:
  - "undocumented"
  - "introduces"
  - "identify"
  - "discovery"
  - "shadow"
  - "preview"
---

# Shadow API Discovery preview

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Advanced API Security introduces Shadow API Discovery in preview to identify undocumented shadow APIs in existing infrastructure.

## Extended Definition

Advanced API Security introduces Shadow API Discovery in preview to identify undocumented shadow APIs in existing infrastructure.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)

## Supporting Pages

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Overview Preview — Shadow API Discovery This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Shadow API Discovery finds shadow APIs (also known as undocumented APIs) in your existing cloud infrastructure.
- Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin (roles/apigee.admin) Create observation sources and jobs API Management Admin (roles/apim.admin) View observations API Management Viewer (roles/apim.viewer) Access Shadow API Discovery in the Apigee UI This section describes how to access Shadow API Discovery in the Apigee UI.
- Behaviors and limitations This section lists behaviors and limitations that apply to Shadow API Discovery: Use of Shadow API Discovery does not guarantee observation of 100% of traffic or discovery of all shadow APIs.

### API observations in API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The API observations feature in API hub helps you address the challenges of undocumented and unmanaged APIs, also known as shadow APIs , which can introduce significant security and governance risks in your API infrastructure.
- Evolving from the Shadow API Discovery feature in Apigee, API observations in API hub uses automated discovery processes to find and catalog all your APIs—both known and unknown—into a single, unified, and managed view.
- However, since API observations in API hub leverages Shadow API discovery, which is part of the Apigee Advanced API Security add-on, you can incur charges related to your Apigee usage.
- Note: API observations in API hub relies on the Apigee Shadow API Discovery feature, which is included as part of the paid Apigee Advanced API Security add-on .

### Security actions overview and UI | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- Source ID: `feature-recovery-direct-http`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- API MONITORING API Monitoring overview Compare API Monitoring with Apigee Analytics Using the Timeline view Using the Investigate view Using the Recent view Setting up alerts and notifications Examples of alerts Fault codes ADVANCED API SECURITY Overview of Advanced API Security Apigee and Apigee hybrid Overview Getting started Detection rules Best practices Security reports Overview Manage security reports in the UI Manage security reports using the API Risk assessment Risk assessment overview and UI Security scores and profiles API Abuse detection Abuse detection UI Security stats API Incidents API Security feedback API Security alerts Security actions Security actions overview and UI Security actions API Multi-gateway risk assessment Overview API OBSERVATION Overview of API Observation Shadow APIs Shadow API Discovery overview Shadow API Discovery management APIs Shadow API Discovery audit logging Application Integration Use Application Integration Application Integration and Apigee proxy Integration target Subscription entitlements Application Integration policies IntegrationCallout policy SetIntegrationRequest policy Connectors Overview Get started with connectors Release notes API HUB What is Apigee API hub?
- One way to identify which requests to take action on is to use the Abuse detection Detected traffic or Incident views, which show IP addresses and API keys that are sources of abuse.
- Preview — Advanced API Security Actions This feature is covered by the Pre-GA Offerings Terms of the Google Cloud Terms of Service.
- Support for the Preview launch of Advanced API Security Actions is available through the Apigee - Google Cloud Community forum.


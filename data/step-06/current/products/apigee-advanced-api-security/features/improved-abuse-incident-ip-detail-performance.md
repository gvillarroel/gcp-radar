---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.412Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Improved abuse incident IP detail performance"
feature_slug: "improved-abuse-incident-ip-detail-performance"
latest_feature_date: "2025-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions"
  - "https://docs.cloud.google.com/apigee/docs/api-security/detection-rules"
keywords:
  - "detail"
  - "performance"
  - "improved"
  - "incident"
  - "detection"
  - "abuse"
---

# Improved abuse incident IP detail performance

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Abuse Detection now loads IP address-specific incident detail information faster for high-traffic IPs.

## Extended Definition

Abuse Detection now loads IP address-specific incident detail information faster for high-traffic IPs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)

## Supporting Pages

### Abuse detection \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- Source ID: `site-docs-reference-required-7`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Insights : Abuse detection incident details might include generative AI insights created using Google Cloud generative AI large language models (LLMs) .
- Exclude traffic using the abuse detection incident details page To exclude one or multiple IP addresses : View the details for an incident.
- You can access abuse detection either through the Apigee UI, as described below, or through the Incidents API or the Security stats API See Required roles and permissions for abuse detection for the roles and permissions needed to use abuse detection.
- Abuse Detail tab If the incident or detected traffic includes detected anomalies, the Abuse Detail tab shows information about the detected anomalous events, including time series graphs of traffic from the IP address with anomalous events indicated.

### Security actions overview and UI | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- Source ID: `feature-recovery-direct-http`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The information displayed in the Attributes page is similar the Attributes view for the Abuse detection Incident details attributes .
- API MONITORING API Monitoring overview Compare API Monitoring with Apigee Analytics Using the Timeline view Using the Investigate view Using the Recent view Setting up alerts and notifications Examples of alerts Fault codes ADVANCED API SECURITY Overview of Advanced API Security Apigee and Apigee hybrid Overview Getting started Detection rules Best practices Security reports Overview Manage security reports in the UI Manage security reports using the API Risk assessment Risk assessment overview and UI Security scores and profiles API Abuse detection Abuse detection UI Security stats API Incidents API Security feedback API Security alerts Security actions Security actions overview and UI Security actions API Multi-gateway risk assessment Overview API OBSERVATION Overview of API Observation Shadow APIs Shadow API Discovery overview Shadow API Discovery management APIs Shadow API Discovery audit logging Application Integration Use Application Integration Application Integration and Apigee proxy Integration target Subscription entitlements Application Integration policies IntegrationCallout policy SetIntegrationRequest policy Connectors Overview Get started with connectors Release notes API HUB What is Apigee API hub?
- One way to identify which requests to take action on is to use the Abuse detection Detected traffic or Incident views, which show IP addresses and API keys that are sources of abuse.
- For example, you can create a security action to deny requests from an IP address that has been identified by Abuse Detection as abuse and block them from accessing your APIs.

### Detection rules \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- Source ID: `site-docs-reference-required-8`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Note that one incident might be triggered by multiple detection rules, in which case all of the rules that triggered the incident are listed in the Abuse detection Environment details view.
- Note: The Advanced API Security Abuse detection page uses detection rules to detect security incidents.
- Model behavior To reduce the risk that bad actors can exploit the model, we do not expose specific details about how the model works or how incidents are detected.
- Limitations For Abuse Detection Advanced Anomaly Detection: Anomalies are detected at the environment level.


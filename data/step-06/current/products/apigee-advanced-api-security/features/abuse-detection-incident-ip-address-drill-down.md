---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.417Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Abuse Detection incident IP address drill-down"
feature_slug: "abuse-detection-incident-ip-address-drill-down"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-security/detection-rules"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions"
keywords:
  - "drill"
  - "down"
  - "address"
  - "incident"
  - "detection"
  - "abuse"
---

# Abuse Detection incident IP address drill-down

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Advanced API Security Abuse Detection incidents now include preview functionality to drill down and view incident details by source IP address.

## Extended Definition

Advanced API Security Abuse Detection incidents now include preview functionality to drill down and view incident details by source IP address.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)

## Supporting Pages

### Abuse detection \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- Source ID: `site-docs-reference-required-7`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Exclude traffic using the abuse detection incident details page To exclude one or multiple IP addresses : View the details for an incident.
- For example, you don't need to wait for an IP address to appear in an abuse detection incident to exclude it from detection.
- When Advanced API Security detects a security incident, it reports the following: The risk level and duration of the incident The proxies affected by the incident The IP addresses of the incident events The detection rules that were triggered by the incident The countries of origin of the incident and other related information about the incident.
- You can access abuse detection either through the Apigee UI, as described below, or through the Incidents API or the Security stats API See Required roles and permissions for abuse detection for the roles and permissions needed to use abuse detection.

### Detection rules \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- Source ID: `site-docs-reference-required-8`
- Final score: 161
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note that one incident might be triggered by multiple detection rules, in which case all of the rules that triggered the incident are listed in the Abuse detection Environment details view.
- Note: The Advanced API Security Abuse detection page uses detection rules to detect security incidents.
- Brute Guessor High proportion of response errors (4xx and 5xx) during previous 24 hours Flooder High proportion of traffic from an IP address in a 5-minute window OAuth Abuser Large number of OAuth sessions with small number of user agents during the previous 24 hours Robot Abuser Large number of 403 rejection errors in the past 24 hours Static Content Scraper High proportion of response payload size from an IP address in a 5-minute window TorListRule Tor exit nodes IP list.
- Two of the detection rules are based on machine learning models: Advanced API Scraper Advanced Anomaly Detection Note: The data used to train the machine learning models for the rules Advanced API Scraper and Advanced Anomaly Detection contain metadata, including source IP address, source geography, and the values of some HTTP request headers.

### Security actions overview and UI | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- Source ID: `feature-recovery-direct-http`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- One way to identify which requests to take action on is to use the Abuse detection Detected traffic or Incident views, which show IP addresses and API keys that are sources of abuse.
- API MONITORING API Monitoring overview Compare API Monitoring with Apigee Analytics Using the Timeline view Using the Investigate view Using the Recent view Setting up alerts and notifications Examples of alerts Fault codes ADVANCED API SECURITY Overview of Advanced API Security Apigee and Apigee hybrid Overview Getting started Detection rules Best practices Security reports Overview Manage security reports in the UI Manage security reports using the API Risk assessment Risk assessment overview and UI Security scores and profiles API Abuse detection Abuse detection UI Security stats API Incidents API Security feedback API Security alerts Security actions Security actions overview and UI Security actions API Multi-gateway risk assessment Overview API OBSERVATION Overview of API Observation Shadow APIs Shadow API Discovery overview Shadow API Discovery management APIs Shadow API Discovery audit logging Application Integration Use Application Integration Application Integration and Apigee proxy Integration target Subscription entitlements Application Integration policies IntegrationCallout policy SetIntegrationRequest policy Connectors Overview Get started with connectors Release notes API HUB What is Apigee API hub?
- For example, you can create a security action to deny requests from an IP address that has been identified by Abuse Detection as abuse and block them from accessing your APIs.
- The information displayed in the Attributes page is similar the Attributes view for the Abuse detection Incident details attributes .


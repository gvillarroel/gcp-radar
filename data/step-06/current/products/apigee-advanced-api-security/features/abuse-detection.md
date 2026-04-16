---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.428Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Abuse detection"
feature_slug: "abuse-detection"
latest_feature_date: "2023-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-security/detection-rules"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions"
keywords:
  - "entered"
  - "surface"
  - "public"
  - "incidents"
  - "detection"
  - "preview"
  - "abuse"
---

# Abuse detection

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Abuse detection entered public preview to surface security incidents using machine learning, including Advanced Anomaly Detection and Advanced API Scraper detection rules.

## Extended Definition

Abuse detection entered public preview to surface security incidents using machine learning, including Advanced Anomaly Detection and Advanced API Scraper detection rules.

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
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can access abuse detection either through the Apigee UI, as described below, or through the Incidents API or the Security stats API See Required roles and permissions for abuse detection for the roles and permissions needed to use abuse detection.
- This could result in Apigee attributing an artificially large amount of traffic to that public IP address, which could then be flagged as an anomalous traffic pattern in Advanced API Security's Abuse Detection feature.
- Main Abuse detection page At the top of the page, you can select one of the following recent time periods in which to view incidents: the past 1 day , 1 week , or 2 weeks .
- Limitations on incidents and data displayed: The Abuse detection UI does not display incidents whose Last event detected is over 14 days in the past.

### Detection rules \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- Source ID: `site-docs-reference-required-8`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The Advanced API Security Abuse detection page uses detection rules to detect security incidents.
- Detection rule Description Preview: Advanced API Scraper A machine learning model that detects API scraping, which is the process of extracting targeted information from APIs for malicious purposes.
- Note that one incident might be triggered by multiple detection rules, in which case all of the rules that triggered the incident are listed in the Abuse detection Environment details view.
- Preview: Advanced Anomaly Detection A machine learning model for detecting anomalies—unusual patterns of events—in API traffic.

### Security actions overview and UI | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- Source ID: `feature-recovery-direct-http`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- API MONITORING API Monitoring overview Compare API Monitoring with Apigee Analytics Using the Timeline view Using the Investigate view Using the Recent view Setting up alerts and notifications Examples of alerts Fault codes ADVANCED API SECURITY Overview of Advanced API Security Apigee and Apigee hybrid Overview Getting started Detection rules Best practices Security reports Overview Manage security reports in the UI Manage security reports using the API Risk assessment Risk assessment overview and UI Security scores and profiles API Abuse detection Abuse detection UI Security stats API Incidents API Security feedback API Security alerts Security actions Security actions overview and UI Security actions API Multi-gateway risk assessment Overview API OBSERVATION Overview of API Observation Shadow APIs Shadow API Discovery overview Shadow API Discovery management APIs Shadow API Discovery audit logging Application Integration Use Application Integration Application Integration and Apigee proxy Integration target Subscription entitlements Application Integration policies IntegrationCallout policy SetIntegrationRequest policy Connectors Overview Get started with connectors Release notes API HUB What is Apigee API hub?
- One way to identify which requests to take action on is to use the Abuse detection Detected traffic or Incident views, which show IP addresses and API keys that are sources of abuse.
- For example, you can create a security action to deny requests from an IP address that has been identified by Abuse Detection as abuse and block them from accessing your APIs.
- The information displayed in the Attributes page is similar the Attributes view for the Abuse detection Incident details attributes .


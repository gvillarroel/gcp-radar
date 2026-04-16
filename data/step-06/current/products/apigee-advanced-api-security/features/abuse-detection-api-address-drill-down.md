---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.414Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Abuse Detection API address drill-down"
feature_slug: "abuse-detection-api-address-drill-down"
latest_feature_date: "2025-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-security/detection-rules"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions"
keywords:
  - "drill"
  - "down"
  - "detected"
  - "address"
  - "view"
  - "detection"
  - "traffic"
  - "abuse"
---

# Abuse Detection API address drill-down

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

The detected traffic view in Abuse Detection now includes preview support for drilling down into API address details for investigated abuse events.

## Extended Definition

The detected traffic view in Abuse Detection now includes preview support for drilling down into API address details for investigated abuse events.

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
- Final score: 249
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Exclude traffic using the abuse detection incident details page To exclude one or multiple IP addresses : View the details for an incident.
- Exclude traffic using the detected traffic page To exclude one or multiple IP addresses : Select an environment for abuse detection.
- The Detected Traffic view also displays a table listing the details of each IP address corresponding to the detected abuse.
- Attributes The Attributes view lets you drill down on the details of an incident or detected traffic.

### Detection rules \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- Source ID: `site-docs-reference-required-8`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Brute Guessor High proportion of response errors (4xx and 5xx) during previous 24 hours Flooder High proportion of traffic from an IP address in a 5-minute window OAuth Abuser Large number of OAuth sessions with small number of user agents during the previous 24 hours Robot Abuser Large number of 403 rejection errors in the past 24 hours Static Content Scraper High proportion of response payload size from an IP address in a 5-minute window TorListRule Tor exit nodes IP list.
- If there are significant shifts in traffic patterns (for example, a surge in traffic, error rates, or latency), the model flags the IP address that contributed to the anomaly in Detected Traffic.
- Note that one incident might be triggered by multiple detection rules, in which case all of the rules that triggered the incident are listed in the Abuse detection Environment details view.
- You can also combine anomaly detection with security actions to automatically flag or deny traffic that is detected as anomalous by the model.

### Security actions overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- Source ID: `site-docs-reference-required-4`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- One way to identify which requests to take action on is to use the Abuse detection Detected traffic or Incident views, which show IP addresses and API keys that are sources of abuse.
- For example, you can create a security action to deny requests from an IP address that has been identified by Abuse Detection as abuse and block them from accessing your APIs.
- The information displayed in the Attributes page is similar the Attributes view for the Abuse detection Incident details attributes .
- Total detected event traffic: The number of requests which were "detected" (triggered an abuse rule) in the environment.


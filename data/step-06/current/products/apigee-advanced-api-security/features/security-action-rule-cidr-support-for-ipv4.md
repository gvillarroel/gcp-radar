---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.423Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Security action rule CIDR support for IPv4"
feature_slug: "security-action-rule-cidr-support-for-ipv4"
latest_feature_date: "2024-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions"
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-security/detection-rules"
keywords:
  - "range"
  - "ipv4"
  - "cidr"
  - "rule"
  - "rules"
  - "action"
---

# Security action rule CIDR support for IPv4

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Security action rules now support CIDR range specification when matching IPv4 addresses.

## Extended Definition

Security action rules now support CIDR range specification when matching IPv4 addresses.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)

## Supporting Pages

### Security actions overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- Source ID: `site-docs-reference-required-4`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Under New condition , enter the following: Condition type: Can be either Detection rules or one of the following attributes: IP addresses/CIDR ranges , which can include IP addresses and IPv4 CIDR ranges at the same time.
- Notes: For the condition types Detection rules and IP addresses/CIDR ranges , you can create at most two conditions that have those types.
- Values: Enter one of the following: If Condition type is Detection rules , select a set of detection rules that a request must have triggered for the security action to be applied to it.
- For example, if the attribute is IP addresses/CIDR ranges , enter the IP addresses of the sources of the requests you want the security action to be applied to.

### Abuse detection \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- Source ID: `site-docs-reference-required-7`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- When Advanced API Security detects a security incident, it reports the following: The risk level and duration of the incident The proxies affected by the incident The IP addresses of the incident events The detection rules that were triggered by the incident The countries of origin of the incident and other related information about the incident.
- It shows detected rules, first and last detection dates, and attributes for detected traffic from the IP address of API key. (See the Analytics dimensions reference and the Security stats API dimensions for more information on the detail fields.) For IP addresses, the Details tab also includes information about related Ingress access logs .
- Mitigate large numbers of false positives If you're seeing a large number of false positives and internal IP addresses flagged as anomalies by Advanced API Security's Abuse Detection rules, follow the guidance in this section to mitigate the problem.
- Top rules detected : Displays up to five of the top groups of rules detected, including the following information: Dominant rules : The most significant detection rules that were triggered by the incident.

### Detection rules \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- Source ID: `site-docs-reference-required-8`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Two of the detection rules are based on machine learning models: Advanced API Scraper Advanced Anomaly Detection Note: The data used to train the machine learning models for the rules Advanced API Scraper and Advanced Anomaly Detection contain metadata, including source IP address, source geography, and the values of some HTTP request headers.
- Note that one incident might be triggered by multiple detection rules, in which case all of the rules that triggered the incident are listed in the Abuse detection Environment details view.
- Home Documentation Application development Apigee Guides Send feedback Detection rules Stay organized with collections Save and categorize content based on your preferences.
- Machine learning and detection rules Advanced API Security uses models built with Google's machine learning algorithms to detect security threats to your APIs.


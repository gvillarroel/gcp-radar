---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.428Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Detected Traffic view"
feature_slug: "detected-traffic-view"
latest_feature_date: "2023-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-report-jobs"
keywords:
  - "dedicated"
  - "show"
  - "bots"
  - "added"
  - "detected"
  - "view"
  - "traffic"
---

# Detected Traffic view

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

A dedicated Detected Traffic view was added to show API traffic from detected bots and related abuse signals.

## Extended Definition

A dedicated Detected Traffic view was added to show API traffic from detected bots and related abuse signals.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-report-jobs](https://docs.cloud.google.com/apigee/docs/api-security/security-report-jobs)

## Supporting Pages

### Abuse detection \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- Source ID: `site-docs-reference-required-7`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- It shows detected rules, first and last detection dates, and attributes for detected traffic from the IP address of API key. (See the Analytics dimensions reference and the Security stats API dimensions for more information on the detail fields.) For IP addresses, the Details tab also includes information about related Ingress access logs .
- Abuse Detail tab If the incident or detected traffic includes detected anomalies, the Abuse Detail tab shows information about the detected anomalous events, including time series graphs of traffic from the IP address with anomalous events indicated.
- This opens the Environment details view: If you see an incident or detected traffic, and want to create a security action to block or flag requests related to the incident or detected traffic, click Create Security Action at the top of the page.
- To open the Detected Traffic view, select Detected Traffic in the Environment details view: The Detected Traffic view displays data for: Total traffic : The total number of requests.

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Click Detected Traffic to view the Detected traffic tab in the Abuse detection page.
- Source: Shows the detected abuse traffic.
- Security scores assessment types There are three assessment types that contribute to the overall security score calculated by Advanced API Security: Source assessment: Assesses the detected abuse traffic, using the Advanced API Security detection rules . "Abuse" refers to requests sent to the API for purposes other than what the API is intended for.
- Source details The Source details pane displays details of detected abuse traffic in the environment, including: Traffic details : Detected traffic: The number of API calls originating from an IP address that has been detected as a source of abuse.

### Security reports overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-report-jobs](https://docs.cloud.google.com/apigee/docs/api-security/security-report-jobs)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Metric Description Aggregation function bot The number of distinct IP addresses for detected bots over one-minute intervals. count distinct bot traffic The number of messages from IP addresses of detected bots over one-minute intervals. sum message count Total number of API calls processed by Apigee in one-minute intervals.
- Reference security reports This table lists examples of security of reports that you can create using different metrics and dimensions: Report Metrics Dimensions All Bot Traffic & Bot Count Report for per environment bot , bot traffic environment Bot Traffic & Bot Count Report for different bot reasons bot , bot traffic bot reason Bot Traffic & Bot Count Report for different Countries bot , bot traffic ax geo country Bot Traffic & Bot Count Report for different ISPs bot , bot traffic ax isp Bot Detection Report (Detailed List View) bot traffic Resolved Client IP , ax isp , bot reason , request uri , client id Bot traffic per Access Token bot traffic access token Bot traffic per API proxy bot traffic apiproxy Bot traffic per Agent Family bot traffic ax ua agent family Bot traffic per User Agent bot traffic useragent Bot traffic per Agent Type bot traffic ax ua agent type Bot traffic per Device Category bot traffic ax ua device category Bot traffic per OS family bot traffic ax ua os family Bot traffic per Client ID bot traffic client id Bot traffic per Proxy Basepath bot traffic proxy basepath Bot traffic per Proxy Path Suffix bot traffic proxy pathsuffix Bot traffic per Request URI bot traffic request uri Bot traffic per Request Verb bot traffic request verb Bot traffic per Response Status Code bot traffic response status code Limitations on security reports Security reports have the following limitations: Data flowing into the Apigee Analytics pipeline has a delay of up to 15 to 20 minutes on average.
- The following table describes the dimensions that are specific to Advanced API Security: Dimension Description bot reason Can be any combination of the security detection rules . bot reason consists of the subset of the detection rules that the bot's traffic pattern matched. bot reason only works with the following metrics: bot bot traffic response size incident id (preview) The UUID for a security incident, which is returned by a call to the Incidents API.
- Note: If you add an environment after enabling Advanced API Security, you will need to re-enable it, by running the command shown in Enable Advanced API Security again, to view security reports for the new environment.


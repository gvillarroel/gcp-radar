---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.415Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Advanced API Security data obfuscation"
feature_slug: "advanced-api-security-data-obfuscation"
latest_feature_date: "2025-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
keywords:
  - "obfuscation"
  - "cases"
  - "available"
  - "including"
---

# Advanced API Security data obfuscation

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Data obfuscation support is now available for Advanced API Security use cases, including Apigee API Analytics-related protection.

## Extended Definition

Data obfuscation support is now available for Advanced API Security use cases, including Apigee API Analytics-related protection.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)

## Supporting Pages

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- 383372330 Apigee Emulator versions 1.13.0 up to but not including 1.15.1 FIXED in Apigee Emulator versions 1.15.1 and later All proxy deployments fail locally with error messages including Error parsing deployment report as JSON : 06 / 13 / 2025 6 : 45 PM EMULATOR INFO Deploying environment testenv , to Cont ainer apigee - 1.14.2 ( 1.14.2 ) 06 / 13 / 2025 6 : 45 PM EMULATOR ERROR Error parsing deployment report as JSON 06 / 13 / 2025 6 : 45 PM EMULATOR ERROR null 06 / 13 / 2025 6 : 45 PM EMULATOR ERROR Environment testenv deployment , to Cont ainer apigee - 1.14.2 ( 1.14.2 ) failed with Error : 500 06 / 13 / 2025 6 : 45 PM EMULATOR ERROR Deploy to Cont ainer apigee - 1.14.2 ( 1.14.2 ), failed with Error : Environment testenv deployment , to Cont ainer apigee - 1.14.2 ( 1.14.2 ) failed with Error : 500 Fix: Update to an Apigee Emulator version 1.15.1 or later.
- List the ingress-manager pods to reinstall or recreate: kubectl get deployments -n APIGEE NAMESPACE Example output: NAME READY UP-TO-DATE AVAILABLE AGE apigee-controller-manager 1/1 1 1 32d apigee-ingressgateway-manager 2/2 2 2 32d Restart the ingress-manager pods: kubectl rollout restart deployment -n APIGEE NAMESPACE apigee-ingressgateway-manager After a few minutes, monitor the apigee-ingressgateway-manager pods: watch -n 10 kubectl -n APIGEE NAMESPACE get pods -l app=apigee-ingressgateway-manager Example output: NAME READY STATUS RESTARTS AGE apigee-ingressgateway-manager-12345abcde-678wx 3/3 Running 0 10m apigee-ingressgateway-manager-12345abcde-901yz 3/3 Running 0 10m 414499328 hybrid 1.14.1 FIXED in hybrid 1.14.3 and hybrid 1.15.0 ApigeeTelemetry can become stuck in creating state.
- 422757662 Apigee 1-15-0-apigee-5 hybrid 1.15.0 FIXED in Apigee 1-15-0-apigee-7 and Apigee 1-15-0-apigee-8 x-b3 headers not available when DistributedTrace is disabled In the Apigee 1-15-0-apigee-5 and hybrid 1.15.0 releases, Apigee stopped sending x-b3 headers to target endpoints when Distributed Trace is disabled.
- Error: no connections available from the Apigee connect agent(s)." The problem occurs after enabling VPC service control in the Google Cloud project and adding iamcredentials.googleapis.com as one of the restricted services in the service perimeter.

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- The main feature differences between v1 and v2 are: v2 includes: Improved reliability, including faster score calculations with recent proxy data Score calculation without the need to first attach a security profile to an environment Simplified score presentation, based on a 0% to 100% scale The concept of assessment check weights, which v1 does not support.
- An assessment score that fluctuates could indicate that the API behavior is frequently changing, including proxies deployed without necessary security policies, shared flow modifications via flow hook deployments and FlowCallout policy additions, and target server changes in environment or proxy deployments.
- Data delays The data that Advanced API Security security scores have the following processing windows before results are available: When you enable Advanced API Security in an organization for the first time, it takes time for the scores for existing proxies and targets to be reflected in an environment.
- Source details The Source details pane displays details of detected abuse traffic in the environment, including: Traffic details : Detected traffic: The number of API calls originating from an IP address that has been detected as a source of abuse.

### Abuse detection \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- Source ID: `site-docs-reference-required-7`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Abuse Detail tab If the incident or detected traffic includes detected anomalies, the Abuse Detail tab shows information about the detected anomalous events, including time series graphs of traffic from the IP address with anomalous events indicated.
- Top rules detected : Displays up to five of the top groups of rules detected, including the following information: Dominant rules : The most significant detection rules that were triggered by the incident.
- Advanced API Security uses machine learning models to detect patterns that are a sign of malicious activity, including API scraping and anomalies, and cluster events together based on similar patterns.
- Raw data tab After clicking the IP address or API key, you can select the Raw data tab to see raw data for the detected traffic, including timestamps, request paths, and response status codes.


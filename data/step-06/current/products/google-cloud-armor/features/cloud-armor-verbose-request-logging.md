---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.943Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor verbose request logging"
feature_slug: "cloud-armor-verbose-request-logging"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/best-practices"
  - "https://docs.cloud.google.com/armor/docs/troubleshooting"
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/armor/docs/content-parsing"
keywords:
  - "armor"
  - "verbose"
  - "request"
  - "logging"
  - "can"
  - "emit"
  - "logs"
  - "that"
---

# Cloud Armor verbose request logging

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor can emit verbose request logs that explain why a particular rule was triggered.

## Extended Definition

Cloud Armor can emit verbose request logs that explain why a particular rule was triggered.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/best-practices](https://docs.cloud.google.com/armor/docs/best-practices)
- [https://docs.cloud.google.com/armor/docs/troubleshooting](https://docs.cloud.google.com/armor/docs/troubleshooting)
- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/armor/docs/content-parsing](https://docs.cloud.google.com/armor/docs/content-parsing)

## Supporting Pages

### Cloud Armor best practices \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/best-practices](https://docs.cloud.google.com/armor/docs/best-practices)
- Source ID: `site-iam-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Because verbose logging can cause end-user request content to be logged in Cloud Logging, there is a chance that you accumulate end-user PII in your logs.
- Verbose logging provides details from requests that trigger particular rules, including a snippet of the offending portion of the request, which is helpful for troubleshooting and tuning Cloud Armor.
- Choose a Cloud Logging sampling rate Cloud Armor per-request logs use the global external Application Load Balancer or the classic Application Load Balancer's logging infrastructure.
- After you finish tuning and implementing Cloud Armor, we recommend that you keep full request logging turned on; however, you might prefer to down-sample to a lower rate.

### "Troubleshoot Cloud Armor issues \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/troubleshooting](https://docs.cloud.google.com/armor/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check for the following fields and make sure that they match the rule that you configured to deny the traffic: configuredAction must match the action configured in the rule. name must match the name of the Cloud Armor security policy attached to this backend service. outcome must match configuredAction . priority must match the priority number of the rule. httpRequest: remoteIp: 104.133.0.95 requestMethod: GET requestSize: '801' requestUrl: http://74.125.67.38/ responseSize: '246' serverIp: 10.132.0.4 status: 200 userAgent: curl/7.35.0 insertId: ajvis5ev4i60 internalId: projectNumber: '895280006100' jsonPayload: '@type': type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry enforcedSecurityPolicy: configuredAction: ACCEPT name: mydev-policy-log-test1 outcome: ACCEPT priority: 2147483647 statusDetails: response sent by backend logName: projects/mydev-staging/logs/requests resource: labels: backend service name: BACKEND SERVICE NAME forwarding rule name: FORWARDING RULE NAME project id: PROJECT ID target proxy name: TARGET HTTP PROXY NAME url map name: URL MAP NAME zone: global type: http load balancer severity: INFO timestamp: '2017-04-18T18:57:05.845960288Z' This output includes the following values: BACKEND SERVICE NAME : the name of the backend service FORWARDING RULE NAME : the name of the forwarding rule PROJECT ID : the ID of your project TARGET HTTP PROXY NAME : the name of the target HTTP proxy URL MAP NAME : the name of the URL map Review the hierarchy of rules to ensure that the correct rule is matched.
- Adaptive Protection is enabled for a security policy but there are no logs in Cloud Logging Adaptive Protection logs are generated separately from Cloud Armor request logs and appear under a different resource in Cloud Logging.
- Cache hits are served even if the downstream Cloud Armor security policy can prevent that request from reaching the CDN origin server.
- Cloud Logging records a higher level of detail in your logs that you can use to analyze and debug your policies and rules.

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Alternatively, by using the Cloud Armor custom rules language reference , you can create custom conditions that match on various attributes of the incoming traffic, such as the URL path, request method, or request header values.
- Cloud Armor logs are generated based on the first (highest priority) rule that matches an incoming request, whether or not the security policy is in preview mode.
- External Application Load Balancer request logging Each HTTP(S) request that is evaluated against a Cloud Armor security policy is logged through Cloud Logging.
- Globally scoped security policies Backend security policy Edge security policy Internal service security policy Frontend type Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cloud Service Mesh clients Attachment point (protected resource) Backend service Backend service Backend service Backend bucket Cloud Service Mesh endpoint policy Rule actions Allow Deny Redirect ( GOOGLE RECAPTCHA and EXTERNAL 302 ) Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Fairshare Client IP address Client geography Client ASN Media CDN only Rate limiting TLS fingerprinting (JA3 and JA4) Bot management HTTP filtering Media CDN only WAF Adaptive Protection Address Group Google Threat Intelligence Media CDN only Security Command Center Cloud Monitoring Request logging Regionally scoped security policies Regional backend security policy Network edge security policy Frontend type Regional external Application Load Balancer Regional internal Application Load Balancer External passthrough Network Load Balancer External protocol forwarding VMs with NICs that have external IP addresses Attachment point (protected resource) Backend service (regional) Backend service (regional) Target pool Target instance Backend service (regional) Instance Rule actions Allow Deny Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Client IP address Client geography Client ASN Rate limiting TLS fingerprinting (JA3 and JA4) JA3 only JA3 only Bot management HTTP filtering WAF Adaptive Protection Address Group Google Threat Intelligence Byte offset filtering Security Command Center Cloud Monitoring Request logging Backend security policies Backend security policies are used with backend services exposed by the following load balancer types: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer You use backend security policies to filter requests and protect backend services that reference instance groups or any of the supported NEG types behind the previously listed load balancer types.

### "Request body content parsing \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/content-parsing](https://docs.cloud.google.com/armor/docs/content-parsing)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The example updates the security policy POLICY NAME to enable JSON parsing, and specifies the content types application/json , application/vnd.api+json , application/vnd.collection+json , and application/vnd.hyper+json : gcloud compute security-policies update POLICY NAME \ --json-parsing STANDARD \ --json-custom-content-types "application/json,application/vnd.api+json,application/vnd.collection+json,application/vnd.hyper+json" Use GraphQL parsing To configure GraphQL parsing, update your security policy to set the --json-parsing flag to STANDARD WITH GRAPHQL : gcloud compute security-policies update POLICY NAME \ --json-parsing STANDARD WITH GRAPHQL Logging Each HTTP(S) request that is evaluated against a Cloud Armor security policy is logged through Cloud Logging.
- This page contains information about configuring request body content parsing, an optional feature that you can use with your Cloud Armor security policies.
- To avoid noise and reduce the risk of false positives, we recommend that you configure Cloud Armor to enable alternative parsing for any supported content type if your protected workloads do the following: Serve REST APIs Use GraphQL Receive any requests with JSON encoded content.
- What's next Configure Cloud Armor security policies Use request logging Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .


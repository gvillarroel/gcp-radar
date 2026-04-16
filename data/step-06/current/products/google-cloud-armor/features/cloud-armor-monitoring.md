---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.946Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor monitoring"
feature_slug: "cloud-armor-monitoring"
latest_feature_date: "2018-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/monitoring"
  - "https://docs.cloud.google.com/armor/docs/troubleshooting"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
  - "https://docs.cloud.google.com/armor/docs/ddos-visibility"
keywords:
  - "armor"
  - "monitoring"
  - "is"
  - "available"
  - "in"
  - "general"
  - "availability"
---

# Cloud Armor monitoring

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor monitoring is available in general availability.

## Extended Definition

Cloud Armor monitoring is available in general availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/monitoring](https://docs.cloud.google.com/armor/docs/monitoring)
- [https://docs.cloud.google.com/armor/docs/troubleshooting](https://docs.cloud.google.com/armor/docs/troubleshooting)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/ddos-visibility](https://docs.cloud.google.com/armor/docs/ddos-visibility)

## Supporting Pages

### "Monitoring Cloud Armor security policies \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/monitoring](https://docs.cloud.google.com/armor/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewing the monitoring dashboard You can monitor the status and request traffic volumes (allowed, denied, or previewed) on a per-policy and per-backend-service basis by using the preconfigured Cloud Armor policies overview resource dashboard in Cloud Monitoring.
- The dashboard provides data analysis in the following default intervals: 1H (one hour) 6H (six hours) 1D (one day) 1W (one week) 6W (six weeks) To manually request analysis in any interval from 6W to 1 minute, use the Google Cloud console controls on the Monitoring page.
- Cloud Armor monitoring dashboard (click to enlarge) Defining custom dashboards To create custom Monitoring dashboards over Network Security Policy metrics, follow these steps: Console In the Google Cloud console, go to Monitoring .
- Monitoring metrics for security policies The following metrics are reported on the Cloud Armor policies overview dashboard: Metric Description Requests count The number of requests processed by a Cloud Armor security policy.

### "Troubleshoot Cloud Armor issues \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/troubleshooting](https://docs.cloud.google.com/armor/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring dashboards Cloud Monitoring is available on the Network Security Policies page under Monitoring .
- Check for the following fields and make sure that they match the rule that you configured to deny the traffic: configuredAction must match the action configured in the rule. name must match the name of the Cloud Armor security policy attached to this backend service. outcome must match configuredAction . priority must match the priority number of the rule. httpRequest: remoteIp: 104.133.0.95 requestMethod: GET requestSize: '801' requestUrl: http://74.125.67.38/ responseSize: '246' serverIp: 10.132.0.4 status: 200 userAgent: curl/7.35.0 insertId: ajvis5ev4i60 internalId: projectNumber: '895280006100' jsonPayload: '@type': type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry enforcedSecurityPolicy: configuredAction: ACCEPT name: mydev-policy-log-test1 outcome: ACCEPT priority: 2147483647 statusDetails: response sent by backend logName: projects/mydev-staging/logs/requests resource: labels: backend service name: BACKEND SERVICE NAME forwarding rule name: FORWARDING RULE NAME project id: PROJECT ID target proxy name: TARGET HTTP PROXY NAME url map name: URL MAP NAME zone: global type: http load balancer severity: INFO timestamp: '2017-04-18T18:57:05.845960288Z' This output includes the following values: BACKEND SERVICE NAME : the name of the backend service FORWARDING RULE NAME : the name of the forwarding rule PROJECT ID : the ID of your project TARGET HTTP PROXY NAME : the name of the target HTTP proxy URL MAP NAME : the name of the URL map Review the hierarchy of rules to ensure that the correct rule is matched.
- For example, the requestUrl compares positively to the OWASP CRS rule ID 941180: httpRequest: remoteIp: 104.133.0.95 requestMethod: GET requestSize: '801' requestUrl: http://74.125.67.38/foo?document.cookie=1010" responseSize: '246' serverIp: 10.132.0.4 status: 200 userAgent: curl/7.35.0 insertId: ajvis5ev4i60 internalId: projectNumber: '895280006100' jsonPayload: '@type': type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry enforcedSecurityPolicy: configuredAction: ACCEPT name: POLICY NAME outcome: ACCEPT priority: 2147483647 preconfiguredExprIds: [ 'owasp-crs-v042200-id941180-xss' ] statusDetails: response sent by backend logName: projects/mydev-staging/logs/requests resource: labels: backend service name: BACKEND SERVICE forwarding rule name: mydev-forwarding-rule project id: mydev-staging target proxy name: mydev-target-http-proxy url map name: mydev-url-map zone: global type: http load balancer severity: INFO timestamp: '2017-04-18T18:57:05.845960288Z' This log includes the following values: POLICY NAME : the name of the security policy BACKEND SERVICE : the name of the backend service Exclude the OWASP CRS rule ID 941180 by updating the rule in the Cloud Armor security policy: gcloud compute security-policies rules update 1000 \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', ['owasp-crs-v042200-id941180-xss'])" \ --action deny-403 \ --preview Replace POLICY NAME with the name of the security policy.
- Clients with denied signatures aren't blocked or denied If you are using Cloud Armor with Cloud CDN, security policies are enforced only for requests for dynamic content, cache misses, or other requests that are destined for the CDN origin server.

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Terms and limitations Cloud Armor Enterprise has the following terms and limitations: Generally : If a Project enrolled in Cloud Armor Enterprise experiences a third-party denial of service attack on a protected endpoint ("Qualified Attack") and the conditions described in the next section are met, Google provides a credit equivalent to the Covered Fees, provided that the Covered Fees incurred exceed the Minimum Threshold.
- Advanced network DDoS protection Advanced network DDoS protection is only available to projects enrolled in Cloud Armor Enterprise.
- Upgrading from Cloud Armor Standard to Enterprise typically won't disrupt your application's availability.
- Cloud Armor Standard includes the following: A pay-as-you go pricing model Always-on protection from volumetric and protocol-based DDoS attacks, with automated inline mitigations in real time and with no latency impact across the following infrastructure types: Global external Application Load Balancer (HTTP/HTTPS) Classic Application Load Balancer (HTTP/HTTPS) Regional external Application Load Balancer (HTTP/HTTPS) External passthrough Network Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Cloud CDN Media CDN Integration with Cloud CDN and Media CDN Access to Cloud Armor web application firewall (WAF) rule capabilities, including preconfigured WAF rules for OWASP Top 10 protection Cloud Armor Enterprise includes the following: All the features of Cloud Armor Standard Choice of pricing models: Cloud Armor Enterprise Annual or Paygo Bundled Cloud Armor WAF usage, including rules, policy, and requests Third-party named IP address lists Google Threat Intelligence for Cloud Armor Adaptive Protection for Layer 7 endpoints Advanced network DDoS protection for pass-through endpoints—external passthrough Network Load Balancers, protocol forwarding, and public IP addresses for virtual machine (VM) instances Access to DDoS attack visibility Hierarchical security policies (Cloud Armor Enterprise Annual only): Access to DDoS bill protection and DDoS response team services (additional conditions apply, see Eligibility for DDoS response team ) All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer are automatically enrolled in Cloud Armor Standard.

### "Access DDoS attack visibility telemetry \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/ddos-visibility](https://docs.cloud.google.com/armor/docs/ddos-visibility)
- Source ID: `site-iam-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instead, the Cloud Logging and Cloud Monitoring metrics for DDoS mitigation events are part of DDoS attack visibility, a feature available exclusively for Google Cloud Armor Enterprise subscribers.
- The available metrics are as follows: Ingress bytes ( /dos/ingress bytes ) Ingress packets ( /dos/ingress packets ) You can group and filter the preceding metrics based upon the following labels: Label Value project id The ID of your project that is enrolled in Cloud Armor Enterprise. location The location of your protected endpoint. vip The virtual IP address of the protected endpoint. drop status Possible values: processed : Traffic was not denied by Cloud Armor always-on DDoS protection, meaning that it was evaluated against your security policies. blocked : Traffic was denied by Cloud Armor always-on DDoS protection and dropped before being evaluated against your security policies.
- Cloud Monitoring metrics DDoS mitigation telemetry metrics are visible under the resource Protected Network Endpoint ( ProtectedEndpoint ), which is exclusive to application-layer (Layer 7) virtual IP addresses that are enrolled in Google Cloud Armor Enterprise.
- Google Cloud Armor Enterprise lets you use Cloud Logging and Cloud Monitoring to analyze DDoS attacks and their sources.


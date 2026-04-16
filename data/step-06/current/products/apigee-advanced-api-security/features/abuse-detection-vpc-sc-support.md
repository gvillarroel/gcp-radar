---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.406Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Abuse Detection VPC-SC support"
feature_slug: "abuse-detection-vpc-sc-support"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-security/detection-rules"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions"
keywords:
  - "fully"
  - "detection"
  - "abuse"
---

# Abuse Detection VPC-SC support

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Advanced API Security Abuse Detection now fully supports VPC Service Controls customers, including operation with the Advanced Anomaly Detection model and exclusion list handling.

## Extended Definition

Advanced API Security Abuse Detection now fully supports VPC Service Controls customers, including operation with the Advanced Anomaly Detection model and exclusion list handling.

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
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Change permissions for allowing Apigee to improve your machine learning models You can change your permissions for allowing Apigee to improve your machine learning models at any time, by clicking Settings at the top right of the Abuse detection page and selecting the option to either enable or disable this feature.
- You can access abuse detection either through the Apigee UI, as described below, or through the Incidents API or the Security stats API See Required roles and permissions for abuse detection for the roles and permissions needed to use abuse detection.
- Mitigate large numbers of false positives If you're seeing a large number of false positives and internal IP addresses flagged as anomalies by Advanced API Security's Abuse Detection rules, follow the guidance in this section to mitigate the problem.
- Ingress access logs in abuse detection If you have enabled Cloud Logging for Apigee ingress access logs, the details page for an IP address or API key provides a link directly to Cloud Logging with a filter set for the currently selected IP address.

### Detection rules \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- Source ID: `site-docs-reference-required-8`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Note that one incident might be triggered by multiple detection rules, in which case all of the rules that triggered the incident are listed in the Abuse detection Environment details view.
- Limitations For Abuse Detection Advanced Anomaly Detection: Anomalies are detected at the environment level.
- Note: The Advanced API Security Abuse detection page uses detection rules to detect security incidents.
- For more information, see Opt in for machine learning models for Abuse Detection .

### Security actions overview and UI | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- Source ID: `feature-recovery-direct-http`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- API MONITORING API Monitoring overview Compare API Monitoring with Apigee Analytics Using the Timeline view Using the Investigate view Using the Recent view Setting up alerts and notifications Examples of alerts Fault codes ADVANCED API SECURITY Overview of Advanced API Security Apigee and Apigee hybrid Overview Getting started Detection rules Best practices Security reports Overview Manage security reports in the UI Manage security reports using the API Risk assessment Risk assessment overview and UI Security scores and profiles API Abuse detection Abuse detection UI Security stats API Incidents API Security feedback API Security alerts Security actions Security actions overview and UI Security actions API Multi-gateway risk assessment Overview API OBSERVATION Overview of API Observation Shadow APIs Shadow API Discovery overview Shadow API Discovery management APIs Shadow API Discovery audit logging Application Integration Use Application Integration Application Integration and Apigee proxy Integration target Subscription entitlements Application Integration policies IntegrationCallout policy SetIntegrationRequest policy Connectors Overview Get started with connectors Release notes API HUB What is Apigee API hub?
- One way to identify which requests to take action on is to use the Abuse detection Detected traffic or Incident views, which show IP addresses and API keys that are sources of abuse.
- For example, you can create a security action to deny requests from an IP address that has been identified by Abuse Detection as abuse and block them from accessing your APIs.
- The information displayed in the Attributes page is similar the Attributes view for the Abuse detection Incident details attributes .


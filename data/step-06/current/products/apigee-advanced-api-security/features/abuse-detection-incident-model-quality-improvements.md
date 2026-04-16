---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.411Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Abuse Detection incident model quality improvements"
feature_slug: "abuse-detection-incident-model-quality-improvements"
latest_feature_date: "2025-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-security/detection-rules"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
keywords:
  - "quality"
  - "improvements"
  - "improved"
  - "model"
  - "incident"
  - "detection"
  - "abuse"
---

# Abuse Detection incident model quality improvements

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

The Abuse Detection incident model was improved for lower noise and higher accuracy in incident detection.

## Extended Definition

The Abuse Detection incident model was improved for lower noise and higher accuracy in incident detection.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)

## Supporting Pages

### Abuse detection \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- Source ID: `site-docs-reference-required-7`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Insights : Abuse detection incident details might include generative AI insights created using Google Cloud generative AI large language models (LLMs) .
- Change permissions for allowing Apigee to improve your machine learning models You can change your permissions for allowing Apigee to improve your machine learning models at any time, by clicking Settings at the top right of the Abuse detection page and selecting the option to either enable or disable this feature.
- You can access abuse detection either through the Apigee UI, as described below, or through the Incidents API or the Security stats API See Required roles and permissions for abuse detection for the roles and permissions needed to use abuse detection.
- Use a machine learning model for Abuse Detection Advanced Anomaly Detection In order to see detected anomalies in Abuse Detection, you must opt in to allow the Advanced Anomaly Detection machine learning model to train on your API traffic data.

### Detection rules \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- Source ID: `site-docs-reference-required-8`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Note that one incident might be triggered by multiple detection rules, in which case all of the rules that triggered the incident are listed in the Abuse detection Environment details view.
- Note: The Advanced API Security Abuse detection page uses detection rules to detect security incidents.
- For more information, see Opt in for machine learning models for Abuse Detection .
- However, this additional information can help you make the best use of anomaly detection: Accounting for seasonal variance: Because the model is trained on your traffic data, it can recognize and account for seasonal traffic variances (such as holiday traffic), if your traffic data includes previous data for that pattern, such as the same holiday in a previous year.

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- To get more information about the abuse, you can use either of the following resources: The Abuse detection page, which displays information about security incidents involving abuse traffic.
- Security scores assessment types There are three assessment types that contribute to the overall security score calculated by Advanced API Security: Source assessment: Assesses the detected abuse traffic, using the Advanced API Security detection rules . "Abuse" refers to requests sent to the API for purposes other than what the API is intended for.
- Click Detected Traffic to view the Detected traffic tab in the Abuse detection page.
- The main feature differences between v1 and v2 are: v2 includes: Improved reliability, including faster score calculations with recent proxy data Score calculation without the need to first attach a security profile to an environment Simplified score presentation, based on a 0% to 100% scale The concept of assessment check weights, which v1 does not support.


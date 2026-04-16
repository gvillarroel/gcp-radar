---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.424Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Abuse detection model training on customer data"
feature_slug: "abuse-detection-model-training-on-customer-data"
latest_feature_date: "2024-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-security/detection-rules"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
keywords:
  - "training"
  - "customer"
  - "model"
  - "supports"
  - "detection"
  - "abuse"
---

# Abuse detection model training on customer data

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Apigee now supports optional training of abuse-detection machine learning models on a customer’s own data to improve incident-detection accuracy.

## Extended Definition

Apigee now supports optional training of abuse-detection machine learning models on a customer’s own data to improve incident-detection accuracy.

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
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you first open the Abuse detection page in the Apigee UI, you will see an opt-in request to allow Advanced API Security's machine learning models to use your API traffic data for model training.
- To opt in to use your API traffic data for anomaly detection model training, select that option when adding anomaly detection to your Abuse Detection configuration.
- Change permissions for allowing Apigee to improve your machine learning models You can change your permissions for allowing Apigee to improve your machine learning models at any time, by clicking Settings at the top right of the Abuse detection page and selecting the option to either enable or disable this feature.
- Use a machine learning model for Abuse Detection Advanced Anomaly Detection In order to see detected anomalies in Abuse Detection, you must opt in to allow the Advanced Anomaly Detection machine learning model to train on your API traffic data.

### Detection rules \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- Source ID: `site-docs-reference-required-8`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: Use of Advanced Anomaly Detection requires opting in to training the model on your API traffic data.
- Advanced Anomaly Detection starts surfacing anomalies within six hours of opting in to model training.
- For more information, see Opt in for machine learning models for Abuse Detection .
- However, this additional information can help you make the best use of anomaly detection: Accounting for seasonal variance: Because the model is trained on your traffic data, it can recognize and account for seasonal traffic variances (such as holiday traffic), if your traffic data includes previous data for that pattern, such as the same holiday in a previous year.

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Security scores assessment types There are three assessment types that contribute to the overall security score calculated by Advanced API Security: Source assessment: Assesses the detected abuse traffic, using the Advanced API Security detection rules . "Abuse" refers to requests sent to the API for purposes other than what the API is intended for.
- To get more information about the abuse, you can use either of the following resources: The Abuse detection page, which displays information about security incidents involving abuse traffic.
- Click Detected Traffic to view the Detected traffic tab in the Abuse detection page.
- Source details The Source details pane displays details of detected abuse traffic in the environment, including: Traffic details : Detected traffic: The number of API calls originating from an IP address that has been detected as a source of abuse.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.414Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Abuse Detection advanced anomaly detection model"
feature_slug: "abuse-detection-advanced-anomaly-detection-model"
latest_feature_date: "2025-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-security/detection-rules"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "uses"
  - "customer"
  - "anomaly"
  - "model"
  - "detection"
  - "abuse"
---

# Abuse Detection advanced anomaly detection model

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Abuse Detection now uses a new customer-specific Vertex AI anomaly detection model with traffic-data training, replacing the previous model without API or UI changes.

## Extended Definition

Abuse Detection now uses a new customer-specific Vertex AI anomaly detection model with traffic-data training, replacing the previous model without API or UI changes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### Abuse detection \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- Source ID: `site-docs-reference-required-7`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use a machine learning model for Abuse Detection Advanced Anomaly Detection In order to see detected anomalies in Abuse Detection, you must opt in to allow the Advanced Anomaly Detection machine learning model to train on your API traffic data.
- To opt in to use your API traffic data for anomaly detection model training, select that option when adding anomaly detection to your Abuse Detection configuration.
- Change permissions for allowing Apigee to improve your machine learning models You can change your permissions for allowing Apigee to improve your machine learning models at any time, by clicking Settings at the top right of the Abuse detection page and selecting the option to either enable or disable this feature.
- Go to Abuse detection This displays the main Abuse detection page: Note: When you first open the Abuse detection page, you will see a banner that requests permission to train your organization's security models on your data.

### Detection rules \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- Source ID: `site-docs-reference-required-8`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- However, this additional information can help you make the best use of anomaly detection: Accounting for seasonal variance: Because the model is trained on your traffic data, it can recognize and account for seasonal traffic variances (such as holiday traffic), if your traffic data includes previous data for that pattern, such as the same holiday in a previous year.
- Two of the detection rules are based on machine learning models: Advanced API Scraper Advanced Anomaly Detection Note: The data used to train the machine learning models for the rules Advanced API Scraper and Advanced Anomaly Detection contain metadata, including source IP address, source geography, and the values of some HTTP request headers.
- Machine learning and detection rules Advanced API Security uses models built with Google's machine learning algorithms to detect security threats to your APIs.
- You can also combine anomaly detection with security actions to automatically flag or deny traffic that is detected as anomalous by the model.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-api-reference-required-1`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The sample policy shown below uses all default parameters: <SanitizeUserPrompt async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> </SanitizeUserPrompt> When you call your API proxy, the input from the prompt is automatically extracted and passed on to Model Armor and processed according to the parameters of your Model Armor template.
- The following sections provide suggested user prompts to include in the API requests to test for the following conditions included in your Model Armor template: Responsible AI (RAI) match Malicious URL detection Prompt injection detection Each example includes the expected response if the Model Armor policies are working as intended.
- Default model detection and prompt extraction This example shows how the Model Armor policies work to extract and evaluate user prompts according to the parameters of your Model Armor template.
- This command creates a Model Armor template that uses all the available Model Armor filters and settings.


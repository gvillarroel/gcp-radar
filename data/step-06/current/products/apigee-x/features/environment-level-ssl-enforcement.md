---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.170Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Environment-level SSL enforcement"
feature_slug: "environment-level-ssl-enforcement"
latest_feature_date: "2024-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
keywords:
  - "environments"
  - "enforcement"
  - "enforce"
  - "environment"
  - "level"
---

# Environment-level SSL enforcement

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee environments can enforce strict southbound SSL behavior with the SSLInfo.Enforce flag.

## Extended Definition

Apigee environments can enforce strict southbound SSL behavior with the SSLInfo.Enforce flag.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- N/A No Specifying environment-level SSL enforcement If SSLInfo.Enforce is set to true or false , the value specified overrides any granular enforcement options specified in <SSLInfo> blocks in TargetEndpoint or TargetServer configurations.
- See Specifying environment-level SSL enforcement . false No TrustStore A keystore containing trusted root server certificates.
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .
- You can override the Enforce field at the environment level with the feature flag SSLInfo.Enforce .

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Create a Model Armor template Create a Model Armor template for sanitizing user prompts and LLM responses: gcloud model-armor templates create --location $LOCATION TEMPLATE NAME --rai-settings-filters = '[{ "filterType":"HATE SPEECH", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "HARASSMENT", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "SEXUALLY EXPLICIT", "confidenceLevel": "MEDIUM AND ABOVE" }]' --basic-config-filter-enforcement = enabled --pi-and-jailbreak-filter-settings-enforcement = enabled --pi-and-jailbreak-filter-settings-confidence-level = LOW AND ABOVE --malicious-uri-filter-settings-enforcement = enabled --template-metadata-custom-llm-response-safety-error-code = 798 --template-metadata-custom-llm-response-safety-error-message = "test template llm response evaluation failed" --template-metadata-custom-prompt-safety-error-code = 799 --template-metadata-custom-prompt-safety-error-message = "test template prompt evaluation failed" --template-metadata-ignore-partial-invocation-failures --template-metadata-log-operations --template-metadata-log-sanitize-operations Substitute TEMPLATE NAME with the name of the template you want to create.
- Model Armor policies can only be deployed in Comprehensive environments.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT $LOCATION $RUNTIME HOSTNAME Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT Overview The following sections describe the steps required to create and configure the Model Armor policies: Enable Model Armor APIs.
- Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT = PROJECT ID export LOCATION = REGION export RUNTIME HOSTNAME = RUNTIME HOSTNAME Where: PROJECT ID is the ID of the project with your Apigee instance.

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-3`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- No other types of policies are allowed in an EventFlow : Javascript LLMTokenQuota MessageLogging PublishMessage RaiseFault SanitizeModelResponse When using LLMTokenQuota with SSE streams, quota enforcement skips events that lack token usage metadata.
- This feature supports the use of AI agents that operate in real time environments, such as customer service bots or workflow orchestrators.
- If you prefer not to deploy the proxy at this point, leave the Deployment environments field empty.
- Use the checkboxes to select one or more environments to which to deploy your proxy.


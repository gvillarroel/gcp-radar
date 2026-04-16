---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.548Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API specification error-upload restriction setting"
feature_slug: "api-specification-error-upload-restriction-setting"
latest_feature_date: "2024-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "restriction"
  - "setting"
  - "error"
  - "upload"
  - "specification"
  - "console"
  - "users"
---

# API specification error-upload restriction setting

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Cloud console users can now restrict uploading API specification files that contain errors.

## Extended Definition

Cloud console users can now restrict uploading API specification files that contain errors.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click to download To upload the API specification files into your Cloud Storage bucket, do the following: In the Google Cloud console, go to the Cloud Storage Buckets page.
- Download the following prebuilt integration JSON file and use it for the purpose of this tutorial: Integration file Download link enrich-with-spec-yaml.json Click to download Create and upload an integration To begin, you'll create a new integration in Application Integration and then upload the downloaded JSON file to define the curation logic: In the Google Cloud console, go to the Application Integration page.
- Create Cloud Storage bucket To create a Cloud Storage bucket that will hold your API specifications, do the following: Note: For the purpose of this tutorial, you are only required to set the Global unique name field for your bucket; all other steps are either optional or can have the default settings.
- Set up Cloud Storage Next, you'll set up Cloud Storage by creating a bucket and uploading the sample API specification files that will be used in the custom curation process.

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 310384001 hybrid 1.11.0 OPEN Cert validation failures may return a 502 instead of a 503 error response when users add the tag <Enforce>true</Enforce> in the target <SSLInfo> block for default validation of TLS target endpoint certificates.
- As a result, users cannot access the app's App Detail page in the console.
- For example, from the helm-charts/ directory: ls apigee-org/templates/ Output: apigee-org-guardrails.yaml mart-sa.yaml apigee-proxy-chaining-certificate.yaml mint-task-scheduler-gsa-secret.yaml apigee-proxy-chaining-route.yaml mint-task-scheduler-sa.yaml ax-hash-salt-secret.yaml NOTES.txt connect-agent-gsa-secret.yaml organization.yaml connect-agent-sa.yaml udca-gsa-secret.yaml data-encryption-secret.yaml udca-sa.yaml encryption-keys-secret.yaml watcher-gsa-secret.yaml helpers.tpl watcher-sa.yaml mart-gsa-secret.yaml (Optional:) cp apigee-org/templates/mint-task-scheduler-gsa-secret.yaml /tmp/ cp apigee-org/templates/mint-task-scheduler-sa.yaml /tmp/ rm apigee-org/templates/mint-task-scheduler-gsa-secret.yaml rm apigee-org/templates/mint-task-scheduler-sa.yaml ls apigee-org/templates/ Output: apigee-org-guardrails.yaml mart-gsa-secret.yaml apigee-proxy-chaining-certificate.yaml mart-sa.yaml apigee-proxy-chaining-route.yaml NOTES.txt ax-hash-salt-secret.yaml organization.yaml connect-agent-gsa-secret.yaml udca-gsa-secret.yaml connect-agent-sa.yaml udca-sa.yaml data-encryption-secret.yaml watcher-gsa-secret.yaml encryption-keys-secret.yaml watcher-sa.yaml helpers.tpl 451375397 hybrid 1.14.3 FIXED in hybrid 1.15.1 The apigee-pull-push.sh script can return a No such image error message, for example: Error response from daemon: No such image: gcr.io/apigee-release/hybrid/apigee-stackdriver-logging-agent:latest Workaround: Edit the HELM CHARTS DIR /apigee-operator/etc/tools/apigee-pull-push.sh script to change line 114 in the docker tag() function from: docker tag "${source}/$i" "${dest}/$i:${TAG}" To: docker tag "${source}/$i:${TAG}" "${dest}/$i:${TAG}" 405936071 hybrid 1.15.0 FIXED in hybrid 1.15.1 When metrics.serviceAccountRef or metrics.serviceAccountSecretProviderClass is specified in the overrides.yaml file, the telemetry role will target the wrong service account.
- 383372330 Apigee Emulator versions 1.13.0 up to but not including 1.15.1 FIXED in Apigee Emulator versions 1.15.1 and later All proxy deployments fail locally with error messages including Error parsing deployment report as JSON : 06 / 13 / 2025 6 : 45 PM EMULATOR INFO Deploying environment testenv , to Cont ainer apigee - 1.14.2 ( 1.14.2 ) 06 / 13 / 2025 6 : 45 PM EMULATOR ERROR Error parsing deployment report as JSON 06 / 13 / 2025 6 : 45 PM EMULATOR ERROR null 06 / 13 / 2025 6 : 45 PM EMULATOR ERROR Environment testenv deployment , to Cont ainer apigee - 1.14.2 ( 1.14.2 ) failed with Error : 500 06 / 13 / 2025 6 : 45 PM EMULATOR ERROR Deploy to Cont ainer apigee - 1.14.2 ( 1.14.2 ), failed with Error : Environment testenv deployment , to Cont ainer apigee - 1.14.2 ( 1.14.2 ) failed with Error : 500 Fix: Update to an Apigee Emulator version 1.15.1 or later.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-required-3`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a Model Armor template Create a Model Armor template for sanitizing user prompts and LLM responses: gcloud model-armor templates create --location $LOCATION TEMPLATE NAME --rai-settings-filters = '[{ "filterType":"HATE SPEECH", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "HARASSMENT", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "SEXUALLY EXPLICIT", "confidenceLevel": "MEDIUM AND ABOVE" }]' --basic-config-filter-enforcement = enabled --pi-and-jailbreak-filter-settings-enforcement = enabled --pi-and-jailbreak-filter-settings-confidence-level = LOW AND ABOVE --malicious-uri-filter-settings-enforcement = enabled --template-metadata-custom-llm-response-safety-error-code = 798 --template-metadata-custom-llm-response-safety-error-message = "test template llm response evaluation failed" --template-metadata-custom-prompt-safety-error-code = 799 --template-metadata-custom-prompt-safety-error-message = "test template prompt evaluation failed" --template-metadata-ignore-partial-invocation-failures --template-metadata-log-operations --template-metadata-log-sanitize-operations Substitute TEMPLATE NAME with the name of the template you want to create.
- Disable a Model Armor policy To disable the Model Armor policy, set the enabled attribute to false , as shown in the following example: <SanitizeModelResponse async="false" continueOnError="false" enabled="false" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> You can edit policy content in the Google Cloud console.
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.


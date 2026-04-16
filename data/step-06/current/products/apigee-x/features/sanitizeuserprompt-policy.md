---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.141Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "SanitizeUserPrompt policy"
feature_slug: "sanitizeuserprompt-policy"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model"
keywords:
  - "sanitizeuserprompt"
  - "sanitize"
  - "prompts"
  - "armor"
  - "uses"
  - "user"
  - "model"
  - "policy"
---

# SanitizeUserPrompt policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The SanitizeUserPrompt policy uses Model Armor to sanitize user prompts and mitigate prompt injection and other LLM risks; The SanitizeUserPrompt policy uses Model Armor to sanitize user prompts and mitigate prompt injection and other LLM risks.

## Extended Definition

The SanitizeUserPrompt policy uses Model Armor to sanitize user prompts and mitigate prompt injection and other LLM risks; The SanitizeUserPrompt policy uses Model Armor to sanitize user prompts and mitigate prompt injection and other LLM risks.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model](https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The sample policy shown below uses all default parameters: <SanitizeUserPrompt async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> </SanitizeUserPrompt> When you call your API proxy, the input from the prompt is automatically extracted and passed on to Model Armor and processed according to the parameters of your Model Armor template.
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.
- Disable a Model Armor policy To disable the Model Armor policy, set the enabled attribute to false , as shown in the following example: <SanitizeModelResponse async="false" continueOnError="false" enabled="false" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> You can edit policy content in the Google Cloud console.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview The semantic caching policies help Apigee users with LLM models to intelligently serve identical or semantically similar prompts efficiently, minimizing backend API calls and reducing resource consumption.
- Edit the policies: SemanticCacheLookup policy: Remove the <UserPromptSource> element to use the default value.
- For example: gcloud iam service-accounts create ai-client \ --description = " semantic cache client " \ --display-name = " ai-client " Grant the service account the AI Platform User role using the following command: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: SERVICE ACCOUNT NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/aiplatform.user" Replace SERVICE ACCOUNT NAME with the name of the service account created in the previous step.
- Assign the IAM Service Account User role to the service account using the following command: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: SERVICE ACCOUNT NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Replace SERVICE ACCOUNT NAME with the name of the service account created in the previous step.

### JavaScript object model \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model](https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following JavaScript code example uses the context.flow property and calls the get/setVariable() methods on context . if ( context . flow == "PROXY REQ FLOW" ) { var username = context . getVariable ( "request.formparam.user" ); context . setVariable ( "USER.name" , username ); } These methods interact directly with flow variables .
- Related topics JavaScript policy JavaScript object model Introduction to antipatterns Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- It's important to understand this model if you intend to use the JavaScript policy to add custom JavaScript to an API proxy.
- See also Antipattern: Use waitForComplete() in JavaScript code . // Add the required the headers for making a specific API request var headers = { 'X-SOME-HEADER' : 'some value' }; // Make a GET API request along with headers var myRequest = new Request ( "http://www.example.com" , "GET" , headers ); // Define the callback function and process the response from the GET API request function onComplete ( response , error ) { // Check if the HTTP request was successful if ( response ) { context . setVariable ( 'example.status' , response . status ); } else { context . setVariable ( 'example.error' , 'Woops: ' + error ); } } // Specify the callback Function as an argument httpClient . get ( myRequest , onComplete ); Using the JavaScript policy Use the JavaScript policy to attach custom JavaScript code to a proxy flow.


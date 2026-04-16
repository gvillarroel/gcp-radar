---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.141Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "SanitizeModelResponse policy"
feature_slug: "sanitizemodelresponse-policy"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model"
keywords:
  - "sanitizemodelresponse"
  - "protect"
  - "sanitize"
  - "armor"
  - "responses"
  - "uses"
  - "model"
  - "policy"
---

# SanitizeModelResponse policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The SanitizeModelResponse policy uses Model Armor to sanitize model responses and protect AI applications from unsafe output; The SanitizeModelResponse policy uses Model Armor to sanitize model responses and protect AI applications from unsafe output.

## Extended Definition

The SanitizeModelResponse policy uses Model Armor to sanitize model responses and protect AI applications from unsafe output; The SanitizeModelResponse policy uses Model Armor to sanitize model responses and protect AI applications from unsafe output.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model](https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- Disable a Model Armor policy To disable the Model Armor policy, set the enabled attribute to false , as shown in the following example: <SanitizeModelResponse async="false" continueOnError="false" enabled="false" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> You can edit policy content in the Google Cloud console.
- The sample policy shown below uses all default parameters: <SanitizeUserPrompt async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> </SanitizeUserPrompt> When you call your API proxy, the input from the prompt is automatically extracted and passed on to Model Armor and processed according to the parameters of your Model Armor template.
- Create a Model Armor template Create a Model Armor template for sanitizing user prompts and LLM responses: gcloud model-armor templates create --location $LOCATION TEMPLATE NAME --rai-settings-filters = '[{ "filterType":"HATE SPEECH", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "HARASSMENT", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "SEXUALLY EXPLICIT", "confidenceLevel": "MEDIUM AND ABOVE" }]' --basic-config-filter-enforcement = enabled --pi-and-jailbreak-filter-settings-enforcement = enabled --pi-and-jailbreak-filter-settings-confidence-level = LOW AND ABOVE --malicious-uri-filter-settings-enforcement = enabled --template-metadata-custom-llm-response-safety-error-code = 798 --template-metadata-custom-llm-response-safety-error-message = "test template llm response evaluation failed" --template-metadata-custom-prompt-safety-error-code = 799 --template-metadata-custom-prompt-safety-error-message = "test template prompt evaluation failed" --template-metadata-ignore-partial-invocation-failures --template-metadata-log-operations --template-metadata-log-sanitize-operations Substitute TEMPLATE NAME with the name of the template you want to create.

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-3`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a new SanitizeModelResponse policy with the following definition: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="SMR-modelresponse"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>SMR-modelresponse</DisplayName> <ModelArmor> <TemplateName>projects/{project}/locations/{location}/templates/{template-name}</TemplateName> </ModelArmor> <LLMResponseSource>{response partial}</LLMResponseSource> <!-- Use the below settings if you want to call a Model Armor policy on every event --> <LLMResponseSource>{response.event.current.content}</LLMResponseSource> </SanitizeModelResponse> (Optional) Add a JavaScript policy to group events before sending them to the Apigee Model Armor policy. < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < Javascript continueOnError = "false" enabled = "true" timeLimit = "200" name = "JS-combine-resp" > < DisplayName>JS - combine - events < / DisplayName > < Properties / > < Source > var eventText = JSON . parse ( context . getVariable ( "response.event.current.content" ) . substring ( 5 )) . candidates [ 0 ] . content . parts [ 0 ] . text ; var finishReason = JSON . parse ( context . getVariable ( "response.event.current.content" ) . substring ( 5 )) . candidates [ 0 ] . finishReason ; var idx = context . getVariable ( "response.event.current.count" ); if ( idx % 5 == 0 finishReason == "STOP" ) { context . setVariable ( "response partial" , context . getVariable ( "tmp buffer pre" )); context . setVariable ( "buff ready" , true ); context . setVariable ( "tmp buffer pre" , "" ); } else { context . setVariable ( "buff ready" , false ); context . setVariable ( "response partial" , "" ); var previousBufferVal = context . getVariable ( "tmp buffer pre" ); if ( previousBufferVal ) { context . setVariable ( "tmp buffer pre" , previousBufferVal + eventText ); } else { context . setVariable ( "tmp buffer pre" , eventText ); } } < / Source > < / Javascript > Add the JavaScript and ModelArmor policies to a step in the EventFlow of the proxy: < EventFlow name = "EventFlow" content - type = "text/event-stream" > < Request / > < Response > < Step > < Name>JS - combine - resp < / Name > < / Step > < Step > < ! -- Remove below Condition if you want to call model armor policy on every event -- > < Condition > buff ready = true < / Condition > < Name>SMR - modelresponse < / Name > < / Step > < / Response > < / EventFlow > Deploy and test the API proxy.
- You can use the SanitizeModelResponse policy to sanitize incoming server-sent events in an EventFlow .
- This policy protects your AI applications by sanitizing responses from large language models (LLMs).
- EventFlow use cases and examples The following examples show how to implement common use cases for SSE proxies: Modify an SSE response Filter an SSE response Send an SSE event to an external system Use an Apigee Model Armor policy in an EventFlows Error handling in the EventFlow Propagate fault messages in an EventFlow Modify an SSE response This example shows how to remove data from an SSE EventFlow response before returning it to the client.

### JavaScript object model \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model](https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model)
- Source ID: `site-api-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Related topics JavaScript policy JavaScript object model Introduction to antipatterns Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- It's important to understand this model if you intend to use the JavaScript policy to add custom JavaScript to an API proxy.
- See also Antipattern: Use waitForComplete() in JavaScript code . // Add the required the headers for making a specific API request var headers = { 'X-SOME-HEADER' : 'some value' }; // Make a GET API request along with headers var myRequest = new Request ( "http://www.example.com" , "GET" , headers ); // Define the callback function and process the response from the GET API request function onComplete ( response , error ) { // Check if the HTTP request was successful if ( response ) { context . setVariable ( 'example.status' , response . status ); } else { context . setVariable ( 'example.error' , 'Woops: ' + error ); } } // Specify the callback Function as an argument httpClient . get ( myRequest , onComplete ); Using the JavaScript policy Use the JavaScript policy to attach custom JavaScript code to a proxy flow.
- Example Set a value in the session: context . session [ 'key' ] = 123 ; Get the value from the session: var value = context . session [ 'key' ]; // 123 Sample: For a working example that uses the context.sessio n object see the Asynchronous callout sample API proxy. context object children As shown below, a complete API proxy Flow encompasses four distinct phases, each of which has an associated message object that is a child of the context object: context.proxyRequest : The inbound request message received from the requesting client. context.targetRequest : The outbound request message sent to the backend service. context.proxyResponse : The outbound response message returned to the requesting client. context.targetResponse : The inbound request message received from the backend service.


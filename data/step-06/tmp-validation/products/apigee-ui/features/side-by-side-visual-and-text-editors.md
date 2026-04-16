---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.433Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Side-by-side visual and text editors"
feature_slug: "side-by-side-visual-and-text-editors"
latest_feature_date: "2022-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
keywords:
  - "editors"
  - "visual"
  - "side"
  - "text"
  - "develop"
  - "display"
  - "view"
---

# Side-by-side visual and text editors

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The Develop view can display the visual editor and text editor simultaneously with resizable panes.

## Extended Definition

The Develop view can display the visual editor and text editor simultaneously with resizable panes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview The semantic caching policies help Apigee users with LLM models to intelligently serve identical or semantically similar prompts efficiently, minimizing backend API calls and reducing resource consumption.
- If you wish, you can provide a variable in this element to hold the value of the URL, as shown in the following example: <URL>https://{URL VARIABLE}</URL> Configure the semantic caching policies View the XML configuration of each policy by clicking on the policy name in the Detail view of the API proxy's Develop tab.
- The Code view displays the XML configuration of the <TargetEndpoint> element.
- Edit the policy XML directly in the Code view of the Develop tab.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- Disable a Model Armor policy To disable the Model Armor policy, set the enabled attribute to false , as shown in the following example: <SanitizeModelResponse async="false" continueOnError="false" enabled="false" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> You can edit policy content in the Google Cloud console.
- The sample policy shown below uses all default parameters: <SanitizeUserPrompt async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> </SanitizeUserPrompt> When you call your API proxy, the input from the prompt is automatically extracted and passed on to Model Armor and processed according to the parameters of your Model Armor template.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT $LOCATION $RUNTIME HOSTNAME Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT Overview The following sections describe the steps required to create and configure the Model Armor policies: Enable Model Armor APIs.

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The text editor displays the XML code for the proxy, including the Spike Arrest policy step in the Response element of the PreFlow. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SpikeArrest continueOnError="false" enabled="true" name="SA-"> <DisplayName>SA-</DisplayName> <Properties/> <Identifier ref="request.header.some-header-name"/> <MessageWeight ref="request.header.weight"/> <Rate>30ps</Rate> </SpikeArrest> In the XML for the policy, change the value of the <Rate> element to 1pm (which translates into roughly two requests allowed every 60 seconds in the cloud).
- To do so, click and drag the divider between the visual editor and the text editor down a little.
- Home Documentation Application development Apigee Guides Send feedback Add the SpikeArrest policy to your API Stay organized with collections Save and categorize content based on your preferences.
- Select Proxy Endpoints > default > PreFlow in the left-hand pane: Note: You may need to expand the visual editor in the right-hand pane to see all the elements.


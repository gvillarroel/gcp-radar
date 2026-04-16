---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:03:12.350Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Expanded Apigee Integration regional availability"
feature_slug: "expanded-apigee-integration-regional-availability"
latest_feature_date: "2023-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
keywords:
  - "additional"
  - "expanded"
  - "available"
  - "regional"
  - "makes"
  - "availability"
---

# Expanded Apigee Integration regional availability

Product: Apigee Integration
Coverage: MEDIUM

## Step 02 Summary

Makes Apigee Integration available in additional regions including Melbourne, Finland, Paris, Madrid, Doha, and Tel Aviv.

## Extended Definition

Makes Apigee Integration available in additional regions including Melbourne, Finland, Paris, Madrid, Doha, and Tel Aviv.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before using the Model Armor policies, we recommend that you carefully review the Model Armor documentation to make sure you understand the supported use cases, quota restrictions, regional availability, and pricing specific to Model Armor.
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- If you experience performance bottlenecks resulting from higher queries per second (QPS), you may need to increase the following quotas for dependent services in your Google Cloud project: Online prediction requests per minute per region Regional online prediction requests per base model per minute per region Matching Engine stream update requests per minute per region To increase a quota for one of these services, reach out to Google Cloud support.
- Set the regional endpoint: gcloud config set api endpoint overrides/modelarmor "https://modelarmor.$LOCATION.rep.googleapis.com/" You should receive the following response: Updated property [ api endpoint overrides/modelarmor ] .

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-reference-required-2`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Update Salesforce opportunity Once you have generated the new order number, you update the source Salesforce opportunity Configure the Salesforce connector Perform the following steps to configure a Connectors task that updates the existing Salesforce opportunity: In the integration editor, click Tasks to display a list of available tasks.
- Connect to the Salesforce account Perform the following steps to add and configure a Connectors task to retrieve the opportunity details using the Salesforce connection: In the integration editor, click Tasks to display a list of available tasks.
- Connect to the BigQuery table Perform the following steps to configure a Connectors task that reads the BigQuery Accounts tables using the BigQuery connection: In the integration editor, click Tasks to display a list of available tasks.
- Map trigger payload to Salesforce connector When the integration is invoked using the Salesforce trigger, you extract the opportunity ID and map it to a Salesforce connector to retrieve additional details of the opportunity.

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-docs-reference-required-2`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Generate integration description The integration description feature available in Gemini in Application Integration provides a description summary of the integration that you've created in your integration editor .
- Add edge conditions and append additional tasks You can use Gemini to append new tasks and to add edge conditions to your existing integration flow.
- Gemini automatically inserts the qualified edge conditions and configures the additional tasks from the selected edge in your existing integration.


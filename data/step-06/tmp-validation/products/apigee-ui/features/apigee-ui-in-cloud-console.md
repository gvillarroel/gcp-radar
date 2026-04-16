---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.429Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Apigee UI in Cloud console"
feature_slug: "apigee-ui-in-cloud-console"
latest_feature_date: "2023-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation"
keywords:
  - "alongside"
  - "related"
  - "integrated"
  - "tasks"
  - "console"
  - "interface"
---

# Apigee UI in Cloud console

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The Apigee UI in Cloud console is an integrated interface for using Apigee alongside related Google Cloud console tasks.

## Extended Definition

The Apigee UI in Cloud console is an integrated interface for using Apigee alongside related Google Cloud console tasks.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-root`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Download the following prebuilt integration JSON file and use it for the purpose of this tutorial: Integration file Download link enrich-with-spec-yaml.json Click to download Create and upload an integration To begin, you'll create a new integration in Application Integration and then upload the downloaded JSON file to define the curation logic: In the Google Cloud console, go to the Application Integration page.
- This specMetadata is then integrated into the specs array of the API's first version within curatedAPIMetadata , effectively linking the API proxy with its detailed specification.
- Click to download To upload the API specification files into your Cloud Storage bucket, do the following: In the Google Cloud console, go to the Cloud Storage Buckets page.
- To edit the curation settings of the existing Apigee and hybrid plugin instance, do the following: In the Google Cloud console, go to the API hub page.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Disable a Model Armor policy To disable the Model Armor policy, set the enabled attribute to false , as shown in the following example: <SanitizeModelResponse async="false" continueOnError="false" enabled="false" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> You can edit policy content in the Google Cloud console.
- Create a service account to deploy the API proxy Before creating the API proxy, create a service account with the permissions required to deploy an API proxy that has Model Armor related policies: Create the service account: gcloud iam service-accounts create SERVICE ACCOUNT NAME \ --description = " DESCRIPTION " \ --display-name = " SERVICE ACCOUNT DISPLAY NAME " Where: SERVICE ACCOUNT NAME is the name of the service account.
- You can also view your Model Armor templates in the Google Cloud console: Go to the Model Armor page in the Google Cloud console.
- Before you begin Before you begin, make sure to complete the following tasks: Sign in to your Google Cloud account.

### Secure an API by requiring API keys \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- YOUR API KEY "/> Related topics Here are some topics related to API products and keys: Managing API products API keys Registering app developers Register apps and manage API keys Verify API Key policy API protection often involves additional security such as OAuth , an open protocol that exchanges credentials (like username and password) for access tokens.
- Adding an API product To add an API product using the Apigee UI: In the Google Cloud console, go to the Distribution > API products page: Go to API products Click +Create .
- Create the API proxy Follow these steps to create an API proxy using the Apigee UI: In the Google Cloud console, go to the Apigee > Proxy development > API proxies page.
- Create a developer To create a developer using the Apigee UI: In the Google Cloud console, go to the Distribution > Developers page: Go to Developers Click + Create .


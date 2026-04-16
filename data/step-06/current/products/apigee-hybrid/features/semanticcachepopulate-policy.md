---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.831Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "SemanticCachePopulate policy"
feature_slug: "semanticcachepopulate-policy"
latest_feature_date: "2025-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
keywords:
  - "semanticcachepopulate"
  - "workloads"
  - "genai"
  - "policy"
  - "adds"
---

# SemanticCachePopulate policy

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Apigee Hybrid adds support for the SemanticCachePopulate policy for LLM/GenAI workloads to store responses in the semantic cache.

## Extended Definition

Apigee Hybrid adds support for the SemanticCachePopulate policy for LLM/GenAI workloads to store responses in the semantic cache.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SemanticCachePopulate policy: Set the <TTLInSeconds> element to specify the number of seconds until the cache expires, in seconds.
- For more information on using TTL in the SemanticCachePopulate policy, see <TTLInSeconds> .
- For example: gcloud iam service-accounts create ai-client \ --description = " semantic cache client " \ --display-name = " ai-client " Grant the service account the AI Platform User role using the following command: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: SERVICE ACCOUNT NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/aiplatform.user" Replace SERVICE ACCOUNT NAME with the name of the service account created in the previous step.
- Assign the IAM Service Account User role to the service account using the following command: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: SERVICE ACCOUNT NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Replace SERVICE ACCOUNT NAME with the name of the service account created in the previous step.

### Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- Source ID: `site-docs-reference-required-3`
- Final score: 55
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add a <Step> element that references the XMLtoJSON policy to the <Response> flow in the API proxy <PreFlow> : <ProxyEndpoint name="default"> <PreFlow name="PreFlow"> <Request> <Step> <Name>verify-api-key</Name> </Step> <Step> <Name>remove-query-param-apikey</Name> </Step> <Step> <Name>impose-quota</Name> </Step> </Request> <Response> <Step> <Name>XMLtoJSON</Name> </Step> </Response> </PreFlow> ... </ProxyEndpoint> Save your changes to the file.
- Note : You'll attach the policy to the response flow in the API proxy PreFlow in the next step. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <XMLToJSON async="false" continueOnError="false" enabled="true" name="XMLtoJSON"> <DisplayName>XMLtoJSON</DisplayName> <Properties/> <Format>yahoo</Format> <OutputVariable> response </OutputVariable> <Source> response </Source> </XMLToJSON> Attach the policy to the default proxy endpoint.
- Home Documentation Application development Apigee Guides Send feedback Step 6: Attach a policy Stay organized with collections Save and categorize content based on your preferences.
- In the following steps, you create a new policy and attach it to your API proxy in the PreFlow response flow to ensure the policy is applied before any other processing takes place.

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference-required-3`
- Final score: 47
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The text editor displays the XML code for the proxy, including the Spike Arrest policy step in the Response element of the PreFlow. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SpikeArrest continueOnError="false" enabled="true" name="SA-"> <DisplayName>SA-</DisplayName> <Properties/> <Identifier ref="request.header.some-header-name"/> <MessageWeight ref="request.header.weight"/> <Rate>30ps</Rate> </SpikeArrest> In the XML for the policy, change the value of the <Rate> element to 1pm (which translates into roughly two requests allowed every 60 seconds in the cloud).
- Add the SpikeArrest policy In this tutorial, you'll add and configure the SpikeArrest policy to guard the target service against sudden traffic spikes that can be caused by an increase in usage, buggy clients, or malicious attacks.
- Home Documentation Application development Apigee Guides Send feedback Add the SpikeArrest policy to your API Stay organized with collections Save and categorize content based on your preferences.
- Click the + button next to PreFlow in the Response pane at the bottom-right of the visual editor: In the Add policy step dialog, select the Spike Arrest policy.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.166Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI resource-level IAM policies for Feature Store and EntityType resources"
feature_slug: "vertex-ai-resource-level-iam-policies-for-feature-store-and-entitytype-resources"
latest_feature_date: "2022-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/overview"
keywords:
  - "vertex"
  - "ai"
  - "resource"
  - "level"
  - "iam"
  - "policies"
  - "feature"
  - "store"
---

# Vertex AI resource-level IAM policies for Feature Store and EntityType resources

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now supports applying IAM policies at the individual Feature Store and EntityType resource level.

## Extended Definition

Vertex AI now supports applying IAM policies at the individual Feature Store and EntityType resource level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/overview)

## Supporting Pages

### "Control access to Vertex AI Feature Store (Legacy) resources \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy)
- Source ID: `site-docs-reference-3`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can set resource-level Identity and Access Management (IAM) policies on the following Vertex AI Feature Store (Legacy) resources: Featurestore : When you set an Identity and Access Management policy on a featurestore, the policy applies to the featurestore and all entity types created in that featurestore.
- You can control access to Vertex AI Feature Store (Legacy) resources by setting IAM policies at different levels of the resource hierarchy .
- Home Documentation AI and ML Vertex AI Send feedback Control access to Vertex AI Feature Store (Legacy) resources Stay organized with collections Save and categorize content based on your preferences.
- For a subset of users, you can set a resource-level policy to grant write permissions to specific featurestores in your project.

### Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- Source ID: `site-docs-reference-3`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const minNodeCount = <MINIMUM NO OF NODES>; // const maxNodeCount = <MAXIMUM NO OF NODES>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function updateFeaturestore () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const featurestore = { name : parent , onlineServingConfig : { scaling : { minNodeCount : minNodeCount , maxNodeCount : maxNodeCount , }, }, }; const request = { featurestore : featurestore , }; // Update Featurestore request const [ operation ] = await featurestoreServiceClient . updateFeaturestore ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Update featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } updateFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function getFeaturestore () { // Configure the parent resource const name = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const request = { name : name , }; // Get Featurestore request const [ response ] = await featurestoreServiceClient . getFeaturestore ( request , { timeout : Number ( timeout )} ); console . log ( 'Get featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } getFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function listFeaturestores () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } ; const request = { parent : parent , }; // List featurestores request const [ response ] = await featurestoreServiceClient . listFeaturestores ( request , { timeout : Number ( timeout )} ); console . log ( 'List featurestores response' ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } listFeaturestores (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( FeaturestoreServiceClient featurestoreServiceClient = FeaturestoreServiceClient . create ( featurestoreServiceSettings )) { ListFeaturestoresRequest listFeaturestoresRequest = ListFeaturestoresRequest . newBuilder () . setParent ( LocationName . of ( project , location ). toString ()) . build (); System . out . println ( "List Featurestores Response" ); for ( Featurestore element : featurestoreServiceClient . listFeaturestores ( listFeaturestoresRequest ). iterateAll ()) { System . out . println ( element ); } } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Vertex AI quickstart using client libraries .

### Introduction to Vertex AI Feature Store (Legacy) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/overview)
- Source ID: `site-docs-reference-3`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quotas and limits Vertex AI Feature Store (Legacy) enforces quotas and limits to help you manage resources by setting your own usage limits and to protect the community of Google Cloud users by preventing unforeseen spikes in usage.
- Vertex AI Feature Store (Legacy) is a fully managed solution, which manages and scales the underlying infrastructure such as storage and compute resources.
- What's next Learn about the Vertex AI Feature Store (Legacy) data model and its resources .
- Learn more about Vertex AI Feature Store (Legacy) data model and resources .


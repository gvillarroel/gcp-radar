---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.878Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Tagging for regional secrets"
feature_slug: "tagging-for-regional-secrets"
latest_feature_date: "2025-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/create-and-manage-tags"
  - "https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison"
  - "https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
keywords:
  - "tagging"
  - "for"
  - "regional"
  - "secrets"
  - "tags"
  - "during"
  - "creation"
  - "and"
---

# Tagging for regional secrets

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Regional secrets support tags during creation and for existing secrets.

## Extended Definition

Regional secrets support tags during creation and for existing secrets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/create-and-manage-tags](https://docs.cloud.google.com/secret-manager/docs/create-and-manage-tags)
- [https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison](https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison)
- [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)

## Supporting Pages

### Create and manage tags \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/create-and-manage-tags](https://docs.cloud.google.com/secret-manager/docs/create-and-manage-tags)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --tags = TAG KEY = TAG VALUE Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --tags = TAG KEY = TAG VALUE Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --tags = TAG KEY = TAG VALUE REST Before using any of the request data, make the following replacements: PROJECT ID : the ID of the project SECRET ID : the unique identifier of the secret TAGKEY NAME : the permanent ID or namespaced name of the tag key that's attached—for example, tagKeys/567890123456 .
- Add tags during resource creation You can add tags when you create secrets.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\CreateSecretRequest; use Google\Cloud\SecretManager\V1\Replication; use Google\Cloud\SecretManager\V1\Replication\Automatic; use Google\Cloud\SecretManager\V1\Secret; use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $tagKey Your tag key (e.g. 'tagKeys/281475012216835') @param string $tagValue Your tag value (e.g. 'tagValues/281476592621530') / function create secret with tags(string $projectId, string $secretId, string $tagKey, string $tagValue): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent project. $parent = $client->projectName($projectId); $secret = new Secret([ 'replication' => new Replication([ 'automatic' => new Automatic(), ]), ]); // set the tags. $tags = [$tagKey => $tagValue]; $secret->setTags($tags); // Build the request. $request = CreateSecretRequest::build($parent, $secretId, $secret); // Create the secret. $newSecret = $client->createSecret($request); // Print the new secret name. printf('Created secret %s with tag', $newSecret->getName()); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'my-project'; // const secretId = 'my-secret'; // const tagValue = 'tagValues/281476592621530'; const parent = projects/ ${ projectId } ; // Imports the library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); const { TagBindingsClient } = require ( ' @google-cloud/resource-manager ' ). v3 ; // Instantiates a client const client = new SecretManagerServiceClient (); const resourcemanagerClient = new TagBindingsClient (); async function bindTagsToSecret () { const [ secret ] = await client . createSecret ({ parent : parent , secretId : secretId , secret : { replication : { automatic : {}, }, }, }); console . log ( Created secret ${ secret . name } ); const [ operation ] = await resourcemanagerClient . createTagBinding ({ tagBinding : { parent : //secretmanager.googleapis.com/ ${ secret . name } , tagValue : tagValue , }, }); const [ response ] = await operation . promise (); console . log ( 'Created Tag Binding' , response . name ); } bindTagsToSecret (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .

### "Compare global and regional service \_|\_ Secret Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison](https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- For organizations with stringent data sovereignty and compliance requirements, Secret Manager offers a regional service where you can choose to store your data solely within specific geographical locations or data residency zones (DRZs).
- The secret data is replicated across multiple regions and secrets can be accessed from any region where Google Cloud platform operates.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Home Documentation Security Secret Manager Guides Send feedback Compare global and regional service Stay organized with collections Save and categorize content based on your preferences.

### Add labels to secrets \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- Source ID: `site-iam-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const name = 'projects/my-project/secrets/my-secret'; // const labelKey = 'gcp'; // const labelValue = 'rocks'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function getSecret () { const [ secret ] = await client . getSecret ({ name : name , }); return secret ; } async function createUpdateSecretLabel () { const oldSecret = await getSecret (); oldSecret . labels [ labelKey ] = labelValue ; const [ secret ] = await client . updateSecret ({ secret : { name : name , labels : oldSecret . labels , }, updateMask : { paths : [ 'labels' ], }, }); console . info ( Updated secret ${ secret . name } ); } createUpdateSecretLabel (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const name = 'projects/my-project/secrets/my-secret'; // const labelKey = 'secretmanager'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function getSecret () { const [ secret ] = await client . getSecret ({ name : name , }); return secret ; } async function deleteSecretLabel () { const oldSecret = await getSecret (); delete oldSecret . labels [ labelKey ]; const [ secret ] = await client . updateSecret ({ secret : { name : name , labels : oldSecret . labels , }, updateMask : { paths : [ 'labels' ], }, }); console . info ( Updated secret ${ secret . name } ); } deleteSecretLabel (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID --update-labels = KEY = VALUE Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID --update-labels = KEY = VALUE Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID --update-labels = KEY = VALUE REST Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --labels = KEY = VALUE Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --labels = KEY = VALUE Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --labels = KEY = VALUE REST Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID.

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 async def sample list secrets(): Create a client client = secretmanager v1 .
- ListSecretsRequest ( parent="parent value", ) Make the request page result = client. list secrets (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.secretmanager v1.types.ListSecretsRequest , dict]] The request object.
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. test iam permissions test iam permissions ( request : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get location get location ( request : typing .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.878Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Parameter Manager console"
feature_slug: "parameter-manager-console"
latest_feature_date: "2025-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
  - "https://docs.cloud.google.com/secret-manager/docs/overview"
  - "https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations"
keywords:
  - "parameter"
  - "manager"
  - "console"
  - "provides"
  - "for"
  - "managing"
  - "workload"
  - "parameters"
---

# Parameter Manager console

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Parameter Manager provides a console for managing workload parameters.

## Extended Definition

Parameter Manager provides a console for managing workload parameters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/overview](https://docs.cloud.google.com/secret-manager/docs/overview)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations)

## Supporting Pages

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- ListSecretVersionsRequest ( parent="parent value", ) Make the request page result = client. list secret versions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.secretmanager v1.types.ListSecretVersionsRequest , dict]] The request object.
- ListSecretsRequest ( parent="parent value", ) Make the request page result = client. list secrets (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.secretmanager v1.types.ListSecretsRequest , dict]] The request object.
- SecretManagerServiceAsyncClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = await client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict]] The request object.
- SecretManagerServiceAsyncClient () Initialize request argument(s) request = iam policy pb2.GetIamPolicyRequest( resource="resource value", ) Make the request response = await client. get iam policy (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.GetIamPolicyRequest , dict]] The request object.

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- ListSecretVersionsRequest ( parent="parent value", ) Make the request page result = client. list secret versions (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.secretmanager v1.types.ListSecretVersionsRequest , dict] The request object.
- ListSecretsRequest ( parent="parent value", ) Make the request page result = client. list secrets (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.secretmanager v1.types.ListSecretsRequest , dict] The request object.
- SecretManagerServiceClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict] The request object.
- SecretManagerServiceClient () Initialize request argument(s) request = iam policy pb2.GetIamPolicyRequest( resource="resource value", ) Make the request response = client. get iam policy (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.GetIamPolicyRequest , dict] The request object.

### Secret Manager overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/overview](https://docs.cloud.google.com/secret-manager/docs/overview)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Manage operational parameters for your applications using Parameter Manager : Parameter Manager is an extension to the Secret Manager service that you can use to store and manage application configurations such as database connection strings, feature flags, environment names, port numbers to listen on, and settings for application features.
- Secret Manager manages server-side encryption keys on your behalf using the same hardened key management systems that we use for our own encrypted data, including strict key access controls and auditing.
- To use Parameter Manager, you must enable the Parameter Manager API and grant your users the required IAM roles .
- Encryption of secrets Secret Manager always encrypts your secret data before it is persisted to disk.

### Create and manage annotations \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . require "google/cloud/secret manager" Edits a secret annotations. @param project id [String] Your Google Cloud project (e.g. "my-project") @param secret id [String] Your secret name (e.g. "my-secret") @param annotation key [String] Your annotation key (e.g. "my-annotation-key") @param annotation value [String] Your annotation value (e.g. "my-annotation-value") def edit secret annotations project id :, secret id :, annotation key :, annotation value : Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the secret. name = client . secret path project : project id , secret : secret id Get the existing secret. existing secret = client . get secret name : name Get the existing secret's annotations. existing secret annotations = existing secret . annotations . to h Add a new annotation key and value. existing secret annotations [ annotation key ] = annotation value Updates the secret. secret = client . update secret ( secret : { name : name , annotations : existing secret annotations }, update mask : { paths : [ "annotations" ] } ) Print the updated secret name and annotations. puts "Updated secret: #{ secret . name } " puts "New updated annotations: #{ secret . annotations } " end View annotations To view annotations attached to a secret, use one of the following methods: Console In the Google Cloud console, go to the Secret Manager page.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const name = 'projects/my-project/secrets/my-secret'; // const annotationKey = 'updatedannotationkey'; // const annotationValue = 'updatedannotationvalue'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function getSecret () { const [ secret ] = await client . getSecret ({ name : name , }); return secret ; } async function editSecretAnnotations () { const oldSecret = await getSecret (); oldSecret . annotations [ annotationKey ] = annotationValue ; const [ secret ] = await client . updateSecret ({ secret : { name : name , annotations : oldSecret . annotations , }, updateMask : { paths : [ 'annotations' ], }, }); console . info ( Updated secret ${ secret . name } ); } editSecretAnnotations (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const parent = 'projects/my-project'; // const secretId = 'my-secret'; // const annotationKey = 'exampleannotationkey'; // const annotationValue = 'exampleannotationvalue'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function createSecretWithAnnotations () { const [ secret ] = await client . createSecret ({ parent : parent , secretId : secretId , secret : { replication : { automatic : {}, }, annotations : { [ annotationKey ] : annotationValue , }, }, }); console . log ( Created secret ${ secret . name } ); } createSecretWithAnnotations (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const parent = 'projects/my-project/secrets/my-secret'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function viewSecretAnnotations () { const [ secret ] = await client . getSecret ({ name : name , }); for ( const key in secret . annotations ) { console . log ( ${ key } : ${ secret . annotations [ key ] } ); } } viewSecretAnnotations (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .


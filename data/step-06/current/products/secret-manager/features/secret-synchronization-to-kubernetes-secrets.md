---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.876Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret synchronization to Kubernetes Secrets"
feature_slug: "secret-synchronization-to-kubernetes-secrets"
latest_feature_date: "2025-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets"
  - "https://docs.cloud.google.com/secret-manager/docs/assign-alias-to-secret-version"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
keywords:
  - "secret"
  - "synchronization"
  - "to"
  - "kubernetes"
  - "secrets"
  - "manager"
  - "can"
  - "be"
---

# Secret synchronization to Kubernetes Secrets

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret Manager secrets can be synchronized into Kubernetes Secret objects in GKE clusters.

## Extended Definition

Secret Manager secrets can be synchronized into Kubernetes Secret objects in GKE clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- [https://docs.cloud.google.com/secret-manager/docs/assign-alias-to-secret-version](https://docs.cloud.google.com/secret-manager/docs/assign-alias-to-secret-version)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)

## Supporting Pages

### Add labels to secrets \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- Source ID: `site-iam-reference`
- Final score: 321
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A label is a key-value pair that you can assign to Google Cloud Secret Manager secrets.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const name = 'projects/my-project/secrets/my-secret'; // const labelKey = 'gcp'; // const labelValue = 'rocks'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function getSecret () { const [ secret ] = await client . getSecret ({ name : name , }); return secret ; } async function createUpdateSecretLabel () { const oldSecret = await getSecret (); oldSecret . labels [ labelKey ] = labelValue ; const [ secret ] = await client . updateSecret ({ secret : { name : name , labels : oldSecret . labels , }, updateMask : { paths : [ 'labels' ], }, }); console . info ( Updated secret ${ secret . name } ); } createUpdateSecretLabel (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const name = 'projects/my-project/secrets/my-secret'; // const labelKey = 'secretmanager'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function getSecret () { const [ secret ] = await client . getSecret ({ name : name , }); return secret ; } async function deleteSecretLabel () { const oldSecret = await getSecret (); delete oldSecret . labels [ labelKey ]; const [ secret ] = await client . updateSecret ({ secret : { name : name , labels : oldSecret . labels , }, updateMask : { paths : [ 'labels' ], }, }); console . info ( Updated secret ${ secret . name } ); } deleteSecretLabel (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets?secretId= SECRET ID ?update mask=labels" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /secrets/ SECRET ID ", "createTime": "2024-03-25T08:24:13.153705Z", "labels": { "key": "value" }, "etag": "\"161477e6071da9\"" } C# To run this code, first set up a C# development environment and install the Secret Manager C# SDK .

### "Assign an alias to a secret version \_|\_ Secret Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/secret-manager/docs/assign-alias-to-secret-version](https://docs.cloud.google.com/secret-manager/docs/assign-alias-to-secret-version)
- Source ID: `site-iam-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=version aliases" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /secrets/ SECRET ID ", "createTime": "2024-09-04T06:34:32.995517Z", "etag": "\"16214584d1479c\"", "versionAliases": { "nonprod": "1" } } C# To run this code, first set up a C# development environment and install the Secret Manager C# SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const name = 'projects/my-project/secrets/my-secret'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function updateSecret () { const [ secret ] = await client . updateSecret ({ secret : { name : name , versionAliases : { test : 1 , }, }, updateMask : { paths : [ 'version aliases' ], }, }); console . info ( Updated secret ${ secret . name } ); } updateSecret (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- Save the request body in a file named request.json , and execute the following command: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=version aliases" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Important: To use Secret Manager with workloads running on Compute Engine or Google Kubernetes Engine, the underlying instance or node must have the cloud-platform OAuth scope.

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 273
- Re-rank relevance: N/A

Evidence snippets:
- The resource name of the project associated with the Secrets , in the format projects/ or projects//locations/ This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 async def sample list secrets(): Create a client client = secretmanager v1 .
- If a Callable is given, it will be called with the same set of initialization arguments as used in the SecretManagerServiceTransport constructor.
- Returns Type Description google.cloud.secretmanager v1.types.Secret A Secret is a logical secret whose value and versions can be accessed.

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 273
- Re-rank relevance: N/A

Evidence snippets:
- The resource name of the project associated with the Secrets , in the format projects/ or projects//locations/ This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 def sample list secrets(): Create a client client = secretmanager v1 .
- This corresponds to the parent field on the request instance; if request is provided, this should not be set. payload google.cloud.secretmanager v1.types.SecretPayload Required.
- This corresponds to the secret id field on the request instance; if request is provided, this should not be set. secret google.cloud.secretmanager v1.types.Secret Required.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.880Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager add-on for Google Kubernetes Engine"
feature_slug: "secret-manager-add-on-for-google-kubernetes-engine"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/add-secret-version"
  - "https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets"
  - "https://docs.cloud.google.com/secret-manager/docs/access-secret-version"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
keywords:
  - "secret"
  - "manager"
  - "add"
  - "on"
  - "for"
  - "kubernetes"
  - "engine"
  - "the"
---

# Secret Manager add-on for Google Kubernetes Engine

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

The Secret Manager add-on lets you mount secrets from Secret Manager as volumes in GKE Pods; The Secret Manager add-on lets you mount secrets from Secret Manager as volumes in GKE Pods.

## Extended Definition

The Secret Manager add-on lets you mount secrets from Secret Manager as volumes in GKE Pods; The Secret Manager add-on lets you mount secrets from Secret Manager as volumes in GKE Pods.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version)
- [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- [https://docs.cloud.google.com/secret-manager/docs/access-secret-version](https://docs.cloud.google.com/secret-manager/docs/access-secret-version)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)

## Supporting Pages

### Add a secret version \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version)
- Source ID: `site-docs-root`
- Final score: 354
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\AddSecretVersionRequest; use Google\Cloud\SecretManager\V1\SecretPayload; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') / function add secret version(string $projectId, string $secretId): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent secret and the payload. $parent = $client->secretName($projectId, $secretId); $secretPayload = new SecretPayload([ 'data' => 'my super secret data', ]); // Build the request. $request = AddSecretVersionRequest::build($parent, $secretPayload); // Access the secret version. $response = $client->addSecretVersion($request); // Print the new secret version name. printf('Added secret version: %s', $response->getName()); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const parent = 'projects/my-project/secrets/my-secret'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); // Payload is the plaintext data to store in the secret const payload = Buffer . from ( 'my super secret data' , 'utf8' ); async function addSecretVersion () { const [ version ] = await client . addSecretVersion ({ parent : parent , payload : { data : payload , }, }); console . log ( Added secret version ${ version . name } ` ); } addSecretVersion (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . project id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project") secret id = "YOUR-SECRET-ID" # (e.g. "my-secret") Require the Secret Manager client library. require "google/cloud/secret manager" Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the secret version. name = client . secret path project : project id , secret : secret id Add the secret version. version = client . add secret version ( parent : name , payload : { data : "my super secret data" } ) Print the new secret version name. puts "Added secret version: #{ version . name } " Secret version states A secret version can be in one of the following states at any given time: Enabled - In this state, the secret version can be accessed and described.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . import ( "context" "fmt" "hash/crc32" "io" secretmanager "cloud.google.com/go/secretmanager/apiv1" "cloud.google.com/go/secretmanager/apiv1/secretmanagerpb" ) // addSecretVersion adds a new secret version to the given secret with the // provided payload. func addSecretVersion ( w io .

### Add labels to secrets \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- Source ID: `site-iam-reference`
- Final score: 321
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\GetSecretRequest; use Google\Cloud\SecretManager\V1\UpdateSecretRequest; use Google\Protobuf\FieldMask; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $labelKey Your label key (e.g. 'label-key') @param string $labelValue Your label value (e.g. 'label-value') / function edit secret labels(string $projectId, string $secretId, string $labelKey, string $labelValue): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent project. $name = $client->secretName($projectId, $secretId); // Build the request. $request = GetSecretRequest::build($name); // get the secret. $getSecret = $client->getSecret($request); // get the secret labels $labels = $getSecret->getLabels(); // update the label - need to create a new labels map with the updated values $newLabels = []; foreach ($labels as $key => $value) { $newLabels[$key] = $value; } $newLabels[$labelKey] = $labelValue; $getSecret->setLabels($newLabels); // set the field mask $fieldMask = new FieldMask(); $fieldMask->setPaths(['labels']); // build the secret $request = new UpdateSecretRequest(); $request->setSecret($getSecret); $request->setUpdateMask($fieldMask); // update the secret $updateSecret = $client->updateSecret($request); // print the updated secret printf('Updated secret %s labels' .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\GetSecretRequest; use Google\Cloud\SecretManager\V1\Secret; use Google\Cloud\SecretManager\V1\UpdateSecretRequest; use Google\Protobuf\FieldMask; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $labelKey Your label key (e.g. 'label-key') / function delete secret label(string $projectId, string $secretId, string $labelKey): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent project. $name = $client->secretName($projectId, $secretId); // Build the request. $request = GetSecretRequest::build($name); // get the secret. $getSecret = $client->getSecret($request); // get the secret labels $labels = $getSecret->getLabels(); // delete the label unset($labels[$labelKey]); // set the field mask $fieldMask = new FieldMask(); $fieldMask->setPaths(['labels']); // build the secret $secret = new Secret(); $secret->setLabels($labels); $secret->setName($getSecret->getName()); // build the request $request = new UpdateSecretRequest(); $request->setSecret($getSecret); $request->setUpdateMask($fieldMask); // update the secret $updateSecret = $client->updateSecret($request); // print the secret name printf('Updated secret %s' .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\CreateSecretRequest; use Google\Cloud\SecretManager\V1\Replication; use Google\Cloud\SecretManager\V1\Replication\Automatic; use Google\Cloud\SecretManager\V1\Secret; use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $labelKey Your label key (e.g. 'label-key') @param string $labelValue Your label value (e.g. 'label-value') / function create secret with labels(string $projectId, string $secretId, string $labelKey, string $labelValue): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent project. $parent = $client->projectName($projectId); $secret = new Secret([ 'replication' => new Replication([ 'automatic' => new Automatic(), ]), ]); // set the labels. $labels = [$labelKey => $labelValue]; $secret->setLabels($labels); // Build the request. $request = CreateSecretRequest::build($parent, $secretId, $secret); // Create the secret. $newSecret = $client->createSecret($request); // Print the new secret name. printf('Created secret %s with labels', $newSecret->getName()); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . require "google/cloud/secret manager" Create a secret with labels. @param project id [String] Your Google Cloud project (e.g. "my-project") @param secret id [String] Your secret name (e.g. "my-secret") @param label key [String] Your label key (e.g. "my-label-key") @param label value [String] Your label value (e.g. "my-label-value") def create secret with labels project id :, secret id :, label key :, label value : Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the parent project. parent = client . project path project : project id Create the secret. secret = client . create secret ( parent : parent , secret id : secret id , secret : { replication : { automatic : {} }, labels : { label key = > label value } } ) Print the new secret name. puts "Created secret with label: #{ secret . name } " end View labels on a secret To view assigned labels, follow these steps: Console In the Google Cloud console, go to the Secret Manager page.

### Access a secret version \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/access-secret-version](https://docs.cloud.google.com/secret-manager/docs/access-secret-version)
- Source ID: `site-iam-reference`
- Final score: 318
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important: To use Secret Manager with workloads running on Compute Engine or Google Kubernetes Engine, the underlying instance or node must have the cloud-platform OAuth scope.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\AccessSecretVersionRequest; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $versionId Your version ID (e.g. 'latest' or '5'); / function access secret version(string $projectId, string $secretId, string $versionId): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the secret version. $name = $client->secretVersionName($projectId, $secretId, $versionId); // Build the request. $request = AccessSecretVersionRequest::build($name); // Access the secret version. $response = $client->accessSecretVersion($request); // Print the secret payload. // // WARNING: Do not print the secret in a production environment - this // snippet is showing how to access the secret material. $payload = $response->getPayload()->getData(); printf('Plaintext: %s', $payload); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const name = 'projects/my-project/secrets/my-secret/versions/5'; // const name = 'projects/my-project/secrets/my-secret/versions/latest'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function accessSecretVersion () { const [ version ] = await client . accessSecretVersion ({ name : name , }); // Extract the payload as a string. const payload = version . payload . data . toString (); // WARNING: Do not print the secret in a production environment - this // snippet is showing how to access the secret material. console . info ( Payload: ${ payload } ` ); } accessSecretVersion (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . project id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project") secret id = "YOUR-SECRET-ID" # (e.g. "my-secret") version id = "YOUR-VERSION" # (e.g. "5" or "latest") Require the Secret Manager client library. require "google/cloud/secret manager" Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the secret version. name = client . secret version path ( project : project id , secret : secret id , secret version : version id ) Access the secret version. version = client . access secret version name : name Print the secret payload.

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 async def sample add secret version(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = secretmanager v1 .


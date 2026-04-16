---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.880Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Delayed destruction of secret versions"
feature_slug: "delayed-destruction-of-secret-versions"
latest_feature_date: "2024-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsPager"
  - "https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
keywords:
  - "delayed"
  - "destruction"
  - "of"
  - "secret"
  - "versions"
  - "can"
  - "be"
  - "scheduled"
---

# Delayed destruction of secret versions

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret versions can be scheduled for destruction after a configurable delay instead of being destroyed immediately; Secret versions can be scheduled for destruction after a configurable delay instead of being destroyed immediately.

## Extended Definition

Secret versions can be scheduled for destruction after a configurable delay instead of being destroyed immediately; Secret versions can be scheduled for destruction after a configurable delay instead of being destroyed immediately.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsPager)
- [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)

## Supporting Pages

### "Class ListSecretVersionsAsyncPager (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.secretmanager v1.types.ListSecretVersionsRequest The initial request object. response google.cloud.secretmanager v1.types.ListSecretVersionsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 2.27.0 (latest) 2.26.0 2.25.0 2.23.3 2.22.1 2.21.1 2.20.2 2.19.0 2.18.3 2.17.0 2.16.3 2.15.1 2.14.0 2.13.0 2.12.6 2.11.1 2.10.0 2.9.2 2.8.0 2.7.3 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.2 0.2.0 0.1.1 ListSecretVersionsAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListSecretVersionsAsyncPager (2.27.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListSecretVersions requests and continue to iterate through the versions field on the corresponding responses.

### "Class ListSecretVersionsPager (2.27.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsPager)
- Source ID: `site-python-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.secretmanager v1.types.ListSecretVersionsRequest The initial request object. response google.cloud.secretmanager v1.types.ListSecretVersionsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 2.27.0 (latest) 2.26.0 2.25.0 2.23.3 2.22.1 2.21.1 2.20.2 2.19.0 2.18.3 2.17.0 2.16.3 2.15.1 2.14.0 2.13.0 2.12.6 2.11.1 2.10.0 2.9.2 2.8.0 2.7.3 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.2 0.2.0 0.1.1 ListSecretVersionsPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListSecretVersionsPager (2.27.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the iter method will make additional ListSecretVersions requests and continue to iterate through the versions field on the corresponding responses.

### Add labels to secrets \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\GetSecretRequest; use Google\Cloud\SecretManager\V1\UpdateSecretRequest; use Google\Protobuf\FieldMask; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $labelKey Your label key (e.g. 'label-key') @param string $labelValue Your label value (e.g. 'label-value') / function edit secret labels(string $projectId, string $secretId, string $labelKey, string $labelValue): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent project. $name = $client->secretName($projectId, $secretId); // Build the request. $request = GetSecretRequest::build($name); // get the secret. $getSecret = $client->getSecret($request); // get the secret labels $labels = $getSecret->getLabels(); // update the label - need to create a new labels map with the updated values $newLabels = []; foreach ($labels as $key => $value) { $newLabels[$key] = $value; } $newLabels[$labelKey] = $labelValue; $getSecret->setLabels($newLabels); // set the field mask $fieldMask = new FieldMask(); $fieldMask->setPaths(['labels']); // build the secret $request = new UpdateSecretRequest(); $request->setSecret($getSecret); $request->setUpdateMask($fieldMask); // update the secret $updateSecret = $client->updateSecret($request); // print the updated secret printf('Updated secret %s labels' .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\GetSecretRequest; use Google\Cloud\SecretManager\V1\Secret; use Google\Cloud\SecretManager\V1\UpdateSecretRequest; use Google\Protobuf\FieldMask; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $labelKey Your label key (e.g. 'label-key') / function delete secret label(string $projectId, string $secretId, string $labelKey): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent project. $name = $client->secretName($projectId, $secretId); // Build the request. $request = GetSecretRequest::build($name); // get the secret. $getSecret = $client->getSecret($request); // get the secret labels $labels = $getSecret->getLabels(); // delete the label unset($labels[$labelKey]); // set the field mask $fieldMask = new FieldMask(); $fieldMask->setPaths(['labels']); // build the secret $secret = new Secret(); $secret->setLabels($labels); $secret->setName($getSecret->getName()); // build the request $request = new UpdateSecretRequest(); $request->setSecret($getSecret); $request->setUpdateMask($fieldMask); // update the secret $updateSecret = $client->updateSecret($request); // print the secret name printf('Updated secret %s' .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\CreateSecretRequest; use Google\Cloud\SecretManager\V1\Replication; use Google\Cloud\SecretManager\V1\Replication\Automatic; use Google\Cloud\SecretManager\V1\Secret; use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $labelKey Your label key (e.g. 'label-key') @param string $labelValue Your label value (e.g. 'label-value') / function create secret with labels(string $projectId, string $secretId, string $labelKey, string $labelValue): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent project. $parent = $client->projectName($projectId); $secret = new Secret([ 'replication' => new Replication([ 'automatic' => new Automatic(), ]), ]); // set the labels. $labels = [$labelKey => $labelValue]; $secret->setLabels($labels); // Build the request. $request = CreateSecretRequest::build($parent, $secretId, $secret); // Create the secret. $newSecret = $client->createSecret($request); // Print the new secret name. printf('Created secret %s with labels', $newSecret->getName()); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . require "google/cloud/secret manager" Create a secret with labels. @param project id [String] Your Google Cloud project (e.g. "my-project") @param secret id [String] Your secret name (e.g. "my-secret") @param label key [String] Your label key (e.g. "my-label-key") @param label value [String] Your label value (e.g. "my-label-value") def create secret with labels project id :, secret id :, label key :, label value : Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the parent project. parent = client . project path project : project id Create the secret. secret = client . create secret ( parent : parent , secret id : secret id , secret : { replication : { automatic : {} }, labels : { label key = > label value } } ) Print the new secret name. puts "Created secret with label: #{ secret . name } " end View labels on a secret To view assigned labels, follow these steps: Console In the Google Cloud console, go to the Secret Manager page.

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.secretmanager v1.types.Secret A Secret is a logical secret whose value and versions can be accessed.
- Returns Type Description google.cloud.secretmanager v1.types.Secret A Secret is a logical secret whose value and versions can be accessed.
- Returns Type Description google.cloud.secretmanager v1.types.Secret A Secret is a logical secret whose value and versions can be accessed.
- The resource name of the project associated with the Secrets , in the format projects/ or projects//locations/ This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.


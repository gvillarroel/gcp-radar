---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.882Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager annotations"
feature_slug: "secret-manager-annotations"
latest_feature_date: "2023-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
  - "https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretsAsyncPager"
keywords:
  - "secret"
  - "manager"
  - "annotations"
  - "added"
  - "for"
  - "as"
  - "custom"
  - "metadata"
---

# Secret Manager annotations

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret Manager added support for annotations as custom metadata on secrets; Secret Manager added support for annotations as custom metadata on secrets.

## Extended Definition

Secret Manager added support for annotations as custom metadata on secrets; Secret Manager added support for annotations as custom metadata on secrets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretsAsyncPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretsAsyncPager)

## Supporting Pages

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 316
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The resource name of the project associated with the Secrets , in the format projects/ or projects//locations/ This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = secretmanager v1 .

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The resource name of the project associated with the Secrets , in the format projects/ or projects//locations/ This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample set iam policy(): Create a client client = secretmanager v1 .

### Create and manage annotations \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations)
- Source ID: `site-iam-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SecretManagerServiceClient ; import java.io.IOException ; public class CreateSecretWithAnnotations { public static void createSecretWithAnnotations () throws IOException { // TODO(developer): Replace these variables before running the sample. // This is the id of the GCP project String projectId = "your-project-id" ; // This is the id of the secret to act on String secretId = "your-secret-id" ; // This is the key of the annotation to be added String annotationKey = "your-annotation-key" ; // This is the value of the annotation to be added String annotationValue = "your-annotation-value" ; createSecretWithAnnotations ( projectId , secretId , annotationKey , annotationValue ); } // Create a secret with annotations. public static Secret createSecretWithAnnotations ( String projectId , String secretId , String annotationKey , String annotationValue ) throws IOException { // Initialize client that will be used to send requests.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\GetSecretRequest; use Google\Cloud\SecretManager\V1\UpdateSecretRequest; use Google\Protobuf\FieldMask; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $annotationKey Your annotation key (e.g. 'annotation-key') @param string $annotationValue Your annotation value (e.g. 'annotation-value') / function edit secret annotations(string $projectId, string $secretId, string $annotationKey, string $annotationValue): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent project. $name = $client->secretName($projectId, $secretId); // Build the request. $request = GetSecretRequest::build($name); // get the secret. $getSecret = $client->getSecret($request); // get the annotations $annotations = $getSecret->getAnnotations(); // update the annotation - need to create a new annotations map with the updated values $newAnnotations = []; foreach ($annotations as $key => $value) { $newAnnotations[$key] = $value; } $newAnnotations[$annotationKey] = $annotationValue; $getSecret->setAnnotations($newAnnotations); // set the field mask $fieldMask = new FieldMask(); $fieldMask->setPaths(['annotations']); // build the secret $request = new UpdateSecretRequest(); $request->setSecret($getSecret); $request->setUpdateMask($fieldMask); // update the secret $updateSecret = $client->updateSecret($request); // print the updated secret printf('Updated secret %s annotations' .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . require "google/cloud/secret manager" Edits a secret annotations. @param project id [String] Your Google Cloud project (e.g. "my-project") @param secret id [String] Your secret name (e.g. "my-secret") @param annotation key [String] Your annotation key (e.g. "my-annotation-key") @param annotation value [String] Your annotation value (e.g. "my-annotation-value") def edit secret annotations project id :, secret id :, annotation key :, annotation value : Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the secret. name = client . secret path project : project id , secret : secret id Get the existing secret. existing secret = client . get secret name : name Get the existing secret's annotations. existing secret annotations = existing secret . annotations . to h Add a new annotation key and value. existing secret annotations [ annotation key ] = annotation value Updates the secret. secret = client . update secret ( secret : { name : name , annotations : existing secret annotations }, update mask : { paths : [ "annotations" ] } ) Print the updated secret name and annotations. puts "Updated secret: #{ secret . name } " puts "New updated annotations: #{ secret . annotations } " end View annotations To view annotations attached to a secret, use one of the following methods: Console In the Google Cloud console, go to the Secret Manager page.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const name = 'projects/my-project/secrets/my-secret'; // const annotationKey = 'updatedannotationkey'; // const annotationValue = 'updatedannotationvalue'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function getSecret () { const [ secret ] = await client . getSecret ({ name : name , }); return secret ; } async function editSecretAnnotations () { const oldSecret = await getSecret (); oldSecret . annotations [ annotationKey ] = annotationValue ; const [ secret ] = await client . updateSecret ({ secret : { name : name , annotations : oldSecret . annotations , }, updateMask : { paths : [ 'annotations' ], }, }); console . info ( Updated secret ${ secret . name } ); } editSecretAnnotations (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .

### "Class ListSecretsAsyncPager (2.27.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretsAsyncPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.secretmanager v1.types.ListSecretsRequest The initial request object. response google.cloud.secretmanager v1.types.ListSecretsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- 2.27.0 (latest) 2.26.0 2.25.0 2.23.3 2.22.1 2.21.1 2.20.2 2.19.0 2.18.3 2.17.0 2.16.3 2.15.1 2.14.0 2.13.0 2.12.6 2.11.1 2.10.0 2.9.2 2.8.0 2.7.3 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.2 0.2.0 0.1.1 ListSecretsAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListSecretsAsyncPager (2.27.0) Stay organized with collections Save and categorize content based on your preferences.


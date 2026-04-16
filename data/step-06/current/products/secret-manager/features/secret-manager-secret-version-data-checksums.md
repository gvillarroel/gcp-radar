---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.883Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager secret version data checksums"
feature_slug: "secret-manager-secret-version-data-checksums"
latest_feature_date: "2022-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/add-secret-version"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
  - "https://docs.cloud.google.com/secret-manager/docs/access-secret-version"
keywords:
  - "secret"
  - "manager"
  - "version"
  - "checksums"
  - "added"
  - "for"
  - "when"
  - "adding"
---

# Secret Manager secret version data checksums

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret Manager added support for data checksums when adding or accessing a secret version.

## Extended Definition

Secret Manager added support for data checksums when adding or accessing a secret version.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/access-secret-version](https://docs.cloud.google.com/secret-manager/docs/access-secret-version)

## Supporting Pages

### Add a secret version \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\AddSecretVersionRequest; use Google\Cloud\SecretManager\V1\SecretPayload; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') / function add secret version(string $projectId, string $secretId): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent secret and the payload. $parent = $client->secretName($projectId, $secretId); $secretPayload = new SecretPayload([ 'data' => 'my super secret data', ]); // Build the request. $request = AddSecretVersionRequest::build($parent, $secretPayload); // Access the secret version. $response = $client->addSecretVersion($request); // Print the new secret version name. printf('Added secret version: %s', $response->getName()); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const parent = 'projects/my-project/secrets/my-secret'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); // Payload is the plaintext data to store in the secret const payload = Buffer . from ( 'my super secret data' , 'utf8' ); async function addSecretVersion () { const [ version ] = await client . addSecretVersion ({ parent : parent , payload : { data : payload , }, }); console . log ( Added secret version ${ version . name } ` ); } addSecretVersion (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . project id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project") secret id = "YOUR-SECRET-ID" # (e.g. "my-secret") Require the Secret Manager client library. require "google/cloud/secret manager" Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the secret version. name = client . secret path project : project id , secret : secret id Add the secret version. version = client . add secret version ( parent : name , payload : { data : "my super secret data" } ) Print the new secret version name. puts "Added secret version: #{ version . name } " Secret version states A secret version can be in one of the following states at any given time: Enabled - In this state, the secret version can be accessed and described.
- Note that the command with the plaintext will also be in your shell history. echo -n " SECRET DATA " \ gcloud secrets versions add SECRET ID --data-file=- Replace the following: SECRET DATA : the data that you want to store in the secret version SECRET ID : the ID of the secret or fully qualified identifier for the secret Optional: Add a version from a file's contents when first creating a secret Before using any of the command data below, make the following replacements: SECRET ID : the ID of the secret FILE PATH : the full path (including file name) to the file containing the version details Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --data-file = " FILE PATH " Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --data-file = " FILE PATH " Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --data-file = " FILE PATH " The response contains the newly created secret version.

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 259
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 async def sample destroy secret version(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 async def sample disable secret version(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 async def sample access secret version(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 async def sample enable secret version(): Create a client client = secretmanager v1 .

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 259
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 def sample destroy secret version(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 def sample disable secret version(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 def sample access secret version(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 def sample enable secret version(): Create a client client = secretmanager v1 .

### Access a secret version \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/access-secret-version](https://docs.cloud.google.com/secret-manager/docs/access-secret-version)
- Source ID: `site-iam-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\AccessSecretVersionRequest; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $versionId Your version ID (e.g. 'latest' or '5'); / function access secret version(string $projectId, string $secretId, string $versionId): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the secret version. $name = $client->secretVersionName($projectId, $secretId, $versionId); // Build the request. $request = AccessSecretVersionRequest::build($name); // Access the secret version. $response = $client->accessSecretVersion($request); // Print the secret payload. // // WARNING: Do not print the secret in a production environment - this // snippet is showing how to access the secret material. $payload = $response->getPayload()->getData(); printf('Plaintext: %s', $payload); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const name = 'projects/my-project/secrets/my-secret/versions/5'; // const name = 'projects/my-project/secrets/my-secret/versions/latest'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function accessSecretVersion () { const [ version ] = await client . accessSecretVersion ({ name : name , }); // Extract the payload as a string. const payload = version . payload . data . toString (); // WARNING: Do not print the secret in a production environment - this // snippet is showing how to access the secret material. console . info ( Payload: ${ payload } ` ); } accessSecretVersion (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . project id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project") secret id = "YOUR-SECRET-ID" # (e.g. "my-secret") version id = "YOUR-VERSION" # (e.g. "5" or "latest") Require the Secret Manager client library. require "google/cloud/secret manager" Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the secret version. name = client . secret version path ( project : project id , secret : secret id , secret version : version id ) Access the secret version. version = client . access secret version name : name Print the secret payload.
- REST Access a secret version Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID SECRET ID : the ID of the secret VERSION ID : the ID of the secret version HTTP method and URL: GET https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID /versions/ VERSION ID :access Request JSON body: {} To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .


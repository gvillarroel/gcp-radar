---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.877Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Automatic secret rotation with the Secret Manager add-on for GKE"
feature_slug: "automatic-secret-rotation-with-the-secret-manager-add-on-for-gke"
latest_feature_date: "2025-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
  - "https://docs.cloud.google.com/secret-manager/docs/add-secret-version"
  - "https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets"
keywords:
  - "automatic"
  - "secret"
  - "rotation"
  - "with"
  - "the"
  - "manager"
  - "add"
  - "on"
---

# Automatic secret rotation with the Secret Manager add-on for GKE

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

The GKE Secret Manager add-on can automatically and periodically push updated secrets to pods; The GKE Secret Manager add-on can automatically and periodically push updated secrets to pods.

## Extended Definition

The GKE Secret Manager add-on can automatically and periodically push updated secrets to pods; The GKE Secret Manager add-on can automatically and periodically push updated secrets to pods.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version)
- [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)

## Supporting Pages

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 344
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 async def sample add secret version(): Create a client client = secretmanager v1 .
- AddSecretVersionRequest ( parent="parent value", ) Make the request response = await client. add secret version (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.secretmanager v1.types.AddSecretVersionRequest , dict]] The request object.
- If a Callable is given, it will be called with the same set of initialization arguments as used in the SecretManagerServiceTransport constructor.
- Returns Type Description google.cloud.secretmanager v1.types.SecretVersion A secret version resource in the Secret Manager API. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create secret create secret ( request : typing .

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 344
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 def sample add secret version(): Create a client client = secretmanager v1 .
- AddSecretVersionRequest ( parent="parent value", ) Make the request response = client. add secret version (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.secretmanager v1.types.AddSecretVersionRequest , dict] The request object.
- If a Callable is given, it will be called with the same set of initialization arguments as used in the SecretManagerServiceTransport constructor.
- Returns Type Description google.cloud.secretmanager v1.types.SecretVersion A secret version resource in the Secret Manager API. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create secret create secret ( request : typing .

### Add a secret version \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version)
- Source ID: `site-docs-root`
- Final score: 330
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Base64-encode the secret data and save it as a shell variable. $ SECRET DATA=$(echo "seCr3t" base64) Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID SECRET ID : the ID of the secret HTTP method and URL: POST https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID :addVersion Request JSON body: {"payload": {"data": "${SECRET DATA}"}} To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\AddSecretVersionRequest; use Google\Cloud\SecretManager\V1\SecretPayload; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') / function add secret version(string $projectId, string $secretId): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent secret and the payload. $parent = $client->secretName($projectId, $secretId); $secretPayload = new SecretPayload([ 'data' => 'my super secret data', ]); // Build the request. $request = AddSecretVersionRequest::build($parent, $secretPayload); // Access the secret version. $response = $client->addSecretVersion($request); // Print the new secret version name. printf('Added secret version: %s', $response->getName()); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const parent = 'projects/my-project/secrets/my-secret'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); // Payload is the plaintext data to store in the secret const payload = Buffer . from ( 'my super secret data' , 'utf8' ); async function addSecretVersion () { const [ version ] = await client . addSecretVersion ({ parent : parent , payload : { data : payload , }, }); console . log ( Added secret version ${ version . name } ` ); } addSecretVersion (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . project id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project") secret id = "YOUR-SECRET-ID" # (e.g. "my-secret") Require the Secret Manager client library. require "google/cloud/secret manager" Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the secret version. name = client . secret path project : project id , secret : secret id Add the secret version. version = client . add secret version ( parent : name , payload : { data : "my super secret data" } ) Print the new secret version name. puts "Added secret version: #{ version . name } " Secret version states A secret version can be in one of the following states at any given time: Enabled - In this state, the secret version can be accessed and described.

### Add labels to secrets \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- Source ID: `site-iam-reference`
- Final score: 330
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\CreateSecretRequest; use Google\Cloud\SecretManager\V1\Replication; use Google\Cloud\SecretManager\V1\Replication\Automatic; use Google\Cloud\SecretManager\V1\Secret; use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $labelKey Your label key (e.g. 'label-key') @param string $labelValue Your label value (e.g. 'label-value') / function create secret with labels(string $projectId, string $secretId, string $labelKey, string $labelValue): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent project. $parent = $client->projectName($projectId); $secret = new Secret([ 'replication' => new Replication([ 'automatic' => new Automatic(), ]), ]); // set the labels. $labels = [$labelKey => $labelValue]; $secret->setLabels($labels); // Build the request. $request = CreateSecretRequest::build($parent, $secretId, $secret); // Create the secret. $newSecret = $client->createSecret($request); // Print the new secret name. printf('Created secret %s with labels', $newSecret->getName()); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . require "google/cloud/secret manager" Create a secret with labels. @param project id [String] Your Google Cloud project (e.g. "my-project") @param secret id [String] Your secret name (e.g. "my-secret") @param label key [String] Your label key (e.g. "my-label-key") @param label value [String] Your label value (e.g. "my-label-value") def create secret with labels project id :, secret id :, label key :, label value : Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the parent project. parent = client . project path project : project id Create the secret. secret = client . create secret ( parent : parent , secret id : secret id , secret : { replication : { automatic : {} }, labels : { label key = > label value } } ) Print the new secret name. puts "Created secret with label: #{ secret . name } " end View labels on a secret To view assigned labels, follow these steps: Console In the Google Cloud console, go to the Secret Manager page.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const parent = 'projects/my-project'; // const secretId = 'my-secret'; // const labelKey = 'secretmanager'; // const labelValue = 'rocks'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function createSecretWithLabels () { const [ secret ] = await client . createSecret ({ parent : parent , secretId : secretId , secret : { replication : { automatic : {}, }, labels : { [ labelKey ] : labelValue , }, }, }); console . log ( Created secret ${ secret . name } ); } createSecretWithLabels (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- SecretManagerServiceClient ; import java.io.IOException ; public class CreateSecretWithLabels { public static void createSecretWithLabels () throws IOException { // TODO(developer): Replace these variables before running the sample. // This is the id of the GCP project String projectId = "your-project-id" ; // This is the id of the secret to act on String secretId = "your-secret-id" ; // This is the key of the label to be added String labelKey = "your-label-key" ; // This is the value of the label to be added String labelValue = "your-label-value" ; createSecretWithLabels ( projectId , secretId , labelKey , labelValue ); } // Create a secret with labels. public static Secret createSecretWithLabels ( String projectId , String secretId , String labelKey , String labelValue ) throws IOException { // Initialize client that will be used to send requests.


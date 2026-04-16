---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.883Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager UI audit and platform logs"
feature_slug: "secret-manager-ui-audit-and-platform-logs"
latest_feature_date: "2021-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/audit-logging"
  - "https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart"
  - "https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations"
  - "https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets"
keywords:
  - "secret"
  - "manager"
  - "ui"
  - "audit"
  - "and"
  - "platform"
  - "logs"
  - "became"
---

# Secret Manager UI audit and platform logs

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Cloud Audit Logs and Platform Logs became available directly in the Secret Manager UI.

## Extended Definition

Cloud Audit Logs and Platform Logs became available directly in the Secret Manager UI.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/audit-logging](https://docs.cloud.google.com/secret-manager/docs/audit-logging)
- [https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets)

## Supporting Pages

### Secret Manager Audit Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/audit-logging](https://docs.cloud.google.com/secret-manager/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 253
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.location.Locations.GetLocation google.cloud.location.Locations.ListLocations google.cloud.secretmanager.v1.SecretManagerService.GetIamPolicy google.cloud.secretmanager.v1.SecretManagerService.GetSecret google.cloud.secretmanager.v1.SecretManagerService.GetSecretVersion google.cloud.secretmanager.v1.SecretManagerService.ListSecretVersions google.cloud.secretmanager.v1.SecretManagerService.ListSecrets ADMIN WRITE google.cloud.secretmanager.v1.SecretManagerService.AddSecretVersion google.cloud.secretmanager.v1.SecretManagerService.CreateSecret google.cloud.secretmanager.v1.SecretManagerService.DeleteSecret google.cloud.secretmanager.v1.SecretManagerService.DestroySecretVersion google.cloud.secretmanager.v1.SecretManagerService.DisableSecretVersion google.cloud.secretmanager.v1.SecretManagerService.EnableSecretVersion google.cloud.secretmanager.v1.SecretManagerService.SetIamPolicy google.cloud.secretmanager.v1.SecretManagerService.UpdateSecret DATA READ google.cloud.secretmanager.v1.SecretManagerService.AccessSecretVersion API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Secret Manager. google.cloud.location.Locations The following audit logs are associated with methods belonging to google.cloud.location.Locations .
- Filter for this method : protoPayload.methodName="google.cloud.secretmanager.v1.SecretManagerService.UpdateSecret" Methods that don't produce audit logs A method might not produce audit logs for one or more of the following reasons: It is a high volume method involving significant log generation and storage costs.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Secret Manager audit logs use the service name secretmanager.googleapis.com .
- Home Documentation Security Secret Manager Guides Send feedback Secret Manager Audit Logging Stay organized with collections Save and categorize content based on your preferences.

### Create and access a secret using Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart)
- Source ID: `site-iam-reference`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\AccessSecretVersionRequest; use Google\Cloud\SecretManager\V1\AddSecretVersionRequest; use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; use Google\Cloud\SecretManager\V1\CreateSecretRequest; use Google\Cloud\SecretManager\V1\Replication; use Google\Cloud\SecretManager\V1\Replication\Automatic; use Google\Cloud\SecretManager\V1\Secret; use Google\Cloud\SecretManager\V1\SecretPayload; / Uncomment and populate these variables in your code / // $projectId = 'YOUR GOOGLE CLOUD PROJECT' (e.g. 'my-project'); // $secretId = 'YOUR SECRET ID' (e.g. 'my-secret'); // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the parent name from the project. $parent = $client->projectName($projectId); // Create the parent secret. $createSecretRequest = (new CreateSecretRequest()) ->setParent($parent) ->setSecretId($secretId) ->setSecret(new Secret([ 'replication' => new Replication([ 'automatic' => new Automatic(), ]), ])); $secret = $client->createSecret($createSecretRequest); // Add the secret version. $addSecretVersionRequest = (new AddSecretVersionRequest()) ->setParent($secret->getName()) ->setPayload(new SecretPayload([ 'data' => 'hello world', ])); $version = $client->addSecretVersion($addSecretVersionRequest); // Access the secret version. $accessSecretVersionRequest = (new AccessSecretVersionRequest()) ->setName($version->getName()); $response = $client->accessSecretVersion($accessSecretVersionRequest); // Print the secret payload. // // WARNING: Do not print the secret in a production environment - this // snippet is showing how to access the secret material. $payload = $response->getPayload()->getData(); printf('Plaintext: %s' .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client and instantiate it: const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); const client = new SecretManagerServiceClient (); / TODO(developer): Uncomment these variables before running the sample. / // parent = 'projects/my-project', // Project for which to manage secrets. // secretId = 'foo', // Secret ID. // payload = 'hello world!' // String source data. async function createAndAccessSecret () { // Create the secret with automation replication. const [ secret ] = await client . createSecret ({ parent : parent , secret : { name : secretId , replication : { automatic : {}, }, }, secretId , }); console . info ( Created secret ${ secret . name } ); // Add a version with a payload onto the secret. const [ version ] = await client . addSecretVersion ({ parent : secret . name , payload : { data : Buffer . from ( payload , 'utf8' ), }, }); console . info ( Added secret version ${ version . name } ); // Access the secret. const [ accessResponse ] = await client . accessSecretVersion ({ name : version . name , }); const responsePayload = accessResponse . payload . data . toString ( 'utf8' ); console . info ( Payload: ${ responsePayload } ); } createAndAccessSecret (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . require "google/cloud/secret manager" Secret manager quickstart @param project id [String] Your Google Cloud project (e.g. "my-project") @param secret id [String] Your secret name (e.g. "my-secret") def quickstart project id :, secret id : Create the Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the parent name from the project. parent = "projects/ #{ project id } " Create the parent secret. secret = client . create secret ( parent : parent , secret id : secret id , secret : { replication : { automatic : {} } } ) Add a secret version. version = client . add secret version ( parent : secret . name , payload : { data : "hello world!" } ) Access the secret version. response = client . access secret version name : version . name Print the secret payload.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Sample quickstart is a basic program that uses Secret Manager. package main import ( "context" "fmt" "log" secretmanager "cloud.google.com/go/secretmanager/apiv1" "cloud.google.com/go/secretmanager/apiv1/secretmanagerpb" ) func main () { // GCP project in which to store secrets in Secret Manager. projectID := "your-project-id" // Create the client. ctx := context .

### Create and manage annotations \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\CreateSecretRequest; use Google\Cloud\SecretManager\V1\Replication; use Google\Cloud\SecretManager\V1\Replication\Automatic; use Google\Cloud\SecretManager\V1\Secret; use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') @param string $annotationKey Your annotation key (e.g. 'annotation-key') @param string $annotationValue Your annotation value (e.g. 'annotation-value') / function create secret with annotations(string $projectId, string $secretId, string $annotationKey, string $annotationValue): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent project. $parent = $client->projectName($projectId); $secret = new Secret([ 'replication' => new Replication([ 'automatic' => new Automatic(), ]), ]); // set the annoation. $annotation = [$annotationKey => $annotationValue]; $secret->setAnnotations($annotation); // Build the request. $request = CreateSecretRequest::build($parent, $secretId, $secret); // Create the secret. $newSecret = $client->createSecret($request); // Print the new secret name. printf('Created secret %s with annotations', $newSecret->getName()); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . require "google/cloud/secret manager" Edits a secret annotations. @param project id [String] Your Google Cloud project (e.g. "my-project") @param secret id [String] Your secret name (e.g. "my-secret") @param annotation key [String] Your annotation key (e.g. "my-annotation-key") @param annotation value [String] Your annotation value (e.g. "my-annotation-value") def edit secret annotations project id :, secret id :, annotation key :, annotation value : Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the secret. name = client . secret path project : project id , secret : secret id Get the existing secret. existing secret = client . get secret name : name Get the existing secret's annotations. existing secret annotations = existing secret . annotations . to h Add a new annotation key and value. existing secret annotations [ annotation key ] = annotation value Updates the secret. secret = client . update secret ( secret : { name : name , annotations : existing secret annotations }, update mask : { paths : [ "annotations" ] } ) Print the updated secret name and annotations. puts "Updated secret: #{ secret . name } " puts "New updated annotations: #{ secret . annotations } " end View annotations To view annotations attached to a secret, use one of the following methods: Console In the Google Cloud console, go to the Secret Manager page.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const name = 'projects/my-project/secrets/my-secret'; // const annotationKey = 'updatedannotationkey'; // const annotationValue = 'updatedannotationvalue'; // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function getSecret () { const [ secret ] = await client . getSecret ({ name : name , }); return secret ; } async function editSecretAnnotations () { const oldSecret = await getSecret (); oldSecret . annotations [ annotationKey ] = annotationValue ; const [ secret ] = await client . updateSecret ({ secret : { name : name , annotations : oldSecret . annotations , }, updateMask : { paths : [ 'annotations' ], }, }); console . info ( Updated secret ${ secret . name } ); } editSecretAnnotations (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . require "google/cloud/secret manager" View annotations of a secret. @param project id [String] Your Google Cloud project (e.g. "my-project") @param secret id [String] Your secret name (e.g. "my-secret") def view secret annotations project id :, secret id : Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the secret. name = client . secret path project : project id , secret : secret id Get the existing secret. existing secret = client . get secret name : name Get the existing secret's annotations. existing secret annotations = existing secret . annotations . to h Print the secret name and the annotations. puts "Secret: #{ existing secret . name } " existing secret annotations . each do key , value puts "Annotation Key: #{ key } , Annotation Value: #{ value } " end end What's next Learn how to manage access to secrets .

### Create a secret \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . // Import the Secret Manager client library. use Google\Cloud\SecretManager\V1\CreateSecretRequest; use Google\Cloud\SecretManager\V1\Replication; use Google\Cloud\SecretManager\V1\Replication\Automatic; use Google\Cloud\SecretManager\V1\Secret; use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient; / @param string $projectId Your Google Cloud Project ID (e.g. 'my-project') @param string $secretId Your secret ID (e.g. 'my-secret') / function create secret(string $projectId, string $secretId): void { // Create the Secret Manager client. $client = new SecretManagerServiceClient(); // Build the resource name of the parent project. $parent = $client->projectName($projectId); $secret = new Secret([ 'replication' => new Replication([ 'automatic' => new Automatic(), ]), ]); // Build the request. $request = CreateSecretRequest::build($parent, $secretId, $secret); // Create the secret. $newSecret = $client->createSecret($request); // Print the new secret name. printf('Created secret: %s', $newSecret->getName()); } Python To run this code, first set up a Python development environment and install the Secret Manager Python SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . / TODO(developer): Uncomment these variables before running the sample. / // const parent = 'projects/my-project'; // const secretId = 'my-secret'; // const ttl = undefined // Optional: Specify TTL in seconds (e.g., '900s' for 15 minutes). // Imports the Secret Manager library const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' ); // Instantiates a client const client = new SecretManagerServiceClient (); async function createSecret () { const secretConfig = { replication : { automatic : {}, }, }; // Add TTL to the secret configuration if provided if ( ttl ) { secretConfig . ttl = { seconds : parseInt ( ttl . replace ( 's' , '' ), 10 ), }; console . log ( Secret TTL set to ${ ttl } ); } const [ secret ] = await client . createSecret ({ parent : parent , secretId : secretId , secret : secretConfig , }); console . log ( Created secret ${ secret . name } ); } createSecret (); PHP To run this code, first learn about using PHP on Google Cloud and install the Secret Manager PHP SDK .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . project id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project") secret id = "YOUR-SECRET-ID" # (e.g. "my-secret") Require the Secret Manager client library. require "google/cloud/secret manager" Create a Secret Manager client. client = Google :: Cloud :: SecretManager . secret manager service Build the resource name of the parent project. parent = client . project path project : project id Create the secret. secret = client . create secret ( parent : parent , secret id : secret id , secret : { replication : { automatic : {} } } ) Print the new secret name. puts "Created secret: #{ secret . name } " To select the right replication policy for your secret, see Choose a replication policy .
- SecretManagerServiceClient () Build the resource name of the parent project. parent = f "projects/ { project id } " Create the secret. response = client . create secret ( request = { "parent" : parent , "secret id" : secret id , "secret" : { "replication" : { "automatic" : {}}, "ttl" : ttl }, } ) Print the new secret name. print ( f "Created secret: { response . name } " ) Ruby To run this code, first set up a Ruby development environment and install the Secret Manager Ruby SDK .


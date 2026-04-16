---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.049Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "gcloud kms import-jobs command group"
feature_slug: "gcloud-kms-import-jobs-command-group"
latest_feature_date: "2019-07-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
  - "https://docs.cloud.google.com/kms/docs/reference/libraries"
  - "https://docs.cloud.google.com/kms/docs/create-resource-with-autokey"
  - "https://docs.cloud.google.com/kms/docs/creating-managing-labels"
keywords:
  - "gcloud"
  - "kms"
  - "import"
  - "jobs"
  - "command"
  - "group"
  - "the"
  - "cli"
---

# gcloud kms import-jobs command group

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

The gcloud CLI includes a beta command group for managing Cloud KMS import jobs.

## Extended Definition

The gcloud CLI includes a beta command group for managing Cloud KMS import jobs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/reference/libraries](https://docs.cloud.google.com/kms/docs/reference/libraries)
- [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels)

## Supporting Pages

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use a command like the following to create an import job. gcloud kms import-jobs create IMPORT JOB \ --location LOCATION \ --keyring KEY RING \ --import-method IMPORT METHOD \ --protection-level PROTECTION LEVEL Use the same key ring and location as the target key.
- The state will be visible under Status next to your import job's name. gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI .
- The state will be visible under Status next to your import job's name. gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI .
- Your Import key version page should look similar to: Click Import . gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI .

### "Cloud KMS client libraries \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/libraries](https://docs.cloud.google.com/kms/docs/reference/libraries)
- Source ID: `site-api-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .79.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - kms < / artifactId > < / dependency > < / dependencies > If you are using Gradle , add the following to your dependencies: implementation ' com . google . cloud : google - cloud - kms : 2.91.0 ' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-kms" % "2.91.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.
- System . out . println ( "key rings:" ); for ( KeyRing keyRing : response . iterateAll ()) { System . out . printf ( "%s%n" , keyRing . getName ()); } } } } Node.js // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the location name const locationName = client . locationPath ( projectId , locationId ); async function listKeyRings () { const [ keyRings ] = await client . listKeyRings ({ parent : locationName , }); for ( const keyRing of keyRings ) { console . log ( keyRing . name ); } return keyRings ; } return listKeyRings (); PHP use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\ListKeyRingsRequest; function quickstart( string $projectId = 'my-project', string $locationId = 'us-east1' ) { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the parent location name. $locationName = $client->locationName($projectId, $locationId); // Call the API. $listKeyRingsRequest = (new ListKeyRingsRequest()) ->setParent($locationName); $keyRings = $client->listKeyRings($listKeyRingsRequest); // Example of iterating over key rings. printf('Key rings in %s:' .
- ListKeyRings ( locationName )) { // ... (e.g. keyRing.Name) } } } Go // Sample quickstart is a basic program that uses Cloud KMS. package main import ( "context" "fmt" "log" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" "google.golang.org/api/iterator" ) func main () { // GCP project with which to communicate. projectID := "your-project-id" // Location in which to list key rings. locationID := "global" // Create the client. ctx := context .
- After installation, initialize the Google Cloud CLI by running the following command: gcloud init If you're using an external identity provider (IdP), you must first sign in to the gcloud CLI with your federated identity .

### "Create protected resources using Cloud KMS Autokey \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Create an encrypted secret with automatic replication by using the gcloud secrets create command , with the --kms-key-name flag. gcloud secrets create " SECRET ID " \ --replication-policy "automatic" \ --kms-key-name "projects/ KEY PROJECT ID /locations/global/keyRings/autokey/cryptoKeys/ KEY NAME " \ --project " RESOURCE PROJECT ID " Replace the following: SECRET ID : the ID to use for the new secret.
- Create an encrypted disk by using the gcloud compute disks create command , with the --kms-key flag: gcloud compute disks create DISK NAME \ --kms-key projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/autokey/cryptoKeys/ KEY NAME Replace the following: DISK NAME : the name of the new disk.
- Create an encrypted dataset by using the bq mk command , with the --destination kms key flag. bq --location = LOCATION mk \ --dataset \ --default kms key = projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/autokey/cryptoKeys/ KEY NAME \ --default table expiration = TABLE EXPIRATION \ --description = " DATASET DESCRIPTION " \ RESOURCE PROJECT ID : DATASET ID Replace the following: LOCATION : the location where you want to create the dataset.
- Create an encrypted bucket by using the gcloud storage buckets create command , with the --default-encryption-key flag: gcloud storage buckets create gs:// BUCKET NAME \ --location = LOCATION \ --default-encryption-key = projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/autokey/cryptoKeys/ KEY NAME Replace the following: BUCKET NAME : the name of the new bucket.

### Labeling keys \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- In the panel, choose the Labels tab. gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms keys describe KEY NAME \ --keyring KEY RING \ --location LOCATION Replace the following: KEY NAME : the name of the key for which you want to view labels.
- Click Save . gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms keys update KEY NAME \ --keyring KEY RING \ --location LOCATION \ --update-labels " LABEL LIST " KEY NAME : the name of the key.
- Click Save . gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms keys update KEY NAME \ --keyring KEY RING \ --location LOCATION \ --remove-labels " LABEL KEYS " KEY NAME : the name of the key.
- Click Create . gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI .


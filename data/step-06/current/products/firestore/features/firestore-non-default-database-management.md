---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.878Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore non-default database management"
feature_slug: "firestore-non-default-database-management"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library"
  - "https://docs.cloud.google.com/firestore/docs/manage-databases"
  - "https://docs.cloud.google.com/firestore/native/docs/create-database-web-mobile-client-library"
keywords:
  - "firestore"
  - "non"
  - "default"
  - "database"
  - "management"
  - "you"
  - "can"
  - "create"
---

# Firestore non-default database management

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

You can create and delete non-default databases in the Google Cloud console.

## Extended Definition

You can create and delete non-default databases in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library)
- [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases)
- [https://docs.cloud.google.com/firestore/native/docs/create-database-web-mobile-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-web-mobile-client-library)

## Supporting Pages

### "Quickstart: Create a Firestore database by using a server client library\

- URL: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library)
- Source ID: `site-docs-reference-required-4`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Fatalf ( "Failed to create client: %v" , err ) } // Close client when done with // defer client.Close() return client } main . go PHP use Google\Cloud\Firestore\FirestoreClient; / Initialize Cloud Firestore with default project ID. / function setup client create(string $projectId = null) { // Create the Cloud Firestore client if (empty($projectId)) { // The projectId parameter is optional and represents which project the // client will act on behalf of.
- If not supplied, the client falls back to the default project inferred from the environment. firestore = Google :: Cloud :: Firestore . new project id : project id puts "Created Cloud Firestore client with given project ID." quickstart . rb Add data Firestore stores data in Documents, which are stored in Collections.
- Create a Firestore database by using a server client library This quickstart shows you how to set up Firestore, add data, and read data by using the C#, Go, Java, Node.js, PHP, Python, or Ruby server client library.
- If not supplied, the client falls back to // the default project inferred from the environment. $db = new FirestoreClient(); printf('Created Cloud Firestore client with default project ID.' .

### "Create and manage databases \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to configure CMEK encryption for the cloned database: gcloud firestore databases clone \ --source-database = 'projects/example-project/databases/(default)' \ --snapshot-time = '2025-06-01T10:20:00.00Z' \ --destination-database = 'example-dest-db' \ --encryption-type = 'customer-managed-encryption' \ --kms-key-name = 'projects/example-project/locations/us-central1/keyRings/example-key-ring/cryptoKeys/example-key' Configure per-database access permissions You can use Identity and Access Management Conditions to configure access permissions on a per-database level.
- Required roles and permissions To create and manage databases, you'll need the following Identity and Access Management role: Cloud Datastore Owner ( roles/datastore.owner ) That role grants the following permissions that you need to create and manage databases: Create a database: datastore.databases.create Read database configuration: datastore.databases.getMetadata Configure a database: datastore.databases.update Delete a database: datastore.databases.delete Clone a database: datastore.databases.clone Create a database To create a database, use one of the following methods: Console In the Google Cloud console, go to the Databases page.
- Example: gcloud firestore databases clone \ --source-database = 'projects/example-project/databases/(default)' \ --snapshot-time = '2025-06-01T10:20:00.00Z' \ --destination-database = 'example-dest-db' If you want to bind to some tags while cloning a database, use the previous command with the --tags flag, which is an optional list of tags KEY=VALUE pairs to bind.
- To create a Firestore Enterprise edition database in Native mode: gcloud firestore databases create \ --database= DATABASE ID \ --location= LOCATION \ --edition=enterprise \ --enable-firestore-data-access \ --no-enable-mongodb-compatible-data-access \ --enable-realtime-updates Replace the following: DATABASE ID : a valid database ID .

### "Quickstart: Create a Firestore database by using a web or mobile client\

- URL: [https://docs.cloud.google.com/firestore/native/docs/create-database-web-mobile-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-web-mobile-client-library)
- Source ID: `site-docs-reference-required-4`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift Note: This product is not available on watchOS and App Clip targets. import FirebaseCore import FirebaseFirestore FirebaseApp . configure () let db = Firestore . firestore () AppDelegate . swift Objective-C Note: This product is not available on watchOS and App Clip targets. @import FirebaseCore ; @import FirebaseFirestore ; // Use Firebase library to configure APIs [ FIRApp configure ]; FIRFirestore defaultFirestore = [ FIRFirestore firestore ]; AppDelegate . m Kotlin Android // Access a Firestore instance from your Activity val db = Firebase . firestore DocSnippets . kt Java Android // Access a Firestore instance from your Activity FirebaseFirestore db = FirebaseFirestore . getInstance (); DocSnippets . java Dart db = FirebaseFirestore . instance ; C++ // Make sure the call to Create() happens some time before you call Firestore::GetInstance().
- Create a Firestore database by using a web or mobile client library This quickstart shows you how to set up Firestore, add data, and read data by using the Android, Apple platforms, Web, Unity, or C++ client library.
- If you create multiple databases for your project, you can deploy Firestore Security Rules for each database.
- Your initial set of Firestore Security Rules will apply to your default Firestore database.


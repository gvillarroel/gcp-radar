---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.700Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Firestore Triggers (Events)"
feature_slug: "firestore-triggers-events"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/eventarc"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-data"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect"
keywords:
  - "firestore"
  - "triggers"
  - "events"
  - "enables"
  - "for"
  - "with"
  - "mongodb"
  - "compatibility"
---

# Firestore Triggers (Events)

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Enables Firestore Triggers for Firestore with MongoDB compatibility databases.

## Extended Definition

Enables Firestore Triggers for Firestore with MongoDB compatibility databases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/eventarc](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/eventarc)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-data](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-data)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect)

## Supporting Pages

### "Extend Firestore with MongoDB compatibility with event triggers using Cloud\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions)
- Source ID: `site-iam-reference`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Extend Firestore with MongoDB compatibility with event triggers using Cloud Run functions With Cloud Run functions, you can deploy code to handle events triggered by changes in your Cloud Run database.
- Run the following command to create a trigger that filters events: gcloud eventarc triggers create TRIGGER NAME \ --location= EVENTARC TRIGGER LOCATION \ --destination-run-service= FUNCTION \ --destination-run-region= REGION \ --event-filters="type=google.cloud.firestore.document.v1.created" \ --service-account= PROJECT NUMBER -compute@developer.gserviceaccount.com Replace: TRIGGER NAME with the name for your trigger.
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- This guide describes how to create triggers for Cloud Run functions from Firestore events.

### "Create event-driven architectures with Eventarc \_|\_ Firestore with MongoDB\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/eventarc](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/eventarc)
- Source ID: `site-iam-reference`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firestore with MongoDB compatibility triggers for Eventarc generate events from changes to a particular documents in your database.
- Limitations Note the following limitations for Firestore with MongoDB compatibility triggers for Eventarc: Ordering is not guaranteed.
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Create event-driven architectures with Eventarc You can use Eventarc and Firestore with MongoDB compatibility to build event-driven architectures .

### Migrate to Firestore with MongoDB compatibility \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-data](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-data)
- Source ID: `site-iam-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After the replication completes, the Firestore with MongoDB compatibility database can become the new source of truth for your application workload.
- Limitations Before you begin, review the differences between Firestore with MongoDB compatibility and MongoDB .
- Migrate to Firestore with MongoDB compatibility This guide takes you through the step-by-step process of migrating your MongoDB-compatible source database to a Firestore with MongoDB compatibility database with minimal downtime.
- Migrate traffic to Firestore : At the appropriate point in the procedure, you migrate your application read and write traffic to the Firestore with MongoDB compatibility database and stop the migration pipeline.

### "Authenticate and connect to a database \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a user and connect to a database To create a user for your Firestore with MongoDB compatibility database, use one of the following method: Google Cloud console In the Google Cloud console, go to the Databases page.
- Authenticate and connect to a database Connection requirements The following are required for Firestore with MongoDB compatibility clients: Drivers must connect in load balanced mode.
- CopyFrom ( updated policy ) final policy = client . set iam policy ( set policy request ) print ( f 'Policy updated successfully { final policy } ' ) def provision firestore user creds and iam ( project id : str , database id : str , user name : str ): """Provision user credentials and configure an IAM policy.""" user creds = create user creds ( project id , database id , user name ) Note the password returned in the UserCreds proto - it cannot be retrieved again after the initial call to the create user creds API. print ( f 'Created credentials for username: { user name } ' ) print ( f 'IAM principal: { user creds . resource identity . principal } ' ) print ( f 'Password: [ { user creds . secure password } ]' ) Provision an IAM binding for the principal associated with these user credentials. update iam policy for user creds ( project id , database id , user name , user creds ) Emit the password again print ( f 'Successfully configured IAM policy for database: { database id } ,' f ' username: { user name } ' ) print ( f 'Please make a note of the password: [ { user creds . secure password } ]' ) Use the following connection string to connect to your database with SCRAM: mongodb : // USERNAME : PASSWORD @ UID .
- This requires adding the auth library as a dependency : // Maven <dependency> <groupId>com.google.auth</groupId> <artifactId>google-auth-library-oauth2-http</artifactId> <version>1.19.0</version> </dependency> // Gradle implementation 'com.google.auth:google-auth-library-oauth2-http:1.19.0' The following code sample demonstrates how to connect: val db = MongoClients . create ( clientSettings ( " DATABASE UID " , " LOCATION " ). build () ). getDatabase ( " DATABASE ID " ) / Creates a connection to a Firestore with MongoDB Compatibility database. @param databaseUid The uid of the database to connect to as a string.


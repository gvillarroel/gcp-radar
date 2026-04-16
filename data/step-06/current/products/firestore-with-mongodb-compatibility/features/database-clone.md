---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.666Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Database clone"
feature_slug: "database-clone"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect"
keywords:
  - "database"
  - "clone"
  - "provides"
  - "cloning"
  - "for"
  - "firestore"
  - "with"
  - "mongodb"
---

# Database clone

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Provides a database cloning feature for Firestore with MongoDB compatibility.

## Extended Definition

Provides a database cloning feature for Firestore with MongoDB compatibility.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect)

## Supporting Pages

### "Create and manage databases \_|\_ Firestore with MongoDB compatibility \_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required permissions To manage databases, you need the following permissions: Create a database: datastore.databases.create Read database configuration: datastore.databases.getMetadata Configure a database: datastore.databases.update Delete a database: datastore.databases.delete Clone a database: datastore.databases.clone Create a database To create a Firestore with MongoDB compatibility database, use one of the following methods: Google Cloud console In the Google Cloud console, go to the Databases page.
- Example: gcloud firestore databases clone \ --source-database = 'projects/example-project/databases/example-source-db' \ --snapshot-time = '2025-06-01T10:20:00.00Z' \ --destination-database = 'example-dest-db' If you want to bind to some tags while cloning a database, use the previous command with the --tags flag, which is an optional list of tags KEY=VALUE pairs to bind.
- The following example shows how to configure CMEK encryption for the cloned database: gcloud firestore databases clone \ --source-database = 'projects/example-project/databases/example-source-db' \ --snapshot-time = '2025-06-01T10:20:00.00Z' \ --destination-database = 'example-dest-db' \ --encryption-type = 'customer-managed-encryption' \ --kms-key-name = 'projects/example-project/locations/us-central1/keyRings/example-key-ring/cryptoKeys/example-key' Configure per-database access permissions You can use Identity and Access Management Conditions to configure access permissions on a per-database level.
- If you want to specify a different encryption configuration for the cloned database, you can use Google Cloud CLI commands. gcloud Use the gcloud firestore databases clone command to clone a database: gcloud firestore databases clone \ --source-database = ' SOURCE DATABASE ' \ --snapshot-time = ' PITR TIMESTAMP ' \ --destination-database = ' DESTINATION DATABASE ID ' Replace the following: SOURCE DATABASE : the database name of an existing database that you want to clone.

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about cloning a CMEK-protected Firestore with MongoDB compatibility database, see Clone a CMEK-protected database .
- For more information about cloning a Firestore with MongoDB compatibility database, see Clone a database .
- In the event of a key being unavailable, to preserve data beyond the seven days limit, we recommend that you enable backups for your Firestore with MongoDB compatibility CMEK database with the required retention period.
- Organization policy constraints : You can use CMEK organization policy constraints to specify encryption compliance requirements for Firestore with MongoDB compatibility databases in your organization.

### "Plan disaster recovery \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery)
- Source ID: `site-iam-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disaster recovery planning for cloud infrastructure outages To protect against potential cloud infrastructure disruptions in Google Cloud such as a zone or region experiencing an outage, Firestore with MongoDB compatibility replicates data across multiple replica databases.
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Firestore with MongoDB compatibility automatically handles replication for you and doesn't require additional configuration or provisioning.
- You can restore your database from a backup to a new Firestore with MongoDB compatibility database in the same project.

### "Authenticate and connect to a database \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect)
- Source ID: `site-iam-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CopyFrom ( updated policy ) final policy = client . set iam policy ( set policy request ) print ( f 'Policy updated successfully { final policy } ' ) def provision firestore user creds and iam ( project id : str , database id : str , user name : str ): """Provision user credentials and configure an IAM policy.""" user creds = create user creds ( project id , database id , user name ) Note the password returned in the UserCreds proto - it cannot be retrieved again after the initial call to the create user creds API. print ( f 'Created credentials for username: { user name } ' ) print ( f 'IAM principal: { user creds . resource identity . principal } ' ) print ( f 'Password: [ { user creds . secure password } ]' ) Provision an IAM binding for the principal associated with these user credentials. update iam policy for user creds ( project id , database id , user name , user creds ) Emit the password again print ( f 'Successfully configured IAM policy for database: { database id } ,' f ' username: { user name } ' ) print ( f 'Please make a note of the password: [ { user creds . secure password } ]' ) Use the following connection string to connect to your database with SCRAM: mongodb : // USERNAME : PASSWORD @ UID .
- Create a user and connect to a database To create a user for your Firestore with MongoDB compatibility database, use one of the following method: Google Cloud console In the Google Cloud console, go to the Databases page.
- Authenticate and connect to a database Connection requirements The following are required for Firestore with MongoDB compatibility clients: Drivers must connect in load balanced mode.
- This requires adding the auth library as a dependency : // Maven <dependency> <groupId>com.google.auth</groupId> <artifactId>google-auth-library-oauth2-http</artifactId> <version>1.19.0</version> </dependency> // Gradle implementation 'com.google.auth:google-auth-library-oauth2-http:1.19.0' The following code sample demonstrates how to connect: val db = MongoClients . create ( clientSettings ( " DATABASE UID " , " LOCATION " ). build () ). getDatabase ( " DATABASE ID " ) / Creates a connection to a Firestore with MongoDB Compatibility database. @param databaseUid The uid of the database to connect to as a string.


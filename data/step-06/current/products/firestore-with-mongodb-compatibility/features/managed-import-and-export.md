---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.702Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Managed import and export"
feature_slug: "managed-import-and-export"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers"
keywords:
  - "managed"
  - "import"
  - "and"
  - "export"
  - "firestore"
  - "with"
  - "mongodb"
  - "compatibility"
---

# Managed import and export

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Firestore with MongoDB compatibility supports managed import and export operations; Firestore with MongoDB compatibility supports managed import and export in Preview.

## Extended Definition

Firestore with MongoDB compatibility supports managed import and export operations; Firestore with MongoDB compatibility supports managed import and export in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers)

## Supporting Pages

### "Import and export data \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- Source ID: `site-iam-reference`
- Final score: 378
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Firestore with MongoDB compatibility managed export and import service is available through the gcloud command-line tool and the Firestore with MongoDB compatibility API ( REST , RPC ).
- This page describes how to export and import Firestore with MongoDB compatibility documents using the managed export and import service and Cloud Storage .
- Otherwise, the following roles grant the necessary permissions for export and import operations and for access to Cloud Storage: Firestore with MongoDB compatibility roles: Owner , Cloud Datastore Owner , or Cloud Datastore Import Export Admin Note: These Datastore roles also grant permissions in Firestore with MongoDB compatibility.
- Manage export and import operations After you start an export or import operation, Firestore with MongoDB compatibility assigns the operation a unique name.

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the system detects that the key is unavailable, within 10 minutes any subsequent calls to the Firestore with MongoDB compatibility database, including reads, writes, and queries, return a INVALID ARGUMENT error with the following message: The customer-managed encryption key required by the requested resource is not accessible.
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Firestore with MongoDB compatibility, see Use CMEK .
- Instead of Google managing the encryption keys that protect your data, your Firestore with MongoDB compatibility database is protected using a key that you control and manage in Cloud Key Management Service (Cloud KMS) .
- Instead, the Firestore with MongoDB compatibility system polls Cloud KMS every 5 minutes to check if the key is still available and then performs encrypt and decrypt operations if the key is available.

### "Authenticate and connect to a database \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/connect)
- Source ID: `site-iam-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a user and connect to a database To create a user for your Firestore with MongoDB compatibility database, use one of the following method: Google Cloud console In the Google Cloud console, go to the Databases page.
- Authenticate and connect to a database Connection requirements The following are required for Firestore with MongoDB compatibility clients: Drivers must connect in load balanced mode.
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- CopyFrom ( updated policy ) final policy = client . set iam policy ( set policy request ) print ( f 'Policy updated successfully { final policy } ' ) def provision firestore user creds and iam ( project id : str , database id : str , user name : str ): """Provision user credentials and configure an IAM policy.""" user creds = create user creds ( project id , database id , user name ) Note the password returned in the UserCreds proto - it cannot be retrieved again after the initial call to the create user creds API. print ( f 'Created credentials for username: { user name } ' ) print ( f 'IAM principal: { user creds . resource identity . principal } ' ) print ( f 'Password: [ { user creds . secure password } ]' ) Provision an IAM binding for the principal associated with these user credentials. update iam policy for user creds ( project id , database id , user name , user creds ) Emit the password again print ( f 'Successfully configured IAM policy for database: { database id } ,' f ' username: { user name } ' ) print ( f 'Please make a note of the password: [ { user creds . secure password } ]' ) Use the following connection string to connect to your database with SCRAM: mongodb : // USERNAME : PASSWORD @ UID .

### "Supported MongoDB data types and drivers \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Languages and MongoDB drivers Firestore with MongoDB compatibility supports the following driver versions: Language Driver versions Java 5.x Node.js 6.x 5.x Python 4.x 3.x (x ≥ 12) Go 2.x C# 3.x Ruby 2.x (x ≥ 16) OIDC authentication support The Go, C#, and Ruby drivers support OpenID Connect (OIDC) authentication from Google Cloud for all supported driver versions.
- The Java, Node.js, and Python drivers support OIDC authentication from Google Cloud starting with the following driver versions: Java: 4.10 Node.js: 6.7 Python: 4.7 Third-party tools Firestore with MongoDB compatibility supports third-party tools described in this section.
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To obtain a connection string for your Firestore with MongoDB compatibility database, you can run the firestore databases connection-string command using Google Cloud CLI.


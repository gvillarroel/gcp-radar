---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.864Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore support in Database Center"
feature_slug: "firestore-support-in-database-center"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library"
  - "https://docs.cloud.google.com/firestore/docs/manage-databases"
  - "https://docs.cloud.google.com/firestore/docs/custom-constraints"
keywords:
  - "firestore"
  - "database"
  - "center"
  - "resources"
  - "can"
  - "tracked"
  - "fleet"
  - "inventory"
---

# Firestore support in Database Center

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore resources can be tracked in Database Center fleet inventory and resource tables, with health monitoring for backup and point-in-time recovery issues; Firestore is supported by Database Center, which can surface the No automated backup policy health issue.

## Extended Definition

Firestore resources can be tracked in Database Center fleet inventory and resource tables, with health monitoring for backup and point-in-time recovery issues; Firestore is supported by Database Center, which can surface the No automated backup policy health issue.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library)
- [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases)
- [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints)

## Supporting Pages

### "Quickstart: Create a Firestore database by using a server client library\

- URL: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library)
- Source ID: `site-docs-reference-required-4`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Some of your project's resources (like the default Firestore instance) share a common location dependency, and their location can be set either during project creation or when setting up another service that shares this location dependency.
- Create a Firestore database by using a server client library This quickstart shows you how to set up Firestore, add data, and read data by using the C#, Go, Java, Node.js, PHP, Python, or Ruby server client library.
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Create a Firestore in Native Mode in Native mode database If this is a new project, you need to create a Firestore database instance.

### "Create and manage databases \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: --tags=123/environment=production,123/costCenter=marketing --tags=tagKeys/333=tagValues/444 Firebase CLI firebase firestore:databases:create DATABASE ID \ --location= LOCATION \ [--delete-protection DELETE PROTECTION ENABLEMENT ] Replace the following: DATABASE ID : a valid database ID .
- Cloud Monitoring Firestore metrics are reported under two monitored resources. firestore.googleapis.com/Database firestore instance (Legacy) You can inspect aggregate metrics at the database level by looking at firestore.googleapis.com/Database .
- To delete a database use the Google Cloud CLI . gcloud Use the gcloud firestore databases list command to list all the databases in your project. gcloud firestore databases list Firebase CLI Use the firebase firestore:databases:list command to list all the databases in your project. firebase firestore:databases:list View database details To view details about a single database, use one of the following methods: gcloud Use the gcloud firestore databases describe command: gcloud firestore databases describe --database= DATABASE ID Firebase CLI Use the firebase firestore:databases:get command: firebase firestore:databases:get DATABASE ID Replace DATABASE ID with a database ID.
- The following example shows how to configure CMEK encryption for the cloned database: gcloud firestore databases clone \ --source-database = 'projects/example-project/databases/(default)' \ --snapshot-time = '2025-06-01T10:20:00.00Z' \ --destination-database = 'example-dest-db' \ --encryption-type = 'customer-managed-encryption' \ --kms-key-name = 'projects/example-project/locations/us-central1/keyRings/example-key-ring/cryptoKeys/example-key' Configure per-database access permissions You can use Identity and Access Management Conditions to configure access permissions on a per-database level.

### "Manage Firestore resources using custom constraints \_|\_ Firestore in Native\

- URL: [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage Firestore resources using custom constraints This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: firestore.googleapis.com/Database To learn more about Organization Policy, see Custom organization policies .
- Note that the format of a database name in custom organization policies is projects/ project-id /databases/ database-id while only database-id is specified in database management operations. name : organizations/ ORGANIZATION ID /customConstraints/custom.nameSuffixMobile resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.name.endsWith('-mobile')" actionType : ALLOW displayName : Firestore database names end with "-mobile" description : Only allow the creation of database names ending with suffix "-mobile" Databases can only be created in specified locations . name : organizations/ ORGANIZATION ID /customConstraints/custom.locationUsCentral1 resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.locationId == 'us-central1'" actionType : ALLOW displayName : Firestore database location id us-central1 description : Only allow the creation of databases in region us-central1 Databases must be of the specified type . name : organizations/ ORGANIZATION ID /customConstraints/custom.typeFirestore resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.type==" FIRESTORE NATIVE"" actionType : ALLOW displayName : Firestore database type Firestore Native description : Only allow creation and updating of databases if the type is Firestore in native mode.
- Set up the custom constraint at the organization level: gcloud org-policies set-custom-constraint deleteProtectionRequired.yaml Test the policy Try to create a database without setting the --delete-protection flag in a project in the organization: gcloud firestore database create \ --project = PROJECT ID \ --database = DATABASE ID \ The output is the following: Operation denied by custom org policies: ["customConstraints/custom.deleteProtectionRequired": "To ensure the data security, Delete Protection is required to be enabled for Firestore databases"] Test and analyze organization policy changes We recommend that you test and dry-run all changes to your organization policies, to better understand the state of your environment and how changes affect it.
- Test the custom organization policy Before you begin, you must know the following: Your organization ID Create the deleteProtectionRequired.yaml file as follows: name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == \"DELETE PROTECTION ENABLED\"" actionType : ALLOW displayName : Firestore Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.


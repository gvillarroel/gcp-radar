---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.779Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Multiple database visibility in Google Cloud console"
feature_slug: "multiple-database-visibility-in-google-cloud-console"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/console/managing-datastore"
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-statistics"
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console"
  - "https://docs.cloud.google.com/datastore/docs/concepts/indexes"
keywords:
  - "multiple"
  - "database"
  - "visibility"
  - "in"
  - "console"
  - "the"
  - "can"
  - "view"
---

# Multiple database visibility in Google Cloud console

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console can view and list multiple databases.

## Extended Definition

The Google Cloud console can view and list multiple databases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- [https://docs.cloud.google.com/datastore/docs/console/datastore-statistics](https://docs.cloud.google.com/datastore/docs/console/datastore-statistics)
- [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)

## Supporting Pages

### "Managing Firestore in Datastore mode from the Console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewing Datastore statistics In the Google Cloud console, go to the Databases page.
- Viewing entities In the Google Cloud console, go to the Databases page.
- Viewing indexes In the Google Cloud console, go to the Databases page.
- Home Documentation Databases Datastore Guides Send feedback Managing Firestore in Datastore mode from the Console Stay organized with collections Save and categorize content based on your preferences.

### Viewing Statistics in the Console \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-statistics](https://docs.cloud.google.com/datastore/docs/console/datastore-statistics)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Datastore Guides Send feedback Viewing Statistics in the Console Stay organized with collections Save and categorize content based on your preferences.
- In the Google Cloud console, go to the Databases page.
- To keep the overhead of storing and updating the statistics reasonable, the database progressively drops statistics entities.
- The "Datastore Stats" entity, if any, shows the space consumed by the statistics data itself in your database.

### Datastore Admin \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Database access permissions By default, Datastore Admin can access a Datastore database in the same project and does not require Identity and Access Management permissions for Datastore.
- To view your resource usage: Visit the Google Cloud console App Engine page.
- To view your resource usage: Visit the Google Cloud console App Engine page.
- Accessing Datastore Admin If you previously enabled Datastore Admin, you can continue to access the module by visiting https://ah-builtin-python-bundle-dot- PROJECT ID .appspot.com/ ah/datastore admin?app id= PROJECT ID , where PROJECT ID is the ID of your Google Cloud project.

### Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Multiple databases You can use gcloud firestore to manage a single index for Datastore mode or use gcloud datastore with an index.yaml file to manage all the indexes under a database. gcloud firestore gcloud firestore indexes composite create --api-scope=datastore-mode-api --query-scope= QUERY SCOPE --database= DATABASE ID gcloud datastore gcloud alpha datastore indexes create index.yaml --database= DATABASE ID Replace the following: DATABASE ID : a database ID.
- This will require 9 index entries, one for each possible combination of property values: ( 'fun' , 'alice' , NOW() ) ( 'fun' , 'bob' , NOW() ) ( 'fun' , 'charlie' , NOW() ) ( 'programming' , 'alice' , NOW() ) ( 'programming' , 'bob' , NOW() ) ( 'programming' , 'charlie' , NOW() ) ( 'learn' , 'alice' , NOW() ) ( 'learn' , 'bob' , NOW() ) ( 'learn' , 'charlie' , NOW() ) When the same property is repeated multiple times, Firestore in Datastore mode can detect exploding indexes and suggest an alternative index.
- Similarly, an entity that can have multiple values for the same property requires a separate index entry for each value; again, if the number of possible values is large, such an entity can exceed the entry limit.
- If your testing does not exercise every possible query form, you can review and adjust the index configuration file before updating indexes.


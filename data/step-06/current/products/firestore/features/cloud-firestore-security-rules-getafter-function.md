---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.913Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Cloud Firestore Security Rules getAfter() function"
feature_slug: "cloud-firestore-security-rules-getafter-function"
latest_feature_date: "2018-03-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/manage-data/transactions"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions"
  - "https://docs.cloud.google.com/firestore/native/docs/security/get-started"
keywords:
  - "firestore"
  - "security"
  - "rules"
  - "getafter"
  - "validate"
  - "during"
  - "atomic"
  - "operations"
---

# Cloud Firestore Security Rules getAfter() function

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Cloud Firestore Security Rules support getAfter() to validate data during atomic operations.

## Extended Definition

Cloud Firestore Security Rules support getAfter() to validate data during atomic operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/docs/manage-data/transactions)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions)
- [https://docs.cloud.google.com/firestore/native/docs/security/get-started](https://docs.cloud.google.com/firestore/native/docs/security/get-started)

## Supporting Pages

### "Transactions and batched writes \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/docs/manage-data/transactions)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data validation for atomic operations For mobile/web client libraries, you can validate data using Firestore Security Rules .
- The following security rules require that an update to a city document must also atomically update the related country's last updated field: service cloud . firestore { match /databases/{database } / documents { // If you update a city doc, you must also // update the related country's last updated field. match /cities/{city } { allow write : if request . auth != null && getAfter ( / databases / $( database ) / documents / countries / $ ( request . resource . data . country ) ) . data . last updated == request . time ; } match / countries / { country } { allow write : if request . auth != null ; } } } Security rules limits In security rules for transactions or batched writes, there is a limit of 20 document access calls for the entire atomic operation in addition to the normal 10 call limit for each single document operation in the batch.
- Use the getAfter() security rule function to access and validate the state of a document after a set of operations completes but before Firestore commits the operations.
- There are two types of atomic operations in Firestore: Transactions : a transaction is a set of read and write operations on one or more documents.

### "Transactions and batched writes \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data validation for atomic operations For mobile/web client libraries, you can validate data using Firestore Security Rules .
- The following security rules require that an update to a city document must also atomically update the related country's last updated field: service cloud . firestore { match /databases/{database } / documents { // If you update a city doc, you must also // update the related country's last updated field. match /cities/{city } { allow write : if request . auth != null && getAfter ( / databases / $( database ) / documents / countries / $ ( request . resource . data . country ) ) . data . last updated == request . time ; } match / countries / { country } { allow write : if request . auth != null ; } } } Security rules limits In security rules for transactions or batched writes, there is a limit of 20 document access calls for the entire atomic operation in addition to the normal 10 call limit for each single document operation in the batch.
- Use the getAfter() security rule function to access and validate the state of a document after a set of operations completes but before Firestore commits the operations.
- There are two types of atomic operations in Firestore: Transactions : a transaction is a set of read and write operations on one or more documents.

### "Getting started with security rules \_|\_ Firestore in Native mode \_|\_\

- URL: [https://docs.cloud.google.com/firestore/native/docs/security/get-started](https://docs.cloud.google.com/firestore/native/docs/security/get-started)
- Source ID: `site-docs-root-2`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All Firestore Security Rules consist of match statements, which identify documents in your database, and allow expressions, which control access to those documents: service cloud . firestore { match /databases/{database } / documents { match /<some path>/ { allow read, write : if < some condition > ; } } } Every database request from a Firestore mobile/web client library is evaluated against your security rules before reading or writing any data.
- Using the CLI allows you to keep your rules under version control with your application code and deploy rules as part of your existing deployment process. // Set up Firestore in your project directory, creates a .rules file firebase init firestore // Edit the generated .rules file to your desired security rules // ... // Deploy rules for all configured databases firebase deploy -- only firestore Next steps Learn how to structure security rules .
- You must opt-in to version 2 by making rules version = '2'; the first line in your security rules: rules version = '2'; service cloud.firestore { match /databases/{database}/documents { Writing rules You will write and manage Firestore Security Rules tailored to the data model you create for the default database and each additional database in your project.
- Getting started with security rules With Firestore Security Rules, you can focus on building a great user experience without having to manage infrastructure or write server-side authentication and authorization code.


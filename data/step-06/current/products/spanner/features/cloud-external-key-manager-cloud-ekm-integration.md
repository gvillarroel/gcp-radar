---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.320Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud External Key Manager (Cloud EKM) integration"
feature_slug: "cloud-external-key-manager-cloud-ekm-integration"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.TransactionContextFuture"
keywords:
  - "manager"
  - "external"
  - "integration"
  - "supports"
---

# Cloud External Key Manager (Cloud EKM) integration

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports Cloud External Key Manager (Cloud EKM) for customer-managed encryption keys and enables Key Access Justification for key access visibility.

## Extended Definition

Spanner now supports Cloud External Key Manager (Cloud EKM) for customer-managed encryption keys and enables Key Access Justification for key access visibility.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.TransactionContextFuture](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.TransactionContextFuture)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- For more considerations when using external keys, see the Cloud External Key Manager documentation .
- To use CMEKs created by Cloud KMS Autokey to protect your Spanner resources, use the steps provided for Secret Manager at Using Autokey with Secret Manager resources as an example.
- External key considerations When you use a Cloud EKM key, Google has no control over the availability of your externally-managed key in the external key management partner system.
- If an externally-managed key is unavailable, Spanner continues to support full database operations on a best-effort basis for up to one hour.

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Note: A Spanner free trial instance supports Standard edition features, and Enterprise edition features, such as KNN vector distance functions , full-text search , and Spanner Graph .
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .

### "Interface AsyncTransactionManager.TransactionContextFuture (6.111.1) \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.TransactionContextFuture](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncTransactionManager.TransactionContextFuture)
- Source ID: `site-java-reference`
- Final score: 61
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1 public static interface AsyncTransactionManager .
- Implements com.google.api.core.ApiFuture<com.google.cloud.spanner.TransactionContext> Methods <O>then(AsyncTransactionManager.AsyncTransactionFunction<Void,O> function, Executor executor) public abstract AsyncTransactionManager .
- Home Documentation Developer tools Java Client libraries Send feedback Interface AsyncTransactionManager.TransactionContextFuture (6.111.1) Stay organized with collections Save and categorize content based on your preferences.
- TransactionContextFuture extends ApiFuture<TransactionContext> ApiFuture that returns a TransactionContext and that supports chaining of multiple TransactionContextFuture s to form a transaction.


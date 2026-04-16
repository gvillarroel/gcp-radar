---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.313Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Django Spanner plugin"
feature_slug: "django-spanner-plugin"
latest_feature_date: "2021-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner"
keywords:
  - "django"
  - "plugin"
  - "backend"
  - "provides"
  - "used"
  - "enables"
---

# Django Spanner plugin

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Spanner now provides a Django plugin that enables Spanner to be used as a backend database for the Django web framework.

## Extended Definition

Google Cloud Spanner now provides a Django plugin that enables Spanner to be used as a backend database for the Django web framework.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- In load tests, this model does an acceptable job of distributing the secondary index read and write load across multiple Spanner splits, as illustrated in the following diagram: Although the synthetic data used in the load test is similar to the eventual steady state of the game where Attribute values are well distributed, the game design dictates that all players start with Attribute=50 .
- This document is intended for game backend engineers working on long-term state storage, and game infrastructure operators and admins who support those systems and are interested in hosting their backend database on Google Cloud.
- For the example attribute used in the preceding table, new players are given a starting value of 50, and this value then changes to a value between 1 and 100 as the player advances.
- You can improve Spanner performance by eliminating indexes that aren't used frequently, or by implementing these indexes in other ways that don't impact database performance .

### "Package com.google.cloud.spanner (6.111.1) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)
- Source ID: `site-java-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- This type of error has its own subclass as it is a condition that should cause the client library to stop trying to send RPCs to the backend until the user has taken action. com. google. cloud. spanner.
- This type of error has its own subclass as it is a condition that should cause the client library to stop trying to send RPCs to the backend until the user has taken action. com. google. cloud. spanner.
- It can be used to re-initialize a BatchReadOnlyTransaction on different machine or process by calling BatchClient#batchReadOnlyTransaction(BatchTransactionId) . com. google. cloud. spanner.
- Query Analyze Mode Used to specify the mode in which the query should be analyzed by ReadContext#analyzeQuery(Statement,QueryAnalyzeMode) . com. google. cloud. spanner.

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Custom metrics While the default metrics in the Autoscaler tool address most performance and scaling scenarios, there are some instances when you might need to specify your own metrics used for determining when to scale in and out.
- So, when the Autoscaler tool adds or removes nodes or processing units, it needs to allow the Spanner backend sufficient time to reassign and reorganize the splits as new capacity is added or removed from instances.
- The formula to calculate the new number of nodes or processing units is as follows: newSize = currentSize currentUtilization / utilizationThreshold Direct Direct scaling provides an immediate increase in capacity.
- This method scales the instance up to the maximum number of nodes or processing units specified in the schedule, and is intended to be used in addition to a linear or stepwise method.


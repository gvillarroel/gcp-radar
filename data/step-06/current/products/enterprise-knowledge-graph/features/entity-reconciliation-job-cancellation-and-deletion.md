---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:56.194Z"
product_name: "Enterprise Knowledge Graph"
product_slug: "enterprise-knowledge-graph"
feature_name: "Entity reconciliation job cancellation and deletion"
feature_slug: "entity-reconciliation-job-cancellation-and-deletion"
latest_feature_date: "2022-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs/cancel"
  - "https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.CancelEntityReconciliationJobRequest"
  - "https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.CreateEntityReconciliationJobRequest"
  - "https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.DeleteEntityReconciliationJobRequest"
keywords:
  - "entity"
  - "reconciliation"
  - "job"
  - "cancellation"
  - "and"
  - "deletion"
  - "allows"
  - "users"
---

# Entity reconciliation job cancellation and deletion

Product: Enterprise Knowledge Graph
Coverage: MEDIUM

## Step 02 Summary

Allows users to cancel or delete an entity reconciliation job.

## Extended Definition

Allows users to cancel or delete an entity reconciliation job.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs/cancel](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs/cancel)
- [https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.CancelEntityReconciliationJobRequest](https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.CancelEntityReconciliationJobRequest)
- [https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.CreateEntityReconciliationJobRequest](https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.CreateEntityReconciliationJobRequest)
- [https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.DeleteEntityReconciliationJobRequest](https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.DeleteEntityReconciliationJobRequest)

## Supporting Pages

### "Method: projects.locations.entityReconciliationJobs.cancel \_|\_ Enterprise\

- URL: [https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs/cancel](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs/cancel)
- Source ID: `site-api-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Enterprise Knowledge Graph Reference Send feedback Method: projects.locations.entityReconciliationJobs.cancel Stay organized with collections Save and categorize content based on your preferences.
- Format: projects/{project}/locations/{location}/entityReconciliationJobs/{entityReconciliationJob} It takes the form projects/{project}/locations/{location}/entityReconciliationJobs/{entityreconciliationjob} .
- IAM Permissions Requires the following IAM permission on the name resource: enterpriseknowledgegraph.entityReconciliationJobs.cancel For more information, see the IAM documentation .
- The name of the EntityReconciliationJob resource.

### "Class CancelEntityReconciliationJobRequest (0.6.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.CancelEntityReconciliationJobRequest](https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.CancelEntityReconciliationJobRequest)
- Source ID: `site-python-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Format: projects/{project}/locations/{location}/entityReconciliationJobs/{entity reconciliation job} Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Python Client libraries Send feedback Class CancelEntityReconciliationJobRequest (0.6.0) Stay organized with collections Save and categorize content based on your preferences.
- 0.6.0 (latest) 0.5.0 0.4.0 0.3.17 0.2.1 0.1.0 CancelEntityReconciliationJobRequest ( mapping = None , , ignore unknown fields = False , kwargs ) Request message for CancelEntityReconciliationJob.
- The name of the EntityReconciliationJob resource.

### "Class CreateEntityReconciliationJobRequest (0.6.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.CreateEntityReconciliationJobRequest](https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.CreateEntityReconciliationJobRequest)
- Source ID: `site-python-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class CreateEntityReconciliationJobRequest (0.6.0) Stay organized with collections Save and categorize content based on your preferences.
- 0.6.0 (latest) 0.5.0 0.4.0 0.3.17 0.2.1 0.1.0 CreateEntityReconciliationJobRequest ( mapping = None , , ignore unknown fields = False , kwargs ) Request message for CreateEntityReconciliationJob.
- Format: projects/{project}/locations/{location} entity reconciliation job google.cloud.enterpriseknowledgegraph v1.types.EntityReconciliationJob Required.
- The resource name of the Location to create the EntityReconciliationJob in.

### "Class DeleteEntityReconciliationJobRequest (0.6.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.DeleteEntityReconciliationJobRequest](https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.DeleteEntityReconciliationJobRequest)
- Source ID: `site-python-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Format: projects/{project}/locations/{location}/entityReconciliationJobs/{entity reconciliation job} Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Python Client libraries Send feedback Class DeleteEntityReconciliationJobRequest (0.6.0) Stay organized with collections Save and categorize content based on your preferences.
- 0.6.0 (latest) 0.5.0 0.4.0 0.3.17 0.2.1 0.1.0 DeleteEntityReconciliationJobRequest ( mapping = None , , ignore unknown fields = False , kwargs ) Request message for DeleteEntityReconciliationJob.
- The name of the EntityReconciliationJob resource.


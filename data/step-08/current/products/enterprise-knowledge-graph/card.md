# Enterprise Knowledge Graph

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-04-29T04:09:19.069Z`
Product status: `PASS`

## Summary

- Feature cards: 13
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 12 explicit, 0 derived, 1 unknown

## Service Card

- Service card ID: `enterprise-knowledge-graph:service`
- Latest feature date: 2022-10-10
- Official source links: 18
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| and Person entity types | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Entity reconciliation job cancellation and deletion | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs/cancel)<br>[source](https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.CancelEntityReconciliationJobRequest)<br>[source](https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.CreateEntityReconciliationJobRequest) |
| Entity reconciliation support for Organization | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Google Knowledge Graph entity linking | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/search-api)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.services.enterprise_knowledge_graph_service.EnterpriseKnowledgeGraphServiceAsyncClient) |
| LocalBusiness | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/search-api)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Entity reconciliation model selection by name and version tag | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/entity-reconciliation-api)<br>[source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
| Geocoding efficiency improvements | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/overview)<br>[source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
| Organization-tuned reconciliation model | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Entity reconciliation job listing | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.services.enterprise_knowledge_graph_service.pagers.ListEntityReconciliationJobsAsyncPager) |
| Entity reconciliation job status tracking | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/entity-reconciliation-api)<br>[source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
| Entity reconciliation clustering algorithm selection | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/entity-reconciliation-api)<br>[source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
| Geo enrichment and separation | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/locations.publicKnowledgeGraphEntities/lookup)<br>[source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
| Stable cluster IDs across reconciliation runs | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/overview)<br>[source](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |

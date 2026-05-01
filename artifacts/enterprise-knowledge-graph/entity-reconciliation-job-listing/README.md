# Entity reconciliation job listing

Product: Enterprise Knowledge Graph
Feature slug: `entity-reconciliation-job-listing`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Allows users to list all entity reconciliation jobs.

## Lifecycle

- Latest feature date: 2022-05-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs](https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.services.enterprise_knowledge_graph_service.pagers.ListEntityReconciliationJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.services.enterprise_knowledge_graph_service.pagers.ListEntityReconciliationJobsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.services.enterprise_knowledge_graph_service.pagers.ListEntityReconciliationJobsPager](https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.services.enterprise_knowledge_graph_service.pagers.ListEntityReconciliationJobsPager)

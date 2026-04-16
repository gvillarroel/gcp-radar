---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.207Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Identity and Access Management support"
feature_slug: "identity-and-access-management-support"
latest_feature_date: "2016-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient"
keywords:
  - "identity"
  - "permissions"
  - "management"
  - "control"
  - "access"
  - "users"
  - "lets"
---

# Identity and Access Management support

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Identity and Access Management support lets users control permissions for Dataproc clusters, jobs, and operations with IAM.

## Extended Definition

Identity and Access Management support lets users control permissions for Dataproc clusters, jobs, and operations with IAM.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control](https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient)

## Supporting Pages

### Dataproc Metastore: Access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control](https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Access control options for users To give users the ability to create and manage your Dataproc Metastore resources, you can add users as team members to your project or to specific resources and grant them permissions using IAM roles .
- Google Cloud offers Identity and Access Management (IAM) , which lets you give more granular access to specific Google Cloud resources and prevents unwanted access to other resources.
- This page explains the ways you can add new users to your project and how to set access control for your Dataproc Metastore resources.
- IAM also lets you control who (identity) has what (roles) permission to which resources by setting IAM policies.

### "Class BatchControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TestIamPermissionsResponse Tests the specified IAM permissions against the IAM access control policy for a function.
- Returns Type Description .policy pb2.Policy Defines an Identity and Access Management (IAM) policy.
- Returns Type Description .policy pb2.Policy Defines an Identity and Access Management (IAM) policy.
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . test iam permissions test iam permissions ( request : typing .

### "Class BatchControllerClient (5.26.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient)
- Source ID: `site-python-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TestIamPermissionsResponse Tests the specified IAM permissions against the IAM access control policy for a function.
- Returns Type Description .policy pb2.Policy Defines an Identity and Access Management (IAM) policy.
- Returns Type Description .policy pb2.Policy Defines an Identity and Access Management (IAM) policy.
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . test iam permissions test iam permissions ( request : typing .


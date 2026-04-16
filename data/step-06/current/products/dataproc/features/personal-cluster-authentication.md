---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.628Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Personal Cluster Authentication"
feature_slug: "personal-cluster-authentication"
latest_feature_date: "2020-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient"
keywords:
  - "personal"
  - "cluster"
  - "authentication"
  - "lets"
  - "single"
  - "user"
  - "clusters"
  - "access"
---

# Personal Cluster Authentication

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Personal Cluster Authentication lets single-user clusters access Cloud Storage with the user's credentials instead of a VM service account.

## Extended Definition

Personal Cluster Authentication lets single-user clusters access Cloud Storage with the user's credentials instead of a VM service account.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc](https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)

## Supporting Pages

### "Attach a Managed Service for Apache Spark cluster or a self-managed cluster\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc](https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc)
- Source ID: `site-docs-root-2`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a Dataproc Metastore and a Managed Service for Apache Spark cluster: To create a Dataproc Metastore: metastore.services.create on the user account or service account To create a Managed Service for Apache Spark cluster: dataproc.clusters.create on the user account or service account To access the Hive warehouse directory: orgpolicy.policy.get1 , resourcemanager.projects.get , resourcemanager.projects.list , storage.objects. , storage.multipartUploads. on the Managed Service for Apache Spark VM service account You might also be able to get these permissions with custom roles or other predefined roles .
- Required Roles To get the permissions that you need to create a Dataproc Metastore and a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: To grant full control of Dataproc Metastore resources, either: Dataproc Metastore Editor ( roles/metastore.editor ) on the user account or service account Dataproc Metastore Admin ( roles/metastore.admin ) on the user account or service account To create a Managed Service for Apache Spark cluster: ( roles/dataproc.worker ) on the Managed Service for Apache Spark VM service account To grant read and write permissions to the Hive warehouse directory: ( roles/storage.objectAdmin ) on the Managed Service for Apache Spark VM service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- Managed Service for Apache Spark clusters Managed Service for Apache Spark is a managed Apache Spark and Apache Hadoop service that lets you take advantage of open source data tools for batch processing, querying, streaming, and machine learning.
- If you're using Dataproc Personal Cluster Authentication , your Dataproc Metastore must use the gRPC endpoint protocol.

### "Class ClusterControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . start cluster start cluster ( request : typing .
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample list clusters(): Create a client client = dataproc v1 .
- ListClustersRequest ( project id="project id value", region="region value", ) Make the request page result = client. list clusters (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.ListClustersRequest , dict]] The request object.

### "Class ClusterControllerClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)
- Source ID: `site-python-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . start cluster start cluster ( request : typing .
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample list clusters(): Create a client client = dataproc v1 .
- ListClustersRequest ( project id="project id value", region="region value", ) Make the request page result = client. list clusters (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.dataproc v1.types.ListClustersRequest , dict] The request object.


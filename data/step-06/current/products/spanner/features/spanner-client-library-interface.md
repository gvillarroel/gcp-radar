---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.240Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner client library interface"
feature_slug: "spanner-client-library-interface"
latest_feature_date: "2024-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
keywords:
  - "admin"
  - "auto"
  - "generated"
  - "interface"
  - "library"
  - "introduces"
  - "client"
---

# Spanner client library interface

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Introduces an auto-generated Spanner client library interface for admin operations, with newer admin features available only through this interface.

## Extended Definition

Introduces an auto-generated Spanner client library interface for admin operations, with newer admin features available only through this interface.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)

## Supporting Pages

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- Version latest keyboard arrow down 3.63.0 (latest) 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.1 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.1 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.0 3.23.0 3.22.2 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.1 3.14.1 3.13.0 3.12.1 3.11.1 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.1.1 2.0.0 1.19.3 1.18.0 1.17.1 1.16.0 1.15.1 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 DatabaseAdminAsyncClient ( , credentials : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = spanner admin database v1.

### "Class DatabaseAdminClient (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- Source ID: `site-python-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- Version latest keyboard arrow down 3.63.0 (latest) 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.1 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.1 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.0 3.23.0 3.22.2 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.1 3.14.1 3.13.0 3.12.1 3.11.1 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.1.1 2.0.0 1.19.3 1.18.0 1.17.1 1.16.0 1.15.1 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 DatabaseAdminClient ( , credentials : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = spanner admin database v1.

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The closure of the Spanner client will automatically close the databaseAdminClient. spanner . close (); } } addAndDropNewDatabaseRole (); Note: The old client library interface code samples for Node.js are archived in GitHub .
- The closure of the Spanner client will automatically close the databaseAdminClient. spanner . close (); } } addAndDropNewDatabaseRole (); Note: The old client library interface code samples for Node.js are archived in GitHub .
- Valid values are 0, 1, and 3. if ( policy . getVersion () < 3 ) { // conditional role bindings work with policy version 3 policyVersion = 3 ; } Binding binding1 = Binding . newBuilder () . setRole ( "roles/spanner.fineGrainedAccessUser" ) . addAllMembers ( ImmutableList . of ( iamMember )) . build (); Binding binding2 = Binding . newBuilder () . setRole ( "roles/spanner.databaseRoleUser" ) . setCondition ( Expr . newBuilder (). setDescription ( title ). setExpression ( String . format ( "resource.name.endsWith(\"/databaseRoles/%s\")" , role ) ). setTitle ( title ). build ()) . addAllMembers ( ImmutableList . of ( iamMember )) . build (); ImmutableList<Binding> bindings = ImmutableList . < Binding>builder () . addAll ( policy . getBindingsList ()) . add ( binding1 ) . add ( binding2 ) . build (); Policy policyWithConditions = Policy . newBuilder () . setVersion ( policyVersion ) . setEtag ( policy . getEtag ()) . addAllBindings ( bindings ) . build (); final SetIamPolicyRequest setRequest = SetIamPolicyRequest . newBuilder () . setResource ( DatabaseName . of ( projectId , instanceId , databaseId ). toString ()) . setPolicy ( policyWithConditions ). build (); final Policy response = databaseAdminClient . setIamPolicy ( setRequest ); System . out . printf ( "Enabled fine-grained access in IAM with version %d%n" , response . getVersion ()); } } } Note: The old client library interface code samples for Java are archived in GitHub .
- Example: @param string $projectId The Google Cloud project ID. @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function add drop database role(string $projectId, string $instanceId, string $databaseId): void { $databaseAdminClient = new DatabaseAdminClient(); $databaseName = DatabaseAdminClient::databaseName($projectId, $instanceId, $databaseId); $request = new UpdateDatabaseDdlRequest([ 'database' => $databaseName, 'statements' => [ 'CREATE ROLE new parent', 'GRANT SELECT ON TABLE Singers TO ROLE new parent', 'CREATE ROLE new child', 'GRANT ROLE new parent TO ROLE new child' ] ]); $operation = $databaseAdminClient->updateDatabaseDdl($request); printf('Waiting for create role and grant operation to complete...%s', PHP EOL); $operation->pollUntilComplete(); printf('Created roles %s and %s and granted privileges%s', 'new parent', 'new child', PHP EOL); $request = new UpdateDatabaseDdlRequest([ 'database' => $databaseName, 'statements' => [ 'REVOKE ROLE new parent FROM ROLE new child', 'DROP ROLE new child' ] ]); $operation = $databaseAdminClient->updateDatabaseDdl($request); printf('Waiting for revoke role and drop role operation to complete...%s', PHP EOL); $operation->pollUntilComplete(); printf('Revoked privileges and dropped role %s%s', 'new child', PHP EOL); } Note: The old client library interface code samples for PHP are archived in GitHub .


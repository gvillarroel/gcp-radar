---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.250Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Data Catalog integration"
feature_slug: "spanner-data-catalog-integration"
latest_feature_date: "2023-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
keywords:
  - "catalog"
  - "management"
  - "resource"
  - "integration"
  - "generally"
  - "available"
  - "adds"
---

# Spanner Data Catalog integration

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner adds generally available support for Data Catalog resource management.

## Extended Definition

Spanner adds generally available support for Data Catalog resource management.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Filter instance id = INSTANCE ID is key revoked = TRUE Across time series Time series group by database Across time series Time series aggregation sum Rolling window 10 m Rolling window function mean Configure alert trigger Field Value Condition type Threshold Alert trigger Any time series violates Threshold position Above threshold Threshold 0 Retest window 1 hr New condition Field Value Resource and Metric In the Resources menu, select Spanner Instance .
- To select the resource, metric, and filters, expand the Select a metric menu and then use the values in the New condition table: Optional: To limit the menu to relevant entries, enter the resource or metric name in the filter bar.
- If you're using multiple regional keys to protect a Spanner database, only those replicas that are protected by a key residing in the unavailable regional Cloud KMS are affected by the unavailability.
- How an unavailable key status is handled In rare scenarios, such as during periods when Cloud KMS is unavailable, Spanner might be unable to retrieve the status of your key from Cloud KMS.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- This way, we avoid wasting resources. private static final int MIN SESSIONS = 1 ; private static final int MAX SESSIONS = 5 ; private final String projectId ; private final String instanceId ; private final String databaseId ; private transient DatabaseClient client ; private transient Spanner spanner ; public ToFullRowJsonFn ( SpannerConfig spannerConfig ) { this . projectId = spannerConfig . getProjectId (). get (); this . instanceId = spannerConfig . getInstanceId (). get (); this . databaseId = spannerConfig . getDatabaseId (). get (); } @Setup public void setup () { SessionPoolOptions sessionPoolOptions = SessionPoolOptions . newBuilder () . setMinSessions ( MIN SESSIONS ) . setMaxSessions ( MAX SESSIONS ) . build (); SpannerOptions options = SpannerOptions . newBuilder () . setProjectId ( projectId ) . setSessionPoolOption ( sessionPoolOptions ) . build (); DatabaseId id = DatabaseId . of ( projectId , instanceId , databaseId ); spanner = options . getService (); client = spanner . getDatabaseClient ( id ); } @Teardown public void teardown () { spanner . close (); } @ProcessElement public void process ( @Element DataChangeRecord element , OutputReceiver<String> output ) { com . google . cloud .
- Set IAM Permissions for Dataflow templates Before creating a Dataflow job with the three flex templates listed, ensure that you have the required Identity and Access Management (IAM) permissions for the following service accounts: the Dataflow service account the worker service account If you don't have the required IAM permissions, then you must specify a user-managed worker service account to create the Dataflow job.
- To be able to use the SpannerIO connector, the dependency needs to be added to your pom.xml file: <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-io-google-cloud-platform</artifactId> <version>${beam-version}</version> <!-- available from version 2.38.0 --> </dependency> Create a metadata database The connector needs to keep track of each partition when running the Apache Beam pipeline.
- When you try to run a job from a Dataflow flex template without all the required permissions, then your job might fail with a failed to read the result file error or a permission denied on resource error .

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.iam.v1.policy pb2.Policy An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.
- Returns Type Description google.iam.v1.policy pb2.Policy An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. test iam permissions test iam permissions ( request : typing .


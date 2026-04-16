---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.150Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "BigQuery reverse ETL to Spanner via Cloud resource connections"
feature_slug: "bigquery-reverse-etl-to-spanner-via-cloud-resource-connections"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
keywords:
  - "connections"
  - "reverse"
  - "resource"
---

# BigQuery reverse ETL to Spanner via Cloud resource connections

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports using Cloud resource connections with BigQuery EXPORT DATA statements to perform reverse ETL from BigQuery into Spanner.

## Extended Definition

Spanner now supports using Cloud resource connections with BigQuery EXPORT DATA statements to perform reverse ETL from BigQuery into Spanner.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)

## Supporting Pages

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- This way, we avoid wasting resources. private static final int MIN SESSIONS = 1 ; private static final int MAX SESSIONS = 5 ; private final String projectId ; private final String instanceId ; private final String databaseId ; private transient DatabaseClient client ; private transient Spanner spanner ; public ToFullRowJsonFn ( SpannerConfig spannerConfig ) { this . projectId = spannerConfig . getProjectId (). get (); this . instanceId = spannerConfig . getInstanceId (). get (); this . databaseId = spannerConfig . getDatabaseId (). get (); } @Setup public void setup () { SessionPoolOptions sessionPoolOptions = SessionPoolOptions . newBuilder () . setMinSessions ( MIN SESSIONS ) . setMaxSessions ( MAX SESSIONS ) . build (); SpannerOptions options = SpannerOptions . newBuilder () . setProjectId ( projectId ) . setSessionPoolOption ( sessionPoolOptions ) . build (); DatabaseId id = DatabaseId . of ( projectId , instanceId , databaseId ); spanner = options . getService (); client = spanner . getDatabaseClient ( id ); } @Teardown public void teardown () { spanner . close (); } @ProcessElement public void process ( @Element DataChangeRecord element , OutputReceiver<String> output ) { com . google . cloud .
- When you try to run a job from a Dataflow flex template without all the required permissions, then your job might fail with a failed to read the result file error or a permission denied on resource error .
- Home Documentation Databases Spanner Guides Send feedback Build change streams connections using Dataflow Stay organized with collections Save and categorize content based on your preferences.
- Best practices for change streams and Dataflow The following are some best practices for building change streams connections by using Dataflow.

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- To run these commands, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:"resource.name" AND policy:/ ROLE NAME AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS 222larabrown@gmail.com View the IAM conditions for a principal To view a list of IAM conditions that were specified when granting the role Cloud Spanner Database Role User to a principal, run the following command: gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:resource.name AND policy:" PRINCIPAL IDENTIFIER " AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] \ --format = 'table(policy.bindings.condition.expression)' where PRINCIPAL IDENTIFIER is: { user: user-account-name serviceAccount: service-account-name } PRINCIPAL IDENTIFIER examples: user:222larabrown@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com The following sample output shows two condition expressions.
- Valid values are 0, 1, and 3. if ( policy . getVersion () < 3 ) { // conditional role bindings work with policy version 3 policyVersion = 3 ; } Binding binding1 = Binding . newBuilder () . setRole ( "roles/spanner.fineGrainedAccessUser" ) . addAllMembers ( ImmutableList . of ( iamMember )) . build (); Binding binding2 = Binding . newBuilder () . setRole ( "roles/spanner.databaseRoleUser" ) . setCondition ( Expr . newBuilder (). setDescription ( title ). setExpression ( String . format ( "resource.name.endsWith(\"/databaseRoles/%s\")" , role ) ). setTitle ( title ). build ()) . addAllMembers ( ImmutableList . of ( iamMember )) . build (); ImmutableList<Binding> bindings = ImmutableList . < Binding>builder () . addAll ( policy . getBindingsList ()) . add ( binding1 ) . add ( binding2 ) . build (); Policy policyWithConditions = Policy . newBuilder () . setVersion ( policyVersion ) . setEtag ( policy . getEtag ()) . addAllBindings ( bindings ) . build (); final SetIamPolicyRequest setRequest = SetIamPolicyRequest . newBuilder () . setResource ( DatabaseName . of ( projectId , instanceId , databaseId ). toString ()) . setPolicy ( policyWithConditions ). build (); final Policy response = databaseAdminClient . setIamPolicy ( setRequest ); System . out . printf ( "Enabled fine-grained access in IAM with version %d%n" , response . getVersion ()); } } } Note: The old client library interface code samples for Java are archived in GitHub .
- Ruby require "google/cloud/spanner" def spanner enable fine grained access project id :, instance id :, database id :, iam member :, database role :, title : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" iam member = "user:alice@example.com" database role = "new parent" title = "condition title" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new db path = admin client . database path project : project id , instance : instance id , database : database id policy = admin client . get iam policy resource : db path , options : { requested policy version : 3 } policy . version = 3 if policy . version < 3 binding = Google :: Iam :: V1 :: Binding . new ( role : "roles/spanner.fineGrainedAccessUser" , members : [ iam member ] , condition : Google :: Type :: Expr . new ( title : title , expression : "resource.name.endsWith('/databaseRoles/ #{ database role } ')" ) ) policy . bindings << binding result = admin client . set iam policy resource : db path , policy : policy puts "Enabled fine-grained access in IAM." end Inform users and developers to start using database roles After initial fine-grained access control configuration is complete, inform users and application developers that they must begin using database roles.
- Eg: user:{emailid}, serviceAccount:{emailid}, group:{emailid}, domain:{domain} @param string $databaseRole The database role bound to the IAM member. @param string $title Condition title. / function enable fine grained access ( string $projectId , string $instanceId , string $databaseId , string $iamMember , string $databaseRole , string $title ) : void { $adminClient = new DatabaseAdminClient (); $resource = $adminC>lient - databaseName ( $projectId , $instanceId , $databaseId ); $getIamPolicyRequest = ( new GetIamPolicyRequest ()) - setResource ( $resource ); $policy = $adminC>lient - getIamPolicy ( $getIamPolicyRequest ); // IAM conditions need at least version 3 if ( $p>olicy - getVersion () != 3 ) { $p>olicy - setVersion ( 3 ); } $binding = new Binding ([ 'r>ole' = 'roles/spanner.fineGrainedAccessUser' , 'memb>ers' = [ $iamMember ], 'condit>ion' = new Expr ([ 'ti>tle' = $title , 'express>ion' = sprintf ( "resource.name.endsWith('/databaseRoles/%s')" , $databaseRole ) ]) ]); $p>olicy - setBindings ([ $binding ]); $setIamPolicyRequest = ( new SetIamPolicyRequest ()) - setResource ( $resource ) - setPolicy ( $policy ); $adminC>lient - setIamPolicy ( $setIamPolicyRequest ); printf ( 'Enabled fine-grained access in IAM' .

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Build ()}); if ( ! commit result ) throw std :: move ( commit result ). status (); std :: cout << "Update was successful [spanner insert data with timestamp column] \n " ; } C# using Google.Cloud.Spanner.Data ; using System ; using System.Collections.Generic ; using System.Linq ; using System.Threading.Tasks ; public class WriteDataWithTimestampAsyncSample { public class Performance { public int SingerId { get ; set ; } public int VenueId { get ; set ; } public DateTime EventDate { get ; set ; } public long Revenue { get ; set ; } } public async Task<int> WriteDataWithTimestampAsync ( string projectId , string instanceId , string databaseId ) { string connectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" ; List<Performance> performances = new List<Performance> { new Performance { SingerId = 1 , VenueId = 4 , EventDate = DateTime .
- Build ()}); if ( ! commit result ) throw std :: move ( commit result ). status (); std :: cout << "Update was successful [spanner update data with timestamp column] \n " ; } C# using Google.Cloud.Spanner.Data ; using System ; using System.Threading.Tasks ; public class UpdateDataWithTimestampColumnAsyncSample { public async Task<int> UpdateDataWithTimestampColumnAsync ( string projectId , string instanceId , string databaseId ) { string connectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" ; using var connection = new SpannerConnection ( connectionString ); var rowCount = 0 ; using var updateCmd1 = connection .
- A try-with-resource block is used to automatically release resources held by // ResultSet. try ( ResultSet resultSet = dbClient . singleUse () . executeQuery ( Statement . of ( "SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime FROM Albums" + " ORDER BY LastUpdateTime DESC" ))) { while ( resultSet . next ()) { System . out . printf ( "%d %d %s %s\n" , resultSet . getLong ( "SingerId" ), resultSet . getLong ( "AlbumId" ), // We check that the value is non null.
- MarketingBudget { get ; set ; } } public async Task<List<Album> > QueryDataWithTimestampColumnAsync ( string projectId , string instanceId , string databaseId ) { string connectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" ; using var connection = new SpannerConnection ( connectionString ); using var cmd = connection .


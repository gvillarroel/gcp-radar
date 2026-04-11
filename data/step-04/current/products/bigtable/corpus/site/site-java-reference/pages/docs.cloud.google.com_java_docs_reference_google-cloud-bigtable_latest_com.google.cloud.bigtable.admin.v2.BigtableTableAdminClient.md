---
title: "Class BigtableTableAdminClient (2.74.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient
  title: "Class BigtableTableAdminClient (2.74.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Class BigtableTableAdminClient (2.74.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.74.0 (latest)
2.73.0
2.72.0
2.71.0
2.70.0
2.68.0
2.67.1
2.66.0
2.65.1
2.63.0
2.62.0
2.61.0
2.60.0
2.59.0
2.58.2
2.56.0
2.54.0
2.52.0
2.51.2
2.49.0
2.46.0
2.45.1
2.44.1
2.43.0
2.42.0
2.40.0
2.39.5
2.37.0
2.35.1
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.1
2.28.0
GitHub Repository Product Reference
Client for creating, configuring, and deleting Cloud Bigtable tables
Provides access to the table schemas only, not the data stored within the tables.
See the individual methods for example code.
Sample code to get started:
// One instance per application.
BigtableTableAdminClient client = BigtableTableAdminClient . create ( "[PROJECT]" , "[INSTANCE]" );
com . google . bigtable . admin . v2 . CreateTableRequest request =
com . google . bigtable . admin . v2 . CreateTableRequest . newBuilder ()
. setParent ( InstanceName . of ( "[PROJECT]" , "[INSTANCE]" ). toString ())
. setTableId ( "my-table" )
. setTable (
com . google . bigtable . admin . v2 . Table . newBuilder ()
. putColumnFamilies ( "cf1" , com . google . bigtable . admin . v2 . ColumnFamily . getDefaultInstance ())
. putColumnFamilies (
"cf2" ,
com . google . bigtable . admin . v2 . ColumnFamily . newBuilder ()
. setGcRule ( GcRuleBuilder . maxVersions ( 10 ))
. build ())
. build ())
. addInitialSplits (
com . google . bigtable . admin . v2 . CreateTableRequest . Split . newBuilder ()
. setKey ( ByteString . copyFromUtf8 ( "b" ))
. build ())
. addInitialSplits (
com . google . bigtable . admin . v2 . CreateTableRequest . Split . newBuilder ()
. setKey ( ByteString . copyFromUtf8 ( "q" ))
. build ())
. build ();
client . getBaseClient (). createTable ( request );
// Cleanup during application shutdown.
client . close ();
Creating a new client is a very expensive operation and should only be done once and shared in
an application. However, close() needs to be called on the client object to clean up resources
such as threads during application shutdown.
This class can be customized by passing in a custom instance of BigtableTableAdminSettings to
create(). For example:
To customize credentials:
BigtableTableAdminSettings settings = BigtableTableAdminSettings . newBuilder ()
. setProjectId ( "[PROJECT]" )
. setInstanceId ( "[INSTANCE]" )
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
BigtableTableAdminClient client = BigtableTableAdminClient . create ( settings );
To customize the endpoint:
BigtableTableAdminSettings . Builder settingsBuilder = BigtableTableAdminSettings . newBuilder ()
. setProjectId ( "[PROJECT]" )
. setInstanceId ( "[INSTANCE]" );
settingsBuilder . stubSettings ()
. setEndpoint ( myEndpoint ). build ();
BigtableTableAdminClient client = BigtableTableAdminClient . create ( settingsBuilder . build ());
Inheritance
java.lang.Object >
BigtableTableAdminClient
Static Methods
create(BigtableTableAdminSettings settings)
public static BigtableTableAdminClient create ( BigtableTableAdminSettings settings )
Constructs an instance of BigtableTableAdminClient with the given settings.
Parameter
Name
Description
settings
BigtableTableAdminSettings
Returns
Type
Description
BigtableTableAdminClient
Exceptions
Type
Description
IOException
create(String projectId, String instanceId)
public static BigtableTableAdminClient create ( String projectId , String instanceId )
Constructs an instance of BigtableTableAdminClient with the given project and instance IDs.
Parameters
Name
Description
projectId
String
instanceId
String
Returns
Type
Description
BigtableTableAdminClient
Exceptions
Type
Description
IOException
create(String projectId, String instanceId, EnhancedBigtableTableAdminStub stub)
public static BigtableTableAdminClient create ( String projectId , String instanceId , EnhancedBigtableTableAdminStub stub )
Constructs an instance of BigtableTableAdminClient with the given instance name and stub.
Parameters
Name
Description
projectId
String
instanceId
String
stub
com.google.cloud.bigtable.admin.v2.stub.EnhancedBigtableTableAdminStub
Returns
Type
Description
BigtableTableAdminClient
Methods
awaitConsistency(ConsistencyRequest consistencyRequest)
public void awaitConsistency ( ConsistencyRequest consistencyRequest )
Parameter
Name
Description
consistencyRequest
ConsistencyRequest
awaitOptimizeRestoredTable(ApiFuture<RestoredTableResult> restoreFuture)
public ApiFuture<Empty> awaitOptimizeRestoredTable ( ApiFuture<RestoredTableResult> restoreFuture )
Awaits the completion of the "Optimize Restored Table" operation.
This method blocks until the restore operation is complete, extracts the optimization token,
and returns an ApiFuture for the optimization phase.
Parameter
Name
Description
restoreFuture
ApiFuture < RestoredTableResult > The future returned by restoreTableAsync().
Returns
Type
Description
ApiFuture < Empty >
An ApiFuture that tracks the optimization progress.
awaitOptimizeRestoredTable(OptimizeRestoredTableOperationToken token)
public void awaitOptimizeRestoredTable ( OptimizeRestoredTableOperationToken token )
Awaits a restored table is fully optimized.
Sample code
RestoredTableResult result =
client . restoreTable ( RestoreTableRequest . of ( clusterId , backupId ). setTableId ( tableId ));
client . awaitOptimizeRestoredTable ( result . getOptimizeRestoredTableOperationToken ());
Parameter
Name
Description
token
OptimizeRestoredTableOperationToken
Exceptions
Type
Description
ExecutionException
InterruptedException
awaitOptimizeRestoredTableAsync(OptimizeRestoredTableOperationToken token)
public ApiFuture<Void> awaitOptimizeRestoredTableAsync ( OptimizeRestoredTableOperationToken token )
Awaits a restored table is fully optimized asynchronously.
Sample code
RestoredTableResult result =
client . restoreTable ( RestoreTableRequest . of ( clusterId , backupId ). setTableId ( tableId ));
ApiFuture<Void> future = client . awaitOptimizeRestoredTableAsync (
result . getOptimizeRestoredTableOperationToken ());
ApiFutures . addCallback (
future ,
new ApiFutureCallback<Void> () {
public void onSuccess ( Void unused ) {
System . out . println ( "The optimization of the restored table is done." );
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameter
Name
Description
token
OptimizeRestoredTableOperationToken
Returns
Type
Description
ApiFuture < Void >
awaitReplication(String tableId)
public void awaitReplication ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#checkConsistency(com.google.bigtable.admin.v2.CheckConsistencyRequest) .
Blocks the current thread until replication has caught up to the point when this method was
called. This allows callers to make sure that their mutations have been replicated across all
of their clusters.
Sample code
client . awaitReplication ( "my-table" );
Parameter
Name
Description
tableId
String
awaitReplicationAsync(String tableId)
public ApiFuture<Void> awaitReplicationAsync ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#generateConsistencyTokenCallable() .
Returns a future that is resolved when replication has caught up to the point when this
method was called. This allows callers to make sure that their mutations have been replicated
across all of their clusters.
Sample code:
ApiFuture<Void> replicationFuture = client . awaitReplicationAsync ( "my-table" );
ApiFutures . addCallback (
replicationFuture ,
new ApiFutureCallback<Void> () {
public void onSuccess ( Table table ) {
System . out . println ( "All clusters are now consistent" );
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameter
Name
Description
tableId
String
Returns
Type
Description
ApiFuture < Void >
close()
public void close ()
copyBackup(CopyBackupRequest request)
public Backup copyBackup ( CopyBackupRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#copyBackup(com.google.bigtable.admin.v2.CopyBackupRequest) .
Copy an existing backup to a new backup in a Cloud Bigtable cluster with the specified
configuration.
Sample code Note: You want to create the client with project and instance where you want the
new backup to be copied to.
BigtableTableAdminClient client = BigtableTableAdminClient . create ( "[PROJECT]" , "[INSTANCE]" );
CopyBackupRequest request =
CopyBackupRequest . of ( sourceClusterId , sourceBackupId )
. setDestination ( clusterId , backupId )
. setExpireTime ( expireTime );
Backup response = client . copyBackup ( request );
If the source backup is located in a different instance
CopyBackupRequest request =
CopyBackupRequest . of ( sourceClusterId , sourceBackupId )
. setSourceInstance ( sourceInstanceId )
. setDestination ( clusterId , backupId )
. setExpireTime ( expireTime );
Backup response = client . copyBackup ( request );
If the source backup is located in a different project
CopyBackupRequest request =
CopyBackupRequest . of ( sourceClusterId , sourceBackupId )
. setSourceInstance ( sourceProjectId , sourceInstanceId )
. setDestination ( clusterId , backupId )
. setExpireTime ( expireTime );
Backup response = client . copyBackup ( request );
Parameter
Name
Description
request
CopyBackupRequest
Returns
Type
Description
Backup
copyBackupAsync(CopyBackupRequest request)
public ApiFuture<Backup> copyBackupAsync ( CopyBackupRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#copyBackupOperationCallable() .
Creates a copy of a backup from an existing backup in a Cloud Bigtable cluster with the
specified configuration asynchronously.
Sample code
CopyBackupRequest request =
CopyBackupRequest . of ( sourceClusterId , sourceBackupId )
. setDestination ( clusterId , backupId )
. setExpireTime ( expireTime );
ApiFuture<Backup> future = client . copyBackupAsync ( request );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<Backup> () {
public void onSuccess ( Backup backup ) {
System . out . println ( "Successfully create the backup " + backup . getId ());
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameter
Name
Description
request
CopyBackupRequest
Returns
Type
Description
ApiFuture < Backup >
createAuthorizedView(CreateAuthorizedViewRequest request)
public AuthorizedView createAuthorizedView ( CreateAuthorizedViewRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#createAuthorizedView(com.google.bigtable.admin.v2.CreateAuthorizedViewRequest) .
Creates a new authorized view with the specified configuration.
Sample code:
CreateAuthorizedViewRequest request =
CreateAuthorizedViewRequest . of ( "my-table" , "my-new-authorized-view" )
. setDeletionProtection ( true )
. setAuthorizedViewType (
SubsetView . create ()
. addRowPrefix ( "row#" )
. addFamilySubsets (
"my-family" , FamilySubsets . create (). addQualifier ( "column" )));
AuthorizedView response = client . createAuthorizedView ( request );
See Also: CreateAuthorizedViewRequestfor available options.
Parameter
Name
Description
request
CreateAuthorizedViewRequest
Returns
Type
Description
AuthorizedView
createAuthorizedViewAsync(CreateAuthorizedViewRequest request)
public ApiFuture<AuthorizedView> createAuthorizedViewAsync ( CreateAuthorizedViewRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#createAuthorizedViewOperationCallable() .
Asynchronously creates a new authorized view with the specified configuration.
Sample code:
CreateAuthorizedViewRequest request =
CreateAuthorizedViewRequest . of ( "my-table" , "my-new-authorized-view" )
. setDeletionProtection ( true )
. setAuthorizedViewType (
SubsetView . create ()
. addRowPrefix ( "row#" )
. addFamilySubsets (
"my-family" , FamilySubsets . create (). addQualifier ( "column" )));
ApiFuture<AuthorizedView> future = client . createAuthorizedViewAsync ( request );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<AuthorizedView> () {
public void onSuccess ( AuthorizedView authorizedView ) {
System . out . println ( "Successfully created the authorized view: " + authorizedView . getId ());
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
See Also: CreateAuthorizedViewRequestfor available options.
Parameter
Name
Description
request
CreateAuthorizedViewRequest
Returns
Type
Description
ApiFuture < AuthorizedView >
createBackup(CreateBackupRequest request)
public Backup createBackup ( CreateBackupRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#createBackup(com.google.bigtable.admin.v2.CreateBackupRequest) .
Creates a backup with the specified configuration.
Sample code
CreateBackupRequest request =
CreateBackupRequest . of ( clusterId , backupId )
. setSourceTableId ( tableId )
. setExpireTime ( expireTime );
Backup response = client . createBackup ( request );
Parameter
Name
Description
request
CreateBackupRequest
Returns
Type
Description
Backup
createBackupAsync(CreateBackupRequest request)
public ApiFuture<Backup> createBackupAsync ( CreateBackupRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#createBackupOperationCallable() .
Creates a backup with the specified configuration asynchronously.
Sample code
CreateBackupRequest request =
CreateBackupRequest . of ( clusterId , backupId )
. setSourceTableId ( tableId )
. setExpireTime ( expireTime );
ApiFuture<Backup> future = client . createBackupAsync ( request );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<Backup> () {
public void onSuccess ( Backup backup ) {
System . out . println ( "Successfully create the backup " + backup . getId ());
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameter
Name
Description
request
CreateBackupRequest
Returns
Type
Description
ApiFuture < Backup >
createSchemaBundle(CreateSchemaBundleRequest request)
public SchemaBundle createSchemaBundle ( CreateSchemaBundleRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#createSchemaBundle(com.google.bigtable.admin.v2.CreateSchemaBundleRequest) .
Creates a new schema bundle with the specified configuration.
Sample code:
CreateSchemaBundleRequest request = CreateSchemaBundleRequest . of ( "my-table" , "my-new-schema-bundle" )
. setDeletionProtection ( true )
. setSchemaBundleType (
SubsetView . create ()
. addRowPrefix ( "row#" )
. addFamilySubsets (
"my-family" , FamilySubsets . create (). addQualifier ( "column" )));
SchemaBundle response = client . createSchemaBundle ( request );
See Also: CreateSchemaBundleRequestfor available options.
Parameter
Name
Description
request
CreateSchemaBundleRequest
Returns
Type
Description
SchemaBundle
createSchemaBundleAsync(CreateSchemaBundleRequest request)
public ApiFuture<SchemaBundle> createSchemaBundleAsync ( CreateSchemaBundleRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#createSchemaBundleOperationCallable() .
Asynchronously creates a new schema bundle with the specified configuration.
Sample code:
CreateSchemaBundleRequest request = CreateSchemaBundleRequest . of ( "my-table" , "my-new-schema-bundle" )
. setDeletionProtection ( true )
. setSchemaBundleType (
SubsetView . create ()
. addRowPrefix ( "row#" )
. addFamilySubsets (
"my-family" , FamilySubsets . create (). addQualifier ( "column" )));
ApiFuture<SchemaBundle> future = client . createSchemaBundleAsync ( request );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<SchemaBundle> () {
public void onSuccess ( SchemaBundle schemaBundle ) {
System . out . println ( "Successfully created the schema bundle: " + schemaBundle . getId ());
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
See Also: CreateSchemaBundleRequestfor available options.
Parameter
Name
Description
request
CreateSchemaBundleRequest
Returns
Type
Description
ApiFuture < SchemaBundle >
createTable(CreateTableRequest request)
public Table createTable ( CreateTableRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#createTable(com.google.bigtable.admin.v2.CreateTableRequest) .
Creates a new table with the specified configuration.
Sample code:
// A table with a single column family, which retains only the latest value.
Table table = client . createTable (
CreateTableRequest . of ( "my-table" )
. addFamily ( "cf2" , GCRULES . maxVersions ( 1 ))
);
// Another table with more complex garbage collection rules.
Table table = client . createTable (
CreateTableRequest . of ( "my-table" )
. addFamily ( "cf2" , GCRULES . union ()
. rule ( GCRULES . maxAge ( Duration . ofDays ( 30 )))
. rule ( GCRULES . maxVersions ( 5 ))
)
);
See Also: CreateTableRequestfor available options. , GCRulesfor the documentation on available garbage collection rules.
Parameter
Name
Description
request
CreateTableRequest
Returns
Type
Description
Table
createTableAsync(CreateTableRequest request)
public ApiFuture<Table> createTableAsync ( CreateTableRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#createTableCallable() .
Asynchronously creates a new table with the specified configuration.
Sample code:
// A table with a single column family, which retains values up to 7 days.
ApiFuture<Table> tableFuture = client . createTableAsync (
CreateTableRequest . of ( "my-table" )
. addFamily ( "cf" , GCRULES . maxAge ( Duration . ofDays ( 7 )))
);
// Another table with more complex garbage collection rules.
ApiFuture<Table> tableFuture = client . createTableAsync (
CreateTableRequest . of ( "my-table" )
. addFamily ( "cf" , GCRULES . intersection ()
. rule ( GCRULES . maxAge ( 120 , TimeUnit . HOURS ))
. rule ( GCRULES . maxVersions ( 10 ))
)
);
ApiFutures . addCallback (
tableFuture ,
new ApiFutureCallback<Table> () {
public void onSuccess ( Table table ) {
System . out . println ( "Created table: " + table . getTableName ());
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
See Also: CreateTableRequestfor available options. , GCRulesfor the documentation on available garbage collection rules.
Parameter
Name
Description
request
CreateTableRequest
Returns
Type
Description
ApiFuture < Table >
deleteAuthorizedView(String tableId, String authorizedViewId)
public void deleteAuthorizedView ( String tableId , String authorizedViewId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#deleteAuthorizedView(com.google.bigtable.admin.v2.DeleteAuthorizedViewRequest) .
Deletes an authorized view with the specified authorized view ID in the specified table.
Note that the deletion is prohibited if the authorized view has deletion_protection field set
to true.
Sample code:
client . deleteAuthorizedView ( "my-table" , "my-authorized-view" );
Parameters
Name
Description
tableId
String
authorizedViewId
String
deleteAuthorizedViewAsync(String tableId, String authorizedViewId)
public ApiFuture<Void> deleteAuthorizedViewAsync ( String tableId , String authorizedViewId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#deleteAuthorizedViewCallable() .
Asynchronously deletes an authorized view with the specified authorized view ID in the
specified table. Note that the deletion is prohibited if the authorized view has
deletion_protection field set to true.
Sample code:
ApiFuture
Parameters
Name
Description
tableId
String
authorizedViewId
String
Returns
Type
Description
ApiFuture < Void >
deleteBackup(String clusterId, String backupId)
public void deleteBackup ( String clusterId , String backupId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#deleteBackup(com.google.bigtable.admin.v2.DeleteBackupRequest) .
Deletes a backup with the specified backup ID in the specified cluster.
Sample code
client . deleteBackup ( clusterId , backupId );
Parameters
Name
Description
clusterId
String
backupId
String
deleteBackupAsync(String clusterId, String backupId)
public ApiFuture<Void> deleteBackupAsync ( String clusterId , String backupId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#deleteBackupCallable() .
Deletes a backup with the specified backup ID in the specified cluster asynchronously.
Sample code
ApiFuture<Void> future = client . deleteBackupAsync ( clusterId , backupId );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<Backup> () {
public void onSuccess ( Void unused ) {
System . out . println ( "Successfully delete the backup." );
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameters
Name
Description
clusterId
String
backupId
String
Returns
Type
Description
ApiFuture < Void >
deleteSchemaBundle(String tableId, String schemaBundleId)
public void deleteSchemaBundle ( String tableId , String schemaBundleId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#deleteSchemaBundle(com.google.bigtable.admin.v2.DeleteSchemaBundleRequest) .
Deletes an schema bundle with the specified schema bundle ID in the specified table.
Sample code:
client . deleteSchemaBundle ( "my-table" , "my-schema-bundle" );
Parameters
Name
Description
tableId
String
schemaBundleId
String
deleteSchemaBundleAsync(String tableId, String schemaBundleId)
public ApiFuture<Void> deleteSchemaBundleAsync ( String tableId , String schemaBundleId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#deleteSchemaBundleCallable() .
Asynchronously deletes an schema bundle with the specified schema bundle ID in the specified
table.
Sample code:
ApiFuture
Parameters
Name
Description
tableId
String
schemaBundleId
String
Returns
Type
Description
ApiFuture < Void >
deleteTable(String tableId)
public void deleteTable ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#deleteTable(com.google.bigtable.admin.v2.DeleteTableRequest) .
Deletes the table specified by the table ID.
Sample code:
client . deleteTable ( "my-table" );
Parameter
Name
Description
tableId
String
deleteTableAsync(String tableId)
public ApiFuture<Void> deleteTableAsync ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#deleteTableCallable() .
Asynchronously deletes the table specified by the table ID.
Sample code:
ApiFuture<Void> future = client . deleteTableAsync ( "my-table" );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<Void> () {
public void onSuccess ( Void ignored ) {
System . out . println ( "Successfully deleted the table" );
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameter
Name
Description
tableId
String
Returns
Type
Description
ApiFuture < Void >
dropAllRows(String tableId)
public void dropAllRows ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#dropRowRange(com.google.bigtable.admin.v2.DropRowRangeRequest) .
Drops all data in the table.
Sample code:
client . dropAllRows ( "my-table" );
Parameter
Name
Description
tableId
String
dropAllRowsAsync(String tableId)
public ApiFuture<Void> dropAllRowsAsync ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#dropRowRangeCallable() .
Asynchronously drops all data in the table.
Sample code:
ApiFuture<Void> dropFuture = client . dropAllRowsAsync ( "my-table" );
ApiFutures . addCallback (
dropFuture ,
new ApiFutureCallback<Void> () {
public void onSuccess ( Void tableNames ) {
System . out . println ( "Successfully dropped all data" );
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameter
Name
Description
tableId
String
Returns
Type
Description
ApiFuture < Void >
dropRowRange(String tableId, ByteString rowKeyPrefix)
public void dropRowRange ( String tableId , ByteString rowKeyPrefix )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#dropRowRange(com.google.bigtable.admin.v2.DropRowRangeRequest) .
Drops rows by the specified row key prefix and table ID.
Please note that this method is considered part of the admin API and is rate limited.
Sample code:
client . dropRowRange ( "my-table" , ByteString . copyFromUtf8 ( "prefix" ));
Parameters
Name
Description
tableId
String
rowKeyPrefix
ByteString
dropRowRange(String tableId, String rowKeyPrefix)
public void dropRowRange ( String tableId , String rowKeyPrefix )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#dropRowRange(com.google.bigtable.admin.v2.DropRowRangeRequest) .
Drops rows by the specified row key prefix and table ID.
Please note that this method is considered part of the admin API and is rate limited.
Sample code:
client . dropRowRange ( "my-table" , "prefix" );
Parameters
Name
Description
tableId
String
rowKeyPrefix
String
dropRowRangeAsync(String tableId, ByteString rowKeyPrefix)
public ApiFuture<Void> dropRowRangeAsync ( String tableId , ByteString rowKeyPrefix )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#dropRowRangeCallable() .
Asynchronously drops rows by the specified row key prefix and table ID.
Please note that this method is considered part of the admin API and is rate limited.
Sample code:
ApiFuture<Void> dropFuture = client . dropRowRangeAsync ( "my-table" , ByteString . copyFromUtf8 ( "prefix" ));
ApiFutures . addCallback (
dropFuture ,
new ApiFutureCallback<Void> () {
public void onSuccess ( Void tableNames ) {
System . out . println ( "Successfully dropped row range." );
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameters
Name
Description
tableId
String
rowKeyPrefix
ByteString
Returns
Type
Description
ApiFuture < Void >
dropRowRangeAsync(String tableId, String rowKeyPrefix)
public ApiFuture<Void> dropRowRangeAsync ( String tableId , String rowKeyPrefix )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#dropRowRangeCallable() .
Asynchronously drops rows by the specified row key prefix and table ID.
Please note that this method is considered part of the admin API and is rate limited.
Sample code:
ApiFuture<Void> dropFuture = client . dropRowRangeAsync ( "my-table" , "prefix" );
ApiFutures . addCallback (
dropFuture ,
new ApiFutureCallback<Void> () {
public void onSuccess ( Void tableNames ) {
System . out . println ( "Successfully dropped row range." );
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameters
Name
Description
tableId
String
rowKeyPrefix
String
Returns
Type
Description
ApiFuture < Void >
exists(String tableId)
public boolean exists ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getTable(com.google.bigtable.admin.v2.GetTableRequest) .
Checks if the table specified by the table ID exists.
Sample code:
if ( client . exists ( "my-table" )) {
System . out . println ( "Table exists" );
}
Parameter
Name
Description
tableId
String
Returns
Type
Description
boolean
existsAsync(String tableId)
public ApiFuture<Boolean> existsAsync ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getTableCallable() .
Asynchronously checks if the table specified by the table ID exists.
Sample code:
ApiFuture<Boolean> found = client . existsAsync ( "my-table" );
ApiFutures . addCallback (
found ,
new ApiFutureCallback<Boolean> () {
public void onSuccess ( Boolean found ) {
if ( found ) {
System . out . println ( "Table exists" );
} else {
System . out . println ( "Table not found" );
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameter
Name
Description
tableId
String
Returns
Type
Description
ApiFuture < Boolean >
getAuthorizedView(String tableId, String authorizedViewId)
public AuthorizedView getAuthorizedView ( String tableId , String authorizedViewId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getAuthorizedView(com.google.bigtable.admin.v2.GetAuthorizedViewRequest) .
Gets an authorized view with the specified authorized view ID in the specified table.
Sample code:
AuthorizedView authorizedView = client . getAuthorizedView ( "my-table" , "my-authorized-view" );
Parameters
Name
Description
tableId
String
authorizedViewId
String
Returns
Type
Description
AuthorizedView
getAuthorizedViewAsync(String tableId, String authorizedViewId)
public ApiFuture<AuthorizedView> getAuthorizedViewAsync ( String tableId , String authorizedViewId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getAuthorizedViewCallable() .
Asynchronously gets an authorized view with the specified authorized view ID in the
specified table.
Sample code:
ApiFuture<AuthorizedView> future = client . getAuthorizedViewAsync ( "my-table" , "my-authorized-view" );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<AuthorizedView> () {
public void onSuccess ( AuthorizedView authorizedView ) {
System . out . println ( "Successfully get the authorized view: " + authorizedView . getId ());
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameters
Name
Description
tableId
String
authorizedViewId
String
Returns
Type
Description
ApiFuture < AuthorizedView >
getAuthorizedViewIamPolicy(String tableId, String authorizedViewId)
public Policy getAuthorizedViewIamPolicy ( String tableId , String authorizedViewId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getIamPolicy(com.google.iam.v1.GetIamPolicyRequest) .
Gets the IAM access control policy for the specified authorized view.
Sample code:
Policy policy = client . getAuthorizedViewIamPolicy ( "my-table-id" , "my-authorized-view-id" );
for ( Map . Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) {
System . out . printf ( "Role: %s Identities: %s
" , entry . getKey (), entry . getValue ());
}
See Also: Table-level IAM management
Parameters
Name
Description
tableId
String
authorizedViewId
String
Returns
Type
Description
com.google.cloud.Policy
getAuthorizedViewIamPolicyAsync(String tableId, String authorizedViewId)
public ApiFuture<Policy> getAuthorizedViewIamPolicyAsync ( String tableId , String authorizedViewId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getIamPolicyCallable() .
Asynchronously gets the IAM access control policy for the specified authorized view.
Sample code:
ApiFuture<Policy> policyFuture = client . getAuthorizedViewIamPolicyAsync ( "my-table-id" , "my-authorized-view-id" );
ApiFutures . addCallback ( policyFuture ,
new ApiFutureCallback<Policy> () {
public void onSuccess ( Policy policy ) {
for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) {
System . out . printf ( "Role: %s Identities: %s
" , entry . getKey (), entry . getValue ());
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
See Also: Table-level IAM management
Parameters
Name
Description
tableId
String
authorizedViewId
String
Returns
Type
Description
ApiFuture < com.google.cloud.Policy >
getBackup(String clusterId, String backupId)
public Backup getBackup ( String clusterId , String backupId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getBackup(com.google.bigtable.admin.v2.GetBackupRequest) .
Gets a backup with the specified backup ID in the specified cluster.
Sample code
Backup backup = client . getBackup ( clusterId , backupId );
Parameters
Name
Description
clusterId
String
backupId
String
Returns
Type
Description
Backup
getBackupAsync(String clusterId, String backupId)
public ApiFuture<Backup> getBackupAsync ( String clusterId , String backupId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getBackupCallable() .
Gets a backup with the specified backup ID in the specified cluster asynchronously.
Sample code
ApiFuture<Backup> future = client . getBackupAsync ( clusterId , backupId );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<Backup> () {
public void onSuccess ( Backup backup ) {
System . out . println ( "Successfully get the backup " + backup . getId ());
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameters
Name
Description
clusterId
String
backupId
String
Returns
Type
Description
ApiFuture < Backup >
getBackupIamPolicy(String clusterId, String backupId)
public Policy getBackupIamPolicy ( String clusterId , String backupId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getIamPolicy(com.google.iam.v1.GetIamPolicyRequest) .
Gets the IAM access control policy for the specified backup.
Sample code:
Policy policy = client . getBackupIamPolicy ( "my-cluster-id" , "my-backup-id" );
for ( Map . Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) {
System . out . printf ( "Role: %s Identities: %s
" , entry . getKey (), entry . getValue ());
}
See Also: Table-level IAM management
Parameters
Name
Description
clusterId
String
backupId
String
Returns
Type
Description
com.google.cloud.Policy
getBackupIamPolicyAsync(String clusterId, String backupId)
public ApiFuture<Policy> getBackupIamPolicyAsync ( String clusterId , String backupId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getIamPolicyCallable() .
Asynchronously gets the IAM access control policy for the specified backup.
Sample code:
ApiFuture<Policy> policyFuture = client . getBackupIamPolicyAsync ( "my-cluster-id" , "my-backup-id" );
ApiFutures . addCallback ( policyFuture ,
new ApiFutureCallback<Policy> () {
public void onSuccess ( Policy policy ) {
for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) {
System . out . printf ( "Role: %s Identities: %s
" , entry . getKey (), entry . getValue ());
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
See Also: Table-level IAM management
Parameters
Name
Description
clusterId
String
backupId
String
Returns
Type
Description
ApiFuture < com.google.cloud.Policy >
getBaseClient()
public BaseBigtableTableAdminClient getBaseClient ()
Returns the modern autogenerated client. This provides access to the newest features and
proto-based methods.
Returns
Type
Description
com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient
getEncryptionInfo(String tableId)
public Map<String , List<EncryptionInfo> > getEncryptionInfo ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getTable(com.google.bigtable.admin.v2.GetTableRequest) .
Gets the current encryption info for the table across all of the clusters.
The returned Map will be keyed by cluster id and contain a status for all of the keys in
use.
Parameter
Name
Description
tableId
String
Returns
Type
Description
Map < String , List < EncryptionInfo >>
getEncryptionInfoAsync(String tableId)
public ApiFuture<Map<String , List<EncryptionInfo> >> getEncryptionInfoAsync ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getTableCallable() .
Asynchronously gets the current encryption info for the table across all of the clusters.
The returned Map will be keyed by cluster id and contain a status for all of the keys in
use.
Parameter
Name
Description
tableId
String
Returns
Type
Description
ApiFuture < Map < String , List < EncryptionInfo >>>
getIamPolicy(String tableId)
public Policy getIamPolicy ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getIamPolicy(com.google.iam.v1.GetIamPolicyRequest) .
Gets the IAM access control policy for the specified table.
Sample code:
Policy policy = client . getIamPolicy ( "my-table" );
for ( Map . Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) {
System . out . printf ( "Role: %s Identities: %s
" , entry . getKey (), entry . getValue ());
}
See Also: Table-level IAM management
Parameter
Name
Description
tableId
String
Returns
Type
Description
com.google.cloud.Policy
getIamPolicyAsync(String tableId)
public ApiFuture<Policy> getIamPolicyAsync ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getIamPolicyCallable() .
Asynchronously gets the IAM access control policy for the specified table.
Sample code:
ApiFuture<Policy> policyFuture = client . getIamPolicyAsync ( "my-table" );
ApiFutures . addCallback ( policyFuture ,
new ApiFutureCallback<Policy> () {
public void onSuccess ( Policy policy ) {
for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) {
System . out . printf ( "Role: %s Identities: %s
" , entry . getKey (), entry . getValue ());
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
See Also: Table-level IAM management
Parameter
Name
Description
tableId
String
Returns
Type
Description
ApiFuture < com.google.cloud.Policy >
getInstanceId()
public String getInstanceId ()
Gets the ID of the instance whose tables this client manages.
Returns
Type
Description
String
getProjectId()
public String getProjectId ()
Gets the project ID of the instance whose tables this client manages.
Returns
Type
Description
String
getSchemaBundle(String tableId, String schemaBundleId)
public SchemaBundle getSchemaBundle ( String tableId , String schemaBundleId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getSchemaBundle(com.google.bigtable.admin.v2.GetSchemaBundleRequest) .
Gets an schema bundle with the specified schema bundle ID in the specified table.
Sample code:
SchemaBundle schemaBundle = client . getSchemaBundle ( "my-table" , "my-schema-bundle" );
Parameters
Name
Description
tableId
String
schemaBundleId
String
Returns
Type
Description
SchemaBundle
getSchemaBundleAsync(String tableId, String schemaBundleId)
public ApiFuture<SchemaBundle> getSchemaBundleAsync ( String tableId , String schemaBundleId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getSchemaBundleCallable() .
Asynchronously gets an schema bundle with the specified schema bundle ID in the specified
table.
Sample code:
ApiFuture<SchemaBundle> future = client . getSchemaBundleAsync ( "my-table" , "my-schema-bundle" );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<SchemaBundle> () {
public void onSuccess ( SchemaBundle schemaBundle ) {
System . out . println ( "Successfully get the schema bundle: " + schemaBundle . getId ());
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
Parameters
Name
Description
tableId
String
schemaBundleId
String
Returns
Type
Description
ApiFuture < SchemaBundle >
getTable(String tableId)
public Table getTable ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getTable(com.google.bigtable.admin.v2.GetTableRequest) .
Gets the table metadata by table ID.
Sample code:
Table table = client . getTable ( "my-table" );
System . out . println ( "Got metadata for table: " + table . getId ());
System . out . println ( "Column families:" );
for ( ColumnFamily cf : table . getColumnFamilies ()) {
System . out . println ( cf . getId ());
}
Parameter
Name
Description
tableId
String
Returns
Type
Description
Table
getTableAsync(String tableId)
public ApiFuture<Table> getTableAsync ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#getTableCallable() .
Asynchronously gets the table metadata by table ID.
Sample code:
ApiFuture<Table> tableFuture = client . getTableAsync ( "my-table" );
ApiFutures . addCallback (
tableFuture ,
new ApiFutureCallback<Table> () {
public void onSuccess ( Table table ) {
System . out . println ( "Got metadata for table: " + table . getId ());
System . out . println ( "Column families:" );
for ( ColumnFamily cf : table . getColumnFamilies ()) {
System . out . println ( cf . getId ());
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameter
Name
Description
tableId
String
Returns
Type
Description
ApiFuture < Table >
listAuthorizedViews(String tableId)
public List<String> listAuthorizedViews ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#listAuthorizedViews(com.google.bigtable.admin.v2.ListAuthorizedViewsRequest) .
Lists all authorized view IDs in the specified table.
Sample code:
List<String> authorizedViews = client . listAuthorizedViews ( "my-table" );
Parameter
Name
Description
tableId
String
Returns
Type
Description
List < String >
listAuthorizedViewsAsync(String tableId)
public ApiFuture<List<String> > listAuthorizedViewsAsync ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#listAuthorizedViewsPagedCallable() .
Asynchronously lists all authorized view IDs in the specified table.
Sample code:
ApiFuture<List<String> > future = client . listAuthorizedViewsAsync ( "my-table" );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<List<String> > () {
public void onSuccess ( List<String> authorizedViewIds ) {
System . out . println ( "Successfully get list of authorized views:" );
for ( AuthorizedView authorizedViewId : authorizedViewIds ) {
System . out . println ( authorizedViewId );
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameter
Name
Description
tableId
String
Returns
Type
Description
ApiFuture < List < String >>
listBackups(String clusterId)
public List<String> listBackups ( String clusterId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#listBackups(com.google.bigtable.admin.v2.ListBackupsRequest) .
Lists backups in the specified cluster.
Sample code
List<String> backups = client . listBackups ( clusterId );
Parameter
Name
Description
clusterId
String
Returns
Type
Description
List < String >
listBackupsAsync(String clusterId)
public ApiFuture<List<String> > listBackupsAsync ( String clusterId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#listBackupsPagedCallable() .
Lists backups in the specified cluster asynchronously.
Sample code:
ApiFuture<List<String> > listFuture = client . listBackupsAsync ( clusterId );
ApiFutures . addCallback (
listFuture ,
new ApiFutureCallback<List<String> > () {
public void onSuccess ( List<String> backupIds ) {
System . out . println ( "Got list of backups:" );
for ( String backupId : backupIds ) {
System . out . println ( backupId );
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameter
Name
Description
clusterId
String
Returns
Type
Description
ApiFuture < List < String >>
listSchemaBundles(String tableId)
public List<String> listSchemaBundles ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#listSchemaBundles(com.google.bigtable.admin.v2.ListSchemaBundlesRequest) .
Lists all schema bundle IDs in the specified table.
Sample code:
List<String> schemaBundles = client . listSchemaBundles ( "my-table" );
Parameter
Name
Description
tableId
String
Returns
Type
Description
List < String >
listSchemaBundlesAsync(String tableId)
public ApiFuture<List<String> > listSchemaBundlesAsync ( String tableId )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#listSchemaBundlesPagedCallable() .
Asynchronously lists all schema bundle IDs in the specified table.
Sample code:
ApiFuture<List<String> > future = client . listSchemaBundlesAsync ( "my-table" );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<List<String> > () {
public void onSuccess ( List<String> schemaBundleIds ) {
System . out . println ( "Successfully get list of schema bundles:" );
for ( SchemaBundle schemaBundleId : schemaBundleIds ) {
System . out . println ( schemaBundleId );
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
Parameter
Name
Description
tableId
String
Returns
Type
Description
ApiFuture < List < String >>
listTables()
public List<String> listTables ()
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#listTables(com.google.bigtable.admin.v2.ListTablesRequest) .
Lists all table IDs in the instance.
Sample code:
List<String> tableIds = client . listTables ();
System . out . println ( "Got list of tables:" );
for ( String tableId : tableIds ) {
System . out . println ( tableId );
}
Returns
Type
Description
List < String >
listTablesAsync()
public ApiFuture<List<String> > listTablesAsync ()
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#listTablesPagedCallable() .
Asynchronously lists all table IDs in the instance.
Sample code:
ApiFuture<List<String> > listFuture = client . listTables ();
ApiFutures . addCallback (
listFuture ,
new ApiFutureCallback<List<String> > () {
public void onSuccess ( List<String> tableIds ) {
System . out . println ( "Got list of tables:" );
for ( String tableId : tableIds ) {
System . out . println ( tableId );
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Returns
Type
Description
ApiFuture < List < String >>
modifyFamilies(ModifyColumnFamiliesRequest request)
public Table modifyFamilies ( ModifyColumnFamiliesRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#modifyColumnFamilies(com.google.bigtable.admin.v2.ModifyColumnFamiliesRequest) .
Creates, updates and drops column families as specified in the request.
Sample code:
Table modifiedTable = client . modifyFamilies (
ModifyColumnFamiliesRequest . of ( tableId )
. addFamily ( "cf1" )
. addFamily ( "cf2" , GCRULES . maxAge ( Duration . ofSeconds ( 1000 , 20000 )))
. updateFamily (
"cf3" ,
GCRULES . union ()
. rule ( GCRULES . maxAge ( Duration . ofSeconds ( 100 )))
. rule ( GCRULES . maxVersions ( 1 ))
)
. addFamily (
"cf4" ,
GCRULES . intersection ()
. rule ( GCRULES . maxAge ( Duration . ofSeconds ( 2000 )))
. rule ( GCRULES . maxVersions ( 10 ))
)
. dropFamily ( "cf5" )
);
System . out . println ( "Resulting families:" );
for ( ColumnFamily cf : modifiedTable . getColumnFamilies ()) {
System . out . println ( cf . getId ());
}
See Also: ModifyColumnFamiliesRequestfor available options.
Parameter
Name
Description
request
ModifyColumnFamiliesRequest
Returns
Type
Description
Table
modifyFamiliesAsync(ModifyColumnFamiliesRequest request)
public ApiFuture<Table> modifyFamiliesAsync ( ModifyColumnFamiliesRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#modifyColumnFamiliesCallable() .
Asynchronously creates, updates, and drops column families as specified in the request.
Sample code:
ApiFuture<Table> modifiedTableFuture = client . modifyFamiliesAsync (
ModifyColumnFamiliesRequest . of ( tableId )
. addFamily ( "cf1" )
. addFamily ( "cf2" , GCRULES . maxAge ( Duration . ofSeconds ( 1000 , 20000 )))
. updateFamily (
"cf3" ,
GCRULES . union ()
. rule ( GCRULES . maxAge ( Duration . ofSeconds ( 100 )))
. rule ( GCRULES . maxVersions ( 1 ))
)
. addFamily (
"cf4" ,
GCRULES . intersection ()
. rule ( GCRULES . maxAge ( Duration . ofSeconds ( 2000 )))
. rule ( GCRULES . maxVersions ( 10 ))
)
. dropFamily ( "cf5" )
);
ApiFutures . addCallback (
modifiedTableFuture ,
new ApiFutureCallback<Table> () {
public void onSuccess ( Table table ) {
System . out . println ( "Modified table: " + table . getTableName ());
System . out . println ( "Resulting families:" );
for ( ColumnFamily cf : modifiedTable . getColumnFamilies ()) {
System . out . println ( cf . getId ());
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
See Also: ModifyColumnFamiliesRequestfor available options.
Parameter
Name
Description
request
ModifyColumnFamiliesRequest
Returns
Type
Description
ApiFuture < Table >
restoreTable(RestoreTableRequest request)
public RestoredTableResult restoreTable ( RestoreTableRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#restoreTable(com.google.bigtable.admin.v2.RestoreTableRequest) .
Restores a backup to a new table with the specified configuration.
Sample code
RestoredTableResult result =
client . restoreTable ( RestoreTableRequest . of ( clusterId , backupId ). setTableId ( tableId ));
Parameter
Name
Description
request
RestoreTableRequest
Returns
Type
Description
RestoredTableResult
Exceptions
Type
Description
ExecutionException
InterruptedException
restoreTableAsync(RestoreTableRequest request)
public ApiFuture<RestoredTableResult> restoreTableAsync ( RestoreTableRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see
com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#restoreTableAsync(com.google.bigtable.admin.v2.RestoreTableRequest) .
Restores a backup to a new table with the specified configuration asynchronously.
Sample code
{@code
ApiFuture<RestoredTableResult> future = client.restoreTableAsync(
RestoreTableRequest.of(clusterId, backupId).setTableId(tableId));
ApiFutures.addCallback(
future,
new ApiFutureCallback<RestoredTableResult>() {
public void onSuccess(RestoredTableResult result) {
System.out.println("Successfully restore the table.");
}
public void onFailure(Throwable t) {
t.printStackTrace();
}
},
MoreExecutors.directExecutor()
);
Parameter
Name
Description
request
RestoreTableRequest
Returns
Type
Description
ApiFuture < RestoredTableResult >
setAuthorizedViewIamPolicy(String tableId, String authorizedViewId, Policy policy)
public Policy setAuthorizedViewIamPolicy ( String tableId , String authorizedViewId , Policy policy )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#setIamPolicy(com.google.iam.v1.SetIamPolicyRequest) .
Replaces the IAM policy associated with the specified authorized view.
Sample code:
Policy newPolicy = client . setAuthorizedViewIamPolicy ( "my-table-id" , "my-authorized-view-id" ,
Policy . newBuilder ()
. addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" ))
. addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" ))
. build ());
See Also: Table-level IAM management
Parameters
Name
Description
tableId
String
authorizedViewId
String
policy
com.google.cloud.Policy
Returns
Type
Description
com.google.cloud.Policy
setAuthorizedViewIamPolicyAsync(String tableId, String authorizedViewId, Policy policy)
public ApiFuture<Policy> setAuthorizedViewIamPolicyAsync ( String tableId , String authorizedViewId , Policy policy )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#setIamPolicyCallable() .
Asynchronously replaces the IAM policy associated with the specified authorized view.
Sample code:
ApiFuture<Policy> newPolicyFuture = client . setAuthorizedViewIamPolicyAsync ( "my-table-id" , "my-authorized-view-id" ,
Policy . newBuilder ()
. addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" ))
. addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" ))
. build ());
ApiFutures . addCallback ( newPolicyFuture ,
new ApiFutureCallback<Policy> () {
public void onSuccess ( Policy policy ) {
for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) {
System . out . printf ( "Role: %s Identities: %s
" , entry . getKey (), entry . getValue ());
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
See Also: Table-level IAM management
Parameters
Name
Description
tableId
String
authorizedViewId
String
policy
com.google.cloud.Policy
Returns
Type
Description
ApiFuture < com.google.cloud.Policy >
setBackupIamPolicy(String clusterId, String backupId, Policy policy)
public Policy setBackupIamPolicy ( String clusterId , String backupId , Policy policy )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#setIamPolicy(com.google.iam.v1.SetIamPolicyRequest) .
Replaces the IAM policy associated with the specified backup.
Sample code:
Policy newPolicy = client . setBackupIamPolicy ( "my-cluster-id" , "my-backup-id" ,
Policy . newBuilder ()
. addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" ))
. addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" ))
. build ());
See Also: Table-level IAM management
Parameters
Name
Description
clusterId
String
backupId
String
policy
com.google.cloud.Policy
Returns
Type
Description
com.google.cloud.Policy
setBackupIamPolicyAsync(String clusterId, String backupId, Policy policy)
public ApiFuture<Policy> setBackupIamPolicyAsync ( String clusterId , String backupId , Policy policy )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#setIamPolicyCallable() .
Asynchronously replaces the IAM policy associated with the specified backup.
Sample code:
ApiFuture<Policy> newPolicyFuture = client . setBackupIamPolicyAsync ( "my-cluster-id" , "my-backup-id" ,
Policy . newBuilder ()
. addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" ))
. addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" ))
. build ());
ApiFutures . addCallback ( newPolicyFuture ,
new ApiFutureCallback<Policy> () {
public void onSuccess ( Policy policy ) {
for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) {
System . out . printf ( "Role: %s Identities: %s
" , entry . getKey (), entry . getValue ());
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
See Also: Table-level IAM management
Parameters
Name
Description
clusterId
String
backupId
String
policy
com.google.cloud.Policy
Returns
Type
Description
ApiFuture < com.google.cloud.Policy >
setIamPolicy(String tableId, Policy policy)
public Policy setIamPolicy ( String tableId , Policy policy )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#setIamPolicy(com.google.iam.v1.SetIamPolicyRequest) .
Replaces the IAM policy associated with the specified table.
Sample code:
Policy newPolicy = client . setIamPolicy ( "my-table" ,
Policy . newBuilder ()
. addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" ))
. addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" ))
. build ());
See Also: Table-level IAM management
Parameters
Name
Description
tableId
String
policy
com.google.cloud.Policy
Returns
Type
Description
com.google.cloud.Policy
setIamPolicyAsync(String tableId, Policy policy)
public ApiFuture<Policy> setIamPolicyAsync ( String tableId , Policy policy )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#setIamPolicyCallable() .
Asynchronously replaces the IAM policy associated with the specified table.
Sample code:
ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-table" ,
Policy . newBuilder ()
. addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" ))
. addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" ))
. build ());
ApiFutures . addCallback ( policyFuture ,
new ApiFutureCallback<Policy> () {
public void onSuccess ( Policy policy ) {
for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) {
System . out . printf ( "Role: %s Identities: %s
" , entry . getKey (), entry . getValue ());
}
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
See Also: Table-level IAM management
Parameters
Name
Description
tableId
String
policy
com.google.cloud.Policy
Returns
Type
Description
ApiFuture < com.google.cloud.Policy >
testAuthorizedViewIamPermission(String tableId, String authorizedViewId, String[] permissions)
public List<String> testAuthorizedViewIamPermission ( String tableId , String authorizedViewId , String [] permissions )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#testIamPermissions(com.google.iam.v1.TestIamPermissionsRequest) .
Tests whether the caller has the given permissions for the specified authorized view.
Returns a subset of the specified permissions that the caller has.
Sample code:
List<String> grantedPermissions = client . testAuthorizedViewIamPermission ( "my-table-id" , "my-authorized-view-id" ,
"bigtable.authorizedViews.get" , "bigtable.authorizedViews.delete" );
System.out.println("Has get access: " +
grantedPermissions.contains("bigtable.authorizedViews.get"));
System.out.println("Has delete access: " +
grantedPermissions.contains("bigtable.authorizedViews.delete"));
See Also: Cloud Bigtable permissions
Parameters
Name
Description
tableId
String
authorizedViewId
String
permissions
String []
Returns
Type
Description
List < String >
testAuthorizedViewIamPermissionAsync(String tableId, String authorizedViewId, String[] permissions)
public ApiFuture<List<String> > testAuthorizedViewIamPermissionAsync ( String tableId , String authorizedViewId , String [] permissions )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#testIamPermissionsCallable() .
Asynchronously tests whether the caller has the given permissions for the specified
authorized view. Returns a subset of the specified permissions that the caller has.
Sample code:
ApiFuture<List<String> > grantedPermissionsFuture = client . testAuthorizedViewIamPermissionAsync ( "my-table-id" ,
"my-authorized-view-id" , "bigtable.authorizedViews.get" , "bigtable.authorizedViews.delete" );
ApiFutures . addCallback ( grantedPermissionsFuture ,
new ApiFutureCallback<List<String> > () {
public void onSuccess ( List<String> grantedPermissions ) {
System . out . println ( "Has get access: " + grantedPermissions . contains ( "bigtable.authorizedViews.get" ));
System . out . println ( "Has delete access: " + grantedPermissions . contains ( "bigtable.authorizedViews.delete" ));
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
See Also: Cloud Bigtable permissions
Parameters
Name
Description
tableId
String
authorizedViewId
String
permissions
String []
Returns
Type
Description
ApiFuture < List < String >>
testBackupIamPermission(String clusterId, String backupId, String[] permissions)
public List<String> testBackupIamPermission ( String clusterId , String backupId , String [] permissions )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#testIamPermissions(com.google.iam.v1.TestIamPermissionsRequest) .
Tests whether the caller has the given permissions for the specified backup. Returns a
subset of the specified permissions that the caller has.
Sample code:
List<String> grantedPermissions = client . testBackupIamPermission ( "my-cluster-id" , "my-backup-id" ,
"bigtable.backups.restore" , "bigtable.backups.delete" );
System.out.println("Has restore access: " +
grantedPermissions.contains("bigtable.backups.restore"));
System.out.println("Has delete access: " +
grantedPermissions.contains("bigtable.backups.delete"));
See Also: Cloud Bigtable permissions
Parameters
Name
Description
clusterId
String
backupId
String
permissions
String []
Returns
Type
Description
List < String >
testBackupIamPermissionAsync(String clusterId, String backupId, String[] permissions)
public ApiFuture<List<String> > testBackupIamPermissionAsync ( String clusterId , String backupId , String [] permissions )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#testIamPermissionsCallable() .
Asynchronously tests whether the caller has the given permissions for the specified backup.
Returns a subset of the specified permissions that the caller has.
Sample code:
ApiFuture<List<String> > grantedPermissionsFuture = client . testBackupIamPermissionAsync ( "my-cluster-id" , "my-backup-id" ,
"bigtable.backups.restore" , "bigtable.backups.delete" );
ApiFutures . addCallback ( grantedPermissionsFuture ,
new ApiFutureCallback<List<String> > () {
public void onSuccess ( List<String> grantedPermissions ) {
System . out . println ( "Has restore access: " + grantedPermissions . contains ( "bigtable.backups.restore" ));
System . out . println ( "Has delete access: " + grantedPermissions . contains ( "bigtable.backups.delete" ));
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
See Also: Cloud Bigtable permissions
Parameters
Name
Description
clusterId
String
backupId
String
permissions
String []
Returns
Type
Description
ApiFuture < List < String >>
testIamPermission(String tableId, String[] permissions)
public List<String> testIamPermission ( String tableId , String [] permissions )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#testIamPermissions(com.google.iam.v1.TestIamPermissionsRequest) .
Tests whether the caller has the given permissions for the specified table. Returns a subset
of the specified permissions that the caller has.
Sample code:
List<String> grantedPermissions = client . testIamPermission ( "my-table" ,
"bigtable.tables.readRows" , "bigtable.tables.mutateRows" );
System.out.println("Has read access: " +
grantedPermissions.contains("bigtable.tables.readRows")); System.out.println("Has write access:
" + grantedPermissions.contains("bigtable.tables.mutateRows"));
See Also: Cloud Bigtable permissions
Parameters
Name
Description
tableId
String
permissions
String []
Returns
Type
Description
List < String >
testIamPermissionAsync(String tableId, String[] permissions)
public ApiFuture<List<String> > testIamPermissionAsync ( String tableId , String [] permissions )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#testIamPermissionsCallable() .
Asynchronously tests whether the caller has the given permissions for the specified table.
Returns a subset of the specified permissions that the caller has.
Sample code:
ApiFuture<List<String> > grantedPermissionsFuture = client . testIamPermissionAsync ( "my-table" ,
"bigtable.tables.readRows" , "bigtable.tables.mutateRows" );
ApiFutures . addCallback ( grantedPermissionsFuture ,
new ApiFutureCallback<List<String> > () {
public void onSuccess ( List<String> grantedPermissions ) {
System . out . println ( "Has read access: " + grantedPermissions . contains ( "bigtable.tables.readRows" ));
System . out . println ( "Has write access: " + grantedPermissions . contains ( "bigtable.tables.mutateRows" ));
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
See Also: Cloud Bigtable permissions
Parameters
Name
Description
tableId
String
permissions
String []
Returns
Type
Description
ApiFuture < List < String >>
updateAuthorizedView(UpdateAuthorizedViewRequest request)
public AuthorizedView updateAuthorizedView ( UpdateAuthorizedViewRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#updateAuthorizedView(com.google.bigtable.admin.v2.UpdateAuthorizedViewRequest) .
Updates an existing authorized view with the specified configuration.
Sample code:
AuthorizedView existingAuthorizedView = client . getAuthorizedView ( "my-table" , "my-authorized-view" );
UpdateAuthorizedViewRequest request =
UpdateAuthorizedViewRequest . of ( existingAuthorizedView ). setDeletionProtection ( true );
AuthorizedView response = client . updateAuthorizedView ( request );
See Also: UpdateAuthorizedViewRequestfor available options.
Parameter
Name
Description
request
UpdateAuthorizedViewRequest
Returns
Type
Description
AuthorizedView
updateAuthorizedViewAsync(UpdateAuthorizedViewRequest request)
public ApiFuture<AuthorizedView> updateAuthorizedViewAsync ( UpdateAuthorizedViewRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#updateAuthorizedViewOperationCallable() .
Asynchronously updates an existing authorized view with the specified configuration.
Sample code:
AuthorizedView existingAuthorizedView = client . getAuthorizedView ( "my-table" , "my-authorized-view" );
UpdateAuthorizedViewRequest request =
UpdateAuthorizedViewRequest . of ( existingAuthorizedView ). setDeletionProtection ( true );
ApiFuture<AuthorizedView> future = client . updateAuthorizedViewAsync ( request );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<AuthorizedView> () {
public void onSuccess ( AuthorizedView authorizedView ) {
System . out . println ( "Successfully updated the authorized view: " + authorizedView . getId ());
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
See Also: UpdateAuthorizedViewRequestfor available options.
Parameter
Name
Description
request
UpdateAuthorizedViewRequest
Returns
Type
Description
ApiFuture < AuthorizedView >
updateBackup(UpdateBackupRequest request)
public Backup updateBackup ( UpdateBackupRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#updateBackup(com.google.bigtable.admin.v2.UpdateBackupRequest) .
Updates a backup with the specified configuration.
Sample code
Backup backup = client . updateBackup ( clusterId , backupId );
Parameter
Name
Description
request
UpdateBackupRequest
Returns
Type
Description
Backup
updateBackupAsync(UpdateBackupRequest request)
public ApiFuture<Backup> updateBackupAsync ( UpdateBackupRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#updateBackupCallable() .
Updates a backup with the specified configuration asynchronously.
Sample code
ApiFuture<Backup> future = client . updateBackupAsync ( clusterId , backupId );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<Backup> () {
public void onSuccess ( Backup backup ) {
System . out . println ( "Successfully update the backup " + backup . getId ());
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
Parameter
Name
Description
request
UpdateBackupRequest
Returns
Type
Description
ApiFuture < Backup >
updateSchemaBundle(UpdateSchemaBundleRequest request)
public SchemaBundle updateSchemaBundle ( UpdateSchemaBundleRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#updateSchemaBundle(com.google.bigtable.admin.v2.UpdateSchemaBundleRequest) .
Updates an existing schema bundle with the specified configuration.
Sample code:
SchemaBundle existingSchemaBundle = client . getSchemaBundle ( "my-table" , "my-schema-bundle" );
UpdateSchemaBundleRequest request = UpdateSchemaBundleRequest . of ( existingSchemaBundle ). setDeletionProtection ( true );
SchemaBundle response = client . updateSchemaBundle ( request );
See Also: UpdateSchemaBundleRequestfor available options.
Parameter
Name
Description
request
UpdateSchemaBundleRequest
Returns
Type
Description
SchemaBundle
updateSchemaBundleAsync(UpdateSchemaBundleRequest request)
public ApiFuture<SchemaBundle> updateSchemaBundleAsync ( UpdateSchemaBundleRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#updateSchemaBundleOperationCallable() .
Asynchronously updates an existing schema bundle with the specified configuration.
Sample code:
SchemaBundle existingSchemaBundle = client . getSchemaBundle ( "my-table" , "my-schema-bundle" );
UpdateSchemaBundleRequest request = UpdateSchemaBundleRequest . of ( existingSchemaBundle ). setDeletionProtection ( true );
ApiFuture<SchemaBundle> future = client . updateSchemaBundleAsync ( request );
ApiFutures . addCallback (
future ,
new ApiFutureCallback<SchemaBundle> () {
public void onSuccess ( SchemaBundle schemaBundle ) {
System . out . println ( "Successfully updated the schema bundle: " + schemaBundle . getId ());
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ());
See Also: UpdateSchemaBundleRequestfor available options.
Parameter
Name
Description
request
UpdateSchemaBundleRequest
Returns
Type
Description
ApiFuture < SchemaBundle >
updateTable(UpdateTableRequest request)
public Table updateTable ( UpdateTableRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#updateTable(com.google.bigtable.admin.v2.UpdateTableRequest) .
Update a table with the specified configuration.
Sample code:
// Alter change stream retention period.
Table table = client . updateTable (
UpdateTableRequest . of ( "my-table" )
. addChangeStreamRetention ( Duration . ofHours ( 24 ))
);
// Disable change stream
Table table = client . updateTable (
UpdateTableRequest . of ( "my-table" )
. disableChangeStream ()
);
See Also: UpdateTableRequestfor available options.
Parameter
Name
Description
request
UpdateTableRequest
Returns
Type
Description
Table
updateTableAsync(UpdateTableRequest request)
public ApiFuture<Table> updateTableAsync ( UpdateTableRequest request )
Obsolete
Use getBaseClient() to access the auto-generated proto-based methods instead.
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#updateTableOperationCallable() .
Asynchronously update a table with the specified configuration.
Sample code:
// Update table to 1 day change stream retention.
ApiFuture<Table> tableFuture = client . createTableAsync (
UpdateTableRequest . of ( "my-table" )
. addChangeStreamRetention ( Duration . ofHours ( 24 ))
);
ApiFutures . addCallback (
tableFuture ,
new ApiFutureCallback<Table> () {
public void onSuccess ( Table table ) {
System . out . println ( "Updated table: " + table . getTableName ());
}
public void onFailure ( Throwable t ) {
t . printStackTrace ();
}
},
MoreExecutors . directExecutor ()
);
See Also: UpdateTableRequestfor available options.
Parameter
Name
Description
request
UpdateTableRequest
Returns
Type
Description
ApiFuture < Table >
waitForConsistency(String tableId, String consistencyToken)
public void waitForConsistency ( String tableId , String consistencyToken )
Polls an existing consistency token until table replication is consistent across all clusters.
Useful for checking consistency of a token generated in a separate process. Blocks until
completion.
Parameters
Name
Description
tableId
String The table to check.
consistencyToken
String The token to poll.
waitForConsistencyAsync(String tableId, String consistencyToken)
public ApiFuture<Void> waitForConsistencyAsync ( String tableId , String consistencyToken )
Asynchronously polls the consistency token. Returns a future that completes when table
replication is consistent across all clusters.
Parameters
Name
Description
tableId
String The table to check.
consistencyToken
String The token to poll.
Returns
Type
Description
ApiFuture < Void >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]

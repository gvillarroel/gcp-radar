---
title: "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient
  title: "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Class BigtableInstanceAdminClient (2.74.0)
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
Client for creating, configuring and deleting Cloud Bigtable instances, app profiles, and
clusters.
See the individual methods for example code.
// One instance per application.
BigtableInstanceAdminClient client = BigtableInstanceAdminClient . create ( "my-project" );
CreateInstanceRequest request = CreateInstanceRequest . of ( "my-instance" )
. addCluster ( "my-cluster" , "us-east1-c" , 3 , StorageType . SSD );
Instance instance = client . createInstance ( request );
// Cleanup during application shutdown.
client . close ();
Creating a new client is a very expensive operation and should only be done once and shared in
an application. However, close() needs to be called on the client object to clean up resources
such as threads during application shutdown.
This class can be customized by passing in a custom instance of BigtableInstanceAdminSettings
to create(). For example:
To customize credentials:
BigtableInstanceAdminSettings settings = BigtableInstanceAdminSettings . newBuilder ()
. setProjectId ( "my-project" )
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
BigtableInstanceAdminClient client = BigtableInstanceAdminClient . create ( settings );
To customize the endpoint:
BigtableInstanceAdminSettings . Builder settingsBuilder = BigtableInstanceAdminSettings . newBuilder ()
. setProjectId ( "my-project" );
settingsBuilder . stubSettings ()
. setEndpoint ( myEndpoint );
BigtableInstanceAdminClient client = BigtableInstanceAdminClient . create ( settingsBuilder . build ());
Inheritance
java.lang.Object >
BigtableInstanceAdminClient
Static Methods
create(BigtableInstanceAdminSettings settings)
public static BigtableInstanceAdminClient create ( BigtableInstanceAdminSettings settings )
Constructs an instance of BigtableInstanceAdminClient with the given settings.
Parameter
Name
Description
settings
BigtableInstanceAdminSettings
Returns
Type
Description
BigtableInstanceAdminClient
Exceptions
Type
Description
IOException
create(String projectId)
public static BigtableInstanceAdminClient create ( String projectId )
Constructs an instance of BigtableInstanceAdminClient with the given project ID.
Parameter
Name
Description
projectId
String
Returns
Type
Description
BigtableInstanceAdminClient
Exceptions
Type
Description
IOException
create(String projectId, BigtableInstanceAdminStub stub)
public static BigtableInstanceAdminClient create ( String projectId , BigtableInstanceAdminStub stub )
Constructs an instance of BigtableInstanceAdminClient with the given project ID and stub.
Parameters
Name
Description
projectId
String
stub
com.google.cloud.bigtable.admin.v2.stub.BigtableInstanceAdminStub
Returns
Type
Description
BigtableInstanceAdminClient
Methods
close()
public void close ()
Closes the client and frees all resources associated with it (like thread pools).
createAppProfile(CreateAppProfileRequest request)
public AppProfile createAppProfile ( CreateAppProfileRequest request )
Creates a new app profile.
Sample code:
AppProfile appProfile = client . createAppProfile (
CreateAppProfileRequest . of ( "my-instance" , "my-new-app-profile" )
. setRoutingPolicy ( SingleClusterRoutingPolicy . of ( "my-cluster" ))
);
See Also: CreateAppProfileRequest
Parameter
Name
Description
request
CreateAppProfileRequest
Returns
Type
Description
AppProfile
createAppProfileAsync(CreateAppProfileRequest request)
public ApiFuture<AppProfile> createAppProfileAsync ( CreateAppProfileRequest request )
Asynchronously creates a new app profile.
Sample code:
ApiFuture<AppProfile> appProfileFuture = client . createAppProfileAsync (
CreateAppProfileRequest . of ( "my-instance" , "my-new-app-profile" )
. setRoutingPolicy ( SingleClusterRoutingPolicy . of ( "my-cluster" ))
);
AppProfile appProfile = appProfileFuture . get ();
See Also: CreateAppProfileRequest
Parameter
Name
Description
request
CreateAppProfileRequest
Returns
Type
Description
ApiFuture < AppProfile >
createCluster(CreateClusterRequest request)
public Cluster createCluster ( CreateClusterRequest request )
Creates a new cluster in the specified instance.
Sample code:
Cluster cluster = client . createCluster (
CreateClusterRequest . of ( "my-instance" , "my-new-cluster" )
. setZone ( "us-east1-c" )
. setServeNodes ( 3 )
. setStorageType ( StorageType . SSD )
);
Parameter
Name
Description
request
CreateClusterRequest
Returns
Type
Description
Cluster
createClusterAsync(CreateClusterRequest request)
public ApiFuture<Cluster> createClusterAsync ( CreateClusterRequest request )
Asynchronously creates a new cluster in the specified instance.
Sample code:
ApiFuture<Cluster> clusterFuture = client . createClusterAsync (
CreateClusterRequest . of ( "my-instance" , "my-new-cluster" )
. setZone ( "us-east1-c" )
. setServeNodes ( 3 )
. setStorageType ( StorageType . SSD )
);
Cluster cluster = clusterFuture . get ();
Parameter
Name
Description
request
CreateClusterRequest
Returns
Type
Description
ApiFuture < Cluster >
createInstance(CreateInstanceRequest request)
public Instance createInstance ( CreateInstanceRequest request )
Creates a new instance and returns its representation.
Sample code:
Instance instance = client . createInstance (
CreateInstanceRequest . of ( "my-instance" )
. addCluster ( "my-cluster" , "us-east1-c" , 3 , StorageType . SSD )
);
See Also: CreateInstanceRequestfor details.
Parameter
Name
Description
request
CreateInstanceRequest
Returns
Type
Description
Instance
createInstanceAsync(CreateInstanceRequest request)
public ApiFuture<Instance> createInstanceAsync ( CreateInstanceRequest request )
Asynchronously creates a new instance and returns its representation wrapped in a future.
Sample code:
ApiFuture<Instance> instanceFuture = client . createInstanceAsync (
CreateInstanceRequest . of ( "my-instance" )
. addCluster ( "my-cluster" , "us-east1-c" , 3 , StorageType . SSD )
);
Instance instance = instanceFuture . get ();
See Also: CreateInstanceRequestfor details.
Parameter
Name
Description
request
CreateInstanceRequest
Returns
Type
Description
ApiFuture < Instance >
createLogicalView(CreateLogicalViewRequest request)
public LogicalView createLogicalView ( CreateLogicalViewRequest request )
Creates a new logical view.
Sample code:
LogicalView logicalView = client . createLogicalView (
CreateLogicalViewRequest . of ( "my-instance" , "my-new-logical-view" )
. setQuery ( query )
);
See Also: CreateLogicalViewRequest
Parameter
Name
Description
request
CreateLogicalViewRequest
Returns
Type
Description
LogicalView
createLogicalViewAsync(CreateLogicalViewRequest request)
public ApiFuture<LogicalView> createLogicalViewAsync ( CreateLogicalViewRequest request )
Asynchronously creates a new logical view.
Sample code:
ApiFuture<LogicalView> logicalViewFuture = client . createLogicalViewAsync (
CreateLogicalViewRequest . of ( "my-instance" , "my-new-logical-view" )
. setQuery ( query )
);
LogicalView logicalView = logicalViewFuture . get ();
See Also: CreateLogicalViewRequest
Parameter
Name
Description
request
CreateLogicalViewRequest
Returns
Type
Description
ApiFuture < LogicalView >
createMaterializedView(CreateMaterializedViewRequest request)
public MaterializedView createMaterializedView ( CreateMaterializedViewRequest request )
Creates a new materialized view.
Sample code:
MaterializedView materializedView = client . createMaterializedView (
CreateMaterializedViewRequest . of ( "my-instance" , "my-new-materialized-view" )
. setQuery ( query )
);
See Also: CreateMaterializedViewRequest
Parameter
Name
Description
request
CreateMaterializedViewRequest
Returns
Type
Description
MaterializedView
createMaterializedViewAsync(CreateMaterializedViewRequest request)
public ApiFuture<MaterializedView> createMaterializedViewAsync ( CreateMaterializedViewRequest request )
Asynchronously creates a new materialized view.
Sample code:
ApiFuture<MaterializedView> materializedViewFuture = client . createMaterializedViewAsync (
CreateMaterializedViewRequest . of ( "my-instance" , "my-new-materialized-view" )
. setQuery ( query )
);
MaterializedView materializedView = materializedViewFuture . get ();
See Also: CreateMaterializedViewRequest
Parameter
Name
Description
request
CreateMaterializedViewRequest
Returns
Type
Description
ApiFuture < MaterializedView >
deleteAppProfile(String instanceId, String appProfileId)
public void deleteAppProfile ( String instanceId , String appProfileId )
Deletes the specified app profile.
Sample code:
client . deleteAppProfile ( "my-instance" , "my-app-profile" );
Parameters
Name
Description
instanceId
String
appProfileId
String
deleteAppProfile(String instanceId, String appProfileId, boolean forceDelete)
public void deleteAppProfile ( String instanceId , String appProfileId , boolean forceDelete )
Deletes the specified app profile with an option to force deletion.
Sample code:
client . deleteAppProfile ( "my-instance" , "my-app-profile" , true );
Parameters
Name
Description
instanceId
String
appProfileId
String
forceDelete
boolean
deleteAppProfileAsync(String instanceId, String appProfileId)
public ApiFuture<Void> deleteAppProfileAsync ( String instanceId , String appProfileId )
Asynchronously deletes the specified app profile.
Sample code:
ApiFuture<Void> deleteFuture = client . deleteAppProfileAsync ( "my-instance" , "my-app-profile" );
deleteFuture . get ();
Parameters
Name
Description
instanceId
String
appProfileId
String
Returns
Type
Description
ApiFuture < Void >
deleteAppProfileAsync(String instanceId, String appProfileId, boolean forceDelete)
public ApiFuture<Void> deleteAppProfileAsync ( String instanceId , String appProfileId , boolean forceDelete )
Asynchronously deletes the specified app profile with an option to force deletion.
Sample code:
ApiFuture<Void> deleteFuture = client . deleteAppProfileAsync ( "my-instance" , "my-app-profile" , true );
deleteFuture . get ();
Parameters
Name
Description
instanceId
String
appProfileId
String
forceDelete
boolean
Returns
Type
Description
ApiFuture < Void >
deleteCluster(String instanceId, String clusterId)
public void deleteCluster ( String instanceId , String clusterId )
Deletes the specified cluster. Please note that an instance must have at least 1 cluster. To
remove the last cluster, please use BigtableInstanceAdminClient#deleteInstance(String) .
Sample code:
client . deleteCluster ( "my-instance" , "my-cluster" );
Parameters
Name
Description
instanceId
String
clusterId
String
deleteClusterAsync(String instanceId, String clusterId)
public ApiFuture<Void> deleteClusterAsync ( String instanceId , String clusterId )
Asynchronously deletes the specified cluster. Please note that an instance must have at least 1
cluster. To remove the last cluster, please use BigtableInstanceAdminClient#deleteInstanceAsync(String) .
Sample code:
ApiFuture<Void> future = client . deleteClusterAsync ( "my-instance" , "my-cluster" );
future . get ();
Parameters
Name
Description
instanceId
String
clusterId
String
Returns
Type
Description
ApiFuture < Void >
deleteInstance(String instanceId)
public void deleteInstance ( String instanceId )
Deletes the specified instance.
Sample code:
client . deleteInstance ( "my-instance" );
Parameter
Name
Description
instanceId
String
deleteInstanceAsync(String instanceId)
public ApiFuture<Void> deleteInstanceAsync ( String instanceId )
Asynchronously deletes the specified instance.
Sample code:
ApiFuture<Void> deleteFuture = client . deleteInstanceAsync ( "my-instance" );
deleteFuture . get ();
Parameter
Name
Description
instanceId
String
Returns
Type
Description
ApiFuture < Void >
deleteLogicalView(String instanceId, String logicalViewId)
public void deleteLogicalView ( String instanceId , String logicalViewId )
Deletes the specified logical view.
Sample code:
client . deleteLogicalView ( "my-instance" , "my-logical-view" );
Parameters
Name
Description
instanceId
String
logicalViewId
String
deleteLogicalViewAsync(String instanceId, String logicalViewId)
public ApiFuture<Void> deleteLogicalViewAsync ( String instanceId , String logicalViewId )
Asynchronously deletes the specified logical view.
Sample code:
ApiFuture<Void> deleteFuture = client . deleteLogicalViewAsync ( "my-instance" , "my-logical-view" );
deleteFuture . get ();
Parameters
Name
Description
instanceId
String
logicalViewId
String
Returns
Type
Description
ApiFuture < Void >
deleteMaterializedView(String instanceId, String materializedViewId)
public void deleteMaterializedView ( String instanceId , String materializedViewId )
Deletes the specified materialized view.
Sample code:
client . deleteMaterializedView ( "my-instance" , "my-materialized-view" );
Parameters
Name
Description
instanceId
String
materializedViewId
String
deleteMaterializedViewAsync(String instanceId, String materializedViewId)
public ApiFuture<Void> deleteMaterializedViewAsync ( String instanceId , String materializedViewId )
Asynchronously deletes the specified materialized view.
Sample code:
ApiFuture<Void> deleteFuture = client . deleteMaterializedViewAsync ( "my-instance" , "my-materialized-view" );
deleteFuture . get ();
Parameters
Name
Description
instanceId
String
materializedViewId
String
Returns
Type
Description
ApiFuture < Void >
disableClusterAutoscaling(String instanceId, String clusterId, int staticSize)
public Cluster disableClusterAutoscaling ( String instanceId , String clusterId , int staticSize )
Disables autoscaling and enables manual scaling by setting a static node count for the cluster.
Please note that only clusters that belong to a production instance can be resized.
Sample code:
Cluster cluster = client . disableClusterAutoscaling ( "my-instance" , "my-cluster" , 3 );
Parameters
Name
Description
instanceId
String
clusterId
String
staticSize
int
Returns
Type
Description
Cluster
disableClusterAutoscalingAsync(String instanceId, String clusterId, int staticSize)
public ApiFuture<Cluster> disableClusterAutoscalingAsync ( String instanceId , String clusterId , int staticSize )
Asynchronously disables autoscaling and enables manual scaling by setting a static node count
for the cluster. Please note that only clusters that belong to a production instance can be
resized.
Sample code:
ApiFuture<Cluster> clusterApiFuture = client . disableClusterAutoscalingAsync ( "my-instance" , "my-cluster" , 3 );
Cluster cluster = clusterApiFuture . get ();
Parameters
Name
Description
instanceId
String
clusterId
String
staticSize
int
Returns
Type
Description
ApiFuture < Cluster >
exists(String instanceId)
public boolean exists ( String instanceId )
Checks if the instance specified by the instance ID exists.
Sample code:
if ( client . exists ( "my-instance" )) {
System . out . println ( "Instance exists" );
}
Parameter
Name
Description
instanceId
String
Returns
Type
Description
boolean
existsAsync(String instanceId)
public ApiFuture<Boolean> existsAsync ( String instanceId )
Asynchronously checks if the instance specified by the instance ID exists.
Sample code:
ApiFuture<Boolean> found = client . existsAsync ( "my-instance" );
ApiFutures . addCallback (
found ,
new ApiFutureCallback<Boolean> () {
public void onSuccess ( Boolean found ) {
if ( found ) {
System . out . println ( "Instance exists" );
} else {
System . out . println ( "Instance not found" );
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
instanceId
String
Returns
Type
Description
ApiFuture < Boolean >
getAppProfile(String instanceId, String appProfileId)
public AppProfile getAppProfile ( String instanceId , String appProfileId )
Gets the app profile by ID.
Sample code:
AppProfile appProfile = client . getAppProfile ( "my-instance" , "my-app-profile" );
See Also: AppProfile
Parameters
Name
Description
instanceId
String
appProfileId
String
Returns
Type
Description
AppProfile
getAppProfileAsync(String instanceId, String appProfileId)
public ApiFuture<AppProfile> getAppProfileAsync ( String instanceId , String appProfileId )
Asynchronously gets the app profile by ID.
Sample code:
ApiFuture<AppProfile> appProfileFuture = client . getAppProfileAsync ( "my-instance" , "my-app-profile" );
AppProfile appProfile = appProfileFuture . get ();
See Also: AppProfile
Parameters
Name
Description
instanceId
String
appProfileId
String
Returns
Type
Description
ApiFuture < AppProfile >
getCluster(String instanceId, String clusterId)
public Cluster getCluster ( String instanceId , String clusterId )
Gets the cluster representation by ID.
Sample code:
Cluster cluster = client . getCluster ( "my-instance" , "my-cluster" );
Parameters
Name
Description
instanceId
String
clusterId
String
Returns
Type
Description
Cluster
getClusterAsync(String instanceId, String clusterId)
public ApiFuture<Cluster> getClusterAsync ( String instanceId , String clusterId )
Asynchronously gets the cluster representation by ID.
Sample code:
ApiFuture<Cluster> clusterFuture = client . getClusterAsync ( "my-instance" , "my-cluster" );
Cluster cluster = clusterFuture . get ();
Parameters
Name
Description
instanceId
String
clusterId
String
Returns
Type
Description
ApiFuture < Cluster >
getIamPolicy(String instanceId)
public Policy getIamPolicy ( String instanceId )
Gets the IAM access control policy for the specified instance.
Sample code:
Policy policy = client . getIamPolicy ( "my-instance" );
for ( Map . Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) {
System . out . printf ( "Role: %s Identities: %s
" , entry . getKey (), entry . getValue ());
}
See Also: Instance-level IAM management
Parameter
Name
Description
instanceId
String
Returns
Type
Description
com.google.cloud.Policy
getIamPolicyAsync(String instanceId)
public ApiFuture<Policy> getIamPolicyAsync ( String instanceId )
Asynchronously gets the IAM access control policy for the specified instance.
Sample code:
ApiFuture<Policy> policyFuture = client . getIamPolicyAsync ( "my-instance" );
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
See Also: Instance-level IAM management
Parameter
Name
Description
instanceId
String
Returns
Type
Description
ApiFuture < com.google.cloud.Policy >
getInstance(String id)
public Instance getInstance ( String id )
Get the instance representation by ID.
Sample code:
Instance instance = client . getInstance ( "my-instance" );
Parameter
Name
Description
id
String
Returns
Type
Description
Instance
getInstanceAsync(String instanceId)
public ApiFuture<Instance> getInstanceAsync ( String instanceId )
Asynchronously gets the instance representation by ID wrapped in a future.
Sample code:
ApiFuture<Instance> instanceFuture = client . getInstanceAsync ( "my-instance" );
Instance instance = instanceFuture . get ();
Parameter
Name
Description
instanceId
String
Returns
Type
Description
ApiFuture < Instance >
getLogicalView(String instanceId, String logicalViewId)
public LogicalView getLogicalView ( String instanceId , String logicalViewId )
Gets the logical view by ID.
Sample code:
LogicalView logicalView = client . getLogicalView ( "my-instance" , "my-logical-view" );
See Also: LogicalView
Parameters
Name
Description
instanceId
String
logicalViewId
String
Returns
Type
Description
LogicalView
getLogicalViewAsync(String instanceId, String logicalViewId)
public ApiFuture<LogicalView> getLogicalViewAsync ( String instanceId , String logicalViewId )
Asynchronously gets the logical view by ID.
Sample code:
ApiFuture<LogicalView> logicalViewFuture = client . getLogicalViewAsync ( "my-instance" , "my-logical-view" );
LogicalView logicalView = logicalViewFuture . get ();
See Also: LogicalView
Parameters
Name
Description
instanceId
String
logicalViewId
String
Returns
Type
Description
ApiFuture < LogicalView >
getMaterializedView(String instanceId, String materializedViewId)
public MaterializedView getMaterializedView ( String instanceId , String materializedViewId )
Gets the materialized view by ID.
Sample code:
MaterializedView materializedView = client . getMaterializedView ( "my-instance" , "my-materialized-view" );
See Also: MaterializedView
Parameters
Name
Description
instanceId
String
materializedViewId
String
Returns
Type
Description
MaterializedView
getMaterializedViewAsync(String instanceId, String materializedViewId)
public ApiFuture<MaterializedView> getMaterializedViewAsync ( String instanceId , String materializedViewId )
Asynchronously gets the materialized view by ID.
Sample code:
ApiFuture<MaterializedView> materializedViewFuture = client . getMaterializedViewAsync ( "my-instance" , "my-materialized-view" );
MaterializedView materializedView = materializedViewFuture . get ();
See Also: MaterializedView
Parameters
Name
Description
instanceId
String
materializedViewId
String
Returns
Type
Description
ApiFuture < MaterializedView >
getProjectId()
public String getProjectId ()
Gets the project ID this client is associated with.
Returns
Type
Description
String
listAppProfiles(String instanceId)
public List<AppProfile> listAppProfiles ( String instanceId )
Lists all app profiles of the specified instance.
Sample code:
List<AppProfile> appProfiles = client . listAppProfiles ( "my-instance" );
See Also: AppProfile
Parameter
Name
Description
instanceId
String
Returns
Type
Description
List < AppProfile >
listAppProfilesAsync(String instanceId)
public ApiFuture<List<AppProfile> > listAppProfilesAsync ( String instanceId )
Asynchronously lists all app profiles of the specified instance.
Sample code:
ApiFuture<List<AppProfile> > appProfilesFuture = client . listAppProfilesAsync ( "my-instance" );
List<AppProfile> appProfiles = appProfileFuture . get ();
See Also: AppProfile
Parameter
Name
Description
instanceId
String
Returns
Type
Description
ApiFuture < List < AppProfile >>
listClusters(String instanceId)
public List<Cluster> listClusters ( String instanceId )
Lists all clusters in the specified instance.
This method will throw a PartialListClustersException when any zone is unavailable.
If a partial list is OK, the exception can be caught and inspected.
Sample code:
try {
List<Cluster> clusters = client . listClusters ( "my-instance" );
} catch ( PartialListClustersException e ) {
System . out . println ( "The following zones are unavailable: " + e . getUnavailableZones ());
System . out . println ( "But the following clusters are reachable: " + e . getClusters ())
}
Parameter
Name
Description
instanceId
String
Returns
Type
Description
List < Cluster >
listClustersAsync(String instanceId)
public ApiFuture<List<Cluster> > listClustersAsync ( String instanceId )
Asynchronously lists all clusters in the specified instance.
This method will throw a PartialListClustersException when any zone is unavailable.
If a partial list is OK, the exception can be caught and inspected.
Sample code:
ApiFuture<Cluster> clustersFuture = client . listClustersAsync ( "my-instance" );
ApiFutures . addCallback ( clustersFuture , new ApiFutureCallback<List<Cluster> > () {
public void onFailure ( Throwable t ) {
if ( t instanceof PartialListClustersException ) {
PartialListClustersException partialError = ( PartialListClustersException ) t ;
System . out . println ( "The following zones are unavailable: " + partialError . getUnavailableZones ());
System . out . println ( "But the following clusters are reachable: " + partialError . getClusters ());
} else {
t . printStackTrace ();
}
}
public void onSuccess ( List<Cluster> result ) {
System . out . println ( "Found a complete set of instances: " + result );
}
}, MoreExecutors . directExecutor ());
Parameter
Name
Description
instanceId
String
Returns
Type
Description
ApiFuture < List < Cluster >>
listInstances()
public List<Instance> listInstances ()
Lists all of the instances in the current project.
This method will throw a PartialListInstancesException when any zone is unavailable.
If a partial list is OK, the exception can be caught and inspected.
Sample code:
try {
List<Instance> instances = client . listInstances ();
} catch ( PartialListInstancesException e ) {
System . out . println ( "The following zones are unavailable: " + e . getUnavailableZones ());
System . out . println ( "But the following instances are reachable: " + e . getInstances ());
}
Returns
Type
Description
List < Instance >
listInstancesAsync()
public ApiFuture<List<Instance> > listInstancesAsync ()
Asynchronously lists all of the instances in the current project.
This method will throw a PartialListInstancesException when any zone is unavailable.
If a partial list is OK, the exception can be caught and inspected.
Sample code:
ApiFuture<Instance> instancesFuture = client . listInstancesAsync ();
ApiFutures . addCallback ( instancesFuture , new ApiFutureCallback<List<Instance> > () {
public void onFailure ( Throwable t ) {
if ( t instanceof PartialListInstancesException ) {
PartialListInstancesException partialError = ( PartialListInstancesException ) t ;
System . out . println ( "The following zones are unavailable: " + partialError . getUnavailableZones ());
System . out . println ( "But the following instances are reachable: " + partialError . getInstances ());
} else {
t . printStackTrace ();
}
}
public void onSuccess ( List<Instance> result ) {
System . out . println ( "Found a complete set of instances: " + result );
}
}, MoreExecutors . directExecutor ());
Returns
Type
Description
ApiFuture < List < Instance >>
listLogicalViews(String instanceId)
public List<LogicalView> listLogicalViews ( String instanceId )
Lists all logical views of the specified instance.
Sample code:
List<LogicalView> logicalViews = client . listLogicalViews ( "my-instance" );
See Also: LogicalView
Parameter
Name
Description
instanceId
String
Returns
Type
Description
List < LogicalView >
listLogicalViewsAsync(String instanceId)
public ApiFuture<List<LogicalView> > listLogicalViewsAsync ( String instanceId )
Asynchronously lists all logical views of the specified instance.
Sample code:
ApiFuture<List<LogicalView> > logicalViewsFuture = client . listLogicalViewsAsync ( "my-instance" );
List<LogicalView> logicalViews = logicalViewFuture . get ();
See Also: LogicalView
Parameter
Name
Description
instanceId
String
Returns
Type
Description
ApiFuture < List < LogicalView >>
listMaterializedViews(String instanceId)
public List<MaterializedView> listMaterializedViews ( String instanceId )
Lists all materialized views of the specified instance.
Sample code:
List<MaterializedView> materializedViews = client . listMaterializedViews ( "my-instance" );
See Also: MaterializedView
Parameter
Name
Description
instanceId
String
Returns
Type
Description
List < MaterializedView >
listMaterializedViewsAsync(String instanceId)
public ApiFuture<List<MaterializedView> > listMaterializedViewsAsync ( String instanceId )
Asynchronously lists all materialized views of the specified instance.
Sample code:
ApiFuture<List<MaterializedView> > materializedViewsFuture = client . listMaterializedViewsAsync ( "my-instance" );
List<MaterializedView> materializedViews = materializedViewFuture . get ();
See Also: MaterializedView
Parameter
Name
Description
instanceId
String
Returns
Type
Description
ApiFuture < List < MaterializedView >>
resizeCluster(String instanceId, String clusterId, int numServeNodes)
public Cluster resizeCluster ( String instanceId , String clusterId , int numServeNodes )
Modifies the cluster's node count for manual scaling. If autoscaling is already enabled, manual
scaling will be silently ignored. If you wish to disable autoscaling and enable manual scaling,
please use BigtableInstanceAdminClient#disableClusterAutoscaling(String, String, int)
instead. Please note that only clusters that belong to a production instance can be resized.
Sample code:
Cluster cluster = client . resizeCluster ( "my-instance" , "my-cluster" , 30 );
Parameters
Name
Description
instanceId
String
clusterId
String
numServeNodes
int
Returns
Type
Description
Cluster
resizeClusterAsync(String instanceId, String clusterId, int numServeNodes)
public ApiFuture<Cluster> resizeClusterAsync ( String instanceId , String clusterId , int numServeNodes )
Asynchronously modifies the cluster's node count for manual scaling. If autoscaling is already
enabled, manual scaling will be silently ignored. If you wish to disable autoscaling and enable
manual scaling, please use BigtableInstanceAdminClient#disableClusterAutoscaling(String,
String, int) instead. Please note that only clusters that belong to a production instance can
be resized.
ApiFuture<Cluster> clusterFuture = client . resizeCluster ( "my-instance" , "my-cluster" , 30 );
Cluster cluster = clusterFuture . get ();
Parameters
Name
Description
instanceId
String
clusterId
String
numServeNodes
int
Returns
Type
Description
ApiFuture < Cluster >
setIamPolicy(String instanceId, Policy policy)
public Policy setIamPolicy ( String instanceId , Policy policy )
Replaces the IAM policy associated with the specified instance.
Sample code:
Policy newPolicy = client . setIamPolicy ( "my-instance" ,
Policy . newBuilder ()
. addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" ))
. addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" ))
. build ());
See Also: Instance-level IAM management
Parameters
Name
Description
instanceId
String
policy
com.google.cloud.Policy
Returns
Type
Description
com.google.cloud.Policy
setIamPolicyAsync(String instanceId, Policy policy)
public ApiFuture<Policy> setIamPolicyAsync ( String instanceId , Policy policy )
Asynchronously replaces the IAM policy associated with the specified instance.
Sample code:
ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-instance" ,
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
See Also: Instance-level IAM management
Parameters
Name
Description
instanceId
String
policy
com.google.cloud.Policy
Returns
Type
Description
ApiFuture < com.google.cloud.Policy >
testIamPermission(String instanceId, String[] permissions)
public List<String> testIamPermission ( String instanceId , String [] permissions )
Tests whether the caller has the given permissions for the specified instance. Returns a subset
of the specified permissions that the caller has.
Sample code:
List<String> grantedPermissions = client . testIamPermission ( "my-instance" ,
"bigtable.tables.readRows" , "bigtable.tables.mutateRows" );
System.out.println("Has read access: " +
grantedPermissions.contains("bigtable.tables.readRows")); System.out.println("Has write access:
" + grantedPermissions.contains("bigtable.tables.mutateRows"));
See Also: Cloud Bigtable permissions
Parameters
Name
Description
instanceId
String
permissions
String []
Returns
Type
Description
List < String >
testIamPermissionAsync(String instanceId, String[] permissions)
public ApiFuture<List<String> > testIamPermissionAsync ( String instanceId , String [] permissions )
Asynchronously tests whether the caller has the given permissions for the specified instance.
Returns a subset of the specified permissions that the caller has.
Sample code:
ApiFuture<List<String> > grantedPermissionsFuture = client . testIamPermissionAsync ( "my-instance" ,
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
instanceId
String
permissions
String []
Returns
Type
Description
ApiFuture < List < String >>
updateAppProfile(UpdateAppProfileRequest request)
public AppProfile updateAppProfile ( UpdateAppProfileRequest request )
Updates an existing app profile.
Sample code:
AppProfile existingAppProfile = client . getAppProfile ( "my-instance" , "my-app-profile" );
AppProfile updatedAppProfile = client . updateAppProfile (
UpdateAppProfileRequest . of ( existingAppProfile )
. setRoutingPolicy ( SingleClusterRoutingPolicy . of ( "my-cluster" ))
);
See Also: UpdateAppProfileRequest
Parameter
Name
Description
request
UpdateAppProfileRequest
Returns
Type
Description
AppProfile
updateAppProfileAsync(UpdateAppProfileRequest request)
public ApiFuture<AppProfile> updateAppProfileAsync ( UpdateAppProfileRequest request )
Asynchronously updates an existing app profile.
Sample code:
ApiFuture<AppProfile> existingAppProfileFuture = client . getAppProfileAsync ( "my-instance" , "my-app-profile" );
ApiFuture<AppProfile> updatedAppProfileFuture = ApiFutures . transformAsync (
existingAppProfileFuture ,
new ApiAsyncFunction<AppProfile , AppProfile > () {
public ApiFuture<AppProfile> apply ( AppProfile existingAppProfile ) {
return client . updateAppProfileAsync (
UpdateAppProfileRequest . of ( existingAppProfile )
. setRoutingPolicy ( SingleClusterRoutingPolicy . of ( "my-other-cluster" ))
);
}
},
MoreExecutors . directExecutor ()
);
ApiFuture<AppProfile> appProfile = updatedAppProfileFuture . get ();
See Also: UpdateAppProfileRequest
Parameter
Name
Description
request
UpdateAppProfileRequest
Returns
Type
Description
ApiFuture < AppProfile >
updateClusterAutoscalingConfig(ClusterAutoscalingConfig clusterAutoscalingConfig)
public Cluster updateClusterAutoscalingConfig ( ClusterAutoscalingConfig clusterAutoscalingConfig )
Modifies the cluster's autoscaling config. This will enable autoscaling and disable manual
scaling if the cluster is manually scaled. Please note that only clusters that belong to a
production instance can enable autoscaling.
Sample code:
ClusterAutoscalingConfig clusterAutoscalingConfig =
ClusterAutoscalingConfig . of ( "my-instance" , "my-cluster" )
. setMinNodes ( 1 )
. setMaxNodes ( 4 )
. setCpuUtilizationTargetPercent ( 40 );
Cluster cluster = client . updateClusterAutoscalingConfig ( clusterAutoscalingConfig );
Parameter
Name
Description
clusterAutoscalingConfig
ClusterAutoscalingConfig
Returns
Type
Description
Cluster
updateClusterAutoscalingConfigAsync(ClusterAutoscalingConfig clusterAutoscalingConfig)
public ApiFuture<Cluster> updateClusterAutoscalingConfigAsync ( ClusterAutoscalingConfig clusterAutoscalingConfig )
Asynchronously modifies the cluster's autoscaling config. This will enable autoscaling and
disable manual scaling if the cluster is manually scaled. Please note that only clusters that
belong to a production instance can enable autoscaling.
Sample code:
ClusterAutoscalingConfig clusterAutoscalingConfig =
ClusterAutoscalingConfig . of ( targetInstanceId , targetClusterId )
. setMinNodes ( 1 )
. setMaxNodes ( 4 )
. setCpuUtilizationTargetPercent ( 40 );
ApiFuture<Cluster> clusterApiFuture = client . updateClusterAutoscalingConfigAsync ( clusterAutoscalingConfig );
Cluster cluster = clusterApiFuture . get ();
Parameter
Name
Description
clusterAutoscalingConfig
ClusterAutoscalingConfig
Returns
Type
Description
ApiFuture < Cluster >
updateInstance(UpdateInstanceRequest request)
public Instance updateInstance ( UpdateInstanceRequest request )
Updates a new instance and returns its representation.
Sample code:
Instance instance = client . updateInstance (
UpdateInstanceRequest . of ( "my-instance" )
. setProductionType ()
);
See Also: UpdateInstanceRequestfor details.
Parameter
Name
Description
request
UpdateInstanceRequest
Returns
Type
Description
Instance
updateInstanceAsync(UpdateInstanceRequest request)
public ApiFuture<Instance> updateInstanceAsync ( UpdateInstanceRequest request )
Asynchronously updates a new instance and returns its representation wrapped in a future.
Sample code:
ApiFuture<Instance> instanceFuture = client . updateInstanceAsync (
UpdateInstanceRequest . of ( "my-instance" )
. setProductionType ()
);
Instance instance = instanceFuture . get ();
See Also: UpdateInstanceRequestfor details.
Parameter
Name
Description
request
UpdateInstanceRequest
Returns
Type
Description
ApiFuture < Instance >
updateLogicalView(UpdateLogicalViewRequest request)
public LogicalView updateLogicalView ( UpdateLogicalViewRequest request )
Updates an existing logical view.
Sample code:
LogicalView existingLogicalView = client . getLogicalView ( "my-instance" , "my-logical-view" );
LogicalView updatedLogicalView = client . updateLogicalView (
UpdateLogicalViewRequest . of ( existingLogicalView )
. setQuery ( query )
);
See Also: UpdateLogicalViewRequest
Parameter
Name
Description
request
UpdateLogicalViewRequest
Returns
Type
Description
LogicalView
updateLogicalViewAsync(UpdateLogicalViewRequest request)
public ApiFuture<LogicalView> updateLogicalViewAsync ( UpdateLogicalViewRequest request )
Asynchronously updates an existing logical view.
Sample code:
ApiFuture<LogicalView> existingLogicalViewFuture = client . getLogicalViewAsync ( "my-instance" , "my-logical-view" );
ApiFuture<LogicalView> updatedLogicalViewFuture = ApiFutures . transformAsync (
existingLogicalViewFuture ,
new ApiAsyncFunction<LogicalView , LogicalView > () {
public ApiFuture<LogicalView> apply ( LogicalView existingLogicalView ) {
return client . updateLogicalViewAsync (
UpdateLogicalViewRequest . of ( existingLogicalView )
. setQuery ( query )
);
}
},
MoreExecutors . directExecutor ()
);
ApiFuture<LogicalView> logicalView = updatedLogicalViewFuture . get ();
See Also: UpdateLogicalViewRequest
Parameter
Name
Description
request
UpdateLogicalViewRequest
Returns
Type
Description
ApiFuture < LogicalView >
updateMaterializedView(UpdateMaterializedViewRequest request)
public MaterializedView updateMaterializedView ( UpdateMaterializedViewRequest request )
Updates an existing materialized view.
Sample code:
MaterializedView existingMaterializedView = client . getMaterializedView ( "my-instance" , "my-materialized-view" );
MaterializedView updatedMaterializedView = client . updateMaterializedView (
UpdateMaterializedViewRequest . of ( existingMaterializedView )
. setDeletionProtection ( false )
);
See Also: UpdateMaterializedViewRequest
Parameter
Name
Description
request
UpdateMaterializedViewRequest
Returns
Type
Description
MaterializedView
updateMaterializedViewAsync(UpdateMaterializedViewRequest request)
public ApiFuture<MaterializedView> updateMaterializedViewAsync ( UpdateMaterializedViewRequest request )
Asynchronously updates an existing materialized view.
Sample code:
ApiFuture<MaterializedView> existingMaterializedViewFuture = client . getMaterializedViewAsync ( "my-instance" , "my-materialized-view" );
ApiFuture<MaterializedView> updatedMaterializedViewFuture = ApiFutures . transformAsync (
existingMaterializedViewFuture ,
new ApiAsyncFunction<MaterializedView , MaterializedView > () {
public ApiFuture<MaterializedView> apply ( MaterializedView existingMaterializedView ) {
return client . updateMaterializedViewAsync (
UpdateMaterializedViewRequest . of ( existingMaterializedView )
. setDeletionProtection ( false )
);
}
},
MoreExecutors . directExecutor ()
);
ApiFuture<MaterializedView> materializedView = updatedMaterializedViewFuture . get ();
See Also: UpdateMaterializedViewRequest
Parameter
Name
Description
request
UpdateMaterializedViewRequest
Returns
Type
Description
ApiFuture < MaterializedView >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]

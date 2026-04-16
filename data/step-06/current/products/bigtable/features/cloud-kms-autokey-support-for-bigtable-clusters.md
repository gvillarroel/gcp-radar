---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.975Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud KMS Autokey support for Bigtable clusters"
feature_slug: "cloud-kms-autokey-support-for-bigtable-clusters"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cmek"
  - "https://docs.cloud.google.com/bigtable/docs/creating-instance"
  - "https://docs.cloud.google.com/bigtable/docs/access-control"
keywords:
  - "automate"
  - "autokey"
  - "clusters"
  - "console"
  - "supports"
---

# Cloud KMS Autokey support for Bigtable clusters

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable now supports using Cloud KMS Autokey in the Cloud console to automate creation and use of CMEK for Bigtable clusters.

## Extended Definition

Bigtable now supports using Cloud KMS Autokey in the Cloud console to automate creation and use of CMEK for Bigtable clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- [https://docs.cloud.google.com/bigtable/docs/creating-instance](https://docs.cloud.google.com/bigtable/docs/creating-instance)
- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)

## Supporting Pages

### Bigtable access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Table bigtable. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. createTagBinding bigtable. authorizedViews. delete bigtable. authorizedViews. deleteTagBinding bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. setIamPolicy bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.setIamPolicy bigtable.backups.update bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable. instances. createTagBinding bigtable.instances.delete bigtable. instances. deleteTagBinding bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable. instances. setIamPolicy bigtable.instances.update bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable. logicalViews. setIamPolicy bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. setIamPolicy bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable. schemaBundles. setIamPolicy bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.setIamPolicy bigtable.tables.undelete bigtable.tables.update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable Editor ( roles/ bigtable.editor ) Editor role for bigtable bigtable.appProfiles. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. delete bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.update bigtable.clusters. bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable.instances.delete bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable.instances.update bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.undelete bigtable.tables.update monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list Bigtable User ( roles/ bigtable.user ) Provides read-write access to the data stored within Bigtable tables.
- Google Cloud console task Required permissions Basic access to the Google Cloud console bigtable.appProfiles.get bigtable.appProfiles.list bigtable.clusters.get bigtable.clusters.list bigtable.instances.get bigtable.instances.list bigtable.locations.list bigtable.tables.get bigtable.tables.list resourcemanager.projects.get Create an instance or cluster Basic access permissions, plus: bigtable.clusters.create bigtable.instances.create Modify an instance or cluster Basic access permissions, plus: bigtable.clusters.update bigtable.instances.update Manage replication configuration Basic access permissions, plus: bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.update Delete an instance or cluster Basic access permissions, plus: bigtable.clusters.delete bigtable.instances.delete Monitor an instance by viewing graphs Basic access permissions, plus: monitoring.metricDescriptors.get monitoring.metricDescriptors.list monitoring.timeSeries.list Create and update a table Basic access permissions, plus: bigtable.tables.create bigtable.tables.update Restore a backup Basic access permissions, plus: bigtable.backups.list bigtable.tables.create bigtable.backups.restore IAM management This section explains how to manage IAM roles and related permissions at project, instance, table, and backup level.
- The Google Cloud console requires one of these project-level roles so that it can retrieve information about instances, clusters, tables, or backups on behalf of the user.
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable. instances. executeQuery bigtable.instances.get bigtable.instances.list bigtable.instances.ping bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.materializedViews.get bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list bigtable.tables.readRows bigtable.tables.sampleRowKeys monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Custom roles If the predefined roles for Bigtable don't address your business requirements, you can define your own custom roles with permissions that you specify.

### "Customer-managed encryption keys (CMEK) \_|\_ Bigtable \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- CMEK with Cloud KMS Autokey You can either create CMEKs manually to protect your Bigtable clusters or use Cloud KMS Autokey.
- Autokey creates a default key when you create Bigtable clusters.
- CMEK-protected Bigtable resources (instances, clusters, tables, or backups) tied to a key that has been made inaccessible as the result of a user-triggered action (such as disabling or destroying a key, or by revoking the Encrypter/Decrypter role) for more than 30 consecutive days are automatically deleted .
- Additionally, because Bigtable replication is eventually consistent, it's possible that a cluster might have acknowledged a write request but not yet replicated it to the other clusters in the instance before it was disabled.

### Create an instance \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/creating-instance](https://docs.cloud.google.com/bigtable/docs/creating-instance)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . // Creates a Production Instance with the ID "ssd-instance" // with cluster id "ssd-cluster", 3 nodes and location us-central1-f const { BigtableInstanceAdminClient } = require ( ' @google-cloud/bigtable ' ). v2 ; const instanceAdminClient = new BigtableInstanceAdminClient (); const projectId = await instanceAdminClient . getProjectId (); const instanceOptions = { parent : projects/ ${ projectId } , instanceId : instanceID , instance : { displayName : instanceID , labels : { 'prod-label' : 'prod-label' }, type : ' PRODUCTION ' , }, clusters : { [ clusterID ] : { location : projects/ ${ projectId } /locations/us-central1-f , serveNodes : 3 , defaultStorageType : ' SSD ' , }, }, }; // Create production instance with given options const [ prodInstance , operation ] = await instanceAdminClient . createInstance ( instanceOptions ); await operation . promise (); console . log ( Created Instance: ${ prodInstance . name } ); PHP To learn how to install and use the client library for Bigtable, see Bigtable client libraries .
- In the Key management type field, select one of the following options: If you want to automate creation of Cloud KMS keys, select Cloud KMS with Autokey , and then click Request a key .
- For more information, see Set up authentication for a local development environment . use Exception; use Google\ApiCore\ApiException; use Google\Cloud\Bigtable\Admin\V2\Client\BigtableInstanceAdminClient; use Google\Cloud\Bigtable\Admin\V2\Cluster; use Google\Cloud\Bigtable\Admin\V2\CreateInstanceRequest; use Google\Cloud\Bigtable\Admin\V2\GetInstanceRequest; use Google\Cloud\Bigtable\Admin\V2\Instance; use Google\Cloud\Bigtable\Admin\V2\Instance\Type as InstanceType; use Google\Cloud\Bigtable\Admin\V2\StorageType; / Create a production Bigtable instance @param string $projectId The Google Cloud project ID @param string $instanceId The ID of the Bigtable instance to be generated @param string $clusterId The ID of the cluster to be generated @param string $locationId The Bigtable region ID where you want your instance to reside / function create production instance( string $projectId, string $instanceId, string $clusterId, string $locationId = 'us-east1-b' ): void { $instanceAdminClient = new BigtableInstanceAdminClient(); $projectName = $instanceAdminClient->projectName($projectId); $instanceName = $instanceAdminClient->instanceName($projectId, $instanceId); $serveNodes = 3; $storageType = StorageType::SSD; $production = InstanceType::PRODUCTION; $labels = ['prod-label' => 'prod-label']; $instance = new Instance(); $instance->setDisplayName($instanceId); $instance->setLabels($labels); $instance->setType($production); $cluster = new Cluster(); $cluster->setDefaultStorageType($storageType); $locationName = $instanceAdminClient->locationName($projectId, $locationId); $cluster->setLocation($locationName); $cluster->setServeNodes($serveNodes); $clusters = [ $clusterId => $cluster ]; try { $getInstanceRequest = (new GetInstanceRequest()) ->setName($instanceName); $instanceAdminClient->getInstance($getInstanceRequest); printf('Instance %s already exists.' .
- SSD ) . build (); CreateInstanceRequest request = CreateInstanceRequest . newBuilder () . setParent ( parent ) . setInstanceId ( instanceId ) . setInstance ( instanceObj ) . putClusters ( clusterId , clusterObj ) . build (); // Creates a production instance with the given request. try { Instance instance = adminClient . getBaseClient (). createInstanceAsync ( request ). get (); System . out . printf ( "PRODUCTION type instance %s created successfully%n" , instance . getName ()); } catch ( Exception e ) { System . err . println ( "Failed to create instance: " + e . getMessage ()); throw new RuntimeException ( e ); } Node.js To learn how to install and use the client library for Bigtable, see Bigtable client libraries .


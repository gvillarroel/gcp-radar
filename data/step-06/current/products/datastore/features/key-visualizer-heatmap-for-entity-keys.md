---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.780Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Key Visualizer heatmap for entity keys"
feature_slug: "key-visualizer-heatmap-for-entity-keys"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/access/iam"
  - "https://docs.cloud.google.com/datastore/docs/cmek"
  - "https://docs.cloud.google.com/datastore/docs/concepts/entities"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key.Key"
keywords:
  - "key"
  - "visualizer"
  - "heatmap"
  - "for"
  - "entity"
  - "keys"
  - "can"
  - "visualize"
---

# Key Visualizer heatmap for entity keys

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Key Visualizer can visualize heatmap patterns for entity keys to help predict workload patterns.

## Extended Definition

Key Visualizer can visualize heatmap patterns for entity keys to help predict workload patterns.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- [https://docs.cloud.google.com/datastore/docs/concepts/entities](https://docs.cloud.google.com/datastore/docs/concepts/entities)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key.Key](https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key.Key)

## Supporting Pages

### "Identity and Access Management (IAM) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- Source ID: `site-iam-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Intended for application developers and service accounts. roles/datastore.viewer appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities.get datastore.entities.list datastore.schemas.get datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list datastore.insights.get Read access to all Datastore mode database resources. roles/datastore.importExportAdmin appengine.applications.get datastore.databases.export datastore.databases.getMetadata datastore.databases.import datastore.operations.cancel datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage imports and exports. roles/datastore.bulkAdmin resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.databases.bulkDelete datastore.operations.cancel datastore.operations.get datastore.operations.list Full access to manage bulk operations. roles/datastore.indexAdmin appengine.applications.get datastore.databases.getMetadata datastore.schemas. datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage index definitions. roles/datastore.keyVisualizerViewer datastore.databases.getMetadata datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list resourcemanager.projects.get resourcemanager.projects.list Full access to Key Visualizer scans. roles/datastore.backupSchedulesViewer datastore.backupSchedules.get datastore.backupSchedules.list Read access to backup schedules in a Datastore mode database. roles/datastore.backupSchedulesAdmin datastore.backupSchedules.get datastore.backupSchedules.list datastore.backupSchedules.create datastore.backupSchedules.update datastore.backupSchedules.delete datastore.databases.list datastore.databases.getMetadata Full access to backup schedules in a Datastore mode database. roles/datastore.backupsViewer datastore.backups.get datastore.backups.list Read access to backup information in a Datastore mode location. roles/datastore.backupsAdmin datastore.backups.get datastore.backups.list datastore.backups.delete Full access to backups in a Datastore mode location. roles/datastore.restoreAdmin datastore.backups.get datastore.backups.list datastore.backups.restoreDatabase datastore.databases.list datastore.databases.create datastore.databases.getMetadata datastore.operations.list datastore.operations.get Ability to restore a Datastore mode backup into a new database.
- Entity permission name Description datastore.entities.allocateIds Allocate IDs for keys with an incomplete key path. datastore.entities.create Create an entity. datastore.entities.delete Delete an entity. datastore.entities.get Read an entity. datastore.entities.list List the keys of entities in a project. ( datastore.entities.get is required to access the entity data.) datastore.entities.update Update an entity.
- This role also gives the ability to create new databases, not necessarily by cloning. roles/datastore.statisticsViewer resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.insights.get datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list datastore.statistics.list datastore.statistics.get Read access to Insights, Stats, and Key Visualizer scans.
- Key Visualizer permission name Description datastore.keyVisualizerScans.get Get details about Key Visualizer scans. datastore.keyVisualizerScans.list List available Key Visualizer scans.

### "Customer-managed encryption keys (CMEK) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- CMEK-protected databases support Key Visualizer only for entity and document data, not for index data.
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for Datastore mode.
- CMEK and key availability When keys are unavailable or disabled, be aware of the following behaviors that can occur in CMEK-enabled databases: You can change Datastore mode point-in-time recovery (PITR) settings on a CMEK-enabled database even if the key is unavailable because PITR settings are database metadata, which isn't encrypted by CMEK.
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Datastore mode, see Use CMEK .

### Entities, Properties, and Keys \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/entities](https://docs.cloud.google.com/datastore/docs/concepts/entities)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- The key consists of the following components: The namespace of the entity, which allows for multitenancy The kind of the entity, which categorizes it for the purpose of queries An identifier for the individual entity, which can be either a key name string an integer numeric ID An optional ancestor path locating the entity within the database hierarchy An application can fetch an individual entity from the database using the entity's key, or it can retrieve one or more entities by issuing a query based on the entities' keys or property values.
- For more information, see Set up authentication for a local development environment . task 1 = datastore . entity "Task" do t t [ "category" ] = "Personal" t [ "done" ] = false t [ "priority" ] = 4 t [ "description" ] = "Learn Cloud Datastore" end task 2 = datastore . entity "Task" do t t [ "category" ] = "Personal" t [ "done" ] = false t [ "priority" ] = 5 t [ "description" ] = "Integrate Cloud Datastore" end tasks = datastore . save task 1 , task 2 task key 1 = tasks [ 0 ]. key task key 2 = tasks [ 1 ]. key You can look up multiple entities: C# To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- This operation increments properties by the specified values: REST POST https://datastore.googleapis.com/v1/projects/{projectId}:commit { "mode": "NON TRANSACTIONAL", "mutations": [ { "propertyMask": {}, // Empty write mask indicates only transforms can change the entity. "propertyTransforms": [ { "property": "quantity", "increment": { "integerValue": 2 } }, { "property": "inStock", "maximum": { "integerValue": 100 } }, ] "upsert": { "key": { "path": [ { "kind": "Items", "name": "entity 1" } ] } } } ] } The following example sets a property value to the time at which the server processed the request with millisecond precision.
- REST POST https://datastore.googleapis.com/v1/projects/{projectId}:commit { "mode": "NON TRANSACTIONAL", "mutations": [ { "propertyMask": {}, // Empty write mask indicates only transforms can change the entity. "propertyTransforms": [ { "property": "arrayField", "appendMissingElements": { "values": [ { "stringValue": "str" }, { "integerValue": 10 } ] } }, ] "upsert": { "key": { "path": [ { "kind": "Kind 1", "name": "entity 1" } ] } } } ] } Mixed types with maximum and minimum The maximum and minimum property transforms take either an integer or a double (floating-point number) value as input.

### Class Key (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key.Key](https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key.Key)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Completed keys compare equal if they have the same path, project, database, and namespace. (Note that database=None is considered to refer to the default database.) Returns Type Description bool True if the keys compare equal, else False. hash hash () Hash this key for use in a dictionary lookup.
- Returns Type Description int a hash of the key's state. ne ne ( other ) Compare two keys for inequality.
- Methods eq eq ( other ) Compare two keys for equality.
- 2.24.0 (latest) 2.23.0 2.22.0 2.21.0 2.20.2 2.19.0 2.18.0 2.17.0 2.16.1 2.15.2 2.14.0 2.13.2 2.12.0 2.11.1 2.10.0 2.9.0 2.8.3 2.7.2 2.6.2 2.5.1 2.4.0 2.3.0 2.2.0 2.1.6 2.0.1 1.15.5 1.14.0 1.13.2 1.12.0 1.11.0 1.10.0 1.9.0 Key ( path args , kwargs ) An immutable representation of a datastore Key. .. testsetup:: key-ctor from google.cloud import datastore project = 'my-special-pony' client = datastore.Client(project=project) Key = datastore.Key parent key = client.key('Parent', 'foo') To create a basic key directly: .. doctest:: key-ctor Key('EntityKind', 1234, project=project) <Key('EntityKind', 1234), project=...> Key('EntityKind', 'foo', project=project) <Key('EntityKind', 'foo'), project=...> Though typical usage comes via the xref key factory: .. doctest:: key-ctor client.key('EntityKind', 1234) <Key('EntityKind', 1234), project=...> client.key('EntityKind', 'foo') <Key('EntityKind', 'foo'), project=...> To create a key with a parent: .. doctest:: key-ctor client.key('Parent', 'foo', 'Child', 1234) <Key('Parent', 'foo', 'Child', 1234), project=...> client.key('Child', 1234, parent=parent key) <Key('Parent', 'foo', 'Child', 1234), project=...> To create a partial key: .. doctest:: key-ctor client.key('Parent', 'foo', 'Child') <Key('Parent', 'foo', 'Child'), project=...> To create a key from a non-default database: .. doctest:: key-ctor Key('EntityKind', 1234, project=project, database='mydb') <Key('EntityKind', 1234), project=my-special-pony, database=mydb> Parameter Name Description path args tuple of string and integer May represent a partial (odd length) or full (even length) key path.


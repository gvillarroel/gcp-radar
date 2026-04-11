---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.851Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Index scans in Key Visualizer"
feature_slug: "index-scans-in-key-visualizer"
latest_feature_date: "2023-12-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes"
  - "https://docs.cloud.google.com/datastore/docs/access/iam"
  - "https://docs.cloud.google.com/datastore/docs/concepts/indexes"
keywords:
  - "index"
  - "scans"
  - "in"
  - "key"
  - "visualizer"
  - "can"
  - "display"
  - "scan"
---

# Index scans in Key Visualizer

Product: Datastore
Coverage: LOW

## Step 02 Summary

Key Visualizer can display index scan activity.

## Extended Definition

Key Visualizer can display index scan activity.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)
- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)

## Supporting Pages

### Optimizing Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Firestore in Datastore mode databases execute a query using a perfect index using the following steps: Identifies the index corresponding to the query's kind, filter properties, filter operators, and sort orders Scans from the beginning of the index to the first entity that meets all or a subset of the query's filter conditions Continues scanning the index, returning each entity that satisfies all the filter conditions, until it encounters an entity that does not meet the filter conditions, or reaches the end of the index, or has collected the maximum number of results requested by the query For example, consider the following query: SELECT FROM Task WHERE category = 'Personal' AND priority < 3 ORDER BY priority DESC The perfect composite index for this query is an index of keys for entities of kind Task , with columns for the values of the category and priority properties.
- Client () query owner size tag = client . query ( kind = "Photo" , filters = [ ( "owner id" , "=" , "username" ), ( "size" , "=" , 2 ), ( "tag" , "=" , "family" ), ], ) Each filter maps to one index scan in the following built-in indexes: Index(Photo, owner id) Index(Photo, size) Index(Photo, tag) If you add the composite index Index(Photo, owner id, size) , the query maps to two index scans instead of three: Satisfies both 'owner id=username' and 'size=2' Index(Photo, owner id, size) Index(Photo, tag) Consider a scenario with many large images, many black-and-white images, but few large, panoramic images.
- When two or more indexes are sorted by the same criteria, Firestore in Datastore mode can merge the results of multiple index scans to find the results that are common to all such indexes.
- Using this algorithm, Datastore mode joins potential matches from multiple index scans to produce a result set that matches a query.

### "Identity and Access Management (IAM) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Intended for application developers and service accounts. roles/datastore.viewer appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities.get datastore.entities.list datastore.schemas.get datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list datastore.insights.get Read access to all Datastore mode database resources. roles/datastore.importExportAdmin appengine.applications.get datastore.databases.export datastore.databases.getMetadata datastore.databases.import datastore.operations.cancel datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage imports and exports. roles/datastore.bulkAdmin resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.databases.bulkDelete datastore.operations.cancel datastore.operations.get datastore.operations.list Full access to manage bulk operations. roles/datastore.indexAdmin appengine.applications.get datastore.databases.getMetadata datastore.schemas. datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage index definitions. roles/datastore.keyVisualizerViewer datastore.databases.getMetadata datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list resourcemanager.projects.get resourcemanager.projects.list Full access to Key Visualizer scans. roles/datastore.backupSchedulesViewer datastore.backupSchedules.get datastore.backupSchedules.list Read access to backup schedules in a Datastore mode database. roles/datastore.backupSchedulesAdmin datastore.backupSchedules.get datastore.backupSchedules.list datastore.backupSchedules.create datastore.backupSchedules.update datastore.backupSchedules.delete datastore.databases.list datastore.databases.getMetadata Full access to backup schedules in a Datastore mode database. roles/datastore.backupsViewer datastore.backups.get datastore.backups.list Read access to backup information in a Datastore mode location. roles/datastore.backupsAdmin datastore.backups.get datastore.backups.list datastore.backups.delete Full access to backups in a Datastore mode location. roles/datastore.restoreAdmin datastore.backups.get datastore.backups.list datastore.backups.restoreDatabase datastore.databases.list datastore.databases.create datastore.databases.getMetadata datastore.operations.list datastore.operations.get Ability to restore a Datastore mode backup into a new database.
- This role also gives the ability to create new databases, not necessarily by cloning. roles/datastore.statisticsViewer resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.insights.get datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list datastore.statistics.list datastore.statistics.get Read access to Insights, Stats, and Key Visualizer scans.
- Key Visualizer permission name Description datastore.keyVisualizerScans.get Get details about Key Visualizer scans. datastore.keyVisualizerScans.list List available Key Visualizer scans.
- For example, you can grant the datastore.indexAdmin role to a user and the user can create, modify, delete, list, or view indexes.

### Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Index configuration Firestore in Datastore mode provides built-in , or automatic, indexes for queries of the following forms: Kindless queries using only ancestor and key filters Queries using only ancestor and equality filters Queries using only inequality filters (which are limited to a single property ) Queries using only ancestor filters, equality filters on properties, and inequality filters on keys Queries with no filters and only one sort order on a property, either ascending or descending As an example, by default, Datastore mode databases automatically predefine two single property indexes for each property of each entity kind, one in ascending order and one in descending order.
- Composite indexes are required for queries of the following form: Queries with ancestor and inequality filters Queries with one or more inequality filters on a property and one or more equality filters on other properties Queries with a sort order on keys in descending order Queries with multiple sort orders Queries with one or more filters and one or more sort orders Composite indexes are defined in the application's index configuration file ( index.yaml ). (Built-in indexes are not contained in the index configuration file.) Composite indexes are composed of multiple properties and require that each individual property must not be excluded from your indexes .
- In this case, you can circumvent the exploding index by manually configuring an index in your index configuration file: indexes: - kind: Task properties: - name: tags - name: created - kind: Task properties: - name: collaborators - name: created This reduces the number of entries needed to only ( tags created + collaborators created ) , or 6 entries instead of 9: ( 'fun' , NOW() ) ( 'programming' , NOW() ) ( 'learn' , NOW() ) ( 'alice' , NOW() ) ( 'bob' , NOW() ) ( 'charlie' , NOW() ) Any commit operation that would cause an index to exceed the index entry or size limit will fail.
- This will require 9 index entries, one for each possible combination of property values: ( 'fun' , 'alice' , NOW() ) ( 'fun' , 'bob' , NOW() ) ( 'fun' , 'charlie' , NOW() ) ( 'programming' , 'alice' , NOW() ) ( 'programming' , 'bob' , NOW() ) ( 'programming' , 'charlie' , NOW() ) ( 'learn' , 'alice' , NOW() ) ( 'learn' , 'bob' , NOW() ) ( 'learn' , 'charlie' , NOW() ) When the same property is repeated multiple times, Firestore in Datastore mode can detect exploding indexes and suggest an alternative index.


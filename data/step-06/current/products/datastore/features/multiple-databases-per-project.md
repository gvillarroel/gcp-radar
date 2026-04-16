---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.776Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Multiple databases per project"
feature_slug: "multiple-databases-per-project"
latest_feature_date: "2024-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/concepts/indexes"
  - "https://docs.cloud.google.com/datastore/docs/concepts/entities"
  - "https://docs.cloud.google.com/datastore/docs/store-query-data"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
keywords:
  - "multiple"
  - "databases"
  - "per"
  - "project"
  - "can"
  - "contain"
  - "firestore"
  - "in"
---

# Multiple databases per project

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

A project can contain multiple Firestore in Datastore mode databases; A project can contain multiple Firestore in Datastore mode databases.

## Extended Definition

A project can contain multiple Firestore in Datastore mode databases; A project can contain multiple Firestore in Datastore mode databases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- [https://docs.cloud.google.com/datastore/docs/concepts/entities](https://docs.cloud.google.com/datastore/docs/concepts/entities)
- [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)

## Supporting Pages

### Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This will require 9 index entries, one for each possible combination of property values: ( 'fun' , 'alice' , NOW() ) ( 'fun' , 'bob' , NOW() ) ( 'fun' , 'charlie' , NOW() ) ( 'programming' , 'alice' , NOW() ) ( 'programming' , 'bob' , NOW() ) ( 'programming' , 'charlie' , NOW() ) ( 'learn' , 'alice' , NOW() ) ( 'learn' , 'bob' , NOW() ) ( 'learn' , 'charlie' , NOW() ) When the same property is repeated multiple times, Firestore in Datastore mode can detect exploding indexes and suggest an alternative index.
- Multiple databases You can use gcloud firestore to manage a single index for Datastore mode or use gcloud datastore with an index.yaml file to manage all the indexes under a database. gcloud firestore gcloud firestore indexes composite create --api-scope=datastore-mode-api --query-scope= QUERY SCOPE --database= DATABASE ID gcloud datastore gcloud alpha datastore indexes create index.yaml --database= DATABASE ID Replace the following: DATABASE ID : a database ID.
- Index configuration Firestore in Datastore mode provides built-in , or automatic, indexes for queries of the following forms: Kindless queries using only ancestor and key filters Queries using only ancestor and equality filters Queries using only inequality filters (which are limited to a single property ) Queries using only ancestor filters, equality filters on properties, and inequality filters on keys Queries with no filters and only one sort order on a property, either ascending or descending As an example, by default, Datastore mode databases automatically predefine two single property indexes for each property of each entity kind, one in ascending order and one in descending order.
- Composite indexes are required for queries of the following form: Queries with ancestor and inequality filters Queries with one or more inequality filters on a property and one or more equality filters on other properties Queries with a sort order on keys in descending order Queries with multiple sort orders Queries with one or more filters and one or more sort orders Composite indexes are defined in the application's index configuration file ( index.yaml ). (Built-in indexes are not contained in the index configuration file.) Composite indexes are composed of multiple properties and require that each individual property must not be excluded from your indexes .

### Entities, Properties, and Keys \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/entities](https://docs.cloud.google.com/datastore/docs/concepts/entities)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RPC API field name: array value type: an ArrayValue message that contains one or more Value messages An array property can be assigned by using the array value field, which is of type ArrayValue , and populating its values field with multiple Value objects.
- For more information, see Set up authentication for a local development environment . task 1 = datastore . entity "Task" do t t [ "category" ] = "Personal" t [ "done" ] = false t [ "priority" ] = 4 t [ "description" ] = "Learn Cloud Datastore" end task 2 = datastore . entity "Task" do t t [ "category" ] = "Personal" t [ "done" ] = false t [ "priority" ] = 5 t [ "description" ] = "Integrate Cloud Datastore" end tasks = datastore . save task 1 , task 2 task key 1 = tasks [ 0 ]. key task key 2 = tasks [ 1 ]. key You can look up multiple entities: C# To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- This operation increments properties by the specified values: REST POST https://datastore.googleapis.com/v1/projects/{projectId}:commit { "mode": "NON TRANSACTIONAL", "mutations": [ { "propertyMask": {}, // Empty write mask indicates only transforms can change the entity. "propertyTransforms": [ { "property": "quantity", "increment": { "integerValue": 2 } }, { "property": "inStock", "maximum": { "integerValue": 100 } }, ] "upsert": { "key": { "path": [ { "kind": "Items", "name": "entity 1" } ] } } } ] } The following example sets a property value to the time at which the server processed the request with millisecond precision.
- REST POST https://datastore.googleapis.com/v1/projects/{projectId}:commit { "mode": "NON TRANSACTIONAL", "mutations": [ { "propertyMask": {}, // Empty write mask indicates only transforms can change the entity. "propertyTransforms": [ { "property": "arrayField", "appendMissingElements": { "values": [ { "stringValue": "str" }, { "integerValue": 10 } ] } }, ] "upsert": { "key": { "path": [ { "kind": "Kind 1", "name": "entity 1" } ] } } } ] } Mixed types with maximum and minimum The maximum and minimum property transforms take either an integer or a double (floating-point number) value as input.

### "Quickstart: Store and query data in Firestore in Datastore mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Go to project selector If you are not the project owner, your account requires the following permissions to complete this quickstart: Your account requires the Datastore Owner role which contains the datastore.databases.create permission needed to create a Datastore mode instance.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.
- Operation names are prefixed with projects/[PROJECT ID]/databases/(default)/operations/ , for example: projects/ project-id /databases/(default)/operations/ASA1MTAwNDQxNAgadGx1YWZlZAcSeWx0aGdpbi1zYm9qLW5pbWRhEgopEg You can leave out the prefix when specifying an operation name for gcloud commands.
- If your project does not use the Firestore service agent, you can migrate to the Firestore service agent using either of these techniques: Migrate a project by checking and updating Cloud Storage bucket permissions (recommended) .
- For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } Check operation status To view the status of a long-running operation: Console You can view a list of the most recent export and import operations in the Import/Export page of the Google Cloud console.


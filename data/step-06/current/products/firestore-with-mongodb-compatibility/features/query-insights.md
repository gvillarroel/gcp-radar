---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.672Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Query insights"
feature_slug: "query-insights"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/query-data/queries"
  - "https://docs.cloud.google.com/firestore/native/docs/overview"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import"
keywords:
  - "query"
  - "insights"
  - "shows"
  - "performance"
  - "metrics"
  - "for"
  - "your"
  - "firestore"
---

# Query insights

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Shows query performance metrics for your Firestore database.

## Extended Definition

Shows query performance metrics for your Firestore database.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
- [https://docs.cloud.google.com/firestore/native/docs/overview](https://docs.cloud.google.com/firestore/native/docs/overview)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)

## Supporting Pages

### "Query and filter data \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Explain your query performance Firestore in Native Mode allows you to measure performance of your queries on the backend and receive detailed performance statistics on backend query execution in return.
- WriteLine ( $"{document.Reference.Path}: {document.GetValue<string>(" Name ")}" ); } Program . cs Ruby museums = firestore . collection group ( "landmarks" ) . where ( "type" , "==" , "museum" ) museums . get do museum puts " #{ museum [ :type ] } name is #{ museum [ :name ] } ." end query data . rb Before using a collection group query, you must create an index that supports your collection group query.
- If your indexes do not support the query, Firestore suggests additional indexes for your database .
- For example, you can create a landmarks collection group by adding a landmarks subcollection to each city: Web version 9 import { collection , addDoc } from "firebase/firestore" ; const citiesRef = collection ( db , 'cities' ); await Promise . all ([ addDoc ( collection ( citiesRef , 'SF' , 'landmarks' ), { name : 'Golden Gate Bridge' , type : 'bridge' }), addDoc ( collection ( citiesRef , 'SF' , 'landmarks' ), { name : 'Legion of Honor' , type : 'museum' }), addDoc ( collection ( citiesRef , 'LA' , 'landmarks' ), { name : 'Griffith Park' , type : 'park' }), addDoc ( collection ( citiesRef , 'LA' , 'landmarks' ), { name : 'The Getty' , type : 'museum' }), addDoc ( collection ( citiesRef , 'DC' , 'landmarks' ), { name : 'Lincoln Memorial' , type : 'memorial' }), addDoc ( collection ( citiesRef , 'DC' , 'landmarks' ), { name : 'National Air and Space Museum' , type : 'museum' }), addDoc ( collection ( citiesRef , 'TOK' , 'landmarks' ), { name : 'Ueno Park' , type : 'park' }), addDoc ( collection ( citiesRef , 'TOK' , 'landmarks' ), { name : 'National Museum of Nature and Science' , type : 'museum' }), addDoc ( collection ( citiesRef , 'BJ' , 'landmarks' ), { name : 'Jingshan Park' , type : 'park' }), addDoc ( collection ( citiesRef , 'BJ' , 'landmarks' ), { name : 'Beijing Ancient Observatory' , type : 'museum' }) ]); fs collection group query data setup . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. var citiesRef = db . collection ( 'cities' ); var landmarks = Promise . all ([ citiesRef . doc ( 'SF' ). collection ( 'landmarks' ). doc (). set ({ name : 'Golden Gate Bridge' , type : 'bridge' }), citiesRef . doc ( 'SF' ). collection ( 'landmarks' ). doc (). set ({ name : 'Legion of Honor' , type : 'museum' }), citiesRef . doc ( 'LA' ). collection ( 'landmarks' ). doc (). set ({ name : 'Griffith Park' , type : 'park' }), citiesRef . doc ( 'LA' ). collection ( 'landmarks' ). doc (). set ({ name : 'The Getty' , type : 'museum' }), citiesRef . doc ( 'DC' ). collection ( 'landmarks' ). doc (). set ({ name : 'Lincoln Memorial' , type : 'memorial' }), citiesRef . doc ( 'DC' ). collection ( 'landmarks' ). doc (). set ({ name : 'National Air and Space Museum' , type : 'museum' }), citiesRef . doc ( 'TOK' ). collection ( 'landmarks' ). doc (). set ({ name : 'Ueno Park' , type : 'park' }), citiesRef . doc ( 'TOK' ). collection ( 'landmarks' ). doc (). set ({ name : 'National Museum of Nature and Science' , type : 'museum' }), citiesRef . doc ( 'BJ' ). collection ( 'landmarks' ). doc (). set ({ name : 'Jingshan Park' , type : 'park' }), citiesRef . doc ( 'BJ' ). collection ( 'landmarks' ). doc (). set ({ name : 'Beijing Ancient Observatory' , type : 'museum' }) ]); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. let citiesRef = db . collection ( "cities" ) var data = [ "name" : "Golden Gate Bridge" , "type" : "bridge" ] citiesRef . document ( "SF" ). collection ( "landmarks" ). addDocument ( data : data ) data = [ "name" : "Legion of Honor" , "type" : "museum" ] citiesRef . document ( "SF" ). collection ( "landmarks" ). addDocument ( data : data ) data = [ "name" : "Griffith Park" , "type" : "park" ] citiesRef . document ( "LA" ). collection ( "landmarks" ). addDocument ( data : data ) data = [ "name" : "The Getty" , "type" : "museum" ] citiesRef . document ( "LA" ). collection ( "landmarks" ). addDocument ( data : data ) data = [ "name" : "Lincoln Memorial" , "type" : "memorial" ] citiesRef . document ( "DC" ). collection ( "landmarks" ). addDocument ( data : data ) data = [ "name" : "National Air and Space Museum" , "type" : "museum" ] citiesRef . document ( "DC" ). collection ( "landmarks" ). addDocument ( data : data ) data = [ "name" : "Ueno Park" , "type" : "park" ] citiesRef . document ( "TOK" ). collection ( "landmarks" ). addDocument ( data : data ) data = [ "name" : "National Museum of Nature and Science" , "type" : "museum" ] citiesRef . document ( "TOK" ). collection ( "landmarks" ). addDocument ( data : data ) data = [ "name" : "Jingshan Park" , "type" : "park" ] citiesRef . document ( "BJ" ). collection ( "landmarks" ). addDocument ( data : data ) data = [ "name" : "Beijing Ancient Observatory" , "type" : "museum" ] citiesRef . document ( "BJ" ). collection ( "landmarks" ). addDocument ( data : data ) ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets.

### Firestore overview \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/native/docs/overview](https://docs.cloud.google.com/firestore/native/docs/overview)
- Source ID: `site-docs-root-2`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- They're also indexed by default, so query performance is proportional to the size of your result set, not your dataset.
- Firestore keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity.
- Expressive querying In Firestore in Native Mode, you can use queries to retrieve individual, specific documents or to retrieve all the documents in a collection that match your query parameters.
- Offline support Firestore in Native Mode caches data that your app is actively using, so the app can write, read, listen to, and query data even if the device is offline.

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- Source ID: `site-docs-root-2`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud firestore import gs://my-bucket/2017-05-25T23:54:39 76544/ --database='cymbal' You can confirm the location of your export files in the Cloud Storage browser in the Google Cloud console: Open Cloud Storage browser Once you start an import operation, closing the terminal does not cancel the operation, see cancel an operation .
- For example, to assign the Storage Admin role to the Firestore service agent, run the following: gsutil iam ch serviceAccount:service- PROJECT NUMBER @gcp-sa-firestore.iam.gserviceaccount.com:roles/storage.admin \ gs:// [ BUCKET NAME ] Replace PROJECT NUMBER with your project number, which is used to name your Firestore service agent.
- In the navigation menu, click Import/Export . gcloud Use the operations describe command to show the status of an export or import operation. gcloud firestore operations describe [OPERATION NAME] Estimate the completion time A request for the status of a long-running operation returns the metrics workEstimated and workCompleted .
- Add the --async flag to prevent the gcloud tool from waiting for the operation to complete. gcloud firestore export gs:// [BUCKET NAME] \ --database= [DATABASE] Replace the following: BUCKET NAME : organize your exports by adding a file prefix after the bucket name, for example, BUCKET NAME/my-exports-folder/export-name .

### "Import and export data \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud firestore import gs://my-bucket/2017-05-25T23:54:39 76544/ --database='cymbal' You can confirm the location of your export files in the Cloud Storage browser in the Google Cloud console: Open Cloud Storage browser Once you start an import operation, closing the terminal does not cancel the operation, see cancel an operation .
- For example, to assign the Storage Admin role to the Firestore service agent, run the following: gsutil iam ch serviceAccount:service- PROJECT NUMBER @gcp-sa-firestore.iam.gserviceaccount.com:roles/storage.admin \ gs:// [ BUCKET NAME ] Replace PROJECT NUMBER with your project number, which is used to name your Firestore service agent.
- In the navigation menu, click Import/Export . gcloud Use the operations describe command to show the status of an export or import operation. gcloud firestore operations describe [OPERATION NAME] Estimate the completion time A request for the status of a long-running operation returns the metrics workEstimated and workCompleted .
- Add the --async flag to prevent the gcloud tool from waiting for the operation to complete. gcloud firestore export gs:// [BUCKET NAME] \ --database= [DATABASE] Replace the following: BUCKET NAME : organize your exports by adding a file prefix after the bucket name, for example, BUCKET NAME/my-exports-folder/export-name .


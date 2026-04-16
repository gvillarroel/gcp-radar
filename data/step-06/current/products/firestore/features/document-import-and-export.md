---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.912Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Document import and export"
feature_slug: "document-import-and-export"
latest_feature_date: "2018-08-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/firestore/docs/query-data/indexing"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data"
keywords:
  - "document"
  - "import"
  - "export"
  - "firestore"
  - "supports"
  - "importing"
  - "exporting"
  - "documents"
---

# Document import and export

Product: Firestore
Coverage: LOW

## Step 02 Summary

Cloud Firestore supports importing and exporting documents.

## Extended Definition

Cloud Firestore supports importing and exporting documents.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/firestore/docs/query-data/indexing](https://docs.cloud.google.com/firestore/docs/query-data/indexing)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data)

## Supporting Pages

### "Manage Standard edition indexes \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/query-data/indexing](https://docs.cloud.google.com/firestore/docs/query-data/indexing)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on importing Firestore index resources, see the google firestore index reference documentation .
- For example, here is the progress status of an index build: { "operations": [ { "name": "projects/ project-id /operations/AyAyMDBiM2U5NTgwZDAtZGIyYi0zYjc0LTIzYWEtZjg1ZGdWFmZWQHEjF0c2Flc3UtcmV4ZWRuaS1uaW1kYRUKSBI", "metadata": { "@type": "type.googleapis.com/google.firestore.admin.v1.IndexOperationMetadata", "common": { "operationType": "CREATE INDEX", "startTime": "2020-06-23T16:52:25.697539Z", "state": "PROCESSING" }, "progressDocuments": { "workCompleted": "219327", "workEstimated": "2198182" } }, }, ...
- Determine the Firestore resource path of your index: export INDEX RESOURCE PATH = $( echo '"projects/${google datastore index. datastore-index-resource-name .project}/databases/(default)/collectionGroups/${google datastore index. datastore-index-resource-name .kind}/indexes/${google datastore index. datastore-index-resource-name .index id}"' terraform console tr -d '"' ) Replace datastore-index-resource-name with the Terraform name of your existing resource.
- Import your existing Datastore mode index to the google firestore index resource you created above: terraform import google firestore index. firestore-index-resource-name $INDEX RESOURCE PATH Replace firestore-index-resource-name with the Terraform name of your existing resource.

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Datastore Guides Send feedback Exporting and Importing Entities Stay organized with collections Save and categorize content based on your preferences.
- The PITR export operation supports all filters, including exporting all documents and exporting specific collections.
- Assign an IAM role to your user account that grants the datastore.databases.export permission, if you are exporting data, or the datastore.databases.import permission, if you are importing data.
- A cancelled export operation leaves documents already exported in Cloud Storage, and a cancelled import operation leaves in place updates already made to your database.

### "Delete documents and fields \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data)
- Source ID: `site-docs-root-2`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete documents To delete a document, use the following language-specific delete() methods: Web version 9 Use the deleteDoc() method: import { doc , deleteDoc } from "firebase/firestore" ; await deleteDoc ( doc ( db , "cities" , "DC" )); delete document . js Web version 8 Use the delete() method: db . collection ( "cities" ). doc ( "DC" ). delete (). then (() = > { console . log ( "Document successfully deleted!" ); }). catch (( error ) = > { console . error ( "Error removing document: " , error ); }); test . firestore . js Swift Use the delete() method: Note: This product is not available on watchOS and App Clip targets. do { try await db . collection ( "cities" ). document ( "DC" ). delete () print ( "Document successfully removed!" ) } catch { print ( "Error removing document: \( error ) " ) } ViewController . swift Objective-C Use the deleteDocumentWithCompletion: method: Note: This product is not available on watchOS and App Clip targets. [[[ self . db collectionWithPath : @"cities" ] documentWithPath : @"DC" ] deleteDocumentWithCompletion : ^ ( NSError Nullable error ) { if ( error != nil ) { NSLog ( @"Error removing document: %@" , error ); } else { NSLog ( @"Document successfully removed!" ); } }]; ViewController . m Kotlin Android Use the delete() method: db . collection ( "cities" ). document ( "DC" ) . delete () . addOnSuccessListener { Log . d ( TAG , "DocumentSnapshot successfully deleted!" ) } . addOnFailureListener { e - > Log . w ( TAG , "Error deleting document" , e ) } DocSnippets . kt Java Android Use the delete() method: db . collection ( "cities" ). document ( "DC" ) . delete () . addOnSuccessListener ( new OnSuccessListener<Void> () { @Override public void onSuccess ( Void aVoid ) { Log . d ( TAG , "DocumentSnapshot successfully deleted!" ); } }) . addOnFailureListener ( new OnFailureListener () { @Override public void onFailure ( @NonNull Exception e ) { Log . w ( TAG , "Error deleting document" , e ); } }); DocSnippets . java Dart Use the delete() method: db . collection ( "cities" ). doc ( "DC" ). delete (). then ( ( doc ) = > print ( "Document deleted" ), onError: ( e ) = > print ( "Error updating document $ e " ), ); firestore . dart Java Use the delete() method: // asynchronously delete a document ApiFuture<WriteResult> writeResult = db . collection ( "cities" ). document ( "DC" ). delete (); // ...
- OnCompletion ( []( const Future<void> & future ) { if ( future . error () == Error :: kErrorOk ) { std :: cout << "DocumentSnapshot successfully deleted!" << std :: endl ; } else { std :: cout << "Error deleting document: " << future . error message () << std :: endl ; } }); snippets . cpp Node.js Use the delete() method: const res = await db . collection ( 'cities' ). doc ( 'DC' ). delete (); index . js Go Use the Delete() method: import ( "context" "log" "cloud.google.com/go/firestore" ) func deleteDoc ( ctx context .
- For large deletion jobs (millions of documents), use one of the following: Managed bulk delete Firestore supports bulk deleting one or more collection groups.
- Delete fields To delete specific fields from a document, use the following language-specific FieldValue.delete() methods when you update a document: Web version 9 Use the deleteField() method: import { doc , updateDoc , deleteField } from "firebase/firestore" ; const cityRef = doc ( db , 'cities' , 'BJ' ); // Remove the 'capital' field from the document await updateDoc ( cityRef , { capital : deleteField () }); update delete field . js Web version 8 Use the FieldValue.delete() method: var cityRef = db . collection ( 'cities' ). doc ( 'BJ' ); // Remove the 'capital' field from the document var removeCapital = cityRef . update ({ capital : firebase . firestore .


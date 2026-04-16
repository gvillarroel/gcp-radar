---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.909Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Increment operation"
feature_slug: "increment-operation"
latest_feature_date: "2019-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview"
  - "https://docs.cloud.google.com/firestore/docs/key-visualizer"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data"
keywords:
  - "increment"
  - "operation"
  - "firestore"
  - "supports"
  - "incrementing"
  - "decrementing"
  - "numeric"
  - "field"
---

# Increment operation

Product: Firestore
Coverage: LOW

## Step 02 Summary

Cloud Firestore supports incrementing or decrementing a numeric field by a specified amount.

## Extended Definition

Cloud Firestore supports incrementing or decrementing a numeric field by a specified amount.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview](https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview)
- [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data)

## Supporting Pages

### "Delete documents and fields \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data)
- Source ID: `site-docs-root-2`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- FieldValue . delete () }); test . firestore . js Swift Use the FieldValue.delete() method: Note: This product is not available on watchOS and App Clip targets. do { try await db . collection ( "cities" ). document ( "BJ" ). updateData ([ "capital" : FieldValue . delete (), ]) print ( "Document successfully updated" ) } catch { print ( "Error updating document: \( error ) " ) } ViewController . swift Objective-C Use the fieldValueForDelete: method: Note: This product is not available on watchOS and App Clip targets. [[[ self . db collectionWithPath : @"cities" ] documentWithPath : @"BJ" ] updateData : @{ @"capital" : [ FIRFieldValue fieldValueForDelete ] } completion :^ ( NSError Nullable error ) { if ( error != nil ) { NSLog ( @"Error updating document: %@" , error ); } else { NSLog ( @"Document successfully updated" ); } }]; ViewController . m Kotlin Android Use the FieldValue.delete() method: val docRef = db . collection ( "cities" ). document ( "BJ" ) // Remove the 'capital' field from the document val updates = hashMapOf<String , Any > ( "capital" to FieldValue . delete (), ) docRef . update ( updates ). addOnCompleteListener { } DocSnippets . kt Java Android Use the FieldValue.delete() method: DocumentReference docRef = db . collection ( "cities" ). document ( "BJ" ); // Remove the 'capital' field from the document Map<String , Object > updates = new HashMap <> (); updates . put ( "capital" , FieldValue . delete ()); docRef . update ( updates ). addOnCompleteListener ( new OnCompleteListener<Void> () { // ... // ...
- DocSnippets.java Dart Use the FieldValue.delete() method: final docRef = db . collection ( "cities" ). doc ( "BJ" ); // Remove the 'capital' field from the document final updates = < String , dynamic > { "capital" : FieldValue . delete (), }; docRef . update ( updates ); firestore . dart Java Use the FieldValue.delete() method: DocumentReference docRef = db . collection ( "cities" ). document ( "BJ" ); Map<String , Object > updates = new HashMap <> (); updates . put ( "capital" , FieldValue . delete ()); // Update and delete the "capital" field in the document ApiFuture<WriteResult> writeResult = docRef . update ( updates ); System . out . println ( "Update time : " + writeResult . get ()); ManageDataSnippets . java Python Use the firestore.DELETE FIELD method: city ref = db . collection ( "cities" ) . document ( "BJ" ) city ref . update ({ "capital" : firestore .
- Delete fields To delete specific fields from a document, use the following language-specific FieldValue.delete() methods when you update a document: Web version 9 Use the deleteField() method: import { doc , updateDoc , deleteField } from "firebase/firestore" ; const cityRef = doc ( db , 'cities' , 'BJ' ); // Remove the 'capital' field from the document await updateDoc ( cityRef , { capital : deleteField () }); update delete field . js Web version 8 Use the FieldValue.delete() method: var cityRef = db . collection ( 'cities' ). doc ( 'BJ' ); // Remove the 'capital' field from the document var removeCapital = cityRef . update ({ capital : firebase . firestore .
- OnCompletion ([]( const Future<void> & future ) { / ... / }); snippets . cpp Node.js Use the FieldValue.delete() method: // Create a document reference const cityRef = db . collection ( 'cities' ). doc ( 'BJ' ); // Remove the 'capital' field from the document const res = await cityRef . update ({ capital : FieldValue . delete () }); index . js Go Use the firestore.Delete method: import ( "context" "log" "cloud.google.com/go/firestore" ) func deleteField ( ctx context .

### "Enterprise edition index overview \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview](https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enterprise edition index overview Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- If the data of the indexed fields contains duplicate values and you attempt to create a unique index, then the index build fails with an error message in the operation details.
- However, index entries increase storage costs and the amount of work done during a write operation on indexed fields.
- For example, the following indexes are two distinct indexes and not interchangeable: Collection Fields cities country (ascending), population (descending) cities population (descending), country (ascending), When creating an index to support a query, include the fields in the same order as your query.

### "Overview of Key Visualizer \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These can be single-field indexes or composite indexes.For example, the following indexes are some examples of index keys as seen on the Key Visualizer tool: COLLECTION: projects/PROJECT ID/databases/default/documents/Users PROPERTIES: (timestamp: ASC) VALUES: (1686162996397845) DOCUMENT: projects/PROJECT ID/databases/default/documents/Users/QstCrsaGuq9ybj81dNse COLLECTION: projects/PROJECT ID/databases/default/documents/Users PROPERTIES: (Timestamp: ASC, Name: ASC,Country: ARRAY) VALUES: (16500000000000001L, 'Alice', 'USA') DOCUMENT: (projects/PROJECT ID/databases/default/documents/Users/5000000000000001) Scan eligibility Each Key Visualizer scan covers a two hour period.
- Metrics The following metrics are available for document keys in Key Visualizer scans: Metrics Description Activity metrics Ops/s Average number of document operations per second.
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Limits Although Key Visualizer shows a variety of metrics, it doesn't display every single metric that can affect the performance of Firestore.


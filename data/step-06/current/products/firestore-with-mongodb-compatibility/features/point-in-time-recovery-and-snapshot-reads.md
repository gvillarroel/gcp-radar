---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.707Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Point-in-time recovery and snapshot reads"
feature_slug: "point-in-time-recovery-and-snapshot-reads"
latest_feature_date: "2025-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints"
keywords:
  - "point"
  - "in"
  - "time"
  - "recovery"
  - "and"
  - "snapshot"
  - "reads"
  - "firestore"
---

# Point-in-time recovery and snapshot reads

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Firestore with MongoDB compatibility supports point-in-time recovery and snapshot reads in Preview.

## Extended Definition

Firestore with MongoDB compatibility supports point-in-time recovery and snapshot reads in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints)

## Supporting Pages

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- Source ID: `site-docs-root-2`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command to export the database to your bucket. gcloud firestore export gs : //[ BUCKET NAME PATH ] \ --snapshot-time=[ PITR TIMESTAMP ] Where PITR TIMESTAMP is a PITR timestamp at the minute granularity, for example, 2023-05-26T10:20:00.00Z .
- In the navigation menu, click Import/Export . gcloud Use the operations describe command to show the status of an export or import operation. gcloud firestore operations describe [OPERATION NAME] Estimate the completion time A request for the status of a long-running operation returns the metrics workEstimated and workCompleted .
- Export and import operations are charged for document reads and writes at the rates listed in Firestore pricing .
- Export the database, specifying the snapshot-time parameter to a recovery timestamp.

### "Transactions and batched writes \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to create and run a transaction: Web version 9 import { runTransaction } from "firebase/firestore" ; try { await runTransaction ( db , async ( transaction ) = > { const sfDoc = await transaction . get ( sfDocRef ); if ( ! sfDoc . exists ()) { throw "Document does not exist!" ; } const newPopulation = sfDoc . data (). population + 1 ; transaction . update ( sfDocRef , { population : newPopulation }); }); console . log ( "Transaction successfully committed!" ); } catch ( e ) { console . log ( "Transaction failed: " , e ); } transaction . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. // Create a reference to the SF doc. var sfDocRef = db . collection ( "cities" ). doc ( "SF" ); // Uncomment to initialize the doc. // sfDocRef.set({ population: 0 }); return db . runTransaction (( transaction ) = > { // This code may get re-run multiple times if there are conflicts. return transaction . get ( sfDocRef ). then (( sfDoc ) = > { if ( ! sfDoc . exists ) { throw "Document does not exist!" ; } // Add one person to the city population. // Note: this could be done without a transaction // by updating the population using FieldValue.increment() var newPopulation = sfDoc . data (). population + 1 ; transaction . update ( sfDocRef , { population : newPopulation }); }); }). then (() = > { console . log ( "Transaction successfully committed!" ); }). catch (( error ) = > { console . log ( "Transaction failed: " , error ); }); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. let sfReference = db . collection ( "cities" ). document ( "SF" ) do { let = try await db . runTransaction ({ ( transaction , errorPointer ) - > Any ? in let sfDocument : DocumentSnapshot do { try sfDocument = transaction . getDocument ( sfReference ) } catch let fetchError as NSError { errorPointer ?. pointee = fetchError return nil } guard let oldPopulation = sfDocument . data ()?[ "population" ] as ?
- FIRDocumentReference sfReference = [[ self . db collectionWithPath : @"cities" ] documentWithPath : @"SF" ]; [ self . db runTransactionWithBlock :^ id ( FIRTransaction transaction , NSError errorPointer ) { FIRDocumentSnapshot sfDocument = [ transaction getDocument : sfReference error : errorPointer ]; if ( errorPointer != nil ) { return nil ; } if ( ! [ sfDocument . data [ @"population" ] isKindOfClass : [ NSNumber class ]]) { errorPointer = [ NSError errorWithDomain : @"AppErrorDomain" code : -1 userInfo : @{ NSLocalizedDescriptionKey : @"Unable to retreive population from snapshot" } ]; return nil ; } NSInteger population = [ sfDocument . data [ @"population" ] integerValue ]; population ++ ; if ( population > = 1000000 ) { errorPointer = [ NSError errorWithDomain : @"AppErrorDomain" code : -2 userInfo : @{ NSLocalizedDescriptionKey : @"Population too big" } ]; return @( population ) ; } [ transaction updateData : @{ @"population" : @( population ) } forDocument : sfReference ]; return nil ; } completion :^ ( id result , NSError error ) { if ( error != nil ) { NSLog ( @"Transaction failed: %@" , error ); } else { NSLog ( @"Population increased to %@" , result ); } }]; ViewController . m Kotlin Android val sfDocRef = db . collection ( "cities" ). document ( "SF" ) db . runTransaction { transaction - > val snapshot = transaction . get ( sfDocRef ) val newPopulation = snapshot . getDouble ( "population" ) !! + 1 if ( newPopulation < = 1000000 ) { transaction . update ( sfDocRef , "population" , newPopulation ) newPopulation } else { throw FirebaseFirestoreException ( "Population too high" , FirebaseFirestoreException .
- Population is too big." ); } }); }). then (( newPopulation ) = > { console . log ( "Population increased to " , newPopulation ); }). catch (( err ) = > { // This will be an "population is too big" error. console . error ( err ); }); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. let sfReference = db . collection ( "cities" ). document ( "SF" ) do { let object = try await db . runTransaction ({ ( transaction , errorPointer ) - > Any ? in let sfDocument : DocumentSnapshot do { try sfDocument = transaction . getDocument ( sfReference ) } catch let fetchError as NSError { errorPointer ?. pointee = fetchError return nil } guard let oldPopulation = sfDocument . data ()?[ "population" ] as ?
- The following example shows how to build and commit a write batch: Web version 9 import { writeBatch , doc } from "firebase/firestore" ; // Get a new write batch const batch = writeBatch ( db ); // Set the value of 'NYC' const nycRef = doc ( db , "cities" , "NYC" ); batch . set ( nycRef , { name : "New York City" }); // Update the population of 'SF' const sfRef = doc ( db , "cities" , "SF" ); batch . update ( sfRef , { "population" : 1000000 }); // Delete the city 'LA' const laRef = doc ( db , "cities" , "LA" ); batch . delete ( laRef ); // Commit the batch await batch . commit (); write batch . js Web version 8 Learn more about the tree-shakeable modular Web API and its advantages over the namespaced API. // Get a new write batch var batch = db . batch (); // Set the value of 'NYC' var nycRef = db . collection ( "cities" ). doc ( "NYC" ); batch . set ( nycRef , { name : "New York City" }); // Update the population of 'SF' var sfRef = db . collection ( "cities" ). doc ( "SF" ); batch . update ( sfRef , { "population" : 1000000 }); // Delete the city 'LA' var laRef = db . collection ( "cities" ). doc ( "LA" ); batch . delete ( laRef ); // Commit the batch batch . commit (). then (() = > { // ... }); test . firestore . js Swift Note: This product is not available on watchOS and App Clip targets. // Get new write batch let batch = db . batch () // Set the value of 'NYC' let nycRef = db . collection ( "cities" ). document ( "NYC" ) batch . setData ([:], forDocument : nycRef ) // Update the population of 'SF' let sfRef = db . collection ( "cities" ). document ( "SF" ) batch . updateData ([ "population" : 1000000 ], forDocument : sfRef ) // Delete the city 'LA' let laRef = db . collection ( "cities" ). document ( "LA" ) batch . deleteDocument ( laRef ) // Commit the batch do { try await batch . commit () print ( "Batch write succeeded." ) } catch { print ( "Error writing batch: \( error ) " ) } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets. // Get new write batch FIRWriteBatch batch = [ self . db batch ]; // Set the value of 'NYC' FIRDocumentReference nycRef = [[ self . db collectionWithPath : @"cities" ] documentWithPath : @"NYC" ]; [ batch setData : @{} forDocument : nycRef ]; // Update the population of 'SF' FIRDocumentReference sfRef = [[ self . db collectionWithPath : @"cities" ] documentWithPath : @"SF" ]; [ batch updateData : @{ @"population" : @1000000 } forDocument : sfRef ]; // Delete the city 'LA' FIRDocumentReference laRef = [[ self . db collectionWithPath : @"cities" ] documentWithPath : @"LA" ]; [ batch deleteDocument : laRef ]; // Commit the batch [ batch commitWithCompletion :^ ( NSError Nullable error ) { if ( error != nil ) { NSLog ( @"Error writing batch %@" , error ); } else { NSLog ( @"Batch write succeeded." ); } }]; ViewController . m Kotlin Android val nycRef = db . collection ( "cities" ). document ( "NYC" ) val sfRef = db . collection ( "cities" ). document ( "SF" ) val laRef = db . collection ( "cities" ). document ( "LA" ) // Get a new write batch and commit all write operations db . runBatch { batch - > // Set the value of 'NYC' batch . set ( nycRef , City ()) // Update the population of 'SF' batch . update ( sfRef , "population" , 1000000L ) // Delete the city 'LA' batch . delete ( laRef ) }. addOnCompleteListener { // ... } DocSnippets . kt Java Android // Get a new write batch WriteBatch batch = db . batch (); // Set the value of 'NYC' DocumentReference nycRef = db . collection ( "cities" ). document ( "NYC" ); batch . set ( nycRef , new City ()); // Update the population of 'SF' DocumentReference sfRef = db . collection ( "cities" ). document ( "SF" ); batch . update ( sfRef , "population" , 1000000L ); // Delete the city 'LA' DocumentReference laRef = db . collection ( "cities" ). document ( "LA" ); batch . delete ( laRef ); // Commit the batch batch . commit (). addOnCompleteListener ( new OnCompleteListener<Void> () { @Override public void onComplete ( @NonNull Task<Void> task ) { // ... } }); DocSnippets . java Dart // Get a new write batch final batch = db . batch (); // Set the value of 'NYC' var nycRef = db . collection ( "cities" ). doc ( "NYC" ); batch . set ( nycRef , { "name" : "New York City" }); // Update the population of 'SF' var sfRef = db . collection ( "cities" ). doc ( "SF" ); batch . update ( sfRef , { "population" : 1000000 }); // Delete the city 'LA' var laRef = db . collection ( "cities" ). doc ( "LA" ); batch . delete ( laRef ); // Commit the batch batch . commit (). then (( ) { // ... }); firestore . dart Java // Get a new write batch WriteBatch batch = db . batch (); // Set the value of 'NYC' DocumentReference nycRef = db . collection ( "cities" ). document ( "NYC" ); batch . set ( nycRef , new City ()); // Update the population of 'SF' DocumentReference sfRef = db . collection ( "cities" ). document ( "SF" ); batch . update ( sfRef , "population" , 1000000L ); // Delete the city 'LA' DocumentReference laRef = db . collection ( "cities" ). document ( "LA" ); batch . delete ( laRef ); // asynchronously commit the batch ApiFuture<List<WriteResult> > future = batch . commit (); // ... // future.get() blocks on batch commit operation for ( WriteResult result : future . get ()) { System . out . println ( "Update time : " + result . getUpdateTime ()); } ManageDataSnippets . java Python batch = db . batch () Set the data for NYC nyc ref = db . collection ( "cities" ) . document ( "NYC" ) batch . set ( nyc ref , { "name" : "New York City" }) Update the population for SF sf ref = db . collection ( "cities" ) . document ( "SF" ) batch . update ( sf ref , { "population" : 1000000 }) Delete DEN den ref = db . collection ( "cities" ) . document ( "DEN" ) batch . delete ( den ref ) Commit the batch batch . commit () snippets . py Python (Async) batch = db . batch () Set the data for NYC nyc ref = db . collection ( "cities" ) . document ( "NYC" ) batch . set ( nyc ref , { "name" : "New York City" }) Update the population for SF sf ref = db . collection ( "cities" ) . document ( "SF" ) batch . update ( sf ref , { "population" : 1000000 }) Delete DEN den ref = db . collection ( "cities" ) . document ( "DEN" ) batch . delete ( den ref ) Commit the batch await batch . commit () snippets . py C++ // Get a new write batch WriteBatch batch = db - > batch (); // Set the value of 'NYC' DocumentReference nyc ref = db - > Collection ( "cities" ).

### "Plan disaster recovery \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PITR reads also provide a lower recovery time objective and lower recovery point objective than backups.
- Disaster recovery planning for data To protect against data disasters like accidental deletion or modification of data, use scheduled backups and point-in-time recovery (PITR).
- You can read data at a granularity level of 1 minute and surgically write back into the your database with a recovery time objective (maximum time for recovery) of 0.
- Point-in-time recovery (PITR) Enable PITR to read documents from a point in time up to seven days in the past.

### "Manage Firestore with MongoDB compatibility resources using custom constraints\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that the format of a database name in custom organization policies is projects/ project-id /databases/ database-id while only database-id is specified in database management operations. name : organizations/ ORGANIZATION ID /customConstraints/custom.nameSuffixMobile resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.name.endsWith('-mobile')" actionType : ALLOW displayName : Firestore database names end with "-mobile" description : Only allow the creation of database names ending with suffix "-mobile" Databases can only be created in specified locations . name : organizations/ ORGANIZATION ID /customConstraints/custom.locationUsCentral1 resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.locationId == 'us-central1'" actionType : ALLOW displayName : Firestore database location id us-central1 description : Only allow the creation of databases in region us-central1 Databases must enable point-in-time-recovery . name : organizations/ ORGANIZATION ID /customConstraints/custom.pitrEnforce resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.pointInTimeRecoveryEnablement == " POINT IN TIME RECOVERY ENABLED"" actionType : ALLOW displayName : Firestore database enables PiTR description : Only allow the creation and updating of a databases if PiTR is enabled.
- Resource Field firestore.googleapis.com/Database resource.appEngineIntegrationMode resource.cmekConfig.kmsKeyName resource.concurrencyMode resource.deleteProtectionState resource.locationId resource.name resource.pointInTimeRecoveryEnablement resource.type What's next Learn more about Organization Policy Service .
- Benefits Security, compliance, and governance : you can use custom organization policies as follows: To enforce disaster recovery requirements, you can require specific disaster recovery settings on databases like delete protection, and point in time recovery.
- Set up the custom constraint at the organization level: gcloud org-policies set-custom-constraint deleteProtectionRequired.yaml Test the policy Try to create a database without setting the --delete-protection flag in a project in the organization: gcloud firestore database create \ --project = PROJECT ID \ --database = DATABASE ID \ The output is the following: Operation denied by custom org policies: ["customConstraints/custom.deleteProtectionRequired": "To ensure the data security, Delete Protection is required to be enabled for Firestore databases"] Test and analyze organization policy changes We recommend that you test and dry-run all changes to your organization policies, to better understand the state of your environment and how changes affect it.


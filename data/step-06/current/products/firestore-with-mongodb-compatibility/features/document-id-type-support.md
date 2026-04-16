---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.697Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Document _id type support"
feature_slug: "document-id-type-support"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions"
keywords:
  - "document"
  - "id"
  - "type"
  - "firestore"
  - "with"
  - "mongodb"
  - "compatibility"
  - "supports"
---

# Document _id type support

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Firestore with MongoDB compatibility supports int32, binary, and double values as document _id identifiers.

## Extended Definition

Firestore with MongoDB compatibility supports int32, binary, and double values as document _id identifiers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions)

## Supporting Pages

### "Supported MongoDB data types and drivers \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers)
- Source ID: `site-docs-root`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Languages and MongoDB drivers Firestore with MongoDB compatibility supports the following driver versions: Language Driver versions Java 5.x Node.js 6.x 5.x Python 4.x 3.x (x ≥ 12) Go 2.x C# 3.x Ruby 2.x (x ≥ 16) OIDC authentication support The Go, C#, and Ruby drivers support OpenID Connect (OIDC) authentication from Google Cloud for all supported driver versions.
- The Java, Node.js, and Python drivers support OIDC authentication from Google Cloud starting with the following driver versions: Java: 4.10 Node.js: 6.7 Python: 4.7 Third-party tools Firestore with MongoDB compatibility supports third-party tools described in this section.
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Supported MongoDB data types and drivers The following tables list supported MongoDB data types, drivers, and third-party tools for Firestore with MongoDB compatibility.

### "Supported features: 8.0 \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- Source ID: `site-docs-root`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Operator Supported $abs Yes $add Yes $ceil Yes $divide Yes $exp Yes $floor Yes $ln Yes $log Yes $log10 Yes $mod Yes $multiply Yes $pow Yes $round Yes $sqrt Yes $subtract Yes $trunc Yes Array operators Operator Supported $arrayElemAt Yes $arrayToObject Yes $concatArrays Yes $filter Yes $firstN Yes $in Yes $indexOfArray Yes $isArray Yes $lastN Yes $map Yes $maxN Yes $minN Yes $objectToArray Yes $range Yes $reduce Yes $reverseArray Yes $size Yes $slice Yes $sortArray Yes $zip Yes Boolean operators Operator Supported $and Yes $not Yes $or Yes Comparison operators Operator Supported $cmp Yes $eq Yes $gt Yes $gte Yes $lt Yes $lte Yes $ne Yes Conditional expression operators Operator Supported $cond Yes $ifNull Yes $switch Yes Data size operators Operator Supported $binarySize Yes $bsonSize Yes Date operators Operator Supported $dateAdd Yes $dateDiff Yes $dateFromParts Yes $dateFromString Yes $dateSubtract Yes $dateToParts Yes $dateToString Yes $dateTrunc Yes $dayOfMonth Yes $dayOfWeek Yes $dayOfYear Yes $hour Yes $isoDayOfWeek Yes $isoWeek Yes $isoWeekYear Yes $millisecond Yes $minute Yes $month Yes $second Yes $toDate Yes $week Yes $year Yes Timestamp operators Operator Supported $tsIncrement No $tsSecond No Miscellaneous operators Operator Supported $getField Yes $natural Yes (ascending) $rand Yes $sampleRate No $toHashedIndexKey No Literal expression operators Operator Supported $literal Yes Object operators Operator Supported $mergeObjects Yes $objectToArray Yes $setField No Set operators Operator Supported $allElementsTrue Yes $anyElementTrue Yes $setDifference Yes $setEquals Yes $setIntersection Yes $setIsSubset Yes $setUnion Yes Stage operators Operator Supported $addFields Yes $bucket Yes $bucketAuto No $changeStream No $collStats No $count Yes $currentOp No $documents Yes $facet Yes $geoNear No $graphLookup No $group Yes $indexStats No $limit Yes $listLocalSessions No $listSessions No $lookup Yes $match Yes $merge No $out No $planCacheStats No $project Yes $redact No $replaceRoot Yes $replaceWith Yes $sample Yes $set Yes $search No $setWindowFields No $skip Yes $sort Yes $sortByCount Yes $unionWith Yes $unset Yes $unwind Yes String operators Operator Supported $concat Yes $dateFromString Yes $dateToString Yes $indexOfBytes Yes $indexOfCP Yes $ltrim Yes $regexFind Yes $regexFindAll Yes $regexMatch Yes $replaceAll Yes $replaceOne Yes $rtrim Yes $split Yes $strcasecmp Yes $strLenBytes Yes $strLenCP Yes $substr Yes $substrBytes Yes $substrCP Yes $toLower Yes $toString Yes $toUpper Yes $trim Yes System variables Variable Supported $$CLUSTERTIME No $$CURRENT No $$DESCEND No $$KEEP No $$NOW Yes $$PRUNE No $$REMOVE Yes $$ROOT Yes Text operators Operator Supported $meta No Trigonometry operators Operator Supported $acos No $acosh No $asin No $asinh No $atan No $atan2 No $atanh No $cos No $cosh No $degreesToRadians No $radiansToDegrees No $sin No $sinh No $tan No $tanh No Type operators Operator Supported $convert Yes $isNumber Yes $toBool Yes $toDate Yes $toDecimal Yes $toDouble Yes $toInt Yes $toLong Yes $toObjectId Yes $toString Yes $type Yes Variable operators Operator Supported $let Yes Geospatial Firestore with MongoDB compatibility supports the following Geospatial operators.
- Indexes Index type Supported 2d No 2dsphere No Compound Yes Hashed No Multikey Yes Single Field Yes Text No Index properties Property Supported Background Yes Case Insensitive No Hidden No Partial No Non-Sparse Yes Sparse Yes Text No TTL Yes Unique Yes Wildcard No Vector No Database commands Firestore with MongoDB compatibility supports the following database commands.
- Command Supported cloneCollectionAsCapped No collMod No collMod: expireAfterSeconds No convertToCapped No copydb No create Yes createIndex Yes createIndexes Yes createView No currentOp No drop No dropDatabase No To delete a database, see Delete a database . dropIndex Yes To delete indexes, see Manage indexes . dropIndexes No filemd5 No getAuditConfig No killCursors Yes killOp No listCollections Yes listDatabases Yes listIndexes Yes reIndex No renameCollection No setAuditConfig No Diagnostic commands Command Supported buildInfo Yes collStats No connectionStatus Yes connPoolStats No dataSize No dbHash No dbStats No explain Yes For behavior differences and limitations, see Query Explain features No hello Yes hostInfo Yes listCommands No profiler No serverStatus No top No whatsmyuri No Role management commands To manage database access, Firestore with MongoDB compatibility supports Identity and Access Management roles and permissions .
- Query and projection operators Firestore with MongoDB compatibility supports the following query and projection operators: Array operators Operator Supported $all Yes $elemMatch Yes $size Yes Bitwise operators Operator Supported $bitsAllClear No $bitsAllSet No $bitsAnyClear No $bitsAnySet No Comment operator Operator Supported $comment No Comparison operators Operator Supported $eq Yes $gt Yes $gte Yes $in Yes $lt Yes $lte Yes $ne Yes $nin Yes Element operators Operator Supported $exists Yes $type Yes Evaluation query operators Operator Supported $expr Yes $jsonSchema No $mod Yes $regex Yes $text No $where No Logical operators Operator Supported $and Yes $nor Yes $not Yes $or Yes Projection operators Operator Supported $ Yes $elemMatch Yes $meta Partial (supports textScore) $slice Yes Update operators Firestore with MongoDB compatibility supports the following update operators.

### "Configure environment variables \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars)
- Source ID: `site-iam-reference`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Set the following variables before proceeding with other commands in this guide: General parameters PROJECT ID = " PROJECT ID " LOCATION = " LOCATION " Datastream connection parameters SRC CONNECTION PROFILE NAME = " SRC CONNECTION PROFILE NAME " DST CONNECTION PROFILE NAME = " DST CONNECTION PROFILE NAME " DATASTREAM NAME = " DATASTREAM NAME " Datastream data placement parameters GCS BUCKET NAME = " GCS BUCKET NAME " GCS BUCKET ROOT PATH = " GCS BUCKET ROOT PATH " GCS BUCKET SUB PATH = " GCS BUCKET SUB PATH " Dataflow template parameters GCS BUCKET TEMPLATE PATH = " GCS BUCKET TEMPLATE PATH " NUM WORKERS = NUM WORKERS MAX WORKERS = MAX WORKERS WORKER TYPE = " WORKER TYPE " Additional Dataflow template parameters: these are initialized from parameters above and don't require further customization INPUT FILE LOCATION = "gs:// ${ GCS BUCKET NAME } / ${ GCS BUCKET ROOT PATH } / ${ GCS BUCKET SUB PATH } /" TEMP OUTPUT LOCATION = "gs:// ${ GCS BUCKET NAME } / ${ GCS BUCKET ROOT PATH } /tmp" DLQ LOCATION = "gs:// ${ GCS BUCKET NAME } / ${ GCS BUCKET ROOT PATH } /dql" STAGING LOCATION = "gs:// ${ GCS BUCKET NAME } / ${ GCS BUCKET ROOT PATH } /staging" Firestore connection parameters FIRESTORE CONNECTION URI = " FIRESTORE CONNECTION URI " FIRESTORE DATABASE NAME = " FIRESTORE DATABASE NAME " Replace the following: General parameters: PROJECT ID : a Project ID of the Google Cloud project where the migration pipeline will run.
- Set them before proceeding with other commands in this guide: DocumentDB over an EC2 SSH Tunnel Parameters MONGODB USERNAME = " MONGODB USERNAME " MONGODB PASSWORD = " MONGODB PASSWORD " MONGODB HOST ADDRESS = " MONGODB HOST ADDRESS " REPLICA SET = " REPLICA SET " MONGODB DATABASE NAME = " MONGODB DATABASE NAME " BASTION IP ADDRESS = " BASTION IP ADDRESS " BASTION SSH PORT = " BASTION SSH PORT " BASTION SSH USERNAME = " BASTION SSH USERNAME " BASTION SSH PRIVATE KEY = " BASTION SSH PRIVATE KEY " DOCUMENT DB CA CERTIFICATE = " DOCUMENT DB CA CERTIFICATE " Replace the following: MONGODB USERNAME : The username of the DocumentDB source database.
- Dataflow template parameters for managing the pipeline that will copy data from the Cloud Storage bucket into your Firestore with MongoDB compatibility database.

### "Extend Firestore with MongoDB compatibility with event triggers using Cloud\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/extend-with-cloud-run-functions)
- Source ID: `site-iam-reference`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Write a Firestore-triggered function To write a function that responds to Firestore events, prepare to specify the following during deployment: a trigger event type a trigger event filter to select the documents associated with the function the function code to run Event types Firestore supports create , update , delete , and write events.
- InvalidProtocolBufferException ; import io.cloudevents.CloudEvent ; import java.util.Map ; import java.util.concurrent.ExecutionException ; import java.util.logging.Logger ; public class FirebaseFirestoreReactive implements CloudEventsFunction { private static final Logger logger = Logger . getLogger ( FirebaseFirestoreReactive . class . getName ()); private final Firestore firestore ; private static final String FIELD KEY = "original" ; private static final String APPLICATION PROTOBUF = "application/protobuf" ; public FirebaseFirestoreReactive () { this ( FirestoreOptions . getDefaultInstance (). getService ()); } public FirebaseFirestoreReactive ( Firestore firestore ) { this . firestore = firestore ; } @Override public void accept ( CloudEvent event ) throws InvalidProtocolBufferException , InterruptedException , ExecutionException { if ( event . getData () == null ) { logger . warning ( "No data found in event!" ); return ; } if ( ! event . getDataContentType (). equals ( APPLICATION PROTOBUF )) { logger . warning ( String . format ( "Found unexpected content type %s, expected %s" , event . getDataContentType (), APPLICATION PROTOBUF )); return ; } DocumentEventData firestoreEventData = DocumentEventData . parseFrom ( event . getData (). toBytes ()); // Get the fields from the post-operation document snapshot // https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents#Document Map<String , Value > fields = firestoreEventData . getValue (). getFieldsMap (); if ( ! fields . containsKey ( FIELD KEY )) { logger . warning ( "Document does not contain original field" ); return ; } String currValue = fields . get ( FIELD KEY ). getStringValue (); String newValue = currValue . toUpperCase (); if ( currValue . equals ( newValue )) { logger . info ( "Value is already upper-case" ); return ; } // Retrieve the document name from the resource path: // projects/{project id}/databases/{database id}/documents/{document path} String affectedDoc = firestoreEventData . getValue () . getName () . split ( "/documents/" ) [ 1 ] . replace ( "\"" , "" ); logger . info ( String . format ( "Replacing values: %s --> %s" , currValue , newValue )); // Wait for the async call to complete this . firestore . document ( affectedDoc ) . set ( Map . of ( FIELD KEY , newValue ), SetOptions . merge ()) . get (); } } C# using CloudNative.CloudEvents ; using Google.Cloud.Firestore ; using Google.Cloud.Functions.Framework ; using Google.Cloud.Functions.Hosting ; using Google.Events.Protobuf.Cloud.Firestore.V1 ; using Microsoft.AspNetCore.Hosting ; using Microsoft.Extensions.DependencyInjection ; using Microsoft.Extensions.Logging ; using System.Collections.Generic ; using System.Threading ; using System.Threading.Tasks ; namespace FirestoreReactive ; public class Startup : FunctionsStartup { public override void ConfigureServices ( WebHostBuilderContext context , IServiceCollection services ) = > services .
- You can access these attributes as follows: Java logger . info ( "Function triggered by event on: " + event . getSource ()); logger . info ( "Event type: " + event . getType ()); logger . info ( "Event time " + event . getTime ()); logger . info ( "Event project: " + event . getExtension ( "project" )); logger . info ( "Event location: " + event . getExtension ( "location" )); logger . info ( "Database name: " + event . getExtension ( "database" )); logger . info ( "Database document: " + event . getExtension ( "document" )); // For withAuthContext events logger . info ( "Auth information: " + event . getExtension ( "authid" )); logger . info ( "Auth information: " + event . getExtension ( "authtype" )); Node.js console . log ( Function triggered by event on: ${ cloudEvent . source } ); console . log ( Event type: ${ cloudEvent . type } ); console . log ( Event time: ${ cloudEvent . time } ); console . log ( Event project: ${ cloudEvent . project } ); console . log ( Event location: ${ cloudEvent . location } ); console . log ( Database name: ${ cloudEvent . database } ); console . log ( Document name: ${ cloudEvent . document } ); // For withAuthContext events console . log ( Auth information: ${ cloudEvent . authid } ); console . log ( Auth information: ${ cloudEvent . authtype } ); Python print ( f "Function triggered by change to: { cloud event [ 'source' ] } " ) print ( f "Event type: { cloud event [ 'type' ] } " ) print ( f "Event time: { cloud event [ 'time' ] } " ) print ( f "Event project: { cloud event [ 'project' ] } " ) print ( f "Location: { cloud event [ 'location' ] } " ) print ( f "Database name: { cloud event [ 'database' ] } " ) print ( f "Document: { cloud event [ 'document' ] } " ) // For withAuthContext events print ( f "Auth information: { cloud event [ 'authid' ] } " ) print ( f "Auth information: { cloud event [ 'authtype' ] } " ) Event structures This trigger invokes your service with an event similar to: { "oldValue" : { // Update and Delete operations only A Docume nt objec t co nta i n i n g a pre - opera t io n docume nt s na psho t }, "updateMask" : { // Update operations only A Docume nt Mask objec t t ha t lis ts cha n ged f ields. }, "value" : { // A Document object containing a post-operation document snapshot } } Each Document object contains one or more Value objects.


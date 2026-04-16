---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.697Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "aggregation pipeline accumulator expressions"
feature_slug: "aggregation-pipeline-accumulator-expressions"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import"
  - "https://docs.cloud.google.com/firestore/native/docs/security/get-started"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing"
keywords:
  - "aggregation"
  - "pipeline"
  - "accumulator"
  - "expressions"
  - "supports"
  - "in"
  - "pipelines"
---

# aggregation pipeline accumulator expressions

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Supports accumulator expressions in aggregation pipelines.

## Extended Definition

Supports accumulator expressions in aggregation pipelines.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- [https://docs.cloud.google.com/firestore/native/docs/security/get-started](https://docs.cloud.google.com/firestore/native/docs/security/get-started)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing)

## Supporting Pages

### "Supported features: 8.0 \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Array operators Operator Supported $ Yes $[] Yes $[<identifier>] Yes $addToSet Yes $percentile Yes $pop Yes $pull Yes $pullAll Yes $push Yes Bitwise operators Operator Supported $bit Yes Field operators Operator Supported $currentDate Yes $inc Yes $max Yes $min Yes $mul Yes $rename Yes $set Yes $setOnInsert Yes $unset Yes Update modifiers Modifier Supported $each Yes $position Yes $slice Yes $sort Yes Aggregation pipeline operators Firestore with MongoDB compatibility supports the following aggregation pipeline operators.
- Accumulators Expression Supported $accumulator No $addToSet Yes $avg Yes $bottom No $bottomN No $count Yes $first Yes $firstN No $last Yes $lastN No $max Yes $maxN No $median No $mergeObjects Yes $min Yes $minN No $percentile No $push Yes $stdDevPop No $stdDevSamp No $sum Yes $top No $topN No Accumulator expressions Expression Supported $avg Yes $first Yes $last Yes $max Yes $median Yes $min Yes $percentile Yes $stdDevPop No $stdDevSamp No $sum Yes Arithmetic operators Limitations : Arithmetic operators don't support decimal128 values.
- Operator Supported $abs Yes $add Yes $ceil Yes $divide Yes $exp Yes $floor Yes $ln Yes $log Yes $log10 Yes $mod Yes $multiply Yes $pow Yes $round Yes $sqrt Yes $subtract Yes $trunc Yes Array operators Operator Supported $arrayElemAt Yes $arrayToObject Yes $concatArrays Yes $filter Yes $firstN Yes $in Yes $indexOfArray Yes $isArray Yes $lastN Yes $map Yes $maxN Yes $minN Yes $objectToArray Yes $range Yes $reduce Yes $reverseArray Yes $size Yes $slice Yes $sortArray Yes $zip Yes Boolean operators Operator Supported $and Yes $not Yes $or Yes Comparison operators Operator Supported $cmp Yes $eq Yes $gt Yes $gte Yes $lt Yes $lte Yes $ne Yes Conditional expression operators Operator Supported $cond Yes $ifNull Yes $switch Yes Data size operators Operator Supported $binarySize Yes $bsonSize Yes Date operators Operator Supported $dateAdd Yes $dateDiff Yes $dateFromParts Yes $dateFromString Yes $dateSubtract Yes $dateToParts Yes $dateToString Yes $dateTrunc Yes $dayOfMonth Yes $dayOfWeek Yes $dayOfYear Yes $hour Yes $isoDayOfWeek Yes $isoWeek Yes $isoWeekYear Yes $millisecond Yes $minute Yes $month Yes $second Yes $toDate Yes $week Yes $year Yes Timestamp operators Operator Supported $tsIncrement No $tsSecond No Miscellaneous operators Operator Supported $getField Yes $natural Yes (ascending) $rand Yes $sampleRate No $toHashedIndexKey No Literal expression operators Operator Supported $literal Yes Object operators Operator Supported $mergeObjects Yes $objectToArray Yes $setField No Set operators Operator Supported $allElementsTrue Yes $anyElementTrue Yes $setDifference Yes $setEquals Yes $setIntersection Yes $setIsSubset Yes $setUnion Yes Stage operators Operator Supported $addFields Yes $bucket Yes $bucketAuto No $changeStream No $collStats No $count Yes $currentOp No $documents Yes $facet Yes $geoNear No $graphLookup No $group Yes $indexStats No $limit Yes $listLocalSessions No $listSessions No $lookup Yes $match Yes $merge No $out No $planCacheStats No $project Yes $redact No $replaceRoot Yes $replaceWith Yes $sample Yes $set Yes $search No $setWindowFields No $skip Yes $sort Yes $sortByCount Yes $unionWith Yes $unset Yes $unwind Yes String operators Operator Supported $concat Yes $dateFromString Yes $dateToString Yes $indexOfBytes Yes $indexOfCP Yes $ltrim Yes $regexFind Yes $regexFindAll Yes $regexMatch Yes $replaceAll Yes $replaceOne Yes $rtrim Yes $split Yes $strcasecmp Yes $strLenBytes Yes $strLenCP Yes $substr Yes $substrBytes Yes $substrCP Yes $toLower Yes $toString Yes $toUpper Yes $trim Yes System variables Variable Supported $$CLUSTERTIME No $$CURRENT No $$DESCEND No $$KEEP No $$NOW Yes $$PRUNE No $$REMOVE Yes $$ROOT Yes Text operators Operator Supported $meta No Trigonometry operators Operator Supported $acos No $acosh No $asin No $asinh No $atan No $atan2 No $atanh No $cos No $cosh No $degreesToRadians No $radiansToDegrees No $sin No $sinh No $tan No $tanh No Type operators Operator Supported $convert Yes $isNumber Yes $toBool Yes $toDate Yes $toDecimal Yes $toDouble Yes $toInt Yes $toLong Yes $toObjectId Yes $toString Yes $type Yes Variable operators Operator Supported $let Yes Geospatial Firestore with MongoDB compatibility supports the following Geospatial operators.
- Command Supported cloneCollectionAsCapped No collMod No collMod: expireAfterSeconds No convertToCapped No copydb No create Yes createIndex Yes createIndexes Yes createView No currentOp No drop No dropDatabase No To delete a database, see Delete a database . dropIndex Yes To delete indexes, see Manage indexes . dropIndexes No filemd5 No getAuditConfig No killCursors Yes killOp No listCollections Yes listDatabases Yes listIndexes Yes reIndex No renameCollection No setAuditConfig No Diagnostic commands Command Supported buildInfo Yes collStats No connectionStatus Yes connPoolStats No dataSize No dbHash No dbStats No explain Yes For behavior differences and limitations, see Query Explain features No hello Yes hostInfo Yes listCommands No profiler No serverStatus No top No whatsmyuri No Role management commands To manage database access, Firestore with MongoDB compatibility supports Identity and Access Management roles and permissions .

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- The PITR export operation supports all filters, including exporting all documents and exporting specific collection groups.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Note: Exporting a collection group won't automatically export subcollections of the collections within the group. gcloud firestore export gs:// [BUCKET NAME] \ --collection-ids= [COLLECTION GROUP ID 1] , [COLLECTION GROUP ID 2] \ --database= [DATABASE] For example, you can design a restaurants collection in the foo database to include multiple subcollections, such as ratings , reviews , or outlets .
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.

### "Getting started with security rules \_|\_ Firestore in Native mode \_|\_\

- URL: [https://docs.cloud.google.com/firestore/native/docs/security/get-started](https://docs.cloud.google.com/firestore/native/docs/security/get-started)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All Firestore Security Rules consist of match statements, which identify documents in your database, and allow expressions, which control access to those documents: service cloud . firestore { match /databases/{database } / documents { match /<some path>/ { allow read, write : if < some condition > ; } } } Every database request from a Firestore mobile/web client library is evaluated against your security rules before reading or writing any data.
- While these rules are valid, they are not recommended for production applications: Auth required // Allow read/write access on all documents to any user signed in to the application service cloud . firestore { match / databases / { database } / documents { match / { document = } { allow read , write : if request . auth ! = null ; } } } Deny all // Deny read/write access to all users under any conditions service cloud . firestore { match / databases / { database } / documents { match / { document = } { allow read , write : if false ; } } } Allow all // Allow read/write access to all users under any conditions // Warning: NEVER use this rule set in production; it allows // anyone to overwrite your entire database. service cloud . firestore { match / databases / { database } / documents { match / { document = } { allow read , write : if true ; } } } The {document= } path used in the examples above matches any document in the entire database.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Using the CLI allows you to keep your rules under version control with your application code and deploy rules as part of your existing deployment process. // Set up Firestore in your project directory, creates a .rules file firebase init firestore // Edit the generated .rules file to your desired security rules // ... // Deploy rules for all configured databases firebase deploy -- only firestore Next steps Learn how to structure security rules .

### "Manage indexes \_|\_ Firestore with MongoDB compatibility \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing)
- Source ID: `site-iam-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Key Term: Firestore with MongoDB compatibility supports several administrative operations that can take a long time to complete.
- Terraform Use the google firestore index resource and set api scope to MONGODB COMPATIBLE API and query scope to COLLECTION GROUP . resource "google firestore index" "index" { database = " DATABASE ID " collection = " COLLECTION " api scope = "MONGODB COMPATIBLE API" query scope = "COLLECTION GROUP" // You can include multiple field blocks fields { field path = " FIELD PATH " order = " ORDER " } // Optional multikey = true density = " DENSITY " } Replace the following: DATABASE ID : The database ID for your chosen database COLLECTION : The name of the collection to index FIELD PATH : The name of the field to index ORDER : One of ASCENDING or DESCENDING DENSITY : One of SPARSE ANY or DENSE Delete an index To delete an index, complete the following steps: MongoDB API Use the dropIndex() method to delete an index.
- The following is an example of the progress of creating an index: { "operations": [ { "name": "projects/ project-id /operations/AyAyMDBiM2U5NTgwZDAtZGIyYi0zYjc0LTIzYWEtZjg1ZGdWFmZWQHEjF0c2Flc3UtcmV4ZWRuaS1uaW1kYRUKSBI", "metadata": { "@type": "type.googleapis.com/google.firestore.admin.v1.IndexOperationMetadata", "common": { "operationType": "CREATE INDEX", "startTime": "2020-06-23T16:52:25.697539Z", "state": "PROCESSING" }, "progressDocuments": { "workCompleted": "219327", "workEstimated": "2198182" } }, }, ...
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]


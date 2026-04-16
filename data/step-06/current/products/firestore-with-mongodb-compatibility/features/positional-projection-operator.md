---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.704Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "positional projection operator"
feature_slug: "positional-projection-operator"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars"
keywords:
  - "positional"
  - "projection"
  - "operator"
  - "supports"
  - "the"
  - "in"
  - "mongodb"
  - "compatible"
---

# positional projection operator

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Supports the positional projection operator in MongoDB-compatible projections.

## Extended Definition

Supports the positional projection operator in MongoDB-compatible projections.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars)

## Supporting Pages

### "Audit logging information \_|\_ Firestore with MongoDB compatibility \_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.location.Locations.GetLocation google.cloud.location.Locations.ListLocations google.firestore.admin.v1.FirestoreAdmin.GetBackup google.firestore.admin.v1.FirestoreAdmin.GetBackupSchedule google.firestore.admin.v1.FirestoreAdmin.GetDatabase google.firestore.admin.v1.FirestoreAdmin.GetField google.firestore.admin.v1.FirestoreAdmin.GetIndex google.firestore.admin.v1.FirestoreAdmin.ListBackupSchedules google.firestore.admin.v1.FirestoreAdmin.ListBackups google.firestore.admin.v1.FirestoreAdmin.ListDatabases google.firestore.admin.v1.FirestoreAdmin.ListFields google.firestore.admin.v1.FirestoreAdmin.ListIndexes google.firestore.admin.v1beta1.FirestoreAdmin.GetIndex google.firestore.admin.v1.MongoDBCompatible.ListIndexes google.firestore.admin.v1.MongoDBCompatible.ListDatabases ADMIN WRITE google.firestore.admin.v1.FirestoreAdmin.CreateBackupSchedule google.firestore.admin.v1.FirestoreAdmin.CreateDatabase google.firestore.admin.v1.FirestoreAdmin.CreateIndex google.firestore.admin.v1.FirestoreAdmin.DeleteBackup google.firestore.admin.v1.FirestoreAdmin.DeleteBackupSchedule google.firestore.admin.v1.FirestoreAdmin.DeleteDatabase google.firestore.admin.v1.FirestoreAdmin.DeleteIndex google.firestore.admin.v1.FirestoreAdmin.RestoreDatabase google.firestore.admin.v1.FirestoreAdmin.UpdateBackupSchedule google.firestore.admin.v1.FirestoreAdmin.UpdateDatabase google.firestore.admin.v1.FirestoreAdmin.UpdateField google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.firestore.v1.MongoDBCompatible.Find google.firestore.v1.MongoDBCompatible.Aggregate google.firestore.v1.MongoDBCompatible.GetMore google.firestore.v1.MongoDBCompatible.ListCollections google.firestore.v1.MongoDBCompatible.Count google.firestore.v1.MongoDBCompatible.Distinct google.firestore.v1.MongoDBCompatible.CommitTransaction google.firestore.v1.MongoDBCompatible.AbortTransaction google.firestore.v1.MongoDBCompatible.EndSessions google.firestore.v1.MongoDBCompatible.KillCursors DATA WRITE google.firestore.v1.MongoDBCompatible.Insert google.firestore.v1.MongoDBCompatible.Update google.firestore.v1.MongoDBCompatible.Delete google.firestore.v1.MongoDBCompatible.FindAndModify google.firestore.v1.MongoDBCompatible.CreateCollection Identify request callers Audit Log entries include information about the identity that performed the logged operation.
- Once configured, logs for the Firestore with MongoDB compatibility API include the service name firestore.googleapis.com`.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Notes When configuring audit logging, use the service name datastore.googleapis.com to configure both datastore.googleapis.com and firestore.googleapis.com.

### "Supported features: 8.0 \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Query and projection operators Firestore with MongoDB compatibility supports the following query and projection operators: Array operators Operator Supported $all Yes $elemMatch Yes $size Yes Bitwise operators Operator Supported $bitsAllClear No $bitsAllSet No $bitsAnyClear No $bitsAnySet No Comment operator Operator Supported $comment No Comparison operators Operator Supported $eq Yes $gt Yes $gte Yes $in Yes $lt Yes $lte Yes $ne Yes $nin Yes Element operators Operator Supported $exists Yes $type Yes Evaluation query operators Operator Supported $expr Yes $jsonSchema No $mod Yes $regex Yes $text No $where No Logical operators Operator Supported $and Yes $nor Yes $not Yes $or Yes Projection operators Operator Supported $ Yes $elemMatch Yes $meta Partial (supports textScore) $slice Yes Update operators Firestore with MongoDB compatibility supports the following update operators.
- Operator Supported $abs Yes $add Yes $ceil Yes $divide Yes $exp Yes $floor Yes $ln Yes $log Yes $log10 Yes $mod Yes $multiply Yes $pow Yes $round Yes $sqrt Yes $subtract Yes $trunc Yes Array operators Operator Supported $arrayElemAt Yes $arrayToObject Yes $concatArrays Yes $filter Yes $firstN Yes $in Yes $indexOfArray Yes $isArray Yes $lastN Yes $map Yes $maxN Yes $minN Yes $objectToArray Yes $range Yes $reduce Yes $reverseArray Yes $size Yes $slice Yes $sortArray Yes $zip Yes Boolean operators Operator Supported $and Yes $not Yes $or Yes Comparison operators Operator Supported $cmp Yes $eq Yes $gt Yes $gte Yes $lt Yes $lte Yes $ne Yes Conditional expression operators Operator Supported $cond Yes $ifNull Yes $switch Yes Data size operators Operator Supported $binarySize Yes $bsonSize Yes Date operators Operator Supported $dateAdd Yes $dateDiff Yes $dateFromParts Yes $dateFromString Yes $dateSubtract Yes $dateToParts Yes $dateToString Yes $dateTrunc Yes $dayOfMonth Yes $dayOfWeek Yes $dayOfYear Yes $hour Yes $isoDayOfWeek Yes $isoWeek Yes $isoWeekYear Yes $millisecond Yes $minute Yes $month Yes $second Yes $toDate Yes $week Yes $year Yes Timestamp operators Operator Supported $tsIncrement No $tsSecond No Miscellaneous operators Operator Supported $getField Yes $natural Yes (ascending) $rand Yes $sampleRate No $toHashedIndexKey No Literal expression operators Operator Supported $literal Yes Object operators Operator Supported $mergeObjects Yes $objectToArray Yes $setField No Set operators Operator Supported $allElementsTrue Yes $anyElementTrue Yes $setDifference Yes $setEquals Yes $setIntersection Yes $setIsSubset Yes $setUnion Yes Stage operators Operator Supported $addFields Yes $bucket Yes $bucketAuto No $changeStream No $collStats No $count Yes $currentOp No $documents Yes $facet Yes $geoNear No $graphLookup No $group Yes $indexStats No $limit Yes $listLocalSessions No $listSessions No $lookup Yes $match Yes $merge No $out No $planCacheStats No $project Yes $redact No $replaceRoot Yes $replaceWith Yes $sample Yes $set Yes $search No $setWindowFields No $skip Yes $sort Yes $sortByCount Yes $unionWith Yes $unset Yes $unwind Yes String operators Operator Supported $concat Yes $dateFromString Yes $dateToString Yes $indexOfBytes Yes $indexOfCP Yes $ltrim Yes $regexFind Yes $regexFindAll Yes $regexMatch Yes $replaceAll Yes $replaceOne Yes $rtrim Yes $split Yes $strcasecmp Yes $strLenBytes Yes $strLenCP Yes $substr Yes $substrBytes Yes $substrCP Yes $toLower Yes $toString Yes $toUpper Yes $trim Yes System variables Variable Supported $$CLUSTERTIME No $$CURRENT No $$DESCEND No $$KEEP No $$NOW Yes $$PRUNE No $$REMOVE Yes $$ROOT Yes Text operators Operator Supported $meta No Trigonometry operators Operator Supported $acos No $acosh No $asin No $asinh No $atan No $atan2 No $atanh No $cos No $cosh No $degreesToRadians No $radiansToDegrees No $sin No $sinh No $tan No $tanh No Type operators Operator Supported $convert Yes $isNumber Yes $toBool Yes $toDate Yes $toDecimal Yes $toDouble Yes $toInt Yes $toLong Yes $toObjectId Yes $toString Yes $type Yes Variable operators Operator Supported $let Yes Geospatial Firestore with MongoDB compatibility supports the following Geospatial operators.
- Array operators Operator Supported $ Yes $[] Yes $[<identifier>] Yes $addToSet Yes $percentile Yes $pop Yes $pull Yes $pullAll Yes $push Yes Bitwise operators Operator Supported $bit Yes Field operators Operator Supported $currentDate Yes $inc Yes $max Yes $min Yes $mul Yes $rename Yes $set Yes $setOnInsert Yes $unset Yes Update modifiers Modifier Supported $each Yes $position Yes $slice Yes $sort Yes Aggregation pipeline operators Firestore with MongoDB compatibility supports the following aggregation pipeline operators.
- Geometry specifiers Specifier Supported $box No $center No $centerSphere No $geometry No $maxDistance No $minDistance No $polygon No $uniqueDocs No Query selectors Selector Supported $geoIntersects No $geoWithin No $near No $nearSphere No $nearSphere No $uniqueDocs No Indexes and index properties Firestore with MongoDB compatibility supports the following indexes and index operators.

### "Manage indexes \_|\_ Firestore with MongoDB compatibility \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Terraform Use the google firestore index resource and set api scope to MONGODB COMPATIBLE API and query scope to COLLECTION GROUP . resource "google firestore index" "index" { database = " DATABASE ID " collection = " COLLECTION " api scope = "MONGODB COMPATIBLE API" query scope = "COLLECTION GROUP" // You can include multiple field blocks fields { field path = " FIELD PATH " order = " ORDER " } // Optional multikey = true density = " DENSITY " } Replace the following: DATABASE ID : The database ID for your chosen database COLLECTION : The name of the collection to index FIELD PATH : The name of the field to index ORDER : One of ASCENDING or DESCENDING DENSITY : One of SPARSE ANY or DENSE Delete an index To delete an index, complete the following steps: MongoDB API Use the dropIndex() method to delete an index.
- Set api-scope to mongodb-compatible-api . gcloud firestore indexes composite create \ --database=' DATABASE ID ' \ --collection-group= COLLECTION \ --field-config= FIELD CONFIGURATION \ --query-scope=collection-group \ --density=dense \ --api-scope=mongodb-compatible-api Replace the following: DATABASE ID : a database ID.
- To delete the index, use the gcloud firestore indexes composite delete command. gcloud firestore indexes composite delete INDEX NAME \ --database=' DATABASE ID ' Replace the following: INDEX NAME : the name of an index DATABASE ID : a database ID Index build time To build an index, Firestore with MongoDB compatibility must create the index and then backfill the index entries with existing data.
- If you have defined custom roles, assign all of the following permissions to create indexes: datastore.indexes.create datastore.indexes.delete datastore.indexes.get datastore.indexes.list datastore.indexes.update Create an index To create an index, complete the following steps: MongoDB API Use the createIndex() method to create an index.

### "Configure environment variables \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set them before proceeding with other commands in this guide: MongoDB over an SSH Tunnel Parameters MONGODB USERNAME = " MONGODB USERNAME " MONGODB PASSWORD = " MONGODB PASSWORD " MONGODB IP ADDRESS = " MONGODB IP ADDRESS " REPLICA SET = " REPLICA SET " MONGODB DATABASE NAME = " MONGODB DATABASE NAME " BASTION IP ADDRESS = " BASTION IP ADDRESS " BASTION SSH PORT = " BASTION SSH PORT " BASTION SSH USERNAME = " BASTION SSH USERNAME " BASTION SSH PRIVATE KEY = " BASTION SSH PRIVATE KEY " Replace the following: MONGODB USERNAME : The username of the MongoDB-compatible source database.
- Set them before proceeding with other commands in this guide: Google Compute Engine VM MongoDB Parameters MONGODB USERNAME = " MONGODB USERNAME " MONGODB PASSWORD = " MONGODB PASSWORD " MONGODB IP ADDRESS = " MONGODB IP ADDRESS " REPLICA SET = " REPLICA SET " MONGODB DATABASE NAME = " MONGODB DATABASE NAME " PRIVATE CONNECTION NAME = " PRIVATE CONNECTION NAME " Replace the following: MONGODB USERNAME : The username of the MongoDB-compatible source database.
- Set them before proceeding with other commands in this guide: Azure Cosmos DB Parameters MONGODB USERNAME = " MONGODB USERNAME " MONGODB PASSWORD = " MONGODB PASSWORD " MONGODB HOST ADDRESS = " MONGODB HOST ADDRESS " MONGODB DATABASE NAME = " MONGODB DATABASE NAME " Replace the following: MONGODB USERNAME : The username of the MongoDB-compatible source database.
- Set them before proceeding with other commands in this guide: MongoDB Atlas Parameters MONGODB USERNAME = " MONGODB USERNAME " MONGODB PASSWORD = " MONGODB PASSWORD " MONGODB HOST ADDRESS = " MONGODB HOST " MONGODB DATABASE NAME = " MONGODB DATABASE NAME " Replace the following: MONGODB USERNAME : The username of the MongoDB-compatible source database.


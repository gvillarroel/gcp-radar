# Firestore with MongoDB compatibility

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 32
Unique features: 92

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-16 | TTL indexes |  | Supports managing TTL indexes in the MongoDB API. |
| 2026-02-02 | Firestore databases page status column |  | Adds a status column to the Firestore databases page in the Google Cloud console. |
| 2025-11-21 | Object-valued document _id identifiers |  | Lets documents use Object values as the _id identifier. |
| 2025-10-27 | Database clone |  | Provides a database cloning feature for Firestore with MongoDB compatibility. |
| 2025-10-08 | Firestore Studio queries |  | Lets you create, save, and manage queries in Firestore Studio. |
| 2025-09-17 | $lookup aggregation stage |  | Supports the from, localField, foreignField, and as fields in $lookup; Supports the $lookup aggregation stage, limited to _id in foreignField matches. |
| 2025-09-05 | $facet aggregation operator |  | Supports the $facet aggregation operator. |
| 2025-09-05 | $firstN aggregation operator |  | Supports the $firstN aggregation operator; Supports the $firstN aggregation operator. |
| 2025-09-05 | $lastN aggregation operator |  | Supports the $lastN aggregation operator; Supports the $lastN aggregation operator. |
| 2025-09-05 | $median aggregation operator |  | Supports the $median aggregation operator. |
| 2025-09-05 | $minN aggregation operator |  | Supports the $minN aggregation operator; Supports the $minN aggregation operator. |
| 2025-09-05 | $percentile aggregation operator |  | Supports the $percentile aggregation operator. |
| 2025-09-05 | $toString aggregation operator |  | Supports the $toString aggregation operator; Supports the $toString aggregation operator. |
| 2025-09-05 | $unionWith aggregation operator |  | Supports the $unionWith aggregation operator. |
| 2025-09-02 | Query insights |  | Shows query performance metrics for your Firestore database. |
| 2025-08-26 | $addToSet update operator |  | Supports the $addToSet update operator for array updates. |
| 2025-08-26 | $allElementsTrue aggregation operator |  | Supports the $allElementsTrue aggregation operator. |
| 2025-08-26 | $anyElementsTrue aggregation operator |  | Supports the $anyElementsTrue aggregation operator. |
| 2025-08-26 | $anyElementTrue aggregation operator |  | Supports the $anyElementTrue aggregation operator. |
| 2025-08-26 | $binarySize aggregation operator |  | Supports the $binarySize aggregation operator. |
| 2025-08-26 | $bsonSize aggregation operator |  | Supports the $bsonSize aggregation operator. |
| 2025-08-26 | $bucket aggregation stage |  | Supports the $bucket aggregation stage. |
| 2025-08-26 | $convert aggregation operator |  | Supports the $convert aggregation operator. |
| 2025-08-26 | $dateTrunc aggregation operator |  | Supports the $dateTrunc aggregation operator. |
| 2025-08-26 | $each update modifier |  | Supports the $each update modifier. |
| 2025-08-26 | $exp aggregation operator |  | Supports the $exp aggregation operator. |
| 2025-08-26 | $filter aggregation operator |  | Supports the $filter aggregation operator. |
| 2025-08-26 | $in aggregation operator |  | Supports the $in aggregation operator. |
| 2025-08-26 | $indexOfArray aggregation operator |  | Supports the $indexOfArray aggregation operator. |
| 2025-08-26 | $let aggregation variable operator |  | Supports the $let aggregation variable operator. |
| 2025-08-26 | $ln aggregation operator |  | Supports the $ln aggregation operator. |
| 2025-08-26 | $log aggregation operator |  | Supports the $log aggregation operator. |
| 2025-08-26 | $log10 aggregation operator |  | Supports the $log10 aggregation operator. |
| 2025-08-26 | $map aggregation variable operator |  | Supports the $map aggregation variable operator. |
| 2025-08-26 | $maxN aggregation operator |  | Supports the $maxN aggregation operator. |
| 2025-08-26 | $mergeObjects aggregation operator |  | Supports the $mergeObjects aggregation operator. |
| 2025-08-26 | $objectToArray aggregation operator |  | Supports the $objectToArray aggregation operator. |
| 2025-08-26 | $pop update operator |  | Supports the $pop update operator for array updates. |
| 2025-08-26 | $position update modifier |  | Supports the $position update modifier. |
| 2025-08-26 | $pow aggregation operator |  | Supports the $pow aggregation operator. |
| 2025-08-26 | $pullAll update operator |  | Supports the $pullAll update operator for array updates. |
| 2025-08-26 | $range aggregation operator |  | Supports the $range aggregation operator. |
| 2025-08-26 | $reduce aggregation operator |  | Supports the $reduce aggregation operator. |
| 2025-08-26 | $setDifference aggregation operator |  | Supports the $setDifference aggregation operator. |
| 2025-08-26 | $setEquals aggregation operator |  | Supports the $setEquals aggregation operator. |
| 2025-08-26 | $setIntersection aggregation operator |  | Supports the $setIntersection aggregation operator. |
| 2025-08-26 | $setIsSubset aggregation operator |  | Supports the $setIsSubset aggregation operator. |
| 2025-08-26 | $setUnion aggregation operator |  | Supports the $setUnion aggregation operator. |
| 2025-08-26 | $slice update modifier |  | Supports the $slice update modifier. |
| 2025-08-26 | $sort update modifier |  | Supports the $sort update modifier. |
| 2025-08-26 | $sortArray aggregation operator |  | Supports the $sortArray aggregation operator. |
| 2025-08-26 | $sqrt aggregation operator |  | Supports the $sqrt aggregation operator. |
| 2025-08-26 | $toDate aggregation operator |  | Supports the $toDate aggregation operator. |
| 2025-08-26 | $toDecimal aggregation operator |  | Supports the $toDecimal aggregation operator. |
| 2025-08-26 | $toDouble aggregation operator |  | Supports the $toDouble aggregation operator. |
| 2025-08-26 | $toInt aggregation operator |  | Supports the $toInt aggregation operator. |
| 2025-08-26 | $toLong aggregation operator |  | Supports the $toLong aggregation operator. |
| 2025-08-26 | $toObjectId aggregation operator |  | Supports the $toObjectId aggregation operator. |
| 2025-08-26 | $trunc aggregation operator |  | Supports the $trunc aggregation operator. |
| 2025-08-26 | $type aggregation operator |  | Supports the $type aggregation operator. |
| 2025-08-26 | $zip aggregation operator |  | Supports the $zip aggregation operator. |
| 2025-08-26 | aggregation pipeline accumulator expressions |  | Supports accumulator expressions in aggregation pipelines. |
| 2025-08-26 | all positional array update operator |  | Supports the $[] array update operator for updating all matched array elements. |
| 2025-08-26 | Document _id type support |  | Firestore with MongoDB compatibility supports int32, binary, and double values as document _id identifiers. |
| 2025-08-26 | filtered positional array update operator |  | Supports the $[ ] array update operator for filtered array updates. |
| 2025-08-26 | Firebase interfaces |  | Adds Firebase console, CLI, and documentation support. |
| 2025-08-26 | Firestore Enterprise billing metrics |  | New Cloud Monitoring billing metrics help attribute Firestore Enterprise costs to database and RPC methods. |
| 2025-08-26 | Firestore Triggers (Events) |  | Enables Firestore Triggers for Firestore with MongoDB compatibility databases. |
| 2025-08-26 | Firestore with MongoDB compatibility |  | Firestore with MongoDB compatibility reached general availability. |
| 2025-08-26 | Index management |  | Firestore with MongoDB compatibility supports managing indexes through the MongoDB API. |
| 2025-08-26 | JSON export tool |  | The Google Cloud console includes a JSON export tool for Firestore with MongoDB compatibility. |
| 2025-08-26 | JSON results viewer |  | The Google Cloud console includes a JSON results viewer for Firestore with MongoDB compatibility. |
| 2025-08-26 | Managed bulk delete |  | Firestore with MongoDB compatibility supports managed bulk deletion of data. |
| 2025-08-26 | Managed import and export |  | Firestore with MongoDB compatibility supports managed import and export operations; Firestore with MongoDB compatibility supports managed import and export in Preview. |
| 2025-08-26 | natural sort order |  | Supports ascending natural sort order in aggregation pipelines. |
| 2025-08-26 | Point-in-time database cloning |  | You can clone an existing database into a new database at a selected timestamp; You can clone an existing database into a new database at a selected timestamp. |
| 2025-08-26 | Point-in-time recovery |  | Firestore with MongoDB compatibility supports point-in-time recovery, including reading data at a specific snapshot through the MongoDB APIs. |
| 2025-08-26 | positional array update operator |  | Supports the $ array update operator for matching array elements. |
| 2025-08-26 | positional projection operator |  | Supports the positional projection operator in MongoDB-compatible projections. |
| 2025-08-26 | Private Google Access |  | Firestore with MongoDB compatibility supports Private Google Access. |
| 2025-08-26 | Query explain support |  | Firestore with MongoDB compatibility supports explaining queries through the MongoDB API. |
| 2025-08-26 | Query performance improvements |  | Improves query performance for arrays and large bulk operations while reducing transient errors. |
| 2025-08-26 | Unique indexes |  | Firestore with MongoDB compatibility supports unique indexes. |
| 2025-08-26 | Usage dashboard |  | The Google Cloud console includes a usage dashboard for Firestore with MongoDB compatibility. |
| 2025-07-31 | Explain query support |  | The Firestore with MongoDB compatibility API supports the explain() command in tools such as MongoDB Shell and Compass. |
| 2025-07-21 | Bulk delete |  | Firestore with MongoDB compatibility supports bulk delete operations in Preview. |
| 2025-07-21 | Cloud Monitoring billing metrics |  | Firestore with MongoDB compatibility databases expose billing metrics in Cloud Monitoring in Preview. |
| 2025-07-21 | Point-in-time recovery and snapshot reads |  | Firestore with MongoDB compatibility supports point-in-time recovery and snapshot reads in Preview. |
| 2025-07-10 | Array update operators $push and $pull |  | Firestore with MongoDB compatibility supports the $push and $pull array update operators in Preview. |
| 2025-07-10 | Bulk insertion performance improvements |  | Bulk insertion performance improvements are available in Preview. |
| 2025-07-10 | Query optimizer tuning for $elemMatch queries with indexes |  | Query optimizer tuning improves $elemMatch queries with indexes in Preview. |
| 2025-07-10 | Query optimizer tuning for disjunction $in queries and keys-only index scans |  | Query optimizer tuning improves disjunction $in queries and keys-only index scans in Preview. |

Source file slug: `firestore-with-mongodb-compatibility.md`


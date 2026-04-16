---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.702Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "natural sort order"
feature_slug: "natural-sort-order"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference"
keywords:
  - "natural"
  - "sort"
  - "order"
  - "supports"
  - "ascending"
  - "in"
  - "aggregation"
  - "pipelines"
---

# natural sort order

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Supports ascending natural sort order in aggregation pipelines.

## Extended Definition

Supports ascending natural sort order in aggregation pipelines.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference)

## Supporting Pages

### "Behavior differences \_|\_ Firestore with MongoDB compatibility \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences)
- Source ID: `site-iam-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Queries Natural sort order (queries without an explicit sort) does not match insertion order or order by id ascending.
- Queries and writes Command Unsupported Fields find max min returnKey showRecordId tailable oplogReplay noCursorTimeout awaitData allowPartialResults collation allowDiskUsage let aggregate collation let insert (none) update Within an update statement: collation delete Within a delete statement: collation findAndModify collation let count collation distinct collation getMore comment killCursors (none) explain (none) Transactions and sessions Command Unsupported Fields commitTransaction (none) abortTransaction (none) endSessions (none) Administration Command Unsupported Fields Notes listDatabases authorizedDatabases filter must be empty if provided. listCollections (none) authorizedCollections must be false if provided. listIndexes (none) createIndexes (none) dropIndexes (none) createCollection timeseries expireAfterSeconds clusteredIndex changeStreamPreAndPostImages size max storageEngine validator validationLevel validationAction indexOptionDefaults viewOn pipeline collation encryptedFields This command is a no-op. capped must be false if provided.
- Regular expression Regular expression options must be valid ("i", "m", "s", "u", or "x") and provided in alphabetical order without repeats.
- Read concern Firestore with MongoDB compatibility supports the snapshot , majority , and linearizable read concerns.

### "Indexes overview \_|\_ Firestore with MongoDB compatibility \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview)
- Source ID: `site-iam-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following indexes are two distinct indexes and not interchangeable: Collection Fields cities country (ascending), population (descending) cities population (descending), country (ascending), When creating an index to support a query, include the fields in the same order as your query.
- Index definition and structure An index consists of the following: a collection ID a list of fields in the given collection an order, either ascending or descending, for each field An index can also enable the sparse , multikey , or unique options.
- Index ordering The order and sort direction of each field uniquely defines the index.
- If an index exists for a query, the database can efficiently return results by reducing the amount of data that needs to be scanned and reducing the work needed to sort the results.

### "Supported features: 8.0 \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Operator Supported $abs Yes $add Yes $ceil Yes $divide Yes $exp Yes $floor Yes $ln Yes $log Yes $log10 Yes $mod Yes $multiply Yes $pow Yes $round Yes $sqrt Yes $subtract Yes $trunc Yes Array operators Operator Supported $arrayElemAt Yes $arrayToObject Yes $concatArrays Yes $filter Yes $firstN Yes $in Yes $indexOfArray Yes $isArray Yes $lastN Yes $map Yes $maxN Yes $minN Yes $objectToArray Yes $range Yes $reduce Yes $reverseArray Yes $size Yes $slice Yes $sortArray Yes $zip Yes Boolean operators Operator Supported $and Yes $not Yes $or Yes Comparison operators Operator Supported $cmp Yes $eq Yes $gt Yes $gte Yes $lt Yes $lte Yes $ne Yes Conditional expression operators Operator Supported $cond Yes $ifNull Yes $switch Yes Data size operators Operator Supported $binarySize Yes $bsonSize Yes Date operators Operator Supported $dateAdd Yes $dateDiff Yes $dateFromParts Yes $dateFromString Yes $dateSubtract Yes $dateToParts Yes $dateToString Yes $dateTrunc Yes $dayOfMonth Yes $dayOfWeek Yes $dayOfYear Yes $hour Yes $isoDayOfWeek Yes $isoWeek Yes $isoWeekYear Yes $millisecond Yes $minute Yes $month Yes $second Yes $toDate Yes $week Yes $year Yes Timestamp operators Operator Supported $tsIncrement No $tsSecond No Miscellaneous operators Operator Supported $getField Yes $natural Yes (ascending) $rand Yes $sampleRate No $toHashedIndexKey No Literal expression operators Operator Supported $literal Yes Object operators Operator Supported $mergeObjects Yes $objectToArray Yes $setField No Set operators Operator Supported $allElementsTrue Yes $anyElementTrue Yes $setDifference Yes $setEquals Yes $setIntersection Yes $setIsSubset Yes $setUnion Yes Stage operators Operator Supported $addFields Yes $bucket Yes $bucketAuto No $changeStream No $collStats No $count Yes $currentOp No $documents Yes $facet Yes $geoNear No $graphLookup No $group Yes $indexStats No $limit Yes $listLocalSessions No $listSessions No $lookup Yes $match Yes $merge No $out No $planCacheStats No $project Yes $redact No $replaceRoot Yes $replaceWith Yes $sample Yes $set Yes $search No $setWindowFields No $skip Yes $sort Yes $sortByCount Yes $unionWith Yes $unset Yes $unwind Yes String operators Operator Supported $concat Yes $dateFromString Yes $dateToString Yes $indexOfBytes Yes $indexOfCP Yes $ltrim Yes $regexFind Yes $regexFindAll Yes $regexMatch Yes $replaceAll Yes $replaceOne Yes $rtrim Yes $split Yes $strcasecmp Yes $strLenBytes Yes $strLenCP Yes $substr Yes $substrBytes Yes $substrCP Yes $toLower Yes $toString Yes $toUpper Yes $trim Yes System variables Variable Supported $$CLUSTERTIME No $$CURRENT No $$DESCEND No $$KEEP No $$NOW Yes $$PRUNE No $$REMOVE Yes $$ROOT Yes Text operators Operator Supported $meta No Trigonometry operators Operator Supported $acos No $acosh No $asin No $asinh No $atan No $atan2 No $atanh No $cos No $cosh No $degreesToRadians No $radiansToDegrees No $sin No $sinh No $tan No $tanh No Type operators Operator Supported $convert Yes $isNumber Yes $toBool Yes $toDate Yes $toDecimal Yes $toDouble Yes $toInt Yes $toLong Yes $toObjectId Yes $toString Yes $type Yes Variable operators Operator Supported $let Yes Geospatial Firestore with MongoDB compatibility supports the following Geospatial operators.
- Array operators Operator Supported $ Yes $[] Yes $[<identifier>] Yes $addToSet Yes $percentile Yes $pop Yes $pull Yes $pullAll Yes $push Yes Bitwise operators Operator Supported $bit Yes Field operators Operator Supported $currentDate Yes $inc Yes $max Yes $min Yes $mul Yes $rename Yes $set Yes $setOnInsert Yes $unset Yes Update modifiers Modifier Supported $each Yes $position Yes $slice Yes $sort Yes Aggregation pipeline operators Firestore with MongoDB compatibility supports the following aggregation pipeline operators.
- Command Supported cloneCollectionAsCapped No collMod No collMod: expireAfterSeconds No convertToCapped No copydb No create Yes createIndex Yes createIndexes Yes createView No currentOp No drop No dropDatabase No To delete a database, see Delete a database . dropIndex Yes To delete indexes, see Manage indexes . dropIndexes No filemd5 No getAuditConfig No killCursors Yes killOp No listCollections Yes listDatabases Yes listIndexes Yes reIndex No renameCollection No setAuditConfig No Diagnostic commands Command Supported buildInfo Yes collStats No connectionStatus Yes connPoolStats No dataSize No dbHash No dbStats No explain Yes For behavior differences and limitations, see Query Explain features No hello Yes hostInfo Yes listCommands No profiler No serverStatus No top No whatsmyuri No Role management commands To manage database access, Firestore with MongoDB compatibility supports Identity and Access Management roles and permissions .
- Query and projection operators Firestore with MongoDB compatibility supports the following query and projection operators: Array operators Operator Supported $all Yes $elemMatch Yes $size Yes Bitwise operators Operator Supported $bitsAllClear No $bitsAllSet No $bitsAnyClear No $bitsAnySet No Comment operator Operator Supported $comment No Comparison operators Operator Supported $eq Yes $gt Yes $gte Yes $in Yes $lt Yes $lte Yes $ne Yes $nin Yes Element operators Operator Supported $exists Yes $type Yes Evaluation query operators Operator Supported $expr Yes $jsonSchema No $mod Yes $regex Yes $text No $where No Logical operators Operator Supported $and Yes $nor Yes $not Yes $or Yes Projection operators Operator Supported $ Yes $elemMatch Yes $meta Partial (supports textScore) $slice Yes Update operators Firestore with MongoDB compatibility supports the following update operators.

### "Query execution reference \_|\_ Firestore with MongoDB compatibility \_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a schema of [k1, k2, k3] , a key ordering length of 0 means the scan can return in any order, 1 means order by k1, but rows with the same k1 value can come with any order, 3 returns documents in exact sorted order. • SequentialScan index: type=CollectionGroupIndex, id=CAE, keys=[user ASC, date placed ASC, key ASC] key ordering length: 3 keys: [user ASC, date placed ASC, key ASC] limit: 10 properties: Selection { a } ranges: / records returned: 1 records scanned: 1 UniqueScan Represents a scan of a static, sequential range of rows in storage with in-memory deduplication of rows. • UniqueScan index: type=CollectionGroupIndex, id=CAE, keys=[user ASC, date placed ASC, key ASC] keys: [user ASC, date placed ASC, key ASC] properties: Selection { a } ranges: / ----(-∞..+∞) records returned: 1 records scanned: 1 IndexSeek Represents a dynamic scan where the rows returned may be parametrized by runtime data and might not be along a single sequential range of the index, and multiple distinct scans may be performed to satisfy the query.
- For example, when grouping by distinct values of a field while using an index on that field. • StreamAggregate keys: [foo ASC, bar ASC] properties: Selection { baz } aggregations: [$sum($foo 1) AS baz] MajorSort Performs a sort operation on a fixed set of properties.
- Materializes all records in memory at once and returns the sorted values in order, the size of the sort set is limited by the query memory limit .
- This node does not deduplicate results that appear in multiple children, and the order of returned results is nondeterministic. • Concat ├── • Fetch ... ├── • Fetch Compute Evaluates a set of expressions, assigning the results to a set of variables. • Compute $user 1: user $full name 1: str concat($first name 1, " ", $last name 1) $address 1: UNSET records returned: 1 Filter Selectively returns rows if and only if they match the supplied expression. • Filter expression: $eq(foo, "bar") records returned: 1 RecordCount Counts the number of rows produced by the child node and emits the current count to the variable specified in the count attribute. • RecordCount count: $row number 1 records returned: 1 Values Produces a sequence of literal values to work on.


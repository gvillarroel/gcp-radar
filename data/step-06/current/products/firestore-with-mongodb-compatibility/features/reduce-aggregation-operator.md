---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.686Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "$reduce aggregation operator"
feature_slug: "reduce-aggregation-operator"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences"
  - "https://docs.cloud.google.com/firestore/native/docs/query-data/queries"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference"
keywords:
  - "reduce"
  - "aggregation"
  - "operator"
  - "supports"
  - "the"
---

# $reduce aggregation operator

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Supports the $reduce aggregation operator.

## Extended Definition

Supports the $reduce aggregation operator.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences)
- [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference)

## Supporting Pages

### "Supported features: 8.0 \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Operator Supported $abs Yes $add Yes $ceil Yes $divide Yes $exp Yes $floor Yes $ln Yes $log Yes $log10 Yes $mod Yes $multiply Yes $pow Yes $round Yes $sqrt Yes $subtract Yes $trunc Yes Array operators Operator Supported $arrayElemAt Yes $arrayToObject Yes $concatArrays Yes $filter Yes $firstN Yes $in Yes $indexOfArray Yes $isArray Yes $lastN Yes $map Yes $maxN Yes $minN Yes $objectToArray Yes $range Yes $reduce Yes $reverseArray Yes $size Yes $slice Yes $sortArray Yes $zip Yes Boolean operators Operator Supported $and Yes $not Yes $or Yes Comparison operators Operator Supported $cmp Yes $eq Yes $gt Yes $gte Yes $lt Yes $lte Yes $ne Yes Conditional expression operators Operator Supported $cond Yes $ifNull Yes $switch Yes Data size operators Operator Supported $binarySize Yes $bsonSize Yes Date operators Operator Supported $dateAdd Yes $dateDiff Yes $dateFromParts Yes $dateFromString Yes $dateSubtract Yes $dateToParts Yes $dateToString Yes $dateTrunc Yes $dayOfMonth Yes $dayOfWeek Yes $dayOfYear Yes $hour Yes $isoDayOfWeek Yes $isoWeek Yes $isoWeekYear Yes $millisecond Yes $minute Yes $month Yes $second Yes $toDate Yes $week Yes $year Yes Timestamp operators Operator Supported $tsIncrement No $tsSecond No Miscellaneous operators Operator Supported $getField Yes $natural Yes (ascending) $rand Yes $sampleRate No $toHashedIndexKey No Literal expression operators Operator Supported $literal Yes Object operators Operator Supported $mergeObjects Yes $objectToArray Yes $setField No Set operators Operator Supported $allElementsTrue Yes $anyElementTrue Yes $setDifference Yes $setEquals Yes $setIntersection Yes $setIsSubset Yes $setUnion Yes Stage operators Operator Supported $addFields Yes $bucket Yes $bucketAuto No $changeStream No $collStats No $count Yes $currentOp No $documents Yes $facet Yes $geoNear No $graphLookup No $group Yes $indexStats No $limit Yes $listLocalSessions No $listSessions No $lookup Yes $match Yes $merge No $out No $planCacheStats No $project Yes $redact No $replaceRoot Yes $replaceWith Yes $sample Yes $set Yes $search No $setWindowFields No $skip Yes $sort Yes $sortByCount Yes $unionWith Yes $unset Yes $unwind Yes String operators Operator Supported $concat Yes $dateFromString Yes $dateToString Yes $indexOfBytes Yes $indexOfCP Yes $ltrim Yes $regexFind Yes $regexFindAll Yes $regexMatch Yes $replaceAll Yes $replaceOne Yes $rtrim Yes $split Yes $strcasecmp Yes $strLenBytes Yes $strLenCP Yes $substr Yes $substrBytes Yes $substrCP Yes $toLower Yes $toString Yes $toUpper Yes $trim Yes System variables Variable Supported $$CLUSTERTIME No $$CURRENT No $$DESCEND No $$KEEP No $$NOW Yes $$PRUNE No $$REMOVE Yes $$ROOT Yes Text operators Operator Supported $meta No Trigonometry operators Operator Supported $acos No $acosh No $asin No $asinh No $atan No $atan2 No $atanh No $cos No $cosh No $degreesToRadians No $radiansToDegrees No $sin No $sinh No $tan No $tanh No Type operators Operator Supported $convert Yes $isNumber Yes $toBool Yes $toDate Yes $toDecimal Yes $toDouble Yes $toInt Yes $toLong Yes $toObjectId Yes $toString Yes $type Yes Variable operators Operator Supported $let Yes Geospatial Firestore with MongoDB compatibility supports the following Geospatial operators.
- Array operators Operator Supported $ Yes $[] Yes $[<identifier>] Yes $addToSet Yes $percentile Yes $pop Yes $pull Yes $pullAll Yes $push Yes Bitwise operators Operator Supported $bit Yes Field operators Operator Supported $currentDate Yes $inc Yes $max Yes $min Yes $mul Yes $rename Yes $set Yes $setOnInsert Yes $unset Yes Update modifiers Modifier Supported $each Yes $position Yes $slice Yes $sort Yes Aggregation pipeline operators Firestore with MongoDB compatibility supports the following aggregation pipeline operators.
- Query and projection operators Firestore with MongoDB compatibility supports the following query and projection operators: Array operators Operator Supported $all Yes $elemMatch Yes $size Yes Bitwise operators Operator Supported $bitsAllClear No $bitsAllSet No $bitsAnyClear No $bitsAnySet No Comment operator Operator Supported $comment No Comparison operators Operator Supported $eq Yes $gt Yes $gte Yes $in Yes $lt Yes $lte Yes $ne Yes $nin Yes Element operators Operator Supported $exists Yes $type Yes Evaluation query operators Operator Supported $expr Yes $jsonSchema No $mod Yes $regex Yes $text No $where No Logical operators Operator Supported $and Yes $nor Yes $not Yes $or Yes Projection operators Operator Supported $ Yes $elemMatch Yes $meta Partial (supports textScore) $slice Yes Update operators Firestore with MongoDB compatibility supports the following update operators.
- Aggregation Command Supported aggregate Yes count Yes distinct Yes group No The $group stage in aggregations is supported whereas the group command isn't. mapReduce No Authentication Command Supported authenticate No getnonce No logout No Query and write operations Command Supported watch (Change Streams) No delete Yes eval No find Yes findAndModify Yes getLastError Yes getMore Yes getPrevError No GridFS No insert Yes parallelCollectionScan No replaceOne No The replaceOne driver method is supported with the update command. resetError No update Yes Session commands Command Supported abortTransaction Yes commitTransaction Yes endSessions Yes killAllSessions No killAllSessionsByPattern No killSessions No refreshSessions No startSession Sessions can be started using the startSession driver method.

### "Behavior differences \_|\_ Firestore with MongoDB compatibility \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences)
- Source ID: `site-iam-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Read concern Firestore with MongoDB compatibility supports the snapshot , majority , and linearizable read concerns.
- For other workloads, snapshot can improve performance and reduce transaction contention.
- See the commands section for a complete list of supported stages and operators.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Query and filter data \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
- Source ID: `site-docs-root-2`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Disjunctive normal form Firestore converts queries to disjunctive normal form by applying two rules: Flatten Given conditions A , B , and C : A and (B and C) => A and B and C Distributive Law Given conditions A , B , C , and D : A and (B or C) => (A and B) or (A and C) (A or B) and (C or D) => (A and C) or (A and D) or (B and C) or (B and D) When applying these rules to in and array-contains-any queries, remember that these operators are shorthands for OR .
- WhereGreaterThanOrEqualTo ( "Name" , "San Francisco" ); Program . cs Ruby state query = cities ref . where "state" , "=" , "CA" population query = cities ref . where "population" , ">" , 1 000 000 name query = cities ref . where "name" , ">=" , "San Francisco" query data . rb Not equal ( != ) Use the not equal ( != ) operator to return documents where the given field exists and does not match the comparison value.
- Core operations support the following comparison operators: < less than <= less than or equal to == equal to greater than = greater than or equal to != not equal to array-contains array-contains-any in not-in Note: For Apple, Android, and Java, the comparison operator is explicitly named in the method.
- To control the number of results returned, use a limit clause or paginate your query . array-contains-any Use the array-contains-any operator to combine up to 30 array-contains clauses on the same field with a logical OR .

### "Query execution reference \_|\_ Firestore with MongoDB compatibility \_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Requires materializing the full group in-memory before returning the result and must not exceed the the query memory limit . • HashAggregate aggregations: [sum($b 1) AS total] groups: [$a 1] peak memory usage: 4.00 KiB (4,096 B) records returned: 0 StreamAggregate Specialized aggregate node which only maintains state for a single group at a time, reducing peak memory usage.
- When a subsequent limit is provided, a top-k sorting algorithm is used to reduce the memory usage.
- For a schema of [k1, k2, k3] , a key ordering length of 0 means the scan can return in any order, 1 means order by k1, but rows with the same k1 value can come with any order, 3 returns documents in exact sorted order. • SequentialScan index: type=CollectionGroupIndex, id=CAE, keys=[user ASC, date placed ASC, key ASC] key ordering length: 3 keys: [user ASC, date placed ASC, key ASC] limit: 10 properties: Selection { a } ranges: / records returned: 1 records scanned: 1 UniqueScan Represents a scan of a static, sequential range of rows in storage with in-memory deduplication of rows. • UniqueScan index: type=CollectionGroupIndex, id=CAE, keys=[user ASC, date placed ASC, key ASC] keys: [user ASC, date placed ASC, key ASC] properties: Selection { a } ranges: / ----(-∞..+∞) records returned: 1 records scanned: 1 IndexSeek Represents a dynamic scan where the rows returned may be parametrized by runtime data and might not be along a single sequential range of the index, and multiple distinct scans may be performed to satisfy the query.
- This node does not deduplicate results that appear in multiple children, and the order of returned results is nondeterministic. • Concat ├── • Fetch ... ├── • Fetch Compute Evaluates a set of expressions, assigning the results to a set of variables. • Compute $user 1: user $full name 1: str concat($first name 1, " ", $last name 1) $address 1: UNSET records returned: 1 Filter Selectively returns rows if and only if they match the supplied expression. • Filter expression: $eq(foo, "bar") records returned: 1 RecordCount Counts the number of rows produced by the child node and emits the current count to the variable specified in the count attribute. • RecordCount count: $row number 1 records returned: 1 Values Produces a sequence of literal values to work on.


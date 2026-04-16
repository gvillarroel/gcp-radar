---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.705Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Query explain support"
feature_slug: "query-explain-support"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers"
keywords:
  - "query"
  - "explain"
  - "firestore"
  - "with"
  - "mongodb"
  - "compatibility"
  - "supports"
  - "explaining"
---

# Query explain support

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Firestore with MongoDB compatibility supports explaining queries through the MongoDB API.

## Extended Definition

Firestore with MongoDB compatibility supports explaining queries through the MongoDB API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers)

## Supporting Pages

### "Supported features: 8.0 \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Command Supported cloneCollectionAsCapped No collMod No collMod: expireAfterSeconds No convertToCapped No copydb No create Yes createIndex Yes createIndexes Yes createView No currentOp No drop No dropDatabase No To delete a database, see Delete a database . dropIndex Yes To delete indexes, see Manage indexes . dropIndexes No filemd5 No getAuditConfig No killCursors Yes killOp No listCollections Yes listDatabases Yes listIndexes Yes reIndex No renameCollection No setAuditConfig No Diagnostic commands Command Supported buildInfo Yes collStats No connectionStatus Yes connPoolStats No dataSize No dbHash No dbStats No explain Yes For behavior differences and limitations, see Query Explain features No hello Yes hostInfo Yes listCommands No profiler No serverStatus No top No whatsmyuri No Role management commands To manage database access, Firestore with MongoDB compatibility supports Identity and Access Management roles and permissions .
- Query and projection operators Firestore with MongoDB compatibility supports the following query and projection operators: Array operators Operator Supported $all Yes $elemMatch Yes $size Yes Bitwise operators Operator Supported $bitsAllClear No $bitsAllSet No $bitsAnyClear No $bitsAnySet No Comment operator Operator Supported $comment No Comparison operators Operator Supported $eq Yes $gt Yes $gte Yes $in Yes $lt Yes $lte Yes $ne Yes $nin Yes Element operators Operator Supported $exists Yes $type Yes Evaluation query operators Operator Supported $expr Yes $jsonSchema No $mod Yes $regex Yes $text No $where No Logical operators Operator Supported $and Yes $nor Yes $not Yes $or Yes Projection operators Operator Supported $ Yes $elemMatch Yes $meta Partial (supports textScore) $slice Yes Update operators Firestore with MongoDB compatibility supports the following update operators.
- Geometry specifiers Specifier Supported $box No $center No $centerSphere No $geometry No $maxDistance No $minDistance No $polygon No $uniqueDocs No Query selectors Selector Supported $geoIntersects No $geoWithin No $near No $nearSphere No $nearSphere No $uniqueDocs No Indexes and index properties Firestore with MongoDB compatibility supports the following indexes and index operators.
- Operator Supported $abs Yes $add Yes $ceil Yes $divide Yes $exp Yes $floor Yes $ln Yes $log Yes $log10 Yes $mod Yes $multiply Yes $pow Yes $round Yes $sqrt Yes $subtract Yes $trunc Yes Array operators Operator Supported $arrayElemAt Yes $arrayToObject Yes $concatArrays Yes $filter Yes $firstN Yes $in Yes $indexOfArray Yes $isArray Yes $lastN Yes $map Yes $maxN Yes $minN Yes $objectToArray Yes $range Yes $reduce Yes $reverseArray Yes $size Yes $slice Yes $sortArray Yes $zip Yes Boolean operators Operator Supported $and Yes $not Yes $or Yes Comparison operators Operator Supported $cmp Yes $eq Yes $gt Yes $gte Yes $lt Yes $lte Yes $ne Yes Conditional expression operators Operator Supported $cond Yes $ifNull Yes $switch Yes Data size operators Operator Supported $binarySize Yes $bsonSize Yes Date operators Operator Supported $dateAdd Yes $dateDiff Yes $dateFromParts Yes $dateFromString Yes $dateSubtract Yes $dateToParts Yes $dateToString Yes $dateTrunc Yes $dayOfMonth Yes $dayOfWeek Yes $dayOfYear Yes $hour Yes $isoDayOfWeek Yes $isoWeek Yes $isoWeekYear Yes $millisecond Yes $minute Yes $month Yes $second Yes $toDate Yes $week Yes $year Yes Timestamp operators Operator Supported $tsIncrement No $tsSecond No Miscellaneous operators Operator Supported $getField Yes $natural Yes (ascending) $rand Yes $sampleRate No $toHashedIndexKey No Literal expression operators Operator Supported $literal Yes Object operators Operator Supported $mergeObjects Yes $objectToArray Yes $setField No Set operators Operator Supported $allElementsTrue Yes $anyElementTrue Yes $setDifference Yes $setEquals Yes $setIntersection Yes $setIsSubset Yes $setUnion Yes Stage operators Operator Supported $addFields Yes $bucket Yes $bucketAuto No $changeStream No $collStats No $count Yes $currentOp No $documents Yes $facet Yes $geoNear No $graphLookup No $group Yes $indexStats No $limit Yes $listLocalSessions No $listSessions No $lookup Yes $match Yes $merge No $out No $planCacheStats No $project Yes $redact No $replaceRoot Yes $replaceWith Yes $sample Yes $set Yes $search No $setWindowFields No $skip Yes $sort Yes $sortByCount Yes $unionWith Yes $unset Yes $unwind Yes String operators Operator Supported $concat Yes $dateFromString Yes $dateToString Yes $indexOfBytes Yes $indexOfCP Yes $ltrim Yes $regexFind Yes $regexFindAll Yes $regexMatch Yes $replaceAll Yes $replaceOne Yes $rtrim Yes $split Yes $strcasecmp Yes $strLenBytes Yes $strLenCP Yes $substr Yes $substrBytes Yes $substrCP Yes $toLower Yes $toString Yes $toUpper Yes $trim Yes System variables Variable Supported $$CLUSTERTIME No $$CURRENT No $$DESCEND No $$KEEP No $$NOW Yes $$PRUNE No $$REMOVE Yes $$ROOT Yes Text operators Operator Supported $meta No Trigonometry operators Operator Supported $acos No $acosh No $asin No $asinh No $atan No $atan2 No $atanh No $cos No $cosh No $degreesToRadians No $radiansToDegrees No $sin No $sinh No $tan No $tanh No Type operators Operator Supported $convert Yes $isNumber Yes $toBool Yes $toDate Yes $toDecimal Yes $toDouble Yes $toInt Yes $toLong Yes $toObjectId Yes $toString Yes $type Yes Variable operators Operator Supported $let Yes Geospatial Firestore with MongoDB compatibility supports the following Geospatial operators.

### "Query execution reference \_|\_ Firestore with MongoDB compatibility \_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/query-explain-reference)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Firestore with MongoDB compatibility Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To learn how to execute a query with Query Explain, see Analyze query execution with Query Explain .
- Query execution reference This page explains the output of a query executed with Query Explain.
- For a schema of [k1, k2, k3] , a key ordering length of 0 means the scan can return in any order, 1 means order by k1, but rows with the same k1 value can come with any order, 3 returns documents in exact sorted order. • SequentialScan index: type=CollectionGroupIndex, id=CAE, keys=[user ASC, date placed ASC, key ASC] key ordering length: 3 keys: [user ASC, date placed ASC, key ASC] limit: 10 properties: Selection { a } ranges: / records returned: 1 records scanned: 1 UniqueScan Represents a scan of a static, sequential range of rows in storage with in-memory deduplication of rows. • UniqueScan index: type=CollectionGroupIndex, id=CAE, keys=[user ASC, date placed ASC, key ASC] keys: [user ASC, date placed ASC, key ASC] properties: Selection { a } ranges: / ----(-∞..+∞) records returned: 1 records scanned: 1 IndexSeek Represents a dynamic scan where the rows returned may be parametrized by runtime data and might not be along a single sequential range of the index, and multiple distinct scans may be performed to satisfy the query.

### "Import and export data \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Note: You must export specific collections if you plan to: Import only specific collections Load Firestore with MongoDB compatibility data into BigQuery Export all documents Google Cloud Console In the Google Cloud console, go to the Databases page.
- If a collection's BigQuery schema surpasses 10,000 columns, the Firestore with MongoDB compatibility export operation attempts to stay under the column limit by treating map fields as bytes.
- Export to BigQuery You can load data from a Firestore with MongoDB compatibility export into BigQuery, but only if you specified a collection-ids filter.
- When loading Firestore with MongoDB compatibility data into BigQuery, BSON data types are represented with the STRING data type.

### "Supported MongoDB data types and drivers \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Languages and MongoDB drivers Firestore with MongoDB compatibility supports the following driver versions: Language Driver versions Java 5.x Node.js 6.x 5.x Python 4.x 3.x (x ≥ 12) Go 2.x C# 3.x Ruby 2.x (x ≥ 16) OIDC authentication support The Go, C#, and Ruby drivers support OpenID Connect (OIDC) authentication from Google Cloud for all supported driver versions.
- The Java, Node.js, and Python drivers support OIDC authentication from Google Cloud starting with the following driver versions: Java: 4.10 Node.js: 6.7 Python: 4.7 Third-party tools Firestore with MongoDB compatibility supports third-party tools described in this section.
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To obtain a connection string for your Firestore with MongoDB compatibility database, you can run the firestore databases connection-string command using Google Cloud CLI.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.700Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Index management"
feature_slug: "index-management"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek"
keywords:
  - "index"
  - "management"
  - "firestore"
  - "with"
  - "mongodb"
  - "compatibility"
  - "supports"
  - "managing"
---

# Index management

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Firestore with MongoDB compatibility supports managing indexes through the MongoDB API.

## Extended Definition

Firestore with MongoDB compatibility supports managing indexes through the MongoDB API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek)

## Supporting Pages

### "Supported features: 8.0 \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Command Supported cloneCollectionAsCapped No collMod No collMod: expireAfterSeconds No convertToCapped No copydb No create Yes createIndex Yes createIndexes Yes createView No currentOp No drop No dropDatabase No To delete a database, see Delete a database . dropIndex Yes To delete indexes, see Manage indexes . dropIndexes No filemd5 No getAuditConfig No killCursors Yes killOp No listCollections Yes listDatabases Yes listIndexes Yes reIndex No renameCollection No setAuditConfig No Diagnostic commands Command Supported buildInfo Yes collStats No connectionStatus Yes connPoolStats No dataSize No dbHash No dbStats No explain Yes For behavior differences and limitations, see Query Explain features No hello Yes hostInfo Yes listCommands No profiler No serverStatus No top No whatsmyuri No Role management commands To manage database access, Firestore with MongoDB compatibility supports Identity and Access Management roles and permissions .
- Operator Supported $abs Yes $add Yes $ceil Yes $divide Yes $exp Yes $floor Yes $ln Yes $log Yes $log10 Yes $mod Yes $multiply Yes $pow Yes $round Yes $sqrt Yes $subtract Yes $trunc Yes Array operators Operator Supported $arrayElemAt Yes $arrayToObject Yes $concatArrays Yes $filter Yes $firstN Yes $in Yes $indexOfArray Yes $isArray Yes $lastN Yes $map Yes $maxN Yes $minN Yes $objectToArray Yes $range Yes $reduce Yes $reverseArray Yes $size Yes $slice Yes $sortArray Yes $zip Yes Boolean operators Operator Supported $and Yes $not Yes $or Yes Comparison operators Operator Supported $cmp Yes $eq Yes $gt Yes $gte Yes $lt Yes $lte Yes $ne Yes Conditional expression operators Operator Supported $cond Yes $ifNull Yes $switch Yes Data size operators Operator Supported $binarySize Yes $bsonSize Yes Date operators Operator Supported $dateAdd Yes $dateDiff Yes $dateFromParts Yes $dateFromString Yes $dateSubtract Yes $dateToParts Yes $dateToString Yes $dateTrunc Yes $dayOfMonth Yes $dayOfWeek Yes $dayOfYear Yes $hour Yes $isoDayOfWeek Yes $isoWeek Yes $isoWeekYear Yes $millisecond Yes $minute Yes $month Yes $second Yes $toDate Yes $week Yes $year Yes Timestamp operators Operator Supported $tsIncrement No $tsSecond No Miscellaneous operators Operator Supported $getField Yes $natural Yes (ascending) $rand Yes $sampleRate No $toHashedIndexKey No Literal expression operators Operator Supported $literal Yes Object operators Operator Supported $mergeObjects Yes $objectToArray Yes $setField No Set operators Operator Supported $allElementsTrue Yes $anyElementTrue Yes $setDifference Yes $setEquals Yes $setIntersection Yes $setIsSubset Yes $setUnion Yes Stage operators Operator Supported $addFields Yes $bucket Yes $bucketAuto No $changeStream No $collStats No $count Yes $currentOp No $documents Yes $facet Yes $geoNear No $graphLookup No $group Yes $indexStats No $limit Yes $listLocalSessions No $listSessions No $lookup Yes $match Yes $merge No $out No $planCacheStats No $project Yes $redact No $replaceRoot Yes $replaceWith Yes $sample Yes $set Yes $search No $setWindowFields No $skip Yes $sort Yes $sortByCount Yes $unionWith Yes $unset Yes $unwind Yes String operators Operator Supported $concat Yes $dateFromString Yes $dateToString Yes $indexOfBytes Yes $indexOfCP Yes $ltrim Yes $regexFind Yes $regexFindAll Yes $regexMatch Yes $replaceAll Yes $replaceOne Yes $rtrim Yes $split Yes $strcasecmp Yes $strLenBytes Yes $strLenCP Yes $substr Yes $substrBytes Yes $substrCP Yes $toLower Yes $toString Yes $toUpper Yes $trim Yes System variables Variable Supported $$CLUSTERTIME No $$CURRENT No $$DESCEND No $$KEEP No $$NOW Yes $$PRUNE No $$REMOVE Yes $$ROOT Yes Text operators Operator Supported $meta No Trigonometry operators Operator Supported $acos No $acosh No $asin No $asinh No $atan No $atan2 No $atanh No $cos No $cosh No $degreesToRadians No $radiansToDegrees No $sin No $sinh No $tan No $tanh No Type operators Operator Supported $convert Yes $isNumber Yes $toBool Yes $toDate Yes $toDecimal Yes $toDouble Yes $toInt Yes $toLong Yes $toObjectId Yes $toString Yes $type Yes Variable operators Operator Supported $let Yes Geospatial Firestore with MongoDB compatibility supports the following Geospatial operators.
- Geometry specifiers Specifier Supported $box No $center No $centerSphere No $geometry No $maxDistance No $minDistance No $polygon No $uniqueDocs No Query selectors Selector Supported $geoIntersects No $geoWithin No $near No $nearSphere No $nearSphere No $uniqueDocs No Indexes and index properties Firestore with MongoDB compatibility supports the following indexes and index operators.
- Indexes Index type Supported 2d No 2dsphere No Compound Yes Hashed No Multikey Yes Single Field Yes Text No Index properties Property Supported Background Yes Case Insensitive No Hidden No Partial No Non-Sparse Yes Sparse Yes Text No TTL Yes Unique Yes Wildcard No Vector No Database commands Firestore with MongoDB compatibility supports the following database commands.

### "Manage indexes \_|\_ Firestore with MongoDB compatibility \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To delete the index, use the gcloud firestore indexes composite delete command. gcloud firestore indexes composite delete INDEX NAME \ --database=' DATABASE ID ' Replace the following: INDEX NAME : the name of an index DATABASE ID : a database ID Index build time To build an index, Firestore with MongoDB compatibility must create the index and then backfill the index entries with existing data.
- Before you begin Before you can create an index in Firestore with MongoDB compatibility, make sure that you are assigned any of the following roles: roles/datastore.owner roles/datastore.indexAdmin roles/editor roles/owner To grant a role, see Grant a single role .
- Key Term: Firestore with MongoDB compatibility supports several administrative operations that can take a long time to complete.
- Your new index is displayed in the list of indexes and Firestore with MongoDB compatibility begins creating your index.

### "Indexes overview \_|\_ Firestore with MongoDB compatibility \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview)
- Source ID: `site-iam-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Indexes overview This page describes indexing for Firestore with MongoDB compatibility.
- Firestore with MongoDB compatibility does not create any indexes by default.
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For example, with this index: db.cities.createIndex ( { "name" : 1 } , { unique: true } ) If you add the document {"abbreviation": "LA"} to the collection, the unique index creates an entry with name set to null .

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instead of Google managing the encryption keys that protect your data, your Firestore with MongoDB compatibility database is protected using a key that you control and manage in Cloud Key Management Service (Cloud KMS) .
- If the system detects that the key is unavailable, within 10 minutes any subsequent calls to the Firestore with MongoDB compatibility database, including reads, writes, and queries, return a INVALID ARGUMENT error with the following message: The customer-managed encryption key required by the requested resource is not accessible.
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Firestore with MongoDB compatibility, see Use CMEK .
- In the event of a key being unavailable, to preserve data beyond the seven days limit, we recommend that you enable backups for your Firestore with MongoDB compatibility CMEK database with the required retention period.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.678Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "$exp aggregation operator"
feature_slug: "exp-aggregation-operator"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80"
  - "https://docs.cloud.google.com/firestore/native/docs/query-data/queries"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import"
keywords:
  - "exp"
  - "aggregation"
  - "operator"
  - "supports"
  - "the"
---

# $exp aggregation operator

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Supports the $exp aggregation operator.

## Extended Definition

Supports the $exp aggregation operator.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)

## Supporting Pages

### "Supported features: 8.0 \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Operator Supported $abs Yes $add Yes $ceil Yes $divide Yes $exp Yes $floor Yes $ln Yes $log Yes $log10 Yes $mod Yes $multiply Yes $pow Yes $round Yes $sqrt Yes $subtract Yes $trunc Yes Array operators Operator Supported $arrayElemAt Yes $arrayToObject Yes $concatArrays Yes $filter Yes $firstN Yes $in Yes $indexOfArray Yes $isArray Yes $lastN Yes $map Yes $maxN Yes $minN Yes $objectToArray Yes $range Yes $reduce Yes $reverseArray Yes $size Yes $slice Yes $sortArray Yes $zip Yes Boolean operators Operator Supported $and Yes $not Yes $or Yes Comparison operators Operator Supported $cmp Yes $eq Yes $gt Yes $gte Yes $lt Yes $lte Yes $ne Yes Conditional expression operators Operator Supported $cond Yes $ifNull Yes $switch Yes Data size operators Operator Supported $binarySize Yes $bsonSize Yes Date operators Operator Supported $dateAdd Yes $dateDiff Yes $dateFromParts Yes $dateFromString Yes $dateSubtract Yes $dateToParts Yes $dateToString Yes $dateTrunc Yes $dayOfMonth Yes $dayOfWeek Yes $dayOfYear Yes $hour Yes $isoDayOfWeek Yes $isoWeek Yes $isoWeekYear Yes $millisecond Yes $minute Yes $month Yes $second Yes $toDate Yes $week Yes $year Yes Timestamp operators Operator Supported $tsIncrement No $tsSecond No Miscellaneous operators Operator Supported $getField Yes $natural Yes (ascending) $rand Yes $sampleRate No $toHashedIndexKey No Literal expression operators Operator Supported $literal Yes Object operators Operator Supported $mergeObjects Yes $objectToArray Yes $setField No Set operators Operator Supported $allElementsTrue Yes $anyElementTrue Yes $setDifference Yes $setEquals Yes $setIntersection Yes $setIsSubset Yes $setUnion Yes Stage operators Operator Supported $addFields Yes $bucket Yes $bucketAuto No $changeStream No $collStats No $count Yes $currentOp No $documents Yes $facet Yes $geoNear No $graphLookup No $group Yes $indexStats No $limit Yes $listLocalSessions No $listSessions No $lookup Yes $match Yes $merge No $out No $planCacheStats No $project Yes $redact No $replaceRoot Yes $replaceWith Yes $sample Yes $set Yes $search No $setWindowFields No $skip Yes $sort Yes $sortByCount Yes $unionWith Yes $unset Yes $unwind Yes String operators Operator Supported $concat Yes $dateFromString Yes $dateToString Yes $indexOfBytes Yes $indexOfCP Yes $ltrim Yes $regexFind Yes $regexFindAll Yes $regexMatch Yes $replaceAll Yes $replaceOne Yes $rtrim Yes $split Yes $strcasecmp Yes $strLenBytes Yes $strLenCP Yes $substr Yes $substrBytes Yes $substrCP Yes $toLower Yes $toString Yes $toUpper Yes $trim Yes System variables Variable Supported $$CLUSTERTIME No $$CURRENT No $$DESCEND No $$KEEP No $$NOW Yes $$PRUNE No $$REMOVE Yes $$ROOT Yes Text operators Operator Supported $meta No Trigonometry operators Operator Supported $acos No $acosh No $asin No $asinh No $atan No $atan2 No $atanh No $cos No $cosh No $degreesToRadians No $radiansToDegrees No $sin No $sinh No $tan No $tanh No Type operators Operator Supported $convert Yes $isNumber Yes $toBool Yes $toDate Yes $toDecimal Yes $toDouble Yes $toInt Yes $toLong Yes $toObjectId Yes $toString Yes $type Yes Variable operators Operator Supported $let Yes Geospatial Firestore with MongoDB compatibility supports the following Geospatial operators.
- Query and projection operators Firestore with MongoDB compatibility supports the following query and projection operators: Array operators Operator Supported $all Yes $elemMatch Yes $size Yes Bitwise operators Operator Supported $bitsAllClear No $bitsAllSet No $bitsAnyClear No $bitsAnySet No Comment operator Operator Supported $comment No Comparison operators Operator Supported $eq Yes $gt Yes $gte Yes $in Yes $lt Yes $lte Yes $ne Yes $nin Yes Element operators Operator Supported $exists Yes $type Yes Evaluation query operators Operator Supported $expr Yes $jsonSchema No $mod Yes $regex Yes $text No $where No Logical operators Operator Supported $and Yes $nor Yes $not Yes $or Yes Projection operators Operator Supported $ Yes $elemMatch Yes $meta Partial (supports textScore) $slice Yes Update operators Firestore with MongoDB compatibility supports the following update operators.
- Array operators Operator Supported $ Yes $[] Yes $[<identifier>] Yes $addToSet Yes $percentile Yes $pop Yes $pull Yes $pullAll Yes $push Yes Bitwise operators Operator Supported $bit Yes Field operators Operator Supported $currentDate Yes $inc Yes $max Yes $min Yes $mul Yes $rename Yes $set Yes $setOnInsert Yes $unset Yes Update modifiers Modifier Supported $each Yes $position Yes $slice Yes $sort Yes Aggregation pipeline operators Firestore with MongoDB compatibility supports the following aggregation pipeline operators.
- Geometry specifiers Specifier Supported $box No $center No $centerSphere No $geometry No $maxDistance No $minDistance No $polygon No $uniqueDocs No Query selectors Selector Supported $geoIntersects No $geoWithin No $near No $nearSphere No $nearSphere No $uniqueDocs No Indexes and index properties Firestore with MongoDB compatibility supports the following indexes and index operators.

### "Query and filter data \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Core operations support the following comparison operators: < less than <= less than or equal to == equal to greater than = greater than or equal to != not equal to array-contains array-contains-any in not-in Note: For Apple, Android, and Java, the comparison operator is explicitly named in the method.
- Disjunctive normal form Firestore converts queries to disjunctive normal form by applying two rules: Flatten Given conditions A , B , and C : A and (B and C) => A and B and C Distributive Law Given conditions A , B , C , and D : A and (B or C) => (A and B) or (A and C) (A or B) and (C or D) => (A and C) or (A and D) or (B and C) or (B and D) When applying these rules to in and array-contains-any queries, remember that these operators are shorthands for OR .
- WhereGreaterThanOrEqualTo ( "Name" , "San Francisco" ); Program . cs Ruby state query = cities ref . where "state" , "=" , "CA" population query = cities ref . where "population" , ">" , 1 000 000 name query = cities ref . where "name" , ">=" , "San Francisco" query data . rb Not equal ( != ) Use the not equal ( != ) operator to return documents where the given field exists and does not match the comparison value.
- You may obtain a copy of // the License at // // http://www.apache.org/licenses/LICENSE-2.0 // // Unless required by applicable law or agreed to in writing, software // distributed under the License is distributed on an "AS IS" BASIS, WITHOUT // WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

### "Behavior differences \_|\_ Firestore with MongoDB compatibility \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences)
- Source ID: `site-iam-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Read concern Firestore with MongoDB compatibility supports the snapshot , majority , and linearizable read concerns.
- The $facet stage does not support $rand or $sample in the input stages because it's a volatile expression.
- See the commands section for a complete list of supported stages and operators.
- Queries and writes Command Unsupported Fields find max min returnKey showRecordId tailable oplogReplay noCursorTimeout awaitData allowPartialResults collation allowDiskUsage let aggregate collation let insert (none) update Within an update statement: collation delete Within a delete statement: collation findAndModify collation let count collation distinct collation getMore comment killCursors (none) explain (none) Transactions and sessions Command Unsupported Fields commitTransaction (none) abortTransaction (none) endSessions (none) Administration Command Unsupported Fields Notes listDatabases authorizedDatabases filter must be empty if provided. listCollections (none) authorizedCollections must be false if provided. listIndexes (none) createIndexes (none) dropIndexes (none) createCollection timeseries expireAfterSeconds clusteredIndex changeStreamPreAndPostImages size max storageEngine validator validationLevel validationAction indexOptionDefaults viewOn pipeline collation encryptedFields This command is a no-op. capped must be false if provided.

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- Source ID: `site-docs-root-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- The PITR export operation supports all filters, including exporting all documents and exporting specific collection groups.
- Note: Exporting a collection group won't automatically export subcollections of the collections within the group. gcloud firestore export gs:// [BUCKET NAME] \ --collection-ids= [COLLECTION GROUP ID 1] , [COLLECTION GROUP ID 2] \ --database= [DATABASE] For example, you can design a restaurants collection in the foo database to include multiple subcollections, such as ratings , reviews , or outlets .
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.
- For example: gcloud firestore import gs://my-bucket/2017-05-25T23:54:39 76544/ --database='cymbal' You can confirm the location of your export files in the Cloud Storage browser in the Google Cloud console: Open Cloud Storage browser Once you start an import operation, closing the terminal does not cancel the operation, see cancel an operation .


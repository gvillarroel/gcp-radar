---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.884Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "count() queries"
feature_slug: "count-queries"
latest_feature_date: "2023-04-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview"
  - "https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries"
  - "https://docs.cloud.google.com/firestore/docs/cuds"
keywords:
  - "count"
  - "queries"
  - "firestore"
  - "supports"
  - "aggregation"
---

# count() queries

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports aggregation count() queries; Firestore supports aggregation count() queries.

## Extended Definition

Firestore supports aggregation count() queries; Firestore supports aggregation count() queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview](https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview)
- [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries)
- [https://docs.cloud.google.com/firestore/docs/cuds](https://docs.cloud.google.com/firestore/docs/cuds)

## Supporting Pages

### "Summarize data with aggregation queries \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firestore supports the following aggregation queries: count() sum() average() Firestore calculates the aggregation and transmits only the result back to your application.
- SERVER ). addOnCompleteListener { task - > if ( task . isSuccessful ) { // Aggregate fetched successfully val snapshot = task . result Log . d ( TAG , "Count: ${ snapshot . get ( AggregateField . count ()) } " ) Log . d ( TAG , "Sum: ${ snapshot . get ( AggregateField . sum ( " population " )) } " ) Log . d ( TAG , "Average: ${ snapshot . get ( AggregateField . average ( " population " )) } " ) } else { Log . d ( TAG , "Aggregate failed: " , task . getException ()) } } DocSnippets . kt Dart db . collection ( "cities" ) . aggregate ( count (), sum ( "population" ), average ( "population" ), ) . get () . then ( ( res ) { print ( res . count ); print ( res . getSum ( "population" )); print ( res . getAverage ( "population" )); }, onError: ( e ) = > print ( "Error completing: $ e " ), ); firestore . dart Java collection = db . collection ( "cities" ); query = collection . whereEqualTo ( "state" , "CA" ); AggregateQuery aggregateQuery = query . aggregate ( count (), sum ( "population" ), average ( "population" )); snapshot = aggregateQuery . get (). get (); System . out . println ( "Count: " + snapshot . getCount ()); System . out . println ( "Sum: " + snapshot . get ( sum ( "population" ))); System . out . println ( "Average: " + snapshot . get ( average ( "population" ))); Node.js const coll = firestore . collection ( 'cities' ); const aggregateQuery = coll . aggregate ({ countOfDocs : AggregateField . count (), totalPopulation : AggregateField . sum ( 'population' ), averagePopulation : AggregateField . average ( 'population' ) }); const snapshot = await aggregateQuery . get (); console . log ( 'countOfDocs: ' , snapshot . data (). countOfDocs ); console . log ( 'totalPopulation: ' , snapshot . data (). totalPopulation ); console . log ( 'averagePopulation: ' , snapshot . data (). averagePopulation ); Python collection ref = client . collection ( "users" ) query = collection ref . where ( filter = FieldFilter ( "people" , "==" , "Matthew" )) aggregate query = aggregation .
- The following example performs multiple aggregations in a single aggregation query: Web version 9 Learn more about the tree-shakeable Web v9 modular SDK and upgrade from version 8. const coll = collection ( firestore , 'cities' ); const snapshot = await getAggregateFromServer ( coll , { countOfDocs : count (), totalPopulation : sum ( 'population' ), averagePopulation : average ( 'population' ) }); console . log ( 'countOfDocs: ' , snapshot . data (). countOfDocs ); console . log ( 'totalPopulation: ' , snapshot . data (). totalPopulation ); console . log ( 'averagePopulation: ' , snapshot . data (). averagePopulation ); Swift Note: This product is not available on watchOS and App Clip targets. let query = db . collection ( "cities" ) let aggregateQuery = query . aggregate ([ AggregateField . count (), AggregateField . sum ( "population" ), AggregateField . average ( "population" )]) do { let snapshot = try await aggregateQuery . getAggregation ( source : . server ) print ( "Count: \( snapshot . get ( AggregateField . count ())) " ) print ( "Sum: \( snapshot . get ( AggregateField . sum ( "population" ))) " ) print ( "Average: \( snapshot . get ( AggregateField . average ( "population" ))) " ) } catch { print ( error ) } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets.
- AggregationQuery ( query ) alias to provides a key for accessing the aggregate query results aggregate query . count ( alias = "all" ) results = aggregate query . get () for result in results : print ( f "Alias of results from query: { result [ 0 ] . alias } " ) print ( f "Number of results from query: { result [ 0 ] . value } " ) aggregate query count . py Use the sum() aggregation Use the sum() aggregation to return the total sum of numeric values that match a given query—for example: Web version 9 Learn more about the tree-shakeable Web v9 modular SDK and upgrade from version 8. const coll = collection ( firestore , 'cities' ); const snapshot = await getAggregateFromServer ( coll , { totalPopulation : sum ( 'population' ) }); console . log ( 'totalPopulation: ' , snapshot . data (). totalPopulation ); Swift Note: This product is not available on watchOS and App Clip targets. let query = db . collection ( "cities" ) let aggregateQuery = query . aggregate ([ AggregateField . sum ( "population" )]) do { let snapshot = try await aggregateQuery . getAggregation ( source : . server ) print ( snapshot . get ( AggregateField . sum ( "population" ))) } catch { print ( error ) } ViewController . swift Objective-C Note: This product is not available on watchOS and App Clip targets.

### Committed use discounts \_|\_ Firestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/cuds](https://docs.cloud.google.com/firestore/docs/cuds)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- From here, you can calculate the monthly costs and savings that you would see under a 1-year commitment with a 20% discount compared to a year of paying the full rates: Monthly cost of a 1-year, $1.92/hour commitment: ($2.40 per hour - 20% discount) 730 hours = $1,401.60 per month Total savings per month: $1,752 - $1,401.60 = $350.40 Total savings with a 1-year, $1.92/hour commitment: $350.40 per month 12 months = $4,204.80 You can apply similar math to calculating the costs and savings of a 3-year CUD, a 40% discount compared to the on-demand rates: Monthly cost of a 3-year, $1.44/hour commitment: ($2.40 per hour - 40% discount) 730 hours = $1,051.20 per month Total savings per month: $1,752 - $1,051.20 = $700.80 Total savings with a 3-year, $1.44/hour commitment: $700.80 per month 36 months = $25,228.80 A commitment that covers your expected minimum Firestore usage over the years to come can lead to significant savings.
- As a basis for comparison, compute the on-demand cost of Firestore capacity, without the application of any commitment discounts: Read operations expenditure: 2 million document reads per hour $0.03 per 100,000 document reads = $0.60 per hour Write operations expenditure: 2 million document writes per hour $0.09 per 100,000 document writes = $1.80 per hour Total expenditure: $0.60 + $1.80 = $2.40 per hour Monthly cost based on on-demand pricing: $2.40 per hour 730 hours = $1,752 per month.
- Committed use discounts Committed use discounts (CUDs) provide deeply discounted prices in exchange for your commitment to continuously spend a certain amount on Firestore operations — Read/Write/Delete — for one year or three years.
- If the on-demand prices for Firestore Read/Write/Delete operations change after you purchase a commitment, your commitment fee does not change and you still receive the same discount percentage on applicable usage.

### "Enterprise edition index overview \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview](https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following indexes are two distinct indexes and not interchangeable: Collection Fields cities country (ascending), population (descending) cities population (descending), country (ascending), When creating an index to support a query, include the fields in the same order as your query.
- Enterprise edition index overview Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Troubleshoot index building errors You might encounter index building errors when managing your indexes.


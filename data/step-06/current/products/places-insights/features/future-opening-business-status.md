---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.197Z"
product_name: "Places Insights"
product_slug: "places-insights"
feature_name: "FUTURE_OPENING business status"
feature_slug: "future-opening-business-status"
latest_feature_date: "2026-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/placesinsights/queries"
  - "https://developers.google.com/maps/documentation/placesinsights/support"
  - "https://developers.google.com/maps/documentation/placesinsights/overview"
  - "https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview"
keywords:
  - "future"
  - "opening"
  - "business"
  - "status"
  - "for"
  - "that"
  - "is"
  - "not"
---

# FUTURE_OPENING business status

Product: Places Insights
Coverage: MEDIUM

## Step 02 Summary

A business status for a business that is not yet operational but is expected to open within the next 90 days.

## Extended Definition

A business status for a business that is not yet operational but is expected to open within the next 90 days.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/placesinsights/queries](https://developers.google.com/maps/documentation/placesinsights/queries)
- [https://developers.google.com/maps/documentation/placesinsights/support](https://developers.google.com/maps/documentation/placesinsights/support)
- [https://developers.google.com/maps/documentation/placesinsights/overview](https://developers.google.com/maps/documentation/placesinsights/overview)
- [https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview](https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview)

## Supporting Pages

### Query the dataset directly \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/queries](https://developers.google.com/maps/documentation/placesinsights/queries)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example The price level field supports the following predefined values: PRICE LEVEL FREE PRICE LEVEL INEXPENSIVE PRICE LEVEL MODERATE PRICE LEVEL EXPENSIVE PRICE LEVEL VERY EXPENSIVE The business status field supports the following predefined values: OPERATIONAL CLOSED TEMPORARILY CLOSED PERMANENTLY FUTURE OPENING Note: Typically you include the business status filter to make sure that you get the count of OPERATIONAL businesses.
- In this example, the query returns the count of all florists with a business status of OPERATIONAL within a 1000 meter radius of the Empire State Building in New York City: SELECT WITH AGGREGATION THRESHOLD COUNT ( ) AS count FROM PROJECT NAME .places insights us.places WHERE ST DWITHIN ( ST GEOGPOINT ( - 73.9857 , 40.7484 ), point , 1000 ) AND business status = "OPERATIONAL" AND 'florist' IN UNNEST ( types ) Filter by hours of operation In this example, return the count of all places in a geographic area with Friday happy hours: SELECT WITH AGGREGATION THRESHOLD COUNT ( ) AS count FROM PROJECT NAME .places insights us.places , UNNEST ( regular opening hours happy hour . friday ) AS friday hours WHERE '17:00:00' BETWEEN friday hours . start time AND friday hours . end time AND ST DWITHIN ( ST GEOGPOINT ( - 73.9857 , 40.7484 ), point , 1000 ); Filter by Region (address components) Our places dataset also contains a set of address components that are useful for filtering results based on political boundaries.
- For each location you then compute the number of nearby restaurants, meaning those within 1000 meters: WITH my locations AS ( SELECT 'Location 1' AS name , ST GEOGPOINT ( - 74.00776440888504 , 40.70932825380786 ) AS location UNION ALL SELECT 'Location 2' AS name , ST GEOGPOINT ( - 73.98257192833559 , 40.750738934863215 ) AS location UNION ALL SELECT 'Location 3' AS name , ST GEOGPOINT ( - 73.94701794263223 , 40.80792954838445 ) AS location ) SELECT WITH AGGREGATION THRESHOLD l . name , COUNT ( ) as count FROM PROJECT NAME .places insights us.places JOIN my locations l ON ST DWITHIN ( l . location , p . point , 1000 ) WHERE primary type = "restaurant" AND business status = "OPERATIONAL" GROUP BY l . name This image shows an example output to this query: Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In the following example, you return aggregation data for places of type tourist attraction with a business status of OPERATIONAL , that have a rating greater than or equal to 4.0, and with allows dogs set to true : SELECT WITH AGGREGATION THRESHOLD COUNT ( ) AS count FROM PROJECT NAME .places insights us.places WHERE ST DWITHIN ( ST GEOGPOINT ( - 73.9857 , 40.7484 ), point , 1000 ) AND 'tourist attraction' IN UNNEST ( types ) AND business status = "OPERATIONAL" AND rating >= 4.0 AND allows dogs = true The next query returns results for places that have at least eight EV charging stations: SELECT WITH AGGREGATION THRESHOLD COUNT ( ) AS count FROM PROJECT NAME .places insights us.places WHERE ev charge options . connector count > 8 ; Filter on place primary type and place type Each place in the dataset can have: A single primary type associated with it from the types defined by Place types .

### Support options for Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/support](https://developers.google.com/maps/documentation/placesinsights/support)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Won't fix (Infeasible) The issue requires changes that cannot be implemented in the foreseeable future.
- Contact the Google Maps Platform support team If you find that your questions have not been answered on Stack Overflow or the Issue Tracker , please visit the Google Maps Platform Support page within the Cloud console.
- Support response times Support response times are indicated in the table below (resolution times may vary): Priority level Example situations Standard Support response time Enhanced Support response time Critical Impact - Service Unusable in Production Applies only to Google Maps Platform services marked as General Availability Your situation matches all the following criteria: Your product or service is unusable in production, or business impact is critical (for example, revenue loss).
- 1 hour on weekdays, excluding regional holidays 1 hour on weekdays and weekends High Impact - Service Severely Impaired Applies only to Google Maps Platform services marked as General Availability Your product or service is degraded in production, having a noticeable rate of user-facing errors.

### Places Insights overview \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/overview](https://developers.google.com/maps/documentation/placesinsights/overview)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This query also extends the radius to 1500 meters around each hotel: SELECT WITH AGGREGATION THRESHOLD h . name , r . primary type , COUNT ( ) AS count FROM PROJECT NAME .places insights us.places AS r , mydata.hotels AS h WHERE ST DWITHIN ( h . location , r . point , 1500 ) AND r . primary type IN UNNEST ( [ 'restaurant' , 'bar' ] ) AND rating >= 4 AND business status = "OPERATIONAL" AND price level = 'PRICE LEVEL MODERATE' GROUP BY 1 , 2 This image shows an example output to this query: What's next Set up Places Insights Query the dataset directly Query the dataset using Places Count functions View the schema reference Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can also use this information to deploy predictive models that forecast the future performance of any new locations based on its surrounding POI context..
- The following SQL creates this dataset: CREATE OR REPLACE TABLE mydata.hotels ( name STRING , location GEOGRAPHY ); INSERT INTO mydata.hotels VALUES ( 'Hotel 1' , ST GEOGPOINT ( - 73.9933 , 40.75866 ) ); INSERT INTO mydata.hotels VALUES ( 'Hotel 2' , ST GEOGPOINT ( - 73.977713 , 40.752124 ) ); Get the count of restaurants in the area To give your customers an idea of the density of operational restaurants near your hotels, you write a SQL query to return the number of restaurants within 1000 meters of each hotel: SELECT WITH AGGREGATION THRESHOLD h . name , COUNT ( ) AS count FROM PROJECT NAME .places insights us.places AS r , mydata.hotels AS h WHERE ST DWITHIN ( h . location , r . point , 1000 ) AND r . primary type = 'restaurant' AND business status = "OPERATIONAL" GROUP BY 1 This image shows an example output to this query: Use a Places Count function to get the count and Place IDs of restaurants in the area You can also use a Places Count function to find a count of restaurants near a location.
- Get the count of restaurants and bars in the area Modify your query to include bars along with restaurants within 1000 meters of each hotel: SELECT WITH AGGREGATION THRESHOLD h . name , r . primary type , COUNT ( ) AS count FROM PROJECT NAME .places insights us.places AS r , mydata.hotels AS h WHERE ST DWITHIN ( h . location , r . point , 1000 ) AND r . primary type IN UNNEST ( [ 'restaurant' , 'bar' ] ) AND business status = "OPERATIONAL" GROUP BY 1 , 2 This image shows an example output to this query: Get the count of moderately priced restaurants and bars in the area You next want to know which customer demographic is served by the bars and restaurants.

### Historical data overview \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview](https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview)
- Source ID: `site-api-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT WITH AGGREGATION THRESHOLD snapshot date , COUNT ( ) AS count FROM PROJECT NAME .places insights historical us.places historical WHERE 'restaurant' IN UNNEST ( types ) AND business status = "OPERATIONAL" GROUP BY snapshot date ORDER BY snapshot date ASC ; Available listings The following table lists the supported cities and provides links to subscribe.
- Setup Note: Historical data is only available to a select number of testers for experimental testing purposes only.
- Excluded fields The schema for historical Places Insights data does not include rating or user rating count .
- Note: If these fields are important for your use case, fill out this feedback form .


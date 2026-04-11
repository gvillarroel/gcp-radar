---
title: "Historical data overview \_|\_ Places Insights \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/placesinsights/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview
  title: "Historical data overview \_|\_ Places Insights \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

science This product or feature is in Experimental (pre-GA). Pre-GA products and features might have limited support, and changes to pre-GA products and features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by the Google Maps Platform Service Specific Terms . For more information, see the launch stage descriptions . Sign up to test historical data for Places Insights!
Home
Products
Google Maps Platform
Documentation
Places Insights
Experimental
Send feedback
Historical data overview
Stay organized with collections
Save and categorize content based on your preferences.
Monthly historical Places Insights data is available starting from January 2024.
This data is useful for performing trends analysis to understand how the
places in an area have changed from month to month.
Setup
Note: Historical data is only available to a select number of testers for experimental
testing purposes only. You can express
interest to
sign up for the testing program.
Historical Places Insights data is available for the cities listed in the
table below . See Set up
Places Insights for additional
instructions on how to subscribe to these data exchanges.
Schema
The schema for historical Places Insights data is the same as for the latest
data (see Places Insights
reference ), with the following
exceptions.
Excluded fields
The schema for historical Places Insights data does not include rating or
user_rating_count .
Note: If these fields are important for your use case, fill out this
feedback form .
Your feedback helps us prioritize future improvements.
Additional fields
The schema for historical Places Insights data includes the following field in
addition to the core schema.
Field Name
Type
Mode
Description
Example
snapshot_date
DATE
NULLABLE
The snapshot date for the place.
2024-01-01
Example queries
As with the latest data, the SELECT statement when querying historical data
must include WITH AGGREGATION_THRESHOLD . (See Write a Places Insights
query ). Additionally, you will
likely want to GROUP BY snapshot_date . The following example shows how to
query for the number of operational restaurants by month.
SELECT WITH AGGREGATION_THRESHOLD
snapshot_date ,
COUNT ( * ) AS count
FROM
` PROJECT_NAME .places_insights_historical___us.places_historical`
WHERE
'restaurant' IN UNNEST ( types )
AND
business_status = "OPERATIONAL"
GROUP BY snapshot_date
ORDER BY snapshot_date ASC ;
Available listings
The following table lists the supported cities and provides links to subscribe.
Sample data
City, Country
Subscribe link
Table names
Sydney, Australia AU
places_insights_historical___au___sample.places_sample_historical
Sao Paulo, Brazil BR
places_insights_historical___br___sample.places_sample_historical
Toronto, Canada CA
places_insights_historical___ca___sample.places_sample_historical
Paris, France FR
places_insights_historical___fr___sample.places_sample_historical
Berlin, Germany DE
places_insights_historical___de___sample.places_sample_historical
Mumbai, India IN
places_insights_historical___in___sample.places_sample_historical
Jakarta, Indonesia ID
places_insights_historical___id___sample.places_sample_historical
Rome, Italy IT
places_insights_historical___it___sample.places_sample_historical
Tokyo, Japan JP
places_insights_historical___jp___sample.places_sample_historical
Mexico City, Mexico MX
places_insights_historical___mx___sample.places_sample_historical
Madrid, Spain ES
places_insights_historical___es___sample.places_sample_historical
Zurich, Switzerland CH
places_insights_historical___ch___sample.places_sample_historical
London, United Kingdom GB
places_insights_historical___gb___sample.places_sample_historical
New York City, United States US
places_insights_historical___us___sample.places_sample_historical
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

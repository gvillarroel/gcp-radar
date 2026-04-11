---
title: "Migration guide \_|\_ Places Insights \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/placesinsights/migration-guide
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/placesinsights/about-data
source_metadata:
  url: https://developers.google.com/maps/documentation/placesinsights/migration-guide
  title: "Migration guide \_|\_ Places Insights \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Places Insights
Send feedback
Migration guide
Stay organized with collections
Save and categorize content based on your preferences.
Important: This guide is intended for users migrating from the initial Preview
release . All other users already use listings and don't need to migrate.
This September 4, 2025 release of Places Insights includes the following
changes from the initial release:
Supports the ability to subscribe to Places Insights in the BigQuery
location
of your choice.
Moves the Places Insights datasets from data clean rooms to BigQuery data
exchange
listings .
Address fields in the dataset schema separate the id and name fields
into discrete string or string array fields.
Note: To take advantage of the new address fields, you must migrate to listings.
If you decide not to migrate to listings and instead continue to use the data
clean rooms, then continue to use the address fields and dataset schema from the
initial release.
Migrate to listings
The initial Preview release of Places Insights deployed data in BigQuery
data clean rooms .
With the September 4, 2025 release, we moved the datasets to BigQuery
listings
to allow you to subscribe to the dataset in a specific BigQuery
region .
This change has no impact on product features and usability of Places Insights.
In order to subscribe to Places Insights in a specific region, you will need to
subscribe to the new listings in BigQuery Sharing. Once you have subscribed to
the new listings, you don't need to modify your SQL queries. They will still
function the same.
New users: If you are a new user of Places Insights, follow the steps in
Set up Places Insights to
configure your development environment for access to the listings.
Existing users: Follow the steps below to migrate to use listings
Note: If you are an existing customer, you are not required to migrate to
listings during the Preview. However, when Places Insights goes to GA, it will
only support listings.
Migration steps
To migrate to listings you need to:
Subscribe to the listings for your chosen city and country. For
instructions, see Set up Places
Insights .
Note: When you Set up Places
Insights , set the dataset
name to use your own naming convention. If you leave the default dataset
name, it will conflict with the name of the legacy data clean room.
Update the dataset name in your queries or functions to the dataset name you
chose above.
If you previously used
functions ,
remove the project name used with data clean rooms
( maps-platform-analytics-hub ).
Modify your existing queries or functions to include your project name
(optional) and the new address fields .
Include your project name when referencing the listing (optional)
With listings, you can include your project name in the query. If you don't
specify a project name, your query will default to the active project.
You may want to include your project name if you have linked datasets with
the same name in different projects, or if you are querying a table outside of
the active project.
Example updated query with project and dataset name
This query includes a project name and uses the dataset name my_dataset_name :
SELECT WITH AGGREGATION_THRESHOLD
COUNT ( * ) AS count
FROM ` PROJECT_NAME .my_dataset_name.places`
Migrate to the new address fields
In the initial release of Places Insights, the dataset schema represented an
address field as a STRUCT or RECORD containing an id and name subfield.
This release flattens the schema to define separate, top-level fields for the
id and name . The new fields are either string or string array fields.
Note: To take advantage of the new address fields, you must migrate from data
clean rooms to listings. If you decide not to migrate to listings, continue to
use the address fields from the initial release.
For example, the schema for the locality address component for the initial
release is shown below:
locality
STRUCT
locality.id
STRING
locality.name
STRING
In this release, the dataset now contains two top-level string array fields. For
example, the updated locality data schema is shown below:
locality_ids
ARRAY<string>
locality_names
ARRAY<string>
See the full scheme reference .
Note: Not all fields are available in every country. For the specific list of
fields available for your country, see the Country-specific schema
reference .
Non-array fields
In this release, the id and name fields are now top-level STRING fields
for non-array address fields:
administrative_area_level_1_id
STRING
administrative_area_level_1_name
STRING
This new format applies to all fields in the form administrative_area_level_N ,
where N is 1 through 7.
Note: Not all administrative_area_level_N fields are available in every
country. For the specific list of fields available for your country, see the
Country-specific schema
reference .
Example using new fields
In the initial release of Places Insights, you used the
administrative_area_level_1.name field in a WHERE clause to filter the
results:
SELECT WITH AGGREGATION_THRESHOLD
COUNT ( * ) AS count
FROM ` PROJECT_NAME .places_insights___us.places`
WHERE administrative_area_level_1 . name = "New York" ;
With the new fields, you write the query using the
administrative_area_level_1_name field:
SELECT WITH AGGREGATION_THRESHOLD
COUNT ( * ) AS count
FROM ` PROJECT_NAME .places_insights___us.places`
WHERE administrative_area_level_1_name = "New York" ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

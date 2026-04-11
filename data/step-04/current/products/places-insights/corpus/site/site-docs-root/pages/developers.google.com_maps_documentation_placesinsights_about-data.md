---
title: "About Places Insights data and queries \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/placesinsights/about-data
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/placesinsights
source_metadata:
  url: https://developers.google.com/maps/documentation/placesinsights/about-data
  title: "About Places Insights data and queries \_|\_ Google for Developers"
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
About Places Insights data and queries
Stay organized with collections
Save and categorize content based on your preferences.
Places Insights data
Places Insights provides full and sample
datasets in
BigQuery.
The sample datasets are intended to allow you to try out Places Insights so
that you can assess the usability and value of the product before making a
decision to purchase the full dataset. The sample dataset only contains data for
the city itself. It does not contain data for the surrounding metropolitan area.
The sample listing includes data for a top city for each of the supported
countries:
Amsterdam (NL)
Helsinki (FI)
Plovdiv (BG)
Ankara (TR)
Hong Kong (HK)
Riffa (BH)
Arequipa (PE)
Jakarta (ID)
Rome (IT)
Athens (GR)
Jeddah (SA)
Santiago (CL)
Bad Gastein (AT)
Johannesburg (ZA)
Sao Paulo (BR)
Berlin (DE)
Kuala Lumpur (MY)
Sharjah (AE)
Brno (CZ)
Lisbon (PT)
Singapore (SG)
Brussels (BE)
London (GB)
Stockholm (SE)
Bucharest (RO)
Lusail (QA)
Sydney (AU)
Buenos Aires (AR)
Madrid (ES)
Taipei (TW)
Busan (KR)
Manila (PH)
Tel Aviv-Yafo (IL)
Cairo (EG)
Medellín (CO)
Tokyo (JP)
Chiang Mai (TH)
Mexico City (MX)
Toronto (CA)
Copenhagen (DK)
Mumbai (IN)
Warsaw (PL)
Cork (IE)
New York City (US)
Wellington (NZ)
Debrecen (HU)
Oslo (NO)
Zurich (CH)
Hanoi (VN)
Paris (FR)
The full datasets include data for each supported country and must be purchased.
If you are interested in signing up for Places Insights, fill out the request
form .
Only the data subscriber needs to request access to the Places Insights
dataset. Once the subscription is active in a BigQuery project, any user with
access to that project can query the Places Insights data.
Each country dataset has its own listing that you must subscribe to separately.
For more information on subscribing to a listing, see Set up Places
Insights .
Dataset schemas
The places dataset schema for each country is comprised of two parts:
The core schema
that is common to the datasets for all countries.
A country-specific schema
that defines schema components specific to that country.
For example, if you are working with the dataset for Spain (ES), reference both
the core schema and the ES-specific schema.
The schema for the brands dataset defines three fields:
id : The brand ID.
name : The name of the brand, such as "Hertz" or "Chase".
category : The high-level category of the brand, such as "Gas Station",
"Food and Drink", or "Lodging".
Note: Brands data is only available for the United States in the current
release.
Query Places Insights data
Places Insights offers two ways to query the datasets:
Query the dataset directly using SQL : Execute standard BigQuery SQL
queries against the dataset tables. This provides the most flexibility for
complex filtering, joining with your own data, custom analysis, and support
for additional aggregation functions beyond COUNT , such as AVG , SUM
and GROUP BY . See the
documentation .
Query the dataset using Places Count functions : Places Count functions
are predefined, optimized SQL queries that run directly in BigQuery and
simplify common data retrieval tasks. They provide more granular insights
such as returning Place IDs to look up details about individual places. See
the
documentation .
Direct queries
Querying the data directly enforces an aggregation threshold. A result is
returned only if the query aggregates at least 5 Places. For example, if your
search criteria result is a count of 0, 1, 2, 3, or 4, then the result is
omitted from the response. For example, a query for the total count of
restaurants in a given area, will only return a response if the total count is 5
or higher, otherwise no response is returned.
Places Count function queries
Places Count functions can return a list of Place IDs, which can be used to look
up individual place information using other GMP products like the Places
API and the Places UI
Kit .
Places Count functions don't enforce an aggregation threshold, but instead
enforce a minimum search area of 40.0 meters by 40.0 meters (1600 m 2 ). This means that as long as
your search query is larger than the minimum search area, you will always get a
result, including if there are 0 places matching your query.
When to query the data directly and when to use functions
Query the data directly if you don't need low result counts, if you want to get
insights beyond counts, such as AVG , SUM , or COUNTIF , or if you need to
perform more complex queries such as joining datasets.
Query using the functions if you need to know if there are a low number or zero
results, or if you need to retrieve individual place information such as place
name or address.
This table provides a detailed comparison of the differences between direct
queries and Places Count functions.
Places Count functions
Direct dataset queries
Benefits
Returns Place IDs that can be used to query other APIs.
Can return any count.
Optimized for performance and low processing cost.
Simple to use. No need to write complex queries.
Validates the input parameters and returns an error making it easier to use and debug.
Allows for complex queries such as advanced filtering and joins.
Does not enforce a minimum search area.
Supports additional aggregate functions beyond COUNT such as AVG , SUM , and GROUP BY .
Interface
Four predefined SQL functions that generate COUNT insights: single count, count per type, count per geography, count per H3 cell. A JSON_OBJECT passes arguments to the function.
Write your own SQL to run aggregation functions such as COUNT , COUNT_IF , SUM , and AVG. Additional insights can be generated using JOIN , GROUP BY , WHERE , and others.
Restrictions
Enforces a minimum search area of 40.0 meters by 40.0 meters (1600 m 2 ). A function returns a result even if the aggregation count is less than 5 as long as the minimum search area is met.
Results with counts less than 5 are omitted from the results (i.e., row is excluded).
Supported attribute filters
Places Count function filter parameters support the same as the direct query attribute filters except for:
Place id
Address components
Opening hours
EV charge options
Brands
Full schema supported.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

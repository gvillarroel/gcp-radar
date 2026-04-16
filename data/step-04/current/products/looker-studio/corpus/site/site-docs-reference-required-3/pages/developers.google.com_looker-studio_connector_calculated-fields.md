---
title: "Using calculated fields in schema \_|\_ Community Connectors \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/looker-studio/connector/calculated-fields
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/reference
source_metadata:
  url: https://developers.google.com/looker-studio/connector/calculated-fields
  title: "Using calculated fields in schema \_|\_ Community Connectors \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Using calculated fields in schema
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The formula field property enables the addition of calculated fields to your connector's schema using supported functions.
When referencing other fields within a formula, prefix their ID with a $ symbol (e.g., $fieldName ).
The Type property for calculated fields should align with the formula's output format (e.g., HYPERLINK for hyperlink formulas).
Formulas using aggregation functions require setting the aggregation property to AUTO , while those without aggregations should use NONE .
A comprehensive function list and documentation for specific functions like CASE , CAST , TODATE , and others are available for reference.
The formula field property can be used to add calculated fields to your
connector's schema.
The full list of functions that are supported in formulas can be found at
Function List . Additionally, there is further documentation for:
CASE
CAST
TODATE
HYPERLINK
IMAGE
REGEXP_EXTRACT
REGEXP_MATCH
REGEXP_REPLACE
Caution: These function names cannot be used as the ID for a field.
When referring to another field's ID in a formula, prefix it with a $ . For
example, if your field ID is t_celsius , it should be referred to as
$t_celsius in the formula.
Type for calculated fields
Type is supported for calculated fields, but the output of the formula must
match the expected format for that Type .
For example, for the formula:
"HYPERLINK($url, $description)"
The Type should be HYPERLINK .
aggregation for calculated fields
If your formula involves an aggregation, the aggregation should be set to
AUTO . Check the type column in the Function List to see if a function
returns an aggregation. If your formula does not involve an aggregation, set it
to NONE .
Formula
aggregation
"SUM($cost) / SUM($units)"
AUTO
"$cost + $units"
NONE
Examples of calculated fields in schema
function getSchema ( request ) {
var cc = DataStudioApp . createCommunityConnector ();
var fields = cc . getFields ();
var types = cc . FieldType ;
var aggregations = cc . AggregationType ;
fields . newDimension ()
. setId ( 'date' )
. setName ( 'Date' )
. setDescription ( 'Date of measurement' )
. setType ( types . YEAR_MONTH_DAY );
fields . newMetric ()
. setId ( 't_celsius' )
. setName ( 'Temperature (Celsius)' )
. setDescription ( 'Temperature in Celsius' )
. setType ( types . NUMBER )
. setAggregation ( aggregations . NONE );
fields . newMetric ()
. setId ( 't_fahrenheit' )
. setName ( 'Temperature (Fahrenheit)' )
. setDescription ( 'Temperature in Fahrenheit' )
. setFormula ( '$t_celsius / 5 * 9 + 32' )
. setType ( types . NUMBER )
. setAggregation ( aggregations . NONE );
fields . newMetric ()
. setId ( 'average_temperature (Celsius)' )
. setName ( 'Average Temperature (Celsius)' )
. setDescription ( 'Temperature in Fahrenheit' )
. setFormula ( 'AVG($t_celsius)' )
. setType ( types . NUMBER )
. setAggregation ( aggregations . AUTO );
fields . newMetric ()
. setId ( 'average_temperature (Celsius)' )
. setName ( 'Average Temperature (Celsius)' )
. setDescription ( 'Temperature in Fahrenheit' )
. setFormula ( 'AVG($t_celsius / 5 * 9 + 32)' )
. setType ( types . NUMBER )
. setAggregation ( aggregations . AUTO );
fields . newDimension ()
. setId ( 'feels_like' )
. setName ( 'Feels Like' )
. setDescription ( 'What it feels like outside.' )
. setFormula ( 'CASE WHEN $t_celsius < 0 THEN "Freezing" WHEN $t_celsius > 40 THEN "Too warm" ELSE "Not bad" END' )
. setType ( types . TEXT );
return { 'schema' : fields . build () };
}
Key Point: aggregation is set to AUTO for formulas involving aggregations,
and NONE otherwise.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]

---
title: "OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery
  title: "OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
OpsAnalyticsQuery
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
QueryBuilderConfig
JSON representation
FilterPredicate
JSON representation
OperatorType
FilterExpression
JSON representation
FieldSource
JSON representation
ProjectedField
JSON representation
FieldOperation
FunctionApplication
JSON representation
Comparator
SortOrderParameter
JSON representation
SortOrder
Describes a query that can be run in Log Analytics.
JSON representation
{
"sqlQueryText" : string ,
"queryBuilder" : {
object ( QueryBuilderConfig )
}
}
Fields
sqlQueryText
string
Optional. A Log Analytics SQL query in text format.
If both sqlQueryText and queryBuilder fields are set, then the sqlQueryText will be used, if its non-empty. At least one of the two fields must be set.
queryBuilder
object ( QueryBuilderConfig )
Optional. A query builder configuration used in Log Analytics.
If both queryBuilder and sqlQueryText fields are set, then the sqlQueryText will be used, if its non-empty. At least one of the two fields must be set.
QueryBuilderConfig
Defines a structured query configuration that can be used instead of writing raw SQL. This configuration represents the components of a SQL query (FROM, SELECT, WHERE, ORDER BY, LIMIT) and is typically converted into an executable query (e.g., BigQuery SQL) by the backend service to retrieve data for analysis or visualization.
JSON representation
{
"resourceNames" : [
string
] ,
"filter" : {
object ( FilterPredicate )
} ,
"fieldSources" : [
{
object ( FieldSource )
}
] ,
"limit" : string ,
"orderBys" : [
{
object ( SortOrderParameter )
}
] ,
"searchTerm" : string
}
Fields
resourceNames[]
string
Required. The view/resource to query. For now only a single view/resource will be sent, but there are plans to allow multiple views in the future. Marking as repeated for that purpose. Example: - "projects/123/locations/global/buckets/456/views/_Default" - "projects/123/locations/global/metricBuckets/456/views/_Default"
filter
object ( FilterPredicate )
The filter to use for the query. This equates to the WHERE clause in SQL.
fieldSources[]
object ( FieldSource )
Defines the items to include in the query result, analogous to a SQL SELECT clause.
limit
string ( int64 format)
The limit to use for the query. This equates to the LIMIT clause in SQL. A limit of 0 will be treated as not enabled.
orderBys[]
object ( SortOrderParameter )
The sort orders to use for the query. This equates to the ORDER BY clause in SQL.
searchTerm
string
The plain text search to use for the query. There is no support for multiple search terms. This uses the SEARCH functionality in BigQuery. For example, a searchTerm = 'ERROR' would result in the following SQL:
SELECT * FROM resource WHERE SEARCH( resource , 'ERROR') LIMIT 100
FilterPredicate
A filter for a query. This equates to the WHERE clause in SQL.
JSON representation
{
"operatorType" : enum ( OperatorType ) ,
"leafPredicate" : {
object ( FilterExpression )
} ,
"childPredicates" : [
{
object ( FilterPredicate )
}
]
}
Fields
operatorType
enum ( OperatorType )
The operator type for the filter. Currently there is no support for multiple levels of nesting, so this will be a single value with no joining of different operator types
leafPredicate
object ( FilterExpression )
The leaves of the filter predicate. This equates to the last leaves of the filter predicate associated with an operator.
childPredicates[]
object ( FilterPredicate )
The children of the filter predicate. This equates to the branches of the filter predicate that could contain further nested leaves.
OperatorType
Operator types available for the filter.
Enums
OPERATOR_TYPE_UNSPECIFIED
Invalid value, do not use.
AND
AND will be the default operator type.
OR
OR operator type.
LEAF
LEAF operator type.
FilterExpression
This is a leaf of the FilterPredicate. Ex: { field: jsonPayload.message.error_code, filter_value: {numeric_value: 400}, comparator: EQUAL_TO} The field will be schema field that is selected using the . annotation to display the drill down value. The value will be the user inputted text that the filter is comparing against.
JSON representation
{
"fieldSource" : {
object ( FieldSource )
} ,
"comparator" : enum ( Comparator ) ,
"isNegation" : boolean ,
// Union field filter_value can be only one of the following:
"literalValue" : value ,
"fieldSourceValue" : {
object ( FieldSource )
}
// End of list of possible types for union field filter_value .
}
Fields
fieldSource
object ( FieldSource )
Can be one of the FieldSource types: field name, alias ref, variable ref, or a literal value.
comparator
enum ( Comparator )
The comparison type to use for the filter.
isNegation
boolean
Determines if the NOT flag should be added to the comparator.
Union field filter_value . The value to use for the filter. Is the RHS of the filter. This could be the user inputted literal value that the filter is comparing against, or it could be comparing to one of the atomic field sources, or a ProjectedField. filter_value can be only one of the following:
literalValue
value ( Value format)
The Value will be used to hold user defined constants set as the Right Hand Side of the filter.
fieldSourceValue
object ( FieldSource )
The field. This will be the field that is set as the Right Hand Side of the filter.
FieldSource
A source that can be used to represent a field within various parts of a structured query, such as in SELECT, WHERE, or ORDER BY clauses.
JSON representation
{
"isJson" : boolean ,
"columnType" : string ,
"parentPath" : string ,
// Union field field_source_type can be only one of the following:
"field" : string ,
"aliasRef" : string ,
"projectedField" : {
object ( ProjectedField )
}
// End of list of possible types for union field field_source_type .
}
Fields
isJson
boolean
Whether the field is a JSON field, or has a parent that is a JSON field. This value is used to determine JSON extractions in generated SQL queries. Note that this isJson flag may be true when the columnType is not JSON if the parent is a JSON field. Ex: - A jsonPayload.message field might have isJson=true, since the 'jsonPayload' parent is of type JSON, and columnType='STRING' if the 'message' field is of type STRING.
columnType
string
The type of the selected field. This comes from the schema. Can be one of the BigQuery data types: - STRING - INT64 - FLOAT64 - BOOL - TIMESTAMP - DATE - RECORD - JSON
parentPath
string
The dot-delimited path of the parent container that holds the target field.
This path defines the structural hierarchy and is essential for correctly generating SQL when field keys contain special characters (e.g., dots or brackets).
Example: jsonPayload.labels (This points to the 'labels' object). This is an empty string if the target field is at the root level.
Union field field_source_type . The type of the source. field_source_type can be only one of the following:
field
string
The fully qualified, dot-delimited path to the selected atomic field (the leaf value). This path is used for primary selection and actions like drill-down or projection.
The path components should match the exact field names or keys as they appear in the underlying data schema. For JSON fields, this means respecting the original casing (e.g., camelCase or snake_case as present in the JSON).
To reference field names containing special characters (e.g., hyphens, spaces), enclose the individual path segment in backticks (`).
Examples: * jsonPayload.labels.message * jsonPayload.request_id * httpRequest.status * jsonPayload.\ my-custom-field`.value
* jsonPayload.`my key with spaces`.data`
aliasRef
string
The alias name for a field that has already been aliased within a different ProjectedField type elsewhere in the query model. The alias must be defined in the QueryBuilderConfig 's fieldSources list, otherwise the model is invalid.
projectedField
object ( ProjectedField )
A projected field option for when a user wants to use a field with some additional transformations such as casting or extractions.
ProjectedField
Represents a field selected in the query, analogous to an item in a SQL SELECT clause. It specifies the source field and optionally applies transformations like aggregation, casting, regex extraction, or assigns an alias. Use ProjectedField when you need more than just the raw source field name (for which you might use FieldSource directly in QueryBuilderConfig's fieldSources list if no transformations or specific operation type are needed).
JSON representation
{
"field" : string ,
"operation" : enum ( FieldOperation ) ,
"sqlAggregationFunction" : {
object ( FunctionApplication )
} ,
"alias" : string ,
"cast" : string ,
"regexExtraction" : string ,
"truncationGranularity" : string
}
Fields
field
string
The field name. This will be the field that is selected using the dot notation to display the drill down value.
operation
enum ( FieldOperation )
Specifies the role of this field (direct selection, grouping, or aggregation).
sqlAggregationFunction
object ( FunctionApplication )
The function to apply to the field.
alias
string
The alias name for the field. Valid alias examples are: - single word alias: TestAlias - numbers in an alias: Alias123 - multi word alias should be enclosed in quotes: "Test Alias" Invalid alias examples are: - alias containing keywords: WHERE, SELECT, FROM, etc. - alias starting with a number: 1stAlias
cast
string
The cast for the field. This can any SQL cast type. Examples: - STRING - CHAR - DATE - TIMESTAMP - DATETIME - INT - FLOAT
regexExtraction
string
The re2 extraction for the field. This will be used to extract the value from the field using REGEXP_EXTRACT. More information on re2 can be found here: https://github.com/google/re2/wiki/Syntax . Meta characters like +?()| will need to be escaped. Examples: - ". (autoscaler.*)$" will be converted to REGEXP_EXTRACT(JSON_VALUE(field),"request(.*(autoscaler.*)$)") in
SQL.
- "\(test_value\)$" will be converted to
REGEXP_EXTRACT(JSON_VALUE(field),"request(\(test_value\)$)") in SQL.
truncationGranularity
string
The truncation granularity when grouping by a time/date field. This will be used to truncate the field to the granularity specified. This can be either a date or a time granularity found at https://cloud.google.com/bigquery/docs/reference/standard-sql/timestamp_functions#timestamp_trunc_granularity_date and https://cloud.google.com/bigquery/docs/reference/standard-sql/timestamp_functions#timestamp_trunc_granularity_time respectively.
FieldOperation
Specifies how this field contributes to the query result, particularly regarding grouping and aggregation.
Enums
FIELD_OPERATION_UNSPECIFIED
Invalid value. Operation must be specified.
NO_SETTING
Select the field directly without grouping or aggregation. Corresponds to including the raw field (potentially with cast, regex, or alias) in the SELECT list.
GROUP_BY
Group the query results by the distinct values of this field. Corresponds to including the field (potentially truncated) in the GROUP BY clause.
AGGREGATE
Apply an aggregation function to this field across grouped results. Corresponds to applying a function like COUNT, SUM, AVG in the SELECT list. Requires sqlAggregationFunction to be set.
FunctionApplication
Defines the aggregation function to apply to this field. This message is used only when operation is set to AGGREGATE .
JSON representation
{
"type" : string ,
"parameters" : [
value
]
}
Fields
type
string
Required. Specifies the aggregation function. Use one of the following string identifiers: "average": Computes the average (AVG). Applies only to numeric values. "count": Counts the number of values (COUNT). "count-distinct": Counts the number of distinct values (COUNT DISTINCT). "count-distinct-approx": Approximates the count of distinct values (APPROX_COUNT_DISTINCT). "max": Finds the maximum value (MAX). Applies only to numeric values. "min": Finds the minimum value (MIN). Applies only to numeric values. "sum": Computes the sum (SUM). Applies only to numeric values.
parameters[]
value ( Value format)
Optional. Parameters to be applied to the aggregation. Aggregations that support or require parameters are listed above.
Comparator
The filter comparison types.
Enums
COMPARATOR_UNSPECIFIED
Invalid value, do not use.
EQUALS
The value is equal to the inputted value.
MATCHES_REGEXP
The value is equal to the inputted regex value.
GREATER_THAN
The value is greater than the inputted value.
LESS_THAN
The value is less than the inputted value.
GREATER_THAN_EQUALS
The value is greater than or equal to the inputted value.
LESS_THAN_EQUALS
The value is less than or equal to the inputted value.
IS_NULL
Requires the filter_value to be a Value type with nullValue set to true.
IN
The value is in the inputted array value.
LIKE
The value is like the inputted value.
SortOrderParameter
A sort order for a query based on a column.
JSON representation
{
"fieldSource" : {
object ( FieldSource )
} ,
"sortOrderDirection" : enum ( SortOrder )
}
Fields
fieldSource
object ( FieldSource )
The field to sort on. Can be one of the FieldSource types: field name, alias ref, variable ref, or a literal value.
sortOrderDirection
enum ( SortOrder )
The sort order to use for the query.
SortOrder
The sort order types available for the query.
Enums
SORT_ORDER_UNSPECIFIED
Invalid value, do not use.
SORT_ORDER_NONE
No sorting will be applied. This is used to determine if the query is in pass thru mode. To correctly chart a query in pass thru mode, NONE will need to be sent
SORT_ORDER_ASCENDING
The lowest-valued entries will be selected.
SORT_ORDER_DESCENDING
The highest-valued entries will be selected.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-27 UTC."],[],[]]

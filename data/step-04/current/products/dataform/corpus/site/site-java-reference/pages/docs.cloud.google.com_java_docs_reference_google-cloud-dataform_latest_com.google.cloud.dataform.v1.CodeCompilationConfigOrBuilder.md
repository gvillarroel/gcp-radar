---
title: "Interface CodeCompilationConfigOrBuilder (0.87.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CodeCompilationConfigOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CodeCompilationConfigOrBuilder
  title: "Interface CodeCompilationConfigOrBuilder (0.87.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface CodeCompilationConfigOrBuilder (0.87.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.87.0 (latest)
0.86.0
0.84.0
0.82.0
0.81.0
0.80.0
0.79.0
0.77.0
0.75.0
0.74.0
0.73.0
0.72.0
0.71.0
0.69.0
0.67.0
0.66.0
0.63.0
0.62.0
0.61.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.50.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.38.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
0.26.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.4
public interface CodeCompilationConfigOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
containsVars(String key)
public abstract boolean containsVars ( String key )
Optional. User-defined variables that are made available to project code
during compilation.
map<string, string> vars = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getAssertionSchema()
public abstract String getAssertionSchema ()
Optional. The default schema (BigQuery dataset ID) for assertions.
string assertion_schema = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The assertionSchema.
getAssertionSchemaBytes()
public abstract ByteString getAssertionSchemaBytes ()
Optional. The default schema (BigQuery dataset ID) for assertions.
string assertion_schema = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for assertionSchema.
getBuiltinAssertionNamePrefix()
public abstract String getBuiltinAssertionNamePrefix ()
Optional. The prefix to prepend to built-in assertion names.
string builtin_assertion_name_prefix = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The builtinAssertionNamePrefix.
getBuiltinAssertionNamePrefixBytes()
public abstract ByteString getBuiltinAssertionNamePrefixBytes ()
Optional. The prefix to prepend to built-in assertion names.
string builtin_assertion_name_prefix = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for builtinAssertionNamePrefix.
getDatabaseSuffix()
public abstract String getDatabaseSuffix ()
Optional. The suffix that should be appended to all database (Google Cloud
project ID) names.
string database_suffix = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The databaseSuffix.
getDatabaseSuffixBytes()
public abstract ByteString getDatabaseSuffixBytes ()
Optional. The suffix that should be appended to all database (Google Cloud
project ID) names.
string database_suffix = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for databaseSuffix.
getDefaultDatabase()
public abstract String getDefaultDatabase ()
Optional. The default database (Google Cloud project ID).
string default_database = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The defaultDatabase.
getDefaultDatabaseBytes()
public abstract ByteString getDefaultDatabaseBytes ()
Optional. The default database (Google Cloud project ID).
string default_database = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for defaultDatabase.
getDefaultLocation()
public abstract String getDefaultLocation ()
Optional. The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations:
https://cloud.google.com/bigquery/docs/locations .
string default_location = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The defaultLocation.
getDefaultLocationBytes()
public abstract ByteString getDefaultLocationBytes ()
Optional. The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations:
https://cloud.google.com/bigquery/docs/locations .
string default_location = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for defaultLocation.
getDefaultNotebookRuntimeOptions()
public abstract NotebookRuntimeOptions getDefaultNotebookRuntimeOptions ()
Optional. The default notebook runtime options.
.google.cloud.dataform.v1.NotebookRuntimeOptions default_notebook_runtime_options = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
NotebookRuntimeOptions
The defaultNotebookRuntimeOptions.
getDefaultNotebookRuntimeOptionsOrBuilder()
public abstract NotebookRuntimeOptionsOrBuilder getDefaultNotebookRuntimeOptionsOrBuilder ()
Optional. The default notebook runtime options.
.google.cloud.dataform.v1.NotebookRuntimeOptions default_notebook_runtime_options = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
NotebookRuntimeOptionsOrBuilder
getDefaultSchema()
public abstract String getDefaultSchema ()
Optional. The default schema (BigQuery dataset ID).
string default_schema = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The defaultSchema.
getDefaultSchemaBytes()
public abstract ByteString getDefaultSchemaBytes ()
Optional. The default schema (BigQuery dataset ID).
string default_schema = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for defaultSchema.
getSchemaSuffix()
public abstract String getSchemaSuffix ()
Optional. The suffix that should be appended to all schema (BigQuery
dataset ID) names.
string schema_suffix = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The schemaSuffix.
getSchemaSuffixBytes()
public abstract ByteString getSchemaSuffixBytes ()
Optional. The suffix that should be appended to all schema (BigQuery
dataset ID) names.
string schema_suffix = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for schemaSuffix.
getTablePrefix()
public abstract String getTablePrefix ()
Optional. The prefix that should be prepended to all table names.
string table_prefix = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The tablePrefix.
getTablePrefixBytes()
public abstract ByteString getTablePrefixBytes ()
Optional. The prefix that should be prepended to all table names.
string table_prefix = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for tablePrefix.
getVars() (deprecated)
public abstract Map<String , String > getVars ()
Use #getVarsMap() instead.
Returns
Type
Description
Map < String , String >
getVarsCount()
public abstract int getVarsCount ()
Optional. User-defined variables that are made available to project code
during compilation.
map<string, string> vars = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getVarsMap()
public abstract Map<String , String > getVarsMap ()
Optional. User-defined variables that are made available to project code
during compilation.
map<string, string> vars = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getVarsOrDefault(String key, String defaultValue)
public abstract String getVarsOrDefault ( String key , String defaultValue )
Optional. User-defined variables that are made available to project code
during compilation.
map<string, string> vars = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
key
String
defaultValue
String
Returns
Type
Description
String
getVarsOrThrow(String key)
public abstract String getVarsOrThrow ( String key )
Optional. User-defined variables that are made available to project code
during compilation.
map<string, string> vars = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
hasDefaultNotebookRuntimeOptions()
public abstract boolean hasDefaultNotebookRuntimeOptions ()
Optional. The default notebook runtime options.
.google.cloud.dataform.v1.NotebookRuntimeOptions default_notebook_runtime_options = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the defaultNotebookRuntimeOptions field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]

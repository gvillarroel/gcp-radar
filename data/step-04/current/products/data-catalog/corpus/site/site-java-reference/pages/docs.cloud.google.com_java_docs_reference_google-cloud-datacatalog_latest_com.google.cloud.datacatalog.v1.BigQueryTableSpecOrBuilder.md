---
title: "Interface BigQueryTableSpecOrBuilder (1.94.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1.BigQueryTableSpecOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1.BigQueryTableSpecOrBuilder
  title: "Interface BigQueryTableSpecOrBuilder (1.94.0) \_|\_ Java client libraries\
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
Interface BigQueryTableSpecOrBuilder (1.94.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.94.0 (latest)
1.93.0
1.91.0
1.89.0
1.88.0
1.87.0
1.86.0
1.84.0
1.82.0
1.81.0
1.80.0
1.79.0
1.78.0
1.76.0
1.74.0
1.73.0
1.70.0
1.69.0
1.68.0
1.66.0
1.65.0
1.64.0
1.63.0
1.62.0
1.61.0
1.60.0
1.59.0
1.58.0
1.57.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
1.49.0
1.48.0
1.47.0
1.46.0
1.45.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.38.0
1.37.0
1.36.0
1.35.0
1.34.0
1.33.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.25.0
1.24.0
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.9.5
1.8.4
1.7.2
1.6.2
1.5.4
public interface BigQueryTableSpecOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getTableSourceType()
public abstract TableSourceType getTableSourceType ()
Output only. The table source type.
.google.cloud.datacatalog.v1.TableSourceType table_source_type = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TableSourceType
The tableSourceType.
getTableSourceTypeValue()
public abstract int getTableSourceTypeValue ()
Output only. The table source type.
.google.cloud.datacatalog.v1.TableSourceType table_source_type = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The enum numeric value on the wire for tableSourceType.
getTableSpec()
public abstract TableSpec getTableSpec ()
Specification of a BigQuery table. Populated only if
the table_source_type is BIGQUERY_TABLE .
.google.cloud.datacatalog.v1.TableSpec table_spec = 3;
Returns
Type
Description
TableSpec
The tableSpec.
getTableSpecOrBuilder()
public abstract TableSpecOrBuilder getTableSpecOrBuilder ()
Specification of a BigQuery table. Populated only if
the table_source_type is BIGQUERY_TABLE .
.google.cloud.datacatalog.v1.TableSpec table_spec = 3;
Returns
Type
Description
TableSpecOrBuilder
getTypeSpecCase()
public abstract BigQueryTableSpec . TypeSpecCase getTypeSpecCase ()
Returns
Type
Description
BigQueryTableSpec.TypeSpecCase
getViewSpec()
public abstract ViewSpec getViewSpec ()
Table view specification. Populated only if
the table_source_type is BIGQUERY_VIEW .
.google.cloud.datacatalog.v1.ViewSpec view_spec = 2;
Returns
Type
Description
ViewSpec
The viewSpec.
getViewSpecOrBuilder()
public abstract ViewSpecOrBuilder getViewSpecOrBuilder ()
Table view specification. Populated only if
the table_source_type is BIGQUERY_VIEW .
.google.cloud.datacatalog.v1.ViewSpec view_spec = 2;
Returns
Type
Description
ViewSpecOrBuilder
hasTableSpec()
public abstract boolean hasTableSpec ()
Specification of a BigQuery table. Populated only if
the table_source_type is BIGQUERY_TABLE .
.google.cloud.datacatalog.v1.TableSpec table_spec = 3;
Returns
Type
Description
boolean
Whether the tableSpec field is set.
hasViewSpec()
public abstract boolean hasViewSpec ()
Table view specification. Populated only if
the table_source_type is BIGQUERY_VIEW .
.google.cloud.datacatalog.v1.ViewSpec view_spec = 2;
Returns
Type
Description
boolean
Whether the viewSpec field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]

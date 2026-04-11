---
title: "Class BuiltInMetricsConstant (6.111.1) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BuiltInMetricsConstant
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BuiltInMetricsConstant
  title: "Class BuiltInMetricsConstant (6.111.1) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class BuiltInMetricsConstant (6.111.1)
Stay organized with collections
Save and categorize content based on your preferences.
6.111.1 (latest)
6.111.0
6.108.0
6.107.0
6.103.0
6.102.1
6.101.1
6.100.0
6.99.0
6.98.1
6.97.1
6.96.1
6.95.1
6.94.0
6.93.0
6.89.0
6.88.0
6.87.0
6.86.0
6.85.0
6.83.0
6.82.0
6.80.1
6.79.0
6.77.0
6.74.1
6.72.0
6.71.0
6.69.0
6.68.0
6.66.0
6.65.1
6.62.0
6.60.0
6.58.0
6.57.0
6.56.0
6.55.0
6.54.0
6.53.0
6.52.1
6.51.0
6.50.1
6.49.0
6.25.1
6.24.0
6.23.4
6.22.0
6.21.2
6.20.0
6.19.1
6.18.0
6.17.4
6.14.1
public class BuiltInMetricsConstant
Inheritance
java.lang.Object >
BuiltInMetricsConstant
Inherited Members
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Fields
ALLOWED_EXEMPLARS_ATTRIBUTES
public static Set<String> ALLOWED_EXEMPLARS_ATTRIBUTES
Field Value
Type
Description
Set < String >
CLIENT_HASH_KEY
public static final AttributeKey<String> CLIENT_HASH_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
CLIENT_NAME_KEY
public static final AttributeKey<String> CLIENT_NAME_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
CLIENT_UID_KEY
public static final AttributeKey<String> CLIENT_UID_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
COMMON_ATTRIBUTES
public static final Set<AttributeKey> COMMON_ATTRIBUTES
Field Value
Type
Description
Set < io.opentelemetry.api.common.AttributeKey >
DATABASE_KEY
public static final AttributeKey<String> DATABASE_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
DIRECT_PATH_ENABLED_KEY
public static final AttributeKey<String> DIRECT_PATH_ENABLED_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
DIRECT_PATH_USED_KEY
public static final AttributeKey<String> DIRECT_PATH_USED_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
DP_IPV4_PREFIX
public static final String DP_IPV4_PREFIX
Field Value
Type
Description
String
DP_IPV6_PREFIX
public static final String DP_IPV6_PREFIX
Field Value
Type
Description
String
GAX_METER_NAME
public static final String GAX_METER_NAME
Field Value
Type
Description
String
GRPC_DISCONNECT_ERROR_ATTRIBUTE
public static final String GRPC_DISCONNECT_ERROR_ATTRIBUTE
Field Value
Type
Description
String
GRPC_LB_BACKEND_SERVICE_ATTRIBUTE
public static final String GRPC_LB_BACKEND_SERVICE_ATTRIBUTE
Field Value
Type
Description
String
GRPC_LB_LOCALITY_ATTRIBUTE
public static final String GRPC_LB_LOCALITY_ATTRIBUTE
Field Value
Type
Description
String
INSTANCE_CONFIG_ID_KEY
public static final AttributeKey<String> INSTANCE_CONFIG_ID_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
INSTANCE_ID_KEY
public static final AttributeKey<String> INSTANCE_ID_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
LOCATION_ID_KEY
public static final AttributeKey<String> LOCATION_ID_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
METER_NAME
public static final String METER_NAME
Field Value
Type
Description
String
METHOD_KEY
public static final AttributeKey<String> METHOD_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
PROJECT_ID_KEY
public static final AttributeKey<String> PROJECT_ID_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
REQUEST_ID_KEY
public static final AttributeKey<String> REQUEST_ID_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
SPANNER_METRICS
public static final Set<String> SPANNER_METRICS
Field Value
Type
Description
Set < String >
SPANNER_PROMOTED_RESOURCE_LABELS
public static final Set<AttributeKey<String> > SPANNER_PROMOTED_RESOURCE_LABELS
Field Value
Type
Description
Set < io.opentelemetry.api.common.AttributeKey < String >>
SPANNER_RESOURCE_TYPE
public static final String SPANNER_RESOURCE_TYPE
Field Value
Type
Description
String
STATUS_KEY
public static final AttributeKey<String> STATUS_KEY
Field Value
Type
Description
io.opentelemetry.api.common.AttributeKey < String >
Constructors
BuiltInMetricsConstant()
public BuiltInMetricsConstant ()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]

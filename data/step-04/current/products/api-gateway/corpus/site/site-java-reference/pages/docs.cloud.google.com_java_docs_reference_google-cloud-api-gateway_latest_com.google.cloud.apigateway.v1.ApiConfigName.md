---
title: "Class ApiConfigName (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfigName
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfigName
  title: "Class ApiConfigName (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class ApiConfigName (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
2.81.0
2.80.0
2.78.0
2.76.0
2.75.0
2.74.0
2.73.0
2.72.0
2.70.0
2.68.0
2.67.0
2.64.0
2.63.0
2.62.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.7
2.2.1
2.1.12
public class ApiConfigName implements ResourceName
Inheritance
Object >
ApiConfigName
Implements
com.google.api.resourcenames.ResourceName
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
Static Methods
format(String project, String api, String apiConfig)
public static String format ( String project , String api , String apiConfig )
Parameters
Name
Description
project
String
api
String
apiConfig
String
Returns
Type
Description
String
isParsableFrom(String formattedString)
public static boolean isParsableFrom ( String formattedString )
Parameter
Name
Description
formattedString
String
Returns
Type
Description
boolean
newBuilder()
public static ApiConfigName . Builder newBuilder ()
Returns
Type
Description
ApiConfigName.Builder
of(String project, String api, String apiConfig)
public static ApiConfigName of ( String project , String api , String apiConfig )
Parameters
Name
Description
project
String
api
String
apiConfig
String
Returns
Type
Description
ApiConfigName
parse(String formattedString)
public static ApiConfigName parse ( String formattedString )
Parameter
Name
Description
formattedString
String
Returns
Type
Description
ApiConfigName
parseList(List<String> formattedStrings)
public static List<ApiConfigName> parseList ( List<String> formattedStrings )
Parameter
Name
Description
formattedStrings
List < String >
Returns
Type
Description
List < ApiConfigName >
toStringList(List<ApiConfigName> values)
public static List<String> toStringList ( List<ApiConfigName> values )
Parameter
Name
Description
values
List < ApiConfigName >
Returns
Type
Description
List < String >
Constructors
ApiConfigName() (deprecated)
protected ApiConfigName ()
Methods
equals(Object o)
public boolean equals ( Object o )
Parameter
Name
Description
o
Object
Returns
Type
Description
boolean
Overrides
Object.equals(Object)
getApi()
public String getApi ()
Returns
Type
Description
String
getApiConfig()
public String getApiConfig ()
Returns
Type
Description
String
getFieldValue(String fieldName)
public String getFieldValue ( String fieldName )
Parameter
Name
Description
fieldName
String
Returns
Type
Description
String
getFieldValuesMap()
public Map<String , String > getFieldValuesMap ()
Returns
Type
Description
Map < String , String >
getProject()
public String getProject ()
Returns
Type
Description
String
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
toBuilder()
public ApiConfigName . Builder toBuilder ()
Returns
Type
Description
ApiConfigName.Builder
toString()
public String toString ()
Returns
Type
Description
String
Overrides
Object.toString()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]

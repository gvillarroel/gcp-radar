---
title: "Class AccountConnectorName (0.45.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1.AccountConnectorName
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1.AccountConnectorName
  title: "Class AccountConnectorName (0.45.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class AccountConnectorName (0.45.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.45.0 (latest)
0.44.0
0.42.0
0.40.0
0.39.0
0.38.0
0.37.0
0.35.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.27.0
0.25.0
0.24.0
0.21.0
0.20.0
0.19.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
public class AccountConnectorName implements ResourceName
Inheritance
Object >
AccountConnectorName
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
format(String project, String location, String accountConnector)
public static String format ( String project , String location , String accountConnector )
Parameters
Name
Description
project
String
location
String
accountConnector
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
public static AccountConnectorName . Builder newBuilder ()
Returns
Type
Description
AccountConnectorName.Builder
of(String project, String location, String accountConnector)
public static AccountConnectorName of ( String project , String location , String accountConnector )
Parameters
Name
Description
project
String
location
String
accountConnector
String
Returns
Type
Description
AccountConnectorName
parse(String formattedString)
public static AccountConnectorName parse ( String formattedString )
Parameter
Name
Description
formattedString
String
Returns
Type
Description
AccountConnectorName
parseList(List<String> formattedStrings)
public static List<AccountConnectorName> parseList ( List<String> formattedStrings )
Parameter
Name
Description
formattedStrings
List < String >
Returns
Type
Description
List < AccountConnectorName >
toStringList(List<AccountConnectorName> values)
public static List<String> toStringList ( List<AccountConnectorName> values )
Parameter
Name
Description
values
List < AccountConnectorName >
Returns
Type
Description
List < String >
Constructors
AccountConnectorName() (deprecated)
protected AccountConnectorName ()
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
getAccountConnector()
public String getAccountConnector ()
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
getLocation()
public String getLocation ()
Returns
Type
Description
String
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
public AccountConnectorName . Builder toBuilder ()
Returns
Type
Description
AccountConnectorName.Builder
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
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]

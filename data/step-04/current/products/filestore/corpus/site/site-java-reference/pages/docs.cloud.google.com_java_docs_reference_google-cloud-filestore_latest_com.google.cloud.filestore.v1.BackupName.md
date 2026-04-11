---
title: "Class BackupName (1.89.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.BackupName
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.BackupName
  title: "Class BackupName (1.89.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class BackupName (1.89.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.89.0 (latest)
1.88.0
1.86.0
1.84.0
1.83.0
1.82.0
1.81.0
1.79.0
1.77.0
1.76.0
1.75.0
1.74.0
1.73.0
1.71.0
1.69.0
1.68.0
1.65.0
1.64.0
1.63.0
1.61.0
1.60.0
1.59.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.50.0
1.49.0
1.48.0
1.47.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.38.0
1.37.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.25.0
1.24.0
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.10.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.2.0
public class BackupName implements ResourceName
Inheritance
Object >
BackupName
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
format(String project, String location, String backup)
public static String format ( String project , String location , String backup )
Parameters
Name
Description
project
String
location
String
backup
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
public static BackupName . Builder newBuilder ()
Returns
Type
Description
BackupName.Builder
of(String project, String location, String backup)
public static BackupName of ( String project , String location , String backup )
Parameters
Name
Description
project
String
location
String
backup
String
Returns
Type
Description
BackupName
parse(String formattedString)
public static BackupName parse ( String formattedString )
Parameter
Name
Description
formattedString
String
Returns
Type
Description
BackupName
parseList(List<String> formattedStrings)
public static List<BackupName> parseList ( List<String> formattedStrings )
Parameter
Name
Description
formattedStrings
List < String >
Returns
Type
Description
List < BackupName >
toStringList(List<BackupName> values)
public static List<String> toStringList ( List<BackupName> values )
Parameter
Name
Description
values
List < BackupName >
Returns
Type
Description
List < String >
Constructors
BackupName() (deprecated)
protected BackupName ()
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
getBackup()
public String getBackup ()
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
public BackupName . Builder toBuilder ()
Returns
Type
Description
BackupName.Builder
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
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

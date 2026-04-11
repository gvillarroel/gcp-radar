---
title: "Class Instrumentation (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Instrumentation
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Instrumentation
  title: "Class Instrumentation (3.29.0) \_|\_ Java client libraries \_|\_ Google\
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
Class Instrumentation (3.29.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.29.0 (latest)
3.28.0
3.26.0
3.24.0
3.23.10
3.22.6
3.21.4
3.20.7
3.19.0
3.18.0
3.17.2
3.16.2
3.15.17
3.14.9
3.13.7
3.12.1
3.11.10
3.10.7
3.9.0
3.8.0
3.7.6
3.6.4
3.5.3
public final class Instrumentation
Inheritance
java.lang.Object >
Instrumentation
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
DEFAULT_INSTRUMENTATION_VERSION
public static final String DEFAULT_INSTRUMENTATION_VERSION
Field Value
Type
Description
String
DIAGNOSTIC_INFO_KEY
public static final String DIAGNOSTIC_INFO_KEY
Field Value
Type
Description
String
INSTRUMENTATION_LOG_NAME
public static final String INSTRUMENTATION_LOG_NAME
Field Value
Type
Description
String
INSTRUMENTATION_NAME_KEY
public static final String INSTRUMENTATION_NAME_KEY
Field Value
Type
Description
String
INSTRUMENTATION_SOURCE_KEY
public static final String INSTRUMENTATION_SOURCE_KEY
Field Value
Type
Description
String
INSTRUMENTATION_VERSION_KEY
public static final String INSTRUMENTATION_VERSION_KEY
Field Value
Type
Description
String
JAVA_LIBRARY_NAME_PREFIX
public static final String JAVA_LIBRARY_NAME_PREFIX
Field Value
Type
Description
String
MAX_DIAGNOSTIC_ENTIES
public static final int MAX_DIAGNOSTIC_ENTIES
Field Value
Type
Description
int
MAX_DIAGNOSTIC_VALUE_LENGTH
public static final int MAX_DIAGNOSTIC_VALUE_LENGTH
Field Value
Type
Description
int
Static Methods
addPartialSuccessOption(Logging.WriteOption[] options)
public static Logging . WriteOption [] addPartialSuccessOption ( Logging . WriteOption [] options )
Adds a partialSuccess flag option to array of WriteOption
Parameter
Name
Description
options
WriteOption [] {WriteOption[]} The options array to be extended
Returns
Type
Description
WriteOption []
The new array of oprions containing WriteOption.OptionType.PARTIAL_SUCCESS flag set to
true
createDiagnosticEntry(String libraryName, String libraryVersion)
public static LogEntry createDiagnosticEntry ( String libraryName , String libraryVersion )
The helper method to generate a log entry with diagnostic instrumentation data.
Parameters
Name
Description
libraryName
String {string} The name of the logging library to be reported. Should be prefixed
with 'java'. Will be truncated if longer than 14 characters.
libraryVersion
String {string} The version of the logging library to be reported. Will be
truncated if longer than 14 characters.
Returns
Type
Description
LogEntry
{LogEntry} The entry with diagnostic instrumentation data.
getLibraryVersion(Class<?> libraryClass)
public static String getLibraryVersion ( Class < ? > libraryClass )
Returns a library version associated with given class
Parameter
Name
Description
libraryClass
Class < ? > The class to be used to determine a library version
Returns
Type
Description
String
The version number string for given class or DEFAULT_INSTRUMENTATION_VERSION if class
library version cannot be detected
populateInstrumentationInfo(Iterable<LogEntry> logEntries)
public static Tuple<Boolean , Iterable<LogEntry> > populateInstrumentationInfo ( Iterable<LogEntry> logEntries )
Populates entries with instrumentation info which is added in separate log entry
Parameter
Name
Description
logEntries
Iterable < LogEntry > Iterable<LogEntry> The list of entries to be populated
Returns
Type
Description
com.google.cloud.Tuple < Boolean , Iterable < LogEntry >>
Tuple<Boolean, Iterable<LogEntry>> containing a flag if instrumentation info
was added or not and a modified list of log entries
truncateValue(String value)
public static String truncateValue ( String value )
Trancates given string to MAX_DIAGNOSTIC_VALUE_LENGTH and adds "*" instead of reduced suffix
Parameter
Name
Description
value
String {String} Value to be truncated
Returns
Type
Description
String
The truncated string
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

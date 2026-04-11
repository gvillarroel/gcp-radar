---
title: "Macros and macro functions \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/concepts/macros
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/concepts/macros
  title: "Macros and macro functions \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Guides
Send feedback
Macros and macro functions
Stay organized with collections
Save and categorize content based on your preferences.
Macros are placeholders within the Cloud Data Fusion plugin property
configurations. They're represented by variables enclosed within ${ } , such as
${input_file_path} . To enable dynamic configuration for elements, such as file
paths and table names, the placeholders are replaced with actual values at
runtime.
When viewing a plugin's properties, you can add a macro to any property field
that has an M next to it. To add the macro, click the M .
For more information, see Manage macros, preferences, and runtime arguments .
Macro functions
In addition to macros, you can use the following predefined macro functions:
logicalStartTime()
secure()
Logical Start Time function
The logicalStartTime() macro function returns the logical start time of a run
of the pipeline as a string value.
If no parameters are supplied, it returns the start time in milliseconds. All
parameters are optional. The function takes a time format, an offset, and a
timezone as arguments and uses the logical start time of a pipeline to perform
the substitution:
${ logicalStartTime ([ timeFormat [, offset [, timezone ]) }
The following list shows the optional parameters for logicalStartTime() :
Parameter
Description
timeFormat
The time format pattern, in the format of a Java SimpleDateFormat .
offset
Time offset before the logical start time.
timezone
Timezone to be used for the logical start time.
Example
In this example, the logical start time of a pipeline run is
2020-01-01T00:00:00 and you provide the following macro:
${ logicalStartTime ( yyyy - MM - dd 'T' HH - mm - ss , 1 d - 4 h + 30 m ) }
The format is yyyy-MM-dd'T'HH-mm-ss and the offset is 1d-4h+30m before the
logical start time. At runtime, the macro value is replaced with
2019-12-31T03:30:00 because the offset translates to 20.5 hours. The entire
macro evaluates to 20.5 hours before midnight of January 1, 2020.
Note: logicalStartTime is case sensitive. For example, if you enter
${logicalstarttime()} , the pipeline fails. You must type
${logicalStartTime()} .
Using logicalStartTime() in file-based plugins
The most common way to use this function is in the Path field in file-based
plugins.
Including the pipeline start time in milliseconds in a filename
To capture the actual start time in milliseconds in a filename, omit parameters
in the macro function.
Example
In this example, you include the pipeline start time, in milliseconds, in an
Amazon S3 filename:
sales_012345671011.csv
In the Amazon S3 sink properties, enter the following value in the Path
field:
s3a://sales-data/sales_ ${ logicalStartTime () } .csv
Including the today's date in a filename
You can use the logicalStartTime() macro function in a filename to capture the
current date.
Example
In this example, you capture today's date in the following S3 filename:
s3a://sales-data/sales_20210204.csv
In the Amazon S3 sink properties, enter the following value in the Path
field:
s3a://sales-data/sales_ ${ logicalStartTime ( yyyyMMdd ) } .csv
Using logicalStartTime to add a Timestamp field to structured records
You can add timestamp to a structured record using the Add Field
transformation and logicalStartTime() .
Get the Field Adder Transform plugin from Cloud Data Fusion Hub.
After you deploy the plugin, it appears in the Transform list as Add
Field .
When you configure the plugin properties, add the timestamp to a structured
record—for example, for the field name, enter the name of the new
field and for the field value, enter the logicalStartTime() macro
function.
Secure function
The secure() macro function takes in a single key as an argument and looks up
the key's associated string value from the Secure Store .
To perform the substitution, the key provided as an argument must already
exist in the Secure Store. This is useful for performing a substitution with
sensitive data.
Example
In this example, for a plugin that connects to a MySQL database, you configure
the password property field with the following value:
${ secure ( password ) }
This macro pulls the password from the Secure Store at runtime.
Recursive macros
Macros can recursively refer to other macros up to ten levels. Macro
arguments are evaluated from the innermost to the outermost argument.
Example
In this example, you have a server that refers to a hostname and a port. You
supply the following runtime arguments, the last of which is a macro that refers
to other macros:
hostname : examplepetstore.com
port : 9991
server-address : ${hostname}:${port}
In a pipeline configuration, you use the following expression:
server-address: ${ server - address }
At runtime, it's replaced with the following value:
examplepetstore.com:9991
What's next
Learn more about macros, preferences, and runtime arguments .
Learn how to use plugin templates .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]

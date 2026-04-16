---
title: "Overridable config parameters \_|\_ Community Connectors \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/looker-studio/connector/data-source-parameters
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector
source_metadata:
  url: https://developers.google.com/looker-studio/connector/data-source-parameters
  title: "Overridable config parameters \_|\_ Community Connectors \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Overridable config parameters
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Overridable config parameters allow report editors to modify default values in a data source, enhancing flexibility and enabling user-configurable report templates.
Connector developers define overridable parameters using setAllowOverride(true) in the getConfig() function, while data source owners control which parameters report editors can modify.
Report editors can further control which parameters report viewers can modify through the report URL, enabling dynamic adjustments by viewers.
Parameter values are set via report properties panel or report URL, with URL parameters overriding report and default values, and report properties overriding defaults.
Avoid defining parameters as overridable when they impact the schema or involve sensitive data to prevent report breakage and unauthorized access.
Overridable config parameters provide the option to let report editors modify
default values in a data source. Defining config parameters as overridable makes
a data source more flexible, and gives users a way to create user-configurable
report templates.
For example, a connector providing weather data could include a location
parameter that lets report viewers request a weather report from a locale
different than the default.
This document describes how overridable parameters are defined, enabled for
modification, and how parameter values can be modified by report users. To learn
more about how parameters are used in Looker Studio see
Data source parameters .
Roles
The user roles referenced throughout the document:
Role
Definition
Connector developer
A user that has built a community connector .
Data source owner
A user that created and owns a data source .
Report editor
A user with edit mode access to a report .
Report viewer
A user with view mode access to a report .
Defining overridable parameters
The connector developer defines config parameters in the
getConfig() function of a
community connector. To define a config parameter as overridable the connector
calls setAllowOverride(true) .
Note: Parameters can also be defined as part of a BigQuery custom query .
The following example defines 2 overridable parameters: zipcode and units
and 1 parameter that is not overridable: days-to-forcecast .
function getConfig ( request ) {
var config = cc . getConfig ();
// A
config
. newTextInput ()
. setId ( "zipcode" )
. setName ( "ZIP Code" )
. setAllowOverride ( true );
// B
config
. newSelectSingle ()
. setId ( "units" )
. setName ( "Units" )
. addOption (
config
. newOptionBuilder ()
. setLabel ( "Metric" )
. setValue ( "metric" )
)
. addOption (
config
. newOptionBuilder ()
. setLabel ( "Imperial" )
. setValue ( "imperial" )
)
. setAllowOverride ( true );
// C
config
. newTextInput ()
. setId ( "days-to-forecast" )
. setName ( "Days to forecast" )
. setAllowOverride ( false );
return config . build ();
}
Note: The default value for allowOverride is false . If you do not want to
enable overriding for a parameter, you can omit the call to
setAllowOverride() .
When to avoid defining a parameter as overridable
It is recommended to learn how Connectors, Data Sources, and Reports work in
relation to each other by reviewing How Looker Studio connects to your data .
Avoid defining a parameter as overridable in the following cases:
When the value of a parameter affects the schema.
If a user changes a parameter value and the schema of the new data
returned is different than defined in the data source, any report
dependent on the data source could break because of missing fields.
If a parameter value controls sensitive data. E.g. Account selection.
Do not define a parameter as overridable if you want to prevent
unintentional viewing or sharing of sensitive data.
Enabling parameters for report users
Data source owners control which overridable parameters are allowed to be
modified by report editors . Similarly, report editors control which
parameters can be modified by report viewers .
Allow report editors to modify parameters values
The data source owner controls which parameters are allowed to be modified in
reports. This is configured during creation or editing of a data source and is
applicable only to parameters that have been
defined as overridable by the Connector
developer . If enabled then report editors will be able to
Modify parameters in a report .
In the following example, a connector has 2 parameters defined as overridable:
zipcode and units . The data source owner has only allowed zipcode to be
modified in reports. In the report, the report editor has the option to modify
the zipcode parameter value.
Allow report viewers to modify parameters values
Report editors control which parameters can be modified by report viewers .
The parameter values can then be modified through the report URL by any viewer
of the report.
Note: A report editor's control over allowing parameters to be modified is
limited to the parameters allowed by the data source owner .
For example, consider a connector that has 2 parameters defined as overridable:
zipcode and units (figure 1). If the data source owner has allowed
zipcode to be modified in reports (figure 2) then report editors will only
be capable of allowing zipcode to be modified by report viewers . The report
editor will not have access or visibility to allow the units parameter to be
modified by report viewers.
Figure 1 : Connector config.
Figure 2 : Manage parameters.
Warning: Report viewers will be able to access any data that is controlled by
parameters. To avoid unintentionally sharing sensitive data, review and confirm
that data source and data source credentials are configured
correctly before allowing a parameter to be modified. If a parameter enables
access to sensitive data consider using viewer's credentials to
ensure report viewer's can only see their data.
URL parameters
To allow report viewers to edit parameter values through the report URL:
Edit the report.
Select Resource -> Manage report parameters .
Use the Allow to be modified in the report URL checkboxes to allow or
disallow modification of parameter values in the report URL. Changes are
automatically saved.
Click Close in the upper right.
Modifying parameter values
Report editors can modify parameter values using the report properties panel
while report viewers can modify parameter values through the report URL.
Report properties panel
To learn how a report editor can set parameter values, see
Modify parameters in a report .
Report URL parameters
For parameters that are
allowed to be modified in the report URL , values can be
set through a URL-encoded JSON object appended to the report URL in view mode .
To create a URL config:
Gather parameter names
Edit the report.
Select Resource -> Manage report parameters .
Note the name of the parameters you intend to set through the report
URL.
For example, in the figure below the parameter name is ds0.zipcode .
Create the parameter object
Parameters are defined via a JSON object. The keys for the parameter values
are the parameter names.
{
"parameterName" : parame ter Value
}
Parameter value types are one of STRING , NUMBER , or BOOLEAN . For
parameters that accept multiple values (i.e. Multi-select dropdowns) use an
array of values.
For example, if the parameter name is ds0.zipcode , to set ZIP Code to
94094 , the JSON is as follows:
{
"ds0.zipcode" : "94094"
}
URL Encode the parameter object
After you create the parameter object, use JSON.stringify() to turn it
into a string, then use [encodeURIComponent] to URL encode it.
var params = {
"ds0.zipcode" : "94094"
};
var paramsAsString = JSON . stringify ( params );
var encodedParams = encodeURIComponent ( paramsAsString )
This results in the following encoded string:
"%7B%22ds0.zipcode%22%3A%2294094%22%7D"
Build the report URL
Once you have the URL encoded parameter object, append it to the report view
URL using the params query parameter.
https://lookerstudio.google.com/reporting/ REPORT_ID /page/ PAGE_ID ?params=%7B%22ds0.zipcode%22%3A%2294094%22%7D
Make sure you replace REPORT_ID and PAGE_ID with the values for your
report and page.
Use the URL
The report URL will override parameters as defined in the JSON parameters
object based on Parameter inheritance .
Parameter object example
The following parameter object shows how to set multiple parameters. It also
illustrates setting parameter values for the different input types.
ds0.includeToday is a checkbox input
ds0.units is a single select input
ds1.countries is a multi-select input
ds1.labelName is a text input.
{
"ds0.includeToday" : true ,
"ds0.units" : "Metric" ,
"ds1.countries" : [ "Canada" , "Mexico" ],
"ds1.labelName" : "Population"
}
Parameter inheritance
The value used for a parameter follows an order of precedence based on where the
parameter is set. Parameters set at higher precedence locations override
parameters set at lower precedence locations. The order of precedence (from
lowest to highest) is:
Data source (default)
Report URL
Report properties panel, following the data source
parameter inheritance rules.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-06 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-06 UTC."],[],[]]

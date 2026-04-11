---
title: "Linking API \_|\_ Integrate and share \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/integrate/linking-api
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/looker-studio
source_metadata:
  url: https://developers.google.com/looker-studio/integrate/linking-api
  title: "Linking API \_|\_ Integrate and share \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Integrate
Linking API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Looker Studio Linking API enables the creation of dynamic URLs that link to pre-configured reports, streamlining user access and data interaction.
It allows developers to define data sources, control report behavior, and customize settings through URL parameters, supporting connectors like BigQuery, Looker, and more.
The API offers flexibility in configuring data sources, allowing complete replacement or partial updates based on specific parameters, enhancing template reusability.
Users can seamlessly access reports with a single click, interact with the data, and even save personalized copies to their Looker Studio accounts.
Comprehensive documentation and examples are provided to facilitate API implementation and troubleshooting, covering data source configurations, report embedding, and permissions management.
Introduction
The Linking API provides a reliable interface to configure and forward users
directly to a Looker Studio report via a URL. When users follow a Linking API
URL they will have a streamlined experience to quickly view and interact with
their data.
This document describes the required format of Linking API URLs and the
available parameters.
Use case and benefits
The Linking API can be used to provide pre-configured reports for your customers
to view and interact with their data. Key benefits of the Linking API are as
follows:
A one-click report creation experience for your customers .
The data configuration is provided in the URL so users don't need to
configure the report for their data.
Users can save the report with a single click and revisit the report at
any time.
Create reports at scale . The Linking API reduces the time required to
duplicate or create new reports.
Enable product integrations . The stable interface allows you to
integrate Looker Studio into a product workflow.
How it works
The following describes how developers and users interact with the Linking API.
Linking API developer workflow
The developer prepares the template reports, data sources, and formats a Linking
API URL. The typical workflow for developers is as follows:
Decide whether to use a blank report, the default report template provided
by Looker Studio or create a Looker Studio report that will serve as a
template. This includes configuring the template data sources.
Format a Linking API URL for your specific use case. If applicable, specify
the report template and other parameters, including the report name, data
source name and data source configurations.
Use the Linking API URL to direct users to the report.
Linking API user experience
The user follows a Linking API URL, that if configured correctly by the
developer, will direct them to a Looker Studio report that allows them to view
and interact with data they have access to. A typical user experience may be as
follows:
In a browser, the user visits a service that has integrated with the Linking
API.
A call to action invites the user to click a link to view their data in
Looker Studio.
The user follows the link and is directed to a Looker Studio report. The
report loads and the user is able to view and interact with their data.
The user clicks “Edit and share”. The report is saved to their Looker Studio
account.
The user now has full access and control over their own copy of the report.
They can view, edit and share at any time.
Requirements
To ensure a Linking API URL works as expected, the following is required:
A report, to serve as a template. If not provided then a blank report or
default report, provided by Looker Studio, can be used.
Users of a Linking API URL must have, at a minimum, view access to the
template report. Depending on the type of data sources used in the report
and the configuration provided via the Linking API, users may also require
view access to data sources. See Template permissions for
details.
The Connector type of each data source must support configuration via the
Linking API. Refer to the Connector reference for a list of supported
connectors.
Users of the Linking API URL must have access to the data configured in the
Linking API URL. If the user does not have access to the underlying data,
any dependent report components will show an error.
Note: The Linking API doesn't alter existing data access, sharing settings or
the original report template and data source configurations.
URL parameters
A Linking API URL must be of the following form:
https://lookerstudio.google.com/reporting/create? parameters
The URL is expected to be used in the context of a web browser, typically by a
user clicking on a link or being redirected to the URL. It can also be used to
Embed a report .
Example URL
The following is an example Linking API URL. The report name is set and a single
BigQuery data source is configured:
https : //lookerstudio.google.com/reporting/create?
c . reportId = 12345
& r . reportName = MyNewReport
& ds . ds0 . connector = bigQuery
& ds . ds0 . datasourceName = MyNewDataSource
& ds . ds0 . projectId = project - 1234
& ds . ds0 . type = TABLE
& ds . ds0 . datasetId = 456
& ds . ds0 . tableId = 789
Note: It is recommended to URL-encode parameters. For details on building a
valid URL see URL Encoding .
Certain URL parameters are required, while some are optional. The following is a
list of parameters used to define a Linking API URL:
Control parameters
Control parameters determine the state of the report when viewed via the Linking
API URL.
Parameter name
Description
c.reportId
link
Optional. The template Report ID. Looker Studio will open and configure
the report specified. For details on how to find the ID, see
Report ID . If unspecified, a blank report or
default report template is used, see Use a
blank or default report for details.
c.pageId
link
Optional. The ID of the initial page to load in the report. Defaults to
the first page of the report if unspecified, .
c.mode
link
Optional. The initial report mode. One of
view or
edit . Defaults to view if unspecified.
c.explain
link
Optional. The visibility of the info/debug dialog. Set to
true to show the dialog button. Defaults to
false if unspecified. See
Troubleshooting configuration issues to learn more.
Example
https : //lookerstudio.google.com/reporting/create?
c . reportId = 12345
& c . pageId = g7u8s9
& c . mode = edit
& r . reportName = MyNewReport
& ds . ds0 . datasourceName = MyNewDataSource
& ds . ds0 . connector = bigQuery
& ds . ds0 . projectId = project - 1234
& ds . ds0 . type = TABLE
& ds . ds0 . datasetId = 456
& ds . ds0 . tableId = 789
Report parameters
Report parameters override report properties.
Parameter name
Description
r.reportName
link
Optional. Sets the report name. If unspecified, defaults to the
template report name.
r.measurementId
link
Optional. Sets the Google Analytics Measurement IDs to
Measure
report usage . Use a comma to separate multiple IDs.
If r.measurementId and r.keepMeasurementId
are unspecified, the Google Analytics Measurement IDs report
setting defaults to unset. If r.measurementId and
r.keepMeasurementId are set, r.keepMeasurementId
takes precedence to set the ID.
r.keepMeasurementId
link
Optional. Set to true to use the template report
Google Analytics Measurement IDs . Defaults to false
if unspecified.
If r.measurementId and r.keepMeasurementId
are unspecified, the Google Analytics Measurement IDs report
setting defaults to unset. If r.measurementId and
r.keepMeasurementId are set, r.keepMeasurementId
takes precedence to set the ID.
Example
https : //lookerstudio.google.com/reporting/create?
c . reportId = 12345
& r . reportName = MyNewReport
& r . measurementId = G - XXXXXXXXXX
& ds . ds0 . datasourceName = MyNewDataSource
& ds . ds0 . connector = bigQuery
& ds . ds0 . projectId = project - 1234
& ds . ds0 . type = TABLE
& ds . ds0 . datasetId = 456
& ds . ds0 . tableId = 789
Data source parameters
Data source parameters allow you to define a data source configuration and the
data to access for data sources in the template report.
An alias is used to reference a data source in an existing report. Using an
alias allows for backwards compatibility if a data source is added/removed from
the template report.
For details on how to find a data source alias , see Data source alias .
Note: If the template report contains a single data source, a data source alias
is not strictly required. However, specifying the alias is recommended to help
disambiguate data source configurations when inspecting a Linking API URL and
associated data sources.
Data source parameters
The following parameters are common across all connector types:
Name
Description
ds. alias .datasourceName
link
Optional. Sets the name of the data source.
If ds.datasourceName and
ds.keepDatasourceName are unspecified, the data source name
defaults to a naming convention that includes the connector type and the
time of creation (e.g. samples - 12/12/21, 10:53 PM ). If
ds.datasourceName and ds.keepDatasourceName are
set, ds.datasourceName takes precedence to set the data
source name.
ds. alias .keepDatasourceName
link
Optional. Set to true to use the template data source
name. Defaults to false if unspecified.
If ds.datasourceName and
ds.keepDatasourceName are unspecified, the data source name
defaults to a naming convention that includes the connector type and the
time of creation (e.g. samples - 12/12/21, 10:53 PM ). If
ds.datasourceName and ds.keepDatasourceName are
set, ds.datasourceName takes precedence to set the data
source name.
ds. alias .connector
link
Optional.
The connector type of the data source. For more information on
supported connector types, see the Connector
reference .
If set then all required
connector parameters for the connector type must be specified in the
Linking API URL and the template data source configuration will be
replaced in its entirety.
If unspecified, then zero or more
connector parameters for the connector type can be specified in the
Linking API URL. The template data source configuration will be used to
specify any parameters not provided in the Linking API URL. For details
on how to identify the connector type of the template data source, see
Connector type .
To learn more about how the ds.connector parameter affects
whether a template data source configuration is replaced in its entirety
or used to update unspecified parameters, see
Replace vs update .
ds. alias .refreshFields
link
Optional.
Set to true to use the data source configuration
specified via the Linking API to
refresh
data source fields and update report components with new field
selections. true is typically
specified when switching the connector type or
for connector types where a configuration change yields different fields
(e.g. fields for BigQuery data sources often change with different table
configurations).
Set to false to leave the data source fields
unchanged from the template report. false is typically
specified when the new data configuration yields the exact same fields
and you would prefer to maintain any field changes you've made to the
template data source.
If unspecified, defaults vary by connector type. Review the
Connector reference for connector specific
defaults in case you want to override the default behavior.
Considerations when using refreshFields :
If refreshFields is set to false and the
data source configuration specified via the Linking API yields
different fields from what's used in the template report, the user
will likely see a configuration error for the affected components.
Changes to fields in the template data source (e.g. name, type,
aggregation, etc.) do not carry-over to new data sources when
refreshFields is set to true . Set
refreshFields to false to maintain field
configurations from the template data source.
Calculated fields and
Parameters defined in template data sources will always be copied
to newly created data sources and are not affected by the value of
refreshFields .
ds. alias .connectorParameters
link
Required . The data source configuration for the
connector type . For details on how to identify
the connector used to create a data source, see
Connector type . For details on the data
source parameters available for each connector type, see the
Connector reference .
Replace vs update - Data source configurations
When setting data source parameters, the presence or omission of the
ds.connector parameter in the Linking API URL indicates the
intention to replace or update the template data source configuration,
respectively.
The following table details how the ds.connector parameter affects whether a
template data source configuration is replaced in its entirety or used to update
unspecified parameters:
Is ds.connector set?
Expected configuration and behavior
Typical use
Yes
Replace . The template data source configuration is replaced in its
entirety, using the data source parameters specified in the Linking
API URL. You must specify all required parameters for the
connector type. See Required parameters when
ds.connector is set .
When changing the connector type of a data source. E.g. If you
configured a BigQuery data source in the template report but want to
configure a Sheets data source via the Linking API. This will require
a new connector configuration to be defined in its entirety.
When you want to guarantee the configuration of a data source.
Replacing the configuration avoids any unknown values potentially
being used from the template data source.
No
Update . The template data source configuration will be used to
specify any parameters not provided in the Linking API URL. All connector
parameters for the connector type are optional, unless otherwise stated.
This simplifies the Linking API URL and is generally recommended when you
are familiar with the template data source configuration and only want to
override a subset of parameters.
When you only want to provide parameter values that differ from the
template data source and are ok with relying on the template data
source for any unspecified connector parameters. E.g. Change only the
Billing Project ID of a BigQuery data source configuration and use the
template configuration for all other parameters.
Required parameters when ds.connector is set
If a data source's ds.connector parameter is specified, then
all connector parameters designated as Required must be specified for the
data source. If the data source's ds.connector parameter is
unspecified, then all connector parameters, even those designated as required,
can be treated as optional, unless otherwise stated.
Examples
Configures a report with a single BigQuery data source ( ds0 ) and replaces the
data source configuration in its entirety:
https : //lookerstudio.google.com/reporting/create?
c . reportId = 12345
& r . reportName = MyNewReport
& ds . ds0 . datasourceName = MyNewDataSource
& ds . ds0 . connector = bigQuery
& ds . ds0 . type = TABLE
& ds . ds0 . projectId = bigquery - public - data
& ds . ds0 . datasetId = samples
& ds . ds0 . tableId = shakespeare
The data source alias can be omitted when the report has a single data source.
The URL above can be simplified to the following:
https : //lookerstudio.google.com/reporting/create?
c . reportId = 12345
& r . reportName = MyNewReport
& ds . datasourceName = MyNewDataSource
& ds . connector = bigQuery
& ds . type = TABLE
& ds . projectId = bigquery - public - data
& ds . datasetId = samples
& ds . tableId = shakespeare
Configures a report with a single BigQuery data source ( ds0 ) and
updates only the billing project ID of the
data source:
https://lookerstudio.google.com/reporting/create?
c.reportId=12345
&r.reportName=MyNewReport
&ds.ds0.billingProjectId=my-billing-project
Configures a report with two data sources, a BigQuery data source ( ds0 ) and a
Google Analytics data source ( ds1 ). The BigQuery data source configuration is
replaced in its entirety, while the Google Analytics configuration updates a
single parameter and relies on the ds1 template data source for any
unspecified connector parameters:
https : //lookerstudio.google.com/reporting/create?
c . reportId = 7890
& r . reportName = MyNewReportWithMultipleDataSources
& ds . ds0 . datasourceName = MyNewDataSource
& ds . ds0 . connector = bigQuery
& ds . ds0 . type = TABLE
& ds . ds0 . projectId = bigquery - public - data
& ds . ds0 . datasetId = samples
& ds . ds0 . tableId = shakespeare
& ds . ds1 . viewId = 92320289
Create vs Add
It can sometimes be useful to have the same data source in multiple reports so
updates to the data source affect all reports together.
When creating a report with the Linking API, you can re-add a datasource from
your template report by ensuring all the following conditions are met:
The data source is reusable (see embedded vs reusable data sources )
The url does not reference the data source by alias
The url does not use a wildcard alias (see Data source alias wildcard )
When a new data source is created with the Linking API, it uses the credentials
of the user that clicked the url. That means the user must have access to the
underlying data or the connection won't work.
By re-adding the data source to the newly generated report, you can preserve its
credentials so users can continue accessing data in their new reports.
Data source alias wildcard
To apply a Linking API parameter to multiple data sources, the wildcard alias
ds.* can be used in place of the data source alias.
This can be useful for removing repetitive parameters from your url. For
example, if you have a template with three BigQuery data sources attached, and
you want to replace the projectId and datasetId in
each one, but preserve the tableId , you could write it as:
https://lookerstudio.google.com/reporting/create?
c.reportId=7890
&ds.ds1.projectId=client-project
&ds.ds1.datasetId=client-dataset
&ds.ds2.projectId=client-project
&ds.ds2.datasetId=client-dataset
&ds.ds3.projectId=client-project
&ds.ds3.datasetId=client-dataset
Or, with the ds.* wildcard, you can use this equivalent url:
https://lookerstudio.google.com/reporting/create?
c.reportId=7890
&ds.*.projectId=client-project
&ds.*.datasetId=client-dataset
Parameters provided to the Linking API that don't use the ds.* wildcard are
given precedence over ones that are. In the example above, you can add a
specific datasource alias to override the value from the wildcard.
https://lookerstudio.google.com/reporting/create?
c.reportId=7890
&ds.*.projectId=client-project
&ds.*.datasetId=client-dataset
&ds.ds1.datasetId=client-dataset
More generally, the order of parameter precedence is:
A parameter given with specific alias ( ds.ds1.datasetId )
A parameter provided using the wildcard ( ds.*.datasetId )
A value derived from the template datasource, if ds.connector is not provided
(see Replace vs update )
The default value for the parameter, if it is optional.
Connector reference
The Linking API supports the following connectors and configurations. For each
connector, the list of available data source parameters is provided.
BigQuery
The BigQuery connector supports two types of queries, a TABLE query, in which
you provide the Table ID of the table to query and a CUSTOM_QUERY , in which
you provide a SQL statement to query a table.
TABLE queries
The following parameters are applicable when type is set to TABLE and you
provide the ID of the table to query.
Parameter name
Description
ds. alias .connector
link
Optional. Set to bigQuery for the
BigQuery
connector . If set, replaces the data source with the
provided BigQuery configuration. See
Replace vs update .
ds. alias .type
link
Required ** The type of query. Set to
TABLE .
ds. alias .projectId
link
Required ** The Project ID of the table
to query.
ds. alias .datasetId
link
Required ** The Dataset ID of the table to
query.
ds. alias .tableId
link
Required ** The Table ID of the table to
query. Date sharded tables : The
* (wildcard character) or YYYYMMDD suffix is supported
when querying date sharded tables. If a table is identified as Google
Analytics, Firebase Analytics, or Firebase Crashlytics, a default fields
template will be selected unless one is specified. See the
fields template table related parameters.
ds. alias .billingProjectId
link
Optional. The ID of the Project to use for billing. If not set,
projectId will be used.
ds. alias .isPartitioned
link
Optional. Set to true if the table is partitioned and you
want to use the partitioning column as a date range dimension. This is
only applicable to time based partitioning (E.g. using a time based
partitioning column or the _PARTITIONTIME pseudocolumn) and
does not work for integer range partitioned tables. Defaults to
false if unspecified. To learn more see
Introduction to partitioned tables .
ds. alias .refreshFields
link
Optional. Defaults to true if unspecified. See
refreshFields for details.
Fields template for Google Analytics, Firebase Analytics and Crashlytics
For tables identified as Google Analytics, Firebase Analytics, or Firebase
Crashlytics, additional parameters are available to set the fields template. If
unspecified, a default template will be selected.
Name
Description
ds. alias .gaTemplateLevel
link
Optional. The Google Analytics fields template to use. Applicable only
when a BigQuery export for Google Analytics table is being queried. One
of ALL , SESSION , HITS . For Google
Analytics tables, defaults to ALL if unspecified.
ds. alias .firebaseTemplateLevel
link
Optional. The Firebase Analytics fields template to use. Applicable
only when a BigQuery export for Firebase Analytics table is being queried.
Can only be set to EVENTS . For Firebase Analytics tables,
defaults to EVENTS if unspecified.
ds. alias .crashlyticsTemplateLevel
link
The Firebase Crashlytics fields template to use. Can only be set to
DEFAULT . Applicable only when a BigQuery export for Firebase
Crashlytics table is being queried. For Firebase Crashlytics tables,
defaults to DEFAULT if unspecified.
CUSTOM queries
The following parameters are applicable when type is set to CUSTOM_QUERY and
you provide a SQL statement to query a table.
Parameter name
Description
ds. alias .connector
link
Optional. Set to bigQuery for the
BigQuery
connector . If set, replaces the data source with the
provided BigQuery configuration. See
Replace vs update .
ds. alias .type
link
Required ** The type of query. Set to
CUSTOM_QUERY .
ds. alias .sql
link
Required ** The SQL query to run.
ds. alias .billingProjectId
link
Optional. The ID of the Project to use for billing. If not set,
projectId will be used. If projectId is not set
then the project of the queried table will be used.
ds. alias .sqlReplace
link
Optional. A comma-delimited list of pattern and replacement strings to
apply to the SQL query. String replacement is only applied if there is a
pattern match. Use a comma to separate pattern and replacement string
pairs. For example, stringPattern1,replacementString1,
stringPattern2,replacementString2 .
ds. alias .refreshFields
link
Optional. Defaults to true if unspecified. See
refreshFields for details.
Examples
A TABLE type configuration where the query is defined with a Table ID:
https : //lookerstudio.google.com/reporting/create?
c . reportId = 123 abc
& ds . ds0 . connector = bigQuery
& ds . ds0 . type = TABLE
& ds . ds0 . projectId = bigquery - public - data
& ds . ds0 . datasetId = samples
& ds . ds0 . tableId = shakespeare
& ds . ds0 . billingProjectId = myProject
A TABLE type configuration to query a date sharded table using the wildcard
character suffix:
https : //lookerstudio.google.com/reporting/create?
c . reportId = 123 abc
& ds . ds0 . connector = bigQuery
& ds . ds0 . type = TABLE
& ds . ds0 . projectId = price - data
& ds . ds0 . datasetId = samples
& ds . ds0 . tableId = stock_ *
A TABLE type configuration to query a date sharded table using the YYYYMMDD
suffix:
https : //lookerstudio.google.com/reporting/create?
c . reportId = 123 abc
& ds . ds0 . connector = bigQuery
& ds . ds0 . type = TABLE
& ds . ds0 . projectId = price - data
& ds . ds0 . datasetId = samples
& ds . ds0 . tableId = stock_YYYYMMDD
A TABLE type configuration to query a BigQuery Export for Google Analytics
table, using the SESSION fields template:
https : //lookerstudio.google.com/reporting/create?
c . reportId = 123 abc
& ds . ds0 . connector = bigQuery
& ds . ds0 . type = TABLE
& ds . ds0 . projectId = my - gabq - project
& ds . ds0 . datasetId = 1234567
& ds . ds0 . tableId = ga_sessions_YYYYMMDD
& ds . ds0 . gaTemplateLevel = SESSION
A TABLE type configuration to query an ingestion time partitioned table and
use the partitioning column as a date range dimension:
https : //lookerstudio.google.com/reporting/create?
c . reportId = 123 abc
& ds . ds0 . connector = bigQuery
& ds . ds0 . type = TABLE
& ds . ds0 . projectId = acme - co - logs
& ds . ds0 . datasetId = logs
& ds . ds0 . tableId = logs_table
& ds . ds0 . isPartitioned = true
A CUSTOM_QUERY type configuration where they query is defined with a SQL
statement:
https : //lookerstudio.google.com/reporting/create?
c . reportId = 123 abc
& ds . ds0 . connector = bigQuery
& ds . ds0 . type = CUSTOM_QUERY
& ds . ds0 . projectId = bigquery - public - data
& ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word_count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60
& ds . ds0 . billingProjectId = myProject
A CUSTOM_QUERY type configuration where only the SQL statement is updated and
the template data source is used for the rest of the configuration:
https://lookerstudio.google.com/reporting/create?
c.reportId=123abc
&ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60
A CUSTOM_QUERY type configuration where the SQL statement of the template data
source is updated using sqlReplace :
https://lookerstudio.google.com/reporting/create?
c.reportId=123abc
&ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset
# The following shows a template query before and after sqlReplace is applied.
#
# Template data source custom query:
# SELECT word, word_count FROM big-query-public-data . samples .shakespeare
# INNER JOIN
# SELECT word, word_count FROM big-query-public-data . samples .raleigh
#
# New data source custom query with sqlReplace applied:
# SELECT word, word_count FROM new-project . new-dataset .shakespeare
# INNER JOIN
# SELECT word, word_count FROM new-project . new-dataset .raleigh
Cloud Spanner
Parameter name
Description
ds. alias .connector
link
Optional. Set to cloudSpanner for the
Cloud
Spanner connector . If set, replaces the data source with the
provided Cloud Spanner configuration. See
Replace vs update .
ds. alias .projectId
link
Required ** The Project ID.
ds. alias .instanceId
link
Required ** The instance ID.
ds. alias .databaseId
link
Required ** The Database ID.
ds. alias .sql
link
Required ** The SQL query to run.
ds. alias .refreshFields
link
Optional. Defaults to true if unspecified.
See refreshFields for details.
Example
A Cloud Spanner configuration with a SQL statement:
https://lookerstudio.google.com/reporting/create?
c.reportId=456def
&ds.ds1.connector=cloudSpanner
&ds.ds1.projectId=myProject
&ds.ds1.instanceId=production
&ds.ds1.datasetId=transactions
&ds.ds1.sql=SELECT%20accountId%2C%20date%2C%20revenue%20FROM%20sales%3B
Community Connectors
Parameter name
Description
ds. alias .connector
link
Optional. Set to community for a
Community Connector .
If set, replaces the data source with the provided Community Connector
configuration. See
Replace vs update .
ds. alias .connectorId
link
Required ** The Community Connector
connectorId (also known as a deploymentId ).
ds. alias .parameters
link
Optional. Additional connector-specific parameters, as defined by the
community connector's
connector configuration .
ds. alias .refreshFields
link
Optional. Defaults to true if unspecified. See
refreshFields for details.
Example
Connect to a community connector with state and city configuration
parameters:
https://lookerstudio.google.com/reporting/create?
c.reportId=161718pqr
&ds.ds5.connector=community
&ds.ds5.connectorId=AqwqXxQshl94nJa0E0-1MsZXQL0DfCsJIMWk7dnx
&ds.ds5.state=CA
&ds.ds5.city=Sacramento
Note: Special handling is not required for connectors that use a
Stepped Configuration .
Google Analytics
Parameter name
Description
ds. alias .connector
link
Optional. Set to googleAnalytics for the
Google
Analytics connector . If set, replaces the data source with
the provided Google Analytics configuration. See
Replace vs update .
ds. alias .accountId
link
Required ** The Account ID.
ds. alias .propertyId
link
Required ** The Property ID.
ds. alias .viewId
link
The View ID. Required ** for Universal
Analytics properties. Do not set for Google Analytics 4 properties.
ds. alias .refreshFields
link
Optional. Defaults to false if unspecified. See
refreshFields for details.
Note: Universal Analytics (UA) and Google Analytics 4 (GA4) configurations are
not compatible since they have different sets of dimensions and metrics. Setting
a UA configuration for a data source that was created for a GA4 property will
not work and vice versa. Consider setting the ds.refreshFields parameter to
true if you want your report template to work with either property.
Examples
A Google Analytics configuration for a Universal Analytics property:
https://lookerstudio.google.com/reporting/create?
c.reportId=789ghi
&ds.ds2.connector=googleAnalytics
&ds.ds2.accountId=54516992
&ds.ds2.propertyId=UA-54516992-1
&ds.ds2.viewId=92320289
A Google Analytics configuration for a Google Analytics 4 property:
https://lookerstudio.google.com/reporting/create?
c.reportId=789ghi
&ds.ds2.connector=googleAnalytics
&ds.ds2.accountId=54516992
&ds.ds2.propertyId=213025502
Google Cloud Storage
Parameter name
Description
ds. alias .connector
link
Optional. Set to googleCloudStorage
Google
Cloud Storage connector . If set, replaces the data source
with the provided Google Cloud Storage configuration. See
Replace vs update .
ds. alias .pathType
link
Required ** The path type. Use
FILE to select a single file or FOLDER to select
all files for the given path.
ds. alias .path
link
Required ** The file path (e.g.
MyBucket/MyData/MyFile.csv ) if pathType is
FILE or the folder path (e.g. *MyBucket/MyData ) if
pathType is FOLDER .
ds. alias .refreshFields
link
Optional. Defaults to true if unspecified.
See refreshFields for details.
Example
A Google Cloud Storage configuration for a single file:
https://lookerstudio.google.com/reporting/create?
c.reportId=231908kpf
&ds.ds50.connector=googleCloudStorage
&ds.ds50.pathType=FILE
&ds.ds50.path=MyBucket%2FMyData%2FMyFile.csv
A Google Cloud Storage configuration for all files in the path:
https://lookerstudio.google.com/reporting/create?
c.reportId=231908kpf
&ds.ds50.connector=googleCloudStorage
&ds.ds50.pathType=FOLDER
&ds.ds50.path=MyBucket%2FMyData
Google Sheets
Parameter name
Description
ds. alias .connector
link
Optional. Set to googleSheets for the
Google
Sheets connector . If set, replaces the data source with the
provided Google Sheets configuration. See
Replace vs update .
ds. alias .spreadsheetId
link
Required ** The spreadsheet ID.
ds. alias .worksheetId
link
Required ** The worksheet ID.
ds. alias .hasHeader
link
Optional. Set to true to use the first row as headers.
Defaults to true if unspecified. Column headers must be
unique. Columns with empty headers will not be added to the data source.
ds. alias .includeHiddenCells
link
Optional. Set to true to include hidden cells.
Defaults to true if unspecified.
ds. alias .includeFilteredCell
link
Optional. Set to true to include filtered cells.
Defaults to true if unspecified.
ds. alias .range
link
Optional. Range, e.g. A1:B52.
ds. alias .refreshFields
link
Optional. Defaults to true if unspecified. See
refreshFields for details.
Examples
A Google Sheets configuration:
https://lookerstudio.google.com/reporting/create?
c.reportId=101112jkl
&ds.ds3.connector=googleSheets
&ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k
&ds.ds3.worksheetId=903806437
A Google Sheets configuration with the first row used as headers and hidden and
filtered cells included:
https://lookerstudio.google.com/reporting/create?
c.reportId=101112jkl
&ds.ds3.connector=googleSheets
&ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k
&ds.ds3.worksheetId=903806437
&ds.ds3.hasHeader=true
&ds.ds3.includeHiddenCells=true
&ds.ds3.includeFilteredCells=true
A Google Sheets configuration with a range (A1:D20):
https://lookerstudio.google.com/reporting/create?
c.reportId=101112jkl
&ds.ds3.connector=googleSheets
&ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k
&ds.ds3.worksheetId=903806437
&ds.ds3.range=A1%3AD20
Looker
Parameter name
Description
ds. alias .connector
link
Optional. Set to looker for the
Looker connector . If set, replaces the data source with the
provided Looker configuration. See
Replace vs update .
ds. alias .instanceUrl
link
Required ** The Looker instance URL.
ds. alias .model
link
Required ** The Looker model.
ds. alias .explore
link
Required ** The Looker Explore.
ds. alias .refreshFields
link
Optional. Defaults to false if unspecified. See
refreshFields for details.
Example
Connect to a Looker Explore:
https://lookerstudio.google.com/reporting/create?
c.reportId=161718pqr
&ds.ds5.connector=looker
&ds.ds5.instanceUrl=my.looker.com
&ds.ds5.model=thelook
&ds.ds5.explore=orders
Search Console
Parameter name
Description
ds. alias .connector
link
Optional. Set to searchConsole for the
Search
Console connector . If set, replaces the data source with the
provided Search Console configuration. See
Replace vs update .
ds. alias .siteUrl
link
Required ** The site URL. For a
Domain
property , prefix with sc-domain\: .
ds. alias .tableType
link
Required ** Sets the table type. Can be
one of SITE_IMPRESSION or URL_IMPRESSION .
ds. alias .searchType
link
Required ** Sets the search type. Can be
one of WEB , IMAGE , VIDEO or
NEWS .
ds. alias .refreshFields
link
Optional. Defaults to false if unspecified. See
refreshFields for details.
Example
A Search Console configuration for a URL-prefix property :
https://lookerstudio.google.com/reporting/create?
c.reportId=161718pqr
&ds.ds5.connector=searchConsole
&ds.ds5.siteUrl=https%3A%2F%2Fwww.example.com%2Fwelcome
&ds.ds5.tableType=SITE_IMPRESSION
&ds.ds5.searchType=WEB
A Search Console configuration for a Domain property :
https://lookerstudio.google.com/reporting/create?
c.reportId=161718pqr
ds.ds5.connector=searchConsole
&ds.ds5.siteUrl=sc-domain%3Aexample.com
&ds.ds5.tableType=SITE_IMPRESSION
&ds.ds5.searchType=WEB
Template permissions
To ensure the best user experience for users, it's important to correctly set
report access permissions for your template report and associated data
sources. The permissions required are dependent on whether the report template
uses embedded vs reusable data sources and whether the Linking API
configuration is set to replace or update a
data source configuration.
The following table provides the recommended data source access for the optimal
user experience based on the template data sources and Linking API
configuration:
Data source type
Linking API configuration for data source
Recommendation for data source permissions
Notes
Embedded
Replace
N/A - View access will be inherited from report.
If user has view access to the template report, they will automatically
have view access to any embedded data source.
Embedded
Update
N/A - View access will be inherited from report.
If user has view access to the template report, they will automatically
have view access to any embedded data source.
Reusable
Replace
User's do not need view access.
Since the data source configuration is being replaced in its entirety
via the Linking API, view access is not required.
Reusable
Update
User's require view access.
View access to the data source is required for the Linking API to be
able to read and use the configuration from the template data source. If
the users does not have view access they will receive an error when
loading the report.
Use a blank or default report
To use a blank report or the default report, configure your Linking API as
follows:
Report type
Set the reportId control parameter
Set data source ( ds ) parameters.
Notes
Blank report
No
No
Default report
No
Yes
The default report is provided by Looker Studio.
It is not required to use a data source alias when specifying
data source parameters for the default report, since the default report has
a single embedded data source.
Key Point: Control parameters, other than reportId , and
Report parameters can be set when using a blank or default
report.
The following examples show various Linking API URLs that use a blank or default
report.
Initiate the report creation workflow with a blank report:
https://lookerstudio.google.com/reporting/create
Initiate the report creation workflow with a blank report and sets the report
name:
https://lookerstudio.google.com/reporting/create?r.reportName=MyNewReport
Use the default report template with a Google Sheets connector configuration:
https://lookerstudio.google.com/reporting/create?
ds.connector=googleSheets
&ds.spreadsheetId=1Q-w7KeeJj1jk3wFcFm4NsPlppNscs0CtHf_EP9fsYOo
&ds.worksheetId=0
Embed a report
To embed a report created with the Linking API, set
URL parameters and include the /embed/ path. A Linking API
embed URL must be of the following form:
https://lookerstudio.google.com/ embed /reporting/create? parameters
Find IDs and aliases
Report ID
To find the report ID:
Open the report you want to use as a template. Inspect the URL of the
report. The part between reporting/ and /page is the report ID. For
example, in the following URL, 0B_U5RNpwhcE6SF85TENURnc4UjA is the report
ID:
https://lookerstudio.google.com/reporting/ 0B_U5RNpwhcE6SF85TENURnc4UjA /page/1M
Find the Report ID in the report URL.
Data source alias
A report can have multiple data sources . A data source should be referenced by
its alias.
To find a data source alias:
Edit the report.
From the toolbar, select Resource > Manage added data sources .
Examine the Alias column to find alias information for each data source.
You can edit alias names to ensure backwards compatibility when a Data Source is
added or removed.
Find the data source alias in the Data sources management
page.
Connector type
A report can have multiple data sources , each created by configuring a
connector. To find the connector type used to create a data source:
Edit the report.
From the toolbar, select Resource > Manage added data sources .
Examine the Connector Type column to identify the connector used to
create a data source.
Find the data source connector type in the Data sources
management page.
Tips & troubleshooting
If you're having trouble, review the details below to identify potential issues
and common misconfigurations.
Debug dialog
Use the debug dialog to review the Linking API configuration as interpreted by
Looker Studio. It can help to debug problems with the API.
When an error is encountered during the parsing of the Linking API
URL, a dialog will automatically be displayed with details about the
error.
When an error occurs and no dialog is automatically displayed, look
for the info button towards the top right of the report. Click for
additional debug information.
If no info button is available, you can enable the button by
appending the &c.explain=true parameter to the end of
any Linking API URL.
Permissions
Ensure you have the correct template permissions set for the data source types
and Linking API configuration. See Template permissions for
details.
Update vs replace
If updating a data source configuration from a data source template, review the
template data source configuration and the Linking API configuration to ensure
they are compatible. Confirm that the fields yielded from the new configuration
are compatible with the report components and configuration.
When performing an update vs replacement it's possible to set an invalid
configuration with undefined behavior. See
Replace vs update for details.
Refresh fields
If you have configured field names, types or aggregations for a template data
source, these changes will only carry-over to a Linking API configured data
source if the ds.refreshFields parameter is set to
false .
Review the ds.refreshFields data source parameter of your
Linking API URL. If omitted, confirm that the default value of the parameter for
each connector type is correct for your use case.
Generally, if you have configured fields in the template data source and are
certain that new data source configurations via the Linking API will always
yield the exact same fields, then setting refreshFields to false is
recommended.
For example, if during the creation of a report template, Looker Studio
identifies a particular data source field as type Number and you change it to
type Year , this field configuration change is now part of the template data
source. Any chart in the report template that uses the corrected field will
expect a Year and if the chart is time-based it may not render otherwise. If
the Linking API is used to provide a new data source configuration that yields
the exact same fields, there are two outcomes based on the value of the
refreshFields parameter:
If set to true , the field configuration from the template data source will
not carry-over, and charts may potentially fail to load if they depend
on the same field configuration (i.e. a field of type Year is expected).
If set to false , the field configuration from the template data source
will carry-over to the new data source and report charts will receive the
same fields with the same configuration and load successfully.
Key Point: Calculated fields and Parameters defined in template data sources
will always carry-over to newly created data sources and are not affected by the
value of refreshFields .
Feedback and support
Use the Issue Tracker to report Linking API issues or to provide feedback. See
Support for general resources on getting help and asking questions.
Changelog
2023-06-06
Added r.measurementId and
r.keepMeasurementId report parameters to configure
the Google Analytics Measurement IDs report setting.
Added ds.keepDatasourceName to control reuse of
the template data source name.
Added an Embed report section.
BigQuery connector
Added sqlReplace . Lets you specify
pattern and replacement strings to update the SQL query of the template
data source.
2023-05-22
Added support for the Looker connector.
Added support for Community Connectors .
2022-11-21
Added the capability to use a blank report. See
Use a blank or default report
Added a refreshFields section to
Tips & troubleshooting .
2022-11-14
The Surveys connector reference has been removed due to the
Google Surveys Sunset .
2022-06-15
Out of beta
The Integration API has been renamed to Linking API .
Linking API is out of beta.
Added the pageId control parameter to allow linking to a specific report
page.
Added the mode control parameter to set the report state to View or
Edit mode on load.
Data sources configurations can now be replaced entirely or partially
updated. This behavior is determined by whether the
ds.connector parameter is set. See Replace vs update
for details.
A default template is now used if a report template is not provide using the
c.reportId parameter.
Added the ds.refreshFields data source parameter. This allows you to
control whether data source fields are refreshed when loading a data source
configuration.
BigQuery connector
projectId is not required when type is set to CUSTOM_QUERY .
When billingProjectId is not set then the billing project will
fallback to projectId or the project of the queried table.
Added support for date partitioned tables. Set the isPartitioned
parameter to true to use the partition field as a date range
dimension.
Added support for querying date partitioned tables using the wildcard
character or YYYYMMDD table suffix.
Added support for querying Google Analytics, Firebase Analytics, or
Crashlytics tables and selecting a fields template.
Google Sheets
hasHeader defaults to true , consistent with the web UI default.
includeHiddenAndFilteredCell split into includeHiddenCells and
includeFilteredCells . Both now default to true , consistent with the
web UI default.
Search Console connector
Renamed the propertyType parameter to searchType .
Surveys connector
surveyId now accepts a single survey ID or a comma-separated list of
survey IDs.
2021-12-16
Initial release of the Integration API.
Supports linking to an existing report and setting the report name.
Multiple data sources can be configured and each data source name can be
set.
Support for the following connector types: BigQuery, Cloud Spanner,
Google Analytics, Google Cloud Storage, Google Sheets, Google Surveys,
Search Console.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]

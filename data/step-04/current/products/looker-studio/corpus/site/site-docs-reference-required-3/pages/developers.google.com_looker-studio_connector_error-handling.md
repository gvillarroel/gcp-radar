---
title: "Error handling and messages for Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/error-handling
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/reference
source_metadata:
  url: https://developers.google.com/looker-studio/connector/error-handling
  title: "Error handling and messages for Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Error handling and messages for Community Connectors
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Connectors can experience internal, external, or Looker Studio errors, with internal and external errors requiring developer attention.
Admin users see full error details, while non-admin users only see user-friendly messages set using newUserError() .
Best practices for error handling include catching and handling recoverable errors, providing user-friendly error messages for non-recoverable errors, and logging errors to Stackdriver.
When throwing errors, use newUserError() to create user-facing messages, providing both debug information for admins and concise guidance for regular users.
Utilizing isAdminUser() helps tailor error messages to the user's role, ensuring appropriate information disclosure.
To provide a good user experience your code should handle errors correctly.
Present users with actionable error messages that outline corrective steps for
resolving the problem.
This document describes errors that can happen with connectors, how error
messages work, and how to properly handle connector errors.
Info: To learn more about handling exceptions in JavaScript see
try...catch statement .
Types of errors
The types and causes of errors that a user may encounter when using your
connector typically fall into one of the following three categories:
connector internal errors
connector external errors
Looker Studio errors
Connector internal and external errors should be handled by the connector
developer. These errors occur due to developer-authored code.
Connector internal error
Connector internal errors occur during connector execution. For example, if a
connector cannot parse an API response during the execution of getData() .
These errors should be anticipated and handled with user-friendly explanations
where applicable.
For more information on handling connector internal errors, see
Best practices for handling connector errors .
Connector external error
Connector external errors occur after connector execution. For example, when a
getData() request for three fields only returns data for two. Although the
connector completed execution, it did not satisfy the request from Looker Studio. Thorough testing can prevent these errors.
Connector external errors can typically be fixed by reviewing error details (if
available) and debugging the code to identify the issue. For more information on
debugging your connector, see Debug your code .
Looker Studio error
Looker Studio errors are errors unrelated to your connector code. For example,
if a user attempts to use a time series chart with a data source with no
date/time dimension.
If the error is not directly related to the connector, then there is no action
for the connector developer to take. Users can find additional help by visiting
the [Looker Studio Help Center].
Showing error messages
Showing error details based on admin status
When a connector throws an error, Looker Studio shows the error message
depending on the user's admin status.
If the user is an admin user then they will see all details. This includes
the error message, error type, and stack trace.
If the user is not an admin user, then they will only see details if the
error includes a user-friendly message. To learn more about showing error
messages to non-admin users see Throwing user facing errors .
Key Point: Implement isAdminUser() to identify admins so the right level of
detail is shown to connector users.
Throwing user facing errors
By default, only connector admins see error details. This helps prevent
inadvertent disclosure of sensitive information, such as a API key in a stack
trace. To show error messages to non-admin users, use newUserError() from the
Looker Studio Apps Script service.
Example:
try {
// API request that can be malformed.
getDataFromAPI ();
} catch ( e ) {
DataStudioApp . createCommunityConnector ()
. newUserError ()
. setDebugText ( 'Error fetching data from API. Exception details: ' + e )
. setText ( 'There was an error communicating with the service. Try again later, or file an issue if this error persists.' )
. throwException ();
}
In this example, setText() sets the text that will be shown to all users,
while setDebugText() sets the text that will only be shown to admin users.
Best practices for handling connector errors
You should attempt to catch and handle as many errors as possible during the
execution of your connector code. For example, some common operations that may
cause errors or an undesirable state include:
A failed URL fetch attempt (transient errors, timeouts)
No data is available for the requested time period
Data from the API cannot be parsed or formatted
Authorization tokens have been revoked
Handle recoverable errors
Points of connector execution that can fail but are recoverable should be
handled. For example, if an API requests fails for a non-fatal reason (e.g.
server load shedding), then it should retried before throwing an error.
Catch and throw errors
Non-recoverable errors should be caught and re-thrown. The re-thrown error
should help users understand why the error occurred. If the issue can be fixed
then details on corrective action should be provided.
See throwing user facing errors .
Log errors to Stackdriver
Use Stackdriver for logging errors and other messages. This helps with
understanding errors, debugging issues, and discovering unhandled exceptions.
To learn more about Stackdriver Error Reporting, how to enable exception logging
for a script, and how to safely identify users for debugging purposes see
Using Stackdriver Logging .
DEPRECATED: Use DS_USER: prefix for safe error messages
Caution: This functionality is deprecated and will be removed June 2019. Migrate
to newUserError() . See throwing user facing errors .
To provide user-friendly error messages to non-admin users include the
DS_USER: prefix with error messages. This prefix is used to identify safe
messages for non-admin users and is not included in the actual error message.
The following examples include a case where an error message will be shown to
non-admin users another where an error message will only be shown to admin
users:
data-studio/errors.gs
View on GitHub
function showErrorToAllUsers () {
try {
// Code that might fail.
throw new Error ( "Something went wrong" );
} catch ( e ) {
throw new Error ( "DS_USER:This will be shown to admin & non-admin." );
}
}
function showErrorToAdminUsers () {
// Only admin users will see the following error.
try {
// Code that might fail.
throw new Error ( "Something went wrong" );
} catch ( e ) {
throw new Error ( "This message will only be shown to admin users" );
}
}
Note: The DS_USER: prefix only identifies safe messages for non-admin users,
it is not included in the actual error message shown to users.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]

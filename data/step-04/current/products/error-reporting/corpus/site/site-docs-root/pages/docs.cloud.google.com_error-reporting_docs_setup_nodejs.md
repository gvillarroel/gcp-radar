---
title: "Instrument Node.js apps for Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/setup/nodejs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/setup/nodejs
  title: "Instrument Node.js apps for Error Reporting \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Error Reporting
Guides
Send feedback
Instrument Node.js apps for Error Reporting
Stay organized with collections
Save and categorize content based on your preferences.
You can send error events to Error Reporting from Node.js
applications by using the
Error Reporting library for Node.js .
Use the Error Reporting library for Node.js to create error groups for the following cases:
A log bucket that contains your log entries has customer-managed encryption
keys (CMEK) .
The log bucket satisfies one of the following:
The log bucket is stored in the same project where the log entries
originated.
The log entries were routed to a project, and then that project stored
those log entries in a log bucket that it owns.
You want to report custom error events.
Error Reporting is integrated with some Google Cloud services,
such as Cloud Run functions
and App Engine , Compute Engine , and
Google Kubernetes Engine . Error Reporting displays the error events
that are logged to Cloud Logging by applications running on those services.
For more information, go to
Running on Google Cloud on this
page.
You can also send error events to Error Reporting using
Logging . For information on the data formatting
requirements, read
Format a log entry to report error events .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Error Reporting API .
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Error Reporting API .
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Prepare your environment for Node.js development.
Go to the Node.js setup guide
Install the client library
The Error Reporting library for Node.js lets you monitor and view error events reported by
Node.js applications running nearly anywhere.
Use npm to install the package:
npm install @google-cloud/error-reporting
Import the library and instantiate a client in order to begin reporting errors:
// Imports the Google Cloud client library
const { ErrorReporting } = require ( ' @google-cloud/error-reporting ' );
// Instantiates a client
const errors = new ErrorReporting ();
// Reports a simple error
errors . report ( 'Something broke!' );
For more information on installation, read the
documentation for the
Error Reporting library for Node.js. You can also report issues using the
issue tracker .
Configure the client library
You can customize the behavior of the Error Reporting library for Node.js. See the
library's configuration
for a list of possible configuration options. These options can be passed in the
options object passed to the library's constructor.
Other integrations
For more information on integrations between the Error Reporting library for Node.js and other
Node.js web frameworks, see
the library's repository on GitHub .
Run apps on Google Cloud
To create error groups by using
projects.events.report , your service account requires the
Error Reporting Writer role ( roles/errorreporting.writer ).
Some Google Cloud services automatically grant the
Error Reporting Writer role ( roles/errorreporting.writer ) to the appropriate
service account. However, you must grant this role to the appropriate service
account for some services.
Cloud Run and Cloud Run functions
The default service account used by Cloud Run has the
permissions of Error Reporting Writer role ( roles/errorreporting.writer ).
The Error Reporting library for Node.js can be used without needing to explicitly provide
credentials.
Cloud Run is configured to use Error Reporting
automatically. Unhandled
JavaScript exceptions will appear in Logging and be processed by
Error Reporting without needing to use the
Error Reporting library for Node.js.
Note: Error Reporting automatically creates an error event when
a log entry contains a stack trace and the severity level of the log entry
isn't set or is set to at least ERROR .
Example:
// Imports the Google Cloud client library
const { ErrorReporting } = require ( ' @google-cloud/error-reporting ' );
// Instantiates a client
const errors = new ErrorReporting ({
projectId : 'your-project-id' ,
keyFilename : '/path/to/key.json' ,
});
// Reports a simple error
errors . report ( 'Something broke!' );
App Engine flexible environment
App Engine grants the
Error Reporting Writer role ( roles/errorreporting.writer )
to your default service account automatically.
The Error Reporting library for Node.js can be used without needing to explicitly provide
credentials.
Error Reporting is automatically enabled for App Engine
flexible environment applications. No additional setup is required.
Note: Error log entries written to stderr are processed automatically by
Error Reporting, without needing to use the
Error Reporting library for Node.js directly.
Google Kubernetes Engine
To use Error Reporting with Google Kubernetes Engine,
do the following:
Ensure that the service account to be used by your container has been
granted the
Error Reporting Writer role ( roles/errorreporting.writer ).
You can use either the Compute Engine default service account
or a custom service account.
For information about granting roles, see
Manage access to projects, folders, and organizations .
Create your cluster and grant the cluster the
cloud-platform access scope .
For example, the following create command specifies the cloud-platform
access scope and a service account:
gcloud container clusters create CLUSTER_NAME --service-account SERVICE_ACCT_NAME --scopes=cloud-platform
Note: After you create a cluster, you can't change its service account.
Compute Engine
To use Error Reporting with Compute Engine VM instances,
do the following:
Ensure that the service account to be used by your VM instance has been
granted the
Error Reporting Writer role ( roles/errorreporting.writer ).
You can use either the Compute Engine default service account
or a custom service account.
For information about granting roles, see
Manage access to projects, folders, and organizations .
In the Google Cloud console, go to the VM instances page:
Go to VM instances
If you use the search bar to find this page, then select the result whose subheading is
Compute Engine .
Select the VM instance that you want to receive the
cloud-platform access scope .
Click Stop , and then click Edit .
In the Identity and API access section, select a service account that
has the Error Reporting Writer role ( roles/errorreporting.writer ).
In the Access scopes section,
select Allow full access to all Cloud APIs , and then save your changes.
Click Start/Resume .
Example
You can manually report an error by calling the report method, as seen in the
following example:
// Imports the Google Cloud client library
const { ErrorReporting } = require ( ' @google-cloud/error-reporting ' );
// Instantiates a client
const errors = new ErrorReporting ();
// Use the error message builder to customize all fields ...
const errorEvent = errors . event ();
// Add error information
errorEvent . setMessage ( 'My error message' );
errorEvent . setUser ( 'root@nexus' );
// Report the error event
errors . report ( errorEvent , () = > {
console . log ( 'Done reporting error event!' );
});
// Report an Error object
errors . report ( new Error ( 'My error message' ), () = > {
console . log ( 'Done reporting Error object!' );
});
// Report an error by provided just a string
errors . report ( 'My error message' , () = > {
console . log ( 'Done reporting error string!' );
});
Reporting errors with Express.js
The Error Reporting library for Node.js can integrate Error Reporting into
popular Node.js web frameworks such as Express.js:
const express = require ( ' express ' );
// Imports the Google Cloud client library
const { ErrorReporting } = require ( ' @google-cloud/error-reporting ' );
// Instantiates a client
const errors = new ErrorReporting ();
const app = express ();
app . get ( '/error' , ( req , res , next ) = > {
res . send ( 'Something broke!' );
next ( new Error ( 'Custom error message' ));
});
app . get ( '/exception' , () = > {
JSON . parse ( '{"malformedJson": true' );
});
// Note that express error handling middleware should be attached after all
// the other routes and use() calls. See the Express.js docs.
app . use ( errors . express );
const PORT = process . env . PORT || 8080 ;
app . listen ( PORT , () = > {
console . log ( `App listening on port ${ PORT } ` );
console . log ( 'Press Ctrl+C to quit.' );
});
Run apps in a local development environment
To use the Error Reporting library for Node.js in a local development environment,
such as running the library on your own workstation, you must provide
your Error Reporting library for Node.js with the local application default credentials.
For more information, see Authenticate to Error Reporting .
To use the Node.js samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
Note: If the gcloud CLI prints a warning that your account
doesn't have the serviceusage.services.use permission, then some
gcloud CLI commands and client libraries might not work. Ask an
administrator to grant you the Service Usage Consumer IAM role
( roles/serviceusage.serviceUsageConsumer ), then run the following command:
gcloud auth application-default set-quota-project PROJECT_ID
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up authentication for a local development environment .
The projects.events.report method also
supports API keys.
If you want to use API keys for authentication, you do not need
to set up a local Application Default Credentials file.
For more information, see
Create an API key
in the Google Cloud authentication documentation.
Example:
// Imports the Google Cloud client library
const { ErrorReporting } = require ( ' @google-cloud/error-reporting ' );
// Instantiates a client
const errors = new ErrorReporting ({
projectId : 'your-project-id' ,
keyFilename : '/path/to/key.json' ,
});
// Reports a simple error
errors . report ( 'Something broke!' );
View error groups
In the Google Cloud console, go to the Error Reporting page:
Go to Error Reporting
You can also find this page by using the search bar.
For more information, see
View and filter error groups .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

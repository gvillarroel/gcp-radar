---
title: "Instrument Java apps for Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/setup/java
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs/setup/ec2
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/setup/java
  title: "Instrument Java apps for Error Reporting \_|\_ Google Cloud Documentation"
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
Instrument Java apps for Error Reporting
Stay organized with collections
Save and categorize content based on your preferences.
You can send error events to Error Reporting from Java
applications by using the
Error Reporting package for Java .
Use the Error Reporting package for Java to create error groups for the following cases:
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
Install the client library
The Error Reporting package for Java lets you monitor and view error events reported by
Java applications running nearly anywhere.
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
<dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>libraries-bom</artifactId>
<version>26.79.0</version>
<type>pom</type>
<scope>import</scope>
</dependency>
</dependencies>
</dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-errorreporting</artifactId>
</dependency>
</dependencies>
If you are using Gradle ,
add the following to your dependencies:
implementation 'com.google.cloud:google-cloud-errorreporting:0.212.0-beta'
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-errorreporting" % "0.212.0-beta"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
For more information on installation, read the
documentation for the
Error Reporting package for Java. You can also report issues using the
issue tracker .
Configure the client library
You can customize the behavior of the Error Reporting package for Java. See the Java API reference documentation .
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
The Error Reporting package for Java can be used without needing to explicitly provide
credentials.
Cloud Run is configured to use Error Reporting
automatically. Unhandled
JavaScript exceptions will appear in Logging and be processed by
Error Reporting without needing to use the
Error Reporting package for Java.
Note: Error Reporting automatically creates an error event when
a log entry contains a stack trace and the severity level of the log entry
isn't set or is set to at least ERROR .
App Engine flexible environment
App Engine grants the
Error Reporting Writer role ( roles/errorreporting.writer )
to your default service account automatically.
The Error Reporting package for Java can be used without needing to explicitly provide
credentials.
Error Reporting is automatically enabled for App Engine
flexible environment applications. No additional setup is required.
Note: Error log entries written to stderr are processed automatically by
Error Reporting, without needing to use the
Error Reporting package for Java directly.
@WebServlet ( name = "Error reporting" , value = "/error" )
public class ErrorReportingExample extends HttpServlet {
private Logger logger = Logger . getLogger ( ErrorReportingExample . class . getName ());
@Override
public void doGet ( HttpServletRequest req , HttpServletResponse resp )
throws IOException , ServletException {
// errors logged to stderr / Cloud logging with exceptions are automatically reported.
logger . log ( Level . SEVERE , "exception using log framework" , new IllegalArgumentException ());
// use the error-reporting client library only if you require logging custom error events.
logCustomErrorEvent ();
// runtime exceptions are also automatically reported.
throw new RuntimeException ( "this is a runtime exception" );
}
private void logCustomErrorEvent () {
try ( ReportErrorsServiceClient reportErrorsServiceClient = ReportErrorsServiceClient . create ()) {
// Custom error events require an error reporting location as well.
ErrorContext errorContext =
ErrorContext . newBuilder ()
. setReportLocation (
SourceLocation . newBuilder ()
. setFilePath ( "Test.java" )
. setLineNumber ( 10 )
. setFunctionName ( "myMethod" )
. build ())
. build ();
// Report a custom error event
ReportedErrorEvent customErrorEvent =
ReportedErrorEvent . getDefaultInstance ()
. toBuilder ()
. setMessage ( "custom error event" )
. setContext ( errorContext )
. build ();
// default project id
ProjectName projectName = ProjectName . of ( ServiceOptions . getDefaultProjectId ());
reportErrorsServiceClient . reportErrorEvent ( projectName , customErrorEvent );
} catch ( Exception e ) {
logger . log ( Level . SEVERE , "Exception encountered logging custom event" , e );
}
}
}
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
Exceptions logged using the
Cloud Logging Logback Appender or
java.util.logging Handler are
automatically reported to the Error Reporting console.
The following sample demonstrates using the Java client library
to report a custom error event:
import com.google.cloud. ServiceOptions ;
import com.google.devtools.clouderrorreporting.v1beta1. ProjectName ;
import com.google.devtools.clouderrorreporting.v1beta1.ReportErrorsServiceClient ;
import com.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent ;
import java.io.IOException ;
import java.io.PrintWriter ;
import java.io.StringWriter ;
/**
* Snippet demonstrates using the Error Reporting API to report an exception.
* <p>
* When the workload runs on App Engine, GKE, Cloud Functions or another managed environment,
* printing the exception's stack trace to stderr will automatically report the error
* to Error Reporting.
*/
public class QuickStart {
static String projectId ;
public static void main ( String [] args ) throws Exception {
// Set your Google Cloud Platform project ID via environment or explicitly
projectId = ServiceOptions . getDefaultProjectId ();
if ( args . length > 0 ) {
projectId = args [ 0 ] ;
} else {
String value = System . getenv ( "GOOGLE_CLOUD_PROJECT" );
if ( value != null && value . isEmpty ()) {
projectId = value ;
}
}
try {
throw new Exception ( "Something went wrong" );
} catch ( Exception ex ) {
reportError ( ex );
}
}
/**
* Sends formatted error report to Google Cloud including the error context.
*
* @param ex Exception containing the error and the context.
* @throws IOException if fails to communicate with Google Cloud
*/
private static void reportError ( Exception ex ) throws IOException {
try ( ReportErrorsServiceClient serviceClient = ReportErrorsServiceClient . create ()) {
StringWriter sw = new StringWriter ();
PrintWriter pw = new PrintWriter ( sw );
ex . printStackTrace ( pw );
ReportedErrorEvent errorEvent = ReportedErrorEvent . getDefaultInstance ()
. toBuilder ()
. setMessage ( sw . toString ())
. build ();
// If you need to report an error asynchronously, use reportErrorEventCallable()
// method
serviceClient . reportErrorEvent ( ProjectName . of ( projectId ), errorEvent );
}
}
}
See the Java API Reference Documentation on how to retrieve and manage error statistics as well as data for individual events.
Run apps in a local development environment
To use the Error Reporting package for Java in a local development environment,
such as running the library on your own workstation, you must provide
your Error Reporting package for Java with the local application default credentials.
For more information, see Authenticate to Error Reporting .
To use the Java samples on this page in a local development environment, install and
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
View error groups
In the Google Cloud console, go to the Error Reporting page:
Go to Error Reporting
You can also find this page by using the search bar.
For more information, see
View and filter error groups .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

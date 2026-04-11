---
title: "Setting up on Google Kubernetes Engine \_|\_ Error Reporting \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine
  title: "Setting up on Google Kubernetes Engine \_|\_ Error Reporting \_|\_ Google\
    \ Cloud Documentation"
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
Setting up on Google Kubernetes Engine
Stay organized with collections
Save and categorize content based on your preferences.
You can send errors from your Google Kubernetes Engine applications to
Error Reporting in one of two ways:
By logging to Cloud Logging . If you're already using
Cloud Logging, the only additional requirement is that your log entries be
recognizable by Error Reporting. For more information
on error formatting requirements, read
Formatting errors in Cloud Logging .
Using the Error Reporting API . Your application
can send HTTP requests using the REST API, or can make use of
experimental libraries in several languages.
Using Logging to report errors
GKE's default logging agent provides a managed solution to
deploy and manage the agents that send the logs for your clusters to
Cloud Logging. The structure of the agent depends on the version of the
cluster. For information about this agent, see
Managing GKE logs .
Error Reporting requires that exceptions or stack traces be contained
in a single log entry. Most logging agents are capable of recognizing that
several log lines—stack frames printed each on a new line—represent
a stack trace and send it to Cloud Logging as a single log entry.
If the agent isn't capable of reconstructing multiple lines as a single error,
then use the
projects.events.report API endpoint ,
which lets you to control the contents of an error.
Using the Error Reporting API to write errors
The Error Reporting API provides a report endpoint for writing
error information to the service.
Enable the Error Reporting API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Report errors to the API using either the REST API or a client library.
REST API
See the
reference documentation
for information about the API.
Using client libraries
Libraries exist in a limited number of languages to help you call
the Error Reporting API from your application:
ASP.NET
Go
Java
Node.js
Ruby
Python
PHP
Samples
ASP.NET
The ASP.NET NuGet package reports uncaught exceptions from
ASP.NET web applications to Error Reporting.
Install the NuGet package
To install the Stackdriver ASP.NET NuGet package in Visual Studio:
Right-click your solution and select Manage NuGet packages for
solution .
Select the Include prerelease checkbox.
Search for and install the package named
Google.Cloud.Diagnostics.AspNet .
Usage
Once you've installed the Stackdriver ASP.NET NuGet package, add the
following statement to your application code to start sending errors to
Stackdriver:
using Google.Cloud.Diagnostics.AspNet;
Add the following HttpConfiguration code to the Register method of your
.NET web app after replacing your-project-id with your actual
project ID
to enable the reporting of exceptions:
public static void Register ( HttpConfiguration config )
{
string projectId = "YOUR-PROJECT-ID" ;
string serviceName = "NAME-OF-YOUR-SERVICE" ;
string version = "VERSION-OF-YOUR-SERVCICE" ;
// ...
// Add a catch all for the uncaught exceptions.
config . Services . Add ( typeof ( IExceptionLogger ),
ErrorReportingExceptionLogger . Create ( projectId , serviceName , version ));
// ...
}
Once you've added this method to your ASP.NET application, you can view any
uncaught exceptions that occur as they get reported to Google Cloud
in the Error Reporting
section of the Google Cloud console.
C#
The following example can be found in the
GoogleCloudPlatform/dotnet-docs-samples
repository. To use it, after building the project, specify your
project ID :
C : \ ... \ bin \ Debug > set GOOGLE_PROJECT_ID = [ YOUR_PROJECT_ID ]
Make sure to replace [YOUR_PROJECT_ID] with the correct value from the
Google Cloud console.
Then, send exception data with code similar to the following:
public class ErrorReportingSample
{
public static void Main ( string [] args )
{
try
{
throw new Exception ( "Generic exception for testing Stackdriver Error Reporting" );
}
catch ( Exception e )
{
report ( e );
Console . WriteLine ( "Stackdriver Error Report Sent" );
}
}
/// <summary>
/// Create the Error Reporting service (<seealso cref="ClouderrorreportingService"/>)
/// with the Application Default Credentials and the proper scopes.
/// See: https://developers.google.com/identity/protocols/application-default-credentials.
/// </summary>
private static ClouderrorreportingService CreateErrorReportingClient ()
{
// Get the Application Default Credentials.
GoogleCredential credential = GoogleCredential . GetApplicationDefaultAsync (). Result ;
// Add the needed scope to the credentials.
credential . CreateScoped ( ClouderrorreportingService . Scope . CloudPlatform );
// Create the Error Reporting Service.
ClouderrorreportingService service = new ClouderrorreportingService ( new BaseClientService . Initializer
{
HttpClientInitializer = credential ,
});
return service ;
}
/// <summary>
/// Creates a <seealso cref="ReportRequest"/> from a given exception.
/// </summary>
private static ReportRequest CreateReportRequest ( Exception e )
{
// Create the service.
ClouderrorreportingService service = CreateErrorReportingClient ();
// Get the project ID from the environement variables.
string projectId = Environment . GetEnvironmentVariable ( "GOOGLE_PROJECT_ID" );
// Format the project id to the format Error Reporting expects. See:
// https://cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events/report
string formattedProjectId = string . Format ( "projects/{0}" , projectId );
// Add a service context to the report. For more details see:
// https://cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events#ServiceContext
ServiceContext serviceContext = new ServiceContext ()
{
Service = "myapp" ,
Version = "8c1917a9eca3475b5a3686d1d44b52908463b989" ,
};
ReportedErrorEvent errorEvent = new ReportedErrorEvent ()
{
Message = e . ToString (),
ServiceContext = serviceContext ,
};
return new ReportRequest ( service , errorEvent , formattedProjectId );
}
/// <summary>
/// Report an exception to the Error Reporting service.
/// </summary>
private static void report ( Exception e )
{
// Create the report and execute the request.
ReportRequest request = CreateReportRequest ( e );
request . Execute ();
}
}
Go
See Setting up Error Reporting for Go .
Java
See Setting up Error Reporting for Java .
Node.js
See Setting up Error Reporting for Node.js .
Ruby
See Setting up Error Reporting for Ruby .
Python
See Setting up Error Reporting for Python .
PHP
See Setting up Error Reporting for PHP .
View error groups
In the Google Cloud console, go to the Error Reporting page:
Go to Error Reporting
You can also find this page by using the search bar.
Note : If you see the message "Set up Error Reporting" on the Error Reporting page,
then your Google Cloud project has no error groups to display.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

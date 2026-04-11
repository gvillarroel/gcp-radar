---
title: "Instrument PHP apps for Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/setup/php
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/setup/php
  title: "Instrument PHP apps for Error Reporting \_|\_ Google Cloud Documentation"
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
Instrument PHP apps for Error Reporting
Stay organized with collections
Save and categorize content based on your preferences.
You can send error events to Error Reporting from PHP
applications by using the
Error Reporting library for PHP .
Use the Error Reporting library for PHP to create error groups for the following cases:
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
The Error Reporting library for PHP lets you monitor and view error events reported by
PHP applications running nearly anywhere.
For more information on installation, read the
documentation for the
Error Reporting library for PHP. You can also report issues using the
issue tracker .
Configure the client library
You can customize the behavior of the Error Reporting library for PHP. See
the library's configuration for a list of
possible configuration options.
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
The Error Reporting library for PHP can be used without needing to explicitly provide
credentials.
Cloud Run is configured to use Error Reporting
automatically. Unhandled
JavaScript exceptions will appear in Logging and be processed by
Error Reporting without needing to use the
Error Reporting library for PHP.
Note: Error Reporting automatically creates an error event when
a log entry contains a stack trace and the severity level of the log entry
isn't set or is set to at least ERROR .
App Engine flexible environment
App Engine grants the
Error Reporting Writer role ( roles/errorreporting.writer )
to your default service account automatically.
The Error Reporting library for PHP can be used without needing to explicitly provide
credentials.
To enable Error Reporting on App Engine flexible
environment, follow these steps:
Install necessary libraries with the following command:
$ composer require google/cloud-error-reporting
Add the following line to runtime_config section in app.yaml :
enable_stackdriver_integration: true
Then the library automatically collects all the errors and uncaught
exceptions to Error Reporting. If you're using a Web Framework
which installs its own Exception handlers, see Framework Integrations
section for more information.
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
1. Install cloud libraries with the following command:
$ composer require google/cloud-error-reporting
2. Add the following line to your php.ini , where WORKSPACE
is the absolute path to your workspace's root directory:
auto_prepend_file='/ WORKSPACE /vendor/google/cloud-error-reporting/src/prepend.php'
This prepend file installs an exception handler and an error handler which
automatically send errors to Error Reporting.
If you're using App Engine flexible environment, see
App Engine flexible environment
on this page.
Run apps in a local development environment
To use the Error Reporting library for PHP in a local development environment,
such as running the library on your own workstation, you must provide
your Error Reporting library for PHP with the local application default credentials.
For more information, see Authenticate to Error Reporting .
To use the PHP samples on this page in a local development environment, install and
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
Framework Integrations
Some web frameworks override the exception handler. Following are examples for
enabling Error Reporting with Laravel and Symfony. For other
frameworks, you can use
Google\Cloud\ErrorReporting\Bootstrap::exceptionHandler as the exception
handler.
Laravel
Edit the report function in the file app/Exceptions/Handler.php as
follows:
public function report(Exception $exception)
{
if (isset($_SERVER['GAE_SERVICE'])) {
// Ensure Stackdriver is initialized and handle the exception
Bootstrap::init();
Bootstrap::exceptionHandler($exception);
} else {
parent::report($exception);
}
}
You also need to add a one-line use statement at the beginning of
the file:
use Google\Cloud\ErrorReporting\Bootstrap;
Symfony
Create a new file src/AppBundle/EventSubscriber/ExceptionSubscriber.php with the
following content:
// src/AppBundle/EventSubscriber/ExceptionSubscriber.php
namespace AppBundle\EventSubscriber;
use Google\Cloud\ErrorReporting\Bootstrap;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\KernelEvents;
class ExceptionSubscriber implements EventSubscriberInterface
{
public static function getSubscribedEvents()
{
// return the subscribed events, their methods and priorities
return [KernelEvents::EXCEPTION => [
['logException', 0]
]];
}
public function logException(ExceptionEvent $event)
{
$exception = $event->getThrowable();
Bootstrap::exceptionHandler($exception);
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

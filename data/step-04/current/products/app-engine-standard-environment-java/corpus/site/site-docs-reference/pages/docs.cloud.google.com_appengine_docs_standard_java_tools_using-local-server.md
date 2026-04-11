---
title: "Using the local development server \_|\_ App Engine standard environment \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server
  title: "Using the local development server \_|\_ App Engine standard environment\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Using the local development server
Stay organized with collections
Save and categorize content based on your preferences.
Go
Java
Node.js
PHP
Python
Ruby
Note: You can't use the latest version of dev_appserver.py to locally run your
applications for runtimes that reached end of support .
The Google Cloud CLI for Java
includes a local development server for testing your application on your
computer. The local development server emulates the App Engine Java runtime
environment and all of its services, including Datastore.
Warning: The standalone SDK is shut down
and the local development server commands have changed. The instructions below
assume you have installed gcloud CLI .
Running the Development Web Server
For information about setting your system properties and environment variables
for your app, see
How Requests are Handled .
You can also run the development web server from a command prompt. The command
to run is in the SDK's google-cloud-sdk/bin/ directory.
Windows command syntax:
google - cloud - sdk \ bin \ java_dev_appserver . cmd [ options ] [ WAR_DIRECTORY_LOCATION ]
Linux or macOS command syntax:
google - cloud - sdk / bin / java_dev_appserver . sh [ options ] [ WAR_DIRECTORY_LOCATION ]
The command takes the location of your application's WAR directory as an
argument.
Stopping the development server
To stop the web server, press Ctrl-C .
Detecting the application runtime environment
To determine whether your code is running in production or in the local
development server, you can check the value of the
SystemProperty.environment.value()
method. For example:
if (SystemProperty.environment.value() == SystemProperty.Environment.Value.Production) {
// Production
} else {
// Local development server
// which is: SystemProperty.Environment.Value.Development
}
Using the local Datastore emulator
The development web server simulates Datastore using a local file-backed
Datastore on your computer. The Datastore is named local_db.bin , and it is
created in your application's WAR directory, in the
WEB-INF /appengine-generated/ directory. It is not uploaded with your
application.
This Datastore persists between invocations of the web server, so data you store
will still be available the next time you run the web server. To clear the
contents of the Datastore, shut down the server, then delete this file.
As described in
Datastore Index Configuration ,
the development server can generate configuration for Datastore indexes needed
by your application, determined from the queries it performs while you are
testing it. This generates a file named datastore-indexes-auto.xml in the
directory WEB-INF/appengine-generated/ in the WAR. To disable automatic index
configuration, create or edit the datastore-indexes.xml file in the WEB-INF/
directory, using the attribute autoGenerate="false" for the
<datastore-indexes> element.
Browsing Datastore in the development server
To browse your local Datastore using the development web server:
Start the development server as described previously.
Go to the Development Console .
Click Datastore Viewer in the left navigation pane to view your local
Datastore contents.
The Cloud Datastore consistency model
By default, the local Datastore is configured so that the percentage of
Datastore writes that are not immediately visible in global queries set to 10%.
To adjust this level of consistency, set the
datastore.default_high_rep_job_policy_unapplied_job_pct system property with a
value corresponding to the amount of eventual consistency you want your
application to see.
-Ddatastore.default_high_rep_job_policy_unapplied_job_pct=20
If you are setting this property using the command prompt java_dev_appserver.sh ,
you need to use --jvm_flag=... to set the property:
google_cloud_sdk/bin/java-dev_appserver.sh --jvm_flag=-Ddatastore.default_high_rep_job_policy_unapplied_job_pct=20
The valid range for datastore.default_high_rep_job_policy_unapplied_job_pct is
between 0 and 100. If you use numbers outside of this range, you will receive
an error.
Note: If you require strong consistency for your query results, you need to use
an ancestor query limiting the results to a single entity group. For more
information, see Structuring data for strong consistency .
Specifying the Automatic ID Allocation Policy
You can configure how the local Datastore assigns
automatic entity IDs .
The following automatic ID allocation policies are supported in
the development server:
sequential
IDs are assigned from the sequence of consecutive integers.
scattered
IDs are assigned from a non-repeating sequence of approximately uniformly
distributed integers.
Note: The auto ID assignment policies for the production server are completely
different than those used by the development server. The default production
server policy is similar to the scattered policy but not the same. There is no
policy that corresponds to sequential . Your app should make no assumptions
about the sequence of automatic IDs assigned in production.
The default policy in the local Datastore is scattered .
To specify the automatic ID policy, set the
datastore.auto_id_allocation_policy system property to either sequential or
scattered .
-Ddatastore.auto_id_allocation_policy=scattered
To set this system property through a flag passed to the dev_appserver macro:
java_dev_appserver --jvm_flag=-Ddatastore.auto_id_allocation_policy=scattered
Simulating User Accounts
The development web server simulates Google Accounts with its own sign-in and
sign-out pages. While running under the development web server, the methods
that generate sign-in and sign-out URLs return URLs for /_ah/login and
/_ah/logout on the local server.
The development sign-in page includes a form where you can enter an email
address. Your session uses whatever email address you enter as the active user.
To have the application believe that the logged-in user is an administrator,
check the "Sign in as Administrator" checkbox on the form.
Using URL Fetch
When your application uses the URL Fetch API to make an HTTP request, the
development web server makes the request directly from your computer. The
behavior may differ from when your application runs on App Engine if you use a
proxy server for accessing websites.
The Development Console
The development web server includes a console web application. With the console
you can browse the local Datastore.
To access the console, visit the URL /_ah/admin on your server:
http://localhost:8080/_ah/admin
Command-Line Arguments
For the local development server command options, see here .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

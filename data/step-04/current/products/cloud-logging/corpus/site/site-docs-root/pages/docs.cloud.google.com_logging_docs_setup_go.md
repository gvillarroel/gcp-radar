---
title: "Setting Up Cloud Logging for Go \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/setup/go
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/setup/go
  title: "Setting Up Cloud Logging for Go \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Guides
Send feedback
Setting Up Cloud Logging for Go
Stay organized with collections
Save and categorize content based on your preferences.
We provide a standard library-compatible logging package. The
Cloud Logging library for Go exposes a higher-level layer for working with
Cloud Logging.
The Cloud Logging agent does not have to be installed to use the
Cloud Logging library for Go on a Compute Engine VM instance.
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
Enable the Cloud Logging API.
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
Enable the Cloud Logging API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Installing the package
go get cloud.google.com/go/logging
Using the Go logger
// Sample stdlogging writes log.Logger logs to the Cloud Logging.
package main
import (
"context"
"log"
"cloud.google.com/go/logging"
)
func main () {
ctx := context . Background ()
// Sets your Google Cloud Platform project ID.
projectID := "YOUR_PROJECT_ID"
// Creates a client.
client , err := logging . NewClient ( ctx , projectID )
if err != nil {
log . Fatalf ( "Failed to create client: %v" , err )
}
defer client . Close ()
// Sets the name of the log to write to.
logName := "my-log"
logger := client . Logger ( logName ). StandardLogger ( logging . Info )
// Logs "hello world", log entry is visible at
// Cloud Logs.
logger . Println ( "hello world" )
}
For more information on installation, see the
documentation for the
Cloud Logging library for Go. You can also report issues using the
issue tracker .
Write logs with the Cloud Logging client library
For information on using the Cloud Logging client library for
Go directly, see Cloud Logging Client Libraries .
Run on Google Cloud
For an application to write logs by using the Cloud Logging library for Go, the
service account for the underlying resource must have the
Logs Writer ( roles/logging.logWriter ) IAM role.
Most Google Cloud environments automatically configure the default
service account to have this role.
App Engine
Cloud Logging is automatically enabled for App Engine, and your app's
default service account has
the IAM permissions by default to write log entries.
For more information, see Writing and viewing
logs .
Google Kubernetes Engine (GKE)
GKE automatically grants the default service account
the Logs Writer ( roles/logging.logWriter ) IAM role.
If you use
Workload Identity Federation for GKE
with this default service account to let workloads access specific
Google Cloud APIs, then no additional configuration is required.
However, if you use Workload Identity Federation for GKE with a
custom IAM service account, then ensure that the custom service
account has the role of Logs Writer ( roles/logging.logWriter ).
If needed, you can also use the following command to add the logging.write
access scope when creating the cluster:
gcloud container clusters create example-cluster-name \
--scopes https://www.googleapis.com/auth/logging.write
Compute Engine
Note: To use the Cloud Logging library for Go on a Compute Engine VM instance,
you do not need to install the Cloud Logging agent.
When using Compute Engine VM instances, add the cloud-platform
access scope to each instance. When creating a new instance through the
Google Cloud console, you can do this in the Identity and API access section
of the Create Instance panel. Use the Compute Engine default service
account or another service account of your choice, and select
Allow full access to all Cloud APIs in the Identity and API access
section. Whichever service
account you select, ensure that it has been granted the
Logs Writer role in the IAM & Admin section of the
Google Cloud console.
Run locally and elsewhere
To use the Cloud Logging library for Go outside of Google Cloud,
including running the library on your own workstation, on your data center's
computers, or on the VM instances of another cloud provider, you must
set up Application Default Credentials (ADC) in your local environment to
authenticate to the Cloud Logging library for Go.
For more information, see
Set up ADC for on-premises or another cloud provider .
View the logs
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
In the Logs Explorer, you must specify one or more resources, but the resource
selection might not be obvious. Here are some tips to help you get
started:
If you are deploying your application to App Engine or using the
App Engine-specific libraries, set your resource to
GAE Application .
If you are deploying your application on Compute Engine, set the resource
to GCE VM Instance .
If you are deploying your application on Google Kubernetes Engine, your
cluster's logging configuration determines the resource type of the log
entries. For a detailed
discussion on the Legacy Google Cloud Observability and the Google Cloud Observability
Kubernetes Monitoring solutions, and how those options affect the
resource type, see
Migrating to Google Cloud Observability Kubernetes Monitoring .
If your application is using the Cloud Logging API directly,
the resource is dependent on the API and your configuration. For example,
in your application, you can specify a resource or use a default resource.
If you don't see any logs in the Logs Explorer, to see all log entries,
switch to the advanced query mode and use an empty query.
To switch to the advanced query mode, click menu (▾)
at the top of the Logs Explorer and
then select Convert to advanced filter .
Clear the content that appears in the filter box.
Click Submit Filter .
You can examine the individual entries to identify your resources.
For additional information, see Using the Logs Explorer .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

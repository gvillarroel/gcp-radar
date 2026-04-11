---
title: "Setup \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translate/docs/setup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/setup
  title: "Setup \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Translation
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Setup
To start using Cloud Translation, you need a project that has the Cloud Translation API
enabled and credentials to make authenticated calls. The following sections
detail how to get set up before you make your first call to the Cloud Translation API.
The setup process involves the Google Cloud console, which is a web interface that
you can use to provision, configure, manage, and monitor systems in
Google Cloud. If you haven't used the Google Cloud console before, see the
Cloud console page for more information.
Before you begin
Cloud Translation is available in two
editions ( Basic and Advanced ). Decide which
edition to use because each edition has its own set of client libraries.
Create or select a project
To use services provided by Google Cloud,
you must create a project .
A project organizes all your Google Cloud resources.
A project consists of a set of collaborators,
enabled APIs (and other resources), monitoring tools, billing information,
and authentication and access controls.
You can create one project,
or you can create multiple projects
and use them to organize your Google Cloud resources in a
resource hierarchy .
When creating a project, take note of the
project ID .
You will need this ID to make API calls.
For more information on projects, see the
Resource Manager documentation .
We recommend that you create separate projects for experiments, testing, and
production. After you create a project, record the project number or
ID .
You must provide the project number (or ID) when you make calls to the
Cloud Translation API.
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
Go to project selector
Enable billing
You must enable billing to use Cloud Translation. For more information about
Cloud Translation pricing, see the pricing page .
Note: To help you manage your budget, you can set your usage limits on your
projects. For more information, see Set usage quotas .
A billing account is used to define who pays for a given set of resources,
and it can be linked to one or more projects.
Project usage is charged to the linked billing account.
In most cases, you configure billing when you create a project.
For more information, see the
Billing documentation .
Verify that billing is enabled for your Google Cloud project .
Enabling the API
You must enable the Cloud Translation API for your project.
For more information on enabling APIs, see the
Service Usage documentation .
Enable the Cloud Translation API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set usage quotas
Cloud Translation has a quota management system to help you and Google manage
usage of the service. By default, the number of characters that you can send per
day is unlimited. If you have a set budget, we recommend monitoring your daily
usage and adjusting quotas according to your planned spend.
For more information about quotas, see Quotas and limits .
Set up authentication
If you plan to use the Cloud Translation API, you need to set up authentication.
Any client application that uses the API must be authenticated and granted
access to the requested resources. For more information, see Authenticate to
Cloud Translation .
Identity and Access Management roles
When a principal (user account, service account, and so on) calls an API,
Google Cloud requires that the principal has the appropriate permissions.
You can grant permissions by granting roles to a principal. For more
information, see Control access with
IAM .
Note: Role permissions only apply to Cloud Translation - Advanced . Although you
can use service accounts for both editions, you can only set specific
permissions for Cloud Translation - Advanced. For Cloud Translation - Basic, you can
make any request regardless of the service account's permissions.
Installing client libraries
Client libraries are available for several popular languages. We recommend that
you use these client libraries to make calls to Cloud Translation because they
make it easier to access the APIs. If a client library doesn't meet your
needs or isn't available for your language, build your own custom code. For
more information, see Using your own client
code .
For example, when you use a client library, it can determine your credentials
implicitly through the GOOGLE_APPLICATION_CREDENTIALS environment variable.
You don't need to explicitly specify your credentials in code. For more
information, see Client Libraries
Explained in the Cloud APIs
documentation.
Cloud Translation - Basic client libraries
Select the programming language that you are using for development, and then run
the related command. For more information, see the Cloud Translation - Basic
client libraries overview .
C#
nuget install Google.Cloud.Translation.V2
Go
go get cloud.google.com/go/translate
Java
Caution: The Java client library does not support Android.
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .79.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - translate < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - translate : 2.88.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-translate" % "2.88.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
Node.js
For more on setting up your Node.js development environment, refer to the
Node.js Development Environment Setup Guide .
npm install @google-cloud/translate
PHP
composer require google/cloud-translate
Python
For more on setting up your Python development environment, refer to the
Python Development Environment Setup Guide .
pip install google-cloud-translate==2.0.1
Ruby
For more on setting up your Ruby development environment, refer to the
Ruby Development Environment Setup Guide .
gem install google-cloud-translate-v2
Cloud Translation - Advanced client libraries
Select the programming language that you are using for development, and then run
the related command. For more information, see the Cloud Translation - Advanced
client libraries overview .
C#
nuget install Google.Cloud.Translate.V3 -Pre
Go
go get cloud.google.com/go/translate/apiv3
Java
Caution: The Java client library does not support Android.
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .79.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - translate < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - translate : 2.88.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-translate" % "2.88.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
Node.js
For more on setting up your Node.js development environment, refer to the
Node.js Development Environment Setup Guide .
npm install @google-cloud/translate
PHP
composer require google/cloud-translate
Python
For more on setting up your Python development environment, refer to the
Python Development Environment Setup Guide .
pip install --upgrade google-cloud-translate
Ruby
For more on setting up your Ruby development environment, refer to the
Ruby Development Environment Setup Guide .
gem install google-cloud-translate
Install the Google Cloud CLI
Note: You can skip this step if you won't be using the command line to make
authenticated API calls.
If you plan to send Cloud Translation requests through the command line (such as
through curl commands), install and initialize the gcloud CLI
, which is included in the Google Cloud CLI. The following link
provides more information:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Test the SDK and authentication
If you have set up the GOOGLE_APPLICATION_CREDENTIALS environment variable,
you can use gcloud to test your authentication environment. Run the following
command and verify that no error occurs and that credentials are returned:
gcloud auth application-default print-access-token
The previous command is used by all Cloud Translation command line REST
samples to authenticate API calls.
What's next
Try the quickstarts to make simple translation calls:
Cloud Translation - Basic quickstart
Cloud Translation - Advanced quickstart
View the product overview for more information about
using various Cloud Translation features.
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
Cloud Translation performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try Cloud Translation free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

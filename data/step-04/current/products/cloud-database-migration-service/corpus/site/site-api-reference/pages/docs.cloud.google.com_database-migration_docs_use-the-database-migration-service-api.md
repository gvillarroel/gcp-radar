---
title: "Use the Database Migration Service API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-migration/docs/use-the-database-migration-service-api
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/database-migration/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/database-migration/docs/use-the-database-migration-service-api
  title: "Use the Database Migration Service API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Migration Service
APIs and reference
Send feedback
Use the Database Migration Service API
Stay organized with collections
Save and categorize content based on your preferences.
Overview
Database Migration Service provides a REST API for administering your connection profiles and migration jobs programmatically. The REST API is defined by resources associated with creating and managing connection profiles and migration jobs. For details about all resources
and their methods, see the
Database Migration Service API Reference .
When you send requests directly to the Database Migration Service REST API, you must create the
correct form of the request, authorize the request as an authenticated user, and
process any responses returned. Many of the tasks in this documentation provide
API examples using cURL .
For more examples of using the APIs, see the page for the request in the
Database Migration Service API Reference . Each page has
examples calling the API in several programming languages, as well as a
request-specific Explorer to help you see what goes into a well-formed request
and what to expect in the response.
You're also using the Database Migration Service API, indirectly, when you use any of the
following ways of administering instances:
Google Cloud CLI : A command-line interface (CLI) that you can use to work with your instances.
Google Cloud console : A graphical web interface.
The advantage of using these methods, especially the
Google Cloud console, is that they can greatly simplify administering your
connection profiles and migration jobs (depending on your use case). If you're just starting out with
Database Migration Service, then we recommend that you start with one of these tools first
before working with the REST API directly.
Enable the API
To use the Database Migration Service API, you need to enable it:
Console
Enable the Database Migration Service API .
Select your project.
Select Continue .
gcloud
Enter the following to display the project IDs for your Google Cloud
projects:
gcloud projects list
Set your default project:
gcloud config set project YOUR_PROJECT_ID
Enable the Cloud SQL Admin API:
gcloud services enable datamigration.googleapis.com
Permissions
You must have the required permissions to use the Database Migration Service API. These permissions include:
Database Migration Admin: With this permission, a user gains access to all resources of Database Migration Service used to manage connection profiles and migration jobs.
Database Migration Viewer: With this permission, a user has read-only access to connection profiles and migration jobs in Database Migration Service.
Cloud SQL Admin: With this permission, a user can create and manage connection profiles and migration jobs for Cloud SQL in Database Migration Service.
Google Cloud offers Identity and Access Management (IAM), which lets you give more granular access to specific Google Cloud resources and prevents unwanted access to other resources. You can get and set permissions for Database Migration Service using the Google Cloud console, the IAM methods of the API, or the Google Cloud CLI. For more information, see Granting, changing, and revoking access to resources .
These pages appear in the How-to guides for MySQL , PostgreSQL , and SQL Server .
Provide JSON data from a file
When you use the API with cURL, you provide property values using the command
line. If you're working with sensitive values such as passwords or security
keys, providing them on the command line poses a security risk. For increased
security, you can create a file containing the JSON data for the API call, and
provide the path to the file on the command line.
To provide JSON data to your cURL API call from a file:
Create a file containing everything enclosed in single quotes for the
--data field.
Include the curly brackets, but don't include the single quotes.
At the command line, provide the path to the file, preceded by the
@ character, as the --data parameter:
--data @<path-to-file>/<filename>
For example, to create a connection profile for a Cloud SQL source database, you could create a file named request.json with the following content:
{
"displayName": "my Cloud SQL connection profile",
"mysql": {
"host": "10.11.12.13",
"port": port-number-of-source-database ,
"username": "myusername",
"password": "mypassword"
}
}
Then, you would use the following cURL command at the command line:
curl --header "Authorization: Bearer ${ ACCESS_TOKEN } " \
--header 'Content-Type: application/json' \
--data @./request.json \
-X POST \
https://datamigration.googleapis.com/v1/projects/myProject/locations/myLocation/connectionProfiles?connectionProfileId = myCloudSQLconnectionprofile
Work with long-running API calls
Some API calls, such as object creation, can take some time to complete. Because
the API is asynchronous, the call returns immediately, even if the operation is
still in progress. If a subsequent API call uses the newly created object, then you
must wait for the first operation to complete before proceeding.
You can use the Database Migration Service API to manage operations . This includes:
Showing details about an operation
Listing operations for a region
Deleting an operation
Database Migration Service and Google APIs Discovery Service
Google APIs Discovery Service is a service that you can use to
discover Google APIs. For example, when you use the Google APIs Explorer
tool, you're using the Discovery Service.
In the Discovery Service, Database Migration Service is represented as "datamigration" (for example:
https:// datamigration .googleapis.com/$discovery/rest?version=v1).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

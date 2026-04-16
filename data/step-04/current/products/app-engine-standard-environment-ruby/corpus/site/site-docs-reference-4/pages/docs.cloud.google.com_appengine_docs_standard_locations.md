---
title: "App Engine locations \_|\_ App Engine standard environment \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/locations
knowledge_key: corpus
source_id: site-docs-reference-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/ruby/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/locations
  title: "App Engine locations \_|\_ App Engine standard environment \_|\_ Google\
    \ Cloud Documentation"
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
Resources
Send feedback
App Engine locations
Stay organized with collections
Save and categorize content based on your preferences.
App Engine is regional , which means the infrastructure that runs your apps is
located in a specific region, and Google manages it so that it is available
redundantly across
all of the zones within that region .
Meeting your latency, availability, or durability requirements are primary
factors for selecting the region where your apps are run. You can generally
select the region nearest to your app's users, but you should consider the
locations where App Engine is available
as well as the locations of the other
Google Cloud products and services that your app uses. Using services
across multiple locations can affect your app's latency as well as its
pricing .
You cannot change an app's region after you set it.
Note: Two locations, which are called europe-west and
us-central in App Engine commands and in the Google Cloud console,
are called europe-west1 and us-central1 , respectively,
elsewhere in Google documentation.
If you already created an App Engine application, you can view its
region by doing one of the following:
Run the gcloud app describe command.
Open the
App Engine Dashboard in the Google Cloud console .
The region appears near the top of the page.
To select a region, you create an App Engine application in your
Google Cloud project. See Manage projects, applications, and billing
for details in your language for either the
standard
or flexible
environment.
Cloud Storage location
When you create an app, App Engine creates a default
bucket in Cloud Storage .
Generally, the location of this bucket is the region matching the location of
your App Engine app.
The following App Engine app locations create buckets that are multi-region:
Apps located in us-central create a bucket in the
US multi-region.
Apps located in europe-west create a bucket in the
EU multi-region.
To learn more about Cloud Storage bucket locations, see
Bucket locations .
Firestore location
When you create an app, App Engine creates a default database in
Firestore .
Generally, the location of this database is the region matching the location of
your App Engine app.
The following App Engine app locations create databases that are multi-region:
Apps located in us-central create a database in the
nam5 multi-region.
Apps located in europe-west create a database in the
eur3 multi-region.
To learn more about Firestore bucket locations, see
Database locations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

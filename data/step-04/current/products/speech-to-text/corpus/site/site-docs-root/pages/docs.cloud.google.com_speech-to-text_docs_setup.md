---
title: "Set up Cloud Speech-to-Text for your Google Cloud project \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/setup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/setup
  title: "Set up Cloud Speech-to-Text for your Google Cloud project \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Send feedback
Set up Cloud Speech-to-Text for your Google Cloud project
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Speech-to-Text is an API that converts speech to text by taking audio data as
input and outputting a text transcription by using Google's AI
technology. This page shows you how to set up the Cloud Speech-to-Text API for your project
so you can start making calls to the API.
This document covers the following:
Enabling and disabling the Cloud Speech-to-Text API for a Google Cloud project
Enabling billing for Cloud Speech-to-Text
Optional: Creating a new Google Cloud Storage bucket to store your audio
data for large file sizes
This document does not cover how to start sending and receiving requests using
the Cloud Speech-to-Text API. For information on how to start integrating Cloud Speech-to-Text
into your actual code, see our overview page .
Before you begin
There are two ways to access the service: by using the REST API, or by using the
Google Cloud console.
This guide covers the steps necessary to start sending requests to the REST API.
If you are new to coding, we recommend that you start with the step-by-step
in-console tutorials in Google Cloud
Platform before beginning these
steps.
Enable the Cloud Speech-to-Text API for your Google Cloud project
Sign in to Google Cloud console .
Open the project selector
page and either choose an existing project or create a new one. For more
information about creating a project, see
Creating and managing projects .
If you create a new project, you will be prompted to link a billing account
to this project. If you are using a pre-existing project, make sure that you
have billing enabled.
Learn how to confirm that billing is enabled for your project
Note: You must enable billing to use Cloud Speech-to-Text API, however you won't be charged
unless you exceed the free quota. See the
pricing page for more
details.
Enable the Cloud Speech-to-Text API. Click the Search products and resources
text field at the top of the page and type in "speech" . Select the
Cloud Speech-to-Text API from the list of results.
To enable the Cloud Speech-to-Text API for use with your project, click
Enable . To try Cloud Speech-to-Text without linking it to your project,
click Try this API .
Optional: (API V1 only) Enable data logging. By opting in to data logging,
you allow Google to record any audio data that you send to Cloud Speech-to-Text.
This data is used to improve the Cloud Speech-to-Text models. Users who opt in
to data logging benefit from lower pricing. See the
pricing and data logging
terms and conditions pages for more
information.
Optional: Create a Cloud Storage bucket
If you intend to transcribe audio longer than 60 seconds or with a file size
larger than 10 MB, you must store the audio data in a Cloud Storage bucket
before you can transcribe it using Cloud Speech-to-Text.
To create a new Cloud Storage bucket:
In the Google Cloud console, go to the Cloud Storage
Buckets page.
Go to Buckets
Click add_box Create .
On the Create a bucket page, enter your bucket information. To go to the next
step, click Continue .
For Name your bucket , enter a unique bucket name. Don't include sensitive
information in the bucket name, because the bucket namespace is global and publicly
visible.
In the Choose where to store your data section, do the following:
Select a Location type .
Choose a location where your bucket's data is permanently stored from the Location type drop-down menu.
If you select the dual-region location type, you can
also choose to enable turbo replication by using the
relevant checkbox.
To set up cross-bucket replication , select
Add cross-bucket replication via Storage Transfer Service and
follow these steps:
Set up cross-bucket replication
In the Bucket menu, select a bucket.
In the Replication settings section,
click Configure to configure settings for the
replication job.
The Configure cross-bucket replication pane
appears.
To filter objects to replicate by object name prefix,
enter a prefix that you want to include or exclude objects from, then click add
Add a prefix .
To set a storage class for the replicated objects,
select a storage class from the Storage class menu.
If you skip this step, the replicated objects will use the
destination bucket's storage class by default.
Click Done .
In the Choose how to store your data section, do the following:
Select a default storage class for the bucket or
Autoclass for automatic storage class management of your
bucket's data.
To enable hierarchical namespace , in the
Optimize storage for data-intensive workloads section, select
Enable hierarchical namespace on this bucket .
Note: You cannot enable hierarchical namespace in existing
buckets.
In the Choose how to control access to objects section, select
whether or not your bucket enforces public access prevention ,
and select an access control method for your bucket's objects.
Note: You cannot change the Prevent public access setting if this setting is enforced at an organization policy .
In the Choose how to protect object data section, do the
following:
Select any of the options under Data protection that you
want to set for your bucket.
To enable soft delete , click the
Soft delete policy (For data recovery) checkbox,
and specify the number of days you want to retain objects
after deletion.
To set Object Versioning , click the
Object versioning (For version control) checkbox,
and specify the maximum number of versions per object and the number of days after which
the noncurrent versions expire.
To enable the retention policy on objects and buckets, click the Retention (For compliance) checkbox, and then do the following:
To enable Object Retention Lock , click the
Enable object retention checkbox.
To enable Bucket Lock , click the Set bucket retention policy checkbox, and choose a unit of time and a length of time for your retention period.
To choose how your object data will be encrypted, expand the
Data encryption section ( expand_more ), and select a
Data encryption method .
Click Create .
Disable the Cloud Speech-to-Text API
If you no longer need to use the Cloud Speech-to-Text API with your project:
Navigate to your Google Cloud dashboard and click Go to APIs overview .
Select Cloud Speech-to-Text API .
Click Disable API .
What's next
Learn how to send a transcription request to the Cloud Speech-to-Text API using
client libraries ,
gcloud , the
command line ,
or the Speech-to-Text UI .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
title: "Google Cloud console \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/cloud-console
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/apis?hl=en
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/cloud-console
  title: "Google Cloud console \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Reference
Send feedback
Google Cloud console
Stay organized with collections
Save and categorize content based on your preferences.
The browser-based Google Cloud console tool lets you manage your Cloud Storage
resources through a graphical interface. Use the Google Cloud console to
manage your data if you prefer using a user interface through the browser.
This page describes how to access the Google Cloud console and lists tasks
in Cloud Storage that can be performed using the Google Cloud console.
As an alternative to the Google Cloud console, you can also use the
Google Cloud CLI , REST API , or
Cloud Storage client libraries .
Console features
The Google Cloud console provides the following features:
Access to all your Google Cloud projects
Access to the Cloud Shell
A customizable project dashboard, with an overview of Google Cloud
resources, billing, and a filterable activity listing
Access to all Google Cloud APIs, with a dashboard specific to each
API, and access to manage your resources
Links to Google Cloud starting points, news, and documentation
The Google Cloud console is used to perform a variety of tasks in
Cloud Storage, such as the following:
Creating buckets
Uploading objects to buckets and downloading objects from buckets
Filtering and sorting lists of buckets and objects
Deleting objects
Creating and managing folders
Controlling access to your data and resources by using
Identity and Access Management (IAM) and ACLs
Monitoring buckets and bandwidth usage
Using Cloud Storage features like Rapid Cache ,
soft delete , and Object Versioning
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
Cloud Storage performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try Cloud Storage free
Access to the Google Cloud console
The Google Cloud console requires no setup or installation, and you can
access it directly in a browser. Depending on your use case, you access the
Google Cloud console using different URLs. If you are:
A user granted access to a project
Use: https://console.cloud.google.com/
Go to the Google Cloud console
A current project owner can give you access to the entire project , which
applies equally to all buckets and objects defined in the project.
A user granted access to a bucket
Use: https://console.cloud.google.com/storage/browser/ BUCKET_NAME
In this use case, a project owner gives you access to an individual bucket
within a larger project. The owner then sends you the bucket name which you
substitute into the URL. You are able to only work with objects in the
specified bucket. This is useful for users who don't have access to the full
project, but who need to access a bucket. When you access the URL, you
authenticate if you are not already signed in.
A variation of this use case is when a project owner grants All Users
permission to read objects in a bucket. This creates a bucket whose contents
are publicly readable. For more information, see Make data public .
A user granted access to an object
Use: https://console.cloud.google.com/storage/browser/_details/ BUCKET_NAME / OBJECT_NAME
In this use case, a project owner gives you access to single objects within
a bucket and sends you the URL to access the objects. When you access the URLs,
you are prompted to authenticate with a user account if you are not already
signed in.
Note that the form of this URL is different from the URL for objects that
are shared publicly . When you share a link publicly, the URL is of the
form: https://storage.googleapis.com/ BUCKET_NAME / OBJECT_NAME .
This public URL does not require a recipient to authenticate with a valid
account and can be used for non-authenticated access to an object.
Filtering and sorting lists of buckets and objects
In the Google Cloud console list of buckets for a project, you can filter and
sort the buckets you see.
To filter buckets, click Filter buckets . Then, specify the columns
and values you want to filter by.
To sort buckets, click arrow_upward
Sort next to the name of the column you want to sort by.
To improve filtering performance in projects with more than 1,000 buckets, you
can limit filtering options and disable sorting. To do this,
click View options . Select Filter by name prefix only , and then click
Save . Then, specify the bucket name prefix you want to filter by.
Note: Projects with more than 1,000 buckets might experience degraded
filtering and sorting performance.
To switch the list view between live buckets and soft-deleted buckets, click
View options . Then, select Live buckets only or
Soft deleted buckets only .
In the Google Cloud console list of objects for a bucket, you can filter the
objects you see by using the Filter field.
To filter objects, select the Sort and filter option and then
specify the column and value you want to filter by.
To filter objects by object name prefix, select the
Filter by name prefix only option and then specify the object name prefix
you want to filter by.
To sort objects, click arrow_upward
Sort next to the name of the column you want to sort by.
Filtering and sorting only applies to objects and folders in the current
path being displayed. For example, if you're viewing the top-level of a bucket,
filtering and sorting don't return objects contained in folders.
Note: Buckets with large numbers of objects and folders in the current path
might experience degraded performance when sorted or filtered with criteria
other than the object name prefix.
Showing and hiding columns
To show or hide columns for a list of buckets or objects, click
View column ( view_column ), then select
the columns you want to see or hide.
Cross-product integrations
The following integrations with other Google Cloud products are available
in the Objects tab of a bucket:
Large scale data transfers to and from the bucket using Storage Transfer Service
Storage Transfer Service is a service that lets you transfer large volumes of
data between your bucket and other storage options, such as
your on-premises file system, other buckets, or other cloud providers.
You can initiate a transfer by clicking the Transfer data drop-down in
the Objects tab, selecting either Transfer data in or
Transfer data out , and following the instructions.
Scanning the bucket for sensitive data using Sensitive Data Protection
Sensitive Data Protection is a service that lets you identify and
protect sensitive data in your buckets, such as credit card numbers, IP
IP addresses, and other forms of personally identifiable information (PII).
For a list of the types of data Sensitive Data Protection detects,
see the Infotype detector reference .
You can initiate a Sensitive Data Protection scan for a bucket by
clicking the Other services drop-down in the Objects tab, selecting
Inspect for sensitive data , and following the instructions. For a guide
to performing a Sensitive Data Protection scan on a bucket, see
Inspecting a Cloud Storage location .
Exporting data from the bucket to Pub/Sub
Pub/Sub is a messaging service that lets you notify
subscribers about events that occur for your Google Cloud resources.
Pub/Sub supports receiving event records that are stored as text
files in your bucket and publishing them to a Pub/Sub topic.
You can create an export job for a bucket by clicking the Other services
drop-down in the Objects tab, selecting Export data to Pub/Sub , and
following the instructions. For more information, see
Cloud Storage text to Pub/Sub (Batch) template .
Processing data in the bucket using Cloud Run functions
Cloud Run functions is a service that lets you specify code that should
run when certain events occur within the bucket. For example, you could
create a Java function that runs every time an object in the bucket is
deleted.
You can define a function for a bucket by clicking the Other services
drop-down in the Objects tab, selecting Process data , and following
the instructions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

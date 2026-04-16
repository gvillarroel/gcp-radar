---
title: "Point-in-time recovery (PITR) overview \_|\_ Firestore with MongoDB compatibility\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/pitr
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/pitr
  title: "Point-in-time recovery (PITR) overview \_|\_ Firestore with MongoDB compatibility\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore with MongoDB compatibility
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Point-in-time recovery (PITR) overview
Point-in-time recovery (PITR) protects against
accidental deletion or writes. PITR maintains versions of your
documents from past timestamps. For example, in the case of a developer
pushing any incorrect data, accidental deletes or writes, PITR can recover the
data to a point in time in the past (up to a maximum of 7 days).
PITR window
After you enable PITR, Firestore starts retaining PITR data. PITR data
is retained for 7 days in the PITR window.
You can read data for a timestamp based on when PITR was enabled:
PITR enablement status
Earliest PITR data available
Disabled
1 hour before the time of read request
enabled within 7 days
1 hour before PITR was enabled
enabled more than 7 days ago
7 days before the time of read request
Note: You can't start reading from 7 days in the past immediately after you enable PITR.
A single version per minute is retained in the PITR window. You can read
documents at minute granularity using a whole minute timestamp. Reads that are
not at minute granularity like 2023-05-30 09:00:00.1234AM return an
error that the read_time is too old.
Only one version of a document is retained in case of multiple writes. For
example, if a document had multiple writes ranging from v1, v2, ... vk between
2023-05-30 09:00:00AM (exclusive) and 2023-05-30 09:01:00AM (inclusive)
timestamp, a read request at timestamp 2023-05-30 09:01:00AM returns the vk
version of the document.
You can read from the data created during the PITR
window. The data is stored at a minute granularity and you can recover data
at the same granularity. The PITR feature is disabled by default.
The earliestVersionTime field of your database specifies the
earliest permissible read time for your data.
Regardless of whether PITR is enabled or not, you can read (but not export) documents at any microsecond-granularity timestamp within the past hour, but not before the earliestVersionTime .
Ways to recover data
There are several ways to recover data:
To recover a portion of the database ,
perform a read
specifying a query-condition along with a timestamp in
the past,
and then write the results back into the live database. This is
typically used for surgical operations on a live database. For example, if
you accidentally delete a particular document or incorrectly update a
subset of data, you can recover it with this method. For instructions, see
recovering a portion of your database .
To recover the entire database , use one of the following options:
Clone the database
to create a copy of the database at a specific timestamp.
Export the database and specify
a timestamp in the past and then import it to a new database. The PITR
export operation supports all filters, including export of all documents and
export of specific collections.
You can clone or export PITR data where the timestamp
is a whole minute timestamp within the past seven days, but not earlier than
the earliestVersionTime .
Pricing
Consider the following pricing information before you enable PITR for your database:
Storage: Firestore with MongoDB compatibility measures the database size daily. Over the
period of a month, these sample points are averaged to calculate the
database storage size. This average value is multiplied by the unit price of
PITR (GB-month). See storage pricing for more information.
PITR storage doesn't have a free tier and you must have billing enabled if you want to use PITR.
Compute billing: Any queries that you make during the PITR window of 7 days,
either through stale reads or exports, incur read operation costs
based on the number of documents read. See pricing for more
information.
Minimum billing: You may be charged up to 1 day of PITR storage cost even if you disable PITR within a day after enablement.
What's next
Learn more about how to recover data with PITR .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

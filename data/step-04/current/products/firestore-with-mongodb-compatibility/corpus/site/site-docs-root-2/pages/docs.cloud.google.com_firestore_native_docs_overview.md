---
title: "Firestore overview \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/native/docs/overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/native/docs
source_metadata:
  url: https://docs.cloud.google.com/firestore/native/docs/overview
  title: "Firestore overview \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore in Native mode
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Firestore overview
Firestore is a flexible, scalable database for mobile, web,
and server development from Firebase and Google Cloud.
Firestore keeps your data in sync across client apps through
realtime listeners and offers offline support for mobile and web so you can
build responsive apps that work regardless of network latency or Internet
connectivity. Firestore in Native Mode also offers seamless integration with other Firebase
and Google Cloud products, including Cloud Run functions.
Key capabilities
Flexibility
The Firestore in Native Mode data model supports flexible, hierarchical data structures.
Store your data in documents, organized into collections. Documents
can contain complex nested objects in addition to subcollections.
Expressive querying
In Firestore in Native Mode, you can use queries to retrieve individual,
specific documents or to retrieve all the documents in a collection that
match your query parameters. Your queries can include multiple, chained
filters and combine filtering and sorting. They're also indexed by default,
so query performance is proportional to the size of your result set, not
your dataset.
Designed to scale
Firestore in Native Mode brings you automatic multi-region data replication,
strongly-consistent queries, atomic batch operations, and transaction
support.
Realtime updates
Firestore in Native Mode uses data synchronization to update data on
any connected device. However, it's also designed to make simple, one-time
fetch queries efficiently.
Offline support
Firestore in Native Mode caches data that your app is actively using, so the app can write,
read, listen to, and query data even if the device is offline. When the
device comes back online, Firestore in Native Mode synchronizes any local changes back
to Firestore in Native Mode.
How does it work?
Firestore in Native Mode is a cloud-hosted, NoSQL database available
in Node.js, Java, Python, Unity, C++ and Go client libraries, in addition to REST and
RPC APIs. Apple, Android, and web apps can also access the database
directly using the client libraries.
Following Firestore in Native Mode's NoSQL data model, you store data in documents that
contain fields mapping to values. These documents are stored in
collections, which are containers for your documents that you can use to
organize your data and build queries. Documents support many different
data types , from simple strings and numbers, to
complex, nested objects. You can also create subcollections within
documents and build hierarchical data structures that scale as your
database grows. The Firestore in Native Mode data model supports whatever
data structure works best for your app.
Additionally, querying in Firestore in Native Mode is expressive, efficient, and flexible.
Create shallow queries to retrieve data at the document level without needing to
retrieve the entire collection, or any nested subcollections. Add sorting,
filtering, and limits to your queries or cursors to
paginate your results. To keep data in your apps current, without retrieving
your entire database each time an update happens, add realtime listeners.
Adding realtime listeners to your app notifies you with a data snapshot whenever
the data your client apps are listening to changes, retrieving only the new
changes.
Protect access to your data in Firestore in Native Mode with
Identity and Access Management (IAM) for server-side languages. For
Android, Apple platforms, and JavaScript protect your data with
Firebase Authentication and Firestore Security Rules .
What's next
Get started with Firestore in Native Mode — set up your database, then add
data and start reading it.
Learn more about the Firestore in Native Mode data model .
Create and manage databases .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

---
title: "Database version policies \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/db-version-policies
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/db-version-policies
  title: "Database version policies \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Resources
Send feedback
Database version policies
Stay organized with collections
Save and categorize content based on your preferences.
This page describes database version support policies for AlloyDB for PostgreSQL.
AlloyDB and AlloyDB Omni version policies
AlloyDB for PostgreSQL , which runs in Google Cloud, and AlloyDB Omni ,
which you install and run on your own computing environment, have related
but distinct versioning policies as described in this section.
AlloyDB version policies
AlloyDB instances run a database server created and maintained by
Google that is fully compatible with PostgreSQL. You have control over which
major PostgreSQL version your instances are compatible with.
AlloyDB keeps the minor version compatibility of instances
automatically updated.
Every AlloyDB cluster supports compatibility with a specific
PostgreSQL major version—for example, PostgreSQL 18. You choose the major
version when you create the cluster. After you choose a major version, the
cluster retains that major version for the duration of
its lifetime unless you initiate a major version upgrade. You can upgrade
a cluster by performing an
in-place major version upgrade
or by migrating the cluster's data to a new cluster .
Every AlloyDB instance runs a database service that is compatible
with a specific minor PostgreSQL version—for example, 16.3.
AlloyDB releases minor version compatibility updates several
times per year, and automatically applies these updates to instances. These
updates keep every instance up to date with the most recent bug fixes and
security patches available for its major version.
AlloyDB Omni version policies
Every version of AlloyDB Omni has compatibility with a
specific version of PostgreSQL, as detailed in Major version compatibility release policy .
Because AlloyDB Omni is software
that you install and run yourself, you are also responsible for regularly updating your AlloyDB Omni installation
as needed. The availability of new versions of AlloyDB Omni is announced on
AlloyDB for PostgreSQL release notes .
Major and minor version support
AlloyDB supports compatibility with the following PostgreSQL
database versions:
PostgreSQL compatible version
AlloyDB
AlloyDB Omni
PostgreSQL 18
18.1
Not applicable
PostgreSQL 17 (default)
17.5
17.5
PostgreSQL 16
16.9
16.8
16.3
PostgreSQL 15
15.13
15.12
15.7
15.5
15.4
15.2
PostgreSQL 14
14.18
Not applicable
PostgreSQL 18 compatibility
Before you use PostgreSQL 18 as your database version, consider the following:
PostgreSQL 18 isn't available with AlloyDB Omni.
Logical replication from the standby server isn't supported.
PostgreSQL 17 compatibility
Before you use PostgreSQL 17 as your database version, consider the following:
Logical replication from the standby server isn't supported.
PostgreSQL 16 compatibility
Before you use PostgreSQL 16 as your database version, consider the following:
Logical replication from the standby server isn't supported.
Major version support timeline
The following table shows the dates when AlloyDB support for
compatible versions became generally available (GA):
PostgreSQL compatible version
AlloyDB version support GA date
AlloyDB Omni version support GA Date
PostgreSQL 18
March 18, 2026
Not applicable
PostgreSQL 17
September 22, 2025
Not applicable
PostgreSQL 16
October 23, 2024
April 8, 2025
PostgreSQL 15
January 19, 2024
October 11, 2023
PostgreSQL 14
December 12, 2022
Not applicable
Major version compatibility release policy
We aim to offer timely support for AlloyDB compatibility with new PostgreSQL major versions.
The specific timing depends on the AlloyDB product:
AlloyDB for PostgreSQL : We aim to support compatibility with a new major PostgreSQL version within eight months of
the PostgreSQL release numbered MAJOR_VERSION .1 .
We plan to support AlloyDB for PostgreSQL compatibility with any one major
PostgreSQL major version for at least as long as the PostgreSQL community
supports that same major version—that is, no less than five years.
AlloyDB Omni : We aim to support compatibility with a new major PostgreSQL within eight months of
the PostgreSQL release numbered MAJOR_VERSION .1 .
The version number of AlloyDB Omni releases reflects its
version of PostgreSQL support. AlloyDB Omni version numbers
use the following format:
MAJOR_VERSION . MINOR_VERSION . OMNI_VERSION
For example, AlloyDB Omni version 15.4.2 represents version 2 of the AlloyDB Omni release that supports
compatibility with PostgreSQL version 15.4.
We plan to support AlloyDB Omni compatibility with any one major PostgreSQL version for at least as long as the
PostgreSQL community supports that same major version—that is, no less than five years.
AlloyDB in Google Distributed Cloud : We aim to support compatibility with a new major PostgreSQL version within four months of the availability of that major
version in AlloyDB Omni.
These are general guidelines. The actual release
times for any new version may differ.
Major version deprecation plan
Google uses the PostgreSQL community's end-of-life
schedule
when planning the end of AlloyDB support for compatibility with
any PostgreSQL major version.
When Google intends to end compatibility support for a specific major version of
PostgreSQL, we provide the following to project owners:
End-of-support notices, sent at least 12 months ahead of time.
Tools and documentation to minimize upgrade disruption, as needed.
Any AlloyDB cluster still running the deprecated major database version at the end of
the 12-month period is automatically upgraded.
Version dependencies for AlloyDB features
Certain AlloyDB features might require a major version of
PostgreSQL compatibility in order to run on an AlloyDB instance.
Any feature with such a minimum requirement notes it in the documentation of
that feature.
Minor version support
AlloyDB, AlloyDB Omni, and AlloyDB
in Distributed Cloud aim to release compatibility support for a new minor PostgreSQL version
every quarter. These updates include bug fixes and security fixes. The schedule
may vary depending on the need for additional bug fixes.
After AlloyDB releases support for a new minor PostgreSQL
version, Google
automatically applies this update to all instances. These updates are propagated
during a subsequent maintenance rollout. For more information about
automatic AlloyDB maintenance, see About maintenance .
For example, if AlloyDB releases support for a new minor version
of PostgreSQL 17, then a cluster configured with Postgres 17 compatibility has
all of its instances upgraded to this new minor version during a subsequent
scheduled maintenance operation.
When you create an AlloyDB instance, it runs the most recently
supported minor version within the major PostgreSQL version.
For AlloyDB Omni, you must download and install the binaries
that include upgraded PostgreSQL minor-version compatibility.
Some AlloyDB Omni releases are updates to AlloyDB Omni
itself, independent from updates to PostgreSQL support. These releases include
bug fixes and security updates, and are reflected by an increment to the last part of
the release version number.
AlloyDB Omni CLI version
The AlloyDB Omni CLI uses a MAJOR . MINOR versioning scheme
that indicates only the version of the CLI itself. Its version numbers and its
versioning schedule exist independently from AlloyDB Omni.
The major version of the AlloyDB Omni CLI is increased only upon the introduction
of changes that are backwards-incompatible with the previous release of the CLI.
Security updates
When the PostgreSQL community releases minor versions with security fixes,
the AlloyDB security team reviews them for the criticality and
impact.
For AlloyDB for PostgreSQL, critical fixes are backported and your
clusters are updated as part of a subsequent maintenance rollout. We aim to
apply critical patches within one month.
Less severe fixes are included in future minor version upgrades. This ensures that your clusters are always
up to date with the latest security fixes, and are protected from potential
attacks.
For AlloyDB Omni, we release a new binary that has the fix
with the new minor version within a month of the PostgreSQL community release.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

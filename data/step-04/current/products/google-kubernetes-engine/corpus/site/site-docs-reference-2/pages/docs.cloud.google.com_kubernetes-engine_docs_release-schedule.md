---
title: "GKE release schedule \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule
  title: "GKE release schedule \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Resources
Send feedback
GKE release schedule
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an estimated release schedule for each supported minor
version in the release
channels . For clusters not
enrolled in a release
channel , version
milestone dates can be derived from the release channel
schedule .
To learn how Google Kubernetes Engine (GKE) upgrades clusters, see About
GKE cluster upgrades . For more
details about GKE version support policies, see
GKE versioning and support . To
learn about auto-upgrade targets, see What happens when a version becomes an
auto-upgrade target in a release
channel .
This page is for Admins, Architects, and Operators who
manage the lifecycle of the underlying tech infrastructure. To learn more about
common roles and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Dates provide a general estimate
The dates in the table are best-effort predictions. Based on qualification and
stability of releases, availability and upgrade dates might be delayed. Future
dates are updated periodically when new information becomes available, and past
dates are updated for accuracy.
To stay up-to-date on version availability and auto-upgrade timing, revisit this
page, and subscribe to GKE upgrade
notifications . To get
auto-upgrade targets for a specific cluster, see Get information about a
cluster's upgrades .
The timing of automatic upgrades
After a version is announced as an auto-upgrade target, the date of the actual
cluster upgrade depends on some of the following factors:
The timing of the rollout of the version to the cluster's region.
GKE follows a multi-day rollout schedule (typically four or
more days) to make new versions available and to auto-upgrade cluster
control planes and nodes. Rollouts are paused during weekends and holidays,
and include time to observe and monitor for problems.
The cluster's configuration of maintenance windows and
exclusions .
The cluster's exposure to Kubernetes deprecated features and
APIs .
The cluster's participation in a rollout
sequence .
If your business schedule or constraints require different upgrade paths or
strategies, you can adjust the scope and timing of the automated upgrades to
better align with your business needs. For more information, see Maintenance
exclusion
and Scope of
maintenance .
Estimated schedule for release channels
GKE automatically upgrades clusters in a release channel on or
after the dates specified in the Auto Upgrade column of the following
schedule. The patches of a minor version remain available in all release
channels until the end of standard support (formerly known as end of life ),
except for clusters enrolled in the Extended channel, where the minor version
and its patches remain available until the end of extended support . You can
use maintenance
exclusions
to prevent a cluster from being automatically upgraded until its end of support
date.
Dates are best-effort predictions and are updated periodically when new
information becomes available. Consider the English language
documentation as the source of
truth if the dates in other languages differ due to delays in translation.
See the following schedule for clusters enrolled in a release
channel
follow this schedule:
Minor version ( release date )
Rapid
Regular
Stable
Extended
End of standard support (formerly end of life ) 3
End of extended support 3
Available 1
Auto Upgrade 2
Available 1
Auto Upgrade 2
Available 1
Auto Upgrade 2
Available 1
Auto Upgrade 2
1.29
2024-01-05
2024-04-16
2024-01-26
2024-07-09
2024-06-11
2024-08-09
2024-01-25
2026-01-25 5
2025-04-12
2026-01-25
1.30
2024-04-30
2024-07-30
2024-07-30
2024-09-17
2024-08-13
2024-09-24
2024-07-30
2025-12-03
2025-09-30
2026-07-30
1.31
2024-08-20
2024-09-17
2024-10-22
2025-03-11
2025-01-28
2025-04-30
2024-10-22
2026-05 4
2026-01-16
2026-10-22
1.32
2024-12-17
2025-03-11
2025-02-11
2025-05-13
2025-03-04
2025-07-22
2025-02-11
2026-Q3 4
2026-04-27
2027-02-11
1.33
2025-05-07
2025-06-10
2025-06-04
2025-09-09
2025-07-22
2025-10-14
2025-06-04
2026-Q4 4
2026-08-03
2027-06-03
1.34
2025-09-02
2025-10-28
2025-11-26
2026-03-10
2026-02-18
2026-06 4
2025-12-03
2027-Q2 4
2027-01-25
2027-11-25
1.35
2025-12-24
2026-02-11
2026-02-11
2026-04 4
2026-04-07
2026-06 4
2026-02-11
2027-Q3 4
2027-04-11
2028-02-11
Caution: GKE version 1.29 and earlier have reached
end of support and are no longer
supported.
Stages of release schedule predictions
The dates in the release schedule generally progress through the following
stages, which offer increasing levels of granularity and certainty:
TBD : when an entry is marked as "TBD", the date is to be determined.
Month or quarter year prediction : dates with only a month (for example,
2025-03) or quarter
year (for
example, 2025-Q3) are approximations that will be updated with a date when
it is known. Dates are updated from a quarter year to month prediction when
the approximated date is less than three months away.
Day-level prediction : italicized dates with day-level granularity are
provided when the month prediction is less than 14 days from the most recent
update to the release schedule table, but the specific date is not yet
known. These italicized dates are approximations that will be updated with a
specific date when it is known.
Specific date : non-italicized dates are the best-effort prediction which
represent the highest degree of certainty in the release schedule. For more
information about the certainty of this information, see Dates provide a
general estimate .
Estimated schedule for clusters with no channel (formerly static )
Key Point: GKE automatically upgrades clusters not enrolled in a
release channel using automatic upgrade targets from the Stable and Regular
channels. Clusters not enrolled in a channel aren't static, as they are
upgraded like clusters enrolled in a channel.
GKE automatically upgrades clusters not in a release channel to
newer minor versions on or after the dates specified in the Auto Upgrade
column of the Stable release channel schedule .
You can use maintenance
exclusions
to prevent a cluster from being automatically upgraded for up to 30
days
when your cluster isn't enrolled in a release channel.
Clusters not enrolled in a release channel
follow this availability and support schedule:
Available date: The same available date for the Kubernetes minor version on
the Regular Channel, and the same available patch versions as the Rapid
channel for those minor versions available in the Regular channel
Auto upgrade date: The same auto upgrade date for the Kubernetes minor
version on the Stable Channel, and the same auto upgrade date for
patch versions as the Regular channel
End of standard support (formerly known as end of life ): The same end of
support date for the Kubernetes minor version on release
channels other than the Extended channel
Notes
Note: Dates are updated monthly and subject to
change. Dates with only a month (for example, 2025-03) or quarter year (for example, 2025-Q3) are approximations that
will be updated with a date when it is known. Dates are formatted numerically
as YYYY-MM-DD following the ISO 8601 international standard
for numeric dates. When an entry is marked as "TBD", the date is to be determined.
Note: Security patches will continue to be made available and may
be applied to existing resources until a version reaches
end of support .
The Available date
is the approximate date when the Kubernetes version first reaches production, and it
takes about one week for it to become available in all regions.
↩
Kubernetes versions are generally available on each release channel a few
weeks before auto upgrades start so that you can test the new version .
On/after the auto upgrades start date, clusters subscribed to release
channels will be auto upgraded to the referenced minor version.
↩
End of
support : For clusters in the Rapid, Regular, Stable channels, or
no channel, new features, security patches, or bug fixes will be made
available for this minor version until its end of standard support
(formerly known as end of life ) date. For clusters in the
Extended channel , GKE continues to support the minor
version until its end of extended support date. If a cluster is running a
patch version of a minor version that has reached its end of support date,
GKE auto-upgrades the cluster to help ensure cluster
operability and compliance. To learn more, see the
GKE minor
version lifecycle . ↩
Dates with only a month (for example, 2025-03) or quarter year (for example, 2025-Q3) are approximations that will be updated with a date when it is known. Dates are updated from a quarter year to month prediction when the approximated date is less than three months away.
↩
Italicized dates with day-level granularity are provided when the prediction is less than 14 days from the latest update to the release schedule. These italicized dates are approximations that will be updated with a specific date when it is known.
↩
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

---
title: "About release channels \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels
  title: "About release channels \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Guides
Send feedback
About release channels
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
Use release channels for
Google Kubernetes Engine (GKE) to pick versions for your clusters with your chosen
balance between feature availability and stability.
GKE automatically upgrades all clusters over time, including
those not enrolled in a release channel, to ensure that they receive security
updates, fixes to known issues, new features, and run a supported Kubernetes
version. You can control the timing of upgrades with maintenance windows and
exclusions .
We recommend enrolling your cluster in a release channel, as this gives you the
most control with regards to the scope of maintenance
exclusions —preventing
specific types of upgrades instead of all upgrades—and sequencing the rollout
of cluster upgrades .
Autopilot clusters can only be enrolled in a release channel.
If you don't enroll your Standard cluster in a release
channel, you can disable node
auto-upgrades for
selected node pools and manually manage upgrades to the nodes in these node
pools. However, all clusters' control planes are automatically upgraded, and
when a version reaches the end of
support , cluster control planes and
nodes are automatically upgraded regardless of release channel enrollment. To
learn more, see the comparison between clusters enrolled and not enrolled in a
release channel .
What channels are available
The following table explains the properties of available release channels, each
offering a trade-off between feature availability and stability. All channels
offer supported releases of GKE and are considered generally
available (GA), although individual features might not always be GA, as marked.
The Kubernetes releases in these channels are official Kubernetes releases and
include both GA and beta Kubernetes APIs.
Channel
Minor version availability
Set as an auto-upgrade target
When to use this channel
Rapid
1-2 weeks after upstream open source GA
1-2 months after release to Rapid
Get the latest Kubernetes release as early as possible, and be able to
use new GKE features the moment they go GA. GKE
upgrades your cluster frequently to stay on the latest available patch
version, and deliver newer Kubernetes capabilities. Clusters
subscribed to the Rapid channel use GA versions, however we recommend to
use the Rapid channel to test newer Kubernetes versions and API on
pre-production environments.
Caution: As Rapid channel provides the newest
GKE versions, these versions are excluded from the
GKE SLA and may
contain issues without known workarounds.
Regular (default)
Approximately 2 months after release to Rapid
Approximately 3 months after release to Regular
Access GKE and Kubernetes features soon after they go
GA, but on a version that has been qualified over a longer period of
time. Offers a balance of feature availability and release stability,
and is what we recommend for most users.
Stable
3-4 months after release to Regular
Approximately 2 months after release to Stable
Prioritize stability over new features. GKE rolls out
changes and new versions in this channel last, after being validated on
the Rapid and Regular channels, which allows even more time for validation.
Extended
Aligned with Regular channel
Aligned with Regular channel
Use this channel to get long-term support, keeping a cluster running a minor version for as long as possible.
To learn more, see Get long-term support with the Extended channel .
No channel (not recommended)
Aligned with Regular channel
Aligned with Stable channel
This option is not recommended. Control plane and nodes are auto-upgraded in alignment with the Regular and Stable channels. When you need to disable node auto-upgrades at a node pool level, you can use this configuration option. Alternatively, with release channels you can disable node auto-upgrades at a cluster level . For more details, see the comparison between clusters enrolled and not enrolled in a release channel .
Note: Exact release schedules depend on multiple factors, including the open
source release and patching schedule, and therefore are subject to change. To
stay informed with the latest information, review the GKE
release notes or subscribe to the RSS
feed for your channel.
When you enroll a cluster in a release channel, that cluster is upgraded
automatically on or after the date specified in the Auto Upgrade column of the
GKE release schedule .
When a version has accumulated usage and demonstrated stability across clusters
in the Rapid channel, it is promoted to the Regular channel. Eventually,
the version is promoted to the Stable channel, which only receives
high-priority updates. Each promotion signals a graduating level of stability
and production-readiness, based on observed performance of clusters running that
version.
Critical security patches are delivered to all release channels, to protect your
clusters and Google's infrastructure. In rare emergency situations,
GKE might auto-upgrade clusters to versions that aren't yet
available in their release channel.
What versions are available in a channel
Each release channel offers multiple minor versions. These versions have met the
qualification standards for that specific channel.
This set of available versions includes a default version for cluster creation,
which is selected from a set of available versions from that channel. To see
what versions are available in a release channel, follow the instructions to
view the default and available versions for release
channels .
New patch versions become available in the following amount of time:
At least one week prior to becoming an auto-upgrade target in the respective channel
At least two weeks after having been made available in the prior channel
New minor versions become available in the following amount of time:
At least four weeks prior to becoming an auto-upgrade target in the Rapid channel
At least eight weeks prior to becoming an auto-upgrade target in the Regular and Stable channels
You can test a newly available GKE version prior to upgrading
your production environment. For example, you can subscribe to upgrade notifications
to be informed of newly available versions, and then proactively upgrade a
pre-production environment to the new version before it becomes the auto-upgrade
target for clusters in your production environment.
If you need to keep a cluster on a specific version, for example to validate or
test newer versions prior to upgrading, we recommend using maintenance exclusions .
After a minor version has been made available in a release channel, it will
remain available in that release channel for new or existing clusters until it
reaches its end of support
date .
Note: When you create a cluster in a release channel, if you specify a patch
version which has a newer eligible auto-upgrade target in that release channel,
GKE might automatically upgrade the cluster. If you want to
temporarily prevent the cluster from being automatically upgraded when you
select the new channel, configure a maintenance
exclusion
before selecting the new channel.
What happens when a version becomes an auto-upgrade target in a release channel
GKE automatically upgrades clusters over time to new auto-upgrade
targets. When new auto-upgrade targets are available, GKE
assesses if your specific cluster should be upgraded to that new version.
GKE considers if your cluster has maintenance policies or other
constraints that prevent automatic upgrades, and it won't ignore those reasons
except in rare emergency situations.
You can find auto-upgrade targets for your clusters in the following ways:
To get auto-upgrade targets for a specific cluster, see Get information
about a cluster's
upgrades .
The Current versions table
provides a list of current auto-upgrade targets for each release channel.
The specific version that applies to your cluster depends on the
cluster's minor version and specific constraints.
The GKE release notes
lists new auto-upgrade targets for clusters that run specific minor versions
with Version updates such as the 2024-R33
note .
If 10 days have passed after a new version became an auto-upgrade target for
your cluster's minor version in the release channel, and automatic upgrades
haven't started for your cluster, the delay might be due to one of the following
reasons:
Your cluster is temporarily ineligible for automatic upgrades. This might
occur because:
The cluster is outside the timeframe of a configured
maintenance window .
The cluster is within the timeframe of a
maintenance exclusion .
Automatic upgrades are
paused because
your cluster uses deprecated Kubernetes features that are removed in the
next minor version.
The cluster was automatically upgraded to a
patch version less than
24 hours ago.
The cluster was automatically upgraded to a
minor version less than 30 days
ago and the auto-upgrade target is a new minor version.
GKE paused the rollout of the new auto-upgrade target for
technical or business reasons:
Technical issues were discovered with the new version.
A production freeze is in place due to a critical business season, such as
Black Friday.
What is the recommended auto-upgrade target?
The recommended auto-upgrade target is the version GKE gradually
upgrades your clusters to over time. Of all the auto-upgrade targets in a
release channel, GKE moves your clusters closer towards this
version when it performs auto-upgrades.
Over multiple auto-upgrades, barring constraints preventing auto-upgrades,
GKE upgrades your clusters progressively closer to the release
channel's recommended auto-upgrade target, until your cluster reaches the
target. After reaching the target, your cluster continuously uses the existing
recommended auto-upgrade target, moving to the new recommended target when it's
released.
What is the default version?
When you create a cluster in a release channel, by default, the cluster uses the
default patch version for cluster
creation in the
selected release channel. However, you can specify a different available version
when you create a cluster in the release channel.
Release channels have multiple minor versions available in a release channel,
and the default version can sometimes be one of the auto-upgrade targets for a
release channel.
About getting patch versions earlier
You can get patch versions earlier with automatic or manual upgrades by using
the methods described in this section.
Accelerated patch auto-upgrades
GKE first introduces a new patch version to a release channel by
making the version available for new cluster creation and manual upgrades. After
GKE determines that the patch version is qualified,
GKE sets the new patch version as an auto-upgrade target, meaning
GKE begins automatically upgrading clusters to this new patch
version. The length of time from version availability to auto-upgrades is
typically at least one week, but depends on the release channel and specific
circumstances of qualifying the version.
For more information about current version availability, do the following:
See the GKE release
notes page, including the Current
versions table, and
the Version updates entries, such as the 2025-R26
note .
Check the available and default
versions for which
versions are available in your release channel.
If you want to receive patch upgrades as soon as the version is available and
before GKE sets the version as an auto-upgrade target in the
channel, you can use accelerated patch auto-upgrades. This setting can be useful
if you want to receive security patches as soon as possible through automatic
upgrades.
You must understand the risks associated with automatically upgrading the
cluster on an accelerated schedule before GKE determines that
clusters in the channel should be automatically upgraded to the new patch
version. This accelerated schedule skips a step in the qualification process for
patch versions in release channels. All patch versions, not just patch versions
with security patches, are upgraded with this accelerated schedule. This setting
doesn't affect minor version upgrades, and is only available for clusters
enrolled in a release channel.
This setting only affects the timing of when GKE auto-upgrades a
cluster to a new patch version. GKE still adheres to maintenance
windows and exclusions, follows the order of a rollout sequence, and applies any
other standard practices that are typically used for automatic upgrades.
For more information about setting this feature, see Use accelerated patch
auto-upgrades .
Alternatively, you can manually upgrade your
clusters if you want to
upgrade to a specific patch version as soon as the version is available, and
before it's set as an auto-upgrade target.
Run patch versions from a newer channel
In addition to the listed available patch
versions
for a release channel, you can run patch versions from newer release channels
than the one where your cluster is enrolled if the minor
version is available in the cluster's release
channel and you use the gcloud CLI or the GKE API.
For example, if the following versions were available in the Rapid and
Regular channels:
Rapid: 1.23.2-gke.700, 1.22.4-gke.1500
Regular: 1.21.4-gke.400, 1.22.1-gke.400
A cluster enrolled in the Regular channel that is running GKE
version 1.22.1-gke.400 could manually upgrade to 1.22.4-gke.1500, but not to
1.23.2-gke.700 as it is a different minor version.
To manually upgrade to a patch version on a newer channel, your cluster's
control plane must run a patch release with the same minor version. For example,
if the cluster is running 1.21.3-gke.200, you must first manually upgrade the
cluster to a patch version available in its current release channel,
1.22.1-gke.400. You can then upgrade the cluster to 1.22.4-gke.1500.
You can also create a new cluster that runs 1.22.4-gke.1500 and is enrolled in
the Regular channel.
GKE keeps the cluster on the patch version from the newer channel
until a newer auto-upgrade target becomes available in the enrolled channel for
the cluster.
Learn what's new in a channel
To learn what's new in a release channel, review the release notes. There are
separate release notes for each release channel, in addition to the overall
release notes .
Release
channel
Release notes
Rapid
channel
HTML or Atom
feed .
Regular
channel
HTML or Atom
feed .
Stable
channel
HTML or Atom
feed .
Choose the best release channel for your cluster
Channels include only GA versions of Kubernetes, and each channel represents a
different level of quality and maturity of the Kubernetes and
GKE releases. The following diagram illustrates the adoption
cycle for release channels:
As this diagram shows, the available release channels use
versions in the middle of the adoption cycle, including Early adopters
(Rapid channel), Early majority (Regular channel), and Majority (Stable
channel). The earliest part of the adoption cycle is the Innovators , who test
the newest features using the upstream Kubernetes release. The last part of the
adoption cycle is the Late majority , where you are using a version that is
nearing deprecation and need to transition to a supported version.
In your pre-production environments, use the Rapid channel for newer versions
where you can test features as soon as they are generally available.
For production workloads that require maturity over newer features, we recommend
using the Regular (default) channel or the Stable channel.
If you need to closely track new features, consider using the Regular
channel, which offers a balance between stability and freshness of the
Kubernetes OSS version.
If your requirement is maturity, especially for production clusters, use the
Stable channel.
GKE upgrades clusters to a newer version that meets the
channel's quality standards. However, we recommend upgrading your clusters ahead
of time because this provides you with:
Better control of your upgrades, and alignment with your working hours.
Better predictability because GKE skips auto-upgrading
clusters that meet the release target (i.e., clusters that were manually
upgraded to the next target version). Nodes are automatically upgraded to
the recommended version in their selected channel to align with the control
plane version and to protect you from vulnerabilities and unsupported
version skew .
Get long-term support with the Extended channel
GKE provides long-term
support for Kubernetes minor
versions through the Extended channel. With this channel, you can stay on a
minor version for up to 24 months. After the 14-month standard support period,
your cluster receives security patches for
approximately
10 more months during the extended support
period .
How GKE automatically upgrades clusters in the Extended channel
For clusters enrolled in the Extended channel, GKE automatically
upgrades clusters in the following way:
During the standard support period : GKE upgrades clusters
to newer patch versions of the same minor version following the same cadence
as the Regular channel.
During the extended support period : GKE continues to
provide security patch updates for the minor version. Around 2 months before
the end of extended support, GKE begins upgrading clusters to
the next minor version, unless the cluster is using deprecated features or
APIs.
You can use maintenance exclusions to prevent minor version upgrades until
the end of extended support.
At the end of extended support : GKE upgrades all clusters
still running the now-unsupported minor version, regardless of blocking
issues. You can't configure maintenance exclusions past this date.
To learn more about the different periods of availability and what upgrades
GKE provides during the extended support period, see
GKE minor version
lifecycle .
Limitations for enrolling a cluster in the Extended channel
Review the following limitations for clusters that are enrolled in the Extended
channel:
During the extended support period, GKE updates the
Container-Optimized OS milestone that the GKE minor
version uses when the milestone reaches the end of support.
GKE pauses patch node auto-upgrades and sends a cluster
notification .
For more information about this change, see Container-Optimized OS
updates during the extended support
period .
The extended support period doesn't extend your cluster's credential
expiry date. Rotate your cluster
credentials before they
expire.
You can't enroll a cluster that uses the following features in the Extended
channel:
Autopilot cluster mode
Alpha clusters
Explicitly-enabled Kubernetes beta APIs
Gateway (only supported
in the Extended channel with GKE version 1.30 or later)
Windows Server node pools
Config Connector
The following multi-cluster features:
Managed Cloud Service Mesh
Service Directory for GKE
Config Sync
Policy Controller
Multi-cluster Gateway
Multi Cluster Ingress
Multi-cluster Services
Pricing for extended support
If you want to enroll a cluster in the Extended channel, ensure that you've
reviewed the pricing for extended
support .
Pay-per-use costs apply when your cluster is enrolled in the Extended
channel and your cluster's minor version enters the extended support period.
Best practices for the Extended channel
Review the following scenarios to understand how you can use the Extended
channel to minimize disruption from minor version upgrades.
The supported scenarios require some manual action over time to get the most
benefit from the channel. We don't recommend that you enroll a cluster in the
channel without plans to move to the next minor version, as GKE
will eventually upgrade the cluster to newer minor versions with the same
frequency as other channels, and your cluster will potentially incur greater
cost and receive new features last.
Supported and unsupported scenarios
To learn more about supported and unsupported scenarios, review the following
table, and see Use the Extended channel when you need long-term
support
for more details. A checkmark ( ) indicates a supported scenario:
Upgrade scenario
Supported
Summary
Time between minor version changes
Manual action required
Temporarily stay on minor version for longer
Stay on a minor version to mitigate an issue preventing upgrades.
Same average frequency, with interruption for extra time on one minor version.
Temporarily move a cluster to and from the Extended channel.
Manually upgrade cluster to the new minor version when ready.
Manually upgrade minor version 1-2 times a year
Get new features but with less frequent minor upgrades, when it's optimal
for the workloads in the cluster.
1-2 times per year.
Manually upgrade cluster to newer minor version.
Do nothing and receive minor upgrades with same frequency
Get minor version upgrades with the same frequency as other channels, and new features as late as possible.
Every 4 months, on average.
Monitoring automatic minor version upgrades from unsupported versions.
Clusters not enrolled in a release channel
We don't recommend this configuration option due to the limitations with
clusters not enrolled in release channels , but you can choose not to enroll a
Standard cluster in a release channel (known as no channel and
formerly as static ). Don't use this option unless individual node pools can't be
automatically upgraded, and you must manually upgrade those nodes instead. If
your cluster is not enrolled in a release channel, you can disable node
auto-upgrade for
selected node pools. With release channels, you can achieve the same outcome at
the cluster level across all node pools. However, regardless of release channel
enrollment, all clusters' control planes are automatically upgraded, and when a
version reaches the end of support ,
cluster control planes and nodes are automatically upgraded.
We recommend that if you want to prevent automatic upgrades for the
entire Standard cluster or all of its node pools, use a maintenance
exclusion
with your cluster enrolled in a release channel. With maintenance exclusions,
you can disable node auto-upgrades for all node pools, whereas you
can disable node auto-upgrades at the node pool level if your cluster is not
enrolled in a release channel.
Warning: If you disable node auto-upgrades for a node pool, you must manually
upgrade those node pools to ensure that your cluster adheres to the
GKE version skew
policy , and uses supported
GKE
versions .
Failure to adhere to these version policies will cause incompatibility between
the control plane and nodes over time, and potentially degrade the
supportability and reliability of your cluster.
Comparison between clusters enrolled and not enrolled in a release channel
Review the following table to understand the similarities and differences
between enrolling and not enrolling your cluster in a release channel:
Feature
Cluster enrolled in a release channel
Cluster not enrolled in a release channel
Shared upgrade behavior
GKE automatically upgrades the cluster control
plane , and, by default,
automatically upgrades the nodes when new versions are
scheduled for auto-upgrades , following the
GKE release schedule .
GKE automatically upgrades the cluster control plane and
nodes after their version reaches end of support.
Upgrade timing
Aligned with the respective release channel
Same auto-upgrade start date as the Stable channel for minor versions
Same available minor versions, patch auto-upgrade versions, and default version as the Regular channel
Same available patch versions as the Rapid channel for those minor versions available in the Regular channel
Accelerated patch auto-upgrades
Available
Not available
Control of node pool disruption
Node auto-upgrades by default
You can disable node auto-upgrades at cluster level until the minor version end of support date by creating a maintenance exclusion with the "No minor or node upgrades" scope
You can disable node auto-repair for a Standard cluster node pool
Node auto-upgrades by default
You can disable node-auto upgrades at the node pool level. You are responsible for ensuring your cluster adheres to version and version skew policies
You can disable node-upgrades at cluster level for up to 30 days by creating maintenance exclusion with the "No upgrades" scope
Maintenance windows
Available
Available
Maintenance exclusions
Available maintenance exclusion scopes :
"No upgrades" (30 days)
"No minor upgrades" (until the end of support)
"No minor or node upgrades" (until the end of support)
Restricted to "No upgrades" scope (30 days)
Rollout sequencing
Available
Not available
Long-term support
Available with the Extended release channel only
Not available
Autopilot
Available
Not available
Differences between Rapid-channel clusters and alpha clusters
Clusters created using the Rapid release channel are not
alpha clusters .
Here are the differences:
Clusters that use release channels can be upgraded, and auto-upgrade is enabled
and cannot be disabled. Alpha clusters cannot be upgraded.
Clusters that use release channels don't expire. Alpha clusters expire after
30 days.
Alpha Kubernetes APIs are not enabled on clusters that use release channels.
What's next
Learn how to use release
channels .
Learn more about upgrading
clusters .
Learn how to get visibility into cluster
upgrades .
Learn about cluster
notifications .
Learn about managing automatic cluster upgrades across environments with
rollout
sequencing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

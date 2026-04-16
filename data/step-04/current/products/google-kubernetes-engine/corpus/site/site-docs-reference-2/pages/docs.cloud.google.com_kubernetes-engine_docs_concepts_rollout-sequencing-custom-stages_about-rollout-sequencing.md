---
title: "About rollout sequencing with custom stages \_|\_ Google Kubernetes Engine\
  \ (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/rollout-sequencing-custom-stages/about-rollout-sequencing
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/rollout-sequencing-custom-stages/about-rollout-sequencing
  title: "About rollout sequencing with custom stages \_|\_ Google Kubernetes Engine\
    \ (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Send feedback
About rollout sequencing with custom stages
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
Rollout sequencing with custom stages keyboard_arrow_down
Rollout Sequencing with custom stages (Preview)
Rollout Sequencing (GA)
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can manage the order of automatic cluster upgrades across
Google Kubernetes Engine (GKE) clusters in multiple environments by using rollout
sequencing. For example, you can qualify a new version in pre-production
clusters before upgrading production clusters.
GKE also provides a generally available
version
of rollout sequencing that uses a more linear model without custom stages.
This document assumes that you know about the following:
Cluster upgrades
Fleet management overview
Release channels
Versioning scheme in GKE
Soak testing
To configure a rollout sequence, see Sequence the rollout of cluster upgrades .
Overview
GKE rollout sequencing lets you define a specific, ordered
sequence for cluster upgrades across environments—such as first upgrading
the clusters in the development environment, then the testing environment, and
finally production. This progressive strategy provides built-in bake time,
letting you discover and mitigate potential issues before the
upgrade reaches your most critical systems.
Rollout sequencing is built on the concept of fleets, which are logical groupings
of GKE clusters that are mapped to an environment (for example,
testing). To use this feature, you define a sequence made up of fleets and set
the soak time between each group. When GKE selects a new version,
your clusters are upgraded in the defined order, letting you validate workloads
before the version is fully deployed to your production environment.
Fleets support lightweight memberships, which let you group clusters logically
for rollout sequencing without enabling all fleet-level configurations and
features. Lightweight membership is a good choice if you want to use rollout sequencing
without some of the other implications of full fleet management, such as
fleet-level namespace sameness. For more information, see Lightweight
memberships .
Choose a rollout sequencing strategy
GKE offers two versions of rollout sequencing. Both versions are
built on the same core principles of progressive, fleet-based upgrades, but they
offer different levels of flexibility. This section helps you decide which
version is best for your use case.
Fleet-based rollout sequencing (GA) :
this version is the generally available and recommended strategy for most production
use cases. Fleet-based rollout sequencing provides a stable and supported
method for progressively rolling out upgrades across environments (such as
testing, staging, and production), and uses a linear sequence of fleets.
Rollout sequencing with custom stages (Preview) : this version is an
evolution of the fleet-based model, offering more granular control and
flexibility. With custom stages, you can define specific stages within a
fleet by using labels, making it a good choice for more complex rollout strategies like
deploying a new version on a small subset of production clusters before a
wider rollout. Choose this option if you require more flexibility or want to
preview the latest rollout sequencing capabilities.
The rest of this document pertains only to rollout sequencing with custom stages.
Rollout sequencing with custom stages
When you use rollout sequencing with custom stages, you define the order of fleet
upgrades and set soak times. Additionally, you can also do the following:
Define a sequence with granular stages that can target specific subsets of
clusters within a fleet by using labels, making it a good choice for strategies like
phased rollouts.
Gain more control and observability through the new RolloutSequence and
Rollout API objects.
This method provides the most flexibility and granular control over your cluster
upgrades. To target specific subsets of clusters within a fleet, you use a
label-selector to target only the clusters that have specific Kubernetes
labels.
The following diagram illustrates how GKE automatically upgrades
clusters in a rollout sequence that uses custom stages. The stage targets
clusters with a label-selector named canary in the prod fleet:
Figure: A rollout sequence with custom stages
When a new upgrade target becomes available in the release
channel where all clusters in this sequence are enrolled, GKE
upgrades the clusters in the Testing fleet first, followed by clusters in the
Staging fleet. Then, in the Production fleet, GKE prioritizes
clusters that match the label-selector . Because prod-cluster-1 is labeled with
canary: true , GKE upgrades this cluster next.
GKE upgrades all remaining clusters in the Production fleet (in the Main stage) at the end of the process
because this stage doesn't have any label selector.
During the configured soak time between stages, you can confirm that your
workloads are running as expected on the upgraded clusters. The preceding
example shows one custom stage in the Production fleet, but you can add multiple
stages to any fleet or use only one fleet with multiple stages.
Key concepts
Soak time : this period is a configurable waiting period that occurs
after all clusters in a stage are upgraded. This bake time lets you validate
the new version in one environment and catch potential issues before the
upgrade proceeds to the next environment. You can configure a soak time of
up to 30 days for each stage in your sequence. A longer soak time in a
pre-production stage gives you more time for validation.
RolloutSequence : this is the primary resource that you use to define
your upgrade sequence. RolloutSequence contains an ordered series of
stages, which verifies that clusters in earlier stages are fully upgraded and
have completed their soak period before the upgrade proceeds to the next
stage.
Rollout : this object lets you observe the progress of a single
version upgrade through your sequence. You can use Rollout to view the status of
the rollout, track the progress, and see if and why any
clusters are ineligible for upgrade.
Dedicated host project : we recommend that you use a dedicated Google Cloud
project to host your RolloutSequence objects. Placing the sequence in a
dedicated project provides a neutral, central point of control for your
rollout sequences, which is a similar best practice for managing CI/CD
pipelines.
Best practice :
Create and manage your RolloutSequence resources in a dedicated host project.
Stages : a stage is a step in the rollout sequence. Each stage
contains a group of clusters that are upgraded together.
Fleets : fleets are the primary way to group clusters. A stage in a
rollout sequence can reference only one fleet.
Label selectors : a rollout sequence is composed of one or more stages.
Each stage contains clusters from one fleet, and you can use label selectors on clusters
to further split a fleet into multiple stages. This approach allows for strategies
like phased rollouts, where a small subset of production clusters are
upgraded first.
How GKE upgrades clusters in a rollout sequence
When GKE upgrades a cluster, first the control plane is upgraded,
then the nodes are upgraded. In a rollout sequence, clusters are still upgraded
using this process, but you also control the order in which groups (fleets) of
clusters are upgraded. You also specify a soak time that defines how long
GKE pauses before upgrades proceed from one group to the next
group.
Cluster upgrades in a rollout sequence proceed with the following steps:
GKE sets a new automatic upgrade target for clusters on a
minor version in a specific release channel, with a release
note similar to
the following message: "Control planes and nodes with auto-upgrade enabled
in the Regular channel will be upgraded from version 1.29 to version
1.30.14-gke.1150000
with this release."
GKE begins upgrading cluster control planes to the new
version in the first group of clusters. After GKE upgrades a
cluster's control plane, GKE begins upgrading the cluster's
nodes.
GKE respects maintenance availability
when upgrading clusters in a rollout sequence.
GKE takes the following steps for control plane upgrades:
After all cluster control plane upgrades in the first group finish,
GKE begins the soaking period for control plane upgrades.
GKE also begins the soaking period if more than 30 days have
passed since control plane upgrades began.
After the completion of the soaking period for the first group's cluster
control plane upgrades, GKE begins upgrading the second
group's control planes to the new version. However, note the following
considerations:
In some cases, GKE might upgrade the first group's cluster
control planes multiple times before it upgrades the second group's cluster
control planes. When this situation occurs, GKE chooses the
latest version that also has the following attributes:
The version is qualified by the first group.
The version is at most one minor version later than the control plane
version of the second group's clusters.
GKE doesn't upgrade the control plane of clusters in the
second group that have a later version than the auto-upgrade target
qualified by the first group.
In parallel to control plane upgrades, GKE takes the following
steps for node upgrades:
After all clusters' node upgrades in the first group finish,
GKE begins the soaking period for node upgrades.
GKE also begins the soaking period if more than 30 days have
passed since node upgrades began.
After the completion of the soaking period for the first group's node
upgrades, GKE begins upgrading the second group's nodes to
the new version. However, note the following considerations:
In some cases, GKE might upgrade the first group's cluster nodes
multiple times before it upgrades the second group's cluster nodes. When
this situation occurs, GKE chooses the latest version that
also has the following attributes:
The version is qualified by the first group.
The version is no later than the second group's cluster control plane version.
GKE doesn't upgrade the nodes of clusters in the
second group that have a later version than the auto-upgrade target
qualified by the first group.
GKE repeats these steps from the second group to the third
group, until clusters in all groups in the rollout sequence have been
upgraded to the new upgrade target.
While clusters are upgraded in each group, during the soak time, verify that
your workloads with clusters running the new GKE
version work as expected .
Warning: GKE might be unable to proceed with automatic upgrades
in a rollout sequence if there are version discrepancies between clusters across the groups in the sequence.
For more information, see Rollout Eligibility .
Clusters might also be prevented from upgrading due to maintenance windows or
exclusions, deprecated API usage, or other reasons.
How to control upgrades in a rollout sequence
With cluster upgrades in a rollout sequence, groups of clusters are upgraded in
the order that you defined, and are soaked in each group for the amount of
time that that you chose.
While upgrades are in progress, you can check the
status
and manage the rollout
sequence
as needed. You can also control the process in the following ways:
You can modify the default soak time for a group within a rollout sequence,
which is useful if testing reveals that a specific version requires more or
less soaking. This change to the soak time updates the default soak time to
all current and future rollouts (to any version) that are created after the
modification.
For individual cluster upgrades, you can continue to use the following tools:
Manually control
upgrades by taking
actions such as canceling, resuming, rolling back, or completing node pool
upgrades.
Use maintenance windows and exclusions to decide when a cluster can and
cannot be upgraded.
Configure node upgrade strategies
to balance between speed and risk tolerance, depending on the workloads
running on those nodes.
Caution: If you modify a sequence during a rollout, specifically changes that
affect the participating clusters, GKE immediately cancels all existing
rollouts. If you modify only the soak time of a sequence, GKE doesn't cancel the
rollout.
Example: Community bank gradually rolls out changes from Testing to Production
A platform administrator at a community bank manages three main deployment
environments: Testing, Staging, and Production. The Production clusters are
distributed across multiple regions, with varying levels of criticality. To
manage upgrades effectively, the administrator groups the clusters in each
environment into fleets. As required for rollout sequencing, each cluster across
all three fleets is enrolled in the same release channel—in this case, the
Regular channel—and all clusters run the same minor version.
The administrator's primary goal is to ensure that new GKE
versions are thoroughly vetted before reaching the bank's critical production
environment. They also want to progressively upgrade clusters in a lower-traffic
region first, then move to a higher-traffic region, and finally to their most
critical region. To achieve this, they use rollout sequencing with custom stages
to define a progressive upgrade strategy that includes labeling the production
clusters according to their region. This approach lets them validate a new version
on a small subset of production traffic before a full rollout.
To implement this plan, the administrator applies the following labels to the
clusters in the Production fleet:
Clusters in us-west1 (lower traffic) are labeled with prod-region: us-west1 .
Clusters in europe-west1 (higher traffic) are labeled with prod-region:
europe-west1 .
Clusters in us-east1 (most critical traffic) are not labeled. The final
stage for a fleet within a sequence must act as a 'catch-all' for all
remaining clusters. Therefore, the administrator doesn't need to add labels
to these remaining clusters.
Next, in a dedicated host project used for managing CI/CD configurations, they
define a RolloutSequence object. This new sequence has five distinct stages:
Testing : this stage includes all clusters in the testing fleet. The
administrator sets a three-day soak time to allow for thorough validation.
Staging : this stage includes all
clusters in the staging fleet, with a three-day soak time.
Production in region us-west1 : this stage targets the production
fleet, but uses a label-selector to include only the clusters with the
prod-region: us-west1 label. This stage lets the administrator to monitor
for any issues on a small subset of production clusters with a three-day soak
time.
Production in region europe-west1 : this stage includes the clusters
in the production fleet that have the prod-region: europe-west1 label. The
administrator sets a longer four-day soak time for more thorough validation.
Production in region us-east1 : this final stage includes the
remaining clusters in the production fleet; that is, all clusters in
us-east1 .
This approach gives the administrator granular control over their production
upgrades, significantly improving the safety and reliability of their upgrade
process by catching potential issues before they can impact the entire
production environment.
During a routine patch upgrade, the bank's automated tests complete successfully
in the staging environment much faster than anticipated. The administrator
observes that the new version is stable and decides that the three-day soak time
after the Staging fleet upgrade is unnecessarily long for this type of routine
update.
To accelerate this rollout, the administrator modifies the RolloutSequence
definition and reduces the soak duration for the us-west1 stage of the
Production fleet. Because this change to the RolloutSequence definition
updates the default soak time for all current and future rollouts, the
administrator makes a note to revert the soak time back to the original
three-day period after this specific patch rollout is complete. This approach
helps ensure that their standard, more cautious soak time is in place for future
minor version upgrades.
The administrator uses maintenance windows and
exclusions
so that GKE upgrades clusters when it is least disruptive
for the bank. GKE respects maintenance availability for clusters
upgraded in a rollout sequence.
The administrator configured maintenance windows for their clusters
so that GKE upgrades clusters only after business hours.
The administrator also uses maintenance exclusions to temporarily prevent
clusters from being upgraded if they detect issues with the cluster's
workloads.
The administrator uses a mix of surge upgrades
and blue-green
upgrades for their nodes, balancing between speed and risk tolerance depending
on the workloads running on those nodes.
Rollout eligibility
For a version to be rolled out through a sequence using custom stages, clusters
must be eligible for an upgrade target from their release channel. When a new
GKE version becomes available, the system creates a Rollout
object if clusters in the sequence are eligible for the new version. Although we
recommend that all clusters are enrolled in the same release channel, if they
are not, GKE selects a version from the most conservative channel
in the sequence. For example, if clusters are mixed between Stable and Regular
channels, GKE chooses the version from the Stable channel.
The Rollout then progresses through the stages defined in your
RolloutSequence . Within a given stage, the control plane rollout and node pool
rollout can run in parallel. A key rule governing this progression is that while
a stage is in a SOAKING state with a particular version, the stage is not
eligible to begin a new Rollout for a newer version. This practice helps
ensure that a version is fully validated before the next upgrade begins. You can
observe the progress and eligibility of each cluster by monitoring the Rollout
object. If you find version discrepancies that make a cluster ineligible, you
might need to take action, such as manually upgrading the cluster, to allow the
sequence to proceed. If a cluster is not eligible for any rollouts,
GKE won't automatically upgrade the cluster until the current
version reaches end-of-support.
Clusters running versions later than the upgrade target don't prevent upgrades
If a stage in the sequence contains clusters that run a later version than the
target version of a rollout, GKE upgrades the clusters eligible
for the target version and ignores the clusters that are already on a later version. This
behavior doesn't prevent the rollout sequence from progressing to the next stage.
For example, if the target version of a rollout for a stage is 1.32, and that
stage has clusters that run both 1.31 and 1.33, GKE upgrades the
clusters on version 1.31 to 1.32, and ignores the clusters that are already on version
1.33.
The preceding stage qualified multiple upgrade targets for the subsequent stage
A preceding stage in a sequence might complete rollouts for multiple new versions
while a subsequent stage is paused (for example, by a maintenance exclusion)
or is still processing a previous upgrade. In this case, when the subsequent stage becomes
ready to accept a new upgrade, GKE upgrades the stage to the latest
version that was qualified. For control plane upgrades, this version can be at
most one minor version later than the control plane version of the clusters in
the subsequent stage. For node
upgrades, this version can be equal to, but not later than, the control plane
version of the clusters in the subsequent stage.
For example, this scenario is relevant if you configured maintenance
exclusions to temporarily prevent upgrades on your production clusters. If your
pre-production clusters didn't have the same maintenance exclusions, these
clusters might be upgraded multiple times, qualifying several new versions, but
your production stages are not upgraded.
Forced soaking after 30 days
To help ensure that a rollout sequence finishes upgrading clusters,
GKE starts the soaking period for a group if the control plane or
node upgrades, respectively, are not completed across all clusters within the
maximum upgrade time (30 days). The upgrades for any remaining clusters in the
group can still continue during the soaking period.
How rollout sequencing works with other upgrade features
Rollout sequencing works together with other GKE upgrade features:
Maintenance windows and exclusions : you can still use maintenance
windows and exclusions to control when upgrades can and cannot occur on your
clusters. GKE starts a cluster upgrade only within a
cluster's maintenance window. You can use a maintenance exclusion to
temporarily prevent a cluster from being upgraded. If GKE
cannot upgrade a cluster due to a maintenance window or exclusion, this circumstance can
prevent cluster upgrades from finishing in a stage. If a cluster upgrade
cannot be completed within 30 days due to maintenance windows or exclusions,
the stage will enter its soak phase regardless of whether all clusters have
finished upgrading. Control plane and node pool rollouts can run in parallel
within a given stage.
Node upgrade strategies : rollout sequencing does not affect your
configured node upgrade strategies
(for example, blue-green upgrades). Similar to cluster upgrades that don't have rollout
sequencing, GKE uses surge upgrades for Autopilot nodes. For more
information, see Automatic node upgrades .
If node upgrades cannot complete within 30 days, the group will enter its soak
phase regardless of whether all clusters have finished upgrading. This behavior can
happen if the node upgrade strategy causes a Standard cluster's node upgrade to
take longer to complete, especially if it is a large node pool. The situation can also be
exacerbated by maintenance windows that aren't big enough for a node upgrade to
complete.
Release channels : we recommend that you enroll all clusters in a rollout sequence
in the same release channel.
Deprecation usage detection : GKE's deprecation usage detection
still functions as expected, potentially pausing upgrades on clusters that
use a deprecated API.
Manual upgrades : manually upgrading clusters in the first stage of a
sequence does not, by itself, qualify that version or trigger a rollout to
proceed. The automated rollout process is driven by the official
auto-upgrade targets set for the release channel. A manual upgrade
updates the clusters, but the sequence begins to advance for that
version only after it becomes the designated auto-upgrade target.
Receiving multiple upgrades across a sequence
A release channel selects an upgrade target for the cluster. If a new version
becomes available while upgrades to a previous target are still in progress, the first
stage can begin the rollout of a new version even when later stages still
receive the previous upgrade. For example, if the
third group in a sequence is rolling out version 1.31.12-gke.1265000, the first group in the
sequence can concurrently roll out version 1.31.13-gke.1008000.
Considerations when choosing rollout sequencing
Consider using rollout sequencing if you want to manage cluster upgrades by
qualifying new versions in one environment before you roll it out to another.
However, this strategy might not be the right choice for your environment if any of the
following statements are true:
You have clusters that are not on the same release channel or minor version in the same production environment.
You frequently perform manual upgrades that cause clusters in one group to
have different automatic upgrade target versions.
Limitations
The following limitations apply when you upgrade your clusters by using rollout
sequencing with custom stages:
You can't use the Google Cloud console to create or view rollout sequences with
custom stages.
When a rollout sequence references a fleet, you must include the entire
fleet. This constraint means that if you define a stage to target only a subset of
clusters from a fleet with a label-selector (for example, for a phased
deployment), you must also define a subsequent "catch-all" stage that
includes all remaining clusters from that same fleet. This catch-all stage
targets the same fleet but doesn't include a label-selector , thereby
automatically including all clusters that were not selected by earlier
stages in the sequence.
If you modify a sequence during a rollout, specifically changes that affect
the participating clusters, GKE immediately cancels all existing rollouts.
If you modify only the soak time of a sequence, GKE doesn't cancel the
rollout.
You can't manually accelerate an active rollout for a specific version. When
you modify the soak duration in the rollout sequence definition, the change
updates the default soak time for all current and future rollouts that are
created after the modification.
GKE automatically upgrades clusters that have reached their end-of-support to a
supported version, and this upgrade might not follow the defined rollout
sequence.
A stage can reference a maximum of one fleet. You can't have multiple
fleets in a single stage.
A single fleet can be referenced only in one rollout sequence. Two rollout
sequences can't reference the same fleet.
You can't upgrade clusters with rollout sequencing that use accelerated
patch
auto-upgrades .
Known issues
This section outlines the known issues for rollout sequencing with custom
stages.
If a stage in your rollout sequence contains no clusters, the stage is
skipped, but the soak time defined for that stage still passes before the
rollout proceeds to the next stage.
What's next
Sequence the rollout of cluster upgrades with custom stages
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

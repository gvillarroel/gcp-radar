---
title: "Policy Simulator for deny policies \_|\_ Policy Intelligence \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview
  title: "Policy Simulator for deny policies \_|\_ Policy Intelligence \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Guides
Send feedback
Policy Simulator for deny policies
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— Policy insights for BigQuery datasets
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Policy Simulator for deny policies lets you see how a change to an
IAM deny policy might affect a principal's
access before you commit to making the change. You can use
Policy Simulator to ensure that the changes you're making won't cause a
principal to lose access that they need.
This feature only evaluates deny policies. To learn how to simulate other policy
types, see the following:
Policy Simulator for organization policies
Policy Simulator for allow policies
Policy Simulator for principal access boundary policies
How Policy Simulator for deny policies works
Policy Simulator for deny policies helps you determine whether a change
to a deny policy will block access that your principals are using.
When you run a simulation for a deny policy, Policy Simulator does the
following:
Retrieves access logs for the organization that were generated during the
replay period . The replay period is 90 days.
If the organization has not existed for more than
90 days, then Policy Simulator retrieves all
access logs since the organization was created.
Determines which access logs are relevant to the simulation. Relevant access
logs are all access logs that represent a principal's most recent attempt to
use a permission to access a resource.
For each relevant access log, determines whether the current
deny policies, along with the proposed changes,
would permit the attempted access. This process is called replaying the
access attempts.
For each access log, compares the access state from the replay with the
access state in the access logs. Then, Policy Simulator reports any
historical access attempts that weren't blocked in the access log, but were
blocked in the replay. These differences, which are called
access changes , show which access attempts would have been blocked if the
simulated deny policy had been in place at the time of the attempt.
Note: The access state in an access log might not reflect the current
access state. In these cases, Policy Simulator always compares the
results of the replay to the result from the access log, not to the
current access state.
Replay period
The replay period is the time period that Policy Simulator gets access
logs for when running a simulation. Access logs that occur before the first day
of the replay period or after the last day of the replay period aren't included
in the simulation.
Typically, the last day of the replay period is
1 day prior to the simulation. However, in
some cases, the last day of the replay period can be up to 10 days
prior to the simulation. Access logs
that occur after the last day of the replay period aren't included in the
simulation.
The replay period is 90 days. If the organization has not existed
for more than 90 days, then Policy Simulator retrieves all
access attempts since the organization was created.
The replay window is also eventually consistent . This
means that, when you run a simulation, some data might be fresher than other
data. However, eventually, all the data will have the same freshness.
Policy Simulator results
Policy Simulator reports the impact of a proposed change to a
deny policy as a list of access changes . For deny policies, the only type of
access change that Policy Simulator reports is the Access revoked
access change.
Policy Simulator reports that access is revoked if the following are
true:
The principal's most recent attempt to access the resource was successful
The proposed changes or another deny policy block the principal's access to
the resource
For each access change, Policy Simulator also reports the following
information:
The principal, resource, and permission involved in the access attempt.
The number of days during the replay period that the principal tried to use
the permission to access the resource. This total includes only the access
attempts that have the same result as the most recent access
attempt.
The date of the most recent access attempt.
Errors
The following errors can cause a simulation to fail:
Maximum concurrent simulations exceeded : The user already has
10 in-progress simulations, which is the maximum
number of in-progress simulations that a user can have. To resolve, wait for
one of the in-progress simulations to complete, then try running the
simulation again.
Timeout : The simulation took too long to run and timed out. To resolve,
try running the simulation again.
Invalid simulation construction : The proposed deny policy is invalid or
contains unsupported deny rules. An example of an invalid policy is one
that contains an invalid condition expression. An example of an unsupported
deny rule is one that uses workforce identity principal identifiers. To
resolve, correct the policy and try again.
Permission denied : You don't have permission to run a simulation. To
resolve, ensure that you're granted the required roles and
try again.
Note: Unsupported deny policies are ignored during simulations of deny policies
elsewhere in the resource hierarchy. For example, if you successfully simulate a
valid deny policy on a resource and there's an unsupported deny policy on an
ancestor resource, that unsupported deny policy is not evaluated by the
simulation. The result of the simulation reflects the valid deny policy, and
ignores the unsupported deny policy.
Supported principal types
Policy Simulator for deny policies only reviews access
logs for the following types of principals:
Google Workspace Accounts
Service accounts
Service account principal sets for projects,
folders, and organizations
Service agents
Service agent principal sets for projects,
folders, and organizations
When simulating deny policies, Policy Simulator doesn't review access
logs for any other principal types, including those based on federated
identities in a workload identity pool. As a result, Policy Simulator
doesn't report whether the proposed changes to your policies or bindings affect
those principals' access.
What's next
Learn how to simulate a change to a deny policy .
Explore other Policy Intelligence tools .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

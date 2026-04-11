---
title: "Policy Simulator for principal access boundary policies \_|\_ Policy Intelligence\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview
  title: "Policy Simulator for principal access boundary policies \_|\_ Policy Intelligence\
    \ \_|\_ Google Cloud Documentation"
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
Policy Simulator for principal access boundary policies
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
Policy Simulator for principal access boundary (PAB) policies lets you see how a
change to a principal access boundary policy or binding
might affect your principals' access before you commit to making the change. You
can use Policy Simulator to help you understand the potential impact of
a change to a principal access boundary policy or binding before you apply it.
This feature only evaluates access based on principal access boundary policies and
policy bindings.
To learn how to simulate changes to other policy types, see the following:
Policy Simulator for allow policies
Policy Simulator for deny policies
Policy Simulator for organization policies
How Policy Simulator for principal access boundary policies works
Policy Simulator for principal access boundary policies helps you determine
how a change to a principal access boundary policy or policy binding affects access for
principals in your organization.
When you run a simulation for a principal access boundary policy or policy binding,
Policy Simulator does the following:
Reviews access logs from the organization that were generated during the
replay period in the context of the current
principal access boundary policies and bindings and the simulated principal access boundary
policy or binding.
Returns a series of access changes . These access changes show which access
attempts from the logs are likely to have different results if you applied
the simulated policy or binding.
To learn more about the access changes that Policy Simulator returns,
see Policy Simulator results .
Replay period
The replay period is the time period that Policy Simulator gets access
logs for when running a simulation. Access logs that occur before the first day
of the replay period or after the last day of the replay period aren't included
in the simulation.
Typically, the last day of the replay period is
1 day prior to the simulation. However, in
some cases, the last day of the replay period can be
up to 10 days prior to the simulation. Access logs
that occur after the last day of the replay period aren't included in the
simulation.
The replay period is 90 days. If the organization has not existed
for more than 90 days, then Policy Simulator retrieves all
access attempts since the organization was created.
The replay window is also eventually consistent . This
means that, when you run a simulation, some data might be fresher than other
data. However, eventually, all the data will have the same freshness.
Policy Simulator results
Policy Simulator for principal access boundary reports the impact of a proposed
change to a
principal access boundary policy or binding as a list of access
changes . An access change represents an access attempt from
the replay period that would likely have a different result if the simulated
policy were applied.
For each access change, Policy Simulator also reports the following
information:
The principal, permission, and, if available, resource involved in the access
attempt.
The number of days during the replay period that the principal tried to use
the permission to access the resource. This total includes only the access
attempts that have the same result as the most recent access
attempt.
The date of the most recent access attempt.
Access changes
An access change indicates that, based on the relevant principal access boundary
policies, a user's access is likely to change if you apply the simulated policy
or binding. Access changes can either be access gained or access revoked .
When calculating access changes, Policy Simulator for principal access boundary
only evaluates principal access boundary policies and bindings. It doesn't evaluate
other policy types.
Policy Simulator calculates access changes using the following
information:
The result of the most recent access attempt
The impact of the current principal access boundary policies and bindings
The impact of the proposed principal access boundary policies and bindings
For access to be gained , all of the following must be true:
The most recent access attempt was blocked
Access is blocked by the current principal access boundary policies and bindings
Access is not blocked by the proposed principal access boundary policies and bindings
For access to be revoked , all of the following must be true:
The most recent access attempt was not blocked
Access is not blocked by the current principal access boundary policies and bindings
Access is blocked by the proposed principal access boundary policies and bindings
A set of principal access boundary policies and bindings block a principal's access if
all of the following are true:
principal access boundary policies do affect the principal's access. In other
words, the principal is subject to at least one principal access boundary policy
that has an enforcement
version that supports the permission in the request.
None of the principal access boundary policies that the principal is subject to
include the resource.
A set of principal access boundary policies and bindings don't block principal's access
if any of the following are true:
principal access boundary policies don't affect the principal's access. In other
words, the principal isn't subject to any principal access boundary policies that
that have an enforcement
version that supports the permission in the request.
At least one of the principal access boundary policies that the principal is
subject to includes the resource.
Errors
The following errors can cause a simulation to fail:
Timeout : The simulation took too long to run and timed out. To resolve,
try running the simulation again.
Invalid simulation construction : The proposed principal access boundary policy or
principal access boundary policy binding is invalid. For example, the proposed
policy has an invalid condition expression, or the proposed binding is for a
principal set that is already bound to the maximum number of
policies . To resolve, correct the policy or binding and try
again.
Permission denied : You don't have permission to run a simulation. To
resolve, ensure that you're granted the required roles and
try again.
Supported principal types
Policy Simulator for principal access boundary policies only reviews access
logs for the following types of principals:
Google Accounts
Service accounts
When simulating principal access boundary policies and bindings,
Policy Simulator doesn't review access logs for any other principal
types. As a result, it doesn't report whether the proposed changes to your
policies or bindings will affect those principals' access.
What's next
Learn how to simulate a change to a principal access boundary policy or binding .
Explore other Policy Intelligence tools .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

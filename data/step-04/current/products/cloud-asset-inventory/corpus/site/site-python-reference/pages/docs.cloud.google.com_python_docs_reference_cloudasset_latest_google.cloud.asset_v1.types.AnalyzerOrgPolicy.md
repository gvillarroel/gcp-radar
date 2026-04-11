---
title: "Class AnalyzerOrgPolicy (4.2.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzerOrgPolicy
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzerOrgPolicy
  title: "Class AnalyzerOrgPolicy (4.2.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class AnalyzerOrgPolicy (4.2.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
4.2.0 (latest)
4.1.0
4.0.0
3.30.1
3.29.2
3.28.0
3.27.1
3.26.4
3.25.1
3.24.3
3.23.0
3.22.0
3.21.0
3.20.1
3.19.1
3.18.1
3.17.1
3.16.0
3.15.0
3.14.2
3.13.1
3.12.0
3.11.0
3.10.0
3.9.1
3.8.1
3.7.1
3.6.1
3.5.0
3.4.0
3.3.0
3.2.1
3.1.0
2.2.2
2.1.0
2.0.0
1.3.2
1.2.0
1.1.0
1.0.0
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.1
0.3.0
AnalyzerOrgPolicy ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
This organization policy message is a modified version of the
one defined in the Organization Policy system. This message
contains several fields defined in the original organization
policy with some new fields for analysis purpose.
Attributes
Name
Description
attached_resource
str
The [full resource name]
(https://cloud.google.com/asset-inventory/docs/resource-name-format)
of an organization/folder/project resource where this
organization policy is set.
Notice that some type of constraints are defined with
default policy. This field will be empty for them.
applied_resource
str
The [full resource name]
(https://cloud.google.com/asset-inventory/docs/resource-name-format)
of an organization/folder/project resource where this
organization policy applies to.
For any user defined org policies, this field has the same
value as the [attached_resource] field. Only for default
policy, this field has the different value.
rules
MutableSequence[ google.cloud.asset_v1.types.AnalyzerOrgPolicy.Rule ]
List of rules for this organization policy.
inherit_from_parent
bool
If inherit_from_parent is true, Rules set higher up in
the hierarchy (up to the closest root) are inherited and
present in the effective policy. If it is false, then no
rules are inherited, and this policy becomes the effective
root for evaluation.
reset
bool
Ignores policies set above this resource and restores the
default behavior of the constraint at this resource. This
field can be set in policies for either list or boolean
constraints. If set, rules must be empty and
inherit_from_parent must be set to false.
Classes
Rule
Rule ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
This rule message is a customized version of the one defined
in the Organization Policy system. In addition to the fields
defined in the original organization policy, it contains
additional field(s) under specific circumstances to support
analysis results.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]

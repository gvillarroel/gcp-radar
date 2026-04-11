---
title: "Manage fields externally \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally
  title: "Manage fields externally \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Manage fields externally
Caution: For CRDs added in
version 1.114.0 and later ,
externally managed fields are not populated by default.
When Config Connector creates a resource on Google Cloud, fields left
unspecified in the spec take on values from the API unless they are not readable
(for example, are not available by using a GET HTTP request).
In this case, the field is considered "externally managed", as Kubernetes is not
the source of truth for this value.
Behavior with server-side apply
If
server-side apply
is enabled for the resource, the values of externally managed fields in the
object is updated continuously to match the underlying Google Cloud
resource.
If a value is present for a field in the spec in the applied configuration, the
field is not externally managed.
If the field is removed, the field is externally managed.
Note: For fields which are lists, this behavior does not hold, and instead
follows the behavior without server-side apply
in the following section .
Behavior without server-side apply
If server-side apply is not enabled, unspecified fields in the resource spec
are populated with the value read from the Google Cloud API, and
Config Connector enforces those initially populated values.
As an example: if the user applies a resource configuration without setting a
value for bar in the spec:
spec :
foo : "foo"
If the value of the bar field is baz in the Google Cloud API, the
resource in the
api-server
is populated to that value:
# object in the api-server
spec :
foo : "foo"
bar : "baz" # populated by first reconciliation
If the Google Cloud resource is modified directly such that bar is now
baz-2 , the Google Cloud API is corrected to the value that was
initially populated in the resource spec: baz :
# object in the api-server
spec :
foo : "foo"
bar : "baz" # still the originally populated value, and overrides the Google Cloud value
Behavior for list fields in resource spec
Due to technical limitation in Config Connector, list fields in your resource
configuration cannot be managed externally by default. This means
Config Connector always takes ownership of list fields in the resource spec,
even when the field is not specified in your original resource configuration.
At the time when a resource spec is applied, Config Connector reads the
value of list fields from the Google Cloud API and treats this initial
value as source of truth and desired state. If the value in that list field is
modified outside of Config Connector, Config Connector tries to change it
back, which might not be desired.
To bypass this limitation and let list fields be managed externally,
use the cnrm.cloud.google.com/state-into-spec annotation. This
annotation is not supported for all resources. To see if your
resource supports the annotation, check the corresponding
resource reference page .
metadata :
annotations :
cnrm.cloud.google.com/state-into-spec : absent
By setting value of state-into-spec as absent , Config Connector ignores
list fields if they are not specified in your resource configuration. This leaves
list fields in the resource to be managed externally.
Caveats
Fields that are both managed by Config Connector and automatically updated by
external services can trigger endless updating on the underlying API. This can
happen if the underlying API has autoscaling or autoupdating fields. Ensure that
these fields are treated as externally managed by enabling server-side apply for
the resource and leaving the field out of your config file when applying.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/app-profile
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/app-profile
  title: "Python client libraries \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.1
2.29.0
2.28.1
2.26.0
2.25.0
2.24.0
2.23.1
2.22.0
2.21.0
2.20.0
2.19.0
2.18.1
2.17.0
2.16.0
2.15.0
2.14.1
2.13.2
2.12.0
2.11.3
2.10.1
2.9.0
2.8.1
2.7.1
2.6.0
2.5.2
2.4.0
2.3.3
2.2.0
2.1.0
2.0.0
1.7.3
1.6.1
1.5.1
1.4.0
1.3.0
1.2.1
1.1.0
1.0.0
0.34.0
App Profile
User-friendly container for Google Cloud Bigtable AppProfile.
class google.cloud.bigtable.app_profile.AppProfile(app_profile_id, instance, routing_policy_type=None, description=None, cluster_id=None, multi_cluster_ids=None, allow_transactional_writes=None)
Bases: object
Representation of a Google Cloud Bigtable AppProfile.
We can use a AppProfile to:
reload() itself
create() itself
update() itself
delete() itself
Parameters
app_profile_id ( str ) – The ID of the AppProfile. Must be of the form
[_a-zA-Z0-9][-_.a-zA-Z0-9]\* .
Type
routing_policy_type: int
Param
routing_policy_type: (Optional) The type of the routing policy.
Possible values are represented
by the following constants:
google.cloud.bigtable.enums.RoutingPolicyType.ANY
google.cloud.bigtable.enums.RoutingPolicyType.SINGLE
Type
description: str
Param
description: (Optional) Long form description of the use
case for this AppProfile.
Type
cluster_id: str
Param
cluster_id: (Optional) Unique cluster_id which is only required
when routing_policy_type is
ROUTING_POLICY_TYPE_SINGLE.
Type
multi_cluster_ids: list
Param
multi_cluster_ids: (Optional) The set of clusters to route to.
The order is ignored; clusters will be tried in order of distance.
If left empty, all clusters are eligible.
Type
allow_transactional_writes: bool
Param
allow_transactional_writes: (Optional) If true, allow
transactional writes for
ROUTING_POLICY_TYPE_SINGLE.
create(ignore_warnings=None)
Create this AppProfile.
NOTE : Uses the instance and app_profile_id on the current
AppProfile in addition to the routing_policy_type ,
description , cluster_id and allow_transactional_writes .
To change them before creating, reset the values via
For example:
from google.cloud.bigtable import Client
from google.cloud.bigtable import enums
routing_policy_type = enums.RoutingPolicyType.ANY
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
description = "routing policy-multy"
app_profile = instance.app_profile(
app_profile_id=APP_PROFILE_ID,
routing_policy_type=routing_policy_type,
description=description,
cluster_id=CLUSTER_ID,
)
app_profile = app_profile.create(ignore_warnings=True)
Type
ignore_warnings: bool
Param
ignore_warnings: (Optional) If true, ignore safety checks when
creating the AppProfile.
delete(ignore_warnings=None)
Delete this AppProfile.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
app_profile = instance.app_profile(APP_PROFILE_ID)
app_profile.reload()
app_profile.delete(ignore_warnings=True)
Type
ignore_warnings: bool
Param
ignore_warnings: If true, ignore safety checks when deleting
the AppProfile.
Raises
google.api_core.exceptions.GoogleAPICallError: If the request
failed for any reason. google.api_core.exceptions.RetryError:
If the request failed due to a retryable error and retry
attempts failed. ValueError: If the parameters are invalid.
exists()
Check whether the AppProfile already exists.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
app_profile = instance.app_profile(APP_PROFILE_ID)
app_profile_exists = app_profile.exists()
Return type
bool
Returns
True if the AppProfile exists, else False.
classmethod from_pb(app_profile_pb, instance)
Creates an instance app_profile from a protobuf.
Parameters
app_profile_pb ( instance.app_profile_pb ) – An instance protobuf object.
instance ( google.cloud.bigtable.instance.Instance ) – The instance that owns the cluster.
Return type
AppProfile
Returns
The AppProfile parsed from the protobuf response.
Raises
ValueError if the AppProfile
name does not match
projects/{project}/instances/{instance_id}/appProfiles/{app_profile_id}
or if the parsed instance ID does not match the istance ID
on the client.
or if the parsed project ID does not match the project ID
on the client.
property instance_admin_client()
Shortcut to instance_admin_client
Return type
bigtable_admin_pb2.BigtableInstanceAdmin
Returns
A BigtableInstanceAdmin instance.
property name()
AppProfile name used in requests.
NOTE : This property will not change if app_profile_id does not, but
the return value is not cached.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
app_profile = instance.app_profile(APP_PROFILE_ID)
app_profile_name = app_profile.name
The AppProfile name is of the form
`"projects/../instances/../app_profile/{app_profile_id}"`
Return type
str
Returns
The AppProfile name.
reload()
Reload the metadata for this cluster
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
app_profile = instance.app_profile(APP_PROFILE_ID)
app_profile.reload()
update(ignore_warnings=None)
Update this app_profile.
NOTE : Update any or all of the following values:
routing_policy_type
description
cluster_id
multi_cluster_ids
allow_transactional_writes
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
app_profile = instance.app_profile(APP_PROFILE_ID)
app_profile.reload()
description = "My new app profile"
app_profile.description = description
app_profile.update()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]

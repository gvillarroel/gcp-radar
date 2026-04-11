---
title: "Class ACL (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.acl.ACL
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/storage/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.acl.ACL
  title: "Class ACL (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class ACL (3.10.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.10.0 (latest)
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.1
3.3.1
3.2.0
3.1.1
3.0.0
2.19.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.0
2.2.1
2.1.0
2.0.0
1.44.0
1.43.0
1.42.3
1.41.1
1.40.0
1.39.0
1.38.0
1.37.1
1.36.2
1.35.1
1.34.0
1.33.0
1.32.0
1.31.2
1.30.0
1.29.0
1.28.1
1.27.0
1.26.0
1.25.0
1.24.1
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
ACL ()
Container class representing a list of access controls.
Properties
client
Abstract getter for the object client.
Methods
add_entity
add_entity ( entity )
Add an entity to the ACL.
Parameter
Name
Description
entity
_ACLEntity
The entity to add to this ACL.
all
all ()
Factory method for an Entity representing all users.
Returns
Type
Description
_ACLEntity
An entity representing all users.
all_authenticated
all_authenticated ()
Factory method for an Entity representing all authenticated users.
Returns
Type
Description
_ACLEntity
An entity representing all authenticated users.
clear
clear (
client = None ,
if_generation_match = None ,
if_generation_not_match = None ,
if_metageneration_match = None ,
if_metageneration_not_match = None ,
timeout = 60 ,
retry = google . cloud . storage . retry . ConditionalRetryPolicy ,
)
Remove all ACL entries.
If user_project is set, bills the API request to that project.
Note that this won't actually remove ALL the rules, but it
will remove all the non-default rules. In short, you'll still
have access to a bucket that you created even after you clear
ACL rules with this method.
Parameters
Name
Description
client
Client or NoneType
(Optional) The client to use. If not passed, falls back to the client stored on the ACL's parent.
if_generation_match
long
(Optional) See :ref: using-if-generation-match
if_generation_not_match
long
(Optional) See :ref: using-if-generation-not-match
if_metageneration_match
long
(Optional) See :ref: using-if-metageneration-match
if_metageneration_not_match
long
(Optional) See :ref: using-if-metageneration-not-match
timeout
float or tuple
(Optional) The amount of time, in seconds, to wait for the server response. See: configuring_timeouts
retry
google.api_core.retry.Retry or google.cloud.storage.retry.ConditionalRetryPolicy
(Optional) How to retry the RPC. See: configuring_retries
domain
domain ( domain )
Factory method for a domain Entity.
Parameter
Name
Description
domain
str
The domain for this entity.
Returns
Type
Description
_ACLEntity
An entity corresponding to this domain.
entity
entity ( entity_type , identifier = None )
Factory method for creating an Entity.
If an entity with the same type and identifier already exists,
this will return a reference to that entity. If not, it will
create a new one and add it to the list of known entities for
this ACL.
Parameters
Name
Description
entity_type
str
The type of entity to create (ie, user , group , etc)
identifier
str
The ID of the entity (if applicable). This can be either an ID or an e-mail address.
Returns
Type
Description
_ACLEntity
A new Entity or a reference to an existing identical entity.
entity_from_dict
entity_from_dict ( entity_dict )
Build an _ACLEntity object from a dictionary of data.
An entity is a mutable object that represents a list of roles
belonging to either a user or group or the special types for all
users and all authenticated users.
Parameter
Name
Description
entity_dict
dict
Dictionary full of data from an ACL lookup.
Returns
Type
Description
_ACLEntity
An Entity constructed from the dictionary.
get_entities
get_entities ()
Get a list of all Entity objects.
Returns
Type
Description
list of _ACLEntity objects
A list of all Entity objects.
get_entity
get_entity ( entity , default = None )
Gets an entity object from the ACL.
Parameters
Name
Description
entity
_ACLEntity or string
The entity to get lookup in the ACL.
default
anything
This value will be returned if the entity doesn't exist.
Returns
Type
Description
_ACLEntity
The corresponding entity or the value provided to default .
group
group ( identifier )
Factory method for a group Entity.
Parameter
Name
Description
identifier
str
An id or e-mail for this particular group.
Returns
Type
Description
_ACLEntity
An Entity corresponding to this group.
has_entity
has_entity ( entity )
Returns whether or not this ACL has any entries for an entity.
Parameter
Name
Description
entity
_ACLEntity
The entity to check for existence in this ACL.
Returns
Type
Description
bool
True of the entity exists in the ACL.
reload
reload ( client = None , timeout = 60 , retry = google . api_core . retry . retry_unary . Retry )
Reload the ACL data from Cloud Storage.
If user_project is set, bills the API request to that project.
Parameters
Name
Description
client
Client or NoneType
(Optional) The client to use. If not passed, falls back to the client stored on the ACL's parent.
timeout
float or tuple
(Optional) The amount of time, in seconds, to wait for the server response. See: configuring_timeouts
retry
google.api_core.retry.Retry
(Optional) How to retry the RPC. See: configuring_retries
reset
reset ()
Remove all entities from the ACL, and clear the loaded flag.
save
save (
acl = None ,
client = None ,
if_generation_match = None ,
if_generation_not_match = None ,
if_metageneration_match = None ,
if_metageneration_not_match = None ,
timeout = 60 ,
retry = google . cloud . storage . retry . ConditionalRetryPolicy ,
)
Save this ACL for the current bucket.
If user_project is set, bills the API request to that project.
Parameters
Name
Description
acl
ACL , or a compatible list.
The ACL object to save. If left blank, this will save current entries.
client
Client or NoneType
(Optional) The client to use. If not passed, falls back to the client stored on the ACL's parent.
if_generation_match
long
(Optional) See :ref: using-if-generation-match
if_generation_not_match
long
(Optional) See :ref: using-if-generation-not-match
if_metageneration_match
long
(Optional) See :ref: using-if-metageneration-match
if_metageneration_not_match
long
(Optional) See :ref: using-if-metageneration-not-match
timeout
float or tuple
(Optional) The amount of time, in seconds, to wait for the server response. See: configuring_timeouts
retry
google.api_core.retry.Retry or google.cloud.storage.retry.ConditionalRetryPolicy
(Optional) How to retry the RPC. See: configuring_retries
save_predefined
save_predefined (
predefined ,
client = None ,
if_generation_match = None ,
if_generation_not_match = None ,
if_metageneration_match = None ,
if_metageneration_not_match = None ,
timeout = 60 ,
retry = google . cloud . storage . retry . ConditionalRetryPolicy ,
)
Save this ACL for the current bucket using a predefined ACL.
If user_project is set, bills the API request to that project.
Parameters
Name
Description
predefined
str
An identifier for a predefined ACL. Must be one of the keys in PREDEFINED_JSON_ACLS or PREDEFINED_XML_ACLS (which will be aliased to the corresponding JSON name). If passed, acl must be None.
client
Client or NoneType
(Optional) The client to use. If not passed, falls back to the client stored on the ACL's parent.
if_generation_match
long
(Optional) See :ref: using-if-generation-match
if_generation_not_match
long
(Optional) See :ref: using-if-generation-not-match
if_metageneration_match
long
(Optional) See :ref: using-if-metageneration-match
if_metageneration_not_match
long
(Optional) See :ref: using-if-metageneration-not-match
timeout
float or tuple
(Optional) The amount of time, in seconds, to wait for the server response. See: configuring_timeouts
retry
google.api_core.retry.Retry or google.cloud.storage.retry.ConditionalRetryPolicy
(Optional) How to retry the RPC. See: configuring_retries
user
user ( identifier )
Factory method for a user Entity.
Parameter
Name
Description
identifier
str
An id or e-mail for this particular user.
Returns
Type
Description
_ACLEntity
An Entity corresponding to this user.
validate_predefined
validate_predefined ( predefined )
Ensures predefined is in list of predefined json values
Parameter
Name
Description
predefined
str
validated JSON name of predefined acl
Exceptions
Type
Description
:exc
ValueError : If predefined is not a valid acl
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-19 UTC."],[],[]]

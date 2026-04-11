---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/column-family
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/column-family
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
Column Families
When creating a
ColumnFamily , it is
possible to set garbage collection rules for expired data.
By setting a rule, cells in the table matching the rule will be deleted
during periodic garbage collection (which executes opportunistically in the
background).
The types
MaxAgeGCRule ,
MaxVersionsGCRule ,
GarbageCollectionRuleUnion and
GarbageCollectionRuleIntersection
can all be used as the optional gc_rule argument in the
ColumnFamily
constructor. This value is then used in the
create() and
update() methods.
These rules can be nested arbitrarily, with a
MaxAgeGCRule or
MaxVersionsGCRule
at the lowest level of the nesting:
import datetime
max_age = datetime.timedelta(days=3)
rule1 = MaxAgeGCRule(max_age)
rule2 = MaxVersionsGCRule(1)
# Make a composite that matches anything older than 3 days **AND**
# with more than 1 version.
rule3 = GarbageCollectionIntersection(rules=[rule1, rule2])
# Make another composite that matches our previous intersection
# **OR** anything that has more than 3 versions.
rule4 = GarbageCollectionRule(max_num_versions=3)
rule5 = GarbageCollectionUnion(rules=[rule3, rule4])
User friendly container for Google Cloud Bigtable Column Family.
class google.cloud.bigtable.column_family.ColumnFamily(column_family_id, table, gc_rule=None)
Bases: object
Representation of a Google Cloud Bigtable Column Family.
We can use a ColumnFamily to:
create() itself
update() itself
delete() itself
Parameters
column_family_id ( str ) – The ID of the column family. Must be of the
form [_a-zA-Z0-9][-_.a-zA-Z0-9]\* .
table ( Table ) – The table that owns the column family.
gc_rule ( GarbageCollectionRule ) – (Optional) The garbage collection settings for this
column family.
create()
Create this column family.
For example:
from google.cloud.bigtable import Client
from google.cloud.bigtable import column_family
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
table = instance.table(TABLE_ID)
column_family_id = "column_family_id1"
gc_rule = column_family. MaxVersionsGCRule (2)
column_family_obj = table.column_family(column_family_id, gc_rule=gc_rule)
column_family_obj.create()
delete()
Delete this column family.
For example:
from google.cloud.bigtable import Client
from google.cloud.bigtable import column_family
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
table = instance.table(TABLE_ID)
column_family_id = "column_family_id1"
column_family_obj = table.column_family(column_family_id)
column_family_obj.delete()
property name()
Column family name used in requests.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
table = instance.table(TABLE_ID)
column_families = table. list_column_families ()
column_family_obj = column_families[COLUMN_FAMILY_ID]
column_family_name = column_family_obj.name
NOTE : This property will not change if column_family_id does not, but
the return value is not cached.
The Column family name is of the form
"projects/../zones/../clusters/../tables/../columnFamilies/.."
Return type
str
Returns
The column family name.
to_pb()
Converts the column family to a protobuf.
Return type
table_v2_pb2.ColumnFamily
Returns
The converted current object.
update()
Update this column family.
For example:
from google.cloud.bigtable import Client
from google.cloud.bigtable import column_family
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
table = instance.table(TABLE_ID)
# Already existing column family id
column_family_id = "column_family_id1"
# Define the GC rule to retain data with max age of 5 days
max_age_rule = column_family. MaxAgeGCRule (datetime.timedelta(days=5))
column_family_obj = table.column_family(column_family_id, gc_rule=max_age_rule)
column_family_obj.update()
NOTE : Only the GC rule can be updated. By changing the column family ID,
you will simply be referring to a different column family.
class google.cloud.bigtable.column_family.GCRuleIntersection(rules)
Bases: google.cloud.bigtable.column_family.GarbageCollectionRule
Intersection of garbage collection rules.
For example:
from google.cloud.bigtable import Client
from google.cloud.bigtable import column_family
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
table = instance.table(TABLE_ID)
max_versions_rule = column_family. MaxVersionsGCRule (2)
max_age_rule = column_family. MaxAgeGCRule (datetime.timedelta(days=5))
intersection_rule = column_family. GCRuleIntersection (
[max_versions_rule, max_age_rule]
)
column_family_obj = table.column_family("cf4", intersection_rule)
column_family_obj.create()
Parameters
rules ( list ) – List of GarbageCollectionRule .
to_pb()
Converts the intersection into a single GC rule as a protobuf.
Return type
table_v2_pb2.GcRule
Returns
The converted current object.
class google.cloud.bigtable.column_family.GCRuleUnion(rules)
Bases: google.cloud.bigtable.column_family.GarbageCollectionRule
Union of garbage collection rules.
For example:
from google.cloud.bigtable import Client
from google.cloud.bigtable import column_family
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
table = instance.table(TABLE_ID)
max_versions_rule = column_family. MaxVersionsGCRule (2)
max_age_rule = column_family. MaxAgeGCRule (datetime.timedelta(days=5))
union_rule = column_family. GCRuleUnion ([max_versions_rule, max_age_rule])
column_family_obj = table.column_family("cf3", union_rule)
column_family_obj.create()
Parameters
rules ( list ) – List of GarbageCollectionRule .
to_pb()
Converts the union into a single GC rule as a protobuf.
Return type
table_v2_pb2.GcRule
Returns
The converted current object.
class google.cloud.bigtable.column_family.GarbageCollectionRule()
Bases: object
Garbage collection rule for column families within a table.
Cells in the column family (within a table) fitting the rule will be
deleted during garbage collection.
NOTE : This class is a do-nothing base class for all GC rules.
NOTE : A string gc_expression can also be used with API requests, but
that value would be superceded by a gc_rule . As a result, we
don’t support that feature and instead support via native classes.
class google.cloud.bigtable.column_family.MaxAgeGCRule(max_age)
Bases: google.cloud.bigtable.column_family.GarbageCollectionRule
Garbage collection limiting the age of a cell.
For example:
from google.cloud.bigtable import Client
from google.cloud.bigtable import column_family
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
table = instance.table(TABLE_ID)
# Define the GC rule to retain data with max age of 5 days
max_age_rule = column_family. MaxAgeGCRule (datetime.timedelta(days=5))
column_family_obj = table.column_family("cf1", max_age_rule)
column_family_obj.create()
Parameters
max_age ( datetime.timedelta ) – The maximum age allowed for a cell in the table.
to_pb()
Converts the garbage collection rule to a protobuf.
Return type
table_v2_pb2.GcRule
Returns
The converted current object.
class google.cloud.bigtable.column_family.MaxVersionsGCRule(max_num_versions)
Bases: google.cloud.bigtable.column_family.GarbageCollectionRule
Garbage collection limiting the number of versions of a cell.
For example:
from google.cloud.bigtable import Client
from google.cloud.bigtable import column_family
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
table = instance.table(TABLE_ID)
# Define the GC policy to retain only the most recent 2 versions
max_versions_rule = column_family. MaxVersionsGCRule (2)
column_family_obj = table.column_family("cf2", max_versions_rule)
column_family_obj.create()
Parameters
max_num_versions ( int ) – The maximum number of versions
to_pb()
Converts the garbage collection rule to a protobuf.
Return type
table_v2_pb2.GcRule
Returns
The converted current object.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]

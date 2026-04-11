---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/common_data_read_modify_write_rules
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/common_data_read_modify_write_rules
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
Read Modify Write Rules
class google.cloud.bigtable.data.read_modify_write_rules.AppendValueRule(family: str , qualifier: bytes | str , append_value: bytes | str )
Bases: google.cloud.bigtable.data.read_modify_write_rules.ReadModifyWriteRule
Rule to append a value to a cell’s value.
Parameters
family – The family name of the cell to append to.
qualifier – The qualifier of the cell to append to.
append_value – The value to append to the cell’s value.
Raises
TypeError – If append_value is not bytes or str.
class google.cloud.bigtable.data.read_modify_write_rules.IncrementRule(family: str , qualifier: bytes | str , increment_amount: int = 1)
Bases: google.cloud.bigtable.data.read_modify_write_rules.ReadModifyWriteRule
Rule to increment a cell’s value.
Parameters
family – The family name of the cell to increment.
qualifier – The qualifier of the cell to increment.
increment_amount – The amount to increment the cell’s value. Must be between -2**63 and 2**63 (64-bit signed int).
Raises
TypeError – If increment_amount is not an integer.
ValueError – If increment_amount is not between -2**63 and 2**63 (64-bit signed int).
class google.cloud.bigtable.data.read_modify_write_rules.ReadModifyWriteRule(family: str , qualifier: bytes | str )
Bases: abc.ABC
Abstract base class for read-modify-write rules.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]

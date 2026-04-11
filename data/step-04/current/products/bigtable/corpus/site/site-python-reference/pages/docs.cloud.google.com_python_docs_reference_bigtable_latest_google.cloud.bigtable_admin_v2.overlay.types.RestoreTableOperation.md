---
title: "Class RestoreTableOperation (2.35.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.types.RestoreTableOperation
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.types.RestoreTableOperation
  title: "Class RestoreTableOperation (2.35.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class RestoreTableOperation (2.35.0)
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
RestoreTableOperation (
operations_client , restore_table_operation : google . api_core . operation . Operation
)
A Future for interacting with Bigtable Admin's RestoreTable Long-Running Operation.
This is needed to expose a potential long-running operation that might run after this operation
finishes, OptimizeRestoreTable. This is exposed via the the optimize_restore_table_operation
method.
This class should not be instantiated by users and should only be instantiated by the admin
client's :meth: restore_table
<<xref uid="google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient.restore_table">google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient.restore_table</xref>>
method.
Parameters
Name
Description
operations_client
google.api_core.operations_v1.AbstractOperationsClient
The operations client from the admin client class's transport.
restore_table_operation
google.api_core.operation.Operation
A google.api_core.operation.Operation instance resembling a RestoreTable long-running operation
Methods
optimize_restored_table_operation
optimize_restored_table_operation () - > (
typing . Optional [ google . api_core . operation . Operation ]
)
Gets the OptimizeRestoredTable long-running operation that runs after this operation finishes.
This must not be called before the parent restore_table operation is complete. You can guarantee
this happening by calling this function after this class's google.api_core.operation.Operation.result
method.
The follow-up operation has
metadata <google.api_core.operation.Operation.metadata> type
:class: OptimizeRestoredTableMetadata
<<xref uid="google.cloud.bigtable_admin_v2.types">google.cloud.bigtable_admin_v2.types</xref>.bigtable_table_admin.OptimizeRestoredTableMetadata>
and no return value, but can be waited for with result .
The current operation might not trigger a follow-up OptimizeRestoredTable operation, in which case, this
method will return None .
Exceptions
Type
Description
google.api_core.GoogleAPIError
raised when accessed before the restore_table operation is complete
Returns
Type
Description
Optional[google.api_core.operation.Operation]
An object representing a long-running operation, or None if there is no OptimizeRestoredTable operation after this one.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]

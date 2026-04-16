---
title: "Lifecycle of a migrating VM \_|\_ Migrate to Virtual Machines \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/manage-migrating-vm
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/manage-migrating-vm
  title: "Lifecycle of a migrating VM \_|\_ Migrate to Virtual Machines \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Virtual Machines
Guides
Send feedback
Lifecycle of a migrating VM
Stay organized with collections
Save and categorize content based on your preferences.
When you create a migrating VM using Migrate to Virtual Machines, the VM stays active
for 100 days from the time that the VM appears in the VM Migrations tab. A
migrating VM is considered active if the VM is in the FIRST_SYNC ,
ACTIVE , PAUSED , CUTTING_OVER ,
FINAL_SYNC , CUTOVER , or FINALIZING states.
For more information about these states, see States of a migrating VM .
You can use the migrating VM during this time to perform your migrations.
A 100 days after a migrating VM is created, the VM moves to the
EXPIRED state. The VM stays in the EXPIRED state for
30 days. The EXPIRED state is similar to the PAUSED
state. In this state, the VM stops cycling, but its resources aren't
deleted. If you need more time to complete your migration, you can
extend the lifespan of the migrating VM by an additional
100 days. You can only extend the lifespan of a migrating VM two weeks before
the VM expires and throughout the expiration period (between 86 to 130 days from
the creation of the VM). If you don't extend the lifespan of the VM during this
period, the VM expires as shown in the following figure.
Note: You can only extend the lifespan of a migrating VM once. Any VM that you
create for a migration using Migrate to Virtual Machines will have a total lifespan
of 200 days at the maximum (including the extension).
Lifecycle of a migrating VM
If you don't extend the lifespan of the migrating VM between 86 to 130 days, the
VM moves to the FINALIZED_EXPIRED state. You cannot recover a VM
from the FINALIZED_EXPIRED state. Similar to the
FINALIZED state, a FINALIZED_EXPIRED VM will have its
allocated resources deleted.
Note: If the VM is in the PENDING , READY ,
ERROR , or FINALIZED states for 100 days, the VM is
directly moved to the FINALIZED_EXPIRED state.
Extend the lifespan of a migrating VM
To extend the lifespan of a migrating VM, follow these steps:
Open the Migrate to Virtual Machines page in the Google Cloud console:
Go to the Migrate to Virtual Machines page
Select the VM Migrations tab.
A table of available source VMs appears.
Select one or more VMs.
Click Migrations to open the menu, and then click Extend migration .
The state of the selected VMs will now be set to ACTIVE and the
lifespan is extended by a 100 days.
States of a migrating VM
The following table describes the various states that a migrating VM exists in
during and after a migration.
VM Status
Description
ACTIVE
The replication is active, and the replication is running or scheduled to run.
CUTOVER
The replication was paused by you and no cycles are scheduled to run.
CUTTING_OVER
The source VM was stopped and replicated. The replication is paused.
ERROR
The replication process encountered an unrecoverable error and was aborted.
EXPIRED
The migrating VM is moved to the EXPIRED state a 100 days
after creation. The VM stays in this state for 30 days. In this state, the
VM stop cycling, but its resources won't be deleted.
FIRST_SYNC
Migration is going through the first sync cycle.
FINAL_SYNC
A cutover job is active and replication cycle is running the final
sync.
FINALIZING
The migrating VM is being finalized and migration resources are being
removed.
FINALIZED
The replication process is complete and the migrating VM is finalized.
FINALIZED_EXPIRED
The migrating VM is expired and finalized.
PENDING
The VM in the source is being verified.
PAUSED
The source VM was stopped and replicated. The replication is paused.
READY
The source VM was verified and the VM is ready to start replication.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

# Step 05 Data

This directory stores data for workflow Step 05.

Step 05 currently materializes a reproducible Google Cloud IAM inventory by
using `gcloud` to list predefined roles and describe their included
permissions.

Current canonical output layout:

- `current/index.json` for the top-level Step 05 run index
- `current/state.json` for the latest Step 05 run state
- `current/roles/index.json` for the full role list and role metadata summary
- `current/roles/items/<role-slug>.json` for per-role role descriptions
- `current/permissions/index.json` for the permission-to-role index
- `current/permissions/groups/<permission-group>.json` for grouped permission
  inventories
- `current/exports/roles.parquet` for the flattened role export when available
- `current/exports/permissions.parquet` for the flattened permission export
  when available
- `current/exports/role-permissions.parquet` for the role-to-permission bridge
  export when available

The current Step 05 rerun model is:

- always refresh the role list
- reuse cached described role payloads when the listed `etag` is unchanged
- redescribe changed or new roles
- regenerate JSON outputs from the full local inventory
- allow a full refresh with an explicit reprocess flag

These outputs are still intermediate workflow data.
They are the current extracted IAM inventory, not yet validated product or
feature source-of-truth artifacts.

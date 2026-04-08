# Guest Environment

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 11
Unique features: 8

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-30 | Guest telemetry extension |  | The guest agent adds a local extension that collects telemetry data about ISVs running on a compute instance. |
| 2026-03-30 | Local plugins |  | The enable_local_plugins setting now defaults to true, enabling local plugins by default. |
| 2026-03-30 | Plugin connection type configuration |  | The guest agent adds a PluginConfig connection_type flag that forces extension connections to use UDS or TCP. |
| 2026-03-02 | Dynamic local extension startup |  | The guest agent can dynamically start locally installed extensions when local plugins are enabled. |
| 2026-03-02 | Guest agent cleanup job |  | The guest agent runs a daily cleanup job and another at service initialization to remove leftover plugin files and state. |
| 2026-03-02 | HTTPS metadata server bootstrapping credentials |  | The guest agent supports bootstrapping credentials for the metadata server's HTTPS endpoint by default. |
| 2025-12-11 | Windows plugin-based architecture |  | The guest agent reintroduces the plugin-based architecture for Windows; The guest agent introduces the plugin-based architecture for Windows. |
| 2025-12-08 | Snapshot module NGUID support |  | The snapshot module can use NGUIDs to identify disks, expanding support across more VM families. |

Source file slug: `guest-environment.md`


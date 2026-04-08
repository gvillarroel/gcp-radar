# Service Extensions

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 17
Unique features: 17

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-12-08 | Service Extensions dynamic forwarding |  | Service Extensions now supports dynamic forwarding, allowing tenants to be mapped to endpoints programmatically without updating URL maps. |
| 2025-11-17 | Service Extensions authorization ext_authz gRPC API support |  | Authorization extensions now support the ext_authz Envoy gRPC API in addition to ext_proc, enabling broader integration with authorization ecosystems. |
| 2025-11-13 | Edge extensions for Global External Application Load Balancers |  | Edge extensions allow manipulation of request headers early in the processing lifecycle of global external Application Load Balancers to influence caching and routing decisions. |
| 2025-11-13 | Route and traffic extensions for regional external and internal Application Load Balancers |  | Route and traffic extensions add plugin-based extension support for regional external and internal Application Load Balancers. |
| 2025-11-05 | Cloud Load Balancing callouts full-duplex streaming |  | Cloud Load Balancing callouts now support full-duplex streaming. |
| 2025-10-28 | Cloud Load Balancing authorization extensions with custom authorization engines |  | Cloud Load Balancing authorization extensions enable authorization policies to use custom authorization engines and are generally available. |
| 2025-09-15 | Service Extensions traffic extension integration with Model Armor |  | Service Extensions supports configuring traffic extensions to call the Model Armor service on supported Application Load Balancers for AI workload protection. |
| 2025-07-24 | Service Extensions Wasm plugin uploads to Artifact Registry generic repositories |  | Service Extensions allows uploading Wasm plugin code to Artifact Registry using generic format repositories in addition to Docker repositories. |
| 2025-07-01 | Cloud Load Balancing plugins |  | Service Extensions now supports WebAssembly (Wasm) plugins in a fully managed serverless model, allowing execution directly in the data path of most Cloud Load Balancing application load balancers. |
| 2025-06-23 | Edge extensions |  | Service Extensions now supports edge extensions to modify request headers early in the request lifecycle for global external Application Load Balancers to influence caching and routing behavior. |
| 2025-04-09 | GKE Gateway extensions |  | GKE Gateway now supports using extensions to insert custom logic into the load balancing processing path. |
| 2025-04-09 | Model Armor integration with Service Extensions |  | Model Armor can be configured with Service Extensions to protect AI workloads on supported Application Load Balancers. |
| 2025-02-12 | Service Extensions Go-compiled WebAssembly plugin support |  | Service Extensions plugins can now be authored as WebAssembly modules compiled from Go, in addition to Rust and C++. |
| 2024-10-30 | Service Extensions WebAssembly plugins for Cloud Load Balancing |  | Service Extensions introduces managed serverless WebAssembly plugins that can be inserted directly into the data path of most Cloud Load Balancing application load balancers in Preview. |
| 2024-09-16 | Authorization extensions for Cloud Load Balancing custom authorization engines |  | Authorization extensions now enable configuring Cloud Load Balancing authorization policies to use custom authorization engines. |
| 2024-09-16 | Service Extensions support for Cloud Run backends via serverless NEGs |  | Service Extensions can now be hosted on backend services that use serverless network endpoint groups pointing to Cloud Run services. |
| 2023-10-17 | Cloud Load Balancing callouts |  | Cloud Load Balancing callouts let load balancers forward traffic through gRPC to user-managed or partner-hosted applications for inline policy enforcement, traffic manipulation, security screening, or custom logging before continuing processing. |

Source file slug: `service-extensions.md`


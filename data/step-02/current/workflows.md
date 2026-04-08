# Workflows

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 66
Unique features: 64

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-03-28 | Kubernetes API connector |  | This connector lets Workflows interact with Kubernetes objects in a Google Kubernetes Engine cluster. |
| 2025-02-28 | Resource tags |  | Workflows supports creating and managing tags to group workflows and other resources for reporting, auditing, and access control. |
| 2025-02-06 | Custom organization policy constraints |  | Workflows supports creating custom organization policy constraints for governance control. |
| 2024-10-28 | compute_checksum function |  | This standard library function computes checksums using common hashing algorithms. |
| 2024-10-28 | compute_hmac function |  | This standard library function computes HMAC values using common hashing algorithms. |
| 2024-09-30 | math.floor function |  | This standard library function returns the largest integer less than or equal to a given number. |
| 2024-09-03 | Execution backlogging |  | Execution backlogging automatically runs queued executions when concurrency quota becomes available. |
| 2024-06-17 | Vertex AI API connector |  | This connector lets Workflows access Vertex AI models. |
| 2024-05-31 | AI Platform Training and Prediction connector |  | This connector integrates Workflows with AI Platform Training and Prediction. |
| 2024-05-31 | Application Integration connector |  | This connector integrates Workflows with Application Integration. |
| 2024-05-31 | Batch API connector |  | This connector integrates Workflows with the Batch API. |
| 2024-05-31 | BigQuery Data Transfer connector |  | This connector integrates Workflows with BigQuery Data Transfer. |
| 2024-05-31 | Cloud Resource Manager connector |  | This connector integrates Workflows with Cloud Resource Manager. |
| 2024-05-31 | Google Forms connector |  | This connector integrates Workflows with Google Forms. |
| 2024-05-31 | Google Sheets connector |  | This connector integrates Workflows with Google Sheets. |
| 2024-05-31 | Transcoder API connector |  | This connector integrates Workflows with the Transcoder API. |
| 2024-01-11 | Deployment-time environment variables |  | Workflows supports defining environment variables at deployment time. |
| 2024-01-11 | VPC Service Controls-compliant private endpoint invocation |  | Workflows can invoke private endpoints that comply with VPC Service Controls. |
| 2023-12-15 | Execution step history |  | Workflows can display the history of an execution as a list of step entries. |
| 2023-06-30 | map.merge function |  | This standard library function copies one map and adds items from a second map. |
| 2023-06-30 | map.merge_nested function |  | This standard library function recursively adds items from one map to a copy of another map. |
| 2023-06-30 | uuid.generate function |  | This standard library function returns a random universally unique identifier. |
| 2023-06-26 | Customer-Managed Encryption Keys |  | Workflows supports Customer-Managed Encryption Keys for encryption control. |
| 2023-06-15 | Cloud Asset Inventory integration |  | Workflows resources are supported in Cloud Asset Inventory. |
| 2023-05-01 | Service agent quota and billing attribution |  | The Cloud Workflows service agent can use serviceusage.services.use so API calls consume quota and apply billing to the correct project. |
| 2023-04-14 | Workflows JSON schema |  | The Workflows JSON schema provides IDE syntax support when authoring workflows. |
| 2023-03-21 | Eventarc triggers |  | Workflows supports Eventarc triggers to start workflow executions from events, including Cloud Console trigger creation support and triggering from within a VPC Service Controls perimeter. |
| 2023-03-02 | Parallel step concurrency limits |  | Workflows can limit the maximum number of concurrent branches or iterations in a parallel step. |
| 2023-01-10 | get_type function |  | The get_type function returns a string indicating an argument's data type. |
| 2022-12-15 | Independent source and details editing in Cloud Console |  | The Cloud Console lets users update a workflow's source and details independently using separate Source and Details tabs. |
| 2022-12-09 | list.prepend function |  | The list.prepend function creates a copy of a list with a new element added at the beginning. |
| 2022-10-05 | Parallel steps |  | Workflows supports parallel steps to run branches concurrently within a workflow. |
| 2022-09-13 | Execution current or final step in results |  | Workflow execution results include the current or final step of the execution. |
| 2022-08-29 | Cross-project service account deployment |  | The Google Cloud console and Google Cloud CLI can deploy a workflow using a cross-project service account. |
| 2022-08-05 | skip_polling connector option |  | The skip_polling option lets connectors execute asynchronously without waiting for the operation to complete. |
| 2022-08-02 | text.url_decode function |  | The text.url_decode function converts plus signs and percent-escaped characters to UTF-8 text. |
| 2022-08-02 | text.url_encode function |  | The text.url_encode function returns a string with reserved characters, including spaces, percent-encoded. |
| 2022-08-02 | text.url_encode_plus function |  | The text.url_encode_plus function returns a string with reserved characters percent-encoded and spaces replaced by plus signs. |
| 2022-06-21 | Invocation of IAP-enabled private endpoints |  | Workflows can invoke Identity-Aware Proxy-enabled private endpoints, including on-premises, Compute Engine, GKE, and other Google Cloud endpoints. |
| 2022-05-12 | Execution status field |  | A status field tracks the current steps and progress of a workflow execution. |
| 2022-05-12 | Expression default function |  | The default function adds fallback value support within Workflows expressions. |
| 2022-05-12 | Expression if function |  | The if function adds conditional evaluation support within Workflows expressions. |
| 2022-05-12 | map.get function |  | The map.get function performs safe map key lookups and returns null when a key is missing. |
| 2022-04-21 | Call logging |  | Call logging records workflow call activity for observability and troubleshooting. |
| 2022-02-18 | List key existence check |  | Workflows supports checking whether a key exists in a list. |
| 2022-01-24 | Callback endpoints |  | Callback endpoints provide workflow-accessible endpoints for receiving external calls during execution. |
| 2022-01-05 | Invocation of internal-ingress Cloud Functions and Cloud Run |  | Workflows can invoke Cloud Functions and Cloud Run services that restrict ingress to internal traffic. |
| 2021-12-10 | Dynamic keys |  | Dynamic keys let workflows use computed keys in supported data structures and expressions. |
| 2021-12-06 | Service Level Agreement |  | Workflows has a published Service Level Agreement defining service availability commitments. |
| 2021-11-19 | Workflow scheduling in Cloud Console |  | The Workflows page in the Cloud Console supports scheduling workflows. |
| 2021-11-17 | sys.sleep_until function |  | The sys.sleep_until function suspends workflow execution until a specified time. |
| 2021-11-17 | time.format function |  | The time.format function formats timestamps into human-readable strings. |
| 2021-11-17 | time.parse function |  | The time.parse function parses ISO 8601-compatible strings into timestamps. |
| 2021-10-28 | GOOGLE_CLOUD_SERVICE_ACCOUNT_NAME environment variable |  | The GOOGLE_CLOUD_SERVICE_ACCOUNT_NAME built-in environment variable exposes the service account name for a workflow execution. |
| 2021-09-13 | Connectors |  | Connectors provide built-in integrations that let workflows call supported Google Cloud services. |
| 2021-09-02 | Iteration over sequences and collections |  | Workflows supports iterating over sequences of numbers and collections of data. |
| 2021-07-28 | list.concat function |  | The list.concat function supports adding an element to a list. |
| 2021-07-23 | Platform logs in Cloud Logging |  | Platform logs for Workflows are supported in Cloud Logging. |
| 2021-06-25 | List and map value update syntax |  | Workflows supports syntax for updating list values and map values. |
| 2021-06-07 | Text module string processing functions |  | The Workflows standard library text module provides string processing functions. |
| 2021-05-31 | Iteration syntax visualization |  | The Google Cloud Console provides visualization support while editing Workflows iteration syntax. |
| 2021-05-10 | HIPAA compliance |  | Workflows meets HIPAA compliance requirements. |
| 2020-12-10 | Workflow visualization |  | The Google Cloud Console displays a visualization of a workflow during editing. |
| 2020-12-08 | Regional availability |  | Workflows is available in the asia-southeast1 and europe-west4 regions. |

Source file slug: `workflows.md`


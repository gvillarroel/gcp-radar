# Access Context Manager

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 18
Unique features: 23

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-03-21 | Access Context Manager custom organization policies |  | Access Context Manager now supports custom organization policies for defining access constraints. |
| 2024-10-03 | Context-aware app allowlist access bindings |  | Access bindings can now map specific applications to access levels so context-aware access can be scoped per application. |
| 2024-06-28 | Internal IP ranges in basic access levels |  | Basic access levels now support internal IP addresses when specifying allowed IP address ranges. |
| 2023-02-17 | Individual VPC network membership in VPC Service Controls perimeters |  | You can add individual VPC networks as members of a VPC Service Controls perimeter instead of requiring the entire host project; Access Context Manager preview support allows adding individual VPC networks as members of a perimeter instead of an entire host project. |
| 2023-02-17 | Ingress rules for individual VPC networks |  | VPC Service Controls perimeters now support ingress rules that authorize access for individual VPC networks; VPC Service Controls preview adds ingress rules that authorize specific individual VPC networks to access a perimeter. |
| 2022-03-31 | Scoped policies for VPC Service Controls administration |  | Scoped policies enable delegation of VPC Service Controls perimeter and access-level administration to folder- and project-level administrators. |
| 2021-04-22 | Egress rules for VPC Service Controls |  | VPC Service Controls now support egress rules for controlling outbound service access. |
| 2021-04-22 | Ingress rules for VPC Service Controls |  | VPC Service Controls now support ingress rules for access control. |
| 2020-10-22 | Mobile device access-level attributes in Access Context Manager |  | Access levels now evaluate additional mobile request attributes, including Storage encryption status, admin approval requirement, and corp-owned device requirement. |
| 2020-06-30 | Service perimeter dry run mode |  | Service perimeters now support dry run mode, allowing perimeter changes to be tested before enforcement. |
| 2020-06-11 | Access Context Manager Bulk API |  | The Access Context Manager Bulk API is generally available for replacing all access levels in an organization in a single operation; The Access Context Manager Bulk API is available in beta for bulk replacement of organizational access levels. |
| 2020-06-01 | Custom access levels with Common Expression Language |  | Access Context Manager supports custom access levels using Common Expression Language across APIs, gcloud, and the Cloud Console advanced mode. |
| 2020-02-25 | Access Context Manager mobile access level support |  | Access Context Manager added beta support for creating access levels that target iOS and Android devices. |
| 2020-02-25 | Access Context Manager mobile OS policy attribute |  | Access Context Manager added support for the OS policy device attribute in access levels for iOS and Android devices. |
| 2020-02-25 | Access Context Manager mobile require screen lock attribute |  | Access Context Manager added support for the Require screen lock device attribute for iOS and Android access levels. |
| 2020-01-06 | Access Context Manager v1beta API | July 2020 | The Access Context Manager v1beta API was deprecated; deprecated on July 2020. |
| 2019-08-05 | Access Context Manager API v1alpha | Q3 2019 | The Access Context Manager API v1alpha was deprecated; deprecated on Q3 2019. |
| 2019-03-19 | Access Context Manager Require admin approval attribute |  | The Require admin approval device-policy access-level attribute became available in Access Context Manager. |
| 2019-03-19 | Access Context Manager require corp-owned device attribute |  | The Require corp owned device device-policy access-level attribute became available in Access Context Manager. |
| 2019-03-19 | Access Context Manager require verified Chrome OS attribute |  | The Require verified Chrome OS device-policy access-level attribute became available in Access Context Manager. |
| 2019-03-19 | Access level Regions attribute |  | The Regions access-level attribute became available in Access Context Manager. |
| 2019-03-08 | Access Context Manager general availability |  | Access Context Manager reached general availability. |
| 2018-06-01 | Access Context Manager closed beta launch |  | Access Context Manager launched in closed beta. |

Source file slug: `access-context-manager.md`


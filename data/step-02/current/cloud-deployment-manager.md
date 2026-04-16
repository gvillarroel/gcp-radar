# Cloud Deployment Manager

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 49
Unique features: 53

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2020-04-15 | Cloud Scheduler type provider support |  | Deployment Manager supports managing Cloud Scheduler jobs through the gcp-types/cloudscheduler-v1 type provider. |
| 2019-10-02 | External VPN Gateway resource type support |  | Deployment Manager supports creating Compute Engine ExternalVpnGateway resources with the gcp-types/compute-v1:externalVpnGateways type. |
| 2019-10-02 | VPN Gateway resource type support |  | Deployment Manager supports creating Compute Engine VpnGateway resources with the gcp-types/compute-v1:vpnGateways type. |
| 2019-07-01 | IAM mappings for projects and organizations |  | Deployment Manager can create IAM mappings for projects and organizations through the gcp-types/cloudresourcemanager-v1 type provider. |
| 2019-06-03 | Cloud Pub/Sub label updates |  | Deployment Manager can update labels on Cloud Pub/Sub resources. |
| 2019-02-27 | Private Catalog template integration |  | Deployment Manager templates can be used in Private Catalog. |
| 2019-02-27 | Redis v1 API type provider support |  | Deployment Manager supports the Redis v1 API through the gcp-types/redis-v1 type provider. |
| 2018-11-21 | Access Context Manager v1beta type provider support |  | Deployment Manager supports Access Context Manager v1beta through the gcp-types/accesscontextmanager-v1beta type provider. |
| 2018-11-21 | Cloud DNS RecordSets type provider support |  | Deployment Manager supports Cloud DNS RecordSets through the gcp-types/dns-v1:resourceRecordSets type provider. |
| 2018-11-21 | username template environment variable |  | Deployment Manager templates can access a username environment variable in Python and Jinja templates. |
| 2018-09-12 | Project folder resource support |  | Deployment Manager supports creating and acquiring project folders through the gcp-types/cloudresourcemanager-v2:folders type provider. |
| 2018-08-07 | Glob import support |  | Deployment Manager supports importing templates with wildcard paths in gcloud. |
| 2018-07-03 | CREATE resource creation policy |  | Deployment Manager supports a CREATE policy that fails a deployment if a new resource already exists. |
| 2018-04-24 | Composite type deployment creation in gcloud |  | The gcloud tool can create deployments directly from composite types. |
| 2018-04-24 | gcloud --template deployment creation |  | The gcloud tool provides a --template flag for creating deployments from templates. |
| 2017-07-24 | Deployment labels |  | Deployment Manager supports labels on deployments. |
| 2017-04-20 | Runtime Configurator returnValues query parameter |  | Runtime Configurator supports a returnValues query parameter on variables().list to return variable values when permitted. |
| 2017-04-12 | project_number environment variable |  | Deployment Manager templates can access a project_number environment variable. |
| 2017-03-27 | Type Registry |  | Type Registry lets users add composite types and third-party APIs as type providers. |
| 2017-02-23 | Runtime Configurator gcloud beta component |  | Runtime Configurator gcloud commands are available through the gcloud beta component. |
| 2017-02-23 | runtime-config gcloud command group |  | Runtime Configurator gcloud commands are grouped under the runtime-config command namespace. |
| 2017-01-27 | Plaintext variable values in gcloud |  | The gcloud tool supports creating Runtime Configurator variables with plaintext values. |
| 2017-01-11 | Key:value template property syntax |  | The gcloud --properties flag supports key:value pairs for specifying template properties. |
| 2016-11-01 | Plaintext variable values in Runtime Configurator API |  | The Runtime Configurator API supports plaintext variable values when creating a variable. |
| 2016-11-01 | Runtime Configurator requestId support |  | The Runtime Configurator API supports an optional requestId field on create requests to ensure uniqueness. |
| 2016-10-06 | IAM policy configuration support |  | Deployment Manager configurations can specify IAM policies. |
| 2016-08-26 | Predefined Deployment Manager IAM roles |  | Deployment Manager provides predefined IAM roles. |
| 2016-08-25 | Runtime Configurator data-based quota model |  | Runtime Configurator quotas are based on data volume per user instead of resource count, with updated API request quotas. |
| 2016-08-25 | Unlimited Runtime Configurator variable value size |  | Runtime Configurator no longer enforces a 4 KB limit on variable values. |
| 2016-05-10 | External template hosting |  | Deployment Manager supports hosting templates on Google Cloud Storage or other publicly accessible URLs. |
| 2016-02-29 | Outputs |  | Deployment Manager supports outputs to expose key configuration properties for reuse. |
| 2015-11-13 | Schemas |  | Deployment Manager supports schemas to define rules for using templates. |
| 2015-11-04 | cluster.v1.cluster resource type |  | Deployment Manager supports the cluster.v1.cluster resource type. |
| 2015-11-04 | cluster.v1beta1.cluster resource type | 2015-11-04 | Deployment Manager removed support for the cluster.v1beta1.cluster resource type; deprecated on 2015-11-04. |
| 2015-07-22 | --update-policy flag | 2015-07-22 | Deployment Manager removed the --update-policy flag because PATCH is no longer supported; deprecated on 2015-07-22. |
| 2015-07-22 | cancel-preview subcommand |  | The gcloud tool provides a cancel-preview subcommand for deployment previews. |
| 2015-07-22 | cancelPreview API method |  | The Deployment Manager API provides a custom cancelPreview method. |
| 2015-07-22 | Deployment fingerprint requirements |  | The Deployment Manager API requires fingerprints when updating, canceling, or stopping a deployment. |
| 2015-07-22 | Deployment Manager v2 API |  | Deployment Manager introduced the v2 API as its generally available API version. |
| 2015-07-22 | Deployment preview query parameter |  | The Deployment Manager API supports a boolean preview query parameter for previewing deployments. |
| 2015-07-22 | Deployment resource intent and state properties | 2015-07-22 | Deployment Manager removed the intent and state properties from Deployment resources; deprecated on 2015-07-22. |
| 2015-07-22 | Manifest imports section |  | Deployment Manager manifests include an explicit imports section that lists templates. |
| 2015-07-22 | PATCH update policy | 2015-07-22 | Deployment Manager no longer supports PATCH as an update policy in the API; deprecated on 2015-07-22. |
| 2015-07-22 | stop API method |  | The Deployment Manager API provides a custom stop method. |
| 2015-07-22 | stop subcommand |  | The gcloud tool provides a stop subcommand for stopping deployments. |
| 2015-07-13 | Unlimited delete and read requests |  | Deployment Manager quotas allow unlimited delete and read requests. |
| 2015-06-18 | updateTime field |  | Deployment Manager resources include an updateTime field. |
| 2015-04-30 | Deployment Manager v2beta2 API |  | Deployment Manager introduced the v2beta2 API. |
| 2015-04-30 | Deployment updates |  | Deployment Manager supports updating deployments in the v2beta2 API. |
| 2015-04-30 | Manifest layouts |  | Deployment Manager supports manifest layouts in the v2beta2 API. |
| 2015-04-30 | Server-side expansion |  | Deployment Manager supports server-side expansion of configurations. |
| 2015-02-06 | External references | 2015-02-20 | Deployment Manager disabled support for external references due to a known bug; Deployment Manager supports external references; deprecated on 2015-02-20. |
| 2015-01-21 | container.v1beta1.cluster resource type |  | Deployment Manager supports the container.v1beta1.cluster resource type for declaring and deploying Google Container Engine clusters. |

Source file slug: `cloud-deployment-manager.md`


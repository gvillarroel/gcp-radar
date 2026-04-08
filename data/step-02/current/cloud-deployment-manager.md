# Cloud Deployment Manager

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 49
Unique features: 55

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2020-04-15 | Deployment Manager Cloud Scheduler type support |  | Deployment Manager added support for the Cloud Scheduler resource type `gcp-types/cloudscheduler-v1:projects.locations.jobs`. |
| 2019-10-02 | Deployment Manager ExternalVpnGateway type support |  | Deployment Manager added support for the `gcp-types/compute-v1:externalVpnGateways` type to create Compute Engine ExternalVpnGateway resources. |
| 2019-10-02 | Deployment Manager VpnGateway type support |  | Deployment Manager added support for the `gcp-types/compute-v1:vpnGateways` type to create Compute Engine VpnGateway resources. |
| 2019-07-01 | Cloud Resource Manager IAM mappings in Deployment Manager |  | Deployment Manager added a Cloud Resource Manager v1 type provider to create IAM mappings for projects and organizations. |
| 2019-06-03 | Cloud Pub/Sub label updates in Deployment Manager |  | Deployment Manager gained the ability to update labels for Cloud Pub/Sub resources. |
| 2019-02-27 | Deployment Manager Redis API type support |  | Deployment Manager added support for the Redis v1 API via the `gcp-types/redis-v1` type provider. |
| 2019-02-27 | Private Catalog support for Deployment Manager templates |  | Deployment Manager templates became usable within Google Cloud Private Catalog. |
| 2018-11-21 | Deployment Manager Access Context Manager support |  | Deployment Manager added support for Access Context Manager v1beta via the `gcp-types/accesscontextmanager-v1beta` type provider. |
| 2018-11-21 | Deployment Manager Cloud DNS RecordSets support |  | Deployment Manager added support for Cloud DNS v1 RecordSets using the `gcp-types/dns-v1:resourceRecordSets` type provider. |
| 2018-11-21 | Deployment Manager template username environment variable |  | Deployment Manager added a `username` template environment variable available in Python and Jinja templates. |
| 2018-09-12 | Deployment Manager Cloud Resource Manager folder management support |  | Deployment Manager expanded support for creating and acquiring project folders using the `gcp-types/cloudresourcemanager-v2:folders` type provider. |
| 2018-08-07 | Glob import support in gcloud Deployment Manager templates |  | Deployment Manager gained glob pattern support in gcloud for importing templates using wildcard template paths. |
| 2018-07-03 | Deployment Manager CREATE resource policy |  | Added a CREATE policy option for new deployment resources so creation fails when the resource already exists. |
| 2018-04-24 | Deployment Manager appengine.v1beta4 resource type support | 2018-04-24 | Support for the appengine.v1beta4 resource type in Deployment Manager was removed; deprecated on 2018-04-24. |
| 2018-04-24 | Deployment Manager appengine.v1beta5 resource type support | 2018-04-24 | Support for the appengine.v1beta5 resource type in Deployment Manager was removed; deprecated on 2018-04-24. |
| 2018-04-24 | gcloud Deployment Manager --template flag |  | Added a --template flag to support creating deployments from templates. |
| 2018-04-24 | gcloud Deployment Manager composite type deployments |  | Updated gcloud so deployments can be created directly using composite types. |
| 2017-07-24 | Deployment Manager deployment labels |  | Added support for labels on Deployment Manager deployments. |
| 2017-04-20 | Runtime Configurator variables().list returnValues parameter |  | Added the returnValues query parameter to variables().list to return variable values for callers with runtimeconfig.variables.get permission. |
| 2017-04-12 | project_number deployment environment variable |  | Added a new project_number environment variable. |
| 2017-03-27 | Deployment Manager Type Registry |  | Introduced the Type Registry feature, allowing users to add composite types and third-party APIs as type providers. |
| 2017-02-23 | Runtime Configurator gcloud beta component |  | Moved Runtime Configurator gcloud commands to the gcloud beta component. |
| 2017-02-23 | Runtime Configurator gcloud command group namespace |  | Updated Runtime Configurator gcloud commands so the command group is now under the runtime-config namespace. |
| 2017-01-27 | gcloud plaintext variable values creation |  | Added gcloud command-line support for creating plaintext variable values. |
| 2017-01-11 | gcloud --properties key:value syntax |  | Updated gcloud --properties flag syntax to accept key:value pairs while keeping key=value supported. |
| 2016-11-20 | Deployment Manager cross-project image configuration |  | Added documentation for configuring Deployment Manager to use images from another project. |
| 2016-11-01 | Runtime Configurator API plaintext variable creation |  | Added API support for creating variables with plaintext values in Runtime Configurator. |
| 2016-11-01 | Runtime Configurator create request requestId |  | Added an optional requestId field to Runtime Configurator create() requests for request uniqueness. |
| 2016-10-06 | IAM policy support in Deployment Manager configurations |  | Deployment Manager gained the ability to specify IAM policies directly within deployment configurations. |
| 2016-08-26 | Predefined Deployment Manager IAM roles |  | Deployment Manager added support for using predefined IAM roles in the beta release. |
| 2016-08-25 | Runtime Configurator quota model and request quotas |  | Runtime Configurator quotas were changed to be based on data per user with updated default values, and API request quotas were updated. |
| 2016-08-25 | Runtime Configurator variable value size limits |  | Runtime Configurator removed the 4 KB limit on variable values. |
| 2016-05-10 | External template hosting |  | Deployment Manager added support for hosting templates from Google Cloud Storage or other publicly accessible URLs. |
| 2016-02-29 | Deployment outputs |  | Deployment Manager introduced outputs so configuration properties can be exposed for downstream use. |
| 2015-11-13 | Deployment template schemas |  | Deployment Manager added schema support to define validation rules for using templates. |
| 2015-11-04 | cluster.v1.cluster resource type |  | Deployment Manager added support for the new cluster.v1.cluster resource type. |
| 2015-11-04 | cluster.v1beta1.cluster resource type | 2015-11-04 | Support for the cluster.v1beta1.cluster resource type in Deployment Manager was removed; deprecated on 2015-11-04. |
| 2015-07-22 | Cloud Deployment Manager v2 API general availability |  | Cloud Deployment Manager was made generally available with the v2 API for all users and projects. |
| 2015-07-22 | Deployment intent and state properties | 2015-07-22 | The intent and state properties were removed from Deployment resources; deprecated on 2015-07-22. |
| 2015-07-22 | Deployment Manager cancel-preview and stop subcommands |  | The deployments cancel subcommand was replaced by the new cancel-preview and stop command subcommands. |
| 2015-07-22 | Deployment Manager deployment fingerprint requirements |  | Deployment Manager now requires deployment fingerprints when updating, canceling, or stopping a deployment. |
| 2015-07-22 | Deployment Manager manifest imports section |  | The Deployment Manager manifest structure was updated to show templates explicitly in a dedicated imports section. |
| 2015-07-22 | Deployment Manager preview query parameter |  | A new boolean preview query parameter was added to the Deployment Manager API for previewing deployments. |
| 2015-07-22 | Deployment Manager stop and cancelPreview API methods |  | New stop and cancelPreview custom methods were added to the Deployment Manager API. |
| 2015-07-22 | PATCH deployment update policy | 2015-07-22 | The PATCH update policy option was removed from the Deployment Manager API; deprecated on 2015-07-22. |
| 2015-07-22 | update-policy command-line flag | 2015-07-22 | The --update-policy flag was removed because PATCH update operations were no longer supported; deprecated on 2015-07-22. |
| 2015-07-13 | Deployment Manager unlimited delete and read quotas |  | Quota limits were updated so delete and read requests in Deployment Manager are now unlimited. |
| 2015-06-18 | Deployment Manager updateTime field |  | A new updateTime field was added to Deployment Manager. |
| 2015-04-30 | Cloud Deployment Manager beta launch |  | Cloud Deployment Manager was launched in Beta. |
| 2015-04-30 | Cloud Deployment Manager v2beta2 manifest layouts |  | Deployment Manager v2beta2 included new manifest layout capabilities. |
| 2015-04-30 | Cloud Deployment Manager v2beta2 server-side expansion |  | Deployment Manager v2beta2 introduced server-side expansion capabilities. |
| 2015-04-30 | Cloud Deployment Manager v2beta2 update capabilities |  | Deployment Manager v2beta2 added update capabilities for deployments. |
| 2015-02-06 | Deployment Manager external references | 2015-02-20 | Support for external references in Deployment Manager was disabled; Support for external references was added to Deployment Manager; deprecated on 2015-02-20. |
| 2015-01-21 | Cloud Deployment Manager HTTP load-balanced deployment tutorial |  | Added a new tutorial for creating HTTP load-balanced deployments in Cloud Deployment Manager. |
| 2015-01-21 | Deployment Manager container.v1beta1.cluster resource type |  | Deployment Manager added support for the Google Container Engine cluster type container.v1beta1.cluster for declaring and deploying clusters. |

Source file slug: `cloud-deployment-manager.md`


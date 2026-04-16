---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.242Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "SQLInstance insightsConfig"
feature_slug: "sqlinstance-insightsconfig"
latest_feature_date: "2021-03-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus"
keywords:
  - "insightsconfig"
  - "sqlinstance"
  - "supports"
  - "field"
---

# SQLInstance insightsConfig

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports the insightsConfig field on SQLInstance.

## Extended Definition

Config Connector supports the insightsConfig field on SQLInstance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance)
- [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects)
- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)

## Supporting Pages

### Monitoring Config Connector with Prometheus \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

### SQLInstance | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance)
- Source ID: `feature-recovery-http`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Property Value Google Cloud Service Name Cloud SQL Google Cloud Service Documentation /sql/docs/ Google Cloud REST Resource Name v1beta4.instance Google Cloud REST Resource Documentation /sql/docs/postgres/admin-api/v1beta4/instances Config Connector Resource Short Names gcpsqlinstance gcpsqlinstances sqlinstance Config Connector Service Name sqladmin.googleapis.com Config Connector Resource Fully Qualified Name sqlinstances.sql.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Annotations Fields cnrm.cloud.google.com/project-id Spec Schema cloneSource : binLogCoordinates : binLogFileName : string binLogPosition : integer databaseNames : - string pointInTime : string sqlInstanceRef : external : string name : string namespace : string databaseVersion : string encryptionKMSCryptoKeyRef : external : string name : string namespace : string instanceType : string maintenanceVersion : string masterInstanceRef : external : string name : string namespace : string region : string replicaConfiguration : caCertificate : string clientCertificate : string clientKey : string connectRetryInterval : integer dumpFilePath : string failoverTarget : boolean masterHeartbeatPeriod : integer password : value : string valueFrom : secretKeyRef : key : string name : string sslCipher : string username : string verifyServerCertificate : boolean replicationCluster : failoverDrReplicaRef : external : string name : string namespace : string resourceID : string rootPassword : value : string valueFrom : secretKeyRef : key : string name : string settings : activationPolicy : string activeDirectoryConfig : domain : string advancedMachineFeatures : threadsPerCore : integer authorizedGaeApplications : - string availabilityType : string backupConfiguration : backupRetentionSettings : retainedBackups : integer retentionUnit : string binaryLogEnabled : boolean enabled : boolean location : string pointInTimeRecoveryEnabled : boolean startTime : string transactionLogRetentionDays : integer collation : string connectorEnforcement : string crashSafeReplication : boolean dataCacheConfig : dataCacheEnabled : boolean databaseFlags : - name : string value : string deletionProtectionEnabled : boolean denyMaintenancePeriod : endDate : string startDate : string time : string diskAutoresize : boolean diskAutoresizeLimit : integer diskSize : integer diskType : string edition : string insightsConfig : queryInsightsEnabled : boolean queryPlansPerMinute : integer queryStringLength : integer recordApplicationTags : boolean recordClientAddress : boolean ipConfiguration : allocatedIpRange : string authorizedNetworks : - expirationTime : string name : string value : string enablePrivatePathForGoogleCloudServices : boolean ipv4Enabled : boolean privateNetworkRef : external : string name : string namespace : string pscConfig : - allowedConsumerProjects : - string pscEnabled : boolean requireSsl : boolean sslMode : string locationPreference : followGaeApplication : string secondaryZone : string zone : string maintenanceWindow : day : integer hour : integer updateTrack : string passwordValidationPolicy : complexity : string disallowUsernameSubstring : boolean enablePasswordPolicy : boolean minLength : integer passwordChangeInterval : string reuseInterval : integer pricingPlan : string replicationType : string sqlServerAuditConfig : bucketRef : external : string name : string namespace : string retentionInterval : string uploadInterval : string tier : string timeZone : string Fields cloneSource Optional object Create this database as a clone of a source instance.
- The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format. * Field is required when parent field is specified Status Schema availableMaintenanceVersions : - string conditions : - lastTransitionTime : string message : string reason : string status : string type : string connectionName : string dnsName : string firstIpAddress : string instanceType : string ipAddress : - ipAddress : string timeToRetire : string type : string observedGeneration : integer observedState : replicationCluster : drReplica : boolean psaWriteEndpoint : string privateIpAddress : string pscServiceAttachmentLink : string publicIpAddress : string selfLink : string serverCaCert : cert : string commonName : string createTime : string expirationTime : string sha1Fingerprint : string serviceAccountEmailAddress : string Fields availableMaintenanceVersions list (string) Available Maintenance versions. availableMaintenanceVersions[] string conditions list (object) Conditions represent the latest available observations of the SQLInstance's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- Clone all databases if empty. cloneSource.databaseNames[] Optional string cloneSource.pointInTime Optional string Timestamp, if specified, identifies the time to which the source instance is cloned. cloneSource.sqlInstanceRef Optional object The source SQLInstance to clone cloneSource.sqlInstanceRef.external Optional string The SQLInstance selfLink, when not managed by Config Connector. cloneSource.sqlInstanceRef.name Optional string The `name` field of a `SQLInstance` resource. cloneSource.sqlInstanceRef.namespace Optional string The `namespace` field of a `SQLInstance` resource. databaseVersion Optional string The MySQL, PostgreSQL or SQL Server (beta) version to use.
- The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'. maintenanceVersion Optional string Maintenance version. masterInstanceRef Optional object masterInstanceRef.external Optional string The SQLInstance selfLink, when not managed by Config Connector. masterInstanceRef.name Optional string The `name` field of a `SQLInstance` resource. masterInstanceRef.namespace Optional string The `namespace` field of a `SQLInstance` resource. region Optional string Immutable.

### "Namespaces and Google Cloud projects \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects)
- Source ID: `site-docs-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Then, create a Config Connector SQLInstance with a name of mySQL in your namespace.
- Using Namespaces with projects, folders, and organizations Google Cloud supports organizing resources at the Project, Folder, and Organization levels.


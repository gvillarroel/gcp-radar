---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.199Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Compute instance queue count"
feature_slug: "compute-instance-queue-count"
latest_feature_date: "2022-01-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/resources"
keywords:
  - "queue"
  - "compute"
  - "configuring"
  - "instance"
  - "count"
  - "supports"
---

# Compute instance queue count

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports configuring queue count on ComputeInstance and ComputeInstanceTemplate resources.

## Extended Definition

Config Connector supports configuring queue count on ComputeInstance and ComputeInstanceTemplate resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)

## Supporting Pages

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

### Resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

### AlloyDBInstance \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBInstance metadata : name : alloydbinstance-dep-read spec : clusterRef : name : alloydbinstance-dep-read instanceTypeRef : name : alloydbinstance-dep-read --- apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBInstance metadata : name : alloydbinstance-sample-read spec : clusterRef : name : alloydbinstance-dep-read instanceTypeRef : external : READ POOL databaseFlags : google columnar engine.enabled : "on" machineConfig : cpuCount : 2 readPoolConfig : nodeCount : 3 --- apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBCluster metadata : name : alloydbinstance-dep-read spec : location : asia-east2 networkConfig : networkRef : name : alloydbinstance-dep-read projectRef : external : ${PROJECT ID?} --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : alloydbinstance-dep-read spec : location : global addressType : INTERNAL networkRef : name : alloydbinstance-dep-read prefixLength : 16 purpose : VPC PEERING --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : name : alloydbinstance-dep-read --- apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1 kind : ServiceNetworkingConnection metadata : name : alloydbinstance-dep-read spec : networkRef : name : alloydbinstance-dep-read reservedPeeringRanges : - name : alloydbinstance-dep-read service : servicenetworking.googleapis.com Secondary Instance Copyright 2024 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBInstance metadata : name : alloydbinstance-sample-primary spec : clusterRef : name : alloydbinstance-dep-primary instanceTypeRef : name : alloydbinstance-dep-primary databaseFlags : enable google adaptive autovacuum : "off" password.enforce complexity : "on" machineConfig : cpuCount : 2 networkConfig : enablePublicIp : true enableOutboundPublicIp : true authorizedExternalNetworks : - cidrRange : 8.8.8.8/30 - cidrRange : 8.8.4.4/30 --- apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBCluster metadata : name : alloydbinstance-dep-primary spec : location : asia-east1 networkConfig : networkRef : name : alloydbinstance-dep-primary projectRef : external : ${PROJECT ID?} --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : alloydbinstance-dep-primary spec : location : global addressType : INTERNAL networkRef : name : alloydbinstance-dep-primary prefixLength : 16 purpose : VPC PEERING --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : name : alloydbinstance-dep-primary --- apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1 kind : ServiceNetworkingConnection metadata : name : alloydbinstance-dep-primary spec : networkRef : name : alloydbinstance-dep-primary reservedPeeringRanges : - external : alloydbinstance-dep-primary service : servicenetworking.googleapis.com Read Instance Copyright 2023 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBInstance metadata : name : alloydbinstance-sample-zonal spec : clusterRef : name : alloydbinstance-dep-zonal availabilityType : ZONAL instanceTypeRef : name : alloydbinstance-dep-zonal machineConfig : cpuCount : 2 --- apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBCluster metadata : name : alloydbinstance-dep-zonal spec : location : asia-northeast3 networkConfig : networkRef : name : alloydbinstance-dep-zonal projectRef : external : ${PROJECT ID?} --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : alloydbinstance-dep-zonal spec : location : global addressType : INTERNAL networkRef : name : alloydbinstance-dep-zonal prefixLength : 16 purpose : VPC PEERING --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : name : alloydbinstance-dep-zonal --- apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1 kind : ServiceNetworkingConnection metadata : name : alloydbinstance-dep-zonal spec : networkRef : name : alloydbinstance-dep-zonal reservedPeeringRanges : - external : alloydbinstance-dep-zonal service : servicenetworking.googleapis.com Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- See the License for the specific language governing permissions and limitations under the License. apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBInstance metadata : name : alloydbinstance-dep-secondary spec : clusterRef : name : alloydbinstance-dep1-secondary instanceTypeRef : name : alloydbinstance-dep1-secondary --- apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBInstance metadata : name : alloydbinstance-sample-secondary spec : clusterRef : name : alloydbinstance-dep2-secondary instanceTypeRef : name : alloydbinstance-dep2-secondary --- apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBCluster metadata : name : alloydbinstance-dep1-secondary spec : location : asia-northeast1 networkConfig : networkRef : name : alloydbinstance-dep-secondary projectRef : external : ${PROJECT ID?} initialUser : user : "postgres" password : value : "postgres" --- apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBCluster metadata : name : alloydbinstance-dep2-secondary spec : location : asia-northeast2 networkConfig : networkRef : name : alloydbinstance-dep-secondary projectRef : external : ${PROJECT ID?} clusterType : "SECONDARY" secondaryConfig : primaryClusterNameRef : name : alloydbinstance-dep1-secondary deletionPolicy : "FORCE" --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : alloydbinstance-dep-secondary spec : location : global addressType : INTERNAL networkRef : name : alloydbinstance-dep-secondary prefixLength : 16 purpose : VPC PEERING --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : name : alloydbinstance-dep-secondary --- apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1 kind : ServiceNetworkingConnection metadata : name : alloydbinstance-dep-secondary spec : networkRef : name : alloydbinstance-dep-secondary reservedPeeringRanges : - name : alloydbinstance-dep-secondary service : servicenetworking.googleapis.com Zonal Instance Copyright 2023 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.


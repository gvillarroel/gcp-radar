---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.055Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Controlplane V2 user cluster migration"
feature_slug: "controlplane-v2-user-cluster-migration"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features"
keywords:
  - "controlplane"
  - "v2"
  - "user"
  - "cluster"
  - "migration"
  - "can"
  - "migrated"
---

# Controlplane V2 user cluster migration

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

A user cluster can be migrated to Controlplane V2.

## Extended Definition

In Google Distributed Cloud for VMware, Controlplane V2 user cluster migration is the transition of a user cluster’s control plane from Kubeception (`enableControlplaneV2: false`) to Controlplane V2 (`enableControlplaneV2: true`). The migration planning documentation identifies Controlplane V2 as the recommended control plane for user clusters and indicates that migration solutions are available from version 1.30 onward.

## Evidence Summary

The cited migration planning guide provides both the recommended control-plane target and the explicit configuration options/flag values that define user-cluster migration to Controlplane V2, with version-based availability context.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)

## Supporting Pages

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-2`
- Final score: 176
- Re-rank relevance: STRONG
- Re-rank rationale: The page identifies Controlplane V2 as the recommended user cluster control plane option and includes upgrade/add support details versus Kubeception.

Evidence snippets:
- Before migration After migration LB nodes Extra Seesaw VMs (outside of cluster) In-cluster LB nodes with customer choices Client IP Preservation Can be achieved via externalTrafficPolicy: Local Can be achieved via DataplaneV2 DSR mode Service creation Manually specified Service IP Auto-assigned Service IP from address pool Migrate user clusters to Controlplane V2 and admin clusters to HA The recommended control plane for user clusters is Controlplane V2.
- The following tables show the support matrix for these features in admin and user clusters: Cluster type Outdated feature Add for new cluster Allow for cluster upgrade Migration to new feature Version 1.32 and higher Admin Non-HA No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A User Kubeception No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A Dataplane V1 No No N/A Version 1.30 and 1.31 Admin Non-HA No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes User Kubeception No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes Dataplane V1 No Yes Yes Version 1.29 Admin Non-HA No Yes Yes ( Preview ) Seesaw No Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) User Kubeception Yes Yes Yes ( Preview ) Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) Dataplane V1 Yes Yes No Version 1.28 Admin Non-HA No Yes No Seesaw No Yes Yes Integrated F5 Big IP Yes Yes No User Kubeception Yes Yes No Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes No Dataplane V1 Yes Yes No Key points : Starting with version 1.30, all migration solutions are available to migrate clusters to their recommended alternatives.
- You have the following options for each feature area: Feature area Recommended options Original options Container Network Interface (CNI) Dataplane V2 ( enableDataplaneV2: true ) Dataplane V1 (Calico) ( enableDataplaneV2: false ) Load balancer ManualLB (works with F5 Big IP agents) ( loadBalancer.kind: "ManualLB" ) MetalLB ( loadBalancer.kind: "MetalLB" ) integrated F5 Big IP 1 ( loadBalancer.kind: "F5BigIP" ) Seesaw ( loadBalancer.kind: "Seesaw" ) Admin cluster control plane High availability (HA) admin cluster ( adminMaster.replicas: 3 ) Non-HA admin cluster ( adminMaster.replicas: 1 ) User cluster control plane Controlplane V2 ( enableControlplaneV2: true ) Kubeception user cluster ( enableControlplaneV2: false ) 1 Integrated F5 BIG-IP refers to loadBalancer.kind: "F5BigIP" and related settings in the loadBalancer.f5BigIP section in your cluster configuration file.
- Before migration After migration Control Plane Kubernetes Node Objects Admin cluster Node User cluster Node Kubernetes Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster static pods (kube-system namespace) Other Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster Statefulsets/Deployments (kube-system namespace) Control Plane VIP Admin cluster Load Balancer Service keepalived + haproxy (user cluster static pods) Etcd Data Admin cluster Persistent Volume Data disk Control Plane Machine IP Management IPAM or DHCP IPAM Control Plane Network Admin cluster VLAN User cluster VLAN Migrate to an HA admin cluster Historically, the admin cluster could only run a single control-plane node, creating an inherent risk of a single point of failure.

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-3`
- Final score: 176
- Re-rank relevance: STRONG
- Re-rank rationale: The page lists Controlplane V2 as the recommended user-cluster control plane option and includes legacy-to-recommended migration information by release.

Evidence snippets:
- Before migration After migration LB nodes Extra Seesaw VMs (outside of cluster) In-cluster LB nodes with customer choices Client IP Preservation Can be achieved via externalTrafficPolicy: Local Can be achieved via DataplaneV2 DSR mode Service creation Manually specified Service IP Auto-assigned Service IP from address pool Migrate user clusters to Controlplane V2 and admin clusters to HA The recommended control plane for user clusters is Controlplane V2.
- The following tables show the support matrix for these features in admin and user clusters: Cluster type Outdated feature Add for new cluster Allow for cluster upgrade Migration to new feature Version 1.32 and higher Admin Non-HA No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A User Kubeception No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A Dataplane V1 No No N/A Version 1.30 and 1.31 Admin Non-HA No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes User Kubeception No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes Dataplane V1 No Yes Yes Version 1.29 Admin Non-HA No Yes Yes ( Preview ) Seesaw No Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) User Kubeception Yes Yes Yes ( Preview ) Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) Dataplane V1 Yes Yes No Version 1.28 Admin Non-HA No Yes No Seesaw No Yes Yes Integrated F5 Big IP Yes Yes No User Kubeception Yes Yes No Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes No Dataplane V1 Yes Yes No Key points : Starting with version 1.30, all migration solutions are available to migrate clusters to their recommended alternatives.
- You have the following options for each feature area: Feature area Recommended options Original options Container Network Interface (CNI) Dataplane V2 ( enableDataplaneV2: true ) Dataplane V1 (Calico) ( enableDataplaneV2: false ) Load balancer ManualLB (works with F5 Big IP agents) ( loadBalancer.kind: "ManualLB" ) MetalLB ( loadBalancer.kind: "MetalLB" ) integrated F5 Big IP 1 ( loadBalancer.kind: "F5BigIP" ) Seesaw ( loadBalancer.kind: "Seesaw" ) Admin cluster control plane High availability (HA) admin cluster ( adminMaster.replicas: 3 ) Non-HA admin cluster ( adminMaster.replicas: 1 ) User cluster control plane Controlplane V2 ( enableControlplaneV2: true ) Kubeception user cluster ( enableControlplaneV2: false ) 1 Integrated F5 BIG-IP refers to loadBalancer.kind: "F5BigIP" and related settings in the loadBalancer.f5BigIP section in your cluster configuration file.
- Before migration After migration Control Plane Kubernetes Node Objects Admin cluster Node User cluster Node Kubernetes Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster static pods (kube-system namespace) Other Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster Statefulsets/Deployments (kube-system namespace) Control Plane VIP Admin cluster Load Balancer Service keepalived + haproxy (user cluster static pods) Etcd Data Admin cluster Persistent Volume Data disk Control Plane Machine IP Management IPAM or DHCP IPAM Control Plane Network Admin cluster VLAN User cluster VLAN Migrate to an HA admin cluster Historically, the admin cluster could only run a single control-plane node, creating an inherent risk of a single point of failure.

### "Back up and restore a user cluster \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- BACKUP DIR="" # path to store user and admin cluster backups ADMIN CLUSTER KUBECONFIG="" # path to admin cluster kubeconfig USER CLUSTER NAMESPACE="" # user cluster namespace EXTERNAL IP="" # admin control plane node external ip - follow steps in documentation SSH PRIVATE KEY="" # path to vsphere tmp ssh private key - follow steps in documentation JUMP IP="" # network jump server IP - leave empty string if not using private network. mkdir -p $BACKUP DIR mkdir $BACKUP DIR/pki USER CLUSTER BACKUP Snapshot user cluster etcd kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} exec -it -n ${USER CLUSTER NAMESPACE} kube-etcd-0 -c kube-etcd -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etcd.local.config/certificates/etcdCA.crt --cert=/etcd.local.config/certificates/etcd.crt --key=/etcd.local.config/certificates/etcd.key snapshot save ${USER CLUSTER NAMESPACE} snapshot.db" kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} cp ${USER CLUSTER NAMESPACE}/kube-etcd-0:${USER CLUSTER NAMESPACE} snapshot.db $BACKUP DIR/user-cluster ${USER CLUSTER NAMESPACE} snapshot.db ADMIN CLUSTER BACKUP Set up ssh options SSH OPTS=(-oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY}) if [ "${JUMP IP}" != "" ]; then SSH OPTS+=(-oProxyCommand="ssh -oStrictHostKeyChecking=no -i ${SSH PRIVATE KEY} -W %h:%p ubuntu@${JUMP IP}") fi Copy admin certs ssh "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP} 'sudo chmod -R +rw /etc/kubernetes/pki/ ' scp -r "${SSH OPTS[@]}" ubuntu@${EXTERNAL IP}:/etc/kubernetes/pki/ ${BACKUP DIR}/pki/ Snapshot admin cluster etcd admin etcd=$(kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} get pods -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[ ].metadata.name}{"\n"}') kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} exec -it -n kube-system ${admin etcd} -- /bin/sh -ec "export ETCDCTL API=3; etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/healthcheck-client.crt --key=/etc/kubernetes/pki/etcd/healthcheck-client.key snapshot save admin snapshot.db" kubectl --kubeconfig=${ADMIN CLUSTER KUBECONFIG} cp -n kube-system ${admin etcd}:admin snapshot.db $BACKUP DIR/admin-cluster snapshot.db Controlplane V2 Set BACKUP DIR to the path where you want to store the admin and user cluster backups.
- Restart the Pods in the kube-etcd StatefulSet: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG rollout restart statefulset \ --namespace USER CLUSTER NAME kube-etcd Start the Kubernetes API servers for your user cluster: kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG scale statefulset --replicas 3 \ --namespace USER CLUSTER NAME kube-apiserver Start the etcd maintenance Deployment for your user cluster: kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG scale deployment --replicas 1 \ --namespace= USER CLUSTER NAME gke-master-etcd-maintenance Restore the PDB for the Kubernetes API server: kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG apply -f kube-apiserver-pdb.yaml Controlplane V2 This section shows how to restore the etcd data for a high-availability (HA) user cluster.
- Copy /tmp/snapshot.db from the kube-etcd container to the current directory: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG cp \ USER CLUSTER NAME /kube-etcd-0:/tmp/snapshot.db \ --container kube-etcd snapshot.db Controlplane V2 Get the etcd Pod's name: kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods \ -n kube-system -l component=etcd,tier=control-plane -ojsonpath='{$.items[ ].metadata.name}{"\n"}' where: USER CLUSTER KUBECONFIG is the user cluster's kubeconfig file.
- Delete the utility Pod: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG \ delete pod etcd-utility-0 --namespace USER CLUSTER NAME Remove etcd-utility.yaml from the current directory: rm etcd-utility.yaml Controlplane V2 You can restore the etcd data one at a time by deploying a temporary etcd container that overwrites the damaged data with the backup.


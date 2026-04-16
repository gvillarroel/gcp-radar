---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.745Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "CMK encryption for component volumes"
feature_slug: "cmk-encryption-for-component-volumes"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles"
keywords:
  - "encryption"
  - "component"
  - "volumes"
  - "supports"
---

# CMK encryption for component volumes

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on AWS supports encrypting component volumes with customer-managed keys (CMK).

## Extended Definition

Anthos clusters on AWS supports encrypting component volumes with customer-managed keys (CMK).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles)

## Supporting Pages

### Security overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security)
- Source ID: `site-iam-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AWS KMS encryption GKE on AWS uses customer-managed AWS Key Management Service (KMS) symmetric keys to encrypt: Kubernetes state data in etcd EC2 instance user data EBS volumes for at-rest encryption of control plane and node pool data For production environments, we recommend using different keys for configuration and volume encryption.
- Key Rotation In contrast to certificate rotation, key rotation is the act of changing the underlying cryptographic material contained in a key encryption key (KEK) .
- In addition, all GKE clusters enable Application-layer Secrets Encryption for sensitive data, such as Kubernetes Secret objects, which are stored in etcd .
- How application level encryption works Kubernetes offers application-level encryption with a technique known as envelope encryption .

### "REST Resource: projects.locations.awsClusters \_|\_ GKE Multi-Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Methods create (deprecated) Creates a new AwsCluster resource on a given Google Cloud Platform project and region. delete (deprecated) Deletes a specific AwsCluster resource. generateAwsAccessToken (deprecated) Generates a short-lived access token to authenticate to a given AwsCluster resource. generateAwsClusterAgentToken (deprecated) Generates an access token for a cluster agent. get (deprecated) Describes a specific AwsCluster resource. getJwks (deprecated) Gets the public component of the cluster signing keys in JSON Web Key format. list (deprecated) Lists all AwsCluster resources on a given Google Cloud project and region. patch (deprecated) Updates an AwsCluster .
- JSON representation { "version" : string , "instanceType" : string , "sshConfig" : { object ( AwsSshConfig ) } , "subnetIds" : [ string ] , "securityGroupIds" : [ string ] , "iamInstanceProfile" : string , "rootVolume" : { object ( AwsVolumeTemplate ) } , "mainVolume" : { object ( AwsVolumeTemplate ) } , "databaseEncryption" : { object ( AwsDatabaseEncryption ) } , "tags" : { string : string , ... } , "awsServicesAuthentication" : { object ( AwsServicesAuthentication ) } , "proxyConfig" : { object ( AwsProxyConfig ) } , "configEncryption" : { object ( AwsConfigEncryption ) } , "instancePlacement" : { object ( AwsInstancePlacement ) } } Fields version string Required.
- Resource: AwsCluster JSON representation AwsClusterNetworking JSON representation AwsControlPlane JSON representation AwsDatabaseEncryption JSON representation AwsServicesAuthentication JSON representation AwsAuthorization JSON representation AwsClusterUser JSON representation AwsClusterGroup JSON representation State AwsClusterError JSON representation Methods Resource: AwsCluster GKE-on-AWS is deprecated.
- When unspecified, it defaults to 8 GiB with the GP2 volume type. databaseEncryption object ( AwsDatabaseEncryption ) Required.

### Create AWS IAM roles \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles)
- Source ID: `site-docs-root-2`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Direct connection aws iam create-policy --policy-name CONTROL PLANE POLICY \ --policy-document '{ "Version": "2012-10-17", "Statement": [ { "Sid": "", "Effect": "Allow", "Action": [ "ec2:AttachNetworkInterface", "ec2:AttachVolume", "ec2:AuthorizeSecurityGroupIngress", "ec2:CreateRoute", "ec2:CreateSecurityGroup", "ec2:CreateSnapshot", "ec2:CreateTags", "ec2:CreateVolume", "ec2:DeleteRoute", "ec2:DeleteSecurityGroup", "ec2:DeleteSnapshot", "ec2:DeleteTags", "ec2:DeleteVolume", "ec2:DescribeAccountAttributes", "ec2:DescribeAvailabilityZones", "ec2:DescribeDhcpOptions", "ec2:DescribeInstances", "ec2:DescribeInstanceTypes", "ec2:DescribeInternetGateways", "ec2:DescribeLaunchTemplateVersions", "ec2:DescribeRegions", "ec2:DescribeRouteTables", "ec2:DescribeSecurityGroups", "ec2:DescribeSnapshots", "ec2:DescribeSubnets", "ec2:DescribeTags", "ec2:DescribeVolumes", "ec2:DescribeVolumesModifications", "ec2:DescribeVpcs", "ec2:DetachVolume", "ec2:ModifyInstanceAttribute", "ec2:ModifyVolume", "ec2:RevokeSecurityGroupIngress", "autoscaling:DescribeAutoScalingGroups", "autoscaling:DescribeAutoScalingInstances", "autoscaling:DescribeLaunchConfigurations", "autoscaling:DescribeTags", "autoscaling:SetDesiredCapacity", "autoscaling:TerminateInstanceInAutoScalingGroup", "elasticloadbalancing:AddTags", "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer", "elasticloadbalancing:AttachLoadBalancerToSubnets", "elasticloadbalancing:ConfigureHealthCheck", "elasticloadbalancing:CreateListener", "elasticloadbalancing:CreateLoadBalancer", "elasticloadbalancing:CreateLoadBalancerListeners", "elasticloadbalancing:CreateLoadBalancerPolicy", "elasticloadbalancing:CreateTargetGroup", "elasticloadbalancing:DeleteListener", "elasticloadbalancing:DeleteLoadBalancer", "elasticloadbalancing:DeleteLoadBalancerListeners", "elasticloadbalancing:DeleteTargetGroup", "elasticloadbalancing:DeregisterInstancesFromLoadBalancer", "elasticloadbalancing:DeregisterTargets", "elasticloadbalancing:DescribeListeners", "elasticloadbalancing:DescribeLoadBalancerAttributes", "elasticloadbalancing:DescribeLoadBalancerPolicies", "elasticloadbalancing:DescribeLoadBalancers", "elasticloadbalancing:DescribeTargetGroups", "elasticloadbalancing:DescribeTargetHealth", "elasticloadbalancing:DetachLoadBalancerFromSubnets", "elasticloadbalancing:ModifyListener", "elasticloadbalancing:ModifyLoadBalancerAttributes", "elasticloadbalancing:ModifyTargetGroup", "elasticloadbalancing:RegisterInstancesWithLoadBalancer", "elasticloadbalancing:RegisterTargets", "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer", "elasticloadbalancing:SetLoadBalancerPoliciesOfListener", "elasticfilesystem:CreateAccessPoint", "elasticfilesystem:DeleteAccessPoint", "elasticfilesystem:DescribeAccessPoints", "elasticfilesystem:DescribeFileSystems", "elasticfilesystem:DescribeMountTargets", "kms:CreateGrant", "kms:Decrypt", "kms:Encrypt", "kms:GrantIsForAWSResource" ], "Resource": " " } ] }' Replace the following: CONTROL PLANE POLICY with a name for the control plane policy Direct with tags aws iam create-policy --policy-name CONTROL PLANE POLICY autoscaling \ --policy-document '{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "autoscaling:DescribeAutoScalingGroups", "autoscaling:DescribeAutoScalingInstances", "autoscaling:DescribeLaunchConfigurations", "autoscaling:DescribeTags" ], "Resource": " " }, { "Effect": "Allow", "Action": [ "autoscaling:SetDesiredCapacity", "autoscaling:TerminateInstanceInAutoScalingGroup" ], "Resource": [ "arn:aws:autoscaling: : :autoScalingGroup: :autoScalingGroupName/gke- " ], "Condition": { "StringEquals": { "aws:ResourceTag/ ACCESS CONTROL TAG KEY ": " ACCESS CONTROL TAG VALUE " } } } ] }' aws iam create-policy --policy-name CONTROL PLANE POLICY ec2 \ --policy-document '{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "ec2:DescribeAccountAttributes", "ec2:DescribeAvailabilityZones", "ec2:DescribeDhcpOptions", "ec2:DescribeInstances", "ec2:DescribeInstanceTypes", "ec2:DescribeInternetGateways", "ec2:DescribeLaunchTemplateVersions", "ec2:DescribeRegions", "ec2:DescribeRouteTables", "ec2:DescribeSecurityGroups", "ec2:DescribeSnapshots", "ec2:DescribeSubnets", "ec2:DescribeTags", "ec2:DescribeVolumes", "ec2:DescribeVolumesModifications", "ec2:DescribeVpcs" ], "Resource": " " }, { "Effect": "Allow", "Action": ["ec2:AttachNetworkInterface"], "Resource": [ "arn:aws:ec2: : :instance/ ", "arn:aws:ec2: : :network-interface/ " ] }, { "Effect": "Allow", "Action": [ "ec2:CreateVolume", "ec2:CreateTags", "ec2:AttachVolume", "ec2:DeleteVolume", "ec2:DetachVolume", "ec2:ModifyVolume" ], "Resource": ["arn:aws:ec2: : :volume/ "] }, { "Effect": "Allow", "Action": ["ec2:AttachVolume", "ec2:DetachVolume"], "Resource": ["arn:aws:ec2: : :instance/ "] }, { "Effect": "Allow", "Action": ["ec2:CreateSecurityGroup", "ec2:CreateTags"], "Resource": ["arn:aws:ec2: : :security-group/ "] }, { "Effect": "Allow", "Action": ["ec2:CreateSecurityGroup"], "Resource": ["arn:aws:ec2: : :vpc/ "] }, { "Effect": "Allow", "Action": [ "ec2:AuthorizeSecurityGroupIngress", "ec2:DeleteSecurityGroup", "ec2:RevokeSecurityGroupIngress" ], "Resource": ["arn:aws:ec2: : :security-group/ "] }, { "Effect": "Allow", "Action": ["ec2:CreateSnapshot", "ec2:CreateTags", "ec2:DeleteSnapshot"], "Resource": ["arn:aws:ec2: : :snapshot/ "] }, { "Effect": "Allow", "Action": ["ec2:CreateSnapshot"], "Resource": ["arn:aws:ec2: : :volume/ "] }, { "Effect": "Allow", "Action": ["ec2:CreateRoute", "ec2:DeleteRoute"], "Resource": ["arn:aws:ec2: : :route-table/ "] }, { "Effect": "Allow", "Action": ["ec2:ModifyInstanceAttribute"], "Resource": [ "arn:aws:ec2: : :instance/ ", "arn:aws:ec2: : :security-group/ ", "arn:aws:ec2: : :volume/ " ] }, { "Effect": "Allow", "Action": ["ec2:DeleteTags"], "Resource": [ "arn:aws:ec2: : :security-group/ ", "arn:aws:ec2: : :snapshot/ ", "arn:aws:ec2: : :volume/ " ] } ] }' aws iam create-policy --policy-name CONTROL PLANE POLICY elasticloadbalancing \ --policy-document '{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "elasticloadbalancing:DescribeLoadBalancers", "elasticloadbalancing:DescribeLoadBalancerAttributes", "elasticloadbalancing:DescribeListeners", "elasticloadbalancing:DescribeLoadBalancerPolicies", "elasticloadbalancing:DescribeTargetGroups", "elasticloadbalancing:DescribeTargetHealth" ], "Resource": " " }, { "Effect": "Allow", "Action": [ "elasticloadbalancing:AddTags", "elasticloadbalancing:AttachLoadBalancerToSubnets", "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer", "elasticloadbalancing:CreateListener", "elasticloadbalancing:CreateLoadBalancer", "elasticloadbalancing:CreateLoadBalancerPolicy", "elasticloadbalancing:CreateLoadBalancerListeners", "elasticloadbalancing:ConfigureHealthCheck", "elasticloadbalancing:DeleteLoadBalancer", "elasticloadbalancing:DeleteLoadBalancerListeners", "elasticloadbalancing:DetachLoadBalancerFromSubnets", "elasticloadbalancing:DeregisterInstancesFromLoadBalancer", "elasticloadbalancing:ModifyLoadBalancerAttributes", "elasticloadbalancing:RegisterInstancesWithLoadBalancer", "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer", "elasticloadbalancing:SetLoadBalancerPoliciesOfListener" ], "Resource": ["arn:aws:elasticloadbalancing: : :loadbalancer/ "] }, { "Effect": "Allow", "Action": [ "elasticloadbalancing:AddTags", "elasticloadbalancing:CreateTargetGroup", "elasticloadbalancing:DeleteTargetGroup", "elasticloadbalancing:DeregisterTargets", "elasticloadbalancing:ModifyTargetGroup", "elasticloadbalancing:RegisterTargets" ], "Resource": ["arn:aws:elasticloadbalancing: : :targetgroup/ "] }, { "Effect": "Allow", "Action": [ "elasticloadbalancing:DeleteListener", "elasticloadbalancing:ModifyListener" ], "Resource": ["arn:aws:elasticloadbalancing: : :listener/ "] } ] }' aws iam create-policy --policy-name CONTROL PLANE POLICY elasticfilesystem \ --policy-document '{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "elasticfilesystem:DescribeAccessPoints", "elasticfilesystem:DescribeFileSystems", "elasticfilesystem:DescribeMountTargets" ], "Resource": " " }, { "Effect": "Allow", "Action": [ "elasticfilesystem:CreateAccessPoint" ], "Resource": [ "arn:aws:elasticfilesystem: : :file-system/ " ] }, { "Effect": "Allow", "Action": [ "elasticfilesystem:DeleteAccessPoint" ], "Resource": [ "arn:aws:elasticfilesystem: : :access-point/ " ] } ] }' aws iam create-policy --policy-name CONTROL PLANE POLICY kms \ --policy-document '{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": ["kms:Decrypt", "kms:Encrypt"], "Resource": DATABASE KMS KEY ARN }, { "Effect": "Allow", "Action": ["kms:Decrypt"], "Resource": CONTROL PLANE CONFIG KMS KEY ARN }, { "Effect": "Allow", "Action": ["kms:CreateGrant"], "Resource": CONTROL PLANE MAIN VOLUME KMS KEY ARN , "Condition": { "Bool": { "kms:GrantIsForAWSResource": "true" } } } ] }' Replace the following: CONTROL PLANE POLICY : a name for the control plane policy ACCESS CONTROL TAG KEY : the tag key that applies to this policy ACCESS CONTROL TAG VALUE : the tag value that applies to this policy DATABASE KMS KEY ARN : your KMS etcd encryption key ARN CONTROL PLANE CONFIG KMS KEY ARN : your KMS control plane encryption key ARN CONTROL PLANE MAIN VOLUME KMS KEY ARN : your KMS control plane main volume encryption key ARN Copy the value of each Policy.Arn for use in a following command.
- See Creating KMS keys with specific permissions for more information on permissions for each individual key. aws iam create-policy --policy-name API POLICY kms \ --policy-document '{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": ["kms:DescribeKey"], "Resource": ["arn:aws:kms: : :key/ "] }, { "Effect": "Allow", "Action": ["kms:Encrypt"], "Resource": CONTROL PLANE CONFIG KMS KEY ARN }, { "Effect": "Allow", "Action": ["kms:Encrypt"], "Resource": NODE POOL CONFIG KMS KEY ARN }, { "Effect": "Allow", "Action": ["kms:GenerateDataKeyWithoutPlaintext"], "Resource": CONTROL PLANE MAIN VOLUME KMS KEY ARN } ] }' Replace the following: CONTROL PLANE CONFIG KMS KEY ARN : your KMS control plane configuration encryption key ARN .
- If you are using an HTTP proxy , create an additional policy for AWS Secrets Manager. aws iam create-policy --policy-name CONTROL PLANE POLICY secretsmanager \ --policy-document '{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "secretsmanager:GetSecretValue" ], "Resource": PROXY CONFIG ARN } ] }' Replace the following: KMS KEY ARN with your KMS etcd encryption key ARN CONTROL PLANE POLICY with a name for the control plane policy Copy the value of each Policy.Arn for use in the next command.
- NODE POOL CONFIG KMS KEY ARN : your KMS node pool configuration encryption key ARN CONTROL PLANE MAIN VOLUME KMS KEY ARN : your KMS control plane main volume encryption key ARN Save the ARN generated by this command for later use.


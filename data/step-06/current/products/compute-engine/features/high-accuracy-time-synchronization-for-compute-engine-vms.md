---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.113Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "High-accuracy time synchronization for Compute Engine VMs"
feature_slug: "high-accuracy-time-synchronization-for-compute-engine-vms"
latest_feature_date: "2025-11-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing"
  - "https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing"
  - "https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling"
keywords:
  - "high"
  - "accuracy"
  - "time"
  - "synchronization"
  - "compute"
  - "engine"
  - "vms"
  - "can"
---

# High-accuracy time synchronization for Compute Engine VMs

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Compute Engine VMs can synchronize with the host clock using chrony and ptp_kvm to achieve supported accuracy within 1 ms.

## Extended Definition

Compute Engine VMs can synchronize with the host clock using chrony and ptp_kvm to achieve supported accuracy within 1 ms.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing)
- [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing)
- [https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling](https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling)

## Supporting Pages

### "Using autohealing for highly available apps \_|\_ Compute Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing)
- Source ID: `site-docs-reference-required-6`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Guides Send feedback Using autohealing for highly available apps Stay organized with collections Save and categorize content based on your preferences.
- This interactive tutorial shows how to use autohealing to build highly available apps on Compute Engine.
- Click Create . gcloud Create a health check using the health-checks create http command . gcloud compute health-checks create http autohealer-check \ --region europe-west1 \ --check-interval 10 \ --timeout 5 \ --healthy-threshold 2 \ --unhealthy-threshold 3 \ --request-path "/health" check-interval defines the amount of time from the start of one probe to the start of the next one. timeout defines the amount of time that Google Cloud waits for a response to a probe.
- In the new window, click Delete to confirm the deletion. gcloud gcloud compute firewall-rules delete default-allow-http default-allow-http-health-check -q What's next Try another tutorial: Using load balancing for highly available applications .

### "Using autoscaling for highly scalable applications \_|\_ Compute Engine\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling](https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling)
- Source ID: `site-docs-reference-required-6`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Guides Send feedback Using autoscaling for highly scalable applications Stay organized with collections Save and categorize content based on your preferences.
- After a few minutes, the CPU utilization will surpass the target value, prompting the autoscaling to increase the instance group size. export MACHINES=$(gcloud --project=$PROJECT ID compute instances list --format="csv(name,networkInterfaces[0].accessConfigs[0].natIP)" grep "autoscaling-web-app-group") for i in $MACHINES; do NAME=$(echo "$i" cut -f1 -d,) IP=$(echo "$i" cut -f2 -d,) echo "Simulating high load for instance $NAME" curl -q -s "http://$IP/startLoad" >/dev/null --retry 2 done Open the Monitoring tab in the Google Cloud console.
- Pro Tip: When creating a regional managed instance group, Compute Engine recommends that you provision enough instances so that, if all of the instances in any one zone are unavailable, the remaining instances still meet the minimum number of instances that you require.
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine To generate a cost estimate based on your projected usage, use the pricing calculator .

### "Using load balancing for highly available applications \_|\_ Compute Engine\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing)
- Source ID: `site-docs-reference-required-6`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Guides Send feedback Using load balancing for highly available applications Stay organized with collections Save and categorize content based on your preferences.
- Pro Tip: When creating a regional managed instance group, Compute Engine recommends that you provision enough instances so that, if all of the instances in any one zone are unavailable, the remaining instances still meet the minimum number of instances that you require.
- Application architecture The application includes the following Compute Engine components: VPC network : a virtual network within Google Cloud that can provide global connectivity using its own routes and firewall rules.
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine To generate a cost estimate based on your projected usage, use the pricing calculator .


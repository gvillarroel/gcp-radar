---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:29.610Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Cloud Scheduler general availability"
feature_slug: "cloud-scheduler-general-availability"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/php"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "scheduler"
  - "availability"
  - "reached"
  - "running"
  - "scheduled"
  - "units"
  - "work"
  - "cron"
---

# Cloud Scheduler general availability

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

Cloud Scheduler reached general availability for running scheduled units of work (cron jobs).

## Extended Definition

Cloud Scheduler reached general availability for running scheduled units of work (cron jobs).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Maximum worker connections in Nginx per instance: 4,096 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Resource Default limit Default Cloud Storage Bucket Stored Data First 5 GB free; no maximum Default Cloud Storage Bucket Class A Operations First 20,000 ops/day free; no maximum Default Cloud Storage Bucket Class B Operations First 50,000 ops/day free; no maximum Default Cloud Storage Bucket Network Egress First 1 GB free; no maximum Blobstore The following quotas apply specifically to use of the blobstore.
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .
- Resource Default limit Cron job 250 cron jobs URL Fetch URL Fetch API calls The total number of times the application accessed the URL fetch service to perform an HTTP or HTTPS request.

### "The PHP runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
- Source ID: `site-docs-reference-2`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example function uses the metadata server to get the external IP address of an instance: function get external ip using google cloud() { $metadata = new Google\Cloud\Core\Compute\Metadata(); $externalIp = $metadata->get( 'instance/network-interfaces/0/access-configs/0/external-ip'); return $externalIp; } function get external ip using curl() { $url = 'http://metadata.google.internal/computeMetadata/v1/' . 'instance/network-interfaces/0/access-configs/0/external-ip'; $ch = curl init(); curl setopt($ch, CURLOPT URL, $url); curl setopt($ch, CURLOPT HTTPHEADER, array('Metadata-Flavor: Google')); curl setopt($ch, CURLOPT RETURNTRANSFER, 1); return curl exec($ch); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following is an example configuration file content for this case: [program:quote-updater] command = php %(ENV APP DIR)s/worker.php stdout logfile = /dev/stdout stdout logfile maxbytes=0 stderr logfile = /dev/stderr stderr logfile maxbytes=0 user = www-data autostart = true autorestart = true priority = 5 stopwaitsecs = 20 If you want to replace nginx and php-fpm with your process, add a file named supervisord.conf to the project root directory.
- The PHP runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- To update corresponding references, you must: Update any include statements in your NGINX configuration to be relative to /workspace instead of /etc/nginx .

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- Health checking App Engine sends periodic health check requests to confirm that an instance is running, and to check that an instance is fully started and ready to accept incoming requests.
- You can specify thresholds for each of these metrics, as well as a minimum number instances to keep running at all times by configuring the automatic scaling element.
- Each active version must have at least one instance running, and the scaling type of a service/version controls how additional instances are created.


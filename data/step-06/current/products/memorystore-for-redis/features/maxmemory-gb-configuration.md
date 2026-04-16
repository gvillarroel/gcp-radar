---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.286Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "maxmemory-gb configuration"
feature_slug: "maxmemory-gb-configuration"
latest_feature_date: "2019-10-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices"
  - "https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-standard"
keywords:
  - "maxmemory"
  - "gb"
  - "configuration"
  - "lets"
  - "you"
  - "adjust"
  - "an"
  - "instance"
---

# maxmemory-gb configuration

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Lets you adjust an instance's maxmemory-gb limit.

## Extended Definition

Lets you adjust an instance's maxmemory-gb limit.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations](https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-standard](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-standard)

## Supporting Pages

### "Memory management best practices \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You should make a note of your cache-hit ratio before you make any large configuration changes such as adjusting the maxmemory-gb limit, changing your eviction policy, or scaling your instance.
- To learn how to adjust the maxmemory-gb configuration, see Configuring Redis instances .
- Therefore, you may need to implement the following recommendations: Lower the maxmemory limit of your instance If system memory usage ratio exceeds 80% you should lower maxmemory-gb , but first view how the system memory usage ratio has changed over time to determine what new maxmemory-gb limit to set.
- In this situation you should lower the maxmemory-gb limit in larger increments to ensure that the instance either avoids entering an out of memory condition, or recovers from an out of memory condition.

### "Supported Redis configurations \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations](https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Represents the percentage of instance maxmemory to which client storage is limited. maxmemory-gb Designates an adjustable limit at which your eviction policy takes effect.
- 1.5 designates a maxmemory-gb of 1.5 GB. maxmemory-gb can be reduced to a minimum of 20% of your instance capacity. maxmemory-policy Specifies the behavior Redis follows when the instance data reaches the maxmemory-gb limit.
- For example, if you have a 10 GB instance and you set maxmemory-gb to 8 , your eviction policy takes effect when your data occupies 8 GB of your instance memory.
- When using the console, you set maxmemory-percent as percentage of your instance capacity instead of a specific number of GBs.

### "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Gcloud You can update the following properties after creating an instance: Display name Redis configuration Labels Size (For more information on scaling, see Scaling Instances .) For example, enter the following command to update the display name of an instance, replacing VARIABLES with appropriate values: gcloud redis instances update INSTANCE ID --region= REGION ID --display-name= NEW DISPLAY NAME For more details on how to set configuration parameters, see Configuring Redis Instances .
- Click the Edit button From the Edit Redis instance page you can change an instance's: Display name Capacity Configurations Click the Save button.
- On the Create a Redis instance page, select your desired configurations for your new instance.
- Memorystore for Redis Click the ID of an instance about which you want to view summary information. gcloud To view summary information about an instance, use the gcloud redis instances describe command: gcloud redis instances describe INSTANCE ID \ --region= REGION ID Make the following replacements: INSTANCE ID : the ID of the instance about which you want to view summary information REGION ID : the region where the instance is located For example: gcloud redis instances describe my-instance \ --region=us-central1 Edit instances To edit an instance: Console Go to the Memorystore for Redis page in the Google Cloud console.

### "Connect to a Redis instance from an App Engine standard environment application\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-standard](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-standard)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update the app's configuration to specify your Serverless VPC Access connector and the IP address and port of your Redis instance: Go Update the gae standard deployment/app.yaml file: runtime : go125 Update with Redis instance details env variables : REDISHOST : '<REDIS IP>' REDISPORT : '6379' Update with Serverless VPC Access connector details vpc access connector : name : 'projects/<PROJECT ID>/locations/<REGION>/connectors/<CONNECTOR NAME>' See app.yaml Configuration File for more details.
- Update the gae standard deployment/appengine-web.xml file to specify your Serverless VPC Access connector: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java8</runtime> <threadsafe>true</threadsafe> <vpc-access-connector> <name>projects/[PROJECT ID]/locations/[REGION]/connectors/[CONNECTOR NAME]</name> </vpc-access-connector> </appengine-web-app> And update the src/main/resources/application.properties file with your Redis instance's IP address and port: redis . host = REDIS HOST IP redis . port = 6379 For more information about configuring your app, see appengine-web.xml Reference .
- Python Update the gae standard deployment/app.yaml file: runtime : python37 entrypoint : gunicorn -b :$PORT main:app Update with Redis instance details env variables : REDISHOST : '<REDIS IP>' REDISPORT : '6379' Update with Serverless VPC Access connector details vpc access connector : name : 'projects/<PROJECT ID>/locations/<REGION>/connectors/<CONNECTOR NAME>' See app.yaml Configuration File for more details.
- Node.js Update the gae standard deployment/app.yaml file: runtime : nodejs10 Update with Redis instance details env variables : REDISHOST : '<REDIS IP>' REDISPORT : '6379' Update with Serverless VPC Access connector details vpc access connector : name : 'projects/<PROJECT ID>/locations/<REGION>/connectors/<CONNECTOR NAME>' See app.yaml Configuration File for more details.


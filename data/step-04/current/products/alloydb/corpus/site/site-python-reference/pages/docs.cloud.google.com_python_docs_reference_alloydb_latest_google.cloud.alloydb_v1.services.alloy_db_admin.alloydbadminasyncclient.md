---
title: "Class AlloyDBAdminAsyncClient (0.7.0) | Python client libraries | Google Cloud Documentation"
url: "https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminAsyncClient"
knowledge_key: "corpus"
source_id: "site-python-reference"
source_type: "site"
content_origin: "bx_web_fallback"
---
# Class AlloyDBAdminAsyncClient (0.7.0) | Python client libraries | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminAsyncClient

# - It may require specifying regional endpoints when creating the service # client as shown in: # https://googleapis.dev/python/google-api-core/latest/client_options.html from google.cloud import alloydb_v1 async def sample_batch_create_instances(): # Create a client client = alloydb_v1.AlloyDBAdminAsyncClient() # Initialize request argument(s) requests = alloydb_v1.CreateInstanceRequests() requests.create_instance_requests.parent = &quot;parent_value&quot; requests.create_instance_requests.instance_id = &quot;instance_id_value&quot; requests.create_instance_requests.instance.instance_type = &quot;SECONDARY&quot; request = alloydb_v1.BatchCreateInstancesRequest( parent=&quot;parent_value&quot;, requests=requests, ) # Make the request operation = client.batch_create_instances(request=request) print(&quot;Waiting for operation to complete...&quot;) response = (await operation).result() # Handle the response print(response)

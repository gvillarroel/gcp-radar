---
title: "Advanced Session Pool Topics \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/spanner/latest/advanced-session-pool-topics
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/spanner/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/spanner/latest/advanced-session-pool-topics
  title: "Advanced Session Pool Topics \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Advanced Session Pool Topics
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
3.63.0 (latest)
3.62.0
3.61.0
3.60.0
3.59.0
3.58.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.52.0
3.51.0
3.50.1
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.40.1
3.39.0
3.38.0
3.37.0
3.36.0
3.35.1
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.28.0
3.27.1
3.26.0
3.25.0
3.24.0
3.23.0
3.22.2
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.1
3.14.1
3.13.0
3.12.1
3.11.1
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.0
3.0.0
2.1.1
2.0.0
1.19.3
1.18.0
1.17.1
1.16.0
1.15.1
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
Custom Session Pool Implementations
You can supply your own pool implementation, which must satisfy the
contract laid out in
AbstractSessionPool :
from google.cloud.spanner import AbstractSessionPool
class MyCustomPool(AbstractSessionPool):
def __init__(self, custom_param):
super(MyCustomPool, self).__init__()
self.custom_param = custom_param
def bind(self, database):
...
def get(self, read_only=False):
...
def put(self, session, discard_if_full=True):
...
pool = MyCustomPool(custom_param=42)
database = instance.database(DATABASE_NAME, pool=pool)
Lowering latency for read / query operations
Some applications may need to minimize latency for read operations, including
particularly the overhead of making an API request to create or refresh a
session. PingingPool is designed for such
applications, which need to configure a background thread to do the work of
keeping the sessions fresh.
Create an instance of PingingPool :
from google.cloud.spanner import Client , PingingPool
client = Client()
instance = client . instance (INSTANCE_NAME)
pool = PingingPool(size=10, default_timeout=5, ping_interval=300)
database = instance.database(DATABASE_NAME, pool=pool)
Set up a background thread to ping the pool’s session, keeping them
from becoming stale:
import threading
def background_loop():
while True:
# (Optional) Perform other background tasks here
pool.ping()
background = threading.Thread(target=background_loop, name='ping-pool')
background.daemon = True
background.start()
Lowering latency for mixed read-write operations
Some applications may need to minimize latency for read write operations,
including particularly the overhead of making an API request to create or
refresh a session or to begin a session’s transaction.
TransactionPingingPool is designed for
such applications, which need to configure a background thread to do the work
of keeping the sessions fresh and starting their transactions after use.
Create an instance of
TransactionPingingPool :
from google.cloud.spanner import Client , TransactionPingingPool
client = Client()
instance = client . instance (INSTANCE_NAME)
pool = TransactionPingingPool(size=10, default_timeout=5, ping_interval=300)
database = instance.database(DATABASE_NAME, pool=pool)
Set up a background thread to ping the pool’s session, keeping them
from becoming stale, and ensuring that each session has a new transaction
started before it is used:
import threading
def background_loop():
while True:
# (Optional) Perform other background tasks here
pool.ping()
pool.begin_pending_transactions()
background = threading.Thread(target=background_loop, name='ping-pool')
background.daemon = True
background.start()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]

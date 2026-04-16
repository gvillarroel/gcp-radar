---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.201Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner AUTO_INCREMENT DDL syntax"
feature_slug: "spanner-auto-increment-ddl-syntax"
latest_feature_date: "2025-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
keywords:
  - "streamline"
  - "increment"
  - "auto"
  - "syntax"
  - "googlesql"
  - "adds"
---

# Spanner AUTO_INCREMENT DDL syntax

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner adds support for the AUTO_INCREMENT DDL syntax in GoogleSQL to streamline creating IDENTITY-like primary key columns.

## Extended Definition

Spanner adds support for the AUTO_INCREMENT DDL syntax in GoogleSQL to streamline creating IDENTITY-like primary key columns.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)

## Supporting Pages

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- For syntax details on the CREATE ROLE and GRANT statements, see GoogleSQL data definition language .
- GoogleSQL For syntax details for the REVOKE statement, see GoogleSQL data definition language .
- For syntax details for the GRANT statement, see GoogleSQL data definition language .
- Ruby require "google/cloud/spanner" def spanner add and drop database role project id :, instance id :, database id : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new role parent = "new parent" role child = "new child" db path = admin client . database path project : project id , instance : instance id , database : database id job = admin client . update database ddl database : db path , statements : [ "CREATE ROLE #{ role parent } " , "GRANT SELECT ON TABLE Singers TO ROLE #{ role parent } " , "CREATE ROLE #{ role child } " , "GRANT ROLE #{ role parent } TO ROLE #{ role child } " ] job . wait until done! puts "Created roles #{ role parent } and #{ role child } and granted privileges" job = admin client . update database ddl database : db path , statements : [ "REVOKE ROLE #{ role parent } FROM ROLE #{ role child } " , "DROP ROLE #{ role child } " ] job . wait until done! puts "Revoked privileges and dropped role #{ role child } " end More information About fine-grained access control Fine-grained access control for change streams Fine-grained access control privileges GoogleSQL DDL reference Make schema updates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- To help you to balance cost control with performance needs, the Autoscaler tool monitors your instances and automatically adds or removes nodes or processing units to help ensure that they stay within the following parameters: The recommended maximums for CPU utilization .
- So, when the Autoscaler tool adds or removes nodes or processing units, it needs to allow the Spanner backend sufficient time to reassign and reorganize the splits as new capacity is added or removed from instances.
- Custom thresholds The Autoscaler tool determines the number of nodes or processing units to be added or subtracted to an instance using the recommended Spanner thresholds for the following load metrics: High priority CPU 24-hour rolling average CPU Storage utilization We recommend that you use the default thresholds as described in Creating alerts for Spanner metrics .
- The threshold and margin together define the following range, according to what you want the metric value to be: [threshold - margin, threshold + margin] The smaller the margin, the narrower the range, resulting in a higher probability that an autoscaling event is triggered.

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL The DDL syntax for creating a change stream using GoogleSQL looks like this: CREATE CHANGE STREAM CHANGE STREAM NAME [ FOR column or table watching definition [ , ... ] ] [ OPTIONS ( retention period = timespan , value capture type = type , exclude ttl deletes = boolean , exclude insert = boolean , exclude update = boolean , exclude delete = boolean , allow txn exclusion = boolean ) ] PostgreSQL The DDL syntax for creating a change stream using PostgreSQL looks like this: CREATE CHANGE STREAM CHANGE STREAM NAME [ FOR column or table watching definition [, ... ] ] [ WITH ( retention period = timespan , value capture type = type , exclude ttl deletes = boolean , exclude insert = boolean , exclude update = boolean , exclude delete = boolean , allow txn exclusion = boolean ) ] A new change stream begins to watch its assigned schema objects as soon as the long-running operation that created it completes.
- GoogleSQL To create a change stream that can exclude records from specified write transactions, run the following: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL OPTIONS ( allow txn exclusion = true ) Replace the following: CHANGE STREAM NAME : the name of the new change stream The following example creates a change stream named NewChangeStream that can exclude records from specified write transactions: CREATE CHANGE STREAM NewChangeStream FOR ALL OPTIONS ( allow txn exclusion = true ) PostgreSQL To create a change stream that can exclude records from specified write transactions, run the following: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL WITH ( allow txn exclusion = true ) Replace the following: CHANGE STREAM NAME : the name of the new change stream The following example creates a change stream named NewChangeStream that can exclude records from specified write transactions,: CREATE CHANGE STREAM NewChangeStream FOR ALL WITH ( allow txn exclusion = true ) To enable or disable the transaction-level records exclusion from an existing change stream, see Modify transaction-level records exclusion .
- Two examples: GoogleSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL OPTIONS ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL OPTIONS ( retention period = '7d' ); PostgreSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL WITH ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL WITH ( retention period = '7d' ); Specify a different value capture type To specify a change stream value capture type other than OLD AND NEW VALUES , set the value capture type to either NEW VALUES or NEW ROW , as shown in the following examples: GoogleSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL OPTIONS ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL OPTIONS ( value capture type = 'NEW VALUES' ); PostgreSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL WITH ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL WITH ( value capture type = 'NEW VALUES' ); Filter TTL-based deletes You can filter TTL-based deletes from your change stream's scope using the exclude ttl deletes filter.
- GoogleSQL To create a change stream with the TTL-based deletes filter, run the following example: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL OPTIONS ( exclude ttl deletes = true ) Replace the following: CHANGE STREAM NAME : the name of your new change stream The following example creates a change stream called NewFilterChangeStream that excludes all TTL-based deletes: CREATE CHANGE STREAM NewFilterChangeStream FOR ALL OPTIONS ( exclude ttl deletes = true ) PostgreSQL To create a change stream with the TTL-based deletes filter, run the following example: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL WITH ( exclude ttl deletes = true ) Replace the following: CHANGE STREAM NAME : the name of your new change stream The following example creates a change stream called NewFilterChangeStream that excludes all TTL-based deletes: CREATE CHANGE STREAM NewFilterChangeStream FOR ALL WITH ( exclude ttl deletes = true ) To add or remove the TTL-based deletes filter from an existing change stream, see Modify TTL-based deletes filter .


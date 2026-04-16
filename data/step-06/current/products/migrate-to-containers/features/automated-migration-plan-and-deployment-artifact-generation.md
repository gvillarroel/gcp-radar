---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.885Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "automated migration plan and deployment artifact generation"
feature_slug: "automated-migration-plan-and-deployment-artifact-generation"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
keywords:
  - "automated"
  - "migration"
  - "plan"
  - "deployment"
  - "artifact"
  - "generation"
  - "can"
  - "generate"
---

# automated migration plan and deployment artifact generation

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The service can generate a suggested migration plan and auto-create CI/CD and deployment artifacts, including YAML specs for containers, volumes, and workloads.

## Extended Definition

The service can generate a suggested migration plan and auto-create CI/CD and deployment artifacts, including YAML specs for containers, volumes, and workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)

## Supporting Pages

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to Containers then writes information about those detected files to the logPaths area of the migration plan: deployment : ... logPaths : - appName : APP NAME globs : - LOG PATH For example: deployment : ... logPaths : - appName : tomcat globs : - /var/log/tomcat /catalina.out When you generate the migration artifacts, Migrate to Containers generates the logs.yaml file from the migration plan.
- The details of your migration plan are used to extract the workload's container artifacts from the source VM, and also to generate Kubernetes deployment files that you can use to deploy the container image to other clusters, such as a production cluster.
- This page describes the migration plan's contents and the kinds of customizations you might consider before you execute the migration and generate deployment artifacts.
- For example, if Nginx is associated with two ports, it adds the -2 suffix to the name in the second definition: endpoints : - port : 80 protocol : HTTP name : backend-server-nginx - port : 8080 protocol : HTTPS name : backend-server-nginx-2 - port : 6379 protocol : TCP name : backend-server-redis When you execute a migration to generate the migration artifacts, Migrate to Containers creates a Service definition in the deployment spec.yaml file for each endpoint.

### "Customize migration plan for JBoss servers \_|\_ Migrate to Containers \_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This section describes the contents of the migration and the kinds of customizations that you might consider before you execute the migration and generate deployment artifacts.
- Edit this to change the artifacts naming. serverName: jboss-server JBoss home directory. home: /opt/jboss/wildfly Parent Wildfly image for the generated container image. fromImage: docker.io/jboss/wildfly:10.1.0.Final JBoss home directory in the target image. targetImageHome: /opt/wildfly Configuration file path from source VM. configurationFile: /opt/jboss/wildfly/standalone/configuration/standalone.xml Ports list to expose on the generated container image. ports: - name: management-http port: 9990 - name: management-https port: 9993 - name: ajp port: 8009 - name: http port: 8080 - name: https port: 8433 - name: txn-recovery-environment port: 4712 - name: txn-status-manager port: 4713 List of deployments files to copy. deployments: directory: /opt/jboss/wildfly/standalone/deployments applications: - test.war List of modules to copy in rsync filter format.
- If you want to change the Docker community image, or provide your own docker image, you can modify the fromImage tag in your migration plan using the following format: Parent Wildfly image for the generated container image. fromImage : docker.io/jboss/wildfly:10.1.0.Final The targetImageHome field specifies the path of the JBoss home directory in the target image, and is derived from the fromImage field.
- Specify the Docker image On the migration plan, we generate a Docker community image tag based on the JBoss version.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.
- Set Tomcat environment variables If you would like to set CATALINA OPTS in the Dockerfile that was generated alongside other artifacts after a successful migration, you can first add to the catalinaOpts field in your migration plan.
- This section describes the contents of the migration and the kinds of customizations you might consider before you execute the migration and generate deployment artifacts.
- Specify the Docker image In the migration plan, we generate a Docker community image tag based on the Tomcat version, Java version, and Java vendor.


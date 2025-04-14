
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import EditableContent from './EditableContent';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Professional Experience</h2>
        
        <div className="mt-12 space-y-8">
          {/* Carelon - Applied AI */}
          <div className="timeline-item">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <EditableContent
                      initialContent="Applied AI"
                      contentType="title"
                      id="job-title-carelon-ai"
                      className="text-xl font-semibold text-resume-primary"
                    />
                    <Badge variant="outline" className="text-sm font-normal">
                      <EditableContent
                        initialContent="Dec 2022 - Present"
                        contentType="text"
                        id="job-period-carelon-ai"
                      />
                    </Badge>
                  </div>
                  <EditableContent
                    initialContent="Carelon, Dallas, Texas, United States"
                    contentType="text"
                    id="job-company-carelon-ai"
                    className="text-resume-secondary font-medium"
                  />
                  <EditableContent
                    initialContent="• Post-Call Wrap-Up Automation – Streaming real-time events and using OpenAI for multilingual summarization to streamline agent documentation.\n• SmartBot Agent – Built an LLM-based assistant for resolving frontline benefit and claims queries via RAG and API integration.\n• Voice-to-Insight – Converted large-scale customer call audio into actionable transcripts and sentiment insights using OpenAI Whisper and Annotate."
                    contentType="list"
                    id="job-description-carelon-ai"
                    className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Carelon - Data Science Sol Cons Sr */}
          <div className="timeline-item">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <EditableContent
                      initialContent="Data Science Sol Cons Sr (MLOps/Data Engineer Sr)"
                      contentType="title"
                      id="job-title-carelon-ds"
                      className="text-xl font-semibold text-resume-primary"
                    />
                    <Badge variant="outline" className="text-sm font-normal">
                      <EditableContent
                        initialContent="May 2022 - Dec 2022"
                        contentType="text"
                        id="job-period-carelon-ds"
                      />
                    </Badge>
                  </div>
                  <EditableContent
                    initialContent="Carelon, Dallas, Texas, United States"
                    contentType="text"
                    id="job-company-carelon-ds"
                    className="text-resume-secondary font-medium"
                  />
                  <EditableContent
                    initialContent="• ML Infrastructure & Feature Store Engineering: Managed on-prem Kubernetes clusters for ML orchestration and refactored CI/CD pipelines with Jenkins and Docker. Customized Feast SDK (Opensource feature store) to support Snowflake and Apache Spark, and built a Feature Catalogue integrated with Airflow to streamline feature reuse and model deployment.\n• PA PASS – Prior Authorization Approval Audit Checks Enablement: Operationalized a machine learning model designed to detect anomalies in Prior Authorization approvals, supporting audit and compliance teams. Built scalable batch pipelines using Apache Spark and Airflow, and managed data flow into Snowflake for traceability and downstream analysis. Integrated model outputs with business logic to flag issues like repeat claims or excessive approvals, and enabled visibility through Tableau dashboards."
                    contentType="list"
                    id="job-description-carelon-ds"
                    className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Anthem, Inc. - Data Science Sol Cons Sr */}
          <div className="timeline-item">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <EditableContent
                      initialContent="Data Science Sol Cons Sr (MLOps/Data Engineer Sr)"
                      contentType="title"
                      id="job-title-anthem-ds"
                      className="text-xl font-semibold text-resume-primary"
                    />
                    <Badge variant="outline" className="text-sm font-normal">
                      <EditableContent
                        initialContent="Apr 2021 - May 2022"
                        contentType="text"
                        id="job-period-anthem-ds"
                      />
                    </Badge>
                  </div>
                  <EditableContent
                    initialContent="Anthem, Inc., Atlanta, Georgia, United States"
                    contentType="text"
                    id="job-company-anthem-ds"
                    className="text-resume-secondary font-medium"
                  />
                  <EditableContent
                    initialContent="• Smart Utilization Management – Real-Time ML for Prior Authorization: Designed & Operationalized a real-time ML pipeline using real-time API, Feast SDK for feature stores, and Kubernetes-deployed APIs to predict PA outcomes. Overcame stale data limitations by implementing Spark + Delta Lake for daily UPSERTs, improving model freshness and earning internal recognition for innovation."
                    contentType="list"
                    id="job-description-anthem-ds"
                    className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Anthem, Inc. - Big Data Engineer (Enterprise Data Science) */}
          <div className="timeline-item">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <EditableContent
                      initialContent="Big Data Engineer (Enterprise Data Science)"
                      contentType="title"
                      id="job-title-anthem-bde-ds"
                      className="text-xl font-semibold text-resume-primary"
                    />
                    <Badge variant="outline" className="text-sm font-normal">
                      <EditableContent
                        initialContent="Oct 2019 - Apr 2021"
                        contentType="text"
                        id="job-period-anthem-bde-ds"
                      />
                    </Badge>
                  </div>
                  <EditableContent
                    initialContent="Anthem, Inc., Atlanta, Georgia, United States"
                    contentType="text"
                    id="job-company-anthem-bde-ds"
                    className="text-resume-secondary font-medium"
                  />
                  <EditableContent
                    initialContent="• Real-Time Claims Anomaly Detection – Kafka + Spark Streaming: Built a real-time anomaly detection pipeline using Kafka and Spark Structured Streaming (Scala) to identify fraudulent healthcare claims based on duplication, abnormal charge patterns, and provider behavior. Enabled near-instant fraud review and intervention, reducing manual audits and supporting proactive compliance.\n• Big Data Fabric (BDF) Project – Healthcare Datalake Platform: Led offshore teams and collaborated with stakeholders to build scalable ingestion pipelines using PySpark, Hive, and StreamSets on Cloudera. Automated ETL workflows across billions of records sourced from Oracle, MySQL, Teradata, FTP, and APIs. Implemented PHI masking and enabled downstream analytics in Tableau and ODW."
                    contentType="list"
                    id="job-description-anthem-bde-ds"
                    className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Anthem, Inc. - Big Data Engineer (Enterprise Data Warehouse) */}
          <div className="timeline-item">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <EditableContent
                      initialContent="Big Data Engineer (Enterprise Data Warehouse)"
                      contentType="title"
                      id="job-title-anthem-bde-dw"
                      className="text-xl font-semibold text-resume-primary"
                    />
                    <Badge variant="outline" className="text-sm font-normal">
                      <EditableContent
                        initialContent="May 2018 - Sep 2019"
                        contentType="text"
                        id="job-period-anthem-bde-dw"
                      />
                    </Badge>
                  </div>
                  <EditableContent
                    initialContent="Anthem, Inc., Atlanta, Georgia"
                    contentType="text"
                    id="job-company-anthem-bde-dw"
                    className="text-resume-secondary font-medium"
                  />
                  <EditableContent
                    initialContent="• Voyagers Project (Pharmacy Business Manager – now Carelon Rx): Joined as the first developer on the PBM initiative, designing ingestion frameworks for EFX third-party files. Automated the parsing and transformation of complex XML files into Avro using custom Java code, with final outputs ingested into Hive for analytics and operational use."
                    contentType="list"
                    id="job-description-anthem-bde-dw"
                    className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Credit Suisse - Data Engineer */}
          <div className="timeline-item">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <EditableContent
                      initialContent="Data Engineer"
                      contentType="title"
                      id="job-title-cs"
                      className="text-xl font-semibold text-resume-primary"
                    />
                    <Badge variant="outline" className="text-sm font-normal">
                      <EditableContent
                        initialContent="Jun 2017 - Apr 2018"
                        contentType="text"
                        id="job-period-cs"
                      />
                    </Badge>
                  </div>
                  <EditableContent
                    initialContent="Credit Suisse, Morrisville, North Carolina, United States"
                    contentType="text"
                    id="job-company-cs"
                    className="text-resume-secondary font-medium"
                  />
                  <EditableContent
                    initialContent="• Built and deployed ML pipelines to assess corporate carbon emissions using ESG data from Sustainalytics and Morningstar. Integrated Scope 1–3 emissions into predictive models and developed Tableau dashboards to support ESG investment decisions and sustainability reporting."
                    contentType="list"
                    id="job-description-cs"
                    className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Blue Cross Blue Shield - Big Data Developer */}
          <div className="timeline-item">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <EditableContent
                      initialContent="Big Data Developer"
                      contentType="title"
                      id="job-title-bcbs"
                      className="text-xl font-semibold text-resume-primary"
                    />
                    <Badge variant="outline" className="text-sm font-normal">
                      <EditableContent
                        initialContent="Oct 2016 - Jun 2017"
                        contentType="text"
                        id="job-period-bcbs"
                      />
                    </Badge>
                  </div>
                  <EditableContent
                    initialContent="Blue Cross and Blue Shield of Illinois, Montana, New Mexico, Oklahoma & Texas, Greater Chicago Area"
                    contentType="text"
                    id="job-company-bcbs"
                    className="text-resume-secondary font-medium"
                  />
                  <EditableContent
                    initialContent="• Worked on onboarding and processing healthcare data for the BCBS platform using Cloudera on-prem. Built PIG-based data pipelines to transform EBCDIC-encoded claims data and implemented data quality checks with audit tracking in HBase. Extracted data via Sqoop and ensured operational monitoring using Kibana and Grafana."
                    contentType="list"
                    id="job-description-bcbs"
                    className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Programmed - Software Developer */}
          <div className="timeline-item">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <EditableContent
                      initialContent="Software Developer"
                      contentType="title"
                      id="job-title-programmed"
                      className="text-xl font-semibold text-resume-primary"
                    />
                    <Badge variant="outline" className="text-sm font-normal">
                      <EditableContent
                        initialContent="Aug 2015 - Jun 2016"
                        contentType="text"
                        id="job-period-programmed"
                      />
                    </Badge>
                  </div>
                  <EditableContent
                    initialContent="Programmed, Sydney, Australia"
                    contentType="text"
                    id="job-company-programmed"
                    className="text-resume-secondary font-medium"
                  />
                  <EditableContent
                    initialContent="• Contributed to building an internal employee scheduling system in Java, supporting shift management for field staff. Developed modules for user authentication, data validation, and conflict checks using JSP/Servlets and MySQL. Worked in an Agile environment, collaborating with senior developers to implement MVC architecture and gaining hands-on experience with Git and team-based development practices."
                    contentType="list"
                    id="job-description-programmed"
                    className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impératif Call Centre Partners - Software Engineer Intern */}
          <div className="timeline-item">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <EditableContent
                      initialContent="Software Engineer Intern"
                      contentType="title"
                      id="job-title-imperatif"
                      className="text-xl font-semibold text-resume-primary"
                    />
                    <Badge variant="outline" className="text-sm font-normal">
                      <EditableContent
                        initialContent="Feb 2014 - Jun 2014"
                        contentType="text"
                        id="job-period-imperatif"
                      />
                    </Badge>
                  </div>
                  <EditableContent
                    initialContent="Impératif Call Centre Partners, Brisbane, Queensland, Australia"
                    contentType="text"
                    id="job-company-imperatif"
                    className="text-resume-secondary font-medium"
                  />
                  <EditableContent
                    initialContent="• Developed Python-based web scrapers using Beautiful Soup and urllib to extract lead data from business directories, streamlining prospect intake for Salesforce via Clicktools integration."
                    contentType="list"
                    id="job-description-imperatif"
                    className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

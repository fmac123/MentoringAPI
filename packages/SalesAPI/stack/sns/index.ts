import * as sns from 'aws-cdk-lib/aws-sns';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { SalesTopicArnCfnOutput } from '../applicationConstants';


export function createSalesTopic(scope: Construct) {
  return new sns.Topic(scope, 'salesTopic', {
    topicName: 'salesTopic',
  })
}
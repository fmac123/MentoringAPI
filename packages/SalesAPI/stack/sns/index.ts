import * as sns from 'aws-cdk-lib/aws-sns';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { SalesTopicArnCfnOutput } from '../applicationConstants';


export function createSalesTopic(scope: Construct, lambdaArn: string) {
  const topic = new sns.Topic(scope, 'salesTopic', {
    topicName: 'salesTopic',
  })

  const snsTopicPolicy = new iam.PolicyStatement({
    actions: ['sns:publish'],
    resources: [lambdaArn],
    principals: [new iam.ServicePrincipal('lambda.amazonaws.com')],
  });

  topic.addToResourcePolicy(snsTopicPolicy);

  new cdk.CfnOutput(scope, 'salesTopicArn', {
    value: topic.topicArn,
    exportName: SalesTopicArnCfnOutput,
  })


}
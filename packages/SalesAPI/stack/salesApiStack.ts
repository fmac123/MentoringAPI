import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import { createSaleLambda } from './lambdas';
import { createSalesApi } from './apiGateway'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { createSaleLambda } from './lambdas';
import { createSalesTopic } from './sns';
import { SalesTopicArnCfnOutput } from './applicationConstants';


export class SalesApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const topic = createSalesTopic(this)
    const saleLambda = createSaleLambda(this, topic.topicArn)
    createSalesApi(this, saleLambda)

    new cdk.CfnOutput(this, 'salesTopicArn', {
      value: topic.topicArn,
      exportName: SalesTopicArnCfnOutput,
    })
  }
}

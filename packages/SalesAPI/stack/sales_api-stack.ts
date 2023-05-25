import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import { createSaleLambda } from './lambdas';
import { createSalesApi } from './apiGateway'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { createSaleLambda } from './lambdas';
import { createSalesTopic } from './sns';


export class SalesApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const saleLambda = createSaleLambda(this)
    createSalesApi(this, saleLambda)
    createSalesTopic(this, saleLambda.functionArn)

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'SalesApiQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}

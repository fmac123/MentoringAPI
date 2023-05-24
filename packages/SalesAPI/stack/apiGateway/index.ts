import * as apiGateway from "aws-cdk-lib/aws-apigateway"
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda"


export function createSalesApi(scope: Construct, handler: lambda.Function): apiGateway.RestApi {
    const salesApiGateway = new apiGateway.RestApi(scope, 'salesApi', {
        restApiName: 'salesApi',
        description: 'test api for mentoring sessions'
    })

    const createSaleIntegration = new apiGateway.LambdaIntegration(handler, {
        requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    })

    salesApiGateway.root.addMethod("POST", createSaleIntegration)

    return salesApiGateway

}
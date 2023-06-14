import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { createProductsTable } from '../src/handlers/endpoints/getAllProducts';
import { createGetAllProductsLambda, createSalesEventConsumerLambda } from './lambdas';

export class ProductsApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const productsTable = createProductsTable(this)

    const allProductsLambda = createGetAllProductsLambda(this)

    const salesEventConsumerLambda = createSalesEventConsumerLambda(this)



  }
}

import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { ProductsTable } from '../../../stack/applicationConstants';


export function createProductsTable(scope: Construct) {
  new dynamodb.Table(scope, 'ProductsTable', {
    partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    tableName: ProductsTable,
  });
}
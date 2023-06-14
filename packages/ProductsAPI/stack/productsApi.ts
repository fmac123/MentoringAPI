#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ProductsApiStack } from './productsApiStack';

const app = new cdk.App();
new ProductsApiStack(app, 'Fraser-ProductsApiStack', {});
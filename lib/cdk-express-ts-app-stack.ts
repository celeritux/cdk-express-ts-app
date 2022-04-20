import { Stack, StackProps } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns'
import * as ecs from 'aws-cdk-lib/aws-ecs'

import { Construct } from 'constructs';

export class CdkExpressTsAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'Vpc', {
      maxAzs: 2,
      natGateways: 2
    });

    new ec2.CfnVPC(this, 'mycfnvpc', {
      cidrBlock: '10.0.0.0/16'
    })

    new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'EcsService', {
      vpc: vpc,
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset('app'),
        containerPort: 80
      }
    })
  }
}

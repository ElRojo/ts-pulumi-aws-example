import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import { s3ConfigOpts } from '../types';

class S3 extends pulumi.ComponentResource {
  bucket: aws.s3.Bucket;

  stack: string;

  constructor(opts: s3ConfigOpts, componentOpts?: pulumi.ComponentResourceOptions) {
    super('pkg:index:s3', `s3-${opts.name}`, {}, componentOpts);
    this.createS3Bucket(opts);
  }

  createS3Bucket(opts: s3ConfigOpts) {
    this.bucket = new aws.s3.Bucket(`${opts.name}`, {
      acl: opts.aclSetting,
      bucket: opts.name,
      bucketPrefix: 'pulumi-',
      forceDestroy: opts.forceDestroy,
      tags: {
        Environment: pulumi.getStack(),
        name: opts.name
      }
    });
  }
}
export default S3;

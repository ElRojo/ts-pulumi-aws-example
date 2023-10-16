import { awsModulesConfig, s3ConfigOpts } from './types';
import AwsConfig from './modules/awsConfig';

const s3Bucket: s3ConfigOpts = { name: 'TestBucket', aclSetting: 'private', forceDestroy: true };
const configuration: awsModulesConfig = { S3: s3Bucket };

new AwsConfig(configuration);

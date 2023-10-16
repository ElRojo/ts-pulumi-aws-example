import S3 from './s3';
import { awsModulesConfig } from '../types';

class AwsConfig {
  awsModules: awsModulesConfig;

  constructor(awsModules: awsModulesConfig) {
    this.awsModules = awsModules;
    this.process();
  }

  process() {
    if (this.awsModules.S3) {
      new S3(this.awsModules.S3);
    }
  }
}

export default AwsConfig;

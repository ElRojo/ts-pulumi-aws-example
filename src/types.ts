export interface s3ConfigOpts {
  name: string;
  aclSetting: string;
  forceDestroy: boolean;
}

export interface awsModulesConfig {
  S3: s3ConfigOpts;
}

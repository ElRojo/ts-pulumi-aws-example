## Pulumi AWS Example

This repository is an example of using TS with Pulumi to build AWS infrastructure. This was one of the first tasks I was given to learn with. 

The general idea is that one can build out classes for different AWS resources and add them to the `process()` function in `awsConfig.ts`. The types are defined in `types.ts` and then in `index.ts` the consumer of this project will define the infrastructure as an object which will be passed in to the constructor of `AwsConfig`. 
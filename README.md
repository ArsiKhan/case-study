# OVERVIEW:

AWS login including the secret key and access key have been shared already. This would
be useful in accessing k8s cluster through api calls. I’ve also sent the config file. You can
use it by configuring an aws profile on your system by the name ‘eks-test’ using the access and
secret key.

https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html

All the vms use eks.pem ssh key file.
I’ve configured Node Port 30001 since the nodeport range must lie between ( 30000-32767) and
this being a managed cluster, I didn’t had the access to change the setting on master node.

https://kubernetes.io/docs/concepts/services-networking/service/

All the vms are in us-east-1.

# MONGO CONFIGURATION:
You can find mongo in AWS by the name MongoVM. It has a test database for node app to use with
the following credentials:
```
USERNAME: test
PASSWORD: password
```
An admin user is also created:
```
USERNAME: admin
PASSWORD: password
```
Data dir and Log dir are mounted on /data and /log and
Mongo version is 4.4

# K8S CONFIGURATION:
All the resources are deployed in the namespace ‘bykea’. Since security is of high priority for this
task the credentials for the node-app are being fetched by secrets and are base64 encoded.
Both the node app replicas are on different worker nodes and have a QOS of burstable.
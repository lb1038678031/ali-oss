
const policy2Str = require('../utils/policy2Str');
const isObject = require('../utils/isObject');

const proto = exports;
/**
 * putBucketPolicy
 * @param {String} bucketName - bucket name
 * @param {Object} policy - bucket policy
 * @param {Object} options
 */

proto.putBucketPolicy = async function putBucketPolicy(bucketName, policy, options = {}) {
  this._checkBucketName(bucketName);

  if (!isObject(policy)) {
    throw new Error('policy is not Object');
  }
  const params = this._bucketRequestParams('PUT', bucketName, 'policy', options);
  params.content = policy2Str(policy);

  const result = await this.request(params);
  return {
    status: result.status,
    res: result.res
  };
};
import FunctionSchema from './FunctionSchema.js';
import ObjectSchema from './ObjectSchema.js';
import StringSchema from './StringSchema.js';

export default class Validator {
  string() {
    const validator = (value) => typeof value === 'string';
    return new StringSchema([validator]);
  }

  function() {
    return new FunctionSchema([(val) => typeof val === 'function']);
  }

  object() {
    return new ObjectSchema();
  }
}

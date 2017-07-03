import Validator from 'is_js';
import { isEmpty } from 'lodash';

export default function validateInput(data) {
  let errors = {};

  if (Validator.empty(data.emp_id)) {
    errors.emp_id = 'Employee ID is required';
  }
  
  if (Validator.empty(data.name)) {
    errors.name = 'Employee Name is required';
  }

  if (Validator.empty(data.department)) {
    errors.department = 'Department is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
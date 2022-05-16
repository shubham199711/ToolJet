import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const orgEnvironmentVariableService = {
  getVariables,
  create,
  update,
  deleteVariable,
};

function getVariables() {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`${config.apiUrl}/organization_variables`, requestOptions).then(handleResponse);
}

function create(variable_name, value, encrypted) {
  const body = {
    variable_name,
    value,
    encrypted,
  };

  const requestOptions = { method: 'POST', headers: authHeader(), body: JSON.stringify(body) };
  return fetch(`${config.apiUrl}/organization_variables`, requestOptions).then(handleResponse);
}

function update(id, variable_name, value) {
  const body = {
    variable_name,
    value,
  };

  const requestOptions = { method: 'PATCH', headers: authHeader(), body: JSON.stringify(body) };
  return fetch(`${config.apiUrl}/organization_variables/${id}`, requestOptions).then(handleResponse);
}

function deleteVariable(id) {
  const requestOptions = { method: 'DELETE', headers: authHeader() };
  return fetch(`${config.apiUrl}/organization_variables/${id}`, requestOptions).then(handleResponse);
}
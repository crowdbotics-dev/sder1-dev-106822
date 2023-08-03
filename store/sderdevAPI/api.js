import axios from "axios"
const sderdevAPI = axios.create({
  baseURL: "https://sder1-dev-106822.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return sderdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_cder_list(payload) {
  return sderdevAPI.get(`/api/v1/cder/`)
}
function api_v1_cder_create(payload) {
  return sderdevAPI.post(`/api/v1/cder/`, payload)
}
function api_v1_cder_retrieve(payload) {
  return sderdevAPI.get(`/api/v1/cder/${payload.id}/`)
}
function api_v1_cder_update(payload) {
  return sderdevAPI.put(`/api/v1/cder/${payload.id}/`, payload)
}
function api_v1_cder_partial_update(payload) {
  return sderdevAPI.patch(`/api/v1/cder/${payload.id}/`, payload)
}
function api_v1_cder_destroy(payload) {
  return sderdevAPI.delete(`/api/v1/cder/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return sderdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return sderdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return sderdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return sderdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return sderdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return sderdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return sderdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return sderdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return sderdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return sderdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return sderdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return sderdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return sderdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_cder_list,
  api_v1_cder_create,
  api_v1_cder_retrieve,
  api_v1_cder_update,
  api_v1_cder_partial_update,
  api_v1_cder_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}

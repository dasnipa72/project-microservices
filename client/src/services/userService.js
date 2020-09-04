import http from "./httpService";
import { apiUrl, apiUrlForModel } from "../config.json";

const apiEndpoint = apiUrl + "/users";
const apiEndpointForModel=apiUrlForModel + "/predict";

export function register(user) {
  return http.post(apiEndpoint, {
    username: user.username,
    email: user.email,
    password: user.password
  });
}

export function resetPassword(email) {
  return http.post(`${apiEndpoint}/reset_password/${email}`, {});
}
export function resetUpdatePassword(id, token, password) {
  return http.post(`${apiEndpoint}/receive_new_password/${id}/${token}`, {
    password: password
  });
}
export function predict(modelData) {
  return http.post( apiUrlForModel, {
    AverageAmount_transaction_day: modelData.AverageAmount_transaction_day,
    Transaction_amount: modelData.Transaction_amount,
    IsDeclined: modelData.IsDeclined,
    TotalNumberOfDeclines_day: modelData.TotalNumberOfDeclines_day,
    isForeignTransaction: modelData.isForeignTransaction,
    isHighRiskCountry: modelData.isHighRiskCountry,
    Daily_chargeback_avg_amt: modelData.Daily_chargeback_avg_amt,
    six_month_avg_chbk_amt: modelData.six_month_avg_chbk_amt,
    six_month_chbk_freq:modelData.six_month_chbk_freq
  });
}
import { environment } from '../src/environments/environment';

const baseUrl = environment.apiBaseUrl;

export class RestApiConstComponent {

  public static REGISTER_USER = `${baseUrl}/register`;
  public static LOGIN_USER = `${baseUrl}/login`;
  public static CUSTOMERS = `${baseUrl}/employees`;
  public static POST_UPDATE_ORDER_STATUS = `${baseUrl}/tretail-authentication-service/dspOrder/updateOrderStatus`;
  public static POST_CANCEL_ORDER_REASONS = `${baseUrl}/tretail-authentication-service/dspOrder/getCancelReasons`;
  public static WEB_SOCKET = `${baseUrl}/order-management-service/socket`;
  public static GET_ORDER_HISTORY_LIST = `${baseUrl}/order-search-service/orderSearch/getAllOrdersHistory`;


}
